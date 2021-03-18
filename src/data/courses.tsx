const folder = "https://poznaj-testy.hekko24.pl/kursy";

export interface Course {
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  currency: string;
}

const kompendiumWiedzy: Course = {
  title: "Kompendium wiedzy przed egzaminem na prawo jazdy",
  description: "lorem30",
  thumbnail: `${folder}/kompendium-wiedzy-thumbnail.jpg`,
  price: 47,
  currency: "zł",
};

const SytuacjeNaDrodze: Course = {
  title: "Sytuacje i niespodzianki na drodze",
  description: "xxxxxxxxxxx",
  thumbnail: `${folder}/kompendium-wiedzy-thumbnail.jpg`,
  price: 47,
  currency: "zł",
};

export const allCourses: Course[] = [kompendiumWiedzy, SytuacjeNaDrodze];
