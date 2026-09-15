export interface Metric {
  label: string;
  value: string;
  subtext: string;
}

export interface Project {
  id: string;
  caseStudyNum: string;
  domain: string;
  title: string;
  description: string;
  fullBreakdown?: string;
  architectureHighlights?: string[];
  metrics: Metric[];
  tags: string[];
  image: string;
  actionText: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  id: string;
  period: string;
  company: string;
  role: string;
  locationType: string;
  description: string;
  achievements: string[];
  tags: string[];
}

export interface ArchitectureLog {
  id: string;
  version: string;
  quote: string;
  explanation: string;
  author: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: {
    name: string;
    description: string;
  }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  scope: string;
  budget: string;
  message: string;
}
