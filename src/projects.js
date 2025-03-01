
import TestImage from './test-image.jpg';
import HeaderImg from './halftone-test2.png';

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
import ProjectTwo from './ProjectFive';
import ProjectFive from './ProjectFive';

const projects = [

    {
      number:"1/6",
      path:'/project-1',
      title: "Personalization in Intelligent Mobile Devices",
      year: "2024",
      id: 1,
      source: TestImage,
      tags: ["ux research", "ux design"],
      description: "Very short description about the project. Might go upto a second line, partly. Perhaps a little more.",
      headerImg: HeaderImg,
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur interdum, nisi mauris fringilla leo, vel dignissim justo libero id libero. Duis quis nisi non lorem aliquam gravida. Nulla facilisi. Suspendisse potenti.",
      brief: "This is the first project's brief. It will be longer than this but short enough to be read quickly.",
      deliverables: "Something, more stuff, final stuff, more long stuffhaha",
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
      source: TestImage,
      tags: ["information design", "graphic design", "ux research"],
      description: "Very short description about the project. Might go upto a second line, partly. Perhaps a little more.",
      headerImg: HeaderImg,
      about: "All about project 2",
      brief: "This is the second project's brief.",
      deliverables: "Something, more stuff, final stuff",
      duration: "5 months",
      slides: [Project2Slide1, Project2Slide2, Project2Slide3, Project2Slide4, Project2Slide5, Project2Slide6, Project2Slide7, Project2Slide8, Project2Slide9, Project2Slide10, Project2Slide11, Project2Slide12, Project2Slide13, Project2Slide14, Project2Slide15, Project2Slide16],
      component: ProjectOne, 
    },
    {
      number:"3/6",
      path:'/project-3',
      title: "Motion Design for Digital Wellbeing Widgets",
      year: "2023",
      id: 3,
      source: TestImage,
      tags: ["ux research", "motion design"],
      description: "Very short description about the project. Might go upto a second line, partly. Perhaps a little more.",
      headerImg: HeaderImg,
      about: "All about project 3",
      brief: "This is the third project's brief.",
      deliverables: "Something, more stuff, final stuff",
      duration: "4 months",
      slides: [Project3Slide1, Project3Slide2, Project3Slide3],
      component: ProjectOne, 
    },
    {
      number:"4/6",
      path:'/project-4',
      title: "Ashore: Board Game Design",
      year: "2022",
      id: 4,
      source: TestImage,
      tags: ["game design", "graphic design"],
      description: "Very short description about the project. Might go upto a second line, partly. Perhaps a little more.",
      headerImg: HeaderImg,
      about: "All about project 4",
      brief: "This is the fourth project's brief.",
      deliverables: "Something, more stuff, final stuff",
      duration: "3 months",
      slides: [Project4Slide1, Project4Slide2, Project4Slide3, Project4Slide4, Project4Slide45, Project4Slide5, Project4Slide6],
      component: ProjectOne, 
    },
    {
      number:"5/6",
      path:'/project-5',
      title: "Papereku: Visual Identity",
      year: "2022",
      id: 5,
      source: TestImage,
      tags: ["brand identity", "graphic design"],
      description: "Very short description about the project. Might go upto a second line, partly. Perhaps a little more.",
      headerImg: HeaderImg,
      about: "All about project 5",
      brief: "This is the fifth project's brief.",
      deliverables: "Something, more stuff, final stuff",
      duration: "2 months",
      slides: [Project5Slide1, Project5Slide2, Project5Slide3, Project5Slide4, Project5Slide5, Project5Slide6, Project5Slide7, Project5Slide8, Project5Slide9, Project5Slide10],
      component: ProjectFive, 
    },
    {
      number:"6/6",
      path:'/project-6',
      title: "Dads, Daughters and their Parks",
      year: "2021",
      id: 6,
      source: TestImage,
      tags: ["graphic design", "experimental typography"],
      description: "Very short description about the project. Might go upto a second line, partly. Perhaps a little more.",
      headerImg: HeaderImg,
      about: "All about project 6",
      brief: "This is the sixth project's brief.",
      deliverables: "Something, more stuff, final stuff",
      duration: "1 month",
      slides: [Project6Slide1, Project6Slide2, Project6Slide3],
      component: ProjectOne, 
    }
  ];

  export default projects;
  