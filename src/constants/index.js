import project1 from "../assets/ImageHub.jpg";
import project2 from "../assets/DjangoProj.png";
import project3 from "../assets/Chatgptclone1.jpg";
import education1 from "../assets/UBlogo2.jpg";
import education2 from "../assets/SPPULogo.svg";
import radicalLogo from "../assets/RadicalAIlogo.png";
import cognizantLogo from "../assets/Cognizantlogo.png";
import stateStreetLogo from "../assets/StateStreetlogo.png";
import hclTechLogo from "../assets/HCLTechlogo.jpg";

export const HERO_CONTENT = `I build intelligent applications and reliable backend systems across financial services and healthcare. My work combines Generative AI, RAG, agentic workflows, Java/Spring Boot, Python/FastAPI, React, and AWS to turn complex business problems into practical software solutions.`;

export const ABOUT_TEXT = `I'm an AI Full-Stack Software Engineer focused on building secure, scalable applications where Generative AI and backend engineering meet. At State Street, my work spans financial risk intelligence with LangGraph, RAG, and AWS Bedrock, alongside Java/Spring Boot services and AWS-native liquidity risk workflows. Previously, I worked on a classroom GenAI assistant at Radical AI, healthcare ML and data workflows at HCLTech, and analytics and reporting at Cognizant. I earned my master's in Computer Science and Engineering from the University at Buffalo. I enjoy solving problems that connect intelligent systems, software reliability, and measurable business impact.`;

export const EDUCATION = [
  {
    year: "August 2023 - December 2024",
    logo: education1,
    university: "University at Buffalo, The State University of New York",
    degree: "M.S. in Computer Science and Engineering",
    description: ["Focus areas: algorithms, operating systems, deep learning, and data-intensive computing."],
  },
  {
    year: "August 2017 - May 2021",
    logo: education2,
    university: "Savitribai Phule Pune University",
    degree: "B.E. in Electronics and Telecommunication Engineering",
    description: ["Foundation in software engineering, computing, and engineering fundamentals."],
  },
];

export const EXPERIENCES = [
  {
    year: "August 2024 - Present",
    logo: stateStreetLogo,
    role: "AI Full-Stack Engineer / GenAI Engineer",
    company: "State Street",
    description: [
      "Developing a financial intelligence and risk analysis copilot using Python, FastAPI, LangGraph, AWS Bedrock, and retrieval-augmented generation (RAG).",
      "Integrating risk APIs and enterprise knowledge sources with hybrid retrieval, citations, authorized tool access, and LLM evaluation.",
      "Contributing to liquidity risk modernization through Java/Spring Boot services and AWS-native processing for intraday and end-of-day reporting.",
    ],
    technologies: ["Python", "LangGraph", "RAG", "AWS Bedrock", "Java", "Spring Boot", "FastAPI", "SQL Server"],
  },
  {
    year: "May 2024 - August 2024",
    logo: radicalLogo,
    role: "Artificial Intelligence Engineer Intern",
    company: "Radical AI",
    description: [
      "Developed features for Kai, a classroom teaching assistant using OpenAI APIs, React, Node.js, and Firebase.",
      "Built conversational workflows and backend APIs to support contextual Q&A, chat sessions, and student/instructor requests.",
    ],
    technologies: ["OpenAI API", "React", "TypeScript", "Node.js", "Firebase"],
  },
  {
    year: "July 2021 - July 2023",
    logo: hclTechLogo,
    role: "Machine Learning Engineer",
    company: "HCLTech",
    description: [
      "Worked on healthcare claims intelligence and document workflows using Python, SQL, scikit-learn, NLP, and data validation.",
      "Built preprocessing and reporting workflows for more than 100,000 healthcare records monthly, helping reduce manual reporting work by approximately 40%.",
    ],
    technologies: ["Python", "SQL", "Pandas", "Scikit-learn", "NLP", "FastAPI", "Docker"],
  },
  {
    year: "May 2019 - May 2021",
    logo: cognizantLogo,
    role: "Junior Data Scientist",
    company: "Cognizant",
    description: [
      "Supported customer operations analytics through SQL, Python, Pandas, data preparation, exploratory analysis, and reporting.",
      "Developed Power BI dashboards and visualizations to communicate operational metrics and data quality findings.",
    ],
    technologies: ["Python", "SQL", "Pandas", "NumPy", "Power BI", "EDA"],
  },
];

// Public personal projects. Employer projects are summarized under Experience and are not linked to private code.
export const PROJECTS = [
  {
    title: "ImageHub: Full-Stack Image Management System",
    image: project1,
    description: [
      "Full-stack application for storing and managing user images.",
      "Built with Spring Boot and React, with AWS S3 for object storage and REST APIs for image operations.",
    ],
    technologies: ["Java", "Spring Boot", "React", "AWS S3", "REST APIs"],
    //link: "https://github.com/sbhumkar07/ImageHub",
  },
  {
    title: "Django Deployment on Kubernetes",
    image: project2,
    description: [
      "Containerized Django application deployed to Kubernetes.",
      "Demonstrates Docker-based packaging and cloud deployment workflows.",
    ],
    technologies: ["Python", "Django", "Kubernetes", "Docker", "GitHub Actions"],
    //link: "https://github.com/sbhumkar07/KubernetesDeployment",
  },
  {
    title: "ChatGPT Clone with MERN Stack",
    image: project3,
    description: [
      "Conversational web application integrating an LLM API with a full-stack JavaScript application.",
      "Includes chat interface and backend integrations, with a focus on practical generative AI application development.",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "OpenAI API"],
    //link: "https://github.com/sbhumkar07/ChatGPTClone",
  },
];

export const CONTACT = {
  address: "Austin, United States",
  phoneNo: "+1 (716) 507-0822",
  email: "sarveshbhumkar01@gmail.com",
};
