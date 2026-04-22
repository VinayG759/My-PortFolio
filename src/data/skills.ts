export interface Skill {
  name: string;
  level: number; // 0-100
  icon: string;  // emoji or letter abbreviation
  color: string;
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'AI / ML',
    icon: '🧠',
    skills: [
      { name: 'Python', level: 90, icon: '🐍', color: '#3B82F6' },
      { name: 'TensorFlow', level: 82, icon: 'TF', color: '#FF6F00' },
      { name: 'Computer Vision', level: 80, icon: 'CV', color: '#8B5CF6' },
      { name: 'Groq LLM', level: 78, icon: 'AI', color: '#00D4FF' },
      { name: 'Multi-Agent AI', level: 75, icon: 'MA', color: '#10B981' },
    ],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', level: 88, icon: 'Re', color: '#61DAFB' },
      { name: 'TypeScript', level: 85, icon: 'TS', color: '#3178C6' },
      { name: 'Tailwind CSS', level: 87, icon: 'TW', color: '#06B6D4' },
      { name: 'Three.js', level: 70, icon: '3D', color: '#00D4FF' },
      { name: 'Framer Motion', level: 75, icon: 'FM', color: '#FF0055' },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'FastAPI', level: 83, icon: 'FA', color: '#009688' },
      { name: 'Spring Boot', level: 72, icon: 'SB', color: '#6DB33F' },
      { name: 'PostgreSQL', level: 78, icon: 'PG', color: '#336791' },
      { name: 'REST APIs', level: 88, icon: 'API', color: '#F59E0B' },
    ],
  },
  {
    category: 'Tools',
    icon: '🛠️',
    skills: [
      { name: 'Git', level: 88, icon: 'Git', color: '#F05032' },
      { name: 'Vite', level: 85, icon: 'Vi', color: '#646CFF' },
      { name: 'GitHub Actions', level: 72, icon: 'GA', color: '#2088FF' },
    ],
  },
];

export const orbitSkills = [
  { name: 'Python', color: '#3B82F6', angle: 0 },
  { name: 'React', color: '#61DAFB', angle: 45 },
  { name: 'TypeScript', color: '#3178C6', angle: 90 },
  { name: 'TensorFlow', color: '#FF6F00', angle: 135 },
  { name: 'FastAPI', color: '#009688', angle: 180 },
  { name: 'Three.js', color: '#00D4FF', angle: 225 },
  { name: 'PostgreSQL', color: '#336791', angle: 270 },
  { name: 'Groq LLM', color: '#10B981', angle: 315 },
];
