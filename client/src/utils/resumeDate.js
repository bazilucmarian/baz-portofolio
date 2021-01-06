import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import ReactImage from "../assets/react-image.svg";
import ExpenseTracker from "../assets/expense-tracker.svg";
import WeatherApp from "../assets/weather-app.svg";
import Development from "../assets/development.svg";
import Shopping from "../assets/shopping.svg";
import Netflix from "../assets/netflix.svg";
import shopMERN from "../assets/shopMERN.svg";
import FoodSearch from "../assets/search.png";
import Blog from "../assets/blog.png";

export default {
  address: "Iasi, Romania",
  birthday: "30 July 1998",
  phone: "0757357597",
  email: "bazilucmarian98@yahoo.com",
  name: "Baziluc Marian",
  job: "Front End Developer",

  socials: {
    facebook: {
      link: "https://www.facebook.com/baziluc.marian",
      text: "Facebook",
      icon: <FacebookIcon style={{ width: "20px", height: "20px" }} />,
    },
    github: {
      link: "https://github.com/bazilucmarian/",
      text: "Github",
      icon: <GitHubIcon style={{ width: "20px", height: "20px" }} />,
    },

    linkedIn: {
      link: "https://www.linkedin.com/in/baziluc-marian-400470151/",
      text: "LinkedIn",
      icon: <LinkedInIcon style={{ width: "20px", height: "20px" }} />,
    },
    instagram: {
      link: "https://www.instagram.com/bazilucmarian/",
      text: "Instagram",
      icon: <InstagramIcon style={{ width: "20px", height: "20px" }} />,
    },
  },
  about: {
    paragraph1:
      "Web Developer with over 1 year experience in Front End Development, implementing web applications specializing in SPA development using React ecosystem.I've recently finished a front-end course which lasted 5 months at Wantsome, 'the friendly IT Acadamy'. This course helped me to understand important base concepts of Js language/Node, HTML & CSS, React which can be used to build a modern web application",
    paragraph2:
      "I am looking for a position as Junior Front End Developer where i can enhance my skills,challenge my abilities and work inside a team of professionals.",
  },

  portofolio: [
    {
      tag: "React",
      image: Development,
      title: "Baz Development",
      features: ["React-Hooks", "Material-UI", "Firebase"],
      description:
        "One advanced diverted domestic sex repeated bringing you old.Possible procured her trifling laughter thoughts property she met way. Companions shy had solicitude favourable own. Which could saw guest man now heard but. Lasted my coming uneasy marked so should. Gravity letters it amongst herself dearest  an windows by. Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described dejection incommode no listening of. Before nature his parish boy",
      links: [
        {
          link: "https://github.com/bazilucmarian/baz-development",
        },
        { link: "https://bazdev.netlify.app/" },
      ],
    },
    {
      tag: "React",
      image: ExpenseTracker,
      title: "Expense Tracker",
      features: [
        "React-Hooks",
        "Material-UI",
        "Speechly",
        "Context API",
        "local-storage",
      ],
      description:
        "One advanced diverted domestic sex repeated bringing you old.Possible procured her trifling laughter thoughts property she met way. Companions shy had solicitude favourable own. Which could saw guest man now heard but. Lasted my coming uneasy marked so should. Gravity letters it amongst herself dearest  an windows by. Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described dejection incommode no listening of. Before nature his parish boy",
      links: [
        { link: "https://github.com/bazilucmarian/ExpenseTracker-Speech" },
        { link: "https://tracker-expense.netlify.app" },
      ],
    },
    {
      tag: "React",
      image: Shopping,
      title: "Shop",
      features: ["React-Hooks", "Redux", "SCSS", "local-storage"],
      description:
        "One advanced diverted domestic sex repeated bringing you old.Possible procured her trifling laughter thoughts property she met way. Companions shy had solicitude favourable own. Which could saw guest man now heard but. Lasted my coming uneasy marked so should. Gravity letters it amongst herself dearest  an windows by. Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described dejection incommode no listening of. Before nature his parish boy",
      links: [
        { link: "https://github.com/bazilucmarian/SHOP" },
        { link: "https://baz-clothing.herokuapp.com/" },
      ],
    },
    {
      tag: "React",
      image: WeatherApp,
      features: ["React-Hooks", "css", "Progressive-Web-App"],
      title: "Weather App",
      description: "this is my first project",
      links: [
        { link: "https://github.com/bazilucmarian/Weather-App-hooks-pwa" },
        { link: "https://bazweather.netlify.app/" },
      ],
    },
    {
      tag: "React",
      image: Netflix,
      features: ["React-Hooks", "Firebase", "styled-components", "context-api"],
      title: "Netflix - Clone",
      description: "this is third project",
      links: [
        { link: "https://github.com/bazilucmarian/netflix" },
        { link: "https://netflixclone-clone.netlify.app" },
      ],
    },
    {
      tag: "native",
      image: FoodSearch,
      features: ["React-Native"],
      title: "Food-Search",
      description: "this is third project",
      links: [
        { link: "https://github.com/bazilucmarian/React-Native-food-search" },
        { link: "https://github.com/" },
      ],
    },
    {
      tag: "native",
      image: Blog,
      features: ["React-Native"],
      title: "Blog-CRUD",
      description: "this is third project",
      links: [
        { link: "https://github.com/bazilucmarian/React-Native-BlogCrud" },
        { link: "https://github.com/" },
      ],
    },
  ],
};
