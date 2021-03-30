const folder = "https://poznaj-testy.hekko24.pl/kursy";

interface Lesson {
  title: string;
  description?: string;
  videoUrl: string;
}

export interface Course {
  accessCode: string;
  slug: string;
  title: string;
  offerDescription: string;

  thumbnail: string;
  price: number;
  currency: string;
  lessons: Lesson[];
  contentDescription: string;
}

const kompendiumWiedzy: Course = {
  accessCode: "KOMP",
  slug: "/kompendium-wiedzy",
  title: "Kompendium wiedzy przed egzaminem na prawo jazdy",
  offerDescription: "Zobacz szkolenie.",
  thumbnail: `${folder}/kompendium-wiedzy-thumbnail.jpg`,
  price: 47,
  currency: "zł",

  contentDescription:
    "Z tego wideo szkolenia dowiesz się krok po kroku, co będzie na twoim państwowym egzaminie na prawo jazdy! Zapraszam do oglądania lekcji wideo.",
  lessons: [
    {
      title: "Jak prawidłowo zawracać?",
      description: "Z tego wideo dowiesz się jak zawracać.",
      videoUrl: `${folder}/zawracanie.mp4`,
    },
    {
      title: "Jak prawidłowo parkowac?",
      description: "",
      videoUrl: `${folder}/lok-i-gorka.mp4`,
    },
  ],
};

// const SytuacjeNaDrodze: Course = {
//   slug: "/sytuacje-i-niespodzianki-na-drodze",
//   title: "Sytuacje i niespodzianki na drodze",
//   description: "xxxxxxxxxxx",
//   thumbnail: `${folder}/kompendium-wiedzy-thumbnail.jpg`,
//   price: 47,
//   currency: "zł",
//   lessons: [{ title: "lekcja1" }, { title: "lekcja2" }],
// };

export const allCourses: Course[] = [kompendiumWiedzy];
