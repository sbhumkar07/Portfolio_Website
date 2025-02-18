
/*
import project1 from "../assets/ImageHub.svg";
import project2 from "../assets/KubernetesDeployment.svg";
import project3 from "../assets/ChatGPTClone.svg";
import education1 from "../assets/UBLogo.svg";
import education2 from "../assets/SPPULogo.svg";
import work1 from "../assets/RadicalAILogo.svg";
import work2 from "../assets/CognizantLogo.svg";
*/

import project1 from "../assets/ImageHub.jpg";
import project2 from "../assets/DjangoProj.png";
import project3 from "../assets/Chatgptclone1.jpg";
import education1 from "../assets/UBlogo2.jpg";
import education2 from "../assets/SPPULogo.svg";
import work1 from "../assets/RadicalAIlogo.png";
import work2 from "../assets/Cognizantlogo.png";


export const HERO_CONTENT = `I am a passionate software engineer with a drive for building scalable and intelligent digital solutions. With hands-on experience in backend development, cloud computing, and AI-driven applications, I thrive on solving complex problems and optimizing performance. Having recently graduated from University at Buffalo with a Master's degree in Computer Science, I am now eager to push the boundaries of technology and innovation and actively looking for full time job opportunities in the United States.`;

export const ABOUT_TEXT = `I am a dedicated and impact-driven software developer, currently pursuing my Master’s in Computer Science and Engineering at the University at Buffalo. With a strong foundation in backend systems, cloud technologies, and AI-driven applications, I have built solutions that scale across thousands of users. My expertise spans Node.js, Python, Java, and cloud platforms like AWS and Azure. At Cognizant, I engineered microservices ensuring 99.9% system availability, and at Radical AI, I optimized AI-driven teaching assistants, enhancing user experience for 50,000+ students. I’m always on the lookout for opportunities to innovate and build technology that makes a difference.`;

export const EDUCATION = [
  {
    year: "August 2023 - December 2024",
    logo: education1,
    university: "University at Buffalo",
    degree: "Master of Science in Computer Science and Engineering",
    description: [
      "Pursuing my Master's at the University at Buffalo with a focus on scalable systems, cloud computing, and artificial intelligence.",
      "Relevant coursework: Algorithms, CodePath, Operating Systems, Deep Learning, Data Intensive Computing.",
      "Working on cutting-edge AI and backend system projects, implementing solutions with Kubernetes, AWS, and large-scale distributed systems.",
    ],
  },
  {
    year: "August 2017 - May 2021",
    logo: education2,
    university: "Savitribai Phule Pune University",
    degree: "Bachelor of Engineering in Electronics and Telecommunication",
    description: [
      "Graduated with a strong foundation in software engineering, data structures, and embedded systems.",
      "Relevant coursework: Data Structures, Machine Learning, Computer Architecture, Embedded Systems.",
      "Developed multiple academic and personal projects focusing on system performance and AI integration.",
    ],
  },
];

export const EXPERIENCES = [
  {
    year: "May 2024 - August 2024",
    logo: work1,
    role: "Software Developer Intern",
    company: "Radical AI",
    description: [
      "Designed and implemented scalable backend solutions using Node.js, Firebase, and OpenAI’s GPT-4.5 for Kai, an AI-powered teaching assistant.",
      "Enhanced classroom interaction by 30% and supported 50,000+ active users with AI-driven learning tools.",
      "Architected secure authentication and data validation mechanisms, reducing security vulnerabilities by 40%.",
    ],
    technologies: ["Node.js", "Firebase", "OpenAI", "React", "Security Compliance"],
  },
  {
    year: "August 2021 - July 2023",
    logo: work2,
    role: "Software Developer",
    company: "Cognizant Technology Solutions",
    description: [
      "Revamped cloud-based SharePoint applications using SPFx and React.js, boosting engagement for 10,000+ users by 15%.",
      "Engineered a microservices-based backend with load balancing and automated failover, ensuring 99.9% system availability.",
      "Streamlined containerization using Docker, reducing deployment times by 40%.",
      "Mobilized Azure services for system scalability, improving cloud resource efficiency by 25%.",
      "Fine-tuned queries, achieving a 50% improvement in performance by optimizing SQL and ASP.NET (C#) processes.",
      "Facilitated CI/CD pipeline integration, enhancing system stability and reducing deployment time by 20%.",
      "Evaluated and provided feedback in code review sessions, validating adherence to best practices and coding standards."
    ],
    technologies: ["React.js", "Node.js", "Azure", "Docker", "Microservices"],
  },
];

export const PROJECTS = [
  {
    title: "ImageHub: Full Stack Image Management System",
    image: project1,
    description: [
      "Developed ImageHub, a full-stack web application for storing and managing user profile images securely.",
      "Built with Spring Boot and React.js, integrated AWS S3 for storage, and optimized retrieval speeds by 30%.",
      "Implemented RESTful APIs for seamless data exchange, enhancing UX and system performance.",
    ],
    technologies: ["Spring Boot", "React.js", "AWS S3", "REST APIs"],
    link: "https://github.com/sbhumkar07/ImageHub",
  },
  {
    title: "Scalable Django Deployment on Kubernetes",
    image: project2,
    description: [
      "Designed and deployed a Django application on Kubernetes, optimizing for scalability and fault tolerance.",
      "Utilized Docker for containerization and DigitalOcean for cloud services, ensuring a robust deployment pipeline.",
      "Integrated CI/CD pipelines with GitHub Actions, automating testing and deployment processes.",
    ],
    technologies: ["Django", "Kubernetes", "Docker", "GitHub Actions"],
    link: "https://github.com/sbhumkar07/KubernetesDeployment",
  },
  {
    title: "ChatGPT Clone with MERN Stack",
    image: project3,
    description: [
      "Built a scalable AI chatbot using the MERN stack with OpenAI API integration.",
      "Implemented JWT-based authentication and custom user session handling for secure access control.",
      "Designed a sleek and responsive UI, creating an intuitive and engaging chat experience.",
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "OpenAI"],
    link: "https://github.com/sbhumkar07/ChatGPTClone",
  },
];

export const CONTACT = {
  address: "Buffalo, NY",
  phoneNo: "+1 (716)-507-0822",
  email: "sarveshb@buffalo.edu",
};
