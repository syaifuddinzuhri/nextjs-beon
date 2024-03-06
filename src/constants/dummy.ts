import { IconDown, IconInformationCustom, IconNew, IconPrice, IconServiceOff, IconServiceOn } from "../assets";

export const Service: Array<{ title: string; name: string; image: string; active: boolean }> = [
  { title: "Promo", name: "promo", image: "/images/social/promo.png", active: false },
  { title: "Instagram", name: "instagram", image: "/images/social/instagram.png", active: false },
  { title: "Youtube", name: "youtube", image: "/images/social/youtube.png", active: false },
  { title: "Facebook", name: "facebook", image: "/images/social/facebook.png", active: false },
  { title: "Tiktok", name: "tiktok", image: "/images/social/tiktok.png", active: false },
  { title: "X/Twitter", name: "twitter", image: "/images/social/twitter.png", active: false },
  { title: "Shopee", name: "shopee", image: "/images/social/shopee.png", active: false },
  { title: "Telegram", name: "telegram", image: "/images/social/telegram.png", active: false },
  { title: "Spotify", name: "spotify", image: "/images/social/spotify.png", active: false },
  { title: "Google", name: "google", image: "/images/social/google.png", active: false },
  { title: "Playstore", name: "playstore", image: "/images/social/playstore.png", active: false },
  { title: "Linkedin", name: "linkedin", image: "/images/social/linkedin.png", active: false },
  { title: "Lazada", name: "lazada", image: "/images/social/lazada.png", active: false },
  { title: "Snack Video", name: "snack-video", image: "/images/social/snack.png", active: false },
  { title: "Others", name: "others", image: "/images/social/others.png", active: false },
];

export const News: Array<{ id: number; title: string }> = [
  { id: 1, title: "🎉 COOMINGSOON BIG SALE 11.11🎉" },
  { id: 2, title: "😎🍷 BACK TO RELA 😎🍷" },
  { id: 3, title: "🎉 COOMINGSOON BIG SALE 11.11🎉" },
];

export const ProductData: Array<{
  id: number;
  type: string;
  title: string;
  rate: number;
  sold: string;
  price: string;
  discount: string;
  percentage: number;
}> = [
  {
    id: 1,
    type: "new",
    title: "Best Deal - Instagram Post/Photo Likes [R7] [SUPER CEPAT]",
    rate: 4,
    sold: "1.211x",
    price: "Rp6.328",
    discount: "Rp4.954",
    percentage: 22,
  },
  {
    id: 2,
    type: "sale",
    title: "Best Deal - Instagram Post/Photo Likes [R7] [SUPER CEPAT]",
    rate: 4,
    sold: "1.211x",
    price: "Rp6.328",
    discount: "Rp4.954",
    percentage: 22,
  },
  {
    id: 3,
    type: "discount",
    title: "Best Deal - Instagram Post/Photo Likes [R7] [SUPER CEPAT]",
    rate: 4,
    sold: "1.211x",
    price: "Rp6.328",
    discount: "Rp4.954",
    percentage: 22,
  },
  {
    id: 4,
    type: "hot",
    title: "Best Deal - Instagram Post/Photo Likes [R7] [SUPER CEPAT]",
    rate: 4,
    sold: "1.211x",
    price: "Rp6.328",
    discount: "Rp4.954",
    percentage: 22,
  },
  {
    id: 5,
    type: "best",
    title: "Best Deal - Instagram Post/Photo Likes [R7] [SUPER CEPAT]",
    rate: 4,
    sold: "1.211x",
    price: "Rp6.328",
    discount: "Rp4.954",
    percentage: 22,
  },
  {
    id: 6,
    type: "",
    title: "Best Deal - Instagram Post/Photo Likes [R7] [SUPER CEPAT]",
    rate: 4,
    sold: "1.211x",
    price: "Rp6.328",
    discount: "Rp4.954",
    percentage: 22,
  },
  {
    id: 7,
    type: "",
    title: "Best Deal - Instagram Post/Photo Likes [R7] [SUPER CEPAT]",
    rate: 3,
    sold: "1.211x",
    price: "Rp6.328",
    discount: "Rp4.954",
    percentage: 22,
  },
  {
    id: 8,
    type: "",
    title: "Best Deal - Instagram Post/Photo Likes [R7] [SUPER CEPAT]",
    rate: 4,
    sold: "1.211x",
    price: "Rp6.328",
    discount: "Rp4.954",
    percentage: 22,
  },
  {
    id: 9,
    type: "",
    title: "Best Deal - Instagram Post/Photo Likes [R7] [SUPER CEPAT]",
    rate: 5,
    sold: "1.211x",
    price: "Rp6.328",
    discount: "Rp4.954",
    percentage: 22,
  },
];

export const FilterTestimonial: Array<{ label: string; value: string }> = [
  { label: "Terbaru", value: "terbaru" },
  { label: "Rating Tertinggi", value: "tertinggi" },
  { label: "Rating Terendah", value: "terendah" },
];

export const FilterCommissionData: Array<{ label: string; value: string }> = [
  { label: "Sudah Diredeem", value: "success" },
  { label: "Belum Diredeem", value: "pending" },
];

export const FilterRedeemData: Array<{ label: string; value: string }> = [
  { label: "Paid", value: "success" },
  { label: "Pending", value: "pending" },
];

export const Order: Array<{
  id: string;
  date: string;
  product: string;
  target: string;
  qty: number;
  status: string;
  action: string;
  rate: number;
}> = [
  {
    id: "RS123456",
    date: "10/11/2023",
    product: "ABC",
    target: "https://www.instagram.com/p/CwAi_KzP4OW/",
    qty: 100,
    status: "Completed",
    action: "",
    rate: 5,
  },
  {
    id: "RS123456",
    date: "10/11/2023",
    product: "ABC",
    target: "https://www.instagram.com/p/CwAi_KzP4OW/",
    qty: 100,
    status: "Canceled",
    action: "",
    rate: 5,
  },
  {
    id: "RS123456",
    date: "10/11/2023",
    product: "ABC",
    target: "https://www.instagram.com/p/CwAi_KzP4OW/",
    qty: 100,
    status: "Pending",
    action: "",
    rate: 3,
  },
  {
    id: "RS123456",
    date: "10/11/2023",
    product: "ABC",
    target: "https://www.instagram.com/p/CwAi_KzP4OW/",
    qty: 100,
    status: "Processing",
    action: "",
    rate: 5,
  },
  {
    id: "RS123456",
    date: "10/11/2023",
    product: "ABC",
    target: "https://www.instagram.com/p/CwAi_KzP4OW/",
    qty: 100,
    status: "Waiting",
    action: "",
    rate: 5,
  },
  {
    id: "RS123456",
    date: "10/11/2023",
    product: "ABC",
    target: "https://www.instagram.com/p/CwAi_KzP4OW/",
    qty: 100,
    status: "Inprogress",
    action: "",
    rate: 5,
  },
  {
    id: "RS123456",
    date: "10/11/2023",
    product: "ABC",
    target: "https://www.instagram.com/p/CwAi_KzP4OW/",
    qty: 100,
    status: "Partial",
    action: "",
    rate: 5,
  },
];

export const ServiceList: Array<{
  id: string;
  name: string;
  min: number;
  max: number;
  price: string;
  speed: string;
  description: string;
  period: string;
  rate: number;
}> = [
  {
    id: "7214",
    name: "ABC",
    min: 100,
    max: 5000,
    price: "Rp 120.000",
    speed: "2 jam 21 mnt",
    description: "",
    period: "21/11/2023",
    rate: 4,
  },
  {
    id: "7214",
    name: "ABC",
    min: 100,
    max: 5000,
    price: "Rp 120.000",
    speed: "2 jam 21 mnt",
    description: "",
    period: "21/11/2023",
    rate: 4,
  },
  {
    id: "7214",
    name: "ABC",
    min: 100,
    max: 5000,
    price: "Rp 120.000",
    speed: "2 jam 21 mnt",
    description: "",
    period: "21/11/2023",
    rate: 4,
  },
  {
    id: "7214",
    name: "ABC",
    min: 100,
    max: 5000,
    price: "Rp 120.000",
    speed: "2 jam 21 mnt",
    description: "",
    period: "21/11/2023",
    rate: 4,
  },
  {
    id: "7214",
    name: "ABC",
    min: 100,
    max: 5000,
    price: "Rp 120.000",
    speed: "2 jam 21 mnt",
    description: "",
    period: "21/11/2023",
    rate: 4,
  },
  {
    id: "7214",
    name: "ABC",
    min: 100,
    max: 5000,
    price: "Rp 120.000",
    speed: "2 jam 21 mnt",
    description: "",
    period: "21/11/2023",
    rate: 4,
  },
];

export const BalanceData: Array<{
  id: string;
  date: string;
  method: string;
  amount: string;
  bonus: string;
  balance: string;
  status: string;
}> = [
  {
    id: "RS123456",
    date: "10/11/2023",
    method: "BCA",
    amount: "Rp 100.000",
    bonus: "Rp 10.000",
    balance: "Rp 110.000",
    status: "Pending",
  },
  {
    id: "RS123456",
    date: "10/11/2023",
    method: "BCA",
    amount: "Rp 100.000",
    bonus: "Rp 10.000",
    balance: "Rp 110.000",
    status: "Canceled",
  },
  {
    id: "RS123456",
    date: "10/11/2023",
    method: "BCA",
    amount: "Rp 100.000",
    bonus: "Rp 10.000",
    balance: "Rp 110.000",
    status: "Paid",
  },
  {
    id: "RS123456",
    date: "10/11/2023",
    method: "BCA",
    amount: "Rp 100.000",
    bonus: "Rp 10.000",
    balance: "Rp 110.000",
    status: "Fraud",
  },
  {
    id: "RS123456",
    date: "10/11/2023",
    method: "BCA",
    amount: "Rp 100.000",
    bonus: "Rp 10.000",
    balance: "Rp 110.000",
    status: "Waiting",
  },
];

export const BalanceMutationData: Array<{
  id: string;
  name: string;
  debit: string;
  credit: string;
  balance: string;
  date: string;
}> = [
  {
    id: "INV123456",
    name: "TOPUP",
    debit: "Rp 120.000",
    credit: "-",
    balance: "Rp 200.000",
    date: "10/11/2023",
  },
  {
    id: "RS1246781",
    name: "ORDER",
    debit: "-",
    credit: "-Rp 120.000",
    balance: "Rp 200.000",
    date: "10/11/2023",
  },
  {
    id: "RS1245674",
    name: "REFUND",
    debit: "Rp 120.000",
    credit: "-",
    balance: "Rp 200.000",
    date: "10/11/2023",
  },
  {
    id: "RS1246781",
    name: "ORDER",
    debit: "-",
    credit: "-Rp 120.000",
    balance: "Rp 200.000",
    date: "10/11/2023",
  },
  {
    id: "RS1245674",
    name: "REFUND",
    debit: "Rp 120.000",
    credit: "-",
    balance: "Rp 200.000",
    date: "10/11/2023",
  },
  {
    id: "INV123456",
    name: "TOPUP",
    debit: "Rp 120.000",
    credit: "-",
    balance: "Rp 200.000",
    date: "10/11/2023",
  },
];

export const VoucherData: Array<{
  type: string;
  voucher: string;
  description: string;
  disabled: boolean;
}> = [
  {
    type: "Deposit",
    voucher: "HAPPYDAY",
    description: "Bonus 10% Khusus plan premium 1x claim ... <br /> Berlaku sampai ...",
    disabled: false,
  },
  {
    type: "Deposit",
    voucher: "FIRSTORDER",
    description: "Potongan 5% untuk all plan 1x claim ... <br /> Berlaku sampai ...",
    disabled: false,
  },
  {
    type: "Order",
    voucher: "FIRSTORDER",
    description: "Potongan 5% untuk all plan 1x claim ... <br /> Berlaku sampai ...",
    disabled: true,
  },
];

export const TestimonialData: Array<{
  image: string;
  name: string;
  date: string;
  rate: number;
  tagline: string[];
  comment: string;
}> = [
  {
    image: "/images/welcome.png",
    name: "Erick",
    date: "21/11/2023",
    rate: 4,
    tagline: ["Layanan cepat", "Kualitas bagus", "Terbaik"],
    comment: "Sangat bagus layanannya...",
  },
  {
    image: "",
    name: "Erick",
    date: "21/11/2023",
    rate: 4,
    tagline: ["Layanan cepat", "Kualitas bagus", "Terbaik"],
    comment: "Sangat bagus layanannya...",
  },
  {
    image: "",
    name: "Erick",
    date: "21/11/2023",
    rate: 4,
    tagline: ["Layanan cepat", "Kualitas bagus", "Terbaik"],
    comment: "Sangat bagus layanannya...",
  },
  {
    image: "",
    name: "Erick",
    date: "21/11/2023",
    rate: 4,
    tagline: ["Layanan cepat", "Kualitas bagus", "Terbaik"],
    comment: "Sangat bagus layanannya...",
  },
  {
    image: "",
    name: "Erick",
    date: "21/11/2023",
    rate: 4,
    tagline: ["Layanan cepat", "Kualitas bagus", "Terbaik"],
    comment: "Sangat bagus layanannya...",
  },
  {
    image: "",
    name: "Erick",
    date: "21/11/2023",
    rate: 4,
    tagline: ["Layanan cepat", "Kualitas bagus", "Terbaik"],
    comment: "Sangat bagus layanannya...",
  },
  {
    image: "",
    name: "Erick",
    date: "21/11/2023",
    rate: 4,
    tagline: ["Layanan cepat", "Kualitas bagus", "Terbaik"],
    comment: "Sangat bagus layanannya...",
  },
  {
    image: "",
    name: "Erick",
    date: "21/11/2023",
    rate: 4,
    tagline: ["Layanan cepat", "Kualitas bagus", "Terbaik"],
    comment: "Sangat bagus layanannya...",
  },
  {
    image: "",
    name: "Erick",
    date: "21/11/2023",
    rate: 4,
    tagline: ["Layanan cepat", "Kualitas bagus", "Terbaik"],
    comment: "Sangat bagus layanannya...",
  },
];

export const CartData: Array<{
  id: string;
  name: string;
  target: string;
  qty: number;
  price: string;
  discount: string;
  voucher: string;
}> = [
  {
    id: "ID1",
    name: "Auto Likes Instagram Indonesia [Limit 30 post/30 hari] [Prioritas]",
    target: "agnezmo",
    qty: 200,
    price: "Rp 100.000",
    discount: "-Rp 50.000",
    voucher: "HAPPYDAY",
  },
  {
    id: "ID2",
    name: "Auto Likes Instagram Indonesia [Limit 30 post/30 hari] [Prioritas]",
    target: "agnezmo",
    qty: 200,
    price: "Rp 100.000",
    discount: "",
    voucher: "",
  },
  {
    id: "ID3",
    name: "Auto Likes Instagram Indonesia [Limit 30 post/30 hari] [Prioritas]",
    target: "agnezmo",
    qty: 200,
    price: "Rp 100.000",
    discount: "-Rp 50.000",
    voucher: "",
  },
  {
    id: "ID4",
    name: "Auto Likes Instagram Indonesia [Limit 30 post/30 hari] [Prioritas]",
    target: "agnezmo",
    qty: 200,
    price: "Rp 100.000",
    discount: "-Rp 50.000",
    voucher: "",
  },
  {
    id: "ID5",
    name: "Auto Likes Instagram Indonesia [Limit 30 post/30 hari] [Prioritas]",
    target: "agnezmo",
    qty: 200,
    price: "Rp 100.000",
    discount: "-Rp 50.000",
    voucher: "",
  },
  {
    id: "ID6",
    name: "Auto Likes Instagram Indonesia [Limit 30 post/30 hari] [Prioritas]",
    target: "agnezmo",
    qty: 200,
    price: "Rp 100.000",
    discount: "-Rp 50.000",
    voucher: "",
  },
];

export const SelectCategory: Array<{ label: string; value: string; image: string }> = [
  {
    label: "Instagram Autolikes",
    value: "ig-likes",
    image: "/images/social/instagram.png",
  },
  {
    label: "Instagram Comments",
    value: "ig-comments",
    image: "/images/social/instagram.png",
  },
  {
    label: "Instagram Followers",
    value: "ig-followers",
    image: "/images/social/instagram.png",
  },
  {
    label: "Tiktok Followers",
    value: "tt-followers",
    image: "/images/social/tiktok.png",
  },
];

export const SelectService: Array<{ label: string; value: string }> = [
  {
    label: "Instagram Autolikes",
    value: "ig-likes",
  },
  {
    label: "Instagram Comments",
    value: "ig-comments",
  },
  {
    label: "Instagram Followers",
    value: "ig-followers",
  },
  {
    label: "Tiktok Followers",
    value: "tt-followers",
  },
];

export const SelectWait: Array<{ label: string; value: string }> = [
  {
    label: "0 menit",
    value: "0",
  },
  {
    label: "5 menit",
    value: "5",
  },
  {
    label: "10 menit",
    value: "10",
  },
  {
    label: "30 menit",
    value: "30",
  },
  {
    label: "60 menit",
    value: "60",
  },
  {
    label: "90 menit",
    value: "90",
  },
];

export const SelectTimeWait: Array<{ label: string; value: string }> = [
  {
    label: "Jeda per 1 jam",
    value: "1",
  },
  {
    label: "Jeda per 2 jam",
    value: "2",
  },
  {
    label: "Jeda per 3 jam",
    value: "3",
  },
  {
    label: "Jeda per 6 jam",
    value: "6",
  },
  {
    label: "Jeda per 12 jam",
    value: "12",
  },
  {
    label: "Per 1 hari",
    value: "24",
  },
  {
    label: "Per 2 hari",
    value: "48",
  },
  {
    label: "Per 3 hari",
    value: "72",
  },
];

export const SliderData: Array<string> = [
  "/images/slider.png",
  "/images/slider.png",
  "/images/slider.png",
  "/images/slider.png",
  "/images/slider.png",
];

export const PlanData: Array<{
  title: string;
  price: string;
  tag: string;
  feature: { list: string; checked: boolean; information?: boolean }[];
  background: string;
  link: string;
}> = [
  {
    title: "Standart",
    price: "15.000",
    tag: "Murah!",
    feature: [
      { list: "Aktif Selamanya", checked: true, information: true },
      { list: "Saldo Rp20.000", checked: true },
      { list: "Layanan sosial media", checked: true },
      { list: "Kode voucher Eventual", checked: true },
      { list: "Bonus deposit 10%", checked: true },
      { list: "Bonus poin", checked: true },
      { list: "Sistem afiliasi gratis saldo Rp20.000", checked: false },
      { list: "Customer service prioritas", checked: false },
    ],
    background: "linear-gradient(197deg, #6246FF 0.6%, #FFB9B9 136.46%)",
    link: "/payment/method",
  },
  {
    title: "Premium",
    price: "250.000",
    tag: "Best Deal!",
    feature: [
      { list: "Aktif Selamanya", checked: true, information: true },
      { list: "Saldo Rp50.000", checked: true },
      { list: "Akses semua layanan lengkap", checked: true },
      { list: "Kode voucher Eventual", checked: true },
      { list: "Bonus deposit 10%", checked: true },
      { list: "Sistem afiliasi gratis saldo Rp20.000", checked: true },
      { list: "Customer service prioritas", checked: true },
      { list: "Akses layanan termurah", checked: true },
    ],
    background: "linear-gradient(197deg, #FF46AA 0.6%, #FDF37A 136.46%)",
    link: "/payment/method",
  },
];

export const HowToData: string[] = [
  "Enter your BCA ATM Card and PIN",
  "Select the Other Transactions menu > Transfer > to BCA Virtual Account.",
  "Enter the 5 digit company code for Loket Digital (12345) and the cellphone number registered in your Loket Digital account (Example: 1234508234928409238)",
  "On the confirmation page, make sure the payment details are correct such as VA Number, Name, Company/Product and Total Bill",
  "Enter the transfer amount according to the total bill",
  "Follow the instructions to complete the transfer",
  "Save the transaction receipt as proof of payment",
];

export const informationData: Array<{
  type: string;
  name: string;
  product: string;
  tag: string;
  action: string;
  icon: any;
}> = [
  {
    type: "price-down",
    name: "Turun Harga",
    product: "1234 - Youtube Views (250K)(REAL) Dari <b>Rp50.000 ke Rp40.000</b>",
    tag: "BEST DEAL!!",
    action: "#",
    icon: IconDown,
  },
  {
    type: "service-info",
    name: "Info Penting Layanan",
    product:
      "Mohon maaf saat ini sedang ada update pada Instagram yang membuat proses pengisian layanan views menjadi terkendala...",
    tag: "",
    action: "",
    icon: IconInformationCustom,
  },
  {
    type: "price-new",
    name: "Harga Baru",
    product: "1265 - Youtube Likes (500K)(REAL) Dari <b>Rp35.000 ke Rp45.000</b>",
    tag: "",
    action: "",
    icon: IconPrice,
  },
  {
    type: "service-new",
    name: "Layanan Baru",
    product: "1114 - Tiktok Followers <b>Rp77.000</b>",
    tag: "NEW!!",
    action: "#",
    icon: IconNew,
  },
  {
    type: "system-on",
    name: "Layanan ON",
    product: "1114 - Tiktok Followers <b>Rp77.000</b>",
    tag: "ON!!",
    action: "#",
    icon: IconServiceOn,
  },
  {
    type: "system-off",
    name: "Layanan OFF",
    product: "1314 - Tiktok Video Saves",
    tag: "",
    action: "",
    icon: IconServiceOff,
  },
];

interface IBankData {
  id: string;
  name: string;
  image?: string;
  admin?: string;
  child?: IBankData[];
}
export const BankData: IBankData[] = [
  {
    name: "Bank Transfer",
    id: "bank-transfer",
    image: "/images/payment/transfer.png",
    admin: "",
    child: [
      {
        name: "BCA Otomatis (recommended)",
        image: "/images/payment/bca.png",
        admin: "Free fee",
        id: "free",
      },
      {
        name: "Bank Negara Indonesia",
        image: "/images/payment/bni.png",
        admin: "Free fee",
        id: "bni",
      },
      {
        name: "Mandiri",
        image: "/images/payment/mandiri.png",
        admin: "Fee: Rp 2.500",
        id: "mandiri",
      },
      {
        name: "Bank Rakyat Indonesia",
        image: "/images/payment/bri.png",
        admin: "Fee: Rp 2.500",
        id: "bca",
      },
    ],
  },
  { name: "Virtual Account (otomatis)", image: "/images/payment/va.png", admin: "", id: "va" },
  { name: "Alfamart", image: "/images/payment/alfamart.png", admin: "", id: "alfamart" },
];

export const CommissionData: Array<{
  username: string;
  transaction: string;
  payment: string;
  commission: string;
  status: string;
  date: string;
}> = [
  {
    username: "Ba**ng12",
    transaction: "Rp 0",
    payment: "Rp 0",
    commission: "Rp 0",
    status: "success",
    date: "10/11/2023",
  },
  {
    username: "Ba**ng12",
    transaction: "Rp 0",
    payment: "Rp 0",
    commission: "Rp 0",
    status: "pending",
    date: "10/11/2023",
  },
  {
    username: "Ba**ng12",
    transaction: "Rp 0",
    payment: "Rp 0",
    commission: "Rp 0",
    status: "pending",
    date: "10/11/2023",
  },
  {
    username: "Ba**ng12",
    transaction: "Rp 0",
    payment: "Rp 0",
    commission: "Rp 0",
    status: "pending",
    date: "10/11/2023",
  },
  {
    username: "Ba**ng12",
    transaction: "Rp 0",
    payment: "Rp 0",
    commission: "Rp 0",
    status: "pending",
    date: "10/11/2023",
  },
  {
    username: "Ba**ng12",
    transaction: "Rp 0",
    payment: "Rp 0",
    commission: "Rp 0",
    status: "success",
    date: "10/11/2023",
  },
  {
    username: "Ba**ng12",
    transaction: "Rp 0",
    payment: "Rp 0",
    commission: "Rp 0",
    status: "success",
    date: "10/11/2023",
  },
  {
    username: "Ba**ng12",
    transaction: "Rp 0",
    payment: "Rp 0",
    commission: "Rp 0",
    status: "success",
    date: "10/11/2023",
  },
];

export const RedeemPointData: Array<{
  point: string;
  nominal: string;
  status: string;
  date: string;
}> = [
  {
    point: "300.000",
    nominal: "Rp 0",
    status: "success",
    date: "10/11/2023",
  },
  {
    point: "300.000",
    nominal: "Rp 0",
    status: "success",
    date: "10/11/2023",
  },
  {
    point: "300.000",
    nominal: "Rp 0",
    status: "success",
    date: "10/11/2023",
  },
  {
    point: "300.000",
    nominal: "Rp 0",
    status: "success",
    date: "10/11/2023",
  },
];

export const IncomePointData: Array<{
  point: string;
  income: string;
  debit: string;
  credit: string;
  balance: string;
  date: string;
  status: string;
}> = [
  {
    point: "9000",
    income: "ORDER",
    debit: "-",
    credit: "20 Poin",
    balance: "1000",
    date: "10/11/2023",
    status: "success",
  },
  {
    point: "11000",
    income: "Verif WA",
    debit: "5 Poin",
    credit: "-",
    balance: "995",
    date: "10/11/2023",
    status: "pending",
  },
  {
    point: "11000",
    income: "Verif WA",
    debit: "5 Poin",
    credit: "-",
    balance: "995",
    date: "10/11/2023",
    status: "success",
  },
  {
    point: "11000",
    income: "Verif WA",
    debit: "5 Poin",
    credit: "-",
    balance: "995",
    date: "10/11/2023",
    status: "success",
  },
];

export const FAQData: Array<{ id: number; title: string; description: string }> = [
  {
    id: 1,
    title: "APAKAH SYARAT REFILL ORDER?",
    description:
      "masuk sama sekali dan anda hanya membayar yang masuk saja, sisa pembayaran yang tidak masuk akan otomatis direfund ke saldo. jadi silakan anda melakukan pemesanan kembali. Anda bisa juga cek di menu mutasi anda.",
  },
  {
    id: 2,
    title: "APAKAH MAKSUD STATUS PESANAN ‘PARTIAL’?",
    description:
      "masuk sama sekali dan anda hanya membayar yang masuk saja, sisa pembayaran yang tidak masuk akan otomatis direfund ke saldo. jadi silakan anda melakukan pemesanan kembali. Anda bisa juga cek di menu mutasi anda.",
  },
  {
    id: 3,
    title: "APAKAH MAKSUD STATUS PESANAN ‘PARTIAL’?",
    description:
      "masuk sama sekali dan anda hanya membayar yang masuk saja, sisa pembayaran yang tidak masuk akan otomatis direfund ke saldo. jadi silakan anda melakukan pemesanan kembali. Anda bisa juga cek di menu mutasi anda.",
  },
  {
    id: 4,
    title: "APAKAH MAKSUD STATUS PESANAN ‘PARTIAL’?",
    description:
      "masuk sama sekali dan anda hanya membayar yang masuk saja, sisa pembayaran yang tidak masuk akan otomatis direfund ke saldo. jadi silakan anda melakukan pemesanan kembali. Anda bisa juga cek di menu mutasi anda.",
  },
  {
    id: 5,
    title: "APAKAH MAKSUD STATUS PESANAN ‘PARTIAL’?",
    description:
      "masuk sama sekali dan anda hanya membayar yang masuk saja, sisa pembayaran yang tidak masuk akan otomatis direfund ke saldo. jadi silakan anda melakukan pemesanan kembali. Anda bisa juga cek di menu mutasi anda.",
  },
  {
    id: 6,
    title: "APAKAH MAKSUD STATUS PESANAN ‘PARTIAL’?",
    description:
      "masuk sama sekali dan anda hanya membayar yang masuk saja, sisa pembayaran yang tidak masuk akan otomatis direfund ke saldo. jadi silakan anda melakukan pemesanan kembali. Anda bisa juga cek di menu mutasi anda.",
  },
  {
    id: 7,
    title: "APAKAH MAKSUD STATUS PESANAN ‘PARTIAL’?",
    description:
      "masuk sama sekali dan anda hanya membayar yang masuk saja, sisa pembayaran yang tidak masuk akan otomatis direfund ke saldo. jadi silakan anda melakukan pemesanan kembali. Anda bisa juga cek di menu mutasi anda.",
  },
  {
    id: 8,
    title: "APAKAH MAKSUD STATUS PESANAN ‘PARTIAL’?",
    description:
      "masuk sama sekali dan anda hanya membayar yang masuk saja, sisa pembayaran yang tidak masuk akan otomatis direfund ke saldo. jadi silakan anda melakukan pemesanan kembali. Anda bisa juga cek di menu mutasi anda.",
  },
  {
    id: 9,
    title: "APAKAH MAKSUD STATUS PESANAN ‘PARTIAL’?",
    description:
      "masuk sama sekali dan anda hanya membayar yang masuk saja, sisa pembayaran yang tidak masuk akan otomatis direfund ke saldo. jadi silakan anda melakukan pemesanan kembali. Anda bisa juga cek di menu mutasi anda.",
  },
  {
    id: 10,
    title: "APAKAH MAKSUD STATUS PESANAN ‘PARTIAL’?",
    description:
      "masuk sama sekali dan anda hanya membayar yang masuk saja, sisa pembayaran yang tidak masuk akan otomatis direfund ke saldo. jadi silakan anda melakukan pemesanan kembali. Anda bisa juga cek di menu mutasi anda.",
  },
];
