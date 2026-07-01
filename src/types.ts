export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  boardOrUniversity: string;
  degree: string;
  field?: string;
  period: string;
  status?: string;
  performance: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company?: string;
  period: string;
  description: string[];
  type?: string;
  links?: {
    youtube?: string;
    instagram?: string;
    discord?: string;
  };
  highlights?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}
