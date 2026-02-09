export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  detail?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "iOS Fitness Tracker",
    description: "Sağlık ve fitness takibi için geliştirilmiş modern bir iOS uygulaması.",
    tech: ["SwiftUI", "HealthKit", "Core Data"],
    github: "#",
    live: "#",
    detail: "#",
  },
  {
    id: "2",
    title: "AI PDF Summarizer",
    description: "PDF dosyalarını AI ile özetleyen web uygulaması.",
    tech: ["Next.js", "TypeScript", "AI API"],
    github: "#",
    live: "#",
    detail: "#",
  },
  {
    id: "3",
    title: "Task & Habit App",
    description: "Görev ve alışkanlık takibi için kullanıcı dostu mobil uygulama.",
    tech: ["SwiftUI", "Firebase", "CloudKit"],
    github: "#",
    live: "#",
    detail: "#",
  },
  {
    id: "4",
    title: "Portfolio v1",
    description: "Modern ve responsive kişisel portfolio web sitesi.",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    github: "#",
    live: "#",
    detail: "#",
  },
  {
    id: "5",
    title: "E-Commerce iOS App",
    description: "Mobil e-ticaret deneyimi için geliştirilmiş iOS uygulaması.",
    tech: ["SwiftUI", "StoreKit", "Combine"],
    github: "#",
    live: "#",
    detail: "#",
  },
  {
    id: "6",
    title: "AI Chat Assistant",
    description: "Yapay zeka destekli sohbet asistanı web uygulaması.",
    tech: ["Next.js", "OpenAI API", "WebSockets"],
    github: "#",
    live: "#",
    detail: "#",
  },
];
