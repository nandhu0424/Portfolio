// =============================================
// CENTRALIZED PORTFOLIO DATA FILE
// Update all personal information, links, and content here.
// =============================================

export const personalInfo = {
    name: "NANDHINI N",
    displayName: "Nandhini N",
    title: "Full Stack Developer | Software Developer",
    subtitle: "Computer Science Engineering Student | AI & Generative AI Enthusiast",
    tagline: "Building practical web applications and intelligent solutions with modern technologies.",
    email: "nandhinin2004@gmail.com",
    phone: "7695978014",
    location: "Tirunelveli, Tamil Nadu, India",
    github: "https://github.com/nandhu0424",
    linkedin: "https://www.linkedin.com/in/nandhini-n-43532633b",
    resumePath: "/assets/Nandhini_N_Resume.pdf",
    profileImage: "/images/profile.jpg",
};

export const aboutMe = {
    intro: `I am a final-year B.E. Computer Science and Engineering student at Government College of Engineering, Dharmapuri, affiliated with Anna University. Driven by a passion for building practical software, I actively work with the MERN stack and Python to create meaningful applications.`,
    body: `My interests span full-stack development, backend engineering, databases, and the rapidly evolving field of Artificial Intelligence and Generative AI. I am currently developing an AI-powered College Knowledge Assistant for my final-year project, exploring technologies like RAG, LangChain, and vector databases.`,
    closing: `I bring a problem-solving mindset, a continuous learning attitude, and hands-on project experience — actively seeking software development and full-stack opportunities.`,
};

export const typingRoles = [
    "Full Stack Developer",
    "Software Developer",
    "AI / GenAI Enthusiast",
    "Problem Solver",
];

// --- Skills with Progress Bars ---
export const skills = [
    { name: "C", percentage: 82 },
    { name: "CSS", percentage: 88 },
    { name: "HTML", percentage: 93 },
    { name: "Java", percentage: 50 },
    { name: "JavaScript", percentage: 77 },
    { name: "MERN Stack", percentage: 70 },
    { name: "MySQL", percentage: 75 },
    { name: "Python", percentage: 65 },
];

// --- Technical Skills by Category ---
export const technicalSkills = [
    {
        category: "Frontend",
        icon: "🖥️",
        skills: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "Tailwind CSS"],
    },
    {
        category: "Backend",
        icon: "⚙️",
        skills: ["Node.js", "Express.js", "Python", "Flask", "FastAPI"],
    },
    {
        category: "Full Stack",
        icon: "🔗",
        skills: ["MERN Stack"],
    },
    {
        category: "AI / Generative AI",
        icon: "🤖",
        skills: [
            "Generative AI — Learning",
            "RAG — Learning",
            "LangChain — Learning",
            "LangGraph — Learning",
            "Ollama — Learning",
            "Hugging Face — Learning",
            "Prompt Engineering — Learning",
        ],
        isLearning: true,
    },
    {
        category: "Databases",
        icon: "🗄️",
        skills: ["MySQL", "MongoDB"],
    },
    {
        category: "Tools",
        icon: "🛠️",
        skills: ["VS Code", "Git", "GitHub", "Docker"],
    },
];

// --- Education ---
export const education = [
    {
        degree: "B.E. Computer Science and Engineering",
        institution: "Government College of Engineering, Dharmapuri",
        affiliation: "Anna University",
        duration: "2023 – 2027",
        score: "CGPA: 8.6",
        type: "University",
    },
    {
        degree: "12th Standard",
        institution: "Government Higher Secondary School, Prappadi, Tirunelveli – 627108",
        duration: "Completed",
        score: "92%",
        type: "School",
    },
    {
        degree: "10th Standard",
        institution: "Government Higher Secondary School, Prappadi, Tirunelveli – 627108",
        duration: "Completed",
        score: "92%",
        type: "School",
    },
];

// --- Experience ---
export const experience = [
    {
        role: "Generative AI / Full Stack Development Intern",
        company: "UNIQ Technologies",
        location: "Tirunelveli",
        duration: "June 2026",
        type: "Internship",
        bullets: [
            "Explored Generative AI concepts including local LLMs, prompt engineering, and AI integration with relational and vector databases.",
            "Worked with frameworks and tools such as LangChain, Hugging Face Transformers, and Ollama to build and experiment with AI-powered pipelines.",
            "Gained hands-on exposure to ETL workflows, NLP techniques, and RAG (Retrieval-Augmented Generation) architecture.",
            "Utilized Docker and Git/GitHub for version control and containerized application development.",
            "Developed practical understanding of managing hallucinations and implementing guardrails in generative AI systems.",
        ],
    },
    {
        role: "IBM Cognos Analytics Virtual Internship",
        company: "Adroit Technologies Innovative Solutions Pvt. Ltd.",
        location: "Virtual",
        duration: "9 March 2026 – 10 April 2026",
        type: "Virtual Internship",
        program: "IBM Cognos Analytics",
        bullets: [
            "Completed a project-based virtual internship at Adroit Technologies Innovative Solutions Pvt. Ltd., focused on the IBM Cognos Analytics platform.",
            "Gained practical exposure to data visualization and analytical reporting using IBM Cognos Analytics.",
            "Developed skills in structuring, querying, and presenting data insights through dashboards and reports.",
        ],
        certificateUrl: "https://drive.google.com/file/d/1Y8AGRbUaKTKjm0J8ccDidmVeRh5BZkNA/view",
    },
];

// --- Projects ---
export interface Project {
    id: number;
    title: string;
    type: string;
    description: string;
    problem: string;
    features: string[];
    technologies: string[];
    githubUrl: string;
    liveUrl: string;
    image: string;
    status?: "completed" | "in-progress";
    isFeatured?: boolean;
    isCurrentProject?: boolean;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "AI-Powered College Knowledge Assistant",
        type: "Final Year Project",
        description:
            "An AI-powered knowledge assistant designed to help users retrieve and understand relevant information from college and institutional documents using modern retrieval and generative AI techniques.",
        problem:
            "Students and staff often struggle to find accurate, timely information from institutional documents and portals. This assistant provides a conversational interface to query those documents intelligently.",
        features: [
            "Document ingestion and text extraction",
            "Semantic search and hybrid retrieval",
            "RAG-based question answering",
            "Role-based access control",
            "Response guardrails and hallucination handling",
            "Query caching for performance",
        ],
        technologies: ["Python", "FastAPI", "LangChain", "LangGraph", "Ollama", "Qdrant", "PostgreSQL", "Redis"],
        githubUrl: "https://github.com/nandhu0424/college-knowledge-assistant",
        liveUrl: "#",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
        status: "in-progress",
        isFeatured: true,
        isCurrentProject: true,
    },
    {
        id: 2,
        title: "Lifeline360",
        type: "Major Project",
        description:
            "A digital health monitoring and management platform designed for managing Primary Health Centre operations, enabling comprehensive tracking and dashboard-driven insights for healthcare administrators.",
        problem:
            "Managing PHC operations, staff attendance, patient records, and medicine stock manually is error-prone and inefficient. Lifeline360 centralizes and automates these workflows.",
        features: [
            "OPD and attendance management",
            "Immunization and maternal/child health monitoring",
            "Emergency case management",
            "Medicine stock monitoring with alerts",
            "PHC dashboards and analytics",
            "Role-based access for PHC staff and DDHS",
        ],
        technologies: ["React", "Node.js", "Express.js", "MongoDB"],
        githubUrl: "https://github.com/nandhu0424/lifeline360",
        liveUrl: "#",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop",
        isFeatured: true,
        status: "completed",
    },
    {
        id: 3,
        title: "AI-Based Personalized Drug Interaction Risk Prediction System",
        type: "Academic Project",
        description:
            "An AI-powered system that helps pharmacists and doctors detect dangerous drug interactions quickly and accurately, considering patient-specific factors such as age, gender, allergies, and medical conditions to generate personalized risk predictions.",
        problem:
            "Traditional drug interaction systems do not account for patient-specific profiles, leading to generic and potentially inaccurate risk assessments for complex treatment plans.",
        features: [
            "Patient medical history input (age, gender, allergies, conditions)",
            "Medication entry with drug autocomplete search",
            "FP-Growth algorithm for frequent drug interaction pattern mining",
            "Random Forest ML model for personalized risk prediction",
            "Color-coded risk visualization (Green/Yellow/Red/Brown)",
            "Interactive React dashboard for analysis results",
            "Offline dataset analysis module using Java Swing",
            "Security: Helmet, Rate Limiting, CORS configuration",
        ],
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Python Flask", "Java Swing"],
        githubUrl: "https://github.com/nandhu0424/drug-to-drug-interactions",
        liveUrl: "#",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop",
        status: "completed",
        isFeatured: true,
    },
    {
        id: 4,
        title: "Offline-First Smart Library Management System",
        type: "Academic Project",
        description:
            "A modern offline-first smart library platform combining a Flutter mobile app, React admin dashboard, and Flask REST API. Enables uninterrupted library operations even without internet by using local SQLite, syncing to MongoDB when online.",
        problem:
            "Academic libraries face inefficient book tracking, no real-time availability, dependence on continuous internet, and manual attendance. This system solves all of these with an offline-first, automated approach.",
        features: [
            "Offline book search & browsing via local SQLite with MongoDB sync",
            "QR-based attendance and barcode-based book renting",
            "Automated fine calculation with admin override",
            "Wishlist, book reviews, ratings, and notifications (Student App)",
            "Barcode scanning for book management (Admin Dashboard)",
            "QR-based transaction approvals and reservation management",
            "Analytics and reporting dashboards (Admin)",
            "JWT authentication and secure QR payload generation (Backend)",
        ],
        technologies: ["Flutter", "React.js", "Flask", "MongoDB", "SQLite", "JWT"],
        githubUrl: "https://github.com/nandhu0424/offline-first-library-management-system",
        liveUrl: "#",
        image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=600&auto=format&fit=crop",
        status: "completed",
    },
    {
        id: 5,
        title: "Airline / Railway Reservation System",
        type: "Mini Project",
        description:
            "A reservation management system designed to handle booking operations, organize passenger information, and manage travel records efficiently.",
        problem:
            "Booking and managing travel reservations manually involves complex record-keeping. This system automates reservation workflows to improve accuracy and efficiency.",
        features: [
            "Seat booking and cancellation",
            "Passenger information management",
            "Booking records and history",
            "Simple and clean interface",
        ],
        technologies: ["Python", "MySQL"],
        githubUrl: "https://github.com/nandhu0424/Airline-Railway-Resevation-System",
        liveUrl: "https://airline-railway-resevation-system-1.onrender.com",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600&auto=format&fit=crop",
        status: "completed",
    },
    {
        id: 6,
        title: "Contact Management System",
        type: "Mini Project",
        description:
            "A contact management application designed to organize, store, and manage contact information efficiently, enabling quick search and retrieval.",
        problem:
            "Managing a large number of contacts without a structured system leads to disorganization. This application provides a reliable way to store and retrieve contact details.",
        features: [
            "Add, edit, and delete contacts",
            "Search and filter functionality",
            "Organized contact storage",
            "Clean and simple interface",
        ],
        technologies: ["Python", "MySQL"],
        githubUrl: "https://github.com/nandhu0424/ContactManagement",
        liveUrl: "#",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop",
        status: "completed",
    },
];

// --- Certifications ---
export const certifications = [
    {
        name: "Programming in Java",
        organization: "NPTEL",
        score: "75%",
        achievement: "Top 5%",
        certificateUrl: "https://drive.google.com/file/d/1-qTUEaZmp5GZRmmBsf85Tk5h9ktOlFan/view",
    },
    {
        name: "The Joy of Computing Using Python",
        organization: "NPTEL",
        score: "94%",
        achievement: "Top 5%",
        certificateUrl: "https://drive.google.com/file/d/1oL1s64LeyGqTyiQ2eTqccCnPEnmudAf3/view",
    },
    {
        name: "EBPL",
        organization: "Naan Mudhalvan / Tamil Nadu Skill",
        certificateUrl: "https://drive.google.com/file/d/1D2AX9hh3k7zrb0yhp4U-CvUNikVOqzS5/view",
    },
    {
        name: "Node.js and REST API",
        organization: "Naan Mudhalvan / Tamil Nadu Skill",
        certificateUrl: "https://drive.google.com/file/d/1i2eUwYq7lHPbpSVpa6GYQK68Ank623eH/view",
    },
    {
        name: "Cloud Engineering",
        organization: "Naan Mudhalvan / Tamil Nadu Skill",
        certificateUrl: "https://drive.google.com/file/d/1zTOcyQtYipQS1ztEgcQAW1RrZaxGad_2/view",
    },
    {
        name: "Introduction to IBM Cognos Analytics",
        organization: "IBM Career Education Program",
        certificateUrl: "https://drive.google.com/file/d/18ni-Xu5Y0cDS5dcojO7fzTwNOd20aZ3P/view",
    },
];

// --- Achievements ---
export const achievements = [
    {
        title: "GATE 2026",
        icon: "https://em-content.zobj.net/source/apple/391/trophy_1f3c6.png",
        details: [
            { label: "Score", value: "522" },
            { label: "Marks", value: "44.69 / 100" },
            { label: "All India Rank", value: "6271" },
            { label: "Candidates Appeared", value: "2,11,020" },
            { label: "Approx. Percentile", value: "~97.03%*" },
        ],
        note: "* Percentile is approximate, calculated from the supplied rank and total candidates appeared.",
        description:
            "Qualified GATE 2026 with a score of 522, securing All India Rank 6271 out of 2,11,020 candidates — approximately 97.03 percentile.",
    },
    {
        title: "DharmaHack — 3rd Place",
        icon: "https://em-content.zobj.net/source/apple/391/3rd-place-medal_1f949.png",
        details: [
            { label: "Event", value: "DharmaHack" },
            { label: "Duration", value: "8-Hour Hackathon" },
            { label: "Venue", value: "Govt. College of Engineering, Dharmapuri" },
            { label: "Team", value: "The Exceptions" },
            { label: "Year", value: "2026" },
        ],
        description:
            "Secured 3rd place at DharmaHack, an 8-hour hackathon held at Government College of Engineering, Dharmapuri, competing as part of team 'The Exceptions'.",
    },
    {
        title: "OpenPools Doppelganger — 3rd Rank",
        icon: "https://em-content.zobj.net/source/apple/391/3rd-place-medal_1f949.png",
        details: [
            { label: "Event", value: "Doppelganger — OpenPools Build Sprint" },
            { label: "Duration", value: "30-Hour Collaborative Sprint" },
            { label: "Team", value: "The Exceptions" },
            { label: "Year", value: "2026" },
        ],
        description:
            "Achieved 3rd place for securing a top rank in Doppelganger, the OpenPools collaborative 30-hour build sprint, as part of team 'The Exceptions'.",
    },
];

// --- Hackathons ---
export const hackathons = [
    {
        name: "DharmaHack",
        position: "3rd Place",
        duration: "8 Hours",
        institution: "Government College of Engineering, Dharmapuri",
        team: "The Exceptions",
        year: "2026",
        certificateUrl: "#",
    },
    {
        name: "OpenPools Doppelganger",
        position: "3rd Rank",
        duration: "30-Hour Build Sprint",
        event: "OpenPools Collaborative Build Sprint",
        team: "The Exceptions",
        year: "2026",
        certificateUrl: "#",
    },
];

// --- Interests ---
export const interests = [
    { name: "Listening to Music", icon: "🎵" },
    { name: "Playing Outdoor Games", icon: "⚽" },
    { name: "Gardening", icon: "🌱" },
];
