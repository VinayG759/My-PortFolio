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
    category: 'Languages',
    icon: '💻',
    skills: [
      { name: 'Python',     level: 90, icon: '🐍', color: '#3B82F6' },
      { name: 'JavaScript', level: 88, icon: 'JS', color: '#F7DF1E' },
      { name: 'TypeScript', level: 85, icon: 'TS', color: '#3178C6' },
      { name: 'Java',       level: 78, icon: '☕', color: '#ED8B00' },
      { name: 'HTML5',      level: 92, icon: 'HT', color: '#E34F26' },
      { name: 'CSS3',       level: 88, icon: 'CS', color: '#1572B6' },
      { name: 'SQL',        level: 80, icon: 'SQL', color: '#336791' },
    ],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React.js',    level: 88, icon: 'Re', color: '#61DAFB' },
      { name: 'Next.js',     level: 82, icon: 'Nx', color: '#E2E8F0' },
      { name: 'Vite',        level: 82, icon: 'Vi', color: '#646CFF' },
      { name: 'Tailwind CSS',level: 87, icon: 'TW', color: '#06B6D4' },
      { name: 'shadcn/ui',   level: 78, icon: 'SH', color: '#8B5CF6' },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js',    level: 80, icon: 'No', color: '#339933' },
      { name: 'Express.js', level: 78, icon: 'Ex', color: '#68D391' },
      { name: 'FastAPI',    level: 83, icon: 'FA', color: '#009688' },
      { name: 'Spring Boot',level: 72, icon: 'SB', color: '#6DB33F' },
      { name: 'REST APIs',  level: 88, icon: 'API', color: '#F59E0B' },
    ],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    skills: [
      { name: 'MongoDB',    level: 75, icon: 'Mo', color: '#47A248' },
      { name: 'PostgreSQL', level: 78, icon: 'PG', color: '#336791' },
      { name: 'MySQL',      level: 75, icon: 'My', color: '#4479A1' },
    ],
  },
  {
    category: 'AI / ML',
    icon: '🧠',
    skills: [
      { name: 'LLMs',               level: 82, icon: 'LM', color: '#A78BFA' },
      { name: 'RAG',                level: 80, icon: 'RAG', color: '#10B981' },
      { name: 'Groq LLM',           level: 78, icon: 'GQ', color: '#00D4FF' },
      { name: 'Multi-Agent Systems', level: 75, icon: 'MA', color: '#F59E0B' },
    ],
  },
  {
    category: 'Tools',
    icon: '🛠️',
    skills: [
      { name: 'Git',     level: 88, icon: 'Git', color: '#F05032' },
      { name: 'GitHub',  level: 88, icon: 'GH',  color: '#6E5494' },
      { name: 'Postman', level: 82, icon: 'PM',  color: '#FF6C37' },
      { name: 'Vercel',  level: 80, icon: 'Ve',  color: '#E2E8F0' },
      { name: 'Render',  level: 75, icon: 'Rn',  color: '#46E3B7' },
      { name: 'VS Code', level: 90, icon: 'VS',  color: '#007ACC' },
    ],
  },
];

export const orbitSkills = [
  { name: 'Python',     color: '#3B82F6', angle: 0   },
  { name: 'React',      color: '#61DAFB', angle: 45  },
  { name: 'TypeScript', color: '#3178C6', angle: 90  },
  { name: 'Next.js',    color: '#E2E8F0', angle: 135 },
  { name: 'FastAPI',    color: '#009688', angle: 180 },
  { name: 'PostgreSQL', color: '#336791', angle: 225 },
  { name: 'Groq LLM',   color: '#00D4FF', angle: 270 },
  { name: 'RAG',        color: '#10B981', angle: 315 },
];
