// Mock data for Android Developer Portfolio

export const portfolioData = {
  personal: {
    name: "Kishan Rana Ghosh",
    title: "Android Developer",
    tagline:
      "Crafting seamless mobile experiences with Kotlin & Jetpack Compose",
    email: "kishanghosh090@gmail.com",
    phone: "+91 9635859574",
    location: "Malda, West Bengal, India",
    github: "https://github.com/kishanghosh090",
    linkedin: "https://www.linkedin.com/in/kishan-rana-ghosh-8b95832b9",
    portfolio: "https://kishanranaghosh.xyz",
    leetcode: "https://leetcode.com/u/KishanRanaGhosh2005"
  },

  skills: [
    {
      id: 1,
      category: "Languages",
      items: ["Kotlin", "Java", "Python", "Type Script"],
    },
    {
      id: 2,
      category: "Android Frameworks",
      items: [
        "Jetpack Compose",
        "Android SDK",
        "Material Design",
        "ViewModel",
        "Room Database",
      ],
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
        "Retrofit",
        "Coroutines",
        "Firebase",
        "Docker",
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
