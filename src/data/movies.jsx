import slide1 from "../image/slide1.png";
import slide2 from "../image/slide2.png";
import slide3 from "../image/slide3.png";
import slide4 from "../image/slide4.png";
import slide5 from "../image/slide5.png";
import slide6 from "../image/slide6.png";
import slide7 from "../image/slide7.png";
import slide8 from "../image/slide8.png";
import slide9 from "../image/slide9.png";
import slide10 from "../image/slide10.png";



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
  },
  {
  id: 6,
  title: "Inception",
  year: 2010,
  image: slide6,
  description:
    "Un voleur spécialisé dans l'extraction d'informations à travers les rêves doit réaliser l'impossible : implanter une idée dans l'esprit d'une cible.",
  team: {
    director: "Christopher Nolan",
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    producer: "Emma Thomas"
  }
},
{
  id: 7,
  title: "The Witcher",
  year: 2019,
  image: slide7,
  description:
    "Geralt de Riv, un sorceleur mutant, chasse des créatures dangereuses tout en essayant de trouver sa place dans un monde brutal.",
  team: {
    director: "Lauren Schmidt Hissrich",
    actors: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
    producer: "Tomasz Baginski"
  }
},
{
  id: 8,
  title: "Stranger Things",
  year: 2016,
  image:slide8,
  description:
    "Dans une petite ville, la disparition d'un enfant révèle un univers parallèle sombre et dangereux appelé le Monde à l'Envers.",
  team: {
    director: "The Duffer Brothers",
    actors: ["Millie Bobby Brown", "Finn Wolfhard", "David Harbour"],
    producer: "Shawn Levy"
  }
},
{
  id: 9,
  title: "Dune",
  year: 2021,
  image: slide9,
  description:
    "Paul Atreides, un jeune héritier aux dons extraordinaires, doit survivre sur une planète dangereuse au cœur d'une lutte politique et mystique.",
  team: {
    director: "Denis Villeneuve",
    actors: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
    producer: "Mary Parent"
  }
},
{
  id: 10,
  title: "Peaky Blinders",
  year: 2013,
  image: slide10,
  description:
    "Dans le Birmingham des années 1920, la famille Shelby construit un empire criminel redoutable sous le commandement de Tommy Shelby.",
  team: {
    director: "Steven Knight",
    actors: ["Cillian Murphy", "Paul Anderson", "Anya Taylor-Joy"],
    producer: "Katie Swinden"
  }
},




];

export default movies;
