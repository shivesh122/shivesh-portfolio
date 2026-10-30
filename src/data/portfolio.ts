// All site content lives here, so updating the portfolio never requires touching layout code.

export const profile = {
  name: "Shivesh Tiwari",
  fullName: "Shivesh Nath Tiwari",
  role: "Data Analyst & Machine Learning Engineer",
  pitch:
    "I build KPI dashboards, data pipelines and machine-learning models that turn raw data into decisions, and I ship them as live, working products.",
  location: "Gorakhpur, Uttar Pradesh, India",
  email: "nikutiwari70@gmail.com",
  phone: "+91 9554193106",
  resume: "/Shivesh_Tiwari_Resume.pdf",
  github: "https://github.com/shivesh122",
  linkedin: "https://www.linkedin.com/in/shivesh-nath-tiwari",
  photo: { src: "/img/profile-400.webp", srcSet: "/img/profile-400.webp 400w, /img/profile-800.webp 800w" },
};

export const stats = [
  { value: "13", label: "projects built" },
  { value: "11", label: "live demos & reports" },
  { value: "150+", label: "DSA problems solved" },
  { value: "Top 2%", label: "Intro to ML (NIT)" },
];

export const focusAreas = [
  {
    title: "Data Analytics & BI",
    text: "KPI dashboards in Power BI, SQL data models and clear reporting for stakeholders.",
    tags: ["Power BI", "DAX", "SQL", "BigQuery", "GA4", "Excel"],
  },
  {
    title: "Machine Learning",
    text: "Fraud detection, churn and demand forecasting models, evaluated honestly and deployed.",
    tags: ["Python", "Scikit-learn", "Pandas", "TensorFlow"],
  },
  {
    title: "Full-Stack Apps",
    text: "Web apps that put data and models in front of users: React front ends with Node.js APIs.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
  },
];

export const skillGroups = [
  { title: "Languages", items: ["Python", "SQL", "DAX", "JavaScript", "TypeScript", "Java", "C", "PHP"] },
  {
    title: "Data & BI",
    items: ["Power BI", "Power Query", "Excel", "Data Modeling", "ETL", "EDA", "Google BigQuery", "Google Analytics 4", "Microsoft Fabric"],
  },
  {
    title: "Machine Learning",
    items: ["Scikit-learn", "Pandas", "NumPy", "TensorFlow", "Matplotlib", "OpenCV", "Anomaly Detection", "Forecasting"],
  },
  { title: "Databases", items: ["SQL Server", "MySQL", "MongoDB", "SQLite", "Firebase", "Oracle"] },
  { title: "Web", items: ["React", "Redux", "Node.js", "Express", "REST APIs", "D3.js", "Chart.js", "HTML & CSS"] },
  { title: "Cloud & Tools", items: ["Git & GitHub", "GitHub Actions", "AWS", "Google Cloud", "Render", "Vercel", "Power Platform"] },
];

export type Category = "Machine Learning" | "Data Analytics" | "Full-Stack";

export interface Project {
  title: string;
  description: string;
  category: Category;
  tech: string[];
  image: string;
  github: string;
  live?: string;
  liveLabel?: string;
  metrics?: { value: string; label: string }[];
}

export const featuredProjects: Project[] = [
  {
    title: "Banking Fraud Detection System",
    description:
      "A two-stage fraud model (Isolation Forest anomaly detection feeding Gradient Boosting) trained on 216K card, UPI, ATM and online transactions, with a live fraud-operations dashboard that scores transactions in real time and explains every alert.",
    category: "Machine Learning",
    tech: ["Python", "Scikit-learn", "Pandas", "SQL", "Power BI", "D3.js"],
    image: "/img/projects/fraud-detection.webp",
    github: "https://github.com/shivesh122/banking-fraud-detection",
    live: "https://banking-fraud-detection-w3e7.onrender.com",
    metrics: [
      { value: "82%", label: "fraud value caught" },
      { value: "0.4%", label: "false-positive rate" },
      { value: "0.99", label: "ROC-AUC" },
    ],
  },
  {
    title: "Supply Chain Risk Analytics",
    description:
      "An automated daily ETL pipeline into a SQL star schema that tracks supplier on-time-in-full delivery, delays and stockout risk across 4 warehouses, with Holt-Winters demand forecasting and an interactive dashboard.",
    category: "Data Analytics",
    tech: ["Python", "Pandas", "SQL", "Power BI", "DAX", "D3.js"],
    image: "/img/projects/supply-chain-risk.webp",
    github: "https://github.com/shivesh122/supply-chain-risk-analytics",
    live: "https://supply-chain-risk-analytics.onrender.com",
    metrics: [
      { value: "86%", label: "forecast accuracy" },
      { value: "12", label: "suppliers scored" },
      { value: "Daily", label: "automated refresh" },
    ],
  },
  {
    title: "ExpenseIQ: Full-Stack Expense Tracker",
    description:
      "A MERN-stack web app with JWT authentication and a REST API for tracking and categorising expenses, monthly and category budgets with smart alerts, spending charts and CSV export.",
    category: "Full-Stack",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    image: "/img/projects/expenseiq.webp",
    github: "https://github.com/shivesh122/expenseiq",
    live: "https://expenseiq-9h2k.onrender.com",
    metrics: [
      { value: "JWT", label: "secure auth" },
      { value: "REST", label: "API" },
      { value: "CSV", label: "export" },
    ],
  },
];

export const moreProjects: Project[] = [
  {
    title: "Customer Churn Prediction",
    description: "Predicts which customers are likely to churn so businesses can act on retention early.",
    category: "Machine Learning",
    tech: ["Python", "Scikit-learn", "Streamlit"],
    image: "/img/projects/churn.webp",
    github: "https://github.com/shivesh122/customer-churn-prediction",
    live: "https://customer-churn-prediction-7f8c.onrender.com",
  },
  {
    title: "Movie Recommendation Engine",
    description: "Recommends movies based on content similarity and user preferences.",
    category: "Machine Learning",
    tech: ["Python", "Scikit-learn", "Streamlit"],
    image: "https://i.ibb.co/JwNxymnv/movie-recommendation.png",
    github: "https://github.com/shivesh122/movie-Recommendation",
    live: "https://movie-recommendation-nbkm.onrender.com",
  },
  {
    title: "Titanic Survival Prediction",
    description: "Survival predictions from passenger data, with batch CSV scoring and a web form for single predictions.",
    category: "Machine Learning",
    tech: ["Python", "Scikit-learn", "Streamlit"],
    image: "/img/projects/titanic.webp",
    github: "https://github.com/shivesh122/Titanic-servival-prediction-model-",
    live: "https://titanic-servival-prediction-model.onrender.com",
  },
  {
    title: "Pizza Sales Dashboard",
    description: "Power BI report on pizza sales data from SQL Server, with KPIs and visual sales analysis.",
    category: "Data Analytics",
    tech: ["SQL", "Power BI", "DAX"],
    image: "/img/projects/pizza-sales.webp",
    github: "https://github.com/shivesh122/Pizza-Sales-Dashboard",
    live: "https://app.powerbi.com/view?r=eyJrIjoiM2Y3M2QwNTgtMTVlZi00ZmU4LTg0M2MtZGY0NTNmZDlhNjUyIiwidCI6IjFlYjk4MmNlLThkZTgtNDllMi1iMDA4LTNiYjJmYjg1NzU1YyJ9",
    liveLabel: "Live report",
  },
  {
    title: "Hospital Emergency Room Dashboard",
    description: "Power BI report on hospital emergency-room data, with KPIs and trend analysis.",
    category: "Data Analytics",
    tech: ["SQL", "Power BI", "DAX"],
    image: "/img/projects/hospital-er.webp",
    github: "https://github.com/shivesh122/Hospital-Emergency-Room-Dashboard",
    live: "https://app.powerbi.com/view?r=eyJrIjoiMWFmMDA3ODUtZjg2Yi00OGI2LTg4MzYtMmVlMzcxMjBlNWIyIiwidCI6IjFlYjk4MmNlLThkZTgtNDllMi1iMDA4LTNiYjJmYjg1NzU1YyJ9",
    liveLabel: "Live report",
  },
  {
    title: "Coffee Sales Dashboard",
    description: "Power BI dashboard on coffee sales trends, customer behaviour and revenue.",
    category: "Data Analytics",
    tech: ["Power BI", "Excel", "DAX"],
    image: "https://i.ibb.co/zVfwG45z/coffee-dashboard.png",
    github: "https://github.com/shivesh122/Coffee-Sales-Dashboard",
  },
  {
    title: "Netflix Data Analysis",
    description: "Exploratory analysis of Netflix content: genres, ratings, countries and release patterns.",
    category: "Data Analytics",
    tech: ["Python", "Pandas", "Seaborn"],
    image: "https://i.ibb.co/WWvkTcRb/netflix-analysis.png",
    github: "https://github.com/shivesh122/Netflix-Movie-Data-Analysis",
  },
  {
    title: "Fixtral",
    description: "AI image-editing assistant that automates r/PhotoshopRequest edits with Google Gemini.",
    category: "Full-Stack",
    tech: ["Next.js", "React", "Gemini"],
    image: "/img/projects/fixtral.webp",
    github: "https://github.com/shivesh122/Fixtral",
    live: "https://fixtralai.vercel.app",
  },
  {
    title: "SkillMate Pods",
    description: "Hyperlocal, barter-based platform for swapping skills and services within a community.",
    category: "Full-Stack",
    tech: ["React", "Database Design", "UX/UI"],
    image: "https://i.ibb.co/TqHGvhYP/skillmate-pods.png",
    github: "https://github.com/shivesh122/Skill-Mate",
    live: "https://skillmate7.vercel.app",
  },
  {
    title: "BLW Employee Nexus Hub",
    description: "Employee management system with records, dashboard analytics and admin tools.",
    category: "Full-Stack",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/img/projects/blw-nexus.webp",
    github: "https://github.com/shivesh122/BLW-Employee-Nexus-Hub",
    live: "https://blw-employee-nexus-hub.vercel.app",
  },
];

export const experience = [
  {
    role: "AI/ML Developer & Data Analyst",
    org: "Effling Kids Pvt. Ltd.",
    type: "Freelance",
    period: "Aug 2025 – Present",
    current: true,
    points: [
      "Build and maintain a Power BI KPI dashboard on Google Analytics 4 data via Google BigQuery to track app engagement, retention and user growth, and present insights to management.",
      "Designed and deployed machine-learning solutions that automate core educational processes, integrating backend services with ML pipelines.",
    ],
    tags: ["Power BI", "BigQuery", "GA4", "Python", "ML"],
  },
  {
    role: "Project Mentor",
    org: "GirlScript Summer of Code",
    type: "Internship",
    period: "May 2024 – Nov 2024",
    points: [
      "Mentored a cohort of Python developers building agentic AI systems and workflow automation.",
      "Co-led two open-source projects, SPRING and BEAUTIFY, with a team of 3 mentors from ideation to delivery.",
    ],
    tags: ["Python", "Agentic AI", "Open Source"],
  },
  {
    role: "Data Processing Intern",
    org: "BLW Banaras",
    type: "Internship · Banaras",
    period: "1 month",
    points: [
      "Hands-on electronic data processing: data handling, organisation, processing workflows and quality assurance.",
    ],
    tags: ["Data Processing", "Quality Assurance"],
  },
];

export const education = [
  {
    title: "B.Tech, Computer Science & Engineering (AI & ML)",
    place: "KIPM College of Engineering and Technology, Gorakhpur",
    period: "2022 – 2026",
    score: "8.7 CGPA",
  },
  { title: "Class 12 (CBSE)", place: "Saraswati Vidya Mandir", period: "2021 – 2022", score: "83%" },
  { title: "Class 10 (CBSE)", place: "Saraswati Vidya Mandir", period: "2019 – 2020", score: "93%" },
];

export const achievements = [
  "Solved 150+ Data Structures & Algorithms problems on LeetCode, GeeksforGeeks and CodeChef.",
  "Top 5% in “Programming in Modern Python” and top 2% in “Introduction to Machine Learning” (NIT).",
  "Gold Medal (branch level) and Bronze Medal (college level) for academic excellence.",
];

export const certifications = [
  { name: "Python", url: "https://www.udemy.com/certificate/UC-dae52f20-d045-4f26-a553-b25496187007/" },
  { name: "Data Analytics", url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_2L9TdCRG8cJwkcKj2_1750949584090_completion_certificate.pdf" },
  { name: "Git & GitHub", url: "https://www.udemy.com/certificate/UC-634edab5-65cc-4c86-b6a5-6017de88e1cc/" },
  { name: "Data Science", url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/SKZxezskWgmFjRvj9/Tcz8gTtprzAS4xSoK_SKZxezskWgmFjRvj9_2L9TdCRG8cJwkcKj2_1750959344722_completion_certificate.pdf" },
  { name: "Microsoft Power BI", url: "https://certx.in/certificate/36a28147-6eed-47a5-8342-e5f926ebba61463446" },
  { name: "SQL", url: "https://www.udemy.com/certificate/UC-aa6adde5-28d9-490c-90c9-f4114866301e/" },
  { name: "Microsoft Excel", url: "http://ude.my/UC-243f6abb-fa1b-44a1-b44b-f20636b4fff9" },
];

export const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
