const user = {
  name: "Марк",
  surname: "Нагорняк",
  userPhoto: "my-photo.jpg",
  qrQode: "qr-code.svg",
  dreams: [
    { src: "car.jpg", alt: "Авто моєї мрії" },
    { src: "home.jpg", alt: "Домівка" },
    { src: "voyage.jpg", alt: "Подорож до Дубаїв" },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  150000,
  150000,
  150000,
  150000,
  200000,
  200000,
  200000,
  200000,
  300000,
  300000,
  300000,
  300000,
];

const necessaryExpenses = 800;

const todo = [
  { month: "2022", skill: "створити канал" },
  { month: "2023", skill: "Набрати 100 підписників" },
  { month: "2024", skill: "набрати 500 підписників" },
  { month: "2025", skill: "увімкнути монетизацію" },
  { month: "2026", skill: "отримати срібну кнопку YouTube" },
  { month: "2027", skill: "отримати золоту кнопку YouTube" },
  { month: "2028", skill: "отримати діамантову кнопку YouTube" },
  { month: "2029", skill: "Мати всього 5 міліардів переглядів" },
  { month: "2030", skill: "купити те що хочу" },
];

export { user, arr, necessaryExpenses, todo };