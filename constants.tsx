import React from 'react';
import { NavLink, Project, Experience, SkillGroup, Education } from './types';
import { Github, Instagram, Mail } from 'lucide-react';

export const NAV_LINKS: NavLink[] = [
  { label: 'Story', href: '#about' },
  { label: 'Toolkit', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Foundation', href: '#education' },
  { label: 'Connect', href: '#contact' },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Core & Languages',
    skills: ['Python', 'Java', 'JavaScript', 'SQL'],
  },
  {
    category: 'Data Science',
    skills: ['Pandas & NumPy', 'Data Visualization', 'Statistical Analysis', 'EDA', 'ML Foundations'],
  },
  {
    category: 'Building & Tools',
    skills: ['Android Studio', 'Next.js', 'Tailwind CSS', 'Git & GitHub', 'Google AI Studio'],
  },
  {
    category: 'Product Thinking',
    skills: ['Prompt Engineering', 'User-Centric Design', 'Rapid Prototyping', 'Vibe Coding'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'yt-link-player',
    title: 'YouTube Link Player',
    tagline: 'A deliberate antidote to algorithmic distraction.',
    description: 'Algorithms are designed to keep you clicking; I wanted a tool that lets you watch videos without being distracted. This Android app strips away the feed, allowing users to play specific URLs and maintain a local, searchable history.',
    features: [
      'Instant paste-and-play without the feed',
      'Local, private watch history',
      'Minimalist, distraction-free UI',
      'Lightweight architecture'
    ],
    tech: ['Android (Dart)', 'YouTube Player API', 'Room Database', 'Material Design'],
    learned: [
      'Integrating third-party media APIs into native views',
      'Designing local persistence for seamless user states',
      'The value of subtraction in UI/UX design'
    ]
  },
  {
    id: 'goals-tracker',
    title: 'Personal Goals & Achievement Tracker',
    tagline: 'An interactive dashboard for holistic reflection.',
    description: 'Tracking numbers is easy; tracking growth is hard. I built this AI Studio app to combine hard metrics (finance, goals) with soft data (mood, reflections). By structuring the inputs, I leverage LLMs to generate insights that actually feel personal. By helping users to track and reflect daily, the app fosters a growth mindset over time.',
    features: [
      'Holistic tracking: Finance, Goals, Mood',
      'Timestamped journals for reflective practice',
      'Structured prompt engineering for AI insights',
      'Visual progress indicators'
    ],
    tech: ['Google AI Studio', 'Prompt Engineering', 'React', 'Tailwind CSS'],
    learned: [
      'Modeling abstract concepts like "growth" in data',
      'Engineering prompts for consistent, structured outputs',
      'Building for retention through daily reflection loops'
    ],
    link: 'https://ai.studio/apps/drive/1wuhMKNNj7kTZ4En8PMhU_ytRaow38jzh'
  }
];

export const EXPERIENCE: Experience = {
  company: 'ONBV AI',
  role: 'Student Contributor',
  period: '2025 – Present',
  description: [
    'Real startup exposure',
    'Fast cycle building → feedback → improvement',
    'AI-driven productivity concepts',
    'A place where ideas turn into prototypes'
  ],
  summary: 'At ONBV AI, I’m not just writing code — I’m learning how products are shaped. It’s brainstorming features, testing quick prototypes, scrapping them, rebuilding them cleaner, and thinking like a user instead of a developer. This is where I’m building my startup muscle.'
};

export const EDUCATION: Education = {
  institution: 'IIT Madras',
  degree: 'BS in Data Science & Applications',
  period: '2025 – Present (Pursuing)',
  details: [
    'Rigorous foundations in Computational Thinking & Python',
    'Statistical methods and data handling',
    'Application Development (Web & Android)',
    'Upcoming focus: Machine Learning & Big Data'
  ]
};

export const CONTACT_LINKS = [
  { label: 'GitHub', href: 'https://github.com/ShauryaNova', Icon: Github },
  { label: 'Instagram', href: 'https://www.instagram.com/shauryac__/', Icon: Instagram },
  { label: 'Gmail', href: 'mailto:shauryachauhan863@gmail.com', Icon: Mail },
];