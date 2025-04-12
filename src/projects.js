
import TestImage from './test-image.jpg';
import HeaderImg from './halftone-test2.png';

import Project2Header from './assets/Header-imgs/outandabout-header.jpg'
import PersonalizationHeader from './assets/Header-imgs/personalization-header.jpg'
import PrismHeader from './assets/Header-imgs/prism-header.webp'
import AshoreHeader from './assets/Header-imgs/ashore-header.jpg'
import ParksyHeader from './assets/Header-imgs/parksy-header.png'

import Project1Slide1 from './slides-test-img.png';
import Project1Slide2 from './slides-test-img2.jpg';
import Project1Slide3 from './slides-test-img3.png';


import Project2Slide1 from './assets/out&about-process-1.png';
import Project2Slide2 from './assets/out&about-process-2.png';
import Project2Slide3 from './assets/out&about-process-3.png';
import Project2Slide4 from './assets/out&about-process-4.png';
import Project2Slide5 from './assets/out&about-process-5.png';
import Project2Slide6 from './assets/out&about-process-6.png';
import Project2Slide7 from './assets/out&about-process-7.png';
import Project2Slide8 from './assets/out&about-process-8.png';
import Project2Slide9 from './assets/out&about-process-9.png';
import Project2Slide10 from './assets/out&about-process-10.png';
import Project2Slide11 from './assets/out&about-process-11.png';
import Project2Slide12 from './assets/out&about-process-12.png';
import Project2Slide13 from './assets/out&about-process-13.png';
import Project2Slide14 from './assets/out&about-process-14.gif';
import Project2Slide15 from './assets/out&about-process-15.png';
import Project2Slide16 from './assets/out&about-process-16.png';

import Project3Slide1 from './slides-test-img.png';
import Project3Slide2 from './slides-test-img.png';
import Project3Slide3 from './slides-test-img.png';

import Project4Slide1 from './assets/ashore-process-1.png';
import Project4Slide2 from './assets/ashore-process-2.png';
import Project4Slide3 from './assets/ashore-process-3.png';
import Project4Slide4 from './assets/ashore-process-4.png';
import Project4Slide45 from './assets/ashore-process-4.5.png';
import Project4Slide5 from './assets/ashore-process-5.png';
import Project4Slide6 from './assets/ashore-process-6.png';


import Project5Slide1 from './assets/papereku-process-1.webp';
import Project5Slide2 from './assets/papereku-process-2.webp';
import Project5Slide3 from './assets/papereku-process-3.webp';
import Project5Slide4 from './assets/papereku-process-4.webp';
import Project5Slide5 from './assets/papereku-process-5.webp';
import Project5Slide6 from './assets/papereku-process-6.webp';
import Project5Slide7 from './assets/papereku-process-7.webp';
import Project5Slide8 from './assets/papereku-process-8.webp';
import Project5Slide9 from './assets/papereku-process-9.webp';
import Project5Slide10 from './assets/papereku-process-10.webp';

import Project6Slide1 from './slides-test-img.png';
import Project6Slide2 from './slides-test-img.png';
import Project6Slide3 from './slides-test-img.png';

import ProjectOne from './ProjectOne';
import ProjectTwo from './ProjectTwo';
import ProjectThree from './ProjectThree-prism';
import ProjectFour from './ProjectFour';
import ProjectFive from './ProjectFive';
import ProjectSix from './ProjectSix';


import Project1Thumbnail from './assets/Thumbnails/personalization-thumbnail.webp';
import Project2Thumbnail from './assets/Thumbnails/outandabout-thumbnail.webp';
import Project3Thumbnail from './assets/Thumbnails/prism-thumbnail.webp';
import Project4Thumbnail from './assets/Thumbnails/ashore-thumbnail.webp';
import Project5Thumbnail from './assets/Thumbnails/papereku-thumbnail.webp';
import Project6Thumbnail from './assets/Thumbnails/parksy-thumbnail.webp';

const projects = [

    {
      number:"1/6",
      path:'/project-1',
      title: "Personalization in Intelligent Mobile Devices",
      year: "2024",
      id: 1,
      source: Project1Thumbnail,
      tags: ["ux research", "ux design"],
      description: "My graduation project done as a part of a 6 month internship at Samsung Research Institute that explores personalization with a backdrop of Galaxy AI.",
      headerImg: PersonalizationHeader,
      about: "This project was done as a part of my 6 month internship as SRI-B.",
      brief: "Gather and leverage insights from user adoption and response to personalized experiences (physical and digital) to develop design principles and concepts for effective personalization in intelligent mobile devices to enhance everyday experiences of Millennials and Gen Z.",
      deliverables: "Design guidelines, Prototypes",
      duration: "6 months",
      slides: [Project1Slide1, Project1Slide2, Project1Slide3],
      component: ProjectOne, 
    },
    {
      number:"2/6",
      path:'/project-2',
      title: "Out & About: Commute Guide",
      year: "2023",
      id: 2,
      source: Project2Thumbnail,
      tags: ["information design", "graphic design", "ux research"],
      description: "A guide to help new joinees commute in and around NID Andhra Pradesh's transit campus, as a part of a welcome kit.",
      headerImg: Project2Header,
      about: "The aim of this classroom assignment was to understand and experience the UX process. Commuting in and around a transit campus in a semi-remote location can initially be challenging for new joinees, students as well as staff and visiting faculty. A guide serves as a support mechanism to help users feel welcome and confident in their first few commutes in the area.",
      brief: "As a part of a welcome kit to be provided to new joinees, design a guide to aid in transportation in and around the NID AP's transit campus.",
      deliverables: "Undefined",
      duration: "2 weeks",
      slides: [Project2Slide1, Project2Slide2, Project2Slide3, Project2Slide4, Project2Slide5, Project2Slide6, Project2Slide7, Project2Slide8, Project2Slide9, Project2Slide10, Project2Slide11, Project2Slide12, Project2Slide13, Project2Slide14, Project2Slide15, Project2Slide16],
      component: ProjectTwo, 
    },
    {
      number:"3/6",
      path:'/project-3',
      title: "Motion Design for Widgets",
      year: "2023",
      id: 3,
      source: Project3Thumbnail,
      tags: ["ux research", "motion design"],
      description: "Motion design to enhance everyday smartphone interactions, done as a part of the PRISM programme with SRI-B",
      headerImg: PrismHeader,
      about: "A fun exploration of putting animation at work, backed by in-depth, revelatory UX research.",
      brief: "Elevate everyday phone interactions that cause frustration into positive experiences.",
      deliverables: "VOCs, Research Insights, Motion Graphics, Protoypes",
      duration: "2.5 months",
      slides: [Project3Slide1, Project3Slide2, Project3Slide3],
      component: ProjectThree, 
    },
    {
      number:"4/6",
      path:'/project-4',
      title: "Ashore: Board Game Design",
      year: "2022",
      id: 4,
      source: Project4Thumbnail,
      tags: ["game design", "graphic design"],
      description: "A board game where players play against an antagonist and time to save an island and its people from submerging as sea levels rise.",
      headerImg: AshoreHeader,
      about: "All about project 4",
      brief: "To design an educational board game for children that's engaging, playable and relevant to their curriculum.",
      deliverables: "Something, more stuff, final stuff",
      duration: "1.5 week",
      slides: [Project4Slide1, Project4Slide2, Project4Slide3, Project4Slide4, Project4Slide45, Project4Slide5, Project4Slide6],
      component: ProjectFour, 
    },
    {
      number:"5/6",
      path:'/project-5',
      title: "Papereku: Visual Identity",
      year: "2022",
      id: 5,
      source: Project5Thumbnail,
      tags: ["brand identity", "graphic design"],
      description: "A visual identity designed for Andhra's beloved sweet and cottage industry Poothareku.",
      headerImg: HeaderImg,
      about: "Said to have originated a few centuries ago in the village of Atreyapuram, Poothareku is deeply rooted in Andhra Pradesh's rich food culture. Its distinctive method of preparation has made it a cottage industry involving over 400 families. Papereku aims to give Poothareku a visual identity of its own as a symbol of cultinary crafstmanship, elegance and celebration.",
      brief: "To create a brand identity for a product that's distinctive to the state of Andhra Pradesh.",
      deliverables: "Something, more stuff, final stuff",
      duration: "1 month",
      slides: [Project5Slide1, Project5Slide2, Project5Slide3, Project5Slide4, Project5Slide5, Project5Slide6, Project5Slide7, Project5Slide8, Project5Slide9, Project5Slide10],
      component: ProjectFive, 
    },
    {
      number:"6/6",
      path:'/project-6',
      title: "Dads, Daughters and their Parks",
      year: "2021",
      id: 6,
      source: Project6Thumbnail,
      tags: ["graphic design", "experimental typography"],
      description: "A short book written and illustrated in the glyphs of Varta, a typographic exploration.",
      headerImg: ParksyHeader,
      about: "Done as a conclusion to a Typography course, this project intends to be a practice in typesetting and publication design. Through experiemental type and the use of digital and physical media, it explores a father-daughter relationship through evening walks in a city's parks over the years. It explores the importance of having such spaces for one to feel closer to the natural world amid urban frenzy.",
      brief: "To design and typeset a small book, applying principles of publication design, including grid systems, hierarchy, and readability. The project aimed to develop an understanding of typography in long-form content.",
      deliverables: "Printed, hand-bound book",
      duration: "1 week",
      slides: [Project6Slide1, Project6Slide2, Project6Slide3],
      component: ProjectSix, 
    }
  ];

  export default projects;
  