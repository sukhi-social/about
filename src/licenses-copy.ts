// SPDX-License-Identifier: AGPL-3.0-or-later
//
// ライセンスのページ(小さな展示室)の言葉。ja を正本に、en・ko は同じ形で。
// 法律文書ではなく、はじめての人にも読める「展示パネル」。正確さのため、
// ライセンスの説明は、各ライセンスの中心だけを、やさしく言い直している。
import type { Locale } from './content';

export const SOURCE_LICENSE = 'AGPL-3.0-or-later';
export const CONTENT_LICENSE_URL: Record<Locale, string> = {
  ja: 'https://creativecommons.org/licenses/by/4.0/deed.ja',
  en: 'https://creativecommons.org/licenses/by/4.0/',
  ko: 'https://creativecommons.org/licenses/by/4.0/deed.ko'
};

interface FontCaption {
  sample: string;
  sampleLang: string;
  note: string;
}

export interface LicensesCopy {
  title: string;
  description: string;
  heading: string;
  intro: string;
  whatHeading: string;
  what: string[];
  contentHeading: string;
  content: string[];
  contentHow: string;
  contentLink: string;
  codeHeading: string;
  code: string;
  codeLink: string;
  fontsHeading: string;
  fonts: string[];
  fontCaptions: Record<string, FontCaption>;
  oflText: string;
  toolsHeading: string;
  tools: string[];
  readHeading: string;
  readLead: string;
  countLabel: string;
  notes: Record<string, string>;
  allTools: string;
  footerContent: string;
  thanks: string[];
}

export const licensesCopy: Record<Locale, LicensesCopy> = {
  ja: {
    title: 'ライセンス — sukhi',
    description: 'このサイトの内容のライセンス(CC BY 4.0)と、使わせてもらっているソフトウェアの展示室です。',
    heading: 'ライセンスの、小さな展示室',
    intro:
      'ここは、このサイトを支えてくれているものたちの、小さな展示室です。むずかしそうに見えても大丈夫。展示のパネルを読みながら、ふらっとまわってみてください。',
    whatHeading: '展示 0　ライセンスって、なに？',
    what: [
      'ソフトウェアには、作った人が書いた「つかいかたの約束」があります。それが、ライセンスです。',
      'たとえば「自由に使っていいよ。そのかわり、作った人の名前は残してね」のような約束です。',
      'ほとんどの約束は、とてもやさしいものです。このサイトも、たくさんの「どうぞ使って」のおかげで、できています。'
    ],
    contentHeading: '展示 1　このサイトの、ことば',
    content: [
      'このページの内容(文章など)は、CC BY 4.0 です。',
      '自由に写して、直して、わけあってかまいません。仕事に使っても大丈夫です。'
    ],
    contentHow:
      'そのとき、「sukhi-social(about.sukhi.social)」という出どころを書いて、直したときは、直したと書いてください。それだけで、うれしいです。',
    contentLink: 'CC BY 4.0 のくわしい説明',
    codeHeading: '展示 2　このサイトの、しくみ',
    code: 'このサイトのソースコードは、AGPL-3.0-or-later のもとで、GitHub に公開しています。',
    codeLink: 'GitHub で見る',
    fontsHeading: '展示 3　いま、あなたの画面に届いているフォント',
    fonts: [
      'このページを開くと、3 つのフォントが届きます。見本を、それぞれの書体で並べてみました。',
      'フォントは、SIL Open Font License 1.1 のもとにあります。自由に使えて、配ることもできます。フォントだけを売ることは、できません。このサイトから直接とどけていて、Google Fonts のような外のサービスには、つながりません。'
    ],
    fontCaptions: {
      '@fontsource/nunito': { sample: 'Warm, together', sampleLang: 'en', note: '端がまるくて、やさしい英数字。' },
      '@fontsource/zen-maru-gothic': { sample: 'あたたかいみんなといっしょに', sampleLang: 'ja', note: '角のまるい丸ゴシック。日本語は、これで。' },
      '@fontsource/gothic-a1': { sample: '따뜻한 사람들과 함께', sampleLang: 'ko', note: '読みやすくて、すなおな韓国語のゴシック。' }
    },
    oflText: 'ライセンス全文(SIL Open Font License 1.1)',
    toolsHeading: '展示 4　つくるための、道具たち',
    tools: [
      'ページをつくるときにだけ使う道具が、{n} 個あります。工房の道具箱のようなものです。',
      '道具は、できあがったページには入っていません。'
    ],
    readHeading: 'ライセンスの、読みかた',
    readLead: '道具箱には、いろいろなライセンスの道具が入っています。それぞれの約束を、ひとことで言うと、こうです。(やさしく言い直したもので、法律文書ではありません。)',
    countLabel: '{n} 個',
    notes: {
      MIT: '自由に使って、直して、配ってよい。名前(著作権表示)を残すこと。',
      ISC: 'MIT とほとんど同じ、かんたんな約束。',
      'BSD-2-Clause': 'MIT の仲間。名前を残せば、自由に使える。',
      'BSD-3-Clause': 'MIT の仲間。さらに、作った人の名前を宣伝に使わないこと。',
      '0BSD': '名前を残すことさえ、求めない。ほぼ「ご自由に」。',
      'Apache-2.0': 'MIT の仲間。特許についても、使ってよいと書いてある。直したら、直したと書くこと。',
      'BlueOak-1.0.0': 'MIT のように、わかりやすく自由。名前と約束の文を残すこと。',
      'CC0-1.0': '権利を手ばなして、だれでも自由に使えるようにしたもの。',
      'MPL-2.0': 'ファイルごとの約束。そのファイルを直して配るなら、直したファイルも公開する。',
      'LGPL-3.0-or-later': '部品として使うぶんには自由。部品そのものを直したら、その直したところは公開する。',
      'OFL-1.1': 'フォントのための約束。自由に使って配れる。フォントだけを売るのは、だめ。',
      'AGPL-3.0-or-later': '直して配ったり、ネットで使わせたりするなら、同じ約束でソースを公開する。',
      'CC-BY-4.0': '自由に写して直して配れる。出どころを書いて、直したら、そう書くこと。'
    },
    allTools: 'ぜんぶの道具を見る',
    footerContent: 'ページの内容は CC BY 4.0',
    thanks: [
      'この感謝は、譲渡できません。',
      'このソフトウェアは、関わってくださったみなさんの、続いていく貢献があって成り立っています。ここに、小さくて、取り消せなくて、無保証で、あるがままの「ありがとう」を贈ります。'
    ]
  },
  en: {
    title: 'Licenses — sukhi',
    description: "This site's content license (CC BY 4.0) and a small exhibit of the software it uses.",
    heading: 'A small exhibit of licenses',
    intro:
      'This is a small exhibit room for the things that hold this site up. It may look technical, but it is okay. Wander through, and read the panels as you go.',
    whatHeading: 'Exhibit 0   What is a license?',
    what: [
      'Software comes with a "how you may use it" promise, written by the people who made it. That promise is called a license.',
      'For example: "Use it freely. Just keep the maker\'s name on it."',
      'Most of these promises are very kind. This site, too, exists because of a lot of people saying "please, go ahead."'
    ],
    contentHeading: 'Exhibit 1   The words of this site',
    content: [
      'The content of this page (the text and so on) is CC BY 4.0.',
      'You may copy it, change it, and share it freely. Using it for work is fine, too.'
    ],
    contentHow:
      'Please credit "sukhi-social (about.sukhi.social)" as the source, and say so if you changed it. That is all we ask, and it makes us happy.',
    contentLink: 'About CC BY 4.0',
    codeHeading: 'Exhibit 2   How this site is built',
    code: 'The source code of this site is open on GitHub, under AGPL-3.0-or-later.',
    codeLink: 'See it on GitHub',
    fontsHeading: 'Exhibit 3   The fonts that just reached your screen',
    fonts: [
      'Opening this page sends you three fonts. Here is a sample of each, in its own typeface.',
      'The fonts are under the SIL Open Font License 1.1. You can use and share them freely, but you cannot sell the fonts by themselves. They are served straight from this site, with no connection to outside services such as Google Fonts.'
    ],
    fontCaptions: {
      '@fontsource/nunito': { sample: 'Warm, together', sampleLang: 'en', note: 'Rounded ends make the letters feel gentle.' },
      '@fontsource/zen-maru-gothic': { sample: 'あたたかいみんなといっしょに', sampleLang: 'ja', note: 'A round gothic with soft corners, for Japanese.' },
      '@fontsource/gothic-a1': { sample: '따뜻한 사람들과 함께', sampleLang: 'ko', note: 'A clear, honest gothic for Korean.' }
    },
    oflText: 'Full license text (SIL Open Font License 1.1)',
    toolsHeading: 'Exhibit 4   The tools that build it',
    tools: [
      'There are {n} tools used only while the pages are being made, like the tools in a workshop.',
      'None of them is part of the finished pages.'
    ],
    readHeading: 'How to read the licenses',
    readLead: 'The toolbox holds tools under many kinds of licenses. Here is each promise in a few words. (These are friendly paraphrases, not legal text.)',
    countLabel: '{n}',
    notes: {
      MIT: 'Use, change, and share freely. Keep the name (copyright notice).',
      ISC: 'Almost the same as MIT, in simpler words.',
      'BSD-2-Clause': 'A cousin of MIT. Keep the name, and it is free to use.',
      'BSD-3-Clause': "A cousin of MIT. Also, do not use the makers' names to advertise.",
      '0BSD': 'Does not even ask for the name. Basically "go ahead".',
      'Apache-2.0': 'A cousin of MIT. It also says patents are fine to use. If you change it, say so.',
      'BlueOak-1.0.0': 'Clear and free, like MIT. Keep the name and the text of the promise.',
      'CC0-1.0': 'The maker let go of their rights, so anyone may use it freely.',
      'MPL-2.0': 'A promise per file. If you change and share a file, share the changed file too.',
      'LGPL-3.0-or-later': 'Free to use as a part. If you change the part itself, share what you changed.',
      'OFL-1.1': 'A promise made for fonts. Use and share freely; just do not sell the font alone.',
      'AGPL-3.0-or-later': 'If you change and share it, or let people use it over the network, share the source under the same promise.',
      'CC-BY-4.0': 'Copy, change, and share freely. Credit the source, and say if you changed it.'
    },
    allTools: 'See every tool',
    footerContent: 'Page content: CC BY 4.0',
    thanks: [
      'This thanks is non-transferable.',
      'This software exists thanks to the continuous contributions of everyone involved. I hereby give a small, irrevocable, warranty-free, AS-IS “Thank you!”'
    ]
  },
  ko: {
    title: '라이선스 — sukhi',
    description: '이 사이트 내용의 라이선스(CC BY 4.0)와, 쓰고 있는 소프트웨어의 작은 전시실이에요.',
    heading: '라이선스 작은 전시실',
    intro:
      '여기는 이 사이트를 받쳐 주는 것들을 모아 둔 작은 전시실이에요. 어려워 보여도 괜찮아요. 전시 패널을 읽으면서 천천히 둘러보세요.',
    whatHeading: '전시 0　라이선스가 뭐예요?',
    what: [
      '소프트웨어에는 만든 사람이 적어 둔 ‘쓰는 방법의 약속’이 있어요. 그것이 라이선스예요.',
      '예를 들면 “자유롭게 써도 좋아요. 대신 만든 사람의 이름은 남겨 주세요” 같은 약속이에요.',
      '대부분의 약속은 아주 다정해요. 이 사이트도 많은 “어서 쓰세요” 덕분에 만들어졌어요.'
    ],
    contentHeading: '전시 1　이 사이트의 말',
    content: [
      '이 페이지의 내용(글 등)은 CC BY 4.0이에요.',
      '자유롭게 복사하고 고치고 나눠도 괜찮아요. 일에 써도 괜찮아요.'
    ],
    contentHow:
      '그때 ‘sukhi-social(about.sukhi.social)’이라는 출처를 적어 주시고, 고쳤을 때는 고쳤다고 적어 주세요. 그것만으로도 기뻐요.',
    contentLink: 'CC BY 4.0 자세히 보기',
    codeHeading: '전시 2　이 사이트의 구조',
    code: '이 사이트의 소스 코드는 AGPL-3.0-or-later로 GitHub에 공개되어 있어요.',
    codeLink: 'GitHub에서 보기',
    fontsHeading: '전시 3　지금 화면에 도착한 글꼴',
    fonts: [
      '이 페이지를 열면 글꼴 3개가 도착해요. 각각의 글꼴로 견본을 늘어놓아 봤어요.',
      '글꼴은 SIL Open Font License 1.1을 따라요. 자유롭게 쓰고 나눌 수 있지만, 글꼴만 따로 파는 것은 안 돼요. 이 사이트에서 바로 보내고, Google Fonts 같은 바깥 서비스에는 연결하지 않아요.'
    ],
    fontCaptions: {
      '@fontsource/nunito': { sample: 'Warm, together', sampleLang: 'en', note: '끝이 둥글어서 다정한 영문 글꼴이에요.' },
      '@fontsource/zen-maru-gothic': { sample: 'あたたかいみんなといっしょに', sampleLang: 'ja', note: '모서리가 둥근 일본어용 고딕이에요.' },
      '@fontsource/gothic-a1': { sample: '따뜻한 사람들과 함께', sampleLang: 'ko', note: '읽기 편하고 솔직한 한국어 고딕이에요.' }
    },
    oflText: '라이선스 전문(SIL Open Font License 1.1)',
    toolsHeading: '전시 4　만들 때 쓰는 도구들',
    tools: [
      '페이지를 만들 때에만 쓰는 도구가 {n}개 있어요. 공방의 연장통 같은 거예요.',
      '도구는 완성된 페이지에는 들어 있지 않아요.'
    ],
    readHeading: '라이선스 읽는 법',
    readLead: '연장통에는 여러 라이선스의 도구가 들어 있어요. 각각의 약속을 한마디로 하면 이래요. (쉽게 풀어 쓴 것이고, 법률 문서는 아니에요.)',
    countLabel: '{n}개',
    notes: {
      MIT: '자유롭게 쓰고, 고치고, 나눠도 돼요. 이름(저작권 표시)은 남길 것.',
      ISC: 'MIT와 거의 같은, 더 간단한 약속.',
      'BSD-2-Clause': 'MIT의 친척. 이름을 남기면 자유롭게 쓸 수 있어요.',
      'BSD-3-Clause': 'MIT의 친척. 만든 사람의 이름을 광고에 쓰지 않을 것.',
      '0BSD': '이름을 남기라는 말도 없어요. 거의 “마음대로 쓰세요”.',
      'Apache-2.0': 'MIT의 친척. 특허도 써도 된다고 적혀 있어요. 고쳤다면 고쳤다고 적을 것.',
      'BlueOak-1.0.0': 'MIT처럼 알기 쉽게 자유로워요. 이름과 약속의 글을 남길 것.',
      'CC0-1.0': '권리를 내려놓아서 누구나 자유롭게 쓸 수 있어요.',
      'MPL-2.0': '파일 단위의 약속. 그 파일을 고쳐서 나눈다면 고친 파일도 공개해요.',
      'LGPL-3.0-or-later': '부품으로 쓰는 것은 자유로워요. 부품 자체를 고쳤다면 고친 부분은 공개해요.',
      'OFL-1.1': '글꼴을 위한 약속. 자유롭게 쓰고 나눌 수 있지만, 글꼴만 따로 팔 수는 없어요.',
      'AGPL-3.0-or-later': '고쳐서 나누거나 인터넷으로 쓰게 한다면, 같은 약속으로 소스를 공개해요.',
      'CC-BY-4.0': '자유롭게 복사하고 고치고 나눌 수 있어요. 출처를 적고, 고쳤다면 그렇다고 적을 것.'
    },
    allTools: '모든 도구 보기',
    footerContent: '페이지 내용은 CC BY 4.0',
    thanks: [
      '이 감사는 양도할 수 없습니다.',
      '이 소프트웨어는 여러분의 계속된 기여 덕에 존재합니다. 작고, 취소할 수 없는, 어떠한 보증 없는 “있는 그대로”의 감사를 이곳에서 전합니다.'
    ]
  }
};
