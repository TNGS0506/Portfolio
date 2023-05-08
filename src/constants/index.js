import {
  sql,
  tensorflow,
  dotnet,
  dobu,
  kfc,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  embersoft,
  portfolio,
  api,
  game,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: ".NET Developer",
    icon: backend,
  },
  {
    title: "Network Engineer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "SQL db",
    icon: sql,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: ".NET",
    icon: dotnet,
  },
];

const experiences = [
  {
    title: "Холбоо дохиолол,сүлжээний техникч",
    company_name: "Добу Технологи",
    icon: dobu,
    iconBg: "#383E56",
    date: "January 2023 - Until now",
    points: [
      "Барилгын холбоо, сүлжээ, серверийг схемийн дагуу татаж байршуулах.",
      "Тоног төхөөрөмжүүдийг зориулалтын дагуу холбож үйл ажиллагаанд оруулах.",
      "Төхөөрөмж, серверийн, өгөгдлийн сангийн зохион байгуулалт хийж, хэвийн үйл ажиллагааг хангах.",
      "Төхөөмжүүдийн хөгжүүлэлтэд хувь нэмэр оруулах.",
    ],
  },
  {
    title: "Рестораны ажилтан",
    company_name: "KFC Mongolia",
    icon: kfc,
    iconBg: "#E6DEDD",
    date: "May 2022 - October 2022",
    points: [
      "KFC бүтээгдэхүүн бэлтгэх, хоол хийх.",
      "Касс дээр үйлчлүүлэгчдэд үйлчилнэ.",
      "Хоолны газар үйлчлүүлэгчдийн хэрэгцээг хангах.",
      "Бүх талбай, тоног төхөөрөмжийг цэвэр, эмх цэгцтэй байлгах.",
    ],
  },
  {
    title: "Data Analyst",
    company_name: "Embersoft Mongolia",
    icon: embersoft,
    iconBg: "#383E56",
    date: "October 2022 - December 2022",
    points: [
      "Машин сургалт, хиймэл оюун ухааныг бэлтгэхэд шаардлагатай өгөгдлүүдийг цуглуулж, бэлэн болгох.",
      "Машин сургалтын моделийг бэлдэх.",
      "Хэрэгтэй технологиуд болон фрэймворкийг сурч мэдэх.",
    ],
  },
];

const projects = [
  {
    name: "TNGS Portfolio",
    description:
      "Youtube бичлэг үзэн ReactJs, ThreeJS технологи ашиглан хийсэн бүтээл",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/TNGS0506/",
  },
  {
    name: "Random People API",
    description:
      "Энгийн API хийсэн туршилт",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
    ],
    image: api,
    source_code_link: "https://stupendous-souffle-ff7b0d.netlify.app/",
  },
  {
    name: "Unity Ball game",
    description:
      "Unity Технологи дээр C# хэлээр хийсэн тоглоом",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
    ],
    image: game,
    source_code_link: "https://github.com/TNGS0506/",
  },
];

export { services, technologies, experiences, projects };