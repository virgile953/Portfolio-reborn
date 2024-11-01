export const techCardsItems = [
  {
    name: "TypeScript",
    description: "JavaScript but better",
    imageUrl: "/imgs/logos/typescript.svg",
    bgColor: "bg-[#3178C6]/20",
    progress: 8
  },
  {
    name: "React",
    description: "Javascript Library",
    imageUrl: "/imgs/logos/react.svg",
    bgColor: "bg-[#006CAF]/20",
    progress: 5,
  },
  {
    name: "NextJS",
    description: "React framework",
    imageUrl: "/imgs/logos/nextjsDark.svg",
    bgColor: "bg-dark-200/10 dark:bg-white/10",
    progress: 8,
  },
  {
    name: "Tailwind",
    description: "CSS framework",
    imageUrl: "/imgs/logos/tailwind.svg",
    bgColor: "bg-[#0EA5E9]/20",
    progress: 3,
  },
  {
    name: "Git",
    description: "Version control",
    imageUrl: "/imgs/logos/git.svg",
    bgColor: "bg-[#F1502F]/20",
    progress: 8,
  },
  {
    name: "Python",
    description: "High level language",
    imageUrl: "/imgs/logos/Python.svg",
    bgColor: "bg-[#306998]/20",
    progress: 6,
  },
  {
    name: "C",
    description: "Low level language",
    imageUrl: "/imgs/logos/c.svg",
    bgColor: "bg-[#659BD3]/20",
    progress: 10,
  },
  {
    name: "C#",
    description: "high-level language",
    imageUrl: "/imgs/logos/csharp.svg",
    bgColor: "bg-[#9A5196]/20",
    progress: 7,
  },
  {
    name: "Postgres",
    description: "Database tool",
    imageUrl: "/imgs/logos/Postgresql.svg",
    bgColor: "bg-[#336791]/20",
    progress: 8,
  },
  {
    name: "MongoDB",
    description: "NoSQL Database tool",
    imageUrl: "/imgs/logos/mongodb.svg",
    bgColor: "bg-[#58AA50]/20",
    progress: 5,
  },
  {
    name: "SQL",
    description: "Database query language",
    imageUrl: "/imgs/logos/sql.svg",
    bgColor: "bg-[#00BCF2]/20",
    progress: 10,
  },
  {
    name: "Microsoft PowerBI",
    description: "Data visualization software",
    imageUrl: "/imgs/logos/powerbi.svg",
    bgColor: "bg-[#FFCA28]/20",
    progress: 3,
  },
];

export const portfolioProjects = [
  {
    id: "Portfolio_website",
    heading: "Portfolio Website",
    subheading: "Making a first portfolio website",
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
      "Vercel",
      "Bun",
    ],
    liveDemoUrl: "https://portfolio-reborn.vercel.app",
    sourceCodeUrl: "https://github.com/virgile953/Portfolio-reborn",
  },
  {
    id: "Winflotte",
    heading: "Winflotte modernization",
    subheading: "Modernizing and migrating the legacy Winflotte application",
    description:
      `This project was a complete redesign of the legacy SaaS application used by fleet managers to streamline operations and data management. Aiming to enhance both user experience and performance, this project introduced a more intuitive interface, improved data visualization, and integrated advanced analytics features.

      Key updates included moving portions of the legacy citrix-served Windows program to a web-based API application, a complete rewrite and optimization of backend processes in C#, and enhancing frontend interfaces with Angular and TypeScript. Performance was further optimized by replacing HFSQL (PCSoft) with Microsoft SQL Server and RabbitMQ for more efficient data storage and logging.

      This migration allowed us to add features that weren't initially thought of in the first design of the application, like a special table for logging, Oauth, automatic in/outgoing interfaces for various data and more.

      The redesign significantly increased the responsiveness of the application, boosting user satisfaction and experience, reduced onboarding time for new users, and greatly enhanced overall efficiency for fleet management teams.`,
    imageUrl: "/imgs/projects/Winflotte.svg",
    techStack: [
      "TypeScript",
      "Angular",
      "C#",
      "Windev / Webdev",
      "Microsoft SQL Server",
      "HFSQL",
      "PowerBI",
      "RabbitMQ",
    ],
    liveDemoUrl: "",
    sourceCodeUrl: "",
},
{
  id: "EDI_Automation",
  heading: "Automated EDI File Processing Software",
  subheading: "Streamlining EDI transactions through automation",
  description:
    `This project was for the developpement of an automated solution for processing Electronic Data Interchange (EDI) files, optimizing business operations and minimizing manual data handling. Key features include mailbox reading based on SQL settings, automated EDI file parsing, customizable data mapping, and integration with existing business systems. Additionally, it provides real-time reporting, error handling, and an interface for configuration and monitoring.

    Using technologies such as C# for core logic, Angular/TypeScript for the user interface, SQL Server for data storage, and PowerShell scripts executed by Windows Scheduler, the solution has enabled significant time savings, and improved data accuracy and efficiency for the EDI process.`,
  imageUrl: "/imgs/projects/portfolioEDI.svg",
  // imageUrl: "/imgs/projects/portfolioEmail.svg",
  techStack: [
    "C#",
    "RabbitMQ",
    "Angular",
    "TypeScript",
    "Windev / HFSQL",
    "SQL Server",
    "PowerShell",
    "Scheduler",
  ],
  liveDemoUrl: "",
  sourceCodeUrl: "",
},
{
  id: "OptiXt_HR_auto",
  heading: "Automated HR File Processing Software",
  subheading: "Streamlining HR data injestion through automation",
  description:
    `Historically, HR files containing all the data relative to each driver (names, address, date and place of birth, which car they drive, etc...) was manually integrated using existing interfaces that worked well but needed to be manually fed the file, checked, and the reporting was also generated by hand.
    This was fine but not scalable, and with each new client, the interface still had to be created, depending on their file format.

    This project aimed to solve this problem, and the whole system of HR interface was re-created from the ground up, allowing the creation of a new interface via configuration only (no need to update the Saas software's code to add a new one).
    It allowed, via a web interface (Angular/TypeScript) to configure for each file which column of data goes to which field in the database, and via another setting, you could chose to historize the changes or not (if the driver moves from one entity to another, it creates a new history line reflecting the change).
    The interfaces were now started automatically on a schedule agreed upon with each client, and no manual intervention was needed anymore.
    With each file the application processes, it generates an excel report file with each modification made, based on the old and new data.

    This allowed the team in charge of client data to focus their attention elsewhere, improved efficiency and decreased human error.
    It also freed up a part of the dev team, removing them from the process of the interfaces creation.
    `,
  imageUrl: "/imgs/projects/portfolioDriver.svg",
  techStack: ["C#",
    "RabbitMQ",
    "Angular",
    "TypeScript",
    "SQL Server",
    "FTP",
    "Windows Scheduler",
    "Windev / HFSQL"],
  liveDemoUrl: "",
  sourceCodeUrl: "",
},
{
  id: "OptiXt_Email",
  heading: "Bulk Email sending  and parsing Tool",
  subheading: "Facilitating bulk email sending",
  description:
    `Created a tool for bulk email sending, with automatic HTML processing for personalized email to the recipient.

    The tool was written in Python, because i never had a project need it and needed to chose which technology to use to write it.

    It used an excel file as input, and chose from the column names which field goes where in the html.
    The program needed to be operated by internal end-users, so being easy to use was a must. All they needed to do was write a basic email, and place in brackets some fields like "first name", "last name", "address", and they were replaced by the data in the Excel file for each line.
    It also supported attachments, with their path being defined in the excel file as "attach.1", "attach.2", etc... to be able to send to each driver a list of the different costs they generated and to which client to imput them.

    This reduced the time needed to complete certain client-agreed tasks from days to minutes, and allowed internal teams to sell a new kind of service in which we weren't competitive before.
    `,
  imageUrl: "/imgs/projects/portfolioPython.svg",
  techStack: ["Python", "OpenPyxl", "Microsoft Excel"], // Potentially more
  liveDemoUrl: "",
  sourceCodeUrl: "",
},
// {
//   id: "OptiXt_PowerShell",
//   heading: "PowerShell Scripting for Automation",
//   subheading: "Automating various tasks with PowerShell scripts",
//   description:
//     "Developed various PowerShell scripts for backups, archiving, email management, and other tasks.",
//   imageUrl: "/imgs/projects/powershell.svg", // You'll need to add this image
//   techStack: ["PowerShell"],
//   liveDemoUrl: "",
//   sourceCodeUrl: "",
// },
// {
//   id: "OptiXt_Winflotte",
//   heading: "Winflotte Software Refactoring and Optimization",
//   subheading: "Improving Winflotte software performance and reliability",
//   description:
//     "Refactored and optimized the Winflotte software, implementing bug fixes and feature enhancements.",
//   imageUrl: "/imgs/projects/winflotte.svg", // You'll need to add this image
//   techStack: ["C#", "Windev"], // Potentially more
//   liveDemoUrl: "",
//   sourceCodeUrl: "",
// },
// {
//   id: "OptiXt_Support",
//   heading: "IT Support and Troubleshooting",
//   subheading: "Providing technical support and resolving software issues",
//   description:
//     "Resolved support tickets requiring varying levels of expertise, conducted reverse engineering on company software code, and gained proficiency in the Citrix production environment.",
//   imageUrl: "/imgs/projects/support.svg", // You'll need to add this image
//   techStack: ["C#", "Citrix"], // Potentially more
//   liveDemoUrl: "",
//   sourceCodeUrl: "",
// },
];
