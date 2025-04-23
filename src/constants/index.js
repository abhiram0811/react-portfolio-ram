import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-4.jpg"; 


export const HERO_CONTENT = `Hi, I’m Abhiram Reddy—software engineer(you can also call me 'Ram'), systems thinker, and part-time philosopher in the world of logic and latency. I build with Python, Java, .NET Core, SQL, and JavaScript, deploy with Docker and Jenkins, and navigate the cloud via AWS and Azure (with minimal panic). My current obsessions include building intelligent retrieval systems with LangChain and RAG, untangling logs like a digital detective, and making infrastructure behave without bribery (most of the time).

Beyond the stack, I’m deeply curious about human psychology, love a good debate that doesn’t end in a mute button, and find market cycles just as fascinating as event-driven architectures. I believe in writing code that works—and in asking the bigger “why” behind the things we build.`;

export const ABOUT_TEXT = `An engineer who enjoys building systems that are not just functional, but thoughtful. My focus spans software development, cloud infrastructure, and AI-powered applications, particularly those that aim to make complex things feel a little less complicated. Whether it's designing a retrieval pipeline, debugging logs, or automating a DevOps flow, I approach problems with a mix of precision, curiosity, and practicality.

I care as much about how things work as why they matter. My work often blends structured engineering with a human lens—exploring not just performance, but usability, ethics, and continuous improvement. I’m driven by a need to learn and evolve, and I like to believe that upgrading myself is the most consistent system I’ve ever built.

Outside of tech, I’m into motorbikes, stock markets, and the long-term game of financial independence. I also ski—badly—but with commitment. Let’s just say gravity and I are still negotiating the terms.`;

export const EXPERIENCES = [
  {
    year: "Sep 2023 - Present",
    role: "Graduate Research Assistant",
    company: "Colorado State University",
    description: "Designed scalable data pipelines and orchestrated 100+ cloud testbed servers using Docker for advanced network research. Automated root cause analysis for packet transmission errors with Python and Kubernetes, and performed TCP error analysis to enhance checksum validation. Developed RESTful APIs and real-time processing systems, improving data throughput by 40%.",
    technologies: ["Python", "SQL", "Docker", "REST APIs", "Kubernetes", "Bash", "Cloud Infrastructure"]
  },
  {
    year: "Feb 2022 - Mar 2023",
    role: "Software Development Engineer Intern",
    company: "IntelliSense Software Pvt Ltd",
    description: "Developed scalable backend services using C# and .NET Core for enterprise DevOps pipelines. Built RESTful APIs, integrated Razor Pages for UI workflows, and implemented Jenkins-based CI/CD automation with Git. Enhanced code quality and security through static analysis using SonarQube and Nexus.",
    technologies: ["C#", ".NET Core", "Jenkins", "Git", "SQL Server", "SonarQube", "Nexus", "Razor Pages"]
  }
];


export const PROJECTS = [
  {
    
      title: "Portfolio Website",
      link: "https://github.com/abhiram0811/react-portfolio-ram", 
      image: project5, 
      description:
        "Built a modern developer portfolio using Vite, React, Tailwind CSS, and Framer Motion. Features dynamic sections like Projects, Skills, and Experience with animated transitions, responsive design, and seamless deployment via Vercel with a custom domain.",
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Vercel", "GitHub"],
    
    
  },
  {
    title: "LLM-Powered Cold Email Generator",
    link: "https://github.com/abhiram0811/cold-email-ai-gen",
    image: project2,
    description:
      "Developed a full-stack RAG system using LangChain, ChromaDB, and Llama3.1 to generate targeted emails. Showcases retrieval-based prompting, OpenAI integration, and deploys seamlessly using Streamlit.",
    technologies: ["LangChain", "Python", "Llama3.1", "ChromaDB", "Streamlit", "OpenAI API"],
  },
  {
    title: "Soil Type Classification with Deep Learning",
    link: "https://github.com/abhiram0811/Soil-type-classification-of-LANDSAT-8-images-using-deep-CNN-techniques-",
    image: project3,
    description:
      "Built a CNN model achieving 97.5% accuracy for classifying soil types from satellite images. Integrated OpenCV and Pillow for preprocessing, with a Django-powered dashboard for user interaction.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Django", "Pillow"],
  },
  {
    title: "School Solver Discord Bot",
    link: "https://github.com/abhiram0811/Automated-SchoolSolver-WebScraping-Discord-Bot",
    image: project1,
    description:
      "Automated real-time question alerts for 50+ users using Beautiful Soup, Selenium, and Flask. Reduced manual monitoring by 95% by scraping educational platforms and pushing updates via Discord.",
    technologies: ["Python", "Beautiful Soup", "Flask", "Selenium", "Discord API"],
  },
  {
    title: "ASP.NET Core E-Commerce Restaurant App",
    link: "https://github.com/yourusername/aspnet-ecommerce-restaurant",
    image: project4,
    description:
      "Full-stack ASP.NET Core MVC web app with user auth, menu CRUD, cart session tracking, EF Core (Code-First), and Bootstrap styling. Demonstrates database relationships, DI, and Razor views.",
    technologies: ["C#", "ASP.NET Core", "Entity Framework", "SQL Server", "Bootstrap", "Razor Pages"],
  },
];


export const CONTACT = {
  address: "Fort Collins, CO ",
  phoneNo: "+1 (970)-(232)-(0207) ",
  email: "abhiramry11@gmail.com",
};
