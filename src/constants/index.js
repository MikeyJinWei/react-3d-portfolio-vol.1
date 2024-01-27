import {
  texas_roadhouse,
  meta,
  shopify,
  starbucks,
  tesla,
  roundabout,
  key_coffee,
  taking,
  taking_screenshot,
  recipe_screenshot,
  portfolio_screenshot,
} from '../assets/images';

import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  swiper,
  reactsplide,
  animateCss,
  motion,
  mui,
  antd,
  styledcomponents,
  emotion,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  bootstrap,
  tailwindcss,
  figma,
  threads,
  typescript,
  threejs,
  zeabur,
  npm,
  yarn,
  notion,
  vscode,
  reactrouterdom,
} from '../assets/icons';

export const languages = [
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
];

export const frameworksOrPkgs = [
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: reactrouterdom,
    name: 'React Router DOM',
    type: 'Router',
  },
  {
    imageUrl: redux,
    name: 'Redux Toolkit',
    type: 'State Management',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl: mui,
    name: 'Material UI',
    type: 'Frontend',
  },
  {
    imageUrl: antd,
    name: 'Ant Design',
    type: 'Frontend',
  },
  {
    imageUrl: styledcomponents,
    name: 'Styled-Components',
    type: 'CSS-in-JS',
  },
  {
    imageUrl: emotion,
    name: 'Emotion',
    type: 'CSS-in-JS',
  },
  {
    imageUrl: motion,
    name: 'Motion',
    type: 'Animation',
  },
  { imageUrl: bootstrap, name: 'Bootstrap', type: 'Frontend' },
  {
    imageUrl: swiper,
    name: 'Swiper',
    type: 'Carousel',
  },
  {
    imageUrl: reactsplide,
    name: 'React Splide',
    type: 'Carousel',
  },
  {
    imageUrl: animateCss,
    name: 'Animate.css',
    type: 'Carousel',
  },
  {
    imageUrl: threejs,
    name: 'Three.js',
    type: 'Frontend',
  },
];

export const tools = [
  {
    imageUrl: sass,
    name: 'SCSS',
    type: 'Frontend',
  },
  {
    imageUrl: vscode,
    name: 'VS Code',
    type: 'Text Editor',
  },
  {
    imageUrl: npm,
    name: 'npm',
    type: 'Package Manager',
  },
  {
    imageUrl: yarn,
    name: 'Yarn',
    type: 'Package Manager',
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
  {
    imageUrl: zeabur,
    name: 'Zeabur',
    type: 'Deployment Service',
  },
  {
    imageUrl: notion,
    name: 'Notion',
    type: 'Productivity Software',
  },
  {
    imageUrl: figma,
    name: 'Figma',
    type: 'UI Tool',
  },
];

export const experiences = [
  {
    title: '美式餐廳外場服務生',
    company_name: 'Texas Roadhouse 德州鮮切牛排',
    icon: texas_roadhouse,
    iconBg: '#C8A173',
    date: '2018.09 - 2019.02',
    points: [
      '人際關係：與顧客/同事交流，保持良好關係',
      '外場：迎賓、帶位、介紹餐點',
      '團隊合作：掌握顧客用餐/出餐進度回報內場、支援同事工作',
      '行銷/銷售：為公司推銷餐點，爭取 Upsell、POS 機點單/結帳',
      '閉店工作：日結繳款、環境清潔/上鎖',
    ],
  },
  {
    title: '英式餐館餐廚助手',
    company_name: 'Roundabout Café 圓環咖啡',
    icon: roundabout,
    iconBg: '#51739B',
    date: 'March 2020 - April 2021',
    points: [
      '人際關係：與顧客/同事交流，保持良好關係',
      '外場：迎賓、帶位、介紹餐點、POS 機點單結帳',
      '團隊合作：掌握顧客用餐/出餐進度回報內場',
      '內場：協助主廚備料、簡餐/飲品製作 (咖啡、茶類、鬆餅、司康等)',
      '閉店工作：環境清潔、歸位、上鎖',
    ],
  },
  {
    title: '咖啡店專櫃人員/吧台人員',
    company_name: 'Key Coffee',
    icon: key_coffee,
    iconBg: '#eeeeee',
    date: 'Jan 2021 - Feb 2022',
    points: [
      '顧客關係管理：熟記常客訂貨/用餐習慣、與樓管合作處理客訴問題',
      '人際關係：與顧客/同事/鄰近櫃位交流，保持良好關係',
      '行銷/銷售：為專櫃爭取 Upsell、POS 機點單/結帳',
      '外場：迎賓、帶位、介紹餐點',
      '團隊合作：與同事合作分攤內用/外帶顧客訂單',
      '內場：製作食譜 (整合餐飲製作 SOP)、簡餐/飲品製作 (e.g. 義式/手沖咖啡、茶類、鬆餅、熱壓三明治等)',
      '倉儲管理：核對、掌握商品備貨數量',
      '閉櫃工作：日結繳款、迎賓送客、櫃位清潔/上鎖',
    ],
  },
  {
    title: '採購助理',
    company_name: '竹慶建設股份有限公司',
    icon: taking,
    iconBg: '#b7e4c7',
    date: 'Feb 2022 - Feb 2023',
    points: [
      '行政：整理/撰寫送審公文（Excel, PowerPoint , Word, PDF）',
      '工程：協助現場施工端對圖（AutoCad）、現勘協助監督設備安裝（公設設施, 衛浴, 廚具, 室裝, 擺設）、拍照留存竣工照片',
      '採購：施工詢/議價、合約協審/簽署、核對施工進度請款（與會計人員/工地主任溝通）、上傳報價/合約歸檔',
      '行銷/銷售：建置公司網頁（自行開發、發包管理）、定期後台上傳施工進度（至網頁）、整理/撰寫建材清單表格、參與推案行銷會議、官方LINE帳號管理（撰寫自動回覆訊息, 圖文案上架）',
    ],
  },
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/YourGitHubUsername',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/YourLinkedInUsername',
  },
];

export const projects = [
  {
    // iconUrl: taking,
    // theme: 'btn-back-green',
    img: taking_screenshot,
    name: '竹慶建設官網',
    description:
      '這是我為前公司過渡期開發的官網專案，當時，公司忙著處理建案預售工作，沒什麼閒暇時間能處理這塊業務，大家也對這塊領域沒那麼了解。因此，我向經理自告奮勇，和一名設計系朋友協力在一個月半完成這個作品⋯⋯',
    link: 'https://github.com/MikeyJinWei/ta-king.github.io.git',
  },
  {
    // iconUrl: recipe,
    // theme: 'btn-back-red',
    img: recipe_screenshot,
    name: 'Spoonacular Recipe App',
    description:
      '學習 React 大致了解最基礎的 Hook: useState, useEffect 及 Props 的觀念後，我想試著開發一個 API 專案。靈機一動，突然想到假如愛料理的媽媽在忘記時，能方便地搜尋、觀看資料，想必是是件很方便的事。於是，我參考網路上的範例，並試著學習閱讀 API Doc 渲染出應對的資料⋯⋯',
    link: 'https://github.com/MikeyJinWei/recipe-app.git',
  },
  {
    // iconUrl: threads,
    // theme: 'btn-back-green',
    img: portfolio_screenshot,
    name: 'React 3D Portfolio',
    description:
      '某天在 YouTube 吸收知識時，我無意見看到一個酷炫的 3D 圖教學，於是我把手邊的專案完成 commit, push 後，就點開了教學影片學習⋯⋯',
    link: 'https://github.com/MikeyJinWei/react-3d-portfolio-vol.1.git',
  },
];
