"use client";
import { useTranslations } from "next-intl";

export const useTechCardsItems = () => {
	const t = useTranslations("TechCards");
	return [
		{
			name: "TypeScript",
			description: t("TypeScript.description"),
			imageUrl: "/imgs/logos/typescript.svg",
			bgColor: "bg-[#3178C6]/20",
			progress: 8,
		},
		{
			name: "React",
			description: t("React.description"),
			imageUrl: "/imgs/logos/react.svg",
			bgColor: "bg-[#006CAF]/20",
			progress: 5,
		},
		{
			name: "NextJS",
			description: t("NextJS.description"),
			imageUrl: "/imgs/logos/nextjsDark.svg",
			bgColor: "bg-dark-200/10 dark:bg-white/10",
			progress: 8,
		},
		{
			name: "Tailwind",
			description: t("Tailwind.description"),
			imageUrl: "/imgs/logos/tailwind.svg",
			bgColor: "bg-[#0EA5E9]/20",
			progress: 6,
		},
		{
			name: "Git",
			description: t("Git.description"),
			imageUrl: "/imgs/logos/git.svg",
			bgColor: "bg-[#F1502F]/20",
			progress: 8,
		},
		{
			name: "Python",
			description: t("Python.description"),
			imageUrl: "/imgs/logos/Python.svg",
			bgColor: "bg-[#306998]/20",
			progress: 5,
		},
		{
			name: "C",
			description: t("C.description"),
			imageUrl: "/imgs/logos/c.svg",
			bgColor: "bg-[#659BD3]/20",
			progress: 10,
		},
		{
			name: "C#",
			description: t("C#.description"),
			imageUrl: "/imgs/logos/csharp.svg",
			bgColor: "bg-[#9A5196]/20",
			progress: 7,
		},
		{
			name: "Postgres",
			description: t("Postgres.description"),
			imageUrl: "/imgs/logos/Postgresql.svg",
			bgColor: "bg-[#336791]/20",
			progress: 8,
		},
		{
			name: "Node Js",
			description: t("NodeJs.description"),
			imageUrl: "/imgs/logos/nodejs.svg",
			bgColor: "bg-[#58AA50]/20",
			progress: 5,
		},
		{
			name: "SQL",
			description: t("SQL.description"),
			imageUrl: "/imgs/logos/sql.svg",
			bgColor: "bg-[#00BCF2]/20",
			progress: 10,
		},
		{
			name: "Microsoft PowerBI",
			description: t("Microsoft PowerBI.description"),
			imageUrl: "/imgs/logos/powerbi.svg",
			bgColor: "bg-[#FFCA28]/20",
			progress: 4,
		},
	];
};

export const usePortfolioProjects = () => {
	const t = useTranslations("PortfolioProjects");
	return [
		{
			id: "PingServer",
			heading: t("PingServer.heading"),
			subheading: t("PingServer.subheading"),
			description: t.markup("PingServer.description", {
				strong: (chunks) => `<strong>${chunks}</strong>`,
				li: (chunks) => `<li>• ${chunks}</li>`,
				ul: (chunks) => `<ul>${chunks}</ul>`,
				em: (chunks) => `<em>${chunks}</em>`,
			}),
			imageUrl: "/imgs/projects/portfolioServerPing.svg",
			imageDemoUrl: "/imgs/projects/ServerPingDemo.webp",
			techStack: ["React", "Remix", "Bun", "NodeJs", "TypeScript", "Sqlite 3", "Cron jobs"],
			// liveDemoUrl: "https://alert-acanthaster.vercel.app/",
			// sourceCodeUrl: "https://github.com/virgile953/alertAcanthaster",
		},
		{
			id: "Alert_acanthaster",
			heading: t("Alert_acanthaster.heading"),
			subheading: t("Alert_acanthaster.subheading"),
			description: t.markup("Alert_acanthaster.description", {
				strong: (chunks) => `<strong>${chunks}</strong>`,
				li: (chunks) => `<li>• ${chunks}</li>`,
				ul: (chunks) => `<ul>${chunks}</ul>`,
				em: (chunks) => `<em>${chunks}</em>`,
			}),
			imageUrl: "/imgs/projects/portfolioachantaster.svg",
			techStack: [
				"NextJs",
				"React",
				"TypeScript",
				"NeonDB",
				"Postgres sql",
				"Scheduler",
			],

			liveDemoUrl: "https://alert-acanthaster.vercel.app/",
			sourceCodeUrl: "https://github.com/virgile953/alertAcanthaster",
		},
		{
			id: "Portfolio_Redesign",
			heading: t("Portfolio_Redesign.heading"),
			subheading: t("Portfolio_Redesign.subheading"),
			description: t.markup("Portfolio_Redesign.description", {
				strong: (chunks) => `<strong>${chunks}</strong>`,
				li: (chunks) => `<li>• ${chunks}</li>`,
				ul: (chunks) => `<ul>${chunks}</ul>`,
				em: (chunks) => `<em>${chunks}</em>`,
			}),
			imageUrl: "/imgs/projects/portfolio_redesign.svg",
			techStack: ["Typescript", "NextJS", "TailwindCSS", "Vercel", "Bun"],
			liveDemoUrl: "https://vbarbera.com",
			sourceCodeUrl: "",
		},
		{
			id: "Retrocars_wesite",
			heading: t("Retrocars_wesite.heading"),
			subheading: t("Retrocars_wesite.subheading"),
			description: t.markup("Retrocars_wesite.description", {
				strong: (chunks) => `<strong>${chunks}</strong>`,
				li: (chunks) => `<li>• ${chunks}</li>`,
				ul: (chunks) => `<ul>${chunks}</ul>`,
				em: (chunks) => `<em>${chunks}</em>`,
			}),
			imageUrl: "/imgs/projects/portfolio_retrocar.svg",
			techStack: [
				"Typescript",
				"NextJS",
				"TailwindCSS",
				"Vercel",
				"Supabase",
				"JWT",
			],
			liveDemoUrl: "https://atpp.vercel.app/",
			sourceCodeUrl: "",
		},
		{
			id: "Winflotte",
			heading: t("Winflotte.heading"),
			subheading: t("Winflotte.subheading"),
			description: t.markup("Winflotte.description", {
				strong: (chunks) => `<strong>${chunks}</strong>`,
				li: (chunks) => `<li>• ${chunks}</li>`,
				ul: (chunks) => `<ul>${chunks}</ul>`,
				em: (chunks) => `<em>${chunks}</em>`,
			}),
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
			heading: t("EDI_Automation.heading"),
			subheading: t("EDI_Automation.subheading"),
			description: t.markup("EDI_Automation.description", {
				strong: (chunks) => `<strong>${chunks}</strong>`,
				li: (chunks) => `<li>• ${chunks}</li>`,
				ul: (chunks) => `<ul>${chunks}</ul>`,
				em: (chunks) => `<em>${chunks}</em>`,
			}),
			imageUrl: "/imgs/projects/portfolioEDI.svg",
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
			id: "Portfolio_website",
			heading: t("Portfolio_website.heading"),
			subheading: t("Portfolio_website.subheading"),
			description: t.markup("Portfolio_website.description", {
				strong: (chunks) => `<strong>${chunks}</strong>`,
				li: (chunks) => `<li>• ${chunks}</li>`,
				ul: (chunks) => `<ul>${chunks}</ul>`,
				em: (chunks) => `<em>${chunks}</em>`,
			}),
			imageUrl: "/imgs/projects/portfolio.svg",
			techStack: [
				"TypeScript",
				"NextJS",
				"Postgres",
				"TailwindCSS",
				"Vercel",
				"Bun",
			],
			liveDemoUrl: "https://old.vbarbera.com",
			sourceCodeUrl: "https://github.com/virgile953/portfolio",
		},
		{
			id: "OptiXt_HR_auto",
			heading: t("OptiXt_HR_auto.heading"),
			subheading: t("OptiXt_HR_auto.subheading"),
			description: t.markup("OptiXt_HR_auto.description", {
				strong: (chunks) => `<strong>${chunks}</strong>`,
				li: (chunks) => `<li>• ${chunks}</li>`,
				ul: (chunks) => `<ul>${chunks}</ul>`,
				em: (chunks) => `<em>${chunks}</em>`,
			}),
			imageUrl: "/imgs/projects/portfolioDriver.svg",
			techStack: [
				"C#",
				"RabbitMQ",
				"Angular",
				"TypeScript",
				"SQL Server",
				"FTP",
				"Windows Scheduler",
				"Windev / HFSQL",
			],
			liveDemoUrl: "",
			sourceCodeUrl: "",
		},
		{
			id: "OptiXt_Email",
			heading: t("OptiXt_Email.heading"),
			subheading: t("OptiXt_Email.subheading"),
			description: t.markup("OptiXt_Email.description", {
				strong: (chunks) => `<strong>${chunks}</strong>`,
				li: (chunks) => `<li>• ${chunks}</li>`,
				ul: (chunks) => `<ul>${chunks}</ul>`,
				em: (chunks) => `<em>${chunks}</em>`,
			}),
			imageUrl: "/imgs/projects/portfolioPython.svg",
			techStack: ["Python", "OpenPyxl", "Microsoft Excel"],
			liveDemoUrl: "",
			sourceCodeUrl: "",
		},
	];
};

// export const portfolioProjects = [
// 	{
// 		id: "Alert_acanthaster",
// 		heading: "Alert Acanthaster",
// 		subheading: "Making of a website for a competition about sea life",
// 		description: `The <strong>Alert Acanthaster</strong> website was created as part of a development class I conducted with a group of 7th-grade students. Together, we designed and built a lightweight, intuitive platform aimed at helping preserve marine life by addressing the threat of invasive Acanthaster species (crown-of-thorns starfish). The students actively participated in the project, contributing ideas, providing feedback, and learning about web development, while I handled the technical implementation.

// The website is designed for ease of use, requiring no account creation for casual users. The landing page features a simple navbar with <em>"Home"</em>, <em>"About"</em>, <em>"Login"</em>, and <em>"Register"</em> options. The login and register functionalities are exclusively for researchers and professional divers who need access to detailed data for managing Acanthaster sightings. Authentication is handled using <strong>JWT</strong> stored in cookies for secure and seamless access.

// For <strong>researchers</strong>, the platform offers advanced features:
// <ul>
//   <li>Customizable notifications: Researchers can set up alerts to be notified via email, push notifications, or both when a sighting is reported near their specified location (latitude and longitude).</li>
//   <li>Data management: A dedicated <em>"Data"</em> tab provides a comprehensive table of all reported sightings, with options to export data and update the status of sightings once they’ve been addressed.</li>
// </ul>
// For <strong>casual users</strong>, the focus is on simplicity and ease of use:
// <ul>
//   <li>Interactive map: Users can view a large map with markers indicating reported Acanthaster sightings. They can interact with the markers by giving a thumbs up or down to confirm the accuracy of the reports.</li>
//   <li>Reporting sightings: Users can easily report new sightings by clicking on the map, automatically capturing the location, and entering details such as the number of Acanthasters seen and their confidence level in the count.</li>
// </ul>
// The website’s standout feature is its clickable, interactive map, which was praised by an actual researcher for its practicality and ease of use—addressing a common challenge they faced with internal tools. Built with <strong>Next.js</strong>, <strong>React</strong>, and <strong>TypeScript</strong>, and backed by <strong>Postgres</strong> and <strong>NeonDB</strong>, the platform is both efficient and scalable, ensuring a smooth experience for all users.

// This project not only delivered a practical tool for marine conservation but also provided the students with hands-on experience in software development, teamwork, and problem-solving.`,
// 		imageUrl: "/imgs/projects/portfolioachantaster.svg",
// 		techStack: [
// 			"NextJs",
// 			"React",
// 			"TypeScript",
// 			"NeonDB",
// 			"Postgres sql",
// 			"Scheduler",
// 		],
// 		liveDemoUrl: "https://alert-acanthaster.vercel.app/",
// 		sourceCodeUrl: "https://github.com/virgile953/alertAcanthaster",
// 	},
// 	{
// 		id: "Portfolio_Redesign",
// 		heading: "Portfolio Redesign",
// 		subheading: "A fresh, refined approach to showcasing my work",
// 		description: `Building on the foundation of my first portfolio, I incorporated user feedback and my growing experience to create a polished redesign. This version emphasizes both form and function, with a visually pleasing and cohesive aesthetic powered by <strong>Tailwind CSS</strong>. Code structure and readability have also been significantly improved, making it easier to maintain and scale.

// Designed with <strong>Next.js</strong>, the new portfolio is faster, cleaner, and fully optimized for a better user experience.`,
// 		imageUrl: "/imgs/projects/portfolio_redesign.svg",
// 		techStack: ["Typescript", "NextJS", "TailwindCSS", "Vercel", "Bun"],
// 		liveDemoUrl: "https://vbarbera.com",
// 		sourceCodeUrl: "https://github.com/virgile953/Portfolio-reborn",
// 	},
// 	{
// 		id: "Retrocars_wesite",
// 		heading: "Vintage Car Collector Website Redesign",
// 		subheading:
// 			"A modern, responsive redesign for a vintage car collector and reseller",
// 		description: `This project involved reworking the outdated website of a vintage and rare car collector/reseller. Originally built on a custom WordPress (Customify) theme, the site was non-responsive and difficult to manage, requiring the owner to rely on a friend for updates. I took it upon myself to redesign and rebuild the website from scratch, focusing on responsiveness, ease of use, and modern functionality.

// 	The new version features:
// 	<ul>
// 		<li>A custom login system with <strong>JWT authentication</strong> (stored in cookies) for secure access</li>
// 		<li>A full <em>"New Item"</em> page, allowing the owner to easily add new cars with details such as title, description, model year, price, and photos</li>
// 		<li>Automatic photo uploads to a <strong>Vercel blob store</strong> (similar to an S3 bucket), with URLs and display order saved in a <strong>Supabase</strong> database</li>
// 		<li>An automatic status handler: The owner can mark cars as <em>available</em>, <em>sold</em>, or <em>reserved</em>, and they are displayed in their respective categories on the items page. Sold or reserved cars are highlighted with a ribbon indicating their status</li>
// 		<li>A dedicated partner page for <strong>Secma cars</strong>, showcasing vehicles categorized as <em>new</em>, <em>used</em>, and <em>special prestations</em> (e.g., renting a car for a week or trackday events)</li>
// 	</ul>
// 	Built with <strong>Next.js</strong> and <strong>Tailwind CSS</strong>, the website is now fully responsive, optimized for mobile browsing, and significantly faster. The improved code structure and readability make it easier to maintain and scale, while the intuitive interface empowers the owner to manage content independently.`,
// 		imageUrl: "/imgs/projects/portfolio_retrocar.svg",
// 		techStack: [
// 			"Typescript",
// 			"NextJS",
// 			"TailwindCSS",
// 			"Vercel",
// 			"Supabase",
// 			"JWT",
// 		],
// 		liveDemoUrl: "https://atpp.vercel.app/",
// 		sourceCodeUrl: "",
// 	},
// 	{
// 		id: "Winflotte",
// 		heading: "Winflotte Modernization",
// 		subheading: "Modernizing and migrating the legacy Winflotte application",
// 		description: `This project was a complete redesign of the legacy SaaS application used by fleet managers to streamline operations and data management. Aiming to enhance both user experience and performance, this project introduced:
// <ul>
//   <li>A more intuitive interface</li>
//   <li>Improved data visualization</li>
//   <li>Integrated advanced analytics features</li>
// </ul>
// Key updates included:
// <ul>
//   <li>Moving portions of the legacy Citrix-served Windows program to a web-based API application</li>
//   <li>A complete rewrite and optimization of backend processes in <strong>C#</strong></li>
//   <li>Enhancing frontend interfaces with <strong>Angular</strong> and <strong>TypeScript</strong></li>
//   <li>Replacing <strong>HFSQL</strong> (PCSoft) with <strong>Microsoft SQL Server</strong> and <strong>RabbitMQ</strong> for more efficient data storage and logging</li>
// </ul>
// This migration allowed us to add features that weren't initially thought of in the first design of the application, such as:
// <ul>
//   <li>A special table for logging</li>
//   <li>OAuth integration</li>
//   <li>Automatic in/outgoing interfaces for various data</li>
// </ul>
// The redesign significantly increased the responsiveness of the application, boosting user satisfaction and experience, reduced onboarding time for new users, and greatly enhanced overall efficiency for fleet management teams.`,
// 		imageUrl: "/imgs/projects/Winflotte.svg",
// 		techStack: [
// 			"TypeScript",
// 			"Angular",
// 			"C#",
// 			"Windev / Webdev",
// 			"Microsoft SQL Server",
// 			"HFSQL",
// 			"PowerBI",
// 			"RabbitMQ",
// 		],
// 		liveDemoUrl: "",
// 		sourceCodeUrl: "",
// 	},
// 	{
// 		id: "EDI_Automation",
// 		heading: "Automated EDI File Processing Software",
// 		subheading: "Streamlining EDI transactions through automation",
// 		description: `This project was for the development of an automated solution for processing Electronic Data Interchange (EDI) files, optimizing business operations and minimizing manual data handling. Key features include:
// <ul>
//   <li>Mailbox reading based on SQL settings</li>
//   <li>Automated EDI file parsing</li>
//   <li>Customizable data mapping</li>
//   <li>Integration with existing business systems</li>
//   <li>Real-time reporting and error handling</li>
//   <li>An interface for configuration and monitoring</li>
// </ul>
// Using technologies such as <strong>C#</strong> for core logic, <strong>Angular/TypeScript</strong> for the user interface, <strong>SQL Server</strong> for data storage, and <strong>PowerShell</strong> scripts executed by Windows Scheduler, the solution has enabled significant time savings, improved data accuracy, and efficiency for the EDI process.`,
// 		imageUrl: "/imgs/projects/portfolioEDI.svg",
// 		techStack: [
// 			"C#",
// 			"RabbitMQ",
// 			"Angular",
// 			"TypeScript",
// 			"Windev / HFSQL",
// 			"SQL Server",
// 			"PowerShell",
// 			"Scheduler",
// 		],
// 		liveDemoUrl: "",
// 		sourceCodeUrl: "",
// 	},
// 	{
// 		id: "Portfolio_website",
// 		heading: "Portfolio Website",
// 		subheading: "Making a first portfolio website",
// 		description: `A modern portfolio website with all the info it needs to convey. It includes features such as:
// <ul>
//   <li>Automatic theme detection from the system</li>
//   <li>A color changer</li>
//   <li>Settings memorization</li>
//   <li>Database fetching for all project data</li>
// </ul>
// The website is developed with <strong>Next.js</strong> and <strong>TypeScript</strong> for the frontend, and <strong>Vercel</strong> and <strong>PostgresDB</strong> for the backend.

// It has some shortcomings, mainly its looks, but it served well as a first <em>"from scratch"</em> project.`,
// 		imageUrl: "/imgs/projects/portfolio.svg",
// 		techStack: [
// 			"TypeScript",
// 			"NextJS",
// 			"Postgres",
// 			"TailwindCSS",
// 			"Vercel",
// 			"Bun",
// 		],
// 		liveDemoUrl: "https://old.vbarbera.com",
// 		sourceCodeUrl: "https://github.com/virgile953/portfolio",
// 	},
// 	{
// 		id: "OptiXt_HR_auto",
// 		heading: "Automated HR File Processing Software",
// 		subheading: "Streamlining HR data ingestion through automation",
// 		description: `Historically, HR files containing all the data relative to each driver (names, address, date and place of birth, which car they drive, etc.) were manually integrated using existing interfaces that worked well but needed to be manually fed the file, checked, and the reporting was also generated by hand. This was fine but not scalable, and with each new client, the interface still had to be created, depending on their file format.

// This project aimed to solve this problem, and the whole system of HR interface was re-created from the ground up, allowing:
// <ul>
// 	<li>Creation of a new interface via configuration only (no need to update the SaaS software's code to add a new one)</li>
// 	<li>Configuration of which column of data maps to which field in the database via a web interface (<strong>Angular/TypeScript</strong>)</li>
// 	<li>Option to historize changes (e.g., if a driver moves from one entity to another, it creates a new history line reflecting the change)</li>
// 	<li>Automatic scheduling of interfaces based on client agreements</li>
// 	<li>Generation of an Excel report file with each modification made, based on old and new data</li>
// </ul>
// This allowed the team in charge of client data to focus their attention elsewhere, improved efficiency, and decreased human error. It also freed up a part of the dev team, removing them from the process of interface creation.`,
// 		imageUrl: "/imgs/projects/portfolioDriver.svg",
// 		techStack: [
// 			"C#",
// 			"RabbitMQ",
// 			"Angular",
// 			"TypeScript",
// 			"SQL Server",
// 			"FTP",
// 			"Windows Scheduler",
// 			"Windev / HFSQL",
// 		],
// 		liveDemoUrl: "",
// 		sourceCodeUrl: "",
// 	},
// 	{
// 		id: "OptiXt_Email",
// 		heading: "Bulk Email Sending and Parsing Tool",
// 		subheading: "Facilitating bulk email sending",
// 		description: `Created a tool for bulk email sending, with automatic HTML processing for personalized emails to the recipient. The tool was written in <strong>Python</strong>, as I had never had a project that required it and wanted to explore the technology.

// Key features include:
// <ul>
//   <li>Using an Excel file as input, with column names mapping to fields in the HTML template</li>
//   <li>Support for attachments, with paths defined in the Excel file as <em>"attach.1"</em>, <em>"attach.2"</em>, etc.</li>
//   <li>Easy operation by internal end-users: All they needed to do was write a basic email and place fields like <em>"first name"</em>, <em>"last name"</em>, and <em>"address"</em> in brackets, which were replaced by the data in the Excel file for each line</li>
// </ul>
// This reduced the time needed to complete certain client-agreed tasks from days to minutes and allowed internal teams to sell a new kind of service in which we weren't competitive before.`,
// 		imageUrl: "/imgs/projects/portfolioPython.svg",
// 		techStack: ["Python", "OpenPyxl", "Microsoft Excel"],
// 		liveDemoUrl: "",
// 		sourceCodeUrl: "",
// 	},
// ];
