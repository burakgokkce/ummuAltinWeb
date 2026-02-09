import { Instagram, Linkedin, Github, Twitter, Mail } from "lucide-react";

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const socialLinks: SocialLink[] = [
  {
    id: "instagram",
    name: "Instagram",
    url: "https://instagram.com",
    icon: Instagram,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com",
    icon: Github,
  },
  {
    id: "twitter",
    name: "X (Twitter)",
    url: "https://twitter.com",
    icon: Twitter,
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:example@email.com",
    icon: Mail,
  },
];
