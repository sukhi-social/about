# about

about.sukhi.social — sukhi-social がつくろうとしている、人があつまれて、さらっと訪ねられる場所の入口です。

スローガンは「あたたかいみんなといっしょに」。日本語(`/`)・English(`/en/`)・韓国語(`/ko/`)で、玄関・sukhi-social のこと・atfedi.de とのこと、の 3 ページと 404 があります。

## つかいかた

Node は 22.23.4 以上(sukhi-fedi の `mise.toml` では 24.22.1)。

```sh
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # dist/ に静的ファイル
pnpm check    # astro check
```

- 言葉は `src/content.ts` にまとめてあります(ja が正本、en・ko は同じ形で)。
- 言語えらびは `src/layouts/LangPicker.astro`(ドロップダウン。いまの言語が見えて、各言語はその言語自身の文字で並ぶ)。言語を足すときは、`content.ts` の `Locale`・`BASES`・`LOCALES` と `copy`、`src/pages/<言語>/` を足す。
- ログインのボタンは、いまは非表示です(`src/content.ts` の `SHOW_LOGIN`)。**TODO**: インスタンス(sukhi.social)が上がったら `SHOW_LOGIN = true` にして、`LOGIN_URL`(いまは仮)も本当のリンク先に直す。
- Astro にした理由: 静的な紹介ページで動く部品がなく、必要なら Svelte の島をあとから足せるためです。

ライセンス: ソースコードは AGPL-3.0-or-later、ページの内容(文章など)は CC BY 4.0 です。使うときは、出どころ(sukhi-social / about.sukhi.social)を書いて、直したときは、直したと書いてください。

## ライセンスのページ

`/licenses/`(`/en/licenses/`・`/ko/licenses/`)は、このサイトが使っているソフトウェアの一覧です。一覧は `src/generated/licenses.json` から出していて、依存を足した・上げたときは、`pnpm install` のあとに作り直します。

```sh
node scripts/gen-licenses.mjs
```

フォントのライセンス全文(OFL)も、同じスクリプトが `public/licenses/fonts/` に写します。

## TODO

spec.sukhi.social(仕様の置き場)まわり。置き場の TODO は sukhi-fedi の `TODO.md` にあります。

- [ ] spec.sukhi.social へのリンクを置く(「実装している仕様」の入口)。
- [ ] 実装済みの仕様の一覧(sukhi-fedi の `docs/specs/README.md` の表)を、読みやすく見せる。
- [ ] 仕様ページでは STE-100 の英文と、日本語の「こんな意図で書いたよ」欄を並べる。日本語欄は規範ではないと見た目で分かるようにして、畳めるようにする。
- [ ] 識別子の URL はカテゴリなしが正規形。コピーされてもカテゴリ入りが混ざらないよう、案内を書く。
