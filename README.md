# about

about.sukhi.social — sukhi-social がつくろうとしている、人があつまれて、さらっと訪ねられる場所の入口です。

スローガンは「あたたかいみんなといっしょに」。日本語(`/`)と韓国語(`/ko/`)で、玄関・sukhi-social のこと・atfedi.de とのこと、の 3 ページと 404 があります。

## つかいかた

Node は 22.23.4 以上(sukhi-fedi の `mise.toml` では 24.22.1)。

```sh
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # dist/ に静的ファイル
pnpm check    # astro check
```

- 言葉は `src/content.ts` にまとめてあります(ja が正本、ko は同じ形で)。
- ログインのリンク先 `LOGIN_URL` は仮です。sukhi.social が動いたら差し替えます。
- Astro にした理由: 静的な紹介ページで動く部品がなく、必要なら Svelte の島をあとから足せるためです。

ライセンスは AGPL-3.0-or-later です。
