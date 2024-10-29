export const techCardsItems = [
  {
    name: "Python",
    description: "High level language",
    imageUrl: "/imgs/logos/Python.svg",
    bgColor: "bg-[#306998]/20",
  },
  {
    name: "TypeScript",
    description: "JavaScript but better",
    imageUrl: "/imgs/logos/typescript.svg",
    bgColor: "bg-[#3178C6]/20",
  },
  {
    name: "React",
    description: "Javascript Library",
    imageUrl: "/imgs/logos/react.svg",
    bgColor: "bg-[#006CAF]/20",
  },
  {
    name: "NextJS",
    description: "React framework",
    imageUrl: "/imgs/logos/nextjsDark.svg",
    bgColor: "bg-dark-200/10 dark:bg-white/10",
  },
  {
    name: "Tailwind",
    description: "CSS framework",
    imageUrl: "/imgs/logos/tailwind.svg",
    bgColor: "bg-[#0EA5E9]/20",
  },
  {
    name: "Git",
    description: "Version control",
    imageUrl: "/imgs/logos/git.svg",
    bgColor: "bg-[#F1502F]/20",
  },
  {
    name: "Postgres",
    description: "Database tool",
    imageUrl: "/imgs/logos/Postgresql.svg",
    bgColor: "bg-[#336791]/20",
  },
  {
    name: "C",
    description: "Low level language",
    imageUrl: "/imgs/logos/c.svg",
    bgColor: "bg-[#659BD3]/20",
  },
];

export const portfolioProjects = [
  {
    id: "Portfolio_website",
    heading: "Portfolio Website",
    subheading: "A First portfolio website",
    description:
      `A modern portfolio website with all the info it needs to convey. It includes features automatic theme detection from system, a color changer, settings memorization and database fetching for all the projects's data. The website is developed with NextJs & typescript for the frontend parts, and Vercel & PostgresDB for the backend.

      It has some shortcomings though, mainly it's looks, but it served well as a first "from scratch" project`,
    imageUrl: "/imgs/projects/portfolio.svg",
    techStack: [
      "TypeScript",
      "NextJS",
      "Postgres",
      "TailwindCSS",
      "Vercel",
      "Bun",
    ],
    liveDemoUrl: "https://vbarbera.com",
    sourceCodeUrl: "https://github.com/virgile953/portfolio",
  },
  {
    id: "Portfolio_Redesign",
    heading: "Portfolio Redesign",
    subheading: "A fresh, refined approach to showcasing my work",
    description:
    `Building on the foundation of my first portfolio, I incorporated user feedback and my growing experience to create a polished redesign. This version emphasizes both form and function, with a visually pleasing and cohesive aesthetic powered by Tailwind CSS. Code structure and readability have also been significantly improved, making it easier to maintain and scale.
    Designed with Next.js, the new portfolio is faster, cleaner, and fully optimized for a better user experience.`,
    imageUrl: "/imgs/projects/portfolio_redesign.svg",
    techStack: [
      "Typescript",
      "NextJS",
      "TailwindCSS",
    ],
    liveDemoUrl: "https://portfolio-reborn.vercel.app",
    sourceCodeUrl: "https://github.com/virgile953/Portfolio-reborn",
  },
  {
    id: "Winflotte",
    heading: "Winflotte",
    subheading: "Modernization of the legacy Winflotte application",
    description:
      `The Winflotte project was a complete redesign of a legacy SAS application used by fleet managers to streamline operations and data management. Aiming to enhance both user experience and performance, this project introduced a more intuitive interface, improved data visualization, and integrated advanced analytics features.

      Key updates included moving portions of the legacy Windows-based program to a web-based API application, optimizing backend processes in C#, and enhancing frontend interfaces with Angular and TypeScript. Performance was further optimized with Microsoft SQL Server and RabbitMQ for efficient data handling and logging.

      The redesign significantly boosted user satisfaction, reduced onboarding time for new users, and greatly enhanced overall efficiency for fleet management teams.`,
    imageUrl: "/imgs/projects/Winflotte.svg",
    techStack: [
      "TypeScript",
      "Angular",
      "C#",
      "Windev / Webdev",
      "Microsoft SQL Server",
      "HFSQL",
      "PowerBI",
    ],
    liveDemoUrl: "",
    sourceCodeUrl: "",
},
];

// export const tooltipItems = [
//   {
//     id: 1,
//     name: "Bogdan Aleksic",
//     designation: "Great job!",
//     image: "/imgs/avatars/bogdan.svg",
//   },
//   {
//     id: 2,
//     name: "Djordje Djurovic",
//     designation: "Incredibly responsible",
//     image: "/imgs/avatars/djordje.jpeg",
//   },
//   {
//     id: 3,
//     name: "Anthony Sean",
//     designation: "Highly recommended!",
//     image: "/imgs/avatars/Anthony.jpg",
//   },
//   {
//     id: 4,
//     name: "Alex Finn",
//     designation: "Enjoyable experience.",
//     image: "/imgs/avatars/Alex.jpg",
//   },
// ];
