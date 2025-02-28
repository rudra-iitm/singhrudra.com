import {ProjectArchive} from "@/components/project-archive";

export default function Home() {

    const projects = [
        {
            timeline: '2025',
            project: 'InnovateX',
            builtWith: 'NextJS, TailwindCSS, ShadCN, Clerk Auth, Prisma, PostgreSQL, Web Containers, Docker, Vercel API, Agent.ai',
            shortDescription: 'InnovateX is an AI-powered, low-code website builder that enables users to create stunning, responsive websites effortlessly.',
            description:
                "InnovateX is an AI-powered, low-code website builder that enables users to create stunning, responsive websites effortlessly. With cutting-edge features like web containers, Clerk authentication, and Agent.ai integration, users can design and deploy websites with ease. Powered by Next.js, TailwindCSS, and ShadCN, InnovateX is the future of web development.",
            image: '/archives/innovate-x.png',
            githubLink: 'https://github.com/rudra-iitm/innovatex',
            preview: 'https://www.youtube.com/embed/i9oG8GSS9xo?si=r7sV3yfw1ZhCyaRb',
        },
        {
            timeline: '2025',
            project: 'Portfolio v2',
            builtWith: 'NextJS, TailwindCSS, Framer Motion, Github Pages, ShadCN, Aceternity UI',
            shortDescription: 'A revamped personal portfolio showcasing skills, projects, and experience, built with Next.js and styled using modern frameworks like TailwindCSS and ShadCN.',
            description:
                "Explore Portfolio v2: a beautifully crafted personal portfolio showcasing my journey as a developer. Built using Next.js, TailwindCSS, and ShadCN, this website highlights my projects, skills, and accomplishments in an engaging and interactive format. With smooth animations powered by Framer Motion and a sleek design, it's the ultimate hub for all things about me!",
            image: '/archives/portfolio-v2.png',
            githubLink: 'https://github.com/rudra-iitm/singhrudra.com',
        },
        {
            timeline: '2025',
            project: 'Web Dock',
            builtWith: 'Web Containers, Next.js, TailwindCSS, ShadCN',
            shortDescription: 'A browser-based IDE enabling Node.js development directly within your web browser.',
            description:
                "Web Dock is a cutting-edge web application that allows developers to create and run Node.js projects directly in their browser without the need for local setups. Leveraging web containers, it offers a seamless, interactive coding experience, complete with modern UI built using Next.js, TailwindCSS, and ShadCN. Perfect for quick prototyping or learning on the go, Web Dock is the future of browser-based development.",
            image: '/web-dock.png',
            githubLink: 'https://github.com/rudra-iitm/web-dock',
            preview: 'https://drive.google.com/file/d/1oAyzHRwyAeqgzsz57njGpMepT-3cwgKQ/preview',
        },
        {
            timeline: '2025',
            project: 'Chess Actions',
            builtWith: 'Github Actions, Typescript, Chess Bot, Octokit',
            shortDescription: 'Chess Actions is a GitHub Action that brings the game of chess directly into your GitHub issues tab.',
            description:
                "Chess Actions is a GitHub Action that brings the game of chess directly into your GitHub issues tab. Players can create games, make moves, offer/accept withdrawals, and resign all through issue comments. The workflow updates the chessboard dynamically and manages the game state seamlessly within the repository.",
            image: '/chess-actions.png',
            githubLink: 'https://github.com/rudra-iitm/chess-actions',
            preview: 'https://drive.google.com/file/d/1g9Mexu2PSJGiGgRmdt_brSrHfWo3-ZW8/preview'
        },
        {
            timeline: "2024",
            project: "Knight's Gambit",
            builtWith: "React, Typescript, TailwindCSS, Web Socket, Clerk Auth, Chess Bot, StockFish, Prisma, PostgreSQL, ShadCN, Turborepo, Ngrok",
            shortDescription: "A chess game app for playing real-time multiplayer chess or creating private rooms. Features include AI-powered chess bots, secure authentication, and seamless gameplay.",
            description:
                "Dive into the world of chess with Knight's Gambit! Play real-time multiplayer matches against friends, or test your skills against our AI-powered chess bots, powered by StockFish. Secure and seamless matches are ensured with Clerk authentication, making it perfect for beginners and pros alike. Elevate your chess experience today!",
            image: "/archives/knights-gambit.png",
            githubLink: "https://github.com/rudra-iitm/Knight-s-Gambit",
        },
        {
            timeline: "2024",
            project: "Note Corner",
            builtWith: "NextJS, Typescript, TailwindCSS, NextAuth, Prisma, PostgreSQL, ShadCN, Judge0, QuillJS",
            shortDescription: "A productivity app combining rich text editing, code execution, collaborative diagramming, and AI integration for optimized workflow.",
            description:
                "Boost your productivity with Note Corner! This all-in-one tool offers rich text editing, real-time code execution via Judge0, collaborative diagramming, task management, event scheduling, and AI-powered assistance. Perfect for brainstorming, coding, and managing tasks in one place. Redefine your workflow today!",
            image: "/images/mindfulmoments.jpg",
            githubLink: "https://github.com/Rudra-IITM/note-corner",
            preview: "https://www.youtube.com/embed/tbTcSc-BBAI?si=Gqy_AzXkxQDbPdrh"    
        },
        {
            timeline: "2024",
            project: "Surge Sync",
            builtWith: "AWS S3 Client, React, Kafka, NodeJS, Express, Docker, Prisma, PostgreSQL, Reverse Proxy",
            shortDescription: "A real-time collaborative coding platform enabling seamless teamwork on code projects.",
            description:
                "Experience seamless real-time collaboration with Surge Sync! Empower your team to code, debug, and share ideas effortlessly, supported by cutting-edge tools like Kafka for messaging, Docker for containerization, and AWS S3 for secure file storage. Ideal for teams working on live projects, Surge Sync transforms the way you collaborate.",
            image: "/images/codecollab.jpg",
            githubLink: "https://github.com/Rudra-IITM/surgesync",
        },
        {
            timeline: "2024",
            project: "Portfolio v1",
            builtWith: "React, TailwindCSS, ShadCN, Github Pages",
            shortDescription: "A personal portfolio showcasing projects, skills, and a developer's journey in web development.",
            description:
                "Explore my journey as a developer with Portfolio v1! This beautifully crafted web portfolio highlights my projects, skills, and experience in web development. Dive into my story and see how I approach web technologies to create impactful solutions. Let's connect and build something amazing together!",
            image: "/archives/portfolio-v1.png",
            githubLink: "https://github.com/Rudra-IITM/rudra-iitm.github.io",
        },
        {
            timeline: "2024",
            project: "Mess Buddy",
            builtWith: "React, Tailwind, ShadCN, NodeJS, Express, Prisma, PostgreSQL, JWT, Bcrypt, Zod, NodeMailer, Cloudinary, S3 Client, Flutter",
            shortDescription: "A streamlined app for IIT Mandi's mess management, simplifying menu browsing and mess selection.",
            description:
                "Say hello to Mess Buddy: your ultimate mess management companion for IIT Mandi! Access menus, manage selections, and streamline your dining experience with just a click. Powered by robust backend technology and a user-friendly interface, Mess Buddy makes mess management a breeze, letting you focus on what matters most!",
            image: "/archives/mess-buddy.png",
            githubLink: "https://github.com/Rudra-IITM/MessManagementApp",
        },
    ];

  return (
    <div className="min-h-lvh py-12 md:p-16 flex flex-col md:items-center md:justify-center">
        <div className="md:text-center mx-12">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-300 mt-12">Project Archive</h1>
            <p className="text-base md:text-lg mb-8 md:mb-0 text-violet-600 mt-4">
                A collection of some of my past projects
            </p>
        </div>
        <ProjectArchive cards={projects}/>
    </div>
  );
}
