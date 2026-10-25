// SPDX-License-Identifier: AGPL-3.0-or-later
// 道具箱の道具を「役わり」で分ける。上から順に見て、最初に合ったところに入る。
export type ToolCategory = 'build' | 'text' | 'style' | 'check' | 'editor' | 'native' | 'small';

const RULES: [ToolCategory, RegExp][] = [
  ['build', /^@astrojs\/(compiler|internal|telemetry)/],
  ['native', /^@(napi-rs|emnapi|tybys|rolldown\/binding|img\/sharp-libvips)|^detect-libc$/],
  ['style', /^(lightningcss|postcss|csso|css-|svgo|sharp|@img\/sharp|@capsizecss|fontace|fontkitten|unifont|mdn-data|@capsizecss)|^@capsizecss/],
  ['check', /^(typescript|@types\/|@astrojs\/check|ajv|zod|get-tsconfig|tsconfig|@oxc-project)/],
  ['editor', /^(@volar|volar-|vscode-|@vscode|@emmetio|emmet|yaml-language-server|@astrojs\/(language-server|yaml2ts|astro2tsx)|request-light|typesafe-path|path-browserify|muggle-string|jsonc-parser|prettier|typescript-auto-import-cache)/],
  ['text', /^(@astrojs\/(markdown|prism)|@bruits|@shikijs|shiki|prismjs|oniguruma|regex|unified|vfile|bail|trough|is-plain-obj|extend|mdast|hast|micromark|unist|@types\/(mdast|hast|unist)|nlcst|retext|property-information|space-separated|comma-separated|character-entities|html-|entities|ultrahtml|stringify-entities|trim-lines|ccount|devlop|zwitch|dequal|github-slugger|sax|satteri|yaml|smol-toml|@ungap|devalue)/],
  ['build', /^(astro$|@astrojs\/|vite|vitefu|rolldown|@rolldown|@babel|magic|es-module-lexer|unstorage|h3|crossws|cookie|ofetch|node-|ufo|defu|destr|iron-webcrypto|radix3|uncrypto|undici|http-cache|mrmime|@oslojs|source-map-js|@jridgewell|tinyglobby|fdir|picomatch|chokidar|readdirp|anymatch)/]
];

export function categoryOf(name: string): ToolCategory {
  for (const [id, re] of RULES) if (re.test(name)) return id;
  return 'small';
}

export const CATEGORY_ORDER: ToolCategory[] = ['build', 'text', 'style', 'editor', 'check', 'native', 'small'];
