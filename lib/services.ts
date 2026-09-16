// Services data

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  process: string[];
  applications: string[];
  relatedProducts: string[];
  faq: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "fire-alarm-system-installation",
    name: "Fire Alarm System Installation",
    shortDescription:
      "Design, supply and installation of conventional and addressable fire alarm systems for all building types.",
    description:
      "Complete fire alarm system installation from initial site survey through design, supply, installation, commissioning and handover. We install both conventional and addressable fire alarm systems tailored to your building's specific requirements, occupancy type and fire risk profile.",
    icon: "Bell",
    features: [
      "Free site survey and risk assessment",
      "System design to BS 5839 / EN 54 standards",
      "Conventional and addressable panel installation",
      "Detector, sounder and call point installation",
      "Full system commissioning and testing",
      "Operator training and documentation",
      "Handover certificates and as-built drawings",
      "Ongoing maintenance contracts available",
    ],
    process: [
      "Initial consultation and site survey",
      "Fire risk assessment and system design",
      "Quotation and specification approval",
      "Installation and cable management",
      "System commissioning and integration testing",
      "Client training and documentation handover",
      "After-sales support and maintenance",
    ],
    applications: [
      "Offices and commercial buildings",
      "Hotels and hospitality",
      "Hospitals and healthcare",
      "Warehouses and storage",
      "Industrial facilities",
      "Educational institutions",
    ],
    relatedProducts: ["addressable-fire-alarm-panel", "optical-smoke-detector"],
    faq: [
      {
        question: "How long does a fire alarm installation take?",
        answer:
          "Installation time depends on building size and system complexity. A small commercial premises may take 1–2 days, while a large industrial facility or multi-storey building may require 1–3 weeks. We provide a detailed timeline during the quotation phase.",
      },
      {
        question: "What is the difference between conventional and addressable systems?",
        answer:
          "Conventional systems divide a building into zones — when an alarm triggers, you know the zone but not the exact device. Addressable systems identify each individual device by address, allowing precise location identification and faster response. Addressable systems also offer advanced features like drift compensation and cause-and-effect programming.",
      },
      {
        question: "Do you provide maintenance after installation?",
        answer:
          "Yes. We offer comprehensive maintenance contracts including weekly, monthly and annual testing schedules to keep your fire alarm system fully operational and compliant with local and international standards.",
      },
    ],
  },
  {
    slug: "fire-detection-system",
    name: "Fire Detection System",
    shortDescription:
      "Advanced smoke, heat and multi-sensor detection solutions for early warning across all environments.",
    description:
      "Comprehensive fire detection system design and installation using the latest detection technologies. From point-type detectors to beam detectors and aspirating smoke detection, we specify and install the right detection solution for your environment — whether it is a clean office, a dusty warehouse or a high-temperature industrial process area.",
    icon: "ScanEye",
    features: [
      "Point-type smoke and heat detectors",
      "Multi-sensor detectors (optical + thermal)",
      "Beam detectors for large open spaces",
      "Aspirating smoke detection (ASD) for early warning",
      "Gas detection systems",
      "Integration with fire alarm panels",
    ],
    process: [
      "Environmental assessment and hazard analysis",
      "Detection technology selection",
      "System design and device placement",
      "Installation and wiring",
      "Sensitivity calibration and testing",
      "Commissioning and documentation",
    ],
    applications: [
      "Warehouses and logistics",
      "Manufacturing plants",
      "Server rooms and data centres",
      "Heritage buildings",
      "Atrium and open-plan spaces",
    ],
    relatedProducts: ["optical-smoke-detector", "addressable-fire-alarm-panel"],
    faq: [
      {
        question: "Which type of smoke detector is best for my building?",
        answer:
          "The best detector depends on the environment. Optical smoke detectors suit offices and hotels. Heat detectors suit kitchens and garages. Multi-sensor detectors offer the best false-alarm resistance for most commercial buildings. We recommend the right type during our site survey.",
      },
      {
        question: "How many detectors do I need?",
        answer:
          "Detector spacing follows BS 5839-1 guidelines. A typical office requires one detector per 37.5m² of floor area. We calculate the exact number during the design phase based on your building layout, ceiling height and fire risk.",
      },
    ],
  },
  {
    slug: "fire-fighting-system",
    name: "Fire Fighting System",
    shortDescription:
      "Complete fire fighting system design, supply and installation — hydrant systems, hose reels and standing columns.",
    description:
      "Design and installation of fire hydrant systems, hose reel systems, fire water tanks, fire pumps and standing columns for building fire fighting capability. Our systems ensure adequate water supply, pressure and coverage for effective fire response in compliance with local fire service requirements.",
    icon: "FlameKindling",
    features: [
      "Fire hydrant system design and installation",
      "Internal and external hydrant networks",
      "Fire hose reel systems",
      "Fire water tank design (underground and overhead)",
      "Fire pump selection and installation",
      "Standing column and landing valve installation",
    ],
    process: [
      "Hydraulic calculation and system design",
      "Pipe network and pump specification",
      "Tank and pump room design",
      "Supply and installation",
      "Pressure testing and commissioning",
      "Documentation and training",
    ],
    applications: [
      "Industrial complexes",
      "Commercial buildings",
      "Warehouses and logistics",
      "Multi-storey residential",
      "Institutional buildings",
    ],
    relatedProducts: ["fire-hose-accessories", "fire-fighting-equipment"],
    faq: [
      {
        question: "What water tank capacity is required?",
        answer:
          "Water tank capacity depends on the building type, fire risk and local fire service requirements. A typical commercial building in Dhaka may require 50,000–200,000 litres. We calculate the exact requirement based on your building's fire flow demand and duration.",
      },
    ],
  },
  {
    slug: "fire-suppression-system",
    name: "Fire Suppression System",
    shortDescription:
      "Automatic suppression — sprinkler, gaseous and specialist systems for occupied spaces and critical assets.",
    description:
      "Automatic fire suppression system design, supply, installation and commissioning. We provide wet and dry sprinkler systems, pre-action and deluge systems, and gaseous suppression including FM-200, Novec 1230, CO2 and inert gas systems for server rooms, archives, museums, industrial processes and occupied spaces.",
    icon: "Droplets",
    features: [
      "Wet and dry sprinkler systems",
      "Pre-action and deluge systems",
      "FM-200 (HFC-227ea) gaseous suppression",
      "Novec 1230 clean agent systems",
      "CO2 flooding systems",
      "Kitchen hood suppression",
      "Hydraulic design and calculations",
      "System integrity monitoring",
    ],
    process: [
      "Risk assessment and suppression strategy",
      "System type selection and design",
      "Hydraulic or pneumatic calculations",
      "Supply and installation",
      "Pressure testing and commissioning",
      "Training and documentation",
    ],
    applications: [
      "Server rooms and data centres",
      "Archives and museums",
      "Kitchens and food service",
      "Industrial process areas",
      "Occupied commercial spaces",
    ],
    relatedProducts: ["wet-pipe-sprinkler-system"],
    faq: [
      {
        question: "What is the best suppression system for a server room?",
        answer:
          "For server rooms, clean agent systems like FM-200 or Novec 1230 are preferred because they extinguish fires without water and leave no residue, protecting sensitive electronic equipment. CO2 is effective but not suitable for occupied spaces due to safety concerns.",
      },
    ],
  },
  {
    slug: "fire-safety-inspection",
    name: "Fire Safety Inspection",
    shortDescription:
      "Comprehensive fire safety audits and inspections to identify risks and ensure regulatory compliance.",
    description:
      "Professional fire safety inspection and audit service covering fire risk assessment, emergency escape route evaluation, fire protection system condition survey, housekeeping review and compliance check against local and international fire safety standards.",
    icon: "ClipboardCheck",
    features: [
      "Comprehensive fire risk assessment",
      "Emergency escape route evaluation",
      "Fire protection system condition survey",
      "Fire safety housekeeping review",
      "Compliance gap analysis",
      "Prioritised remedial action report",
      "Follow-up verification inspection",
    ],
    process: [
      "Document review and pre-assessment",
      "On-site inspection and testing",
      "Risk scoring and gap analysis",
      "Detailed report with recommendations",
      "Remedial action support",
      "Follow-up verification",
    ],
    applications: [
      "All building types and occupancies",
      "Pre-occupancy inspections",
      "Annual compliance audits",
      "Insurance requirement surveys",
      "Post-incident investigations",
    ],
    relatedProducts: [],
    faq: [
      {
        question: "How often should a fire safety inspection be conducted?",
        answer:
          "Fire safety inspections should be conducted at least annually for most buildings. High-risk environments such as factories, warehouses and hotels may require more frequent inspections — quarterly or semi-annually. We recommend an inspection schedule based on your specific fire risk profile.",
      },
    ],
  },
  {
    slug: "fire-safety-maintenance",
    name: "Fire Safety Maintenance",
    shortDescription:
      "Planned preventive maintenance for all fire protection systems — keeping your systems operational and compliant.",
    description:
      "Scheduled preventive maintenance programs for fire alarm systems, suppression systems, extinguishers, hydrant systems and emergency lighting. Our maintenance contracts ensure your fire safety equipment remains fully operational, correctly calibrated and compliant with service requirements.",
    icon: "Wrench",
    features: [
      "Scheduled preventive maintenance",
      "Emergency call-out service",
      "Fire extinguisher servicing and refilling",
      "Fire alarm system testing and calibration",
      "Sprinkler system inspection",
      "Emergency lighting testing",
      "Maintenance records and certificates",
      "Spare parts and replacement stock",
    ],
    process: [
      "Maintenance schedule agreement",
      "Planned site visits",
      "Testing, inspection and calibration",
      "Minor repairs and adjustments",
      "Replacement recommendations",
      "Maintenance reports and certificates",
    ],
    applications: [
      "All fire protection systems",
      "Commercial buildings",
      "Industrial facilities",
      "Institutional buildings",
    ],
    relatedProducts: [],
    faq: [
      {
        question: "What does a fire safety maintenance contract include?",
        answer:
          "A typical maintenance contract covers all fire protection systems on your premises — fire alarm testing, extinguisher servicing, sprinkler inspection, emergency lighting checks and hydrant system testing. Visit frequency and scope are agreed during contract setup based on your system inventory and risk level.",
      },
    ],
  },
  {
    slug: "fire-protection-design",
    name: "Fire Protection System Design",
    shortDescription:
      "Engineering design for fire detection, suppression and fire fighting systems — from concept to construction.",
    description:
      "Professional fire protection engineering design services. Our engineers design fire detection layouts, suppression system hydraulics, hydrant networks, smoke management systems and evacuation strategies. We work with architects, developers and contractors from concept design through construction to commissioning.",
    icon: "Ruler",
    features: [
      "Fire detection system layout design",
      "Suppression system hydraulic calculations",
      "Hydrant network design",
      "Smoke management system design",
      "Evacuation strategy planning",
      "Authority submission drawings",
      "Construction-phase site support",
      "As-built documentation",
    ],
    process: [
      "Design brief and risk assessment review",
      "Concept design and authority consultation",
      "Detailed design and calculations",
      "Authority submission and approval",
      "Construction-phase support",
      "Commissioning and handover documentation",
    ],
    applications: [
      "New building developments",
      "Major refurbishments",
      "Industrial projects",
      "Institutional buildings",
    ],
    relatedProducts: [],
    faq: [
      {
        question: "Do you work with architects and developers?",
        answer:
          "Yes. We collaborate with architects, structural engineers, MEP consultants and developers from the earliest design stages. This ensures fire protection systems are integrated into the building design rather than retrofitted, resulting in better performance and lower cost.",
      },
    ],
  },
  {
    slug: "fire-safety-consultancy",
    name: "Fire Safety Consultancy",
    shortDescription:
      "Expert fire safety consultancy — risk assessment, compliance strategy and system specification.",
    description:
      "Independent fire safety consultancy services for building owners, developers, architects and facility managers. We provide fire risk assessments, compliance strategies, system specifications, tender support and expert guidance on meeting local and international fire safety requirements.",
    icon: "BookOpen",
    features: [
      "Fire risk assessment and strategy",
      "Regulatory compliance guidance",
      "System specification and tender documents",
      "Design review and peer assessment",
      "Insurance liaison support",
      "Ongoing advisory retainer",
    ],
    process: [
      "Initial briefing and document review",
      "Risk assessment and gap analysis",
      "Strategy development and recommendations",
      "Specification and tender support",
      "Implementation oversight",
      "Ongoing advisory support",
    ],
    applications: [
      "New developments and refurbishments",
      "Regulatory compliance projects",
      "Insurance requirements",
      "Multi-site portfolio management",
    ],
    relatedProducts: [],
    faq: [
      {
        question: "When do I need fire safety consultancy?",
        answer:
          "Fire safety consultancy is valuable at any stage — during new building design, before a major refurbishment, when expanding or changing building use, for regulatory compliance, insurance requirements, or when you need an independent assessment of your existing fire safety arrangements.",
      },
    ],
  },
];

// Helper to get a single service
export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
