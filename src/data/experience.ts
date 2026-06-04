import type { ExperienceItem } from '@/lib/types';

export const experience: ExperienceItem[] = [
  {
    id: 'averent',
    company: 'Averent',
    role: 'Software Engineer',
    period: '2023 – Present',
    description: [
      'Build and maintain full-stack web applications in production environments.',
      'Work across the stack — React/TypeScript frontends, Node.js APIs, and cloud infrastructure.',
      'Collaborate with design and product to ship features on tight timelines with a focus on code quality.',
    ],
    skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
    type: 'work',
  },
  {
    id: 'pace-ms',
    company: 'Pace University',
    role: 'M.S. Computer Science',
    period: '2022 – 2024',
    description: [
      'Graduate study covering machine learning, distributed systems, algorithms, and software engineering.',
      'Capstone: KneeVision — an AI system for automated knee MRI pathology detection.',
    ],
    skills: ['Machine Learning', 'Distributed Systems', 'Python', 'Research'],
    type: 'education',
  },
  {
    id: 'nyu-bridge',
    company: 'NYU Tandon Bridge Program',
    role: 'Bridge Program Graduate',
    period: '2021 – 2022',
    description: [
      'Intensive CS fundamentals program designed to bridge professionals into graduate-level study.',
      'Covered data structures, algorithms, operating systems, and discrete mathematics.',
    ],
    skills: ['C++', 'Data Structures', 'Algorithms', 'Operating Systems'],
    type: 'education',
  },
];
