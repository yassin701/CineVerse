import slide1 from "../image/slide1.png";
import slide2 from "../image/slide2.png";
import slide3 from "../image/slide3.png";
import slide4 from "../image/slide4.png";
import slide5 from "../image/slide5.png";


const movies = [
  {
    id: 1,
    title: "Mortal Engines",
    year: 2018,
    image: slide5,
    description: "Dans un monde post-apocalyptique, les villes sont mobiles et dévorent les plus petites pour survivre. Hester Shaw, une jeune femme mystérieuse, et Tom Natsworthy, un apprenti historien, unissent leurs forces pour renverser un pouvoir destructeur.",
    team: {
      director: "Christian Rivers",
      actors: ["Hera Hilmar", "Robert Sheehan", "Hugo Weaving"],
      producer: "Peter Jackson"
    }
  },

  {
    id: 2,
    title: "Legacies",
    year: "2018 - 2022",
    image: slide1 ,
    description: "Spin-off de The Originals et The Vampire Diaries, la série suit Hope Mikaelson, une jeune sorcière hybride, à l'école Salvatore pour les jeunes et surdoués. Elle tente de maîtriser ses pouvoirs tout en affrontant des créatures surnaturelles.",
    team: {
      director: "Julie Plec",
      actors: ["Danielle Rose Russell", "Aria Shahghasemi", "Jenny Boyd"],
      producer: "Julie Plec"
    }
  },

  {
    id: 3,
    title: "Breaking Bad",
    year: 2008,
    image:slide2,
    description: "Walter White, un professeur de chimie atteint d’un cancer, se tourne vers la fabrication et la vente de méthamphétamine pour assurer l’avenir financier de sa famille. Une descente dans le crime et la corruption commence.",
    team: {
      director: "Vince Gilligan",
      actors: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
      producer: "Vince Gilligan"
    }
  },

  {
    id: 4,
    title: "Alice in Borderland",
    year: 2020,
    image: slide3,
    description: "Alice, un jeune homme passionné de jeux vidéo, se retrouve dans un Tokyo alternatif où il doit participer à des jeux mortels pour survivre. Entre stratégie et peur, il tente de retrouver la liberté et ses amis.",
    team: {
      director: "Shinsuke Sato",
      actors: ["Kento Yamazaki", "Tao Tsuchiya", "Yuki Morinaga"],
      producer: "Akira Morii"
    }
  },

  {
    id: 5,
    title: "Wednesday",
    year: 2022,
    image: slide4,
    description: "Wednesday Addams rejoint la mystérieuse Nevermore Academy où elle tente de maîtriser ses pouvoirs psychiques et résoudre une série de meurtres. Entre humour noir et mystère, elle découvre sa vraie nature.",
    team: {
      director: "Tim Burton",
      actors: ["Jenna Ortega", "Emma Myers", "Hunter Doohan"],
      producer: "Al Gough"
    }
  }
];

export default movies;
