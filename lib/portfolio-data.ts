import {
  Award,
  Blocks,
  BrainCircuit,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Network,
  Phone,
  Rocket,
  ShieldCheck,
  TerminalSquare,
  Workflow
} from "lucide-react";

export type InfrastructureNode = {
  id: string;
  state: string;
  city: string;
  label: string;
  type: string;
  position: { x: number; y: number };
  height: number;
  color: string;
  summary: string;
  metrics: string[];
  stack: string[];
  links?: { label: string; href: string }[];
};

export const profile = {
  name: "Prakhar Kumar",
  title: "Software Engineer | Full Stack Developer | Backend Engineer",
  tagline: "Building scalable digital infrastructure across India",
  location: "Mohali / Kharar, Punjab, India",
  relocation: "Open to relocation",
  phone: "+91-9508115981",
  email: "prakharkumar20032003@gmail.com",
  linkedin: "https://www.linkedin.com/in/prakharkumar1980",
  github: "https://github.com/Prakhar1980",
  leetcode: "https://leetcode.com/Prakhar1980",
  summary:
    "IEEE-published researcher and Full Stack Developer with 2 production-grade applications deployed and actively running, built using React.js, Node.js, TypeScript, and Socket.IO. Designed systems featuring sub-200ms WebSocket latency, RBAC-secured APIs, and dual-database architectures."
};

export const contactLinks = [
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone}`, icon: Phone },
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", value: "linkedin.com/in/prakharkumar1980", href: profile.linkedin, icon: Linkedin },
  { label: "GitHub", value: "github.com/Prakhar1980", href: profile.github, icon: Github },
  { label: "Location", value: profile.location, href: "#contact", icon: MapPin }
];

export const infrastructureNodes: InfrastructureNode[] = [
  {
    id: "supportsync",
    state: "Punjab",
    city: "Chandigarh / Mohali",
    label: "SupportSync",
    type: "AI support tower",
    position: { x: 36, y: 20 },
    height: 118,
    color: "#49f5d7",
    summary:
      "AI-powered real-time customer support platform with automated AI-to-human ticket escalation, Admin/Agent/User roles, and RBAC-secured APIs.",
    metrics: ["sub-200ms WebSocket latency", "40% faster ticket resolution", "50+ UAT scenarios"],
    stack: ["Node.js", "Express.js", "React.js", "TypeScript", "MongoDB", "Socket.IO", "JWT", "RBAC"],
    links: [
      { label: "Live Demo", href: "https://agentraxsync.onrender.com/" },
      { label: "GitHub", href: "https://github.com/Prakhar1980/agentraxsync" }
    ]
  },
  {
    id: "backend",
    state: "Karnataka",
    city: "Bangalore",
    label: "Backend Engineering",
    type: "API systems tower",
    position: { x: 43, y: 70 },
    height: 96,
    color: "#5f8cff",
    summary:
      "REST API architecture, MVC separation, JWT authentication, OOP design, and service-layer thinking for scalable backend delivery.",
    metrics: ["MVC architecture", "RESTful APIs", "System design fundamentals"],
    stack: ["Node.js", "Express.js", "REST APIs", "JWT", "Microservices", "Postman"]
  },
  {
    id: "realtime",
    state: "Maharashtra",
    city: "Mumbai",
    label: "Real-Time Systems Hub",
    type: "network exchange",
    position: { x: 30, y: 59 },
    height: 88,
    color: "#ff5a7a",
    summary:
      "Event-driven concurrency, Socket.IO channels, live dashboards, and responsive state synchronization across concurrent sessions.",
    metrics: ["500+ concurrent session target", "structured log analysis", "event-driven workflows"],
    stack: ["Socket.IO", "WebSockets", "React.js", "TypeScript", "MongoDB"]
  },
  {
    id: "certifications",
    state: "Delhi",
    city: "Delhi NCR",
    label: "Certifications Monument",
    type: "credential spire",
    position: { x: 42, y: 30 },
    height: 78,
    color: "#ffe86a",
    summary:
      "Cloud Computing Elite Top 1% from NPTEL IIT Kharagpur, Microsoft cloud networking, and Google project management credentials.",
    metrics: ["NPTEL Elite Top 1%", "Microsoft Coursera", "Google Coursera"],
    stack: ["Cloud Computing", "Networking", "Project Management"]
  },
  {
    id: "ai-ml",
    state: "Telangana",
    city: "Hyderabad",
    label: "AI / ML Innovation Lab",
    type: "prediction lab",
    position: { x: 42, y: 58 },
    height: 86,
    color: "#b0ff7a",
    summary:
      "Road safety prediction analytics, AI support workflows, Python data validation, NumPy/SciPy analysis, and generative AI fundamentals.",
    metrics: ["25% data accuracy lift", "prediction analytics", "AI escalation workflows"],
    stack: ["Python", "NumPy", "SciPy", "SQL", "Generative AI", "ML basics"]
  },
  {
    id: "task-manager",
    state: "Bihar",
    city: "Patna",
    label: "Team Task Manager",
    type: "workflow command center",
    position: { x: 58, y: 41 },
    height: 94,
    color: "#9b8cff",
    summary:
      "Role-based workflow and project management system with admin/member dashboards, task assignment, audit logs, and real-time reporting views.",
    metrics: ["Admin/Member roles", "dual database design", "JWT + bcrypt"],
    stack: ["Node.js", "Express.js", "React.js", "MySQL", "MongoDB", "SQL", "Postman"],
    links: [{ label: "GitHub", href: "https://github.com/Prakhar1980/team-task-manager" }]
  }
];

export const skills = {
  Backend: ["Node.js", "Express.js", "REST APIs", "WebSockets", "JWT", "Microservices"],
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind", "HTML5", "CSS3"],
  Database: ["MongoDB", "MySQL", "SQL optimization"],
  Tools: ["Docker", "Git", "GitHub", "Linux", "Postman", "Jest", "GitHub Actions"],
  AI: ["Generative AI", "ML basics", "Python", "NumPy", "SciPy"],
  Concepts: ["OOP", "DBMS", "DSA", "MVC", "RBAC", "SDLC", "Agile/Scrum", "System Design"]
};

export const projects = [
  {
    name: "SupportSync",
    archetype: "AI-powered support tower",
    icon: BrainCircuit,
    period: "Jan 2026 - Apr 2026",
    description:
      "Production-deployed real-time support platform using Node.js, React.js, TypeScript, MongoDB, and Socket.IO.",
    details: [
      "Automated AI-to-human escalation with RBAC and JWT across Admin, Agent, and User roles.",
      "Sub-200ms WebSocket latency under concurrent load after resolving event-driven concurrency issues.",
      "Express.js REST APIs following MVC and OOP principles, validated through Postman collections."
    ],
    stack: ["Node.js", "Express.js", "React.js", "TypeScript", "MongoDB", "Socket.IO", "JWT", "RBAC"],
    links: [
      { label: "Live", href: "https://agentraxsync.onrender.com/" },
      { label: "GitHub", href: "https://github.com/Prakhar1980/agentraxsync" }
    ]
  },
  {
    name: "Team Task Manager",
    archetype: "workflow command center",
    icon: Workflow,
    period: "Jan 2026 - Mar 2026",
    description:
      "Full-stack role-based project management platform for task assignment, lifecycle tracking, priorities, and delivery monitoring.",
    details: [
      "Admin and Member dashboards with real-time performance visibility and task ownership tracking.",
      "JWT and bcrypt authentication across protected routes and API workflows.",
      "MySQL audit/reporting schemas plus MongoDB flexible document storage."
    ],
    stack: ["Node.js", "Express.js", "React.js", "MySQL", "MongoDB", "JWT", "bcrypt", "REST APIs"],
    links: [{ label: "GitHub", href: "https://github.com/Prakhar1980/team-task-manager" }]
  },
  {
    name: "Smart Contract Suite",
    archetype: "decentralized vault district",
    icon: Blocks,
    period: "Jun 2024 - Aug 2024",
    description:
      "Ethereum and Polygon smart contract tooling built during Metacrafters blockchain training.",
    details: [
      "Developed and deployed 5+ smart contracts using Solidity.",
      "Integrated JavaScript frontend interactions through Web3.js.",
      "Configured GitHub Actions CI/CD basics for compilation, testing, and deployment."
    ],
    stack: ["Solidity", "Web3.js", "Ethereum", "Polygon", "Hardhat", "GitHub Actions"]
  },
  {
    name: "Road Safety ML Project",
    archetype: "prediction analytics lab",
    icon: Network,
    period: "Research track",
    description:
      "Road safety prediction analytics concept connected to data validation, ML fundamentals, and public-service automation research.",
    details: [
      "Models road-risk signals as a prediction and visualization problem.",
      "Connects to Python analysis workflows using NumPy, SciPy, and SQL.",
      "Frames software as public-service infrastructure, matching Prakhar's IEEE research direction."
    ],
    stack: ["Python", "SQL", "ML basics", "Analytics", "Public services"]
  },
  {
    name: "DevOps Dashboard",
    archetype: "infrastructure observability tower",
    icon: TerminalSquare,
    period: "Systems concept",
    description:
      "Monitoring visualization for service health, deployment status, infra metrics, and operational readiness.",
    details: [
      "Designed around live infrastructure metrics and incident visibility.",
      "Complements Node.js APIs, CI/CD basics, Docker familiarity, and Linux tooling.",
      "Useful as a command layer for production-grade application ownership."
    ],
    stack: ["Docker", "Linux", "GitHub Actions", "Node.js", "Monitoring"]
  }
];

export const timeline = [
  {
    stop: "Chandigarh University",
    date: "Aug 2022 - Jun 2026",
    icon: GraduationCap,
    text: "B.E. Computer Science and Engineering, CGPA 8.05 / 10.0. Coursework: DSA, DBMS, OS, Computer Networks, OOP, Software Engineering."
  },
  {
    stop: "Data Analysis Training",
    date: "Jun 2023 - Jul 2023",
    icon: Database,
    text: "Analyzed IoT energy datasets with Python, NumPy, SciPy, and SQL; improved data accuracy by 25% through validation, outlier removal, and root cause analysis."
  },
  {
    stop: "IEEE Student Chapter",
    date: "Mar 2024 - Dec 2024",
    icon: Network,
    text: "Active member and volunteer coordinating technical workshops, student events, participation metrics, and cross-team execution planning."
  },
  {
    stop: "Blockchain Training",
    date: "Jun 2024 - Aug 2024",
    icon: ShieldCheck,
    text: "Metacrafters program: deployed 5+ smart contracts on Ethereum and Polygon using Solidity, Web3.js, and GitHub Actions CI/CD basics."
  },
  {
    stop: "NPTEL Top 1%",
    date: "2024",
    icon: Award,
    text: "Cloud Computing - Elite Top 1%, NPTEL IIT Kharagpur."
  },
  {
    stop: "IEEE Publication",
    date: "2025",
    icon: Award,
    text: "Published 'Robotic Process Automation Tool to Enhance Efficiency in Public Services' in IEEE Xplore."
  },
  {
    stop: "Production Projects",
    date: "2026",
    icon: Rocket,
    text: "SupportSync and Team Task Manager shipped as production-grade full-stack systems with RBAC, WebSockets, REST APIs, and database architecture."
  },
  {
    stop: "Job Ready",
    date: "Now",
    icon: TerminalSquare,
    text: "150+ LeetCode problems solved across arrays, strings, trees, graphs, dynamic programming, and sliding window."
  }
];

export const certifications = [
  {
    name: "Cloud Computing - Elite (Top 1%)",
    issuer: "NPTEL, IIT Kharagpur",
    year: "2024",
    href: "https://drive.google.com/file/d/1kkHVE6SIlNyiFgSGSLsyeFp9gYJ5OLmS/view?usp=drive_link"
  },
  {
    name: "Introduction to Networking and Cloud Computing",
    issuer: "Microsoft via Coursera",
    year: "2025",
    href: "https://coursera.org/share/fa1a259c0e9f620f68ef4a3b2db3b3d6"
  },
  {
    name: "Foundations of Project Management",
    issuer: "Google via Coursera",
    year: "May 2026",
    href: "https://coursera.org/verify/65U4FLE6XUBS"
  },
  {
    name: "Java Full Stack Developer Specialization",
    issuer: "Board Infinity",
    year: "Training",
    href: "#resume"
  },
  {
    name: "Django For Everybody Specialization",
    issuer: "Coursera",
    year: "Training",
    href: "#resume"
  }
];

export const achievements = [
  "2 production-grade applications deployed and actively running",
  "150+ LeetCode problems solved",
  "RBAC-secured full-stack application architecture",
  "Real-time WebSocket workflow implementation",
  "Data validation and analytics pipeline experience",
  "IEEE Xplore research publication"
];
