// const folder = "https://poznaj-testy.hekko24.pl/kursy";
// const folder = "https://files.dacmwwxjyw.cfolks.pl/kursy";
const folder = "https://hosting2396491.online.pro/kursy";

export interface Lesson {
  title: string;
  description: string;
  videoUrl: string;
}

export interface Course {
  accessCodes: string[];
  slug: string;
  cardTitle: string;
  cardDescription: string;
  thumbnail: string;
  price: number;
  dotpay: string;
  currency: string;
  lessons: Lesson[];
}

const kompendiumPrzedEgzamine: Course = {
  accessCodes: ["KOMP", "KOWTS"],
  slug: "/kompendium-wiedzy-przed-egzaminem-na-prawo-jazdy",
  cardTitle: "Kompendium wiedzy przed egzaminem na prawo jazdy",
  cardDescription:
    "Z tego wideo szkolenia dowiesz się krok po kroku, co będzie na Twoim państwowym egzaminie na prawo jazdy! Zapraszam do oglądania lekcji wideo.",
  thumbnail: `https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80`,
  price: 47,
  dotpay:
    "https://ssl.dotpay.pl/t2/?chk=e8db9dadb47b1cff1bd415802643319b6e5a72a1540a75ddf64434c2a47b0aa9&pid=jqbhda9k0j1z9xrux86llhic3l3i88po",
  currency: "zł",

  lessons: [
    {
      title: "",
      description: "",
      videoUrl: `${folder}/kompendium_przed_egzaminem.mp4`,
    },
    {
      title: "",
      description: "",
      videoUrl: `${folder}/swiatla_i_maska.mp4`,
    },
    {
      title: "",
      description: "",
      videoUrl: `${folder}/luk_i_gorka.mp4`,
    },
    {
      title: "",
      description: "",
      videoUrl: `${folder}/wlaczanie_do_ruchu_i_zmiana_pasa.mp4`,
    },
    {
      title: "",
      description: "",
      videoUrl: `${folder}/zawracanie.mp4`,
    },
    {
      title: "",
      description: "",
      videoUrl: `${folder}/parkowanie_calosc.mp4`,
    },

    {
      title: "",
      description: "",
      videoUrl: `${folder}/bledy_przerywajace_egzamin.mp4`,
    },
  ],
};

const niespodziankiNaEgzaminie: Course = {
  accessCodes: ["SYT", "SOERW"],
  slug: "/niespodzianki-na-egzaminie-na-prawo-jazdy",
  cardTitle: "Niespodzianki na egzaminie na prawo jazdy!",
  cardDescription:
    "W tym wideo szkoleniu wyjaśniam wszystki podchwytliwe sytuacje i niespodzianki, jakie możesz napotkać na Twoim egzaminie państwowym na prawo jazdy!",
  thumbnail: `https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80`,
  price: 47,
  dotpay:
    "https://ssl.dotpay.pl/t2/?chk=622a90a948dff32862a8e3ef72a871b4552e2e138903eab605bfb9a01fb2de46&pid=3mwb5b79u5fn0zkiilw7kon25s28or63",
  currency: "zł",
  lessons: [
    {
      title: "Zapraszam do wzięcia udziału w szkoleniu!",
      description: "Możesz podkręcić głośność.",
      videoUrl: `${folder}/niespodzianki_na_egzaminie.mp4`,
    },
    {
      title: "",
      description: "",
      videoUrl: `${folder}/1-3sytuacje.mp4`,
    },
    {
      title: "",
      description: "",
      videoUrl: `${folder}/4-9sytuacje.mp4`,
    },
    {
      title: "",
      description: "",
      videoUrl: `${folder}/10-12sytuacje.mp4`,
    },
    {
      title: "",
      description: "",
      videoUrl: `${folder}/13-19sytuacje.mp4`,
    },
    {
      title: "",
      description: "",
      videoUrl: `${folder}/20-21sytuacje.mp4`,
    },
  ],
};

export const allCourses: Course[] = [
  kompendiumPrzedEgzamine,
  niespodziankiNaEgzaminie,
];
