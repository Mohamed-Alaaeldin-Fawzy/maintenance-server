export const dataUser = [
  {
    _id: "63701cc1f03239c72c00017f",
    name: "Mohamed Alaa",
    email: "mohamed.alaa@micc-eg.net",
    password: "Mo_Amer1996",
    role: "admin",
    job: "production head",
    department: "all",
  },
  {
    _id: "63701cc1f03239c72c00017A",
    name: "Remon Aowd",
    email: "remon.aowd@abu-auf.com",
    password: "123456789",
    role: "admin",
    job: "Operation manager",
    department: "all",
  },
  {
    _id: "63701cc1f03239c72c00017B",
    name: "Mohamed Hamdullah",
    email: "mohamed.ahmed@micc-eg.com",
    password: "123456789",
    role: "maintenance",
    job: "Maintenance section head",
    department: "all",
  },
];

export const CMData = [
  {
    _id: "63701d24f03239c72c00018e",
    name: "عطل في ماكينة الطعم",
    description: "موتور التغذية لا يعمل",
    department: "Pretzel",
    isClosed: true,
  },
  {
    _id: "63701d24f03239c72c00018b",
    name: "عطل في مكد التوفي",
    description: "كسر في دراع المكد",
    department: "Candy",
    isClosed: false,
  },
  {
    _id: "63701d24f03239c72c00018c",
    name: "عطل في ماكينة التغليف الصيني",
    description: "تدبيح مستمر من جو السكينة",
    department: "Cigar",
    isClosed: false,
  },
];
export const CMStatData = [
  {
    _id: "6371259df03239e680000035",
    CMId: "63701d24f03239c72c00018e",
    isClosed: true,
    pendingPo: false,
  },
  {
    _id: "6371259df03239e680000036",
    CMId: "63701d24f03239c72c00018b",
    isClosed: false,
    pendingPo: true,
  },
  {
    _id: "6371259df03239e680000037",
    CMId: "63701d24f03239c72c00018c",
    isClosed: false,
    pendingPo: false,
  },
];
