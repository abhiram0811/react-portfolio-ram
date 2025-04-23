import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    "year": "Sep 2023 - Present",
    "role": "Software AI Engineer",
    "company": "Colorado State University",
    "description": "Developed a Retrieval-Augmented Generation (RAG) system enabling software engineers to efficiently find relevant technical research papers and documentation. Built a FAISS-powered vector search system indexing 1000+ papers, improving retrieval efficiency by 35%. Integrated an LLM-powered chatbot for summarizing and explaining complex concepts, reducing research time by 40%. Implemented a LangChain-based pipeline for intelligent document retrieval and AI-generated insights.",
    "technologies": ["Python", "LangChain", "FAISS", "LLM", "JavaScript", "React.js", "Next.js", "MongoDB"]
  },
  {
    "year": "Feb 2022 - Mar 2023",
    "role": "Software Development Engineer Intern",
    "company": "IntelliSense Software Pvt Ltd",
    "description": "Led the design and implementation of a full-stack CI/CD pipeline using Jenkins, Kubernetes, Git, SonarQube, and Nexus, streamlining code integration and deployment for enterprise DevOps workflows. Configured Kubernetes clusters for scalable microservices deployment, optimizing infrastructure and reducing deployment time. Integrated automated security scanning, reducing vulnerabilities early in the development cycle. Enabled automated build, test, and deployment processes using Git and Jenkins, reducing manual intervention by 60%.",
    "technologies": ["Jenkins", "Kubernetes", "Git", "SonarQube", "Nexus", "Next.js", "React.js", "MySQL"]
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
