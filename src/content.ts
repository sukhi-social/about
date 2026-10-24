// SPDX-License-Identifier: AGPL-3.0-or-later
//
// このページの言葉は、ここにまとめてある。ja を正本に、ko は同じ形で。
// 文体は web/ の locales に合わせて、やさしく(ja)・해요체(ko)。

// ログインのリンク先。sukhi.social で sukhi-fedi を動かすようになったら、
// ここだけを本当の場所に差し替える(いまは仮)。
export const LOGIN_URL = 'https://sukhi.social/login';

export const ORG_URL = 'https://github.com/sukhi-social';
export const FEDI_REPO_URL = 'https://github.com/sukhi-social/sukhi-fedi';
export const ATFEDI_URL = 'https://atfedi.de';

// 支援の受け口。sukhi-fedi の elixir/priv/legal/support.*.md と同じもの。
const LIBERAPAY_URL = 'https://liberapay.com/sukhi-social/donate';
const SPONSORS_URL = 'https://github.com/sponsors/nyanrus';
const FAIRY_URL = 'https://fairy.hada.io/@sukhi-social';
const CONTACT_MAIL = 'hinata@natadeco.com';
const CONTACT_AP = '@kuro_admin@sukhi.f3liz.casa';

export type Locale = 'ja' | 'ko';
export type PageKey = 'gate' | 'place' | 'projects' | 'atfedi' | 'support';

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
  lang: string;
  siteName: string;
  slogan: string;
  login: string;
  langSwitch: string;
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
    lang: '日本語',
    siteName: 'sukhi',
    slogan: 'あたたかいみんなといっしょに',
    login: 'ログイン',
    langSwitch: '한국어',
    navLabel: 'ページ',
    nav: { gate: '玄関', place: 'sukhi-social のこと', projects: 'プロジェクト', atfedi: 'atfedi.de とのこと', support: '支援' },
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
        { name: 'atfedi.de', href: ATFEDI_URL, text: 'フェディバースの道具を集めた案内所。くわしくは「atfedi.de とのこと」で。' },
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
    atfedi: {
      title: 'atfedi.de とのこと — sukhi',
      description: 'フェディバースの道具の案内所 atfedi.de と、sukhi のかんけいについて。',
      heading: 'atfedi.de とのこと',
      what: [
        'atfedi.de は、フェディバースで使える道具を集めた、開かれた案内所(カタログ)です。はじめてフェディバースに来た人に向けて、やさしく案内しています。',
        'まよっても、まだよく知らなくても大丈夫。ここには、いそいでいる人はいません。そんな気持ちで、つくっています。'
      ],
      facts: [
        '「使う」と「つくる」の 2 つの入り口があります。',
        '日本語・英語・韓国語で読めます。',
        'ページの内容は CC0 で、自由に写して、直して、わけあえます。',
        '姉妹サイトは joinfediverse.kr(サーバー選びのお手伝い)です。'
      ],
      relHeading: 'sukhi とのかんけい',
      rel: [
        'sukhi-social は、人があつまって「過ごす」場所です。atfedi.de は、フェディバースで使えるものを「さがす」ための地図です。',
        'atfedi.de は、sukhi-social のサブプロジェクトです。ソースコードも、sukhi-social の GitHub にあります。',
        'どちらも、「あたたかく、いそがずに」という気持ちを分けあっています。'
      ],
      open: 'atfedi.de をひらく'
    }
  },
  ko: {
    lang: '한국어',
    siteName: 'sukhi',
    slogan: '따뜻한 사람들과 함께',
    login: '로그인',
    langSwitch: '日本語',
    navLabel: '페이지',
    nav: { gate: '현관', place: 'sukhi-social 이야기', projects: '프로젝트', atfedi: 'atfedi.de 이야기', support: '후원' },
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
        { name: 'atfedi.de', href: ATFEDI_URL, text: '페디버스 도구를 모아 둔 안내소예요. 자세한 이야기는 ‘atfedi.de 이야기’에서 해요.' },
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
    atfedi: {
      title: 'atfedi.de 이야기 — sukhi',
      description: '페디버스 도구 안내소 atfedi.de와 sukhi의 관계에 대해서.',
      heading: 'atfedi.de 이야기',
      what: [
        'atfedi.de는 페디버스에서 쓸 수 있는 도구를 모아 둔 열린 안내소(카탈로그)예요. 페디버스에 처음 온 분들을 위해 부드럽게 안내해요.',
        '헤매도, 아직 잘 몰라도 괜찮아요. 여기에는 서두르는 사람이 없어요. 그런 마음으로 만들고 있어요.'
      ],
      facts: [
        '‘사용하기’와 ‘만들기’ 두 개의 입구가 있어요.',
        '일본어·영어·한국어로 읽을 수 있어요.',
        '페이지 내용은 CC0라서 자유롭게 복사하고 고치고 나눌 수 있어요.',
        '자매 사이트는 joinfediverse.kr(서버 고르기를 도와줘요)이에요.'
      ],
      relHeading: 'sukhi와의 관계',
      rel: [
        'sukhi-social은 사람들이 모여 ‘지내는’ 공간이에요. atfedi.de는 페디버스에서 쓸 수 있는 것을 ‘찾는’ 지도예요.',
        'atfedi.de는 sukhi-social의 서브 프로젝트예요. 소스 코드도 sukhi-social의 GitHub에 있어요.',
        '둘 다 ‘따뜻하게, 서두르지 않고’라는 마음을 나누고 있어요.'
      ],
      open: 'atfedi.de 열기'
    }
  }
};
