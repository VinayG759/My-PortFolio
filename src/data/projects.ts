export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  status: 'completed' | 'in-progress';
  gradient: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'NexusFlow',
    subtitle: 'Multi-Agent AI Workspace',
    description:
      '6-agent AI system that autonomously builds full-stack applications from a single problem statement — planning, coding, testing, and deploying end-to-end.',
    tags: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Groq LLM', 'Tavily'],
    github: 'https://github.com/VinayG759',
    status: 'completed',
    gradient: 'from-[#00D4FF]/20 via-[#0D7377]/10 to-transparent',
  },
  {
    id: 2,
    title: 'CV Risk Detection',
    subtitle: 'Smart Supply Chain QA',
    description:
      'Computer vision defect detection pipeline achieving 86.96% accuracy using MobileNetV2. Built for an international research internship to automate quality assurance at scale.',
    tags: ['Python', 'TensorFlow', 'MobileNetV2', 'FastAPI', 'React'],
    github: 'https://github.com/VinayG759',
    status: 'completed',
    gradient: 'from-[#7C3AED]/20 via-[#0D7377]/10 to-transparent',
  },
  {
    id: 3,
    title: 'Terra Sentinel',
    subtitle: 'Environmental Monitoring Dashboard',
    description:
      'Real-time environmental monitoring dashboard with live data visualization, alert thresholds, and geospatial overlays for tracking ecological changes.',
    tags: ['React', 'TypeScript', 'Vite', 'shadcn/ui', 'Vercel'],
    github: 'https://github.com/VinayG759',
    live: 'https://terra-sentinel.vercel.app',
    status: 'in-progress',
    gradient: 'from-[#10B981]/20 via-[#0D7377]/10 to-transparent',
  },
  {
    id: 4,
    title: 'Chain Sentinel AI',
    subtitle: 'Logistics Disruption Predictor',
    description:
      'AI-powered logistics disruption prediction platform that surfaces supply chain risks before they escalate, using time-series ML models on live logistics data.',
    tags: ['React', 'TypeScript', 'Python', 'FastAPI', 'ML'],
    github: 'https://github.com/VinayG759',
    status: 'in-progress',
    gradient: 'from-[#F59E0B]/20 via-[#0D7377]/10 to-transparent',
  },
  {
    id: 5,
    title: 'Cryptoverse',
    subtitle: 'Real-Time Crypto Tracker',
    description:
      'Fully responsive real-time cryptocurrency tracker with live price feeds, market charts, detailed coin stats, and news aggregation via REST APIs.',
    tags: ['React', 'JavaScript', 'REST APIs', 'Chart.js'],
    github: 'https://github.com/VinayG759',
    status: 'completed',
    gradient: 'from-[#F97316]/20 via-[#0D7377]/10 to-transparent',
  },
  {
    id: 6,
    title: 'Bipedal Walking Robot',
    subtitle: 'Embedded Robotics Project',
    description:
      'Bipedal robot designed to navigate human-centric environments using servo control, dynamic balance algorithms, and embedded sensor fusion.',
    tags: ['C++', 'Embedded Systems', 'Robotics', 'Servo Control'],
    github: 'https://github.com/VinayG759',
    status: 'completed',
    gradient: 'from-[#EC4899]/20 via-[#0D7377]/10 to-transparent',
  },
];
