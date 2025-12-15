import StackIcon from "tech-stack-icons";
import { FiBox } from "react-icons/fi";

export const projects = [
        { title: "MNG-YOGA", description: "This website is designed to help users in Mongolia access yoga classes online anytime and from anywhere.", 
         _id: "1",
        imageUrl: "https://res.cloudinary.com/df88yvhqr/image/upload/v1765631361/coed3gbvpj1vlqoyzd0k.png",
        projectUrl: "https://www.mngyoga.mn/",
         techStack: [ { name: "Next.js", icon: <StackIcon name="nextjs2" /> },
            { name: "MongoDB", icon: <StackIcon name="mongodb" />},
            {name:"Framer-Motion",icon: <FiBox />},
            { name: "Tailwind CSS", icon: <StackIcon name="tailwindcss" /> }

         ],
          githuburl: "https://github.com/pinecone-2a/MNG-YOGA",
          isTeam : true},
          {
             title: "WEATHER-APP", description: "This website aims to deliver real-time weather updates for major cities worldwide. It is my first demo project.", 
         _id: "2",
        imageUrl: "https://res.cloudinary.com/dhh6vcebu/image/upload/v1765804011/Screenshot_2025-12-15_195004_cxylc4.png",
        projectUrl: "https://weather-app-peach-nine-10.vercel.app/",
         techStack: [{name:"html" ,icon : <StackIcon name="html5" />},
            {name:"CSS" ,icon : <FiBox/>},
            {name:"Weather API" , icon: <FiBox/>},
          { name: "Next.js", icon: <StackIcon name="nextjs2" /> }


         ],
          githuburl: "https://github.com/Bymbatseren/Weather-app",
          isTeam : false
          },
           {
             title: "THANKLY", description: "This project was built to encourage workplace colleagues to share appreciation messages with each other, helping to improve internal culture and team morale. It was developed for the PineQuest competition organized by Pinecone Academy", 
         _id: "3",
        imageUrl: "https://res.cloudinary.com/dhh6vcebu/image/upload/v1765803972/Screenshot_2025-12-15_200242_scfhco.png",
        projectUrl: "https://pinequest-iota.vercel.app/",
         techStack: [{name:"canva" , icon: <StackIcon name="canva" />

         }, { name: "Next.js", icon: <StackIcon name="nextjs2" /> },
         { name: "MongoDB", icon: <StackIcon name="mongodb" /> },
        ],
          githuburl: "https://github.com/Bymbatseren/Weather-app",
          isTeam : true
          }
          
    ]
