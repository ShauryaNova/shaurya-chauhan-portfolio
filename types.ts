import { ReactNode } from 'react';

export interface NavLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  tech: string[];
  learned: string[];
  link?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  summary: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string[];
}

export interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}
