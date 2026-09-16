// Projects, clients, certifications data — Updated from Fire Safe BD company profile

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
  {
    slug: "police-headquarters-nccom",
    name: "Police Headquarter (NCCOM Building, 20 Stories)",
    location: "Dhaka",
    industry: "Government",
    scope: "Supply, Installation & Commissioning of Fire Hydrant, Sprinkler and Detection & Alarm System work.",
    description: "Complete fire protection system for a 20-story government building including hydrant, sprinkler, detection and alarm systems.",
    image: "/projects/police-hq.jpg",
    services: ["Fire Hydrant & Sprinkler Systems", "Fire Detection Systems"],
    products: [],
  },
  {
    slug: "dhaka-university-faculty-social-sciences",
    name: "Dhaka University — Faculty of Social Sciences",
    location: "Dhaka",
    industry: "Education",
    scope: "Fire Hydrant System, Fire Detection System, Pump Room Civil Work.",
    description: "Fire hydrant and detection system installation for one of Bangladesh's most prestigious university faculties.",
    image: "/projects/du-social-sciences.jpg",
    services: ["Fire Hydrant & Sprinkler Systems", "Fire Detection Systems"],
    products: [],
  },
  {
    slug: "bangladesh-power-development-board",
    name: "Bangladesh Power Development Board Head Office",
    location: "Dhaka",
    industry: "Government / Utilities",
    scope: "Supply, Installation & Commissioning of Fire Hydrant, Sprinkler, Fire Door, Detection & Alarm System work.",
    description: "Complete fire protection for BPDB headquarters — hydrant, sprinkler, fire doors and detection systems.",
    image: "/projects/bpdb.jpg",
    services: ["Fire Hydrant & Sprinkler Systems", "Fire Detection Systems", "Fire Door Supply"],
    products: [],
  },
  {
    slug: "islami-bank-hospital-rajshahi",
    name: "Islami Bank Hospital — Rajshahi & Luxmipur",
    location: "Rajshahi, Luxmipur",
    industry: "Healthcare",
    scope: "Fire Hydrant System, Fire Detection System Work & NOC with Fire Safety Plan.",
    description: "Fire protection systems for Islami Bank Foundation hospitals including NOC and fire safety plan documentation.",
    image: "/projects/ibh-rajshahi.jpg",
    services: ["Fire Hydrant & Sprinkler Systems", "Fire Detection Systems", "Fire Safety Consultancy"],
    products: [],
  },
  {
    slug: "assure-johora-square-gulshan",
    name: "Assure Johora Square — Gulshan, Dhaka",
    location: "Gulshan, Dhaka",
    industry: "Residential / Commercial",
    scope: "Fire Hydrant System, Fire Detection System Work & NOC with Fire Safety Plan.",
    description: "Fire protection for a premium residential and commercial development in Gulshan.",
    image: "/projects/assure-johora.jpg",
    services: ["Fire Hydrant & Sprinkler Systems", "Fire Detection Systems"],
    products: [],
  },
  {
    slug: "rupayan-harmony-dhanmondi",
    name: "Rupayan Harmony — Dhanmondi, Dhaka",
    location: "Dhanmondi, Dhaka",
    industry: "Residential",
    scope: "Fire Hydrant System, Fire Detection System Work, NOC with Fire Safety Plan.",
    description: "Fire hydrant and detection system for Rupayan Housing Estate's residential tower in Dhanmondi.",
    image: "/projects/rupayan-harmony.jpg",
    services: ["Fire Hydrant & Sprinkler Systems", "Fire Detection Systems"],
    products: [],
  },
  {
    slug: "sheikh-hasina-medical-hospital-jamalpur",
    name: "Sheikh Hasina Medical Hospital & College — Jamalpur",
    location: "Jamalpur",
    industry: "Healthcare",
    scope: "Fire Hydrant System, Fire Detection System Work.",
    description: "Fire protection systems for a major medical hospital and college complex.",
    image: "/projects/sheikh-hasina-hospital.jpg",
    services: ["Fire Hydrant & Sprinkler Systems", "Fire Detection Systems"],
    products: [],
  },
  {
    slug: "khulna-225mw-power-plant",
    name: "Khulna 225MW Power Plant",
    location: "Khalishpur, Khulna",
    industry: "Power / Energy",
    scope: "Fire Suppression System, Fire Hydrant System, Fire Detection System Work.",
    description: "Complete fire protection for a 225MW power plant including suppression, hydrant and detection systems.",
    image: "/projects/khulna-power.jpg",
    services: ["Fire Suppression Systems", "Fire Hydrant & Sprinkler Systems", "Fire Detection Systems"],
    products: [],
  },
  {
    slug: "metrocem-group",
    name: "Metrocem Group — Metrocem Cement & Steel",
    location: "Dhaka",
    industry: "Industrial / Manufacturing",
    scope: "Supply, Installation & Commissioning of Fire Hydrant, Sprinkler, Fire Door, Detection & Alarm, LPS System work.",
    description: "Comprehensive fire protection for Metrocem's cement and steel operations including LPS.",
    image: "/projects/metrocem.jpg",
    services: ["Fire Hydrant & Sprinkler Systems", "Fire Detection Systems", "Fire Door Supply", "Lightning Protection System"],
    products: [],
  },
  {
    slug: "eastern-bank-head-office",
    name: "Eastern Bank Limited — Head Office, Gulshan",
    location: "Gulshan, Dhaka",
    industry: "Banking / Finance",
    scope: "Fire Hydrant installation in Gulshan Branch. Fire extinguisher supply and refilling of all branches and ATMs in Bangladesh.",
    description: "Fire hydrant installation and nationwide extinguisher maintenance for Eastern Bank.",
    image: "/projects/ebl.jpg",
    services: ["Fire Hydrant & Sprinkler Systems", "Fire Extinguisher Supply & Installation", "AMC & Troubleshooting"],
    products: [],
  },
  {
    slug: "bgb-headquarters",
    name: "BGB Head Quarter — Dhaka",
    location: "Dhaka",
    industry: "Government / Military",
    scope: "Fire Hydrant System, Fire Detection System Work & NOC with Fire Safety Plan.",
    description: "Fire protection for Bangladesh Border Guard headquarters.",
    image: "/projects/bgb.jpg",
    services: ["Fire Hydrant & Sprinkler Systems", "Fire Detection Systems"],
    products: [],
  },
  {
    slug: "alliance-properties-baridhara",
    name: "Alliance Properties — The Alliance Building, Baridhara",
    location: "Baridhara, Dhaka",
    industry: "Residential / Commercial",
    scope: "Fire Hydrant System, Fire Detection System Work.",
    description: "Fire hydrant and detection system for Alliance Properties' premium building in Baridhara.",
    image: "/projects/alliance-baridhara.jpg",
    services: ["Fire Hydrant & Sprinkler Systems", "Fire Detection Systems"],
    products: [],
  },
];

export interface Client {
  name: string;
  logo: string;
  industry: string;
}

export const clients: Client[] = [
  { name: "Police Headquarter (NCCOM)", logo: "", industry: "Government" },
  { name: "Dhaka University", logo: "", industry: "Education" },
  { name: "Bangladesh Power Development Board", logo: "", industry: "Government" },
  { name: "Islami Bank Foundation", logo: "", industry: "Healthcare" },
  { name: "Eastern Bank Limited", logo: "", industry: "Banking" },
  { name: "Rupali Bank Limited", logo: "", industry: "Banking" },
  { name: "Rupayan Housing Estate", logo: "", industry: "Real Estate" },
  { name: "Assure Group", logo: "", industry: "Real Estate" },
  { name: "Alliance Properties", logo: "", industry: "Real Estate" },
  { name: "Metrocem Group", logo: "", industry: "Industrial" },
  { name: "BGB (Bangladesh Border Guard)", logo: "", industry: "Military" },
  { name: "Khulna 225MW Power Plant", logo: "", industry: "Power" },
  { name: "IGLOO Ice Cream (Abdul Monem Group)", logo: "", industry: "FMCG" },
  { name: "Central Hospital Limited", logo: "", industry: "Healthcare" },
  { name: "Checkpoint System Bangladesh", logo: "", industry: "Technology" },
  { name: "Navana LPG Ltd.", logo: "", industry: "Energy" },
  { name: "Crony Group", logo: "", industry: "Industrial" },
  { name: "Asia Composite Mill", logo: "", industry: "Manufacturing" },
  { name: "Fakir Apparels", logo: "", industry: "Garments" },
  { name: "Papilon Knit Apparels", logo: "", industry: "Garments" },
];

export interface Partner {
  name: string;
  logo: string;
  type: string;
}

export const partners: Partner[] = [];

export interface Certification {
  name: string;
  issuer: string;
  description: string;
  image: string;
}

export const certifications: Certification[] = [
  { name: "Trade License", issuer: "Dhaka South City Corporation", description: "TRAD/DSCC/27467 — Licensed to operate in Bangladesh", image: "" },
  { name: "VAT & TIN Registration", issuer: "Government of Bangladesh", description: "Compliant with financial laws of Bangladesh", image: "" },
  { name: "Fire Service & Civil Defence Membership", issuer: "Bangladesh FSCD", description: "Recognized and approved fire safety solutions provider", image: "" },
  { name: "IEB Certificate", issuer: "Institution of Engineers, Bangladesh", description: "Validating technical team's engineering standards", image: "" },
  { name: "REHAB Membership", issuer: "Real Estate & Housing Association of Bangladesh", description: "Close collaboration with reputed developers", image: "" },
  { name: "1st Class Combined Govt. Contractor License", issuer: "PWD Bangladesh", description: "License No. 1197, 2020-2021 — For government fire system work", image: "" },
];

export interface Resource {
  slug: string;
  title: string;
  type: "guide" | "brochure" | "datasheet" | "checklist";
  description: string;
  downloadUrl?: string;
  image: string;
}

export const resources: Resource[] = [];

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

export const blogPosts: BlogPost[] = [];
