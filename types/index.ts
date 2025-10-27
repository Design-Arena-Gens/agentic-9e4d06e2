export type NavItem = {
  id: string;
  label: string;
};

export type Skill = {
  name: string;
  level: number;
  description: string;
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

export type TimelineEntry = {
  year: string;
  role: string;
  organisation: string;
  summary: string;
  achievements: string[];
};

export type Project = {
  title: string;
  description: string;
  deliverables: string[];
  results: string[];
  tech: string[];
  url: string;
};
