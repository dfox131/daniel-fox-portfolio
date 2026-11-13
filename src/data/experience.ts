import type { ExperienceItem } from '@/lib/types';

export const experience: ExperienceItem[] = [
  {
    id: 'averent',
    company: 'Averent',
    role: 'Full Stack Developer (Founding Member)',
    period: 'May 2025 – February 2026',
    description: [
      'Developed React and TypeScript user interfaces and reusable components, using AI-assisted tools such as GitHub Copilot and ChatGPT.',
      'Worked on product-page building functionality, including customizable layouts and a subpage builder.',
      'Integrated frontend features with Node.js APIs and PostgreSQL-backed services.',
      'Contributed to multilingual functionality supporting more than 10 languages.',
    ],
    skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    type: 'work',
  },
  {
    id: 'pace-ms',
    company: 'Pace University',
    role: 'M.S. Computer Science',
    period: 'May 2026',
    description: [
      'Graduate study covering machine learning, distributed systems, algorithms, and software engineering.',
      'GPA: 3.9',
      'Capstone: KneeVision — a full-stack application integrating machine learning to assess knee osteoarthritis severity using X-ray images and Kellgren–Lawrence grading.',
    ],
    skills: ['Machine Learning', 'Distributed Systems', 'Python', 'Research'],
    type: 'education',
  },
  {
    id: 'nyu-bridge',
    company: 'NYU Tandon School of Engineering',
    role: 'NYU Tandon Bridge Program — Certificate of Completion',
    period: 'July 2024',
    description: [
      'Intensive program providing foundational computer science preparation for graduate-level study.',
      'Covered data structures, algorithms, operating systems, and discrete mathematics.',
    ],
    skills: ['C++', 'Data Structures', 'Algorithms', 'Operating Systems'],
    type: 'education',
  },
];
