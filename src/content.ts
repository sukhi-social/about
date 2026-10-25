// SPDX-License-Identifier: AGPL-3.0-or-later
//
// このページの言葉は、ここにまとめてある。ja を正本に、ko は同じ形で。
// 文体は web/ の locales に合わせて、やさしく(ja)・해요체(ko)。

// ログインのリンク先。sukhi.social で sukhi-fedi を動かすようになったら、
// ここだけを本当の場所に差し替える(いまは仮)。
export const LOGIN_URL = 'https://sukhi.social/login';

// TODO: インスタンス(sukhi.social)が上がったら true にして、ログインのボタンを出す。
//       そのとき LOGIN_URL も本当のリンク先か確かめる。
export const SHOW_LOGIN = false;

export const ORG_URL = 'https://github.com/sukhi-social';
export const FEDI_REPO_URL = 'https://github.com/sukhi-social/sukhi-fedi';
export const ATFEDI_URL = 'https://atfedi.de';
export const ABOUT_REPO_URL = 'https://github.com/sukhi-social/about';

// 支援の受け口。sukhi-fedi の elixir/priv/legal/support.*.md と同じもの。
const LIBERAPAY_URL = 'https://liberapay.com/sukhi-social/donate';
const SPONSORS_URL = 'https://github.com/sponsors/nyanrus';
const FAIRY_URL = 'https://fairy.hada.io/@sukhi-social';
const CONTACT_MAIL = 'hinata@natadeco.com';
const CONTACT_AP = '@kuro_admin@sukhi.f3liz.casa';

export type Locale = 'ja' | 'ko' | 'en';

// 各言語の置き場所(日本語が正本で、ルート)と、その言語自身の文字での名前。
export const BASES: Record<Locale, string> = { ja: '/', ko: '/ko/', en: '/en/' };
// 言語のおすすめ(ブラウザの言語が、いまのページとちがうとき)。
// 文は「すすめる言語」で書く。
export const SUGGEST: Record<Locale, { text: string; go: string; close: string }> = {
  ja: { text: '日本語でも読めます。', go: '日本語で見る', close: '閉じる' },
  en: { text: 'This site is also available in English.', go: 'View in English', close: 'Close' },
  ko: { text: '한국어로도 볼 수 있어요.', go: '한국어로 보기', close: '닫기' }
};

export const LOCALES: { code: Locale; name: string }[] = [
  { code: 'ja', name: '日本語' },
  { code: 'en', name: 'English' },
  { code: 'ko', name: '한국어' }
];
export type PageKey = 'gate' | 'place' | 'projects' | 'atfedi' | 'support' | 'licenses';

interface Project {
  name: string;
  href: string;
  text: string;
}

interface Door {
  key: Exclude<PageKey, 'gate'>;
  title: string;
  text: string;
}

interface Link {
  name: string;
  href: string;
  note?: string;
}

interface Block {
  heading: string;
  text: string[];
}

interface Copy {
  siteName: string;
  slogan: string;
  login: string;
  langLabel: string;
  navLabel: string;
  nav: Record<PageKey, string>;
  footer: string;
  notFound: { title: string; text: string; back: string };
  gate: { title: string; description: string; lead: string; doorsHeading: string; doors: Door[] };
  place: { title: string; description: string; heading: string; blocks: Block[] };
  projects: {
    title: string;
    description: string;
    heading: string;
    lead: string;
    items: Project[];
    techHeading: string;
    techText: string;
    more: string;
  };
  support: {
    title: string;
    description: string;
    heading: string;
    thanks: string[];
    donateHeading: string;
    donate: Link[];
    reachHeading: string;
    reachText: string;
    reach: { label: string; value: string; href?: string }[];
  };
  licenses: {
    title: string;
    description: string;
    heading: string;
    intro: string;
    selfHeading: string;
    self: string;
    selfLink: string;
    shipHeading: string;
    ship: string[];
    oflText: string;
    buildHeading: string;
    build: string;
    thanks: string[];
  };
  atfedi: {
    title: string;
    description: string;
    heading: string;
    what: string[];
    facts: string[];
    relHeading: string;
    rel: string[];
    open: string;
  };
}

export const copy: Record<Locale, Copy> = {
  ja: {
    siteName: 'sukhi',
    slogan: 'あたたかいみんなといっしょに',
    login: 'ログイン',
    langLabel: '言語',
    navLabel: 'ページ',
    nav: { gate: '玄関', place: 'sukhi-social のこと', projects: 'プロジェクト', atfedi: 'atfedi.de とのこと', support: '支援', licenses: 'ライセンス' },
    footer: 'sukhi は、sukhi-social がつくっています。',
    notFound: {
      title: 'あれれ、ここには何もないみたいです',
      text: '道をまちがえても大丈夫。玄関までいっしょに戻りましょう。',
      back: '玄関にもどる'
    },
    gate: {
      title: 'sukhi — あたたかいみんなといっしょに',
      description: 'sukhi は、人があつまれて、ふらっと立ち寄れる、和やかな場所です。',
      lead: 'sukhi-social は、人があつまれて、さらっと立ち寄れる、和やかな場所です。ずっといても、ちょっと顔を出すだけでも、大丈夫。いそがず、ゆっくり見ていってください。',
      doorsHeading: 'どこから見ましょうか',
      doors: [
        { key: 'place', title: 'sukhi-social のこと', text: 'どんな場所で、どんな気持ちでひらいているのかを、書きました。' },
        { key: 'projects', title: 'プロジェクト', text: 'この場所のために、いまつくっているものを紹介します。' },
        { key: 'atfedi', title: 'atfedi.de とのこと', text: '「はじめて」の人のための道案内、atfedi.de と sukhi のかんけいです。' },
        { key: 'support', title: '支援', text: 'sukhi を続けていくための、あたたかいお気持ちの受け口です。' }
      ]
    },
    place: {
      title: 'sukhi-social のこと — sukhi',
      description: 'sukhi-social は、人があつまれて、さらっと立ち寄れる、和やかな場所です。',
      heading: 'sukhi-social のこと',
      blocks: [
        {
          heading: 'どんな場所？',
          text: [
            'sukhi-social は、人があつまれて、さらっと立ち寄れる、和やかな場所です。',
            'ずっといてもいいし、ちょっと顔を出すだけでもいい。どちらも、ここでは「ふつう」です。'
          ]
        },
        {
          heading: '大切にしていること',
          text: [
            'あたたかく、いそがないこと。わからなくても、まよっても、大丈夫なこと。',
            '「あたたかいみんなといっしょに」が、いちばん最初の約束です。'
          ]
        },
        {
          heading: 'どこにあるの？',
          text: [
            'これから、sukhi.social でひらく予定です。はじめて来た人も、ここ(about)で様子を見てから、ログインできます。',
            'sukhi は「フェディバース」の仲間です。フェディバースは、いろいろな SNS やサービスが、おたがいにつながっている世界のこと。むずかしい知識は、なくても大丈夫です。'
          ]
        },
        {
          heading: 'なまえのこと',
          text: [
            'sukhi は、サンスクリット語などの「sukhī」から。「しあわせな」という意味です。',
            'もうひとつ、ちいさなひみつ。「好」という字のなかに、「くろ」がかくれています。'
          ]
        }
      ]
    },
    projects: {
      title: 'プロジェクト — sukhi',
      description: 'sukhi-social が、この場所のためにつくっているものの紹介です。',
      heading: 'プロジェクト',
      lead: 'この場所を支えるために、sukhi-social ではいろいろなものをつくっています。ぜんぶ公開していて、だれでも中を見られます。むずかしそうに見えたら、ひとことの説明だけ読んでもらえれば大丈夫です。',
      items: [
        { name: 'sukhi-fedi', href: FEDI_REPO_URL, text: 'sukhi.social を動かす、SNS のしくみ(ソフトウェア)。Mastodon や Misskey のアプリとも、つなぎやすいようにつくっています。' },
        { name: 'atfedi.de', href: ATFEDI_URL, text: 'フェディバースの、はじめてのガイド。道具のカタログもあります。くわしくは「atfedi.de とのこと」で。' },
        { name: 'mazemaze-api', href: 'https://github.com/sukhi-social/mazemaze-api', text: 'Misskey や Mastodon などの SNS につなぐアプリを、つくりやすくするための部品づくり。' },
        { name: 'ojak-ex', href: 'https://github.com/sukhi-social/ojak-ex', text: 'SNS どうしがやりとりするときの「署名」など、裏方のしくみを扱う部品(Elixir という言語向け)。' }
      ],
      techHeading: 'プログラムが読めるかたへ',
      techText: 'ソースコードは GitHub で公開しています。気になるものがあれば、のぞいてみてください。',
      more: 'GitHub で ぜんぶ見る'
    },
    support: {
      title: '支援 — sukhi',
      description: 'sukhi を続けていくための、寄付やおたよりの受け口です。',
      heading: '支援',
      thanks: [
        'sukhi に関心を寄せていただき、ありがとうございます。',
        'いただいたお気持ちは、sukhi を続けていくために、大切に使わせてもらいます。むりのない、できるときだけで、大丈夫です。'
      ],
      donateHeading: '寄付',
      donate: [
        { name: 'Liberapay', href: LIBERAPAY_URL },
        { name: 'GitHub Sponsors', href: SPONSORS_URL },
        { name: 'Fairy by hada.io', href: FAIRY_URL, note: '韓国の方向けです。' }
      ],
      reachHeading: 'おたよりも、うれしいです',
      reachText: '寄付のかわりに、ひとこと届けてもらうのも、大きな助けになります。',
      reach: [
        { label: 'メール', value: CONTACT_MAIL, href: `mailto:${CONTACT_MAIL}` },
        { label: 'ActivityPub', value: CONTACT_AP }
      ]
    },
    licenses: {
      title: 'ライセンス — sukhi',
      description: 'このサイト(about)が使っているソフトウェアと、そのライセンスです。',
      heading: 'ライセンス',
      intro: 'ここには、このサイト(about)が使っているソフトウェアを載せています。使わせてもらっているものへの、感謝のページです。',
      selfHeading: 'このサイトのこと',
      self: 'このサイトのソースコードは、AGPL-3.0-or-later のもとで、GitHub に公開しています。',
      selfLink: 'GitHub で見る',
      shipHeading: 'ページといっしょにとどけているもの',
      ship: [
        '開いているこのページに届くのは、3 つのフォントと、小さな自作のスクリプトだけです。',
        'フォントは、このサイトから直接とどけています。Google Fonts のような外のサービスには、つながりません。'
      ],
      oflText: 'ライセンス全文(SIL Open Font License 1.1)',
      buildHeading: 'つくるときに使っているもの',
      build: 'ページをつくるときにだけ使うものです。できあがったページには、入っていません。',
      thanks: [
        'この感謝は、譲渡できません。',
        'このソフトウェアは、関わってくださったみなさんの、続いていく貢献があって成り立っています。ここに、小さくて、取り消せなくて、無保証で、あるがままの「ありがとう」を贈ります。'
      ]
    },
    atfedi: {
      title: 'atfedi.de とのこと — sukhi',
      description: 'フェディバースの、はじめてのガイド atfedi.de と、sukhi のかんけいについて。',
      heading: 'atfedi.de とのこと',
      what: [
        'atfedi.de は、フェディバースの、はじめてのガイドです。「フェディバースって何？」から、使うための道具、つくる人のための道具まで、はじめて来た人にやさしく案内しています。道具のカタログも入っています。',
        'まよっても、まだよく知らなくても大丈夫。ここには、いそいでいる人はいません。そんな気持ちで、つくっています。'
      ],
      facts: [
        '入り口は「基本のこと」「フェディバースって何？」「使う」「つくる」。',
        '日本語・英語・韓国語で読めます。',
        'ページの内容は CC0 で、自由に写して、直して、わけあえます。「このページを書き直す」から、直す案も送れます。',
        '姉妹サイトは joinfediverse.kr(サーバー選びのお手伝い)です。'
      ],
      relHeading: 'sukhi とのかんけい',
      rel: [
        'sukhi-social は、人があつまって「過ごす」場所です。atfedi.de は、フェディバースへ「歩きはじめる」ための、はじめてのガイドです。',
        'atfedi.de は、sukhi-social のサブプロジェクトです。ソースコードも、sukhi-social の GitHub にあります。',
        'どちらも、「あたたかく、いそがずに」という気持ちを分けあっています。'
      ],
      open: 'atfedi.de をひらく'
    }
  },
  ko: {
    siteName: 'sukhi',
    slogan: '따뜻한 사람들과 함께',
    login: '로그인',
    langLabel: '언어',
    navLabel: '페이지',
    nav: { gate: '현관', place: 'sukhi-social 이야기', projects: '프로젝트', atfedi: 'atfedi.de 이야기', support: '후원', licenses: '라이선스' },
    footer: 'sukhi는 sukhi-social이 만들고 있어요.',
    notFound: {
      title: '어라, 여기엔 아무것도 없는 것 같아요',
      text: '길을 잘못 들어도 괜찮아요. 현관까지 같이 돌아가요.',
      back: '현관으로 돌아가기'
    },
    gate: {
      title: 'sukhi — 따뜻한 사람들과 함께',
      description: 'sukhi는 사람들이 모이고, 가볍게 들를 수 있는 포근한 공간이에요.',
      lead: 'sukhi-social은 사람들이 모일 수 있고, 가볍게 들를 수도 있는 포근한 공간이에요. 오래 머물러도, 잠깐 얼굴만 비춰도 괜찮아요. 서두르지 말고 천천히 둘러보세요.',
      doorsHeading: '어디부터 볼까요',
      doors: [
        { key: 'place', title: 'sukhi-social 이야기', text: '어떤 공간이고, 어떤 마음으로 열고 있는지 적었어요.' },
        { key: 'projects', title: '프로젝트', text: '이 공간을 위해 지금 만들고 있는 것들을 소개해요.' },
        { key: 'atfedi', title: 'atfedi.de 이야기', text: '‘처음’인 분들을 위한 길잡이 atfedi.de와 sukhi의 관계예요.' },
        { key: 'support', title: '후원', text: 'sukhi를 이어 가기 위한 따뜻한 마음을 받는 곳이에요.' }
      ]
    },
    place: {
      title: 'sukhi-social 이야기 — sukhi',
      description: 'sukhi-social은 사람들이 모이고 가볍게 들를 수 있는 포근한 공간이에요.',
      heading: 'sukhi-social 이야기',
      blocks: [
        {
          heading: '어떤 공간인가요?',
          text: [
            'sukhi-social은 사람들이 모일 수 있고, 가볍게 들를 수도 있는 포근한 공간이에요.',
            '오래 머물러도 좋고, 잠깐 얼굴만 비춰도 좋아요. 여기서는 둘 다 ‘보통’이에요.'
          ]
        },
        {
          heading: '소중히 여기는 것',
          text: [
            '따뜻하게, 서두르지 않는 것. 잘 몰라도, 헤매도 괜찮다는 것.',
            '‘따뜻한 사람들과 함께’가 가장 처음의 약속이에요.'
          ]
        },
        {
          heading: '어디에 있나요?',
          text: [
            '앞으로 sukhi.social에서 열 예정이에요. 처음 온 분도 여기(about)에서 분위기를 보고 나서 로그인할 수 있어요.',
            'sukhi는 ‘페디버스’의 친구예요. 페디버스는 여러 SNS와 서비스가 서로 이어져 있는 세계를 말해요. 어려운 지식이 없어도 괜찮아요.'
          ]
        },
        {
          heading: '이름 이야기',
          text: [
            'sukhi는 산스크리트어 등의 ‘sukhī’에서 왔어요. ‘행복한’이라는 뜻이에요.',
            '작은 비밀이 하나 더 있어요. ‘好’라는 한자 안에 ‘くろ(쿠로)’가 숨어 있어요.'
          ]
        }
      ]
    },
    projects: {
      title: '프로젝트 — sukhi',
      description: 'sukhi-social이 이 공간을 위해 만들고 있는 것들을 소개해요.',
      heading: '프로젝트',
      lead: '이 공간을 받쳐 주려고 sukhi-social에서는 여러 가지를 만들고 있어요. 모두 공개되어 있어서 누구나 안을 볼 수 있어요. 어려워 보이면 한 줄 설명만 읽어도 괜찮아요.',
      items: [
        { name: 'sukhi-fedi', href: FEDI_REPO_URL, text: 'sukhi.social을 움직이는 SNS의 구조(소프트웨어)예요. Mastodon이나 Misskey 앱과도 쉽게 이어지도록 만들고 있어요.' },
        { name: 'atfedi.de', href: ATFEDI_URL, text: '페디버스의 첫걸음 안내서예요. 도구 카탈로그도 있어요. 자세한 이야기는 ‘atfedi.de 이야기’에서 해요.' },
        { name: 'mazemaze-api', href: 'https://github.com/sukhi-social/mazemaze-api', text: 'Misskey나 Mastodon 등 SNS에 연결하는 앱을 만들기 쉽게 해 주는 부품을 만들고 있어요.' },
        { name: 'ojak-ex', href: 'https://github.com/sukhi-social/ojak-ex', text: 'SNS끼리 주고받을 때 쓰는 ‘서명’ 같은 뒷일을 맡는 부품이에요(Elixir 언어용).' }
      ],
      techHeading: '프로그램을 읽을 수 있는 분께',
      techText: '소스 코드는 GitHub에 공개되어 있어요. 궁금한 게 있으면 들여다보세요.',
      more: 'GitHub에서 모두 보기'
    },
    support: {
      title: '후원 — sukhi',
      description: 'sukhi를 이어 가기 위한 후원과 응원의 창구예요.',
      heading: '후원',
      thanks: [
        'sukhi에 관심을 가져 주셔서 감사해요.',
        '보내 주신 마음은 sukhi를 이어 가는 데 소중하게 쓸게요. 무리하지 않는 선에서, 할 수 있을 때만으로 괜찮아요.'
      ],
      donateHeading: '후원하기',
      donate: [
        { name: 'Liberapay', href: LIBERAPAY_URL },
        { name: 'GitHub Sponsors', href: SPONSORS_URL },
        { name: 'Fairy by hada.io', href: FAIRY_URL, note: '한국에 계신 분들을 위한 창구예요.' }
      ],
      reachHeading: '응원의 한마디도 기뻐요',
      reachText: '후원 대신 한마디를 보내 주시는 것도 큰 힘이 돼요.',
      reach: [
        { label: '메일', value: CONTACT_MAIL, href: `mailto:${CONTACT_MAIL}` },
        { label: 'ActivityPub', value: CONTACT_AP }
      ]
    },
    licenses: {
      title: '라이선스 — sukhi',
      description: '이 사이트(about)가 쓰는 소프트웨어와 그 라이선스예요.',
      heading: '라이선스',
      intro: '여기에는 이 사이트(about)가 쓰고 있는 소프트웨어를 적어 두었어요. 빌려 쓰고 있는 것들에 대한 감사의 페이지예요.',
      selfHeading: '이 사이트 이야기',
      self: '이 사이트의 소스 코드는 AGPL-3.0-or-later로 GitHub에 공개되어 있어요.',
      selfLink: 'GitHub에서 보기',
      shipHeading: '페이지와 함께 보내는 것',
      ship: [
        '이 페이지를 열면 전해지는 것은 글꼴 3개와, 직접 만든 작은 스크립트뿐이에요.',
        '글꼴은 이 사이트에서 바로 보내요. Google Fonts 같은 바깥 서비스에는 연결하지 않아요.'
      ],
      oflText: '라이선스 전문(SIL Open Font License 1.1)',
      buildHeading: '만들 때 쓰는 것',
      build: '페이지를 만들 때에만 쓰는 것들이에요. 완성된 페이지에는 들어 있지 않아요.',
      thanks: [
        '이 감사는 양도할 수 없습니다.',
        '이 소프트웨어는 여러분의 계속된 기여 덕에 존재합니다. 작고, 취소할 수 없는, 어떠한 보증 없는 “있는 그대로”의 감사를 이곳에서 전합니다.'
      ]
    },
    atfedi: {
      title: 'atfedi.de 이야기 — sukhi',
      description: '페디버스 첫걸음 안내서 atfedi.de와 sukhi의 관계에 대해서.',
      heading: 'atfedi.de 이야기',
      what: [
        'atfedi.de는 페디버스의 첫걸음 안내서예요. ‘페디버스가 뭐예요?’부터 쓰는 도구, 만드는 사람을 위한 도구까지, 처음 온 분들을 위해 부드럽게 안내해요. 도구 카탈로그도 들어 있어요.',
        '헤매도, 아직 잘 몰라도 괜찮아요. 여기에는 서두르는 사람이 없어요. 그런 마음으로 만들고 있어요.'
      ],
      facts: [
        '입구는 ‘기본 이야기’, ‘페디버스가 뭐예요?’, ‘사용하기’, ‘만들기’예요.',
        '일본어·영어·한국어로 읽을 수 있어요.',
        '페이지 내용은 CC0라서 자유롭게 복사하고 고치고 나눌 수 있어요. ‘이 페이지 고쳐 쓰기’로 고칠 점을 보낼 수도 있어요.',
        '자매 사이트는 joinfediverse.kr(서버 고르기를 도와줘요)이에요.'
      ],
      relHeading: 'sukhi와의 관계',
      rel: [
        'sukhi-social은 사람들이 모여 ‘지내는’ 공간이에요. atfedi.de는 페디버스로 ‘걸어 들어가는’ 첫걸음 안내서예요.',
        'atfedi.de는 sukhi-social의 서브 프로젝트예요. 소스 코드도 sukhi-social의 GitHub에 있어요.',
        '둘 다 ‘따뜻하게, 서두르지 않고’라는 마음을 나누고 있어요.'
      ],
      open: 'atfedi.de 열기'
    }
  },
  en: {
    siteName: 'sukhi',
    slogan: "Let's be together",
    login: 'Log in',
    langLabel: 'Language',
    navLabel: 'Pages',
    nav: { gate: 'Home', place: 'About sukhi-social', projects: 'Projects', atfedi: 'About atfedi.de', support: 'Support', licenses: 'Licenses' },
    footer: 'sukhi is made by sukhi-social.',
    notFound: {
      title: "Oh, there's nothing here",
      text: "It's okay to take a wrong turn. Let's head back to the front door together.",
      back: 'Back to the front door'
    },
    gate: {
      title: "sukhi — Let's be together",
      description: 'sukhi is a gentle place where people can gather, or just drop by.',
      lead: "sukhi-social is a warm, gentle place where people can gather, or just drop by. Stay a while, or say hi and go — either is fine. There's no hurry. Take your time looking around.",
      doorsHeading: 'Where would you like to start?',
      doors: [
        { key: 'place', title: 'About sukhi-social', text: 'What kind of place this is, and the feelings behind it.' },
        { key: 'projects', title: 'Projects', text: 'What we are making for this place right now.' },
        { key: 'atfedi', title: 'About atfedi.de', text: 'A friendly guide for newcomers, and how it relates to sukhi.' },
        { key: 'support', title: 'Support', text: 'A way to send warm thoughts that help sukhi keep going.' }
      ]
    },
    place: {
      title: 'About sukhi-social — sukhi',
      description: 'sukhi-social is a gentle place where people can gather, or just drop by.',
      heading: 'About sukhi-social',
      blocks: [
        {
          heading: 'What kind of place is it?',
          text: [
            'sukhi-social is a gentle place where people can gather, or just drop by.',
            'You can stay a long while, or just say hi and go. Both are perfectly normal here.'
          ]
        },
        {
          heading: 'What we care about',
          text: [
            'Being warm, and not being in a hurry. It is okay not to know, and okay to feel lost.',
            '"Let\'s be together" is our very first promise.'
          ]
        },
        {
          heading: 'Where is it?',
          text: [
            'We plan to open it at sukhi.social. If you are new, you can look around here (the about site) first, and then log in.',
            'sukhi is part of the "fediverse", a world of social networks and services that are connected to each other. You do not need any special knowledge — and if you have some, that is welcome too.'
          ]
        },
        {
          heading: 'About the name',
          text: [
            'sukhi comes from "sukhī" in Sanskrit and other languages. It means "happy".',
            'And one more tiny secret: the kanji 好 hides "kuro" inside it.'
          ]
        }
      ]
    },
    projects: {
      title: 'Projects — sukhi',
      description: 'What sukhi-social is making for this place.',
      heading: 'Projects',
      lead: 'To support this place, sukhi-social makes a few different things. All of it is open, so anyone can look inside. If something sounds technical, the one-line description is all you need.',
      items: [
        { name: 'sukhi-fedi', href: FEDI_REPO_URL, text: 'The social network software that runs sukhi.social. It is built to connect easily with apps for Mastodon and Misskey.' },
        { name: 'atfedi.de', href: ATFEDI_URL, text: 'A first-steps guide to the fediverse, with a catalog of tools too. More in "About atfedi.de".' },
        { name: 'mazemaze-api', href: 'https://github.com/sukhi-social/mazemaze-api', text: 'Parts that make it easier to build apps that connect to social networks like Misskey and Mastodon.' },
        { name: 'ojak-ex', href: 'https://github.com/sukhi-social/ojak-ex', text: 'A behind-the-scenes part for the Elixir language, handling things like the "signatures" social networks use when they talk to each other.' }
      ],
      techHeading: 'For people who read code',
      techText: 'The source code is open on GitHub. Have a look if something catches your eye.',
      more: 'See everything on GitHub'
    },
    support: {
      title: 'Support — sukhi',
      description: 'Ways to donate to sukhi, or to send a message.',
      heading: 'Support',
      thanks: [
        'Thank you for your interest in sukhi.',
        'Whatever you send helps sukhi keep going, and we will treat it with care. Only when it is easy for you — that is more than enough.'
      ],
      donateHeading: 'Donate',
      donate: [
        { name: 'Liberapay', href: LIBERAPAY_URL },
        { name: 'GitHub Sponsors', href: SPONSORS_URL },
        { name: 'Fairy by hada.io', href: FAIRY_URL, note: 'For readers in Korea.' }
      ],
      reachHeading: 'Messages are welcome, too',
      reachText: 'A few words instead of a donation is a big help as well.',
      reach: [
        { label: 'Email', value: CONTACT_MAIL, href: `mailto:${CONTACT_MAIL}` },
        { label: 'ActivityPub', value: CONTACT_AP }
      ]
    },
    licenses: {
      title: 'Licenses — sukhi',
      description: 'The software this site (about) uses, and its licenses.',
      heading: 'Licenses',
      intro: 'Here is the software this site (about) uses. It is a page of thanks to the people whose work we borrow.',
      selfHeading: 'About this site',
      self: 'The source code of this site is open on GitHub, under AGPL-3.0-or-later.',
      selfLink: 'See it on GitHub',
      shipHeading: 'What reaches your browser',
      ship: [
        'What is sent to you when you open this page is just three fonts and a few small scripts of our own.',
        'The fonts are served straight from this site. Nothing connects to outside services such as Google Fonts.'
      ],
      oflText: 'Full license text (SIL Open Font License 1.1)',
      buildHeading: 'What we use to build it',
      build: 'These are used only while the pages are being made. They are not part of the finished pages.',
      thanks: [
        'This thanks is non-transferable.',
        'This software exists thanks to the continuous contributions of everyone involved. I hereby give a small, irrevocable, warranty-free, AS-IS “Thank you!”'
      ]
    },
    atfedi: {
      title: 'About atfedi.de — sukhi',
      description: 'atfedi.de, a friendly first-steps guide to the fediverse, and how it relates to sukhi.',
      heading: 'About atfedi.de',
      what: [
        'atfedi.de is a gentle first-steps guide to the fediverse. It greets newcomers with "Oh, a new friend! So glad you\'re here!" and walks them from "What is the fediverse?" to tools to use and tools to build. It also keeps a catalog of those tools.',
        "It's okay to feel lost, and okay not to know much yet. Nobody here is in a hurry. That is the spirit it is made in."
      ],
      facts: [
        'Its doors are "The basics", "What is the fediverse?", "Use", and "Build".',
        'You can read it in Japanese, English, and Korean.',
        'The page content is CC0, so you can copy, change, and share it freely. A "Rewrite this page" link lets you suggest changes.',
        'Its sister site is joinfediverse.kr, which helps you choose a server.'
      ],
      relHeading: 'How it relates to sukhi',
      rel: [
        'sukhi-social is a place where people gather and spend time. atfedi.de is a first-steps guide for starting to walk in the fediverse.',
        'atfedi.de is a sub-project of sukhi-social. Its source code lives on the sukhi-social GitHub, too.',
        'Both share the same feeling: warm, and not in a hurry.'
      ],
      open: 'Open atfedi.de'
    }
  }

};
