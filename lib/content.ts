// Projects, clients, certifications data

export interface Project {
  slug: string;
  name: string;
  location: string;
  industry: string;
  scope: string;
  description: string;
  image: string;
  services: string[];
  products: string[];
}

export const projects: Project[] = [
  // [PROJECT PLACEHOLDER — Client Content Required]
  // Example project structure:
  // {
  //   slug: "example-factory-fire-alarm",
  //   name: "Example Factory Fire Alarm Installation",
  //   location: "Gazipur, Bangladesh",
  //   industry: "Manufacturing",
  //   scope: "Design, supply and installation of addressable fire alarm system for a 50,000 sq ft factory complex.",
  //   description: "Complete fire alarm system covering production floor, warehouse, offices and external areas. Installed 180 addressable devices across 4 loops with central monitoring.",
  //   image: "/projects/example.jpg",
  //   services: ["Fire Alarm System Installation", "Fire Detection System"],
  //   products: ["addressable-fire-alarm-panel", "optical-smoke-detector"],
  // },
];

export interface Client {
  name: string;
  logo: string;
  industry: string;
}

// [CLIENT LOGOS — Client Assets Required]
export const clients: Client[] = [];

export interface Partner {
  name: string;
  logo: string;
  type: string;
}

// [PARTNER LOGOS — Client Assets Required]
export const partners: Partner[] = [];

export interface Certification {
  name: string;
  issuer: string;
  description: string;
  image: string;
}

// [CERTIFICATIONS — Client Verification Required]
export const certifications: Certification[] = [];

export interface Resource {
  slug: string;
  title: string;
  type: "guide" | "brochure" | "datasheet" | "checklist";
  description: string;
  downloadUrl?: string;
  image: string;
}

export const resources: Resource[] = [
  // [RESOURCES — Client Content Required]
];

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedDate: string;
  updatedDate: string;
  category: string;
  readingTime: string;
  image: string;
  faq: { question: string; answer: string }[];
  relatedProducts: string[];
  relatedServices: string[];
}

export const blogPosts: BlogPost[] = [
  // [BLOG POSTS — Client Content Required]
];
