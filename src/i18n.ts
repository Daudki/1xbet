export type Lang = "mn" | "en";

export type Dict = {
  nav: {
    sports: string;
    live: string;
    casino: string;
    promotions: string;
  };
  header: {
    login: string;
    register: string;
  };
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    register: string;
    login: string;
    responsible: string;
  };
  liveCard: {
    live: string;
    football: string;
    odds: string;
  };
  promotions: {
    label: string;
    title: string;
    subtitle: string;
    codeTitle: string;
    codeText: string;
    codeLabel: string;
    copy: string;
    copied: string;
    useCode: string;
    welcomeTitle: string;
    welcomeText: string;
    registerNow: string;
  };
  features: {
    label: string;
    title: string;
    sports: string;
    sportsDesc: string;
    liveBetting: string;
    liveDesc: string;
    casino: string;
    casinoDesc: string;
    promotions: string;
    promotionsDesc: string;
  };
  responsible: {
    title: string;
    text: string;
  };
  faq: {
    title: string;
    loginQ: string;
    loginA: string;
    promoQ: string;
    promoA: string;
    liveQ: string;
    liveA: string;
  };
  footer: {
    home: string;
    promotions: string;
    responsible: string;
    terms: string;
    responsibleNote: string;
    rights: string;
  };
  mobileCta: string;
};

export const translations: Record<Lang, Dict> = {
  mn: {
    nav: {
      sports: "Спорт",
      live: "Шууд",
      casino: "Казино",
      promotions: "Урамшуулал",
    },
    header: {
      login: "Нэвтрэх",
      register: "Бүртгүүлэх",
    },
    hero: {
      badge: "1xBet Монгол",
      title: "Үйл явдлын",
      titleAccent: " дээр тогло.",
      subtitle:
        "Спортын бооцоо, шууд бооцоо, казино, урамшуулал — бүгд нэг дор.",
      register: "Бүртгүүлэх",
      login: "Нэвтрэх",
      responsible: "18+ | Хариуцлагатай тогло.",
    },
    liveCard: {
      live: "ШУУД",
      football: "Хөлбөмбөг",
      odds: "Магадлал",
    },
    promotions: {
      label: "Урамшуулал",
      title: "Бүртгэлээсээ илүүг аваарай",
      subtitle:
        "Бүртгүүлэх эсвэл мөнгө байршуулахаасаа өмнө одоогийн урамшууллыг шалгаарай.",
      codeTitle: "Промо код",
      codeText:
        "Бүртгүүлэх үед доорх промо кодыг оруулбал нэмэлт урамшуулал авах боломжтой.",
      codeLabel: "ПРОМО КОД",
      copy: "Хуулах",
      copied: "Хуулагдсан!",
      useCode: "Энэ кодыг бүртгэлийн үед ашиглаарай",
      welcomeTitle: "Тавтай морил урамшуулал",
      welcomeText:
        "Шинэ хэрэглэгчдэд зориулсан урамшуулал байж болно. Нөхцөл, шаардлага үйлчилнэ.",
      registerNow: "Одоо бүртгүүлэх",
    },
    features: {
      label: "Онцлог",
      title: "Бүгд нэг дор",
      sports: "Спортын бооцоо",
      sportsDesc:
        "Хөлбөмбөг, сагсан бөмбөг, теннис болон бусад спортоор бооцоо тавиарай.",
      liveBetting: "Шууд бооцоо",
      liveDesc:
        "Тоглолтыг шууд дагаж, үйл явцын үед бооцоо тавиарай.",
      casino: "Казино",
      casinoDesc:
        "Платформ дээрх казино тоглоом болон бусад зугаа цэнгэлийг судлаарай.",
      promotions: "Урамшуулал",
      promotionsDesc:
        "Боломжтой урамшууллыг шалгаж, промо код оруулаарай.",
    },
    responsible: {
      title: "Хариуцлагатай тогло",
      text:
        "Мөрийтэй тоглоом нь санхүүгийн эрсдэлтэй. Хязгаар тогтоож, зөвхөн алдахад бэлэн мөнгөөр тоглож, шаардлагатай үед завсарлаарай. Энэ үйлчилгээ нь 18 ба түүнээс дээш насны хүмүүст зориулагдсан.",
    },
    faq: {
      title: "Тусламж хэрэгтэй юу?",
      loginQ: "Хэрхэн нэвтрэх вэ?",
      loginA:
        "Энэ хуудасны дээд хэсэгт байрлах Нэвтрэх товчийг дарж, 1xBet-ийн албан ёсны нэвтрэх хуудас руу шилжинэ үү.",
      promoQ: "Промо кодыг хаана ашиглах вэ?",
      promoA:
        "Бүртгүүлэх үед промо кодын талбарт ARHAMU04 кодыг оруулна уу. Хуулах товчийг ашиглавал хялбар.",
      liveQ: "Тоглолтын үед бооцоо тавьж болох уу?",
      liveA: "Шууд бооцоо нь тохирох спортын үйл явдлуудад боломжтой.",
    },
    footer: {
      home: "Нүүр",
      promotions: "Урамшуулал",
      responsible: "Хариуцлагатай тоглоом",
      terms: "Нөхцөл",
      responsibleNote: "18+ | Хариуцлагатай тогло.",
      rights: "Бүх эрх хуулиар хамгаалагдсан.",
    },
    mobileCta: "Бүртгүүлэх / Нэвтрэх",
  },
  en: {
    nav: {
      sports: "Sports",
      live: "Live",
      casino: "Casino",
      promotions: "Promotions",
    },
    header: {
      login: "Log In",
      register: "Register",
    },
    hero: {
      badge: "1xBet Mongolia",
      title: "Bet on the",
      titleAccent: " action.",
      subtitle:
        "Sports betting, live betting, casino and promotions — all in one place.",
      register: "Register",
      login: "Log In",
      responsible: "18+ | Please gamble responsibly.",
    },
    liveCard: {
      live: "LIVE",
      football: "Football",
      odds: "Odds",
    },
    promotions: {
      label: "Promotions",
      title: "Get more from your account",
      subtitle:
        "Check the current promotions before registering or making a deposit.",
      codeTitle: "Promo Code",
      codeText:
        "Enter the promo code below during registration to claim the available bonus.",
      codeLabel: "PROMO CODE",
      copy: "Copy",
      copied: "Copied!",
      useCode: "Use this code during registration",
      welcomeTitle: "Welcome Promotions",
      welcomeText:
        "New-user promotions may be available. Eligibility, wagering requirements and other conditions apply.",
      registerNow: "Register now",
    },
    features: {
      label: "Features",
      title: "Everything in one place",
      sports: "Sports Betting",
      sportsDesc:
        "Bet on football, basketball, tennis and many other sports.",
      liveBetting: "Live Betting",
      liveDesc:
        "Follow matches live and place bets while the action is happening.",
      casino: "Casino",
      casinoDesc:
        "Explore casino games and other entertainment available on the platform.",
      promotions: "Promotions",
      promotionsDesc:
        "Check available promotions and enter eligible promo codes.",
    },
    responsible: {
      title: "Play responsibly",
      text:
        "Gambling involves financial risk. Set limits, only use money you can afford to lose, and take breaks when needed. This service is intended for adults aged 18 and above.",
    },
    faq: {
      title: "Need help?",
      loginQ: "How do I log in?",
      loginA:
        "Click the Log In button at the top of this page to be taken directly to the official 1xBet login page.",
      promoQ: "Where do I use the promo code?",
      promoA:
        "Enter ARHAMU04 into the promo code field during registration. Use the copy button for convenience.",
      liveQ: "Can I bet while an event is live?",
      liveA: "Live betting may be available for eligible sporting events.",
    },
    footer: {
      home: "Home",
      promotions: "Promotions",
      responsible: "Responsible Gaming",
      terms: "Terms",
      responsibleNote: "18+ | Gamble responsibly.",
      rights: "All rights reserved.",
    },
    mobileCta: "Register / Log In",
  },
};
