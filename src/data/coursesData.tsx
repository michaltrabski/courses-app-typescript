const folder = "https://poznaj-testy.hekko24.pl/kursy";

interface Lesson {
  title: string;
  description: string;
  videoUrl: string;
}

export interface Course {
  accessCode: string;
  slug: string;
  title: string;
  offerDescription: string;

  thumbnail: string;
  price: number;
  dotpay: string;
  currency: string;
  lessons: Lesson[];
  contentDescription: string;
}

const kompendium: Course = {
  accessCode: "KOMP",
  slug: "/kompendium-wiedzy",
  title: "Kompendium wiedzy przed egzaminem na prawo jazdy",
  offerDescription: "Zobacz szkolenie.",
  thumbnail: `${folder}/kompendium-wiedzy-thumbnail.jpg`,
  price: 47,
  dotpay:
    "https://ssl.dotpay.pl/t2/?chk=e8db9dadb47b1cff1bd415802643319b6e5a72a1540a75ddf64434c2a47b0aa9&pid=jqbhda9k0j1z9xrux86llhic3l3i88po",
  currency: "zł",

  contentDescription:
    "Z tego wideo szkolenia dowiesz się krok po kroku, co będzie na twoim państwowym egzaminie na prawo jazdy! Zapraszam do oglądania lekcji wideo.",
  lessons: [
    {
      title: "",
      description: "",
      videoUrl: `${folder}/swiatla_i_maska.mp4`,
    },
    {
      title: "",
      description: "",
      videoUrl: `${folder}/lok_i_gorka.mp4`,
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

const sytuacje: Course = {
  accessCode: "SYT",
  slug: "/sytuacje-i-niespodzianki-na-egzaminie",
  title: "Sytuacje i niespodziankie na egzaminie na prawo jazdy!",
  offerDescription: "Zobacz szkolenie.",
  thumbnail: `${folder}/sytuacje-thumbnail.jpg`,
  price: 47,
  dotpay:
    "https://ssl.dotpay.pl/t2/?chk=e8db9dadb47b1cff1bd415802643319b6e5a72a1540a75ddf64434c2a47b0aa9&pid=jqbhda9k0j1z9xrux86llhic3l3i88po",
  currency: "zł",

  contentDescription:
    "Z tego wideo szkolenia dowiesz się krok po kroku, co będzie na twoim państwowym egzaminie na prawo jazdy! Zapraszam do oglądania lekcji wideo.",
  lessons: [
    {
      title: "",
      description: "",
      videoUrl: `${folder}/swiatla_i_maska.mp4`,
    },
    {
      title: "",
      description: "",
      videoUrl: `${folder}/lok_i_gorka.mp4`,
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

export const allCourses: Course[] = [kompendium, sytuacje];
