import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  silverlogo,
  androidstudio,
  kotlin,
  firebase,
  expo,
  khelsathi,
  One_to_One,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Android Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Android Studio",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Android Studio",
    icon: androidstudio,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Expo",
    icon: expo,
  },

  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Android Developer",
    company_name: "Silver Touch Technologies Limited",
    icon: silverlogo,
    iconBg: "#383E56",
    date: "July 2023 - Present",
    points: [
      "Developed and maintained the HRMS mobile application as part of a team project, introducing new functionalities such as profile editing using Kotin and Android Studio to enhance user interaction.",
      "Implemented API integration using Retrofit, improving data retrieval processes by 40%.",
      "Utilized Room for local data storage, enhancing data management efficiency and reducing app crashes by optimizing database operations and ensuring data integrity.",
      "Spearheaded the migration of the app's architecture to MVVM (Model-View-View-Model), resulting in a more modular, maintainable, and testable codebase.",
    ],
  },
  {
    title: "Android Trainee",
    company_name: "Silver Touch Technologies Limited",
    icon: silverlogo,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - June 2023",
    points: [
      "Developed a comprehensive mobile application for the Government of Uttar Pradesh to manage sports activities and awards, using Kotlin, Android Studio, and Firebase.",
      "Implemented multilingual support by integrating localization libraries and creating language-specific resource files, enabling seamless switching between multiple languages and enhancing app accessibility.",
      "Engineered dedicated modules and APIs for streamlined data retrieval and management, directly contributing to a substantial 25% increase in user satisfaction through improved app performance and reliability.",
      "Optimized app performance by refactoring code and improving load times, resulting in a smoother user experience and increased efficiency.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    id:1,
    name: "One-to-One Chat App",
    description:
      "Developed a secure chat app with user account creation, login, and real-time communication features using Kotlin and Android Studio, ensuring robust security and ease of access.",
    tags: [
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "Android Studio",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: One_to_One,
    source_code_link: "https://github.com/Sagar0169/KhelSathi",
    playstore: "",
  },
  {
    id:2,
    name: "Project Management Tool",
    description:
      "Developed an inter-office project management tool to streamline task assignment, project tracking, and status monitoring, utilizing React Native, JavaScript, Redux, and Firebase.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Java Script",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Sagar0169/Project-Management",
    playstore: "",
  },
  {
    id:3,
    name: "Khel Sathi",
    description:
      "Developed a sports management app for the Government of Uttar Pradesh, enabling multilingual support. Built with Kotlin, Android Studio, and Firebase for efficiency and scalability.",
    tags: [
      {
        name: "Android Studio",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Kotlin",
        color: "pink-text-gradient",
      },
    ],
    image: khelsathi,
    source_code_link: "https://github.com/Sagar0169/KhelSathi",
    playstore: "https://play.google.com/store/search?q=khel%20sathi&c=apps&hl=en",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
