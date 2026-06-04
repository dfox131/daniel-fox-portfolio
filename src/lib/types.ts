export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  highlights?: string[];
  techStack: string[];
  links: {
    github?: string;
    live?: string;
  };
  imageUrl?: string;
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
  type: 'work' | 'education';
}
