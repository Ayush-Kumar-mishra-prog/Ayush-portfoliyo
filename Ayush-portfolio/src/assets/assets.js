import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from './profile_img.jpg';
import SecondProfileImg from './abotImage.png';
import projectImg1 from './image 5.png';
import projectImg2 from './image (3).png';
import projectImg3 from './image.png';
import projectImg4 from './image (4).png';
import projectImg5 from './image (1).png';
import projectImg6 from './image (2).png';


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
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'TypeScript','Redux']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', 'Microservices', 'Cron jobs']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB',  'MySQL', 'Firebase']
  },
  {
    title: 'API design',
    icon: FaCode,
    description: 'Building cross-platform mobile applications with modern tools.',
    tags: ['RESTful APIs', 'GraphQL', 'Websockets', 'Postman','Socket.IO']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['Vercel', 'Docker', 'Redis', 'CI/CD','Cloudinary','Render','Netlify',
      
    ]
  },
  {
    title: 'AI Technology and Tools',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['langChain','langGraph','LLM','RAG']
  }
];



export const projects = [
  {
    title: "Portfoliyo website",
    description: "A portfolio website that showcases my skills and projects. It is built with React and Tailwind css. For animation in this website i used Framer motion and for content i used markdown.",
    image: projectImg1,
    tech: ["React", "Tailwind css", "framer motion", "markdown"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "https://ayush-portfoliyo.vercel.app",
    code: "https://github.com/Ayush-Kumar-mishra-prog/Ayush-portfoliyo",
  },
  {
    title: "Social Media platform",
    description: "A social media platform with real-time chat, news feed, and user profiles. It allows users to connect, share content, and interact with each other.",
    image: projectImg2,
    tech: ["React.js", "Clerk", "Tailwind CSS", "server side events","Express","MongoDB","node mailer","Cloudinary"],
    icons: [FaReact, FaFire, FaCloud , FaDatabase],
    demo: "https://connectify-puce-dev-ayush-client.vercel.app/",
    code: "https://github.com/Ayush-Kumar-mishra-prog/social-media",
  },
  {
    title: "Social Media Post Scheduler",
    description: "A social media post scheduler that allows users to schedule posts on social media platforms. It uses Node cron to schedule posts and MongoDB to store post details.",
    image: projectImg3,
    tech: ["React (typescript)", "MongoDb", "Node cron","Express (typescript)","Zernio"],
    icons: [FaReact, FaDatabase],
    demo: "https://social-media-post-scheduler-client.vercel.app/",
    code: "https://github.com/Ayush-Kumar-mishra-prog/social-media-Post-scheduler",
  },
  {
    title: "Ai chat bot",
    description: "A chat bot that uses OpenAI API to generate responses to user queries. It uses Imagekit API to generate images and Imagekit to store images.",
    image: projectImg4,
    tech: ["React.js", "Tailwind CSS", "ImageKit", "Markdown","OpenAI API","Gemini API","Cloudinary"],
    icons: [FaReact, FaCloud],
    demo: "https://mirror-chat-dev-ayush-client.vercel.app/",
    code: "https://github.com/Ayush-Kumar-mishra-prog/Ai-Project",
  },
  {
    title: " Real time chat application ",
    description: "A real-time chat application that allows users to communicate with each other in a secure and private environment. It uses Socket.IO for both real-time communication and voice call,video calls feature like whatsapp.",
    image: projectImg5,
    tech: ["Socket.IO", "React", "Node.js", "MongoDB","Tailwind css","Oauth 2.0"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "https://chatio-frontend.vercel.app/",
    code: "https://github.com/Ayush-Kumar-mishra-prog/Chatio",
  },
  {
    title: "AI Thumbnail Generator",
    description: "A thumbnail generator website that can generate thumbnails for videos, images, and other media files. It uses Gemini API to generate thumbnails and Cloudinary to store images.",
    image: projectImg6,
    tech: ["React", "Gemini API", "Cloudinary", "Tailwind CSS","Express js"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "https://ai-thumbanil-generator-client-types.vercel.app/",
    code: "https://github.com/Ayush-Kumar-mishra-prog/Ayush-portfoliyo/Ai-thumbanil-generator",
  }
];



