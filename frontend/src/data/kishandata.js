// Mock data for Android Developer Portfolio

export const portfolioData = {
  personal: {
    name: "Kishan Rana Ghosh",
    title: "Mobile & Backend Developer",
    tagline:
      "Crafting seamless mobile experiences with Kotlin, Jetpack Compose, and scalable backend solutions.",
    email: "kishanghosh090@gmail.com",
    phone: "+91 9635859574",
    location: "Malda, West Bengal, India",
    github: "https://github.com/kishanghosh090",
    linkedin: "https://www.linkedin.com/in/kishan-rana-ghosh-8b95832b9",
    portfolio: "https://kishanranaghosh.xyz",
    leetcode: "https://leetcode.com/u/KishanRanaGhosh2005",
    resume: "../",
  },

  skills: [
    {
      id: 1,
      category: "Languages",
      items: ["Kotlin", "Java", "Python", "Type Script", "Go"],
    },
    {
      id: 2,
      category: "Android Frameworks & Libraries",
      items: [
        "Jetpack Compose",
        "Android SDK",
        "Material Design",
        "ViewModel",
        "Room Database",
        "React Native",
        "Expo",
      ],
    },
    {
      id: 2.1,
      category: "Web Frameworks & Libraries",
      items: ["React", "Express.js", "Next.js", "GraphQL"],
    },
    {
      id: 3,
      category: "Architecture",
      items: ["MVVM", "MVI", "Clean Architecture", "Repository Pattern"],
    },
    {
      id: 4,
      category: "Tools & Libraries",
      items: [
        "Android Studio",
        "Git",
        "Gradle",
        "Firebase",
        "Docker",
        "Kubernetes",
        "Postman",
      ],
    },
    {
      id: 5,
      category: "Testing",
      items: ["JUnit", "Espresso", "Mockito", "UI Automator"],
    },
    {
      id: 6,
      category: "Other",
      items: ["REST APIs", "CI/CD"],
    },
  ],

  projects: [
    {
      id: 1,
      name: "Pathify",
      description:
        "Production-grade social media application with posts, real-time chat, notifications, and scalable backend architecture.",
      tech: [
        "Kotlin",
        "Jetpack Compose",
        "MVVM",
        "Clean Architecture",
        "Express",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "Socket.IO",
        "Firebase Cloud Messaging",
      ],
      features: [
        "JWT & OAuth authentication",
        "Real-time one-to-one chat",
        "Push notifications (FCM)",
        "Offline-first notification handling",
        "Posts, comments, and replies",
        "Follow system",
        "Scalable backend with queues",
      ],
      downloads: "In development",
      rating: "N/A",
    },
    {
      id: 2,
      name: "Media Pipeline SDK",
      description:
        "A powerful TypeScript SDK for media processing with support for image optimization, video transcoding, and HLS streaming. Published on NPM for production use.",
      tech: [
        "TypeScript",
        "Node.js",
        "FFmpeg",
        "Sharp",
        "HLS",
        "Video Processing",
      ],
      features: [
        "Image processing & optimization",
        "Video transcoding with quality presets",
        "HLS streaming generation",
        "Local & cloud storage support",
        "Flexible pipeline architecture",
        "Full TypeScript support",
        "Resolution management",
      ],
      downloads: "Published on NPM",
      rating: "npm",
      githubLink: "https://github.com/kishanghosh090/Media-Pipeline-sdk",
      documentationLink: "https://media-pipeline-sdk-docs.vercel.app",
      npmLink: "https://www.npmjs.com/package/mediapipeline-sdk",
    },
    {
      id: 3,
      name: "Venthen",
      description:
        "A production-grade SaaS platform for universities and colleges. Venthen provides student management, attendance tracking, notices, events, academic workflows, and real-time communication through a scalable microservices architecture.",
      tech: [
        "TypeScript",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Drizzle ORM",
        "Redis",
        "BullMQ",
        "Socket.IO",
        "Docker",
        "Kubernetes",
        "React Native",
        "Expo",
        "FCM",
      ],
      features: [
        "Multi-tenant university management",
        "Role-based access control (Super Admin, University Admin, Faculty, Student)",
        "Student attendance management",
        "Real-time notice & announcement system",
        "In-app and push notifications",
        "One-to-one and group chat",
        "Event and academic calendar management",
        "Department and course management",
        "Microservices-ready architecture",
        "Scalable queue-based background processing",
        "Mobile-first experience for students and faculty",
      ],
      downloads: "In development",
      status: "In Development",
      rating: "SaaS",
      githubLink: "",
      liveLink: "",
      documentationLink: "",
    },
  ],
  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Data Science and Applications",
      institution: "Indian Institute of Technology Madras",
      year: "2024 - Present",
      gpa: "7.5/10.0",
      highlights: [
        "Core coursework in Computer Science and Data Science",
        "Strong foundation in programming and problem-solving",
        "Hands-on projects in full-stack and Android development",
      ],
    },
  ],

  certifications: [
    {
      // id: 1,
      name: "coming soon",
      // issuer: "Google",
      // year: "2022",
    },
    // {
    //   id: 2,
    //   name: "Kotlin for Android Developers",
    //   issuer: "JetBrains",
    //   year: "2021",
    // },
  ],

  experience: [
    {
      id: 1,
      title: "Web Developer Intern",
      company: "Blogrator Web Service",
      period: "2025 - present",
      description:
        "Worked on building and improving web applications with a focus on frontend development and backend integration.",
      achievements: [
        "Developed responsive web pages using modern JavaScript frameworks",
        "Integrated REST APIs and handled client-side data flow",
        "Collaborated with designers and backend developers to deliver features on time",
      ],
    },
  ],
};
