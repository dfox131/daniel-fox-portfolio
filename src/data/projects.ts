import type { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    slug: 'kneevision',
    title: 'KneeVision',
    description:
      'AI-assisted platform for analyzing knee X-ray images and helping assess osteoarthritis severity using machine learning.',
    longDescription:
      'Built a full-stack web application enabling users to upload and analyze knee X-ray images to support clinician efficiency, improve adherence to standardized diagnostic criteria, and reduce health care costs.',
    highlights: [
      'Developed REST APIs using Node.js and Express with JWT authentication',
      'Integrated a containerized machine learning service using Docker',
      'Generated predictions and Grad-CAM visualizations from uploaded images',
      'Achieved approximately 93% validation/test accuracy during model evaluation',
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Docker'],
    links: {},
    featured: true,
  },
  {
    slug: 'job-application-tracker',
    title: 'AI-Powered Job Application Tracker',
    description:
      'Full-stack application for managing job applications with AI-assisted job description analysis and automated job data extraction.',
    longDescription:
      'Built a job tracking platform with authentication, application management, and AI-assisted tools to improve the job search workflow.',
    highlights: [
      'Implemented JWT authentication and full CRUD functionality',
      'Built an AI resume match analyzer using the OpenAI API',
      'Added job description extraction using Axios and Cheerio',
      'Deployed frontend to Vercel and backend to Render',
    ],
    techStack: ['React (Vite)', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'OpenAI API'],
    links: {},
    featured: true,
  },
  {
    slug: 'macro-tracker',
    title: 'Macro Tracker Mobile App',
    description:
      'Mobile nutrition tracking application built with AI-assisted development workflows.',
    longDescription:
      'Built a mobile application focused on tracking nutrition goals and improving user experience through responsive mobile design and external nutrition data integration.',
    highlights: [
      'Built with React Native and Expo for cross-platform support',
      'Used Cursor to accelerate architecture and implementation',
      'Integrated USDA FoodData Central APIs for nutrition data',
      'Designed responsive navigation using Expo Router',
    ],
    techStack: ['React Native (Expo)', 'TypeScript', 'Expo Router', 'USDA FoodData Central API'],
    links: {},
    featured: true,
  },
];
