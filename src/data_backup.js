const data = [
  {
    Id: 1,
    Link: { Text: "\u82b1\u65d7\u9280\u884c\u9801\u7c64", Title: "\u60c5\u4eba\u7bc0\u9001\u79ae\u63a8\u85a6\u2661 \u5168\u583447\u6298\u8d77", Background: "#00d4ff" },
    Img: {
      Src: "https://fs-a.ecimg.tw/img/h24/v2/layout/index/20220721134802_62d8e73482e47_720x1192.jpg?text=%E9%AB%98%E6%BA%AB%E8%AD%A6%E5%A0%B1_1",
      Text: "\u82b1\u65d7\u9280\u884cLOGO",
    },
  },
  {
    Id: 2,
    Link: { Text: "\u82b1\u65d7\u9280\u884c", Url: "\u9023\u7d50\u81f3 \u82b1\u65d7\u9280\u884c \u7684\u641c\u5c0b\u7d50\u679c" },
    ExtraData: { ElementType: "Search" },
  },
  {
    Id: 3,
    Link: { Text: "Citibank Taiwan ", Url: "https://www.citibank.com.tw" },
    ExtraData: { ElementType: "Url" },
  },
  {
    Id: 4,
    Link: { Text: "airpods", Url: "https://shopping.pchome.com.tw/" },
    ExtraData: { ElementType: "Search" },
  },
  {
    Id: 5,
    Link: { Text: "homepod mini", Url: "https://shopping.pchome.com.tw/" },
    ExtraData: { ElementType: "Search" },
  },
  {
    Id: 6,
    Link: { Text: "", Url: "https://shopping.pchome.com.tw/" },
    ExtraData: { ElementType: "Search" },
  },
  {
    Id: 7,
    Link: {
      Text: "Nintendo Switch\u300a\u904b\u52d5\u300b\u4e2d\u6587\u7248",
      price: "179",
      Url: "DGBJBH-1900F0T7P",
    },
    Img: {
      Src: "/items/DGBJBH1900F0T7P/000007_1652249825.jpg",
    },
    ExtraData: {
      ElementType: "Prod",
      Sort: 1,
    },
  },
  {
    Id: 8,
    Link: {
      Text: "Fitbit Versa 3 \u667a\u6167\u624b\u9336",
      price: "179",
      Url: "DEAQDO-A900B7NFL",
    },
    Img: {
      Src: "/items/DEAQDOA900B7NFL/000007_1616652517.jpg",
    },
    ExtraData: {
      ElementType: "Prod",
      Sort: 2,
    },
  },
  {
    Id: 9,
    Link: {
      Text: "富士通Fujitsu《冷暖型-高級系列》變頻分離式空調 ASCG050KGTA/AOCG050KGTA",
      price: "20,000",
      Url: "DPAFEX-1900F926K",
    },
    Img: {
      Src: "/items/DPAFEX1900F926K/000007_1656829638.jpg",
    },
    ExtraData: {
      ElementType: "Store",
      Sort: 3,
    },
  },
  {
    Id: 10,
    Link: {
      Text: "Panasonic國際牌 雙科技無邊框玻璃610公升四門冰箱NR-D611XGS-N 翡翠金",
      price: "60",
      Url: "DPAC1T-A900AVR5T",
    },
    Img: {
      Src: "/items/DPAC1TA900AVR5T/000007_1618576580.jpg",
    },
    ExtraData: {
      ElementType: "Prod",
      Sort: 4,
    },
  },
  {
    Id: 11,
    Link: {
      Text: "GEORGIA喬亞 滴濾無糖黑咖啡 350ml(24入/箱)",
      price: "3555",
      Url: "DBABE2-A900B3IQN",
    },
    Img: {
      Src: "/items/DBABE2A900B3IQN/000007_1615968539.jpg",
    },
    ExtraData: {
      ElementType: "Prod",
      Sort: 5,
    },
  },
  {
    Id: 12,
    Link: {
      Text: "ANESSA 安耐曬 金鑽防曬組2204(金鑽高效防曬露N 4X版 60ml+12mL)",
      price: "2000",
      Url: "DDCE0H-A900F5I76",
    },
    Img: {
      Src: "/items/DDCE0HA900F5I76/000007_1654574381.jpg",
    },
    ExtraData: {
      ElementType: "Prod",
      Sort: 6,
    },
  },
  {
    Id: 13,
    Link: {
      Text: "義美小泡芙享樂夾鏈包(香草牛奶＋特濃巧克力）",
      price: "300",
      Url: "DBACD4-A900C3LYX",
    },
    Img: {
      Src: "/items/DBACD4A900C3LYX/000007_1639711687.jpg",
    },
    ExtraData: {
      ElementType: "Prod",
      Sort: 7,
    },
  },
  {
    Id: 14,
    Link: {
      Text: "萬歲牌蔓越莓核桃(130g)",
      price: "88",
      Url: "DBACJ7-A900B63U7",
    },
    Img: {
      Src: "/items/DBACJ7A900B63U7/000007_1617786470.jpg",
    },
    ExtraData: {
      ElementType: "Prod",
      Sort: 8,
    },
  },
  {
    Id: 15,
    Link: {
      Text: "HP 15s-fq2008TU 星幻粉(i5-1135 G7/8GB/512GB PCIe/W11/FHD/15.6)",
      price: "1000",
      Url: "DHAG4S-1900EUIF3",
    },
    Img: {
      Src: "/items/DHAG4S1900EUIF3/000007_1649643321.jpg",
    },
    ExtraData: {
      ElementType: "Prod",
      Sort: 9,
    },
  },
  {
    Id: 16,
    Link: {
      Text: "【Dior 迪奧】Miss Dior花漾迪奧淡香水 50ml",
      price: "789",
      Url: "DDAH1S-A900EX38Z",
    },
    Img: {
      Src: "/items/DDAH1SA900EX38Z/000007_1650277642.jpg",
    },
    ExtraData: {
      ElementType: "Prod",
      Sort: 10,
    },
  },
  {
    Id: 17,
    Link: {
      Text: "星賀和牛A4+日本和牛嫩肩(板腱)牛排200g±5%",
      price: "34",
      Url: "DBCP03-A900F1L7Q",
    },
    Img: {
      Src: "/items/DBCP03A900F1L7Q/000007_1657264452.jpg",
    },
    ExtraData: {
      ElementType: "Prod",
      Sort: 11,
    },
  },
  {
    Id: 18,
    Link: {
      Text: "【日本風倍清】織物除菌消臭噴霧9840ml (高效除菌)",
      price: "9000",
      Url: "https://www.pchomeec.tw/activity/AC29412758",
    },
    Img: {
      Src: "/items/DAAK90A900AD51J/000007_1629189763.jpg",
    },
    ExtraData: {
      ElementType: "Url",
      Sort: 12,
    },
  },
  {
    Id: 19,
    Link: {
      Text: "PChome生鮮 - 金鑽鳳梨：1顆(1.5kg ±10%) 鄰家鮮生嚴選",
      price: "4667",
      Url: "DBDM00-A900BROCE",
    },
    Img: {
      Src: "/items/DBDM00A900BROCE/000007_1631541891.jpg",
    },
    ExtraData: {
      ElementType: "Prod",
      Sort: 13,
    },
  },
  {
    Id: 20,
    Link: {
      Text: "PChome生鮮 - 奇異果：6顆(500g ±10%) 鄰家鮮生嚴選",
      price: "247",
      Url: "DBDM00-A900BROC3",
    },
    Img: {
      Src: "/items/DBDM00A900BROC3/000007_1631540606.jpg",
    },
    ExtraData: {
      ElementType: "Search",
      Sort: 14,
    },
  },
  {
    Id: 21,
    Link: {
      Text: "TECO東元 14吋微電腦遙控DC節能電風扇 XA1406BRD",
      price: "888",
      Url: "DMAB31-A900DYOZ8",
    },
    Img: {
      Src: "/items/DMAB31A900DYOZ8/000007_1644380207.jpg",
    },
    ExtraData: {
      ElementType: "Prod",
      Sort: 15,
    },
  },
  {
    Id: 22,
    Link: {
      Text: "CORSAIR VIRTUOSO RGB無線耳機SE咖啡棕",
      price: "4578",
      Url: "DCAY4D-A900C4GWG",
    },
    Img: {
      Src: "/items/DCAY4DA900C4GWG/000007_1640317548.jpg",
    },
    ExtraData: {
      ElementType: "Store",
      Sort: 16,
    },
  },
  {
    Id: 23,
    Link: {
      Text: "【OOHA】荔枝乳酸氣泡飲+【OOHA】水蜜桃烏龍茶氣泡飲+【OOHA】柚子海鹽氣泡飲(330mlx24入/箱),共三箱",
      price: "256",
      Url: "DBABHA-1900F9C12",
    },
    Img: {
      Src: "/items/DBABHA1900F9C12/000007_1657017710.jpg",
    },
    ExtraData: {
      ElementType: "Prod",
      Sort: 17,
    },
  },
  {
    Id: 24,
    Link: {
      Text: "【DOVE 多芬】滋養沐浴乳 舒敏溫和 1Lx6 送冷水壺1.5L",
      price: "1791",
      Url: "DAAJCD-A900C0Z55",
    },
    Img: {
      Src: "/items/DAAJCDA900C0Z55/000007_1637751615.jpg",
    },
    ExtraData: {
      ElementType: "Store",
      Sort: 18,
    },
  },
];

export { data };