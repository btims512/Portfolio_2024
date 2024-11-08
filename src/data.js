export const navbarLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#tech", label: "Tech" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const heroData = {
  header: "Benjamin",
  subtitle: "Frontend Software Engineer",
  picture: process.env.PUBLIC_URL + "/assets/image-ben-1@3x.png",
  buttonLabel: "View Resume",
};

export const projectsData = [
  {
    title: "Storybook Component Library",
    description:
      "Developed a comprehensive Storybook component library with 30+ components and 43 stories, set up for use in my portfolio website. Implemented design tokens for consistent theming. Published and maintained the library for collaborative use.",
    tech: ["React", "Storybook", "CSS", "Chromatic", "Figma"],
    codeLink: "https://github.com/btims512/storybook-library/tree/main/",
    visitLink:
      "https://6698136741a8af33d6e341ed-eytmmxhrxt.chromatic.com/?path=/docs/introduction--docs",
    icon: "/assets/project-logo-storybook@2x.png",
  },
  {
    title: "Find My ISS",
    description:
      "A web app developed for tracking the International Space Station in real time on a map. This app pings the ship's latitude and longitude, enabling users to monitor it as well as check other important information such as velocity, altitude, and more.",
    tech: ["Javascript", "API", "HTML", "CSS"],
    codeLink: "https://github.com/btims512/ISS_tracker",
    visitLink: "http://findmyiss.bentims.com/",
    icon: "/assets/project-logo-iss@2x.png",
  },
  {
    title: "Apple",
    description:
      "Develop and maintain accessible, responsive, rich Apple-quality user experiences for multiple internal Apple sites to allow recruiters to easily access information needed to perform their daily tasks.",
    tech: ["JavaScript", "Drupal", "HTML", "CSS"],
    codeLink: "#",
    visitLink: "#",
    icon: "/assets/project-logo-apple@2x.png",
  },
  {
    title: "Trivia Game",
    description:
      "An interactive trivia game with multiple difficulty levels and categories, offering an accessible design for all players. Questions are dynamically fetched using Axios for a fresh experience each time.",
    tech: ["React", "HTML", "CSS", "Open Trivia Database API"],
    codeLink: "https://github.com/btims512/trivia-game",
    visitLink: "https://trivio-quiz.netlify.app/",
    icon: "/assets/project-logo-trivia-game@2x2.png",
  },
  {
    title: "Picture Hut",
    description:
      "Picture Hut is an advanced image searcher built using React and styled with Less, featuring a completely accessible design, impressive UI/UX, and theme colors. The site leverages Axios for efficient API calls.",
    tech: ["React", "Less", "Axios"],
    codeLink: "https://github.com/btims512/image-gallery",
    visitLink: "https://picturehut.netlify.app/",
    icon: "/assets/project-logo-picture-hut@2x.png",
  },
  {
    title: "Tibles",
    description:
      "With building digital collectibles since 2012 for brands like Star Wars, Disney, NFL and many more, Tibles Inc has more experience making officially-licensed digital collectibles for top brands than anyone in the business.",
    tech: ["HTML", "CSS", "Javascript"],
    codeLink: "https://github.com/btims512/seussibles",
    visitLink: "https://www.tibles.com/",
    icon: "/assets/project-logo-tibles@2x.png",
  },
  {
    title: "Seussibles!",
    description:
      "A website designed for the selling and trading of the official Dr. Seuss NFT collectibles by Tibles Inc partnered with with Dapper Labs. Made using basic HTML and CSS. Fit to be responsive for all devices via the use of media queries.",
    tech: ["HTML", "CSS", "JavaScript"],
    codeLink: "https://github.com/btims512/seussibles",
    visitLink: "https://www.tibles.com/seussibles-old",
    icon: "/assets/project-logo-seussibles@2x.png",
  },
  {
    title: "OneShots",
    description:
      "A simple landing page designed for Tibles Inc to showcase their new NFT private beta. Developed using vanilla Javascript, HTML and CSS and designed to be 100% dynamic via the use of media queries",
    tech: ["HTML", "CSS", "Javascript", "MDB"],
    codeLink: "https://github.com/btims512/oneshots_landing_page",
    visitLink: "https://oneshots.com",
    icon: "/assets/project-logo-oneshots@2x.png",
  },
  {
    title: "South Carolina F.A.O.",
    description:
      "A site developed for the South Carolina Revenue and Fiscal Affairs Office providing data on the state's fiscal management and economic trends, with a modern and user-friendly design. All links have been removed and is purely aesthetic.",
    tech: ["React", "API", "Tailwind", "CSS"],
    codeLink: "https://github.com/btims512/South-Carolina-Revenue-Offices",
    visitLink: "https://south-carolina-revenue.netlify.app/",
    icon: "/assets/project-logo-SCRFAO.png",
  },
  {
    title: "Vinyl Reckoning",
    description:
      "A fun website designed for a podcast that discusses vinyl records mainly from the 2000's pop-punk era. Developed using react with styled-components and optimized with the 'mobile first' mentality.",
    tech: ["React", "JSX", "CSS", "Styled-components"],
    codeLink: "https://github.com/btims512/vinyl_reckoning",
    visitLink: "https://vinylreckoning.netlify.app/",
    icon: "/assets/project-logo-vinyl@2x.png",
  },
  // {
  //   title: "Instagram Clone",
  //   description:
  //     "Made using React with Firebase serving as a backend. Fully loaded with the ability to upload, comment, sign-up and sign-in, it's everything you love about Instagram without legally being Instagram!",
  //   tech: ["React", "Firebase", "CSS", "styled-components"],
  //   codeLink: "https://github.com/btims512/instagram-clone",
  //   visitLink: "https://instagram-clone-react-7e7e3.web.app/",
  //   icon: "/assets/project-logo-instagram_clone@2x.png",
  // },
  {
    title: "Currensee",
    description:
      "An app designed for simplicity, yet effectiveness. I personally used this app many times while traveling throughout Mexico for help with exchange rates. This app consumes exchangeratesapi.io and is constantly updated for latest rates.",
    tech: ["React", "Node-Fetch"],
    codeLink: "https://github.com/btims512/exchangeRate",
    visitLink: "https://exchangeratesrus.netlify.app/",
    icon: "/assets/project-logo-currency@2x.png",
  },
  {
    title: "Find Dat Gif!",
    description:
      "A fun app to find the perfect GIF for how you're feeling including a trending home page and random section if you're not quiet sure how you're feeling. Developed using React, SASS and consuming Giphy's API via Axios.",
    tech: ["React", "Sass/Scss", "Axios", "React Router"],
    codeLink: "https://github.com/btims512/find_dat_gif_2.0",
    visitLink: "https://find-dat-gif.netlify.app/",
    icon: "/assets/project-logo-gif@2x.png",
  },
];

export const technologiesData = [
  {
    icon: "ReactIcon",
    title: "Frontend Development",
    description: "React, JavaScript, Dart, Sass/Scss, Less, HTML & CSS",
  },
  {
    icon: "DataIcon",
    title: "Backend Development",
    description: "Firebase, Node.js, MongoDB, SQL & NoSQL",
  },
  {
    icon: "JsIcon",
    title: "Frameworks",
    description:
      "React.js, Flutter, Next.js, EJS, Bootstrap, Tailwind & Express.js",
  },
];

export const aboutData = {
  title: "About",
  text: [
    "Howdy folks! I'm Ben, a front-end software engineer hailing from the beautiful city of Austin, TX. I've always been fascinated by technology, ever since my first Game Boy and my trusty Windows 95 computer. But it wasn't until 2019 that I decided to take the plunge and dive into programming headfirst, starting with some self-taught online courses and working my way up to a full-blown bootcamp.",
    "Before my days of coding, I spent a whopping 8 years in Apple technical support, where I became an expert in all things iOS and macOS. I even spent a good chunk of that time as a trainer, sharing my knowledge and teaching others the ropes.",
    "But after years of talking about technology, I decided it was time to get my hands dirty and see how it all works under the hood. What started as a curiosity quickly turned into a passion, and now I spend my days building beautiful and functional websites that would make my Game Boy proud.",
  ],
  icon: "/assets/image-ben-2@3x.png",
};
