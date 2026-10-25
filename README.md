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

ライセンスは AGPL-3.0-or-later です。
