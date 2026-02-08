// Mock data for Android Developer Portfolio

export const portfolioData = {
  personal: {
    name: "Alex Chen",
    title: "Android Developer",
    tagline: "Crafting seamless mobile experiences with Kotlin & Jetpack Compose",
    email: "alex.chen@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    github: "https://github.com/alexchen",
    linkedin: "https://linkedin.com/in/alexchen",
    portfolio: "https://alexchen.dev"
  },

  skills: [
    {
      id: 1,
      category: "Languages",
      items: ["Kotlin", "Java", "Python", "XML"]
    },
    {
      id: 2,
      category: "Android Frameworks",
      items: ["Jetpack Compose", "Android SDK", "Material Design", "ViewModel", "LiveData", "Room Database"]
    },
    {
      id: 3,
      category: "Architecture",
      items: ["MVVM", "MVI", "Clean Architecture", "Repository Pattern"]
    },
    {
      id: 4,
      category: "Tools & Libraries",
      items: ["Android Studio", "Git", "Gradle", "Retrofit", "Coroutines", "Hilt/Dagger", "Firebase"]
    },
    {
      id: 5,
      category: "Testing",
      items: ["JUnit", "Espresso", "Mockito", "UI Automator"]
    },
    {
      id: 6,
      category: "Other",
      items: ["REST APIs", "GraphQL", "CI/CD", "Agile/Scrum"]
    }
  ],

  projects: [
    {
      id: 1,
      name: "FitTrack Pro",
      description: "Comprehensive fitness tracking app with workout plans, calorie counter, and progress analytics",
      tech: ["Kotlin", "Jetpack Compose", "Room", "Firebase"],
      features: ["Custom workout builder", "Real-time sync", "Material Design 3"],
      downloads: "10K+",
      rating: 4.7
    },
    {
      id: 2,
      name: "TaskFlow",
      description: "Productivity app with task management, reminders, and team collaboration features",
      tech: ["Kotlin", "MVVM", "Coroutines", "Hilt"],
      features: ["Offline-first architecture", "Push notifications", "Dark mode support"],
      downloads: "25K+",
      rating: 4.5
    },
    {
      id: 3,
      name: "WeatherNow",
      description: "Beautiful weather app with hourly forecasts, weather alerts, and location-based updates",
      tech: ["Kotlin", "Retrofit", "OpenWeather API", "Jetpack Compose"],
      features: ["7-day forecast", "Weather widgets", "Animated weather icons"],
      downloads: "50K+",
      rating: 4.8
    },
    {
      id: 4,
      name: "BudgetWise",
      description: "Personal finance manager with expense tracking, budgets, and financial insights",
      tech: ["Kotlin", "Room Database", "MPAndroidChart", "Biometric Auth"],
      features: ["Expense categorization", "Budget alerts", "Data visualization"],
      downloads: "15K+",
      rating: 4.6
    }
  ],

  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      year: "2018 - 2022",
      gpa: "3.8/4.0",
      highlights: ["Mobile Development Track", "Dean's List (4 semesters)", "CS Honor Society"]
    },
    {
      id: 2,
      degree: "Android Developer Nanodegree",
      institution: "Udacity",
      year: "2021",
      highlights: ["Advanced Android Development", "Capstone Project: Award Winner"]
    }
  ],

  certifications: [
    {
      id: 1,
      name: "Associate Android Developer",
      issuer: "Google",
      year: "2022"
    },
    {
      id: 2,
      name: "Kotlin for Android Developers",
      issuer: "JetBrains",
      year: "2021"
    }
  ],

  experience: [
    {
      id: 1,
      title: "Senior Android Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description: "Leading development of flagship Android apps serving 1M+ users",
      achievements: [
        "Migrated legacy Java codebase to Kotlin, reducing code size by 30%",
        "Implemented Jetpack Compose, improving UI development speed by 40%",
        "Mentored 3 junior developers in Android best practices"
      ]
    },
    {
      id: 2,
      title: "Android Developer Intern",
      company: "StartupHub",
      period: "2021 - 2022",
      description: "Developed features for mobile marketplace app",
      achievements: [
        "Built product catalog with infinite scroll and caching",
        "Integrated payment gateway with security best practices",
        "Achieved 99.9% crash-free rate"
      ]
    }
  ]
};
