import platyCC from "../platyCC.jpg";
import myStockCC from "../myStockCC.jpg";
import galacticChaseCC from "../galacticChaseCC.jpg";
import portfolioCC from "../portfolioCC.jpg";

export const educationInfo = [
  {
    title: "Harvard - CS50x",
    description: "Computer Science Certification",
    date: "Apr 2022 - Present",
  },
  {
    title: "Ironhack",
    description: "MERN Full Stack Web Dev Certification",
    date: "Sep 2021 - Mar 2022",
  },
  {
    title: "Technological Institute of Mexico",
    description: "Bachelor of Engineering, Electronics",
    date: "Aug 2012 - Jul 2017",
  },
];

export const workExpInfo = [
  {
    title: "Compucom",
    description: "Hardware & Software IT Analyst",
    date: "Dec 2019 - Aug 2021",
  },
];

export const projectsInfo = [
  {
    name: "Platy",
    nameLink: "platy",
    projectImage: platyCC,
    projectType: "WEB DEVELOPMENT",
    projectTitle: "Full Stack MERN Application",
    projectRepoLink: "https://github.com/luisbermudez/platy-frontend",
    projectSite: "https://www.platy.lapbermudez.com/",
    projectDescription: [
      "• Front End SPA with React & Redux",
      "• Express REST API Back End",
      "• Video file management with Cloudinary",
      "• MapBox & MapBox Geocoder",
      "• Formik and Yup",
    ],
  },
  {
    name: "Galactic Chase",
    nameLink: "galacticChase",
    projectImage: galacticChaseCC,
    projectType: "VIDEO GAME DEVELOPMENT",
    projectTitle: "JavaScript Video Game",
    projectRepoLink: "https://github.com/luisbermudez/Galactic-Chase",
    projectSite: "https://luisbermudez.github.io/Galactic-Chase/",
    projectDescription: [
      "• Object-Oriented Programming",
      "• CSS Transitions & Animations",
      "• HTML Canvas for Graphics",
      "• DOM Manipulation",
    ],
  },
  {
    name: "Portfolio Page",
    nameLink: "portfolioProject",
    projectImage: portfolioCC,
    projectType: "WEB DEVELOPMENT",
    projectTitle: "Front End React Application",
    projectRepoLink: "https://github.com/luisbermudez/portfolio",
    projectSite: "#",
    projectDescription: [
      "• React & React Router Dom",
      "• MUI Design CSS Framework",
      "• EmailJS",
      "• JQuery",
    ],
  },
  {
    name: "MyStock",
    nameLink: "myStock",
    projectImage: myStockCC,
    projectType: "WEB DEVELOPMENT",
    projectTitle: "Express & Handlebars Application",
    projectRepoLink: "https://github.com/luisbermudez/MyStock",
    projectSite: "https://inventoryapp-2.herokuapp.com/",
    projectDescription: [
      "• Express Routing & Handlebars",
      "• Bootstrap",
      "• Google Sign-In & Express Session",
      "• Cloudinary",
    ],
  },
];
