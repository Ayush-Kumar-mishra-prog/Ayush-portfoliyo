import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from './profile_img.jpg';
import SecondProfileImg from './abotImage.png';
import projectImg1 from './project1.avif';
import projectImg2 from './project2.avif';
import projectImg3 from './project3.avif';
import projectImg4 from './project4.avif';
import projectImg5 from './project5.avif';
import projectImg6 from './project6.avif';


export const assets = {
    profileImg,
    SecondProfileImg

}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    },
    {
      icon: FaTools,
      title: 'Problem Solver',
      description: 'I thrive on challenges and enjoy finding creative solutions to complex problems.',
      color: 'text-pink'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'TypeScript','Netailwind']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', 'PHP', 'Laravel']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']
  },
  {
    title: 'Mobile Development',
    icon: FaMobileAlt,
    description: 'Building cross-platform mobile applications with modern tools.',
    tags: ['React Native', 'Flutter', 'Ionic','Expo','Android studio','Xcode']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['Vercel', 'Docker', 'Kubernetes', 'CI/CD','Cloudinary','Render','Netlify','Google Cloud','Basic deployment workflows',
      'Configuration handling','Debugging server issues'
    ]
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Ingestion', 'ImageKit', 'CodeRabbits', 'Postman','TestStripe','OpenAI API' ,'Gemini API','Markdown','Socket.IO','Neon js','Stripe','Cronjob','Razorpay']
  }
];



export const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with shopping cart, user authentication, and payment processing.",
    image: projectImg1,
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "Social Media platform",
    description: "A social media platform with real-time chat, news feed, and user profiles.",
    image: projectImg2,
    tech: ["React.js", "Clerk", "Tailwind CSS", "WebSockets","Express","MongoDB","Socket.IO","Cloudinary"],
    icons: [FaReact, FaFire, FaCloud , FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Fitness Tracker",
    description: "A mobile app for tracking workouts, nutrition, and health metrics.",
    image: projectImg3,
    tech: ["React Native", "MongoDb", "Expo","Express js"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "Chat App",
    description: "A real-time chat application with group messaging, emojis, and file sharing.",
    image: projectImg5,
    tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "#",
    code: "#",
  },
  {
    title: "AI Image Generator",
    description: "Generate images using AI prompts powered by Gemini API models and Cloudinary.",
    image: projectImg6,
    tech: ["React", "Gemini API","ImageKit", "Cloudinary", "Tailwind CSS"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "#",
  }
];



