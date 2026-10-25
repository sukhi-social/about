// SPDX-License-Identifier: AGPL-3.0-or-later
//
// src/generated/licenses.json を、いま入っているものから作る。
//   node scripts/gen-licenses.mjs      (pnpm install のあとに)
//
// `pnpm licenses list --json` が数えたパッケージを、
//   fonts … ページといっしょに配っているもの(@fontsource/*)
//   build … つくるときだけ使うもの(Astro とその土台、型の検査など。配らない)
// に分けて、名前・版・ライセンス・著作権表示(各パッケージ自身の LICENSE にある行)を書き出す。
// 同じ内容でも並びが変わらないよう、名前と版で並べる。
import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync, writeFileSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));

// 「Copyright (c) 2020 だれか」のように始まる行だけを、著作権表示として拾う。
// ライセンス本文のなかの "the copyright owner…" のような文は拾わない。
function noticesFromText(text) {
  const found = [];
  for (const raw of text.split('\n')) {
    const line = raw.replace(/^[\s*#>/-]+/, '').trim();
    if (!/^(copyright\s*(\(c\)|©)|copyright\s+\d{4}|\(c\)\s*\d{4}|©)/i.test(line)) continue;
    if (/[[{<]?(yyyy|year)[\]}>]?|owner|holder|notice\b/i.test(line)) continue;
    const who = line
      .replace(/^copyright\s*/i, '')
      .replace(/\(c\)|©/gi, ' ')
      .replace(/\s+/g, ' ')
      .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1') // [名前](URL) は、名前だけ
      .replace(/\s*\(https?:[^)]*\)/g, '')
      .replace(/\s*<[^>]*@[^>]*>/g, '') // 個人のメールアドレスは載せない
      .replace(/\s*\([^)]*@[^)]*\)/g, '')
      .replace(/[.,;]?\s*all rights reserved\.?$/i, '')
      .trim()
      .replace(/\.$/, '');
    if (/^[\d\s,.-]*$/.test(who) || who.length > 160) continue;
    const c = `© ${who}`;
    if (!found.includes(c)) found.push(c);
  }
  return found;
}

function copyrightLines(dir) {
  if (!existsSync(dir)) return [];
  const found = [];
  for (const f of readdirSync(dir)) {
    if (!/^(licen[sc]e|copying|notice)/i.test(f)) continue;
    let text;
    try {
      text = readFileSync(join(dir, f), 'utf8');
    } catch {
      continue;
    }
    for (const c of noticesFromText(text)) if (!found.includes(c)) found.push(c);
  }
  return found.slice(0, 3);
}

// フォントの LICENSE は、いちばん上に著作権の行がある(「Copyright 2014 … Authors (URL) ファイル名.ttf: …」)。
// 最初のひとつぶんだけを取る。
function fontCopyright(dir) {
  const f = join(dir, 'LICENSE');
  if (!existsSync(f)) return [];
  const first = readFileSync(f, 'utf8').split('\n')[0];
  const head = first
    .split(/\s+[\w[\]-]+\.ttf:/)[0]
    .replace(/\s*\(https?:[^)]*\)/g, '')
    .replace(/^\(c\)\s*/i, '')
    .replace(/[.,;]?\s*all rights reserved\.?$/i, '')
    .trim();
  return head ? [`© ${head.replace(/^copyright\s*/i, '').trim()}`] : [];
}

// OS ごとの実行ファイル版(…-linux-x64 など)は、同じライセンスの本体にまとめる。
// (どの OS で作っても、同じ一覧になるように。)
const platform = /-(linux|darwin|win32|freebsd|android)-[\w-]+$/;

const raw = JSON.parse(
  execFileSync('pnpm', ['licenses', 'list', '--json'], { cwd: root, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 })
);

const fonts = [];
const build = [];
for (const [license, pkgs] of Object.entries(raw)) {
  for (const p of pkgs) {
    p.versions.forEach((version, i) => {
      const dir = p.paths[i] ?? p.paths[0];
      const isFont = p.name.startsWith('@fontsource/');
      const entry = {
        name: p.name.replace(platform, ''),
        version,
        license,
        href: p.homepage || `https://www.npmjs.com/package/${p.name}`,
        copyright: isFont ? fontCopyright(dir) : copyrightLines(dir)
      };
      if (!entry.copyright.length && p.author) entry.copyright = [`© ${String(p.author).replace(/\s*<[^>]*>/, '')}`];
      const list = isFont ? fonts : build;
      if (!list.some((e) => e.name === entry.name && e.version === entry.version)) list.push(entry);
      // フォントは、ライセンス本文(OFL)も、そのまま配る。
      if (p.name.startsWith('@fontsource/') && existsSync(join(dir, 'LICENSE'))) {
        copyFileSync(join(dir, 'LICENSE'), join(root, 'public/licenses/fonts', `${p.name.split('/')[1]}-OFL.txt`));
      }
    });
  }
}
const byName = (a, b) => a.name.localeCompare(b.name) || a.version.localeCompare(b.version);
fonts.sort(byName);
build.sort(byName);
writeFileSync(join(root, 'src/generated/licenses.json'), JSON.stringify({ fonts, build }, null, 2) + '\n');
console.log(`fonts ${fonts.length}, build ${build.length}`);
