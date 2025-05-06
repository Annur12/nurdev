export const navLinks = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Qualifications",
    link: "#qualifications",
  },
  {
    name: "Industry Visits",
    link: "#industryVisits",
  },
];

export const socialLinks = [
  {
    name: "Github",
    href: "https://github.com/Annur12",
    icon: "FaGithub",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/nur-manggona-b0a37b297/",
    icon: "FaLinkedin",
  },
  {
    name: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=your.annolmanggona12@gmail.com",
    icon: "FaEnvelope",
  },
];

export const technologies = [
  {
    name: "HTML",
    description: "Markup Language",
    icon: "SiHtml5",
    color: "#e34c26",
  },
  {
    name: "CSS",
    description: "User Interface",
    icon: "SiCss3",
    color: "#264de4",
  },
  {
    name: "JavaScript",
    description: "Scripting Language",
    icon: "SiJavascript",
    color: "#f7df1e",
  },

  {
    name: "React",
    description: "UI Library",
    icon: "SiReact",
    color: "#61dafb",
  },
  {
    name: "NextJS",
    description: "React Framework",
    icon: "SiNextdotjs",
    color: "#000000",
  },
  {
    name: "Tailwind",
    description: "CSS Framework",
    icon: "SiTailwindcss",
    color: "#38bdf8",
  },

  {
    name: "PHP",
    description: "Server Scripting",
    icon: "SiPhp",
    color: "#8892be",
  },
];

export const projects = [
  {
    id: 1,
    title: "Blog App",
    description:
      "A simple blog application designed to document and share experiences during our 8-day ndustry visit.",
    stacks: ["NextJS", "Tailwind"],
    image: "/images/blog.png",
    link: "https://nur-blogapp.vercel.app/",
  },
  {
    id: 2,
    title: "E-commerce Website",
    description:
      "A simple online store we built for our Elective 2 subject. It includes user login, product listings, and a shopping cart system — all built from scratch.",
    stacks: ["HTML", "CSS", "JS", "PHP"],
    image: "/images/ecom.jpg",
    link: "#Ecommerce",
  },
  {
    id: 3,
    title: "Deep-Well Water Source Mapping Management System",
    description:
      "Our Capstone Project — a web-based system that helps map and manage deep-well water sources in local areas. It supports data collection, location visualization, and efficient resource tracking.",
    stacks: ["PHP", "JS", "Leaflet"],
    image: "/images/deepwell.png",
    link: "#DeepWell",
  },
  {
    id: 4,
    title: "Lost & Found Management System",
    description:
      "Our Capstone Project — a web-based system that helps map and manage deep-well water sources in local areas. It supports data collection, location visualization, and efficient resource tracking.",
    stacks: ["HTML", "CSS", "JS", "PHP"],
    image: "/images/lostandfound.png",
    link: "#LostAndFound",
  },

  {
    id: 5,
    title: "Individual Performance Commitment and Review System",
    description:
      "We developed an Individual Performance Commitment and Review (IPCR) system for our university to help teachers manage their performance evaluations more efficiently.The system allows faculty members to input, track, and review their goals and accomplishments in one place.",

    stacks: ["HTML", "CSS", "JS", "PHP"],
    image: "/images/ipcr.jpg",
    link: "#Ipcr",
  },
];

export const qualifications = [
  {
    id: 1,
    title: "Experiences",
    items: [
      {
        role: "E-commerce Website Developer",
        company: "Elective 2 Project, WMSU",
        duration: "2024",
        details: [
          "Built a full-stack online store with user login, product listings, and shopping cart system.",
          "Developed the project using HTML, CSS, JavaScript, and PHP.",
          "Tech Stack: HTML, CSS, JS, PHP",
        ],
      },
      {
        role: "Freelance Web Developer - Dynamic E-commerce",
        company: "Self-Employed",
        duration: "2022 - Present",
        details: [
          "Developed a dynamic e-commerce platform with shopping cart functionality.",
          "Integrated a product catalog and checkout system.",
          "Tech Stack: PHP, MySQL, JavaScript, HTML/CSS",
        ],
      },
      {
        role: "Freelance Web Developer - Donor System",
        company: "Self-Employed",
        duration: "2022 - Present",
        details: [
          "Implemented CRUD operations for donor data management and donation tracking.",
          "Tech Stack: PHP, MySQL, JavaScript, HTML/CSS",
        ],
      },
      {
        role: "Capstone Project Developer",
        company: "WMSU, Capstone Project",
        duration: "2024",
        details: [
          "Developed a web-based Deep-Well Water Source Mapping Management System to map and manage local water resources.",
          "Enabled data collection and visualization for tracking resources efficiently.",
          "Tech Stack: PHP, JavaScript, Leaflet",
        ],
      },
      {
        role: "School Project Developer",
        company: "WMSU, App Dev Project",
        duration: "2023",
        details: [
          "Developed a Lost & Found Management System to help students and staff track lost items.",
          "Implemented user-friendly interfaces for both public and admin management of found items.",
          "Tech Stack: HTML, CSS, JS, PHP",
        ],
      },
      {
        role: "System Developer",
        company: "WMSU, IPCR System Project",
        duration: "2023",
        details: [
          "Developed an Individual Performance Commitment and Review (IPCR) System for faculty performance tracking.",
          "Enabled faculty to input, track, and review their goals and accomplishments efficiently.",
          "Tech Stack: HTML, CSS, JS, PHP",
        ],
      },
    ],
  },

  {
    id: 2,
    title: "Education",
    items: [
      {
        degree: "BS in Information Technology",
        institution: "Western Mindanao State University (WMSU), Zamboanga City",
        duration: "2020 - Present",
        details: [
          "Relevant Coursework: Web Development, Database Systems etc...",
          "Capstone Project: Deep-Well Water Source Mapping Management System (Leaflet, PHP, MySQL)",
        ],
      },
    ],
  },

  {
    id: 3,
    title: "Certificates",
    items: [
      {
        name: "Meta JavaScript Basics",
        issuer: "Coursera",
        duration: "2023",
        details: [
          "Covered modern ES6+ syntax",
          "DOM manipulation techniques",
          "Async programming concepts",
        ],
      },
      {
        name: "Meta React.js Fundamentals",
        issuer: "Coursera",
        duration: "2023",
        details: [
          "Component-based architecture",
          "State management with hooks",
          "React router implementation",
        ],
      },
    ],
  },
];

export const keyTakeways = [
  {
    id: 1,
    title:
      "From Subic to MMDA to BSP, it became clear that various sectors—transportation, finance, security—rely heavily on technology for efficiency and safety.",
  },
  {
    id: 2,
    title:
      "Real-world exposure to operations centers and museums provided context that can't be replicated in books or lectures.",
  },
  {
    id: 3,
    title:
      "Historical sites inspired a deeper respect for our roots and heroes.",
  },

  {
    id: 4,
    title:
      "Seeing professionals in action helped some of us visualize future career paths in tech, public service, or even historical research.",
  },

  {
    id: 5,
    title:
      "Traveling and learning together strengthened our bonds and helped us grow socially and emotionally.",
  },
];
