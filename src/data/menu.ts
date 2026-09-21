export type MenuItem = {
  id: string;
  nameAr: string;
  nameEn: string;
  price: number;
  image?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  layout: "grid" | "slider" | "list";
  theme?: "default" | "cold" | "sweets";
  items: MenuItem[];
};

export const NAV_ITEMS = [
  {
    id: "hot",
    label: "المشروبات الحارة",
    icon: "hot",
  },
  {
    id: "cold",
    label: "المشروبات الباردة",
    icon: "cold",
  },
  {
    id: "drip",
    label: "القهوة المقطرة",
    icon: "drip",
  },
  {
    id: "sweets",
    label: "الحلا",
    icon: "sweets",
  },
] as const;

export const MENU_SECTIONS: MenuSection[] = [
  {
    id: "hot",
    title: "المشروبات الحارة",
    layout: "grid",
    items: [
      { id: "espresso", nameAr: "اسبريسو", nameEn: "ESPRESSO", price: 11, image: "/images/drinks/hot/1.jpg" },
      { id: "hot-spanish", nameAr: "سبانش حار", nameEn: "HOT SPANISH LATTE", price: 16, image: "/images/drinks/hot/4.jpg" },
      { id: "cappuccino", nameAr: "كابتشينو", nameEn: "CAPPUCCINO", price: 15, image: "/images/drinks/hot/4.jpg" },
      { id: "flat-white", nameAr: "فلات وايت", nameEn: "FLAT WHITE", price: 14, image: "/images/drinks/hot/6.jpeg" },
      { id: "cortado", nameAr: "كورتادو", nameEn: "CORTADO", price: 13, image: "/images/drinks/hot/7.jpeg" },
      { id: "latte", nameAr: "لاتيه", nameEn: "CAFFÈ LATTE", price: 15, image: "/images/drinks/hot/5.jpeg" },
      { id: "americano", nameAr: "امريكانو", nameEn: "AMERICANO", price: 12, image: "/images/drinks/hot/8.jpeg" },
      { id: "hot-chocolate", nameAr: "هوت شوكلت", nameEn: "HOT CHOCOLATE", price: 17 },
    ],
  },
  {
    id: "cold",
    title: "المشروبات الباردة",
    layout: "slider",
    theme: "cold",
    items: [
      { id: "matcha", nameAr: "ماتشا", nameEn: "MATCHA LATTE", price: 17, image: "/images/drinks/colud/5.JPG" },
      { id: "matcha-rose", nameAr: "ماتشا روز بيري", nameEn: "MATCHA ROSEBERRY", price: 19, image: "/images/drinks/colud/6.JPG" },
      { id: "hibiscus", nameAr: "آيس تي كركديه", nameEn: "HIBISCUS ICED TEA", price: 16, image: "/images/drinks/colud/7.JPG" },
      { id: "peach-tea", nameAr: "ايس تي خوخ", nameEn: "PEACH ICED TEA", price: 16, image: "/images/drinks/colud/8.JPG" },
      { id: "freddo", nameAr: "الفريدو", nameEn: "FREDDO ESPRESSO", price: 12, image: "/images/drinks/colud/11.png?v=2" },
      { id: "spanish-latte", nameAr: "ايس سبانش لاتيه", nameEn: "ICED SPANISH LATTE", price: 17, image: "/images/drinks/colud/9.png?v=2" },
      { id: "iced-latte", nameAr: "آيس لاتيه", nameEn: "ICED LATTE", price: 17, image: "/images/drinks/colud/9.png?v=2" },
      { id: "iced-americano", nameAr: "آيس امريكانو", nameEn: "ICED AMERICANO", price: 13, image: "/images/drinks/colud/10.png?v=2" },
    ],
  },
  {
    id: "drip",
    title: "القهوة المقطرة",
    layout: "list",
    items: [
      { id: "v60", nameAr: "ڤي 60", nameEn: "V60 DRIP", price: 15 },
      { id: "ice-black", nameAr: "آيس بلاك", nameEn: "ICE BLACK", price: 17 },
      { id: "today-hot", nameAr: "قهوة اليوم (حار)", nameEn: "TODAY'S COFFEE", price: 10 },
      { id: "today-cold", nameAr: "قهوة اليوم (بارد)", nameEn: "TODAY'S COFFEE", price: 12 },
    ],
  },
  {
    id: "sweets",
    title: "الحلا",
    layout: "grid",
    theme: "sweets",
    items: [
      { id: "chocolate-bar", nameAr: "شوكليت بار", nameEn: "CHOCOLATE BAR", price: 9, image: "/images/sweets/2.JPG" },
      { id: "berry-cheesecake", nameAr: "تشيز كيك توت", nameEn: "BERRY CHEESECAKE", price: 17, image: "/images/sweets/3.JPG" },
      { id: "caramel-cheesecake", nameAr: "تشيز كيك كراميل", nameEn: "CARAMEL CHEESECAKE", price: 17, image: "/images/sweets/4.JPG" },
      { id: "qishta-cheesecake", nameAr: "تشيز القشد", nameEn: "QISHTA CHEESECAKE", price: 22, image: "/images/sweets/5.jpeg" },
      { id: "mango-trifle", nameAr: "ترافيل مانجو", nameEn: "MANGO TRIFLE", price: 24, image: "/images/sweets/6.JPG" },
      { id: "pecan-caramel", nameAr: "بيكان كراميل", nameEn: "PECAN CARAMEL", price: 24, image: "/images/sweets/7.JPG" },
      { id: "latte-cake", nameAr: "لاتيه كيك", nameEn: "LATTE CAKE", price: 20, image: "/images/sweets/8.JPG" },
      { id: "berry-cake", nameAr: "بيري كيك", nameEn: "BERRY CAKE", price: 22, image: "/images/sweets/9.JPG" },
      { id: "date-cheesecake", nameAr: "تشيز التمر", nameEn: "DATE CHEESECAKE", price: 20, image: "/images/sweets/10.JPG" },
      { id: "cookies", nameAr: "كوكيز", nameEn: "CLASSIC COOKIES", price: 9, image: "/images/sweets/11.jpeg" },
    ],
  },
];
