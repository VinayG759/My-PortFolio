import sentinelops from '../assets/work/sentinelops.jpg';
import omniflow from '../assets/work/omniflow.jpg';
import sangam from '../assets/work/sangam.jpg';

export interface Link {
  label: string;
  href: string;
}

export interface CaseStudy {
  slug: string;
  name: string;
  year: string;
  badge: string;
  headline: string;
  problem: string;
  built: string;
  hardPart: string;
  facts: string[];
  stack: string[];
  links: Link[];
  note?: string;
  image?: { src: string; alt: string };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'omniconnect',
    name: 'OmniConnect AI',
    year: 'May 2026 —',
    badge: 'Live product · built solo · began at SummerShip',
    headline: 'One inbox for every channel a customer might write in on, with the AI answering first.',
    problem:
      'Small businesses get questions on WhatsApp, Instagram, Messenger, email, phone and their website. Replies are slow, leads slip through, and no one sees the whole picture.',
    built:
      'OmniConnect puts six channels in one inbox, with human takeover, notes, tasks and saved replies, plus a leads pipeline, bookings synced to Google Sheets, a form builder, automation rules and analytics. The AI answers only from the business’s own documents and sends the customer to a person instead of inventing a claim. It also answers phone calls in English and everyday Hindi, books demos from real free slots and saves the caller as a contact.',
    hardPart:
      'Keeping each business’s data apart, and keeping the AI honest. Tenants are separated by Postgres row-level security under a limited database user. Under load, some queries began returning zero rows: the connection pooler in transaction mode discards the per-connection tenant setting after every commit. Session pooling fixed it. On the AI side, a fact-check step sits after the answer, and a 35-question live test produced no invented facts.',
    facts: ['760+ commits', '~1,860 automated tests', '56 migrations · 34 API routers', '6 channels incl. live phone calls', 'API types generated for the dashboard so the two cannot drift'],
    stack: ['Next.js 16', 'React 19', 'FastAPI', 'SQLAlchemy', 'Alembic', 'Postgres + RLS', 'Gemini via OpenRouter', 'fastembed', 'Meta Graph API', 'Vobiz', 'Sarvam', 'Clerk'],
    links: [{ label: 'omni-flow-ai.vercel.app', href: 'https://omni-flow-ai.vercel.app' }],
    note: 'Private repository. Started under its earlier name, OmniFlow AI.',
    image: { src: omniflow, alt: 'OmniConnect landing page: every customer message, answered' },
  },
  {
    slug: 'sentinelops',
    name: 'SentinelOps AI',
    year: '2026',
    badge: 'Winner · Freshworks Great Agent Hackathon',
    headline: 'An AI SRE agent that is allowed to fix production.',
    problem:
      'Most AI ops tools stop at a diagnosis. The few that go further are trusted with open-ended access to production. Neither is something a real engineering team will switch on.',
    built:
      'SentinelOps watches a Kubernetes system through Prometheus and opens an incident when a service’s error rate stays above 5%. Claude investigates using nine read-only tools and has to cite the evidence behind its conclusion. The fix it proposes becomes a change request in Freshservice. Only after a person approves it there does SentinelOps apply the change, watch for recovery for two minutes, and roll back on its own if recovery doesn’t come.',
    hardPart:
      'The engineering is in the word “allowed”. None of the safety fences rely on the model behaving: it picks from a fixed catalogue of four actions, a server-side allow-list and a plain-code policy decide what is permitted, the Kubernetes identity it runs as cannot create or delete anything, and every step lands in a hash-chained audit log that shows any tampering.',
    facts: ['9 read-only agent tools', '≤ 14 tool calls, ~$0.05 per investigation', 'Auto-rollback after 2 min', 'Team of two, with Chethan'],
    stack: ['Python', 'FastAPI', 'Claude tool use', 'Kubernetes', 'Prometheus', 'Supabase', 'Freshservice API + MCP', 'React'],
    links: [],
    note: 'Private repository. Happy to walk through the code.',
    image: { src: sentinelops, alt: 'SentinelOps overview: service health, error rates and the agent activity log' },
  },
  {
    slug: 'fastforward',
    name: 'Fastforward',
    year: 'Oct 2026',
    badge: 'In progress · PayPal Subscriptions',
    headline: 'A flight simulator for PayPal Subscriptions, so billing bugs show up before customers do.',
    problem:
      'Subscription billing fails in slow, ugly ways: a payment fails on day 12, a webhook arrives twice, a dispute lands late. The real sandbox can’t replay a bad month on demand.',
    built:
      'A stateful stand-in for PayPal Subscriptions and Disputes, built from PayPal’s official OpenAPI specs. It plays a 75-day “bad month” in seconds with AI-played customers who pay, fail or dispute, and sends signed webhooks that arrive duplicated, late, out of order or forged. It ships as three publishable packages, a CLI, an MCP server for coding assistants, and a demo on Railway.',
    hardPart:
      'Trusting the verdict. Six deterministic checks, not the AI, decide pass or fail, so the model cannot talk a bug into passing. And the twin has to be faithful: the first comparison against PayPal’s real sandbox found 27 differences, now fixed to 0 across 7 of 7 endpoints.',
    facts: ['376 unit tests + end-to-end', '27 → 0 differences vs real sandbox', '3 packages, CLI and MCP server'],
    stack: ['TypeScript', 'Node.js', 'OpenAPI', 'Claude', 'MCP', 'Vitest', 'Railway'],
    links: [{ label: 'GitHub', href: 'https://github.com/VinayG759/FastForward' }],
  },
  {
    slug: 'sangam',
    name: 'Sangam',
    year: '2026',
    badge: 'Google Cloud · Build with AI',
    headline: 'Citizen voice, joined with public data, to show where infrastructure money isn’t reaching people.',
    problem:
      'Grievance systems route complaints one at a time. Spending and coverage records live somewhere else. Nobody puts the two side by side, so nobody sees where demand and official data disagree.',
    built:
      'Residents report a problem by voice, photo or text, in their own language, over Telegram, WhatsApp or the web. Sangam groups reports by place and need, then joins them with official data such as Jal Jeevan Mission tap coverage across Karnataka’s 30 districts and 228 blocks, and gives each place a verdict: unserved gap, delivery gap, stalled allocation.',
    hardPart:
      'Keeping the AI out of the decision. The ranking is plain arithmetic with weights a government sets. Gemini only writes the explanation, and code rejects any explanation that contains a number not found in the sourced facts.',
    facts: ['6 languages', 'Keyed-hash reporter IDs', 'Groups under 5 never shown', 'Engineering: me; data & pitch: a teammate'],
    stack: ['FastAPI', 'Supabase', 'pgvector', 'PostGIS', 'Gemini', 'Sarvam', 'React', 'Leaflet'],
    links: [
      { label: 'Live prototype', href: 'https://sangam-eight-blue.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/VinayG759/Sangam' },
    ],
    note: 'The live prototype uses synthetic citizen reports, marked as such. Places and water-coverage figures are real government data.',
    image: { src: sangam, alt: 'Sangam overview: places needing action and top priorities in Karnataka' },
  },
  {
    slug: 'baseline',
    name: 'Baseline',
    year: '2026',
    badge: 'AWS × WeMakeDevs hackathon',
    headline: 'A health record that notices.',
    problem:
      'Lab reports get read once and filed. A slow drift across three reports, which is what a doctor would want to see, stays invisible unless someone lines them up.',
    built:
      'Photograph a printed lab report. A model reads the values, tested Python works out the trend across earlier reports, and the model explains it in English, Kannada or Hindi. Family profiles, a doctor view, and a no-login guest mode that is rate-limited because every read costs money.',
    hardPart:
      'The model reads, code decides, the model explains. A wrong trend on a medical value is an invisible error, so the arithmetic never goes near the model, and every number in a translated summary is checked against the source.',
    facts: ['320+ tests', 'Built in a weekend with Chethan', 'Versioned API contract between us'],
    stack: ['Python', 'AWS S3', 'DynamoDB', 'Strands Agents', 'Gemini', 'PWA'],
    links: [
      { label: 'GitHub', href: 'https://github.com/VinayG759/BaseLine' },
      { label: 'Participation certificate', href: '/certificates/WeMakeDevs_First_Commit_Vinay_G.pdf' },
    ],
    note: 'Built for First Commit, event 01 of the Bharat Builds Tour (WeMakeDevs × AWS).',
  },
];

export const earlierWork: { name: string; what: string; stack: string; href: string }[] = [
  {
    name: 'Student Management System',
    what: 'CRUD REST API for student records.',
    stack: 'Spring Boot · MySQL',
    href: 'https://github.com/VinayG759/Student-Management-System',
  },
  {
    name: 'Cryptoverse',
    what: 'Crypto prices, coin stats, exchanges and news.',
    stack: 'React · Redux Toolkit',
    href: 'https://github.com/VinayG759/Cryptoverse',
  },
  {
    name: 'Weather Master',
    what: 'Temperature, humidity, UV and air quality for any city.',
    stack: 'JavaScript',
    href: 'https://github.com/VinayG759/Weather-Master-',
  },
  {
    name: 'Bipedal Walking Robot',
    what: 'Servo-driven biped for stairs and uneven ground.',
    stack: 'C++ · embedded',
    href: 'https://github.com/VinayG759/Bipedal-Walking-Robot-',
  },
];

export const toolbox: { area: string; items: string }[] = [
  { area: 'Languages', items: 'Python, TypeScript, JavaScript, Java, SQL' },
  { area: 'AI', items: 'LLM agents and tool use (Claude, Gemini, Gemma), OpenRouter, MCP, RAG, embeddings (fastembed), pgvector, prompt design with code-checked outputs' },
  { area: 'Backend', items: 'FastAPI, Node.js, SQLAlchemy, Alembic, REST, webhooks, Server-Sent Events, GitHub Actions CI, pytest, Vitest, Playwright' },
  { area: 'Data & infra', items: 'PostgreSQL with row-level security, Supabase, MySQL, MongoDB, AWS (S3, DynamoDB), Docker, Kubernetes, Prometheus, Railway, Vercel' },
  { area: 'Frontend', items: 'Next.js, React, Tailwind CSS, shadcn/ui, TanStack Query, Leaflet maps' },
  { area: 'Integrations', items: 'WhatsApp Cloud API, Messenger and Instagram (Meta Graph API), Telegram Bot API, Gmail and SMTP, Google Sheets API, Vobiz and Plivo voice, Sarvam and ElevenLabs speech, Freshservice, Clerk' },
];
