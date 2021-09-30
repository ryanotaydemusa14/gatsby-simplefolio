import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ryan Musa | IT Student', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Ryan Musa',
  subtitle: 'I am a CIT-U IT student aspiring to be a front-end developer.',
  cta: 'Know More About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'ryanmusa.jpg',
  paragraphOne:
    'Hi, my name is Ryan Otayde Musa. I am a fresh IT graduate of Cebu Institute of Technology - University',
  paragraphTwo:
    'I love exploring new knowledge especially when it comes to Technology and Art. That is why I am pursuing on being a Front-End Developer',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'CUFA.png',
    title: 'CIT-Universify Facebook Analyzer',
    info: 'Capstone Project',
    info2:
      'CUFA is a web application that will retrieve data from the official CIT University Page and display it in a dashboard. This web application will get the data on the posts per day, reach, total engagements, and response in the official Facebook page and compare it to the previous month’s data to check whether they increased or not. The application will also display the recent posts of the Facebook page. In addition, a sentiment analysis of the page reviews and page comments.',
    // url: '',
    repo: 'https://github.com/reydominictome/Facebook-Analyzer-Dashboard', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'patuti.png',
    title: 'Patuti Jump',
    info: 'First HTML,CSS, and JS Project',
    info2:
      'Patuti is an alien character who is being accused of being a hostile creature by the public.This is a simple HTML, CSS, and JavaScript project for the course Project made with Bootstrap for responsive Web Layout for both Mobile and Desktop devices. Credits to Instructor Eugine C. Busico for providing ideas,images, and lessons for this project',
    url: 'https://ryanotaydemusa14.github.io/patuti-jump/',
    repo: 'https://github.com/ryanotaydemusa14/patuti-jump', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'robofriends.png',
    title: 'Robofriends',
    info: 'React Web Application',
    info2:
      'Robofriend is a web application that is made from React, it is a fully responsive web app that searches different kinds of friendly robots available in the datasets',
    url: 'https://ryanotaydemusa14.github.io/robofriends/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'firstportfolio.png',
    title: 'First Portfolio',
    info: 'My First Portfolio',
    info2:
      'This is my first portfolio made with my own made logo. This project only consists of HTML and CSS with Bootstrap.',
    url: 'https://ryanotaydemusa14.github.io/MusaPortfolio/',
    repo: 'https://github.com/ryanotaydemusa14/MusaPortfolio', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: 'Ask me if you want to work with me!',
  btn: 'Click Here',
  email: 'ryanotaydemusa14@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/YannMyus',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ryan-musa-138ba7220/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ryanotaydemusa14',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
