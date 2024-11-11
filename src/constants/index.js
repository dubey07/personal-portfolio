import {
  nitk,
  gdsc,
  iris,
  ecell,
  genesis,
  devfolio,
  pba,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
  messice,
  okadamotto,
  kwelection,
  mathcenter,
  softpeer
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
} from "react-icons/ai";

import {
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiCplusplus,
  SiC,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiNetlify,
  SiVite,
  SiFlutter,
  SiGooglecloud,
  SiDocker,
  SiRedis,
  SiMongodb,
  SiPostgresql,
  SiSocketdotio,
  SiFirebase
} from "react-icons/si";

import {
  FaHardHat,
  FaRust,
  FaNodeJs
} from "react-icons/fa";


import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1N9JZqKemdzhRko2sRoI5isNkVGCTRmfN/view";
export const repoLink = "https://github.com/mittal-parth/personal-portfolio";

export const callToAction = "https://www.linkedin.com/in/aaditya-dubey-4944071aa/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  // {
  //   id: "achievements",
  //   title: "Achievements",
  // },
  {
    id: "projects",
    title: "Projects",
  },
  // {
  //   id: "openSource",
  //   title: "Open Source",
  // },
  // {
  //   id: "extraCurricular",
  //   title: "Extra Curricular",
  // },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: nitk,
    title: "Acropolis Institute of Technology, Indore",
    degree: "Bachelor of Technology",
    duration: "August 2019 - May 2023",
    content1: "Major: Computer Science",
    content2: "Minor: Information Technology",
  },
  {
    id: "education-2",
    icon: pba,
    title: "Paramount Academy",
    degree: "",
    duration: "May 2018 - June 2019",
    content1: "Completed Higher Secondry Edcution",
  },
];

// Add your past achievments here for example - rankings in hackathons/events
export const achievements = [
  {
    id: "a-1",
    icon: ethglobal,
    event: "ETHIndia'22 | World's Largest Ethereum Hackathon",
    position: "Winner",
    content1: "Top 12 winners among 20k+ registrations",
    content2: "One of Polygon's Best Public Goods",
    content3: "Best Module on Biconomy SDK",
    article: "https://www.thehindu.com/news/cities/Mangalore/nitk-iiit-delhi-team-makes-it-to-top-12-winners-in-ethindia-22/article66238923.ece",
    project: "https://devfolio.co/projects/chargeswap-3527",
    youtube: "https://youtu.be/9rieTya8Yds?t=3908",
  },
  {
    id: "a-2",
    icon: polkadot,
    event: "Polkadot Hackathon: Europe Edition",
    position: "2nd Runner Up in the ink! Smart Contract Category",
    content1: "Built GreenTrust offering a novel solution for obtaining certification in organic farming.",
    content2: "",
    content3: "",
    github: "https://github.com/pranav2305/GreenTrust",
  },
  {
    id: "a-3",
    icon: lightspeed,
    event: "Warpspeed by Lightspeed",
    position: "1st Runner Up",
    content1: "1st Runner Up Overall by Lightspeed among 107 hackers",
    content2: "Top 3 projects using Replit",
    content3: "1st Runner Up by Amazon Web Services (AWS)",
    article: "https://shorturl.at/fhjsT",
  },
  {
    id: "a-4",
    icon: dennisivy,
    event: "September Hackathon by Dennis Ivy",
    position: "Winner",
    content1: "Rated the best portfolio website among 450+ participants across the globe.",
    content2: "",
    content3: "",
    youtube: "https://www.youtube.com/watch?v=X2473En3h_o&t=5278s",
    project: "https://parthmittal.netlify.app/",
  },
  {
    id: "a-5",
    icon: manipal,
    event: "Manipal Hackathon'22",
    position: "Consolation Prize",
    content1: "Top 10 among 500+ teams across India",
    content2: "Developed a cross-platform mobile application to address the problem of social cohesion.",
    content3: "",
    article: "https://shorturl.at/exEIQ",
  },
  {
    id: "a-6",
    icon: icon,
    event: "ICON Hyperbuild Hackathon",
    position: "Honorable Mention",
    content1: "Honorable Mention among 655 participants across the globe in a 3 month-long online hackathon.",
    content2: "",
    content3: "",
    project: "https://devpost.com/software/green-trust-xj2w6g",
  },
  {
    id: "a-7",
    icon: ethforall,
    event: "ETHForAll 2023",
    position: "Top 3 Superfluid Projects",
    content1: "Bounty winners among 430 projects in ETHGlobal's largest online hackathon.",
    content2: "",
    content3: "",
    project: "https://devfolio.co/projects/green-trust-ed14",
  },
];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-3",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-7",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-8",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-9",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-10",
        icon: SiJavascript,
        name: "JavaScript",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-4",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-6",
        icon: FaNodeJs,
        name: "Express.js"
      },
      {
        id: "f-7",
        icon: SiSocketdotio,
        name: "Socket.io"
      },
      {
        id: "f-8",
        icon: FaNodeJs,
        name: "Node.js"
      }
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiGooglecloud,
        name: "Google Cloud",
      },
      {
        id: "t-2",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-4",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-7",
        icon: SiDocker,
        name: "Docker",
      },
      {
        id: "t-8",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-9",
        icon: SiVite,
        name: "ViteJS",
      },
      {
        id: "t-10",
        icon: SiRedis,
        name: "Redis"
      },
      {
        id: "t-11",
        icon: SiMongodb,
        name: "MongoDB"
      },
      {
        id: "t-12",
        icon: SiPostgresql,
        name: "Postgres"
      }
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "SoftPeer, India",
    logo: softpeer,
    link: "https://softpeerstechnologies.com/",
    positions: [
      {
        title: "Jr. Software Developer",
        duration: "March 2023 - Present",
        content: [
          {
            text: "As a Junior Software Engineer, I contributed to the development of full-stack web applications using the MERN stack, working on both front-end and back-end tasks to build and maintain features, improve performance, and ensure code quality ",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Cuneiform",
    logo: "https://www.thecuneiform.com/wp-content/uploads/2023/05/logo-1.svg",
    link: "https://averlon.ai/",
    positions: [
      {
        title: "Software Developer Intern",
        duration: "",
        content: [
          {
            text: "As a Software Developer Intern, I worked with the MERN stack to develop full-stack web applications, focusing on both front-end and back-end development.",
            link: ""
          }
        ],
      },
    ],
  },
  // {
  //   organisation: "IRIS, NITK",
  //   logo: iris,
  //   link: "https://iris.nitk.ac.in/about_us",
  //   positions: [
  //     {
  //       title: "Tech Lead",
  //       duration: "Apr 2023 - Apr 2024",
  //       content: [
  //         {
  //           text: "Led a team of 40+ students in digitizing administrative, academic and alumni-related work.",
  //           link: "",
  //         },
  //         {
  //           text: "Managed all phases of Software Development Life Cycle (SDLC) for 15+ modules.",
  //           link: "",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Web Lead",
  //       duration: "Apr 2022 - Present",
  //       content: [
  //         {
  //           text: "Managed a team of 6 student developers while also overlooking multiple modules.",
  //           link: "",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Web Developer",
  //       duration: "Nov 2021 - Apr 2022",
  //       content: [
  //         {
  //           text: "Added Conditional Fields support to the Forms Module.",
  //           link: "",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Web Developer Intern",
  //       duration: "Jun 2021 - Oct 2021",
  //       content: [
  //         {
  //           text: "Developed a multi-role approval flow system to facilitate data collection and display on the Institute's Department Websites.",
  //           link: "",
  //         },
  //       ],
  //     },
  //   ],
  // }
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "Mess-Ice",
    github: "",
    link: "https://mess-ice.com/",
    image: messice,
    content:
      "Mess Ice is an application designed to mange football teams and clubs, providing Feature for live match tracking, player records and team releated activites",
    stack: [
      {
        id: "icon-1",
        icon: SiFlutter,
        name: "Flutter"
      },
      {
        id: "icon-2",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-3",
        icon: FaNodeJs,
        name: "Express"
      },
      {
        id: "icon-4",
        icon: SiSocketdotio,
        name: "Sokcet.io"
      },
      {
        id: "icon-5",
        icon: SiMysql,
        name: "Sql"
      },
      {
        id: "icon-6",
        icon: SiGooglecloud,
        name: "Google Cloud Platform"
      },
    ],
  },
  {
    id: "project-2",
    title: "Okadmotto",
    github: "",
    link: "https://www.okadamotto.com/",
    image: okadamotto,
    content: "Okdamotto is Ride booking application developed for Ghana, similar to popular service like rapido",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React Native"
      },
      {
        id: "icon-3",
        icon: FaNodeJs,
        name: "Express"
      },
      {
        id: "icon-4",
        icon: SiSocketdotio,
        name: "Sokcet.io"
      },
      {
        id: "icon-5",
        icon: SiMysql,
        name: "Sql"
      },
      {
        id: "icon-6",
        icon: SiGooglecloud,
        name: "Google Cloud Platform"
      },
     
    ],
  },
  {
    id: "project-3",
    title: "Kw-Elections",
    github: "",
    link: "https://kwelections.web.app/login",
    image: kwelection,
    content:
      "Kw-Election is and Web App Developer for Kuwait Elections to get the information about election status",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiGooglecloud,
        name: "Google Cloud Functions"
      },
      {
        id: "icon-3",
        icon: SiMongodb,
        name: "MongoDb"
      },
      {
        id: "icon-4",
        icon: SiFirebase,
        name: "Firebase"
      }
    ],
  },
  {
    id: "project-4",
    title: "Math Center",
    github: "",
    link: "https://mathcenter-32154.web.app/dashboard",
    image: mathcenter,
    content: "Math-center is Web app Designed for the Admin of Yasa. to MAnage the Yasa",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiGooglecloud,
        name: "Google Cloud Functions"
      },
      {
        id: "icon-3",
        icon: SiPostgresql,
        name: "Postgres"
      },
      {
        id: "icon-4",
        icon: SiFirebase,
        name: "Firebase"
      }
    ],
  },
  // {
  //   id: "project-5",
  //   title: "Non-Teaching Recruitment Portal, NITK",
  //   github: "",
  //   link: "http://recruitment.nitk.ac.in/",
  //   image: recruitment,
  //   content:
  //     "The official recruitment portal for non-teaching staff with an admin panel, email notifications and payment integration.",
  //   stack: [
  //     {
  //       id: "icon-1",
  //       icon: SiRubyonrails,
  //       name: "Ruby on Rails"
  //     },
  //     {
  //       id: "icon-2",
  //       icon: SiTailwindcss,
  //       name: "TailwindCSS"
  //     },
  //     {
  //       id: "icon-3",
  //       icon: SiJquery,
  //       name: "jQuery"
  //     },
  //   ],
  // },
  // {
  //   id: "project-6",
  //   title: "Career Development Centre, NITK Website",
  //   github: "",
  //   link: "http://cdc.nitk.ac.in/",
  //   image: cdc,
  //   content:
  //     "The official website of CDC, NITK with a custom built CMS.",
  //   stack: [
  //     {
  //       id: "icon-1",
  //       icon: SiRubyonrails,
  //       name: "Ruby on Rails"
  //     },
  //     {
  //       id: "icon-2",
  //       icon: SiBootstrap,
  //       name: "Bootstrap"
  //     },
  //     {
  //       id: "icon-3",
  //       icon: SiJavascript,
  //       name: "JavaScript"
  //     },
  //   ],
  // },
  // {
  //   id: "project-7",
  //   title: "Huntly",
  //   github: "",
  //   link: "https://devfolio.co/projects/huntly-b5a9",
  //   image: huntly,
  //   content:
  //     "A cross-platform mobile application that brings people closer to the physical environment and forms meaningful connections by organising real-world Treasure Hunts for free and winning rewards. The app uses machine learning to match users and form teams of like-minded people.",
  //   stack: [
  //     {
  //       id: "icon-1",
  //       icon: SiDjango,
  //       name: "Django Rest Framework"
  //     },
  //     {
  //       id: "icon-2",
  //       icon: SiFlutter,
  //       name: "Flutter"
  //     },
  //     {
  //       id: "icon-3",
  //       icon: SiReplit,
  //       name: "Replit"
  //     },
  //     {
  //       id: "icon-4",
  //       icon: SiFlask,
  //       name: "Flask"
  //     },
  //     {
  //       id: "icon-5",
  //       icon: SiFigma,
  //       name: "Figma"
  //     },
  //     {
  //       id: "icon-6",
  //       icon: SiGooglemaps,
  //       name: "Google Maps API"
  //     },
  //   ],
  // },
  // {
  //   id: "project-8",
  //   title: "Cluboard",
  //   github: "https://github.com/mittal-parth/Cluboard",
  //   link: "",
  //   image: cluboard,
  //   content:
  //     "A full-stack web application to facilitate sharing resources in college clubs with email notifications, requests and ticketing system, and analytical dashboards.",
  //   stack: [
  //     {
  //       id: "icon-1",
  //       icon: SiDjango,
  //       name: "Django"
  //     },
  //     {
  //       id: "icon-2",
  //       icon: AiFillHtml5,
  //       name: "HTML"
  //     },
  //     {
  //       id: "icon-3",
  //       icon: DiCss3,
  //       name: "CSS"
  //     },
  //     {
  //       id: "icon-4",
  //       icon: SiJavascript,
  //       name: "JavaScript"
  //     },
  //     {
  //       id: "icon-5",
  //       icon: SiBootstrap,
  //       name: "Bootstrap"
  //     },
  //     {
  //       id: "icon-6",
  //       icon: SiChartdotjs,
  //       name: "Chart.js"
  //     },
  //   ],
  // },
  // {
  //   id: "project-9",
  //   title: "Cash Flow Minimiser",
  //   github: "https://github.com/mittal-parth/Cash-Flow-Minmiser",
  //   link: "https://minimise-cash-flow.netlify.app/",
  //   image: cash_flow,
  //   content:
  //     "A React application to help users visualise and minimise cash flow among multiple transactions.",
  //   stack: [
  //     {
  //       id: "icon-1",
  //       icon: SiReact,
  //       name: "React"
  //     },
  //     {
  //       id: "icon-2",
  //       icon: AiFillHtml5,
  //       name: "HTML"
  //     },
  //     {
  //       id: "icon-3",
  //       icon: DiCss3,
  //       name: "CSS"
  //     }
  //   ],
  // },
  // {
  //   id: "project-10",
  //   title: "Portfolio",
  //   github: "https://github.com/mittal-parth/personal-portfolio",
  //   link: "https://parthmittal.netlify.app/",
  //   image: portfolio,
  //   content: "Personal portfolio website with React and Tailwind CSS.",
  //   stack: [
  //     {
  //       id: "icon-1",
  //       icon: SiReact,
  //       name: "React"
  //     },
  //     {
  //       id: "icon-2",
  //       icon: SiTailwindcss,
  //       name: "Tailwind CSS"
  //     },
  //     {
  //       id: "icon-3",
  //       icon: AiFillHtml5,
  //       name: "HTML"
  //     },
  //   ],
  // },
];

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

// List out the extra curricular activities you have induldged in like - student clubs, joining research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: "Devfolio",
    title: "UniDAO Lead",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Selected among 5 students across the country to lead the initiative and grow the culture of Blockchain and Ethereum, powered by Devfolio.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7097977924686942209/",
      },
      {
        text: "Led a cohort of 37 selected students over 6 weeks to learn and build in the Ethereum ecosystem.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7095310520282480641/",
      },
    ],
    logo: devfolio,
  },
  {
    id: 2,
    organisation: "Google Developer Student Club, NITK",
    title: "Co-Chair",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Started HackClub to promote and spread the culture of Hackathons in the college. 20+ hackathons particiaptions, 15+ wins over the year.",
        link: "",
      },
      {
        text: "Co-designed and developed the official website of Incident, NITK with 15K+ visitors",
        link: "https://incident.nitk.ac.in/",
      },
    ],
    logo: gdsc,
  },
  {
    id: 3,
    organisation: "Genesis, NITK",
    title: "Competitions Head",
    duration: "Sep 2021 - Present",
    content: [
      {
        text: "Qualified for the nationals of Indian Hip Hop Dance Championship",
        link: "",
      },
      {
        text: "Won 7 inter-college solo dance competitions",
        link: "",
      },
    ],
    logo: genesis,
  },
  {
    id: 4,
    organisation: "IRIS, NITK",
    title: "Tutor",
    duration: "Jan 2022 - Jan 2022",
    content: [
      {
        text: "Mentored 150+ students in a month-long Web Development and Ruby on Rails Bootcamp",
        link: "https://github.com/IRIS-NITK/IRIS-RoR-Bootcamp-2021",
      },
    ],
    logo: iris,
  },
  {
    id: 5,
    organisation: "E-Cell, NITK",
    title: "Executive Member",
    duration: "Sep 2021 - Apr 2022",
    content: [
      {
        text: "Organised the season 3 of the E-Cell NITK Podcast",
        link: "https://www.youtube.com/watch?v=uA-Yrk6bVDc",
      },
      {
        text: "Member of the Sponsorship and E-Talks team for E-Summit'22",
        link: "",
      },
    ],
    logo: ecell,
  },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/aaditya-dubey-4944071aa/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/dubey07",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:adi.dubey01@gmail.com",
  },
  // {
  //   id: "social-media-4",
  //   icon: AiOutlineTwitter,
  //   link: "https://www.twitter.com/mittalparth_",
  // },
  // {
  //   id: "social-media-5",
  //   icon: AiFillInstagram,
  //   link: "https://www.instagram.com/mittalparth_",
  // },
];

// Your professional summary
export const aboutMe = {
    name: "Aditya Dubey",
    githubUsername: 'dubey07',
    tagLine: "Software Developer",
    intro: "Software Developer from India who is either busy improving his craft or pondering over the next big idea."
}

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format. 
export const includedRepos = ['publiclab/plots2', 'zulip/zulip', 'paritytech/polkadot-sdk'];