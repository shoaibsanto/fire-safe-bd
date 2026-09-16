// Services data — Updated from Fire Safe BD company profile

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  process: string[];
  applications: string[];
  image: string;
  relatedProducts: string[];
  faq: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "fire-detection-systems",
    name: "Fire Detection Systems",
    shortDescription:
      "Addressable and conventional fire alarm systems using globally recognized brands like Apollo, C-TEC, Advanced, and Simplex.",
    description:
      "We offer cutting-edge addressable and conventional fire alarm systems using globally recognized brands like Apollo, C-TEC, Advanced, and Simplex. Our systems are designed to provide early warning and life safety across all building types — from offices and hotels to hospitals and industrial facilities.",
    icon: "ScanEye",
  image: "/images/services/fire-detection.jpg",
    features: [
      "Smoke detectors (optical and ionization)",
      "Heat detectors (rate-of-rise and fixed temperature)",
      "Flame detectors (IR, UV, IR3 for high-risk zones)",
      "Gas leak detectors for combustible gases",
      "Beam detectors for large open spaces",
      "Addressable and conventional control panels",
      "Manual call points, hooters and sirens",
      "Integration with HVAC, elevator recall and suppression systems",
    ],
    process: [
      "Fire risk assessment and site survey",
      "System design per NFPA 72 and BNBC",
      "Equipment supply from certified brands",
      "Installation and cable management",
      "System commissioning and integration testing",
      "Operator training and documentation",
      "Ongoing maintenance contracts",
    ],
    applications: [
      "Offices and commercial buildings",
      "Hotels and hospitality",
      "Hospitals and healthcare",
      "Factories and industrial facilities",
      "Warehouses and storage",
      "Educational institutions",
    ],
    relatedProducts: ["addressable-fire-alarm-panel", "optical-smoke-detector"],
    faq: [
      {
        question: "What brands of fire alarm systems do you offer?",
        answer: "We work with globally recognized brands including Apollo (UK), C-TEC (UK), Advanced, Simplex (USA), and Honeywell Notifier (USA). The choice depends on project size, budget and specific requirements.",
      },
      {
        question: "What is the difference between addressable and conventional systems?",
        answer: "Conventional systems divide a building into zones — when an alarm triggers, you know the zone but not the exact device. Addressable systems identify each individual device by address, allowing precise location identification and faster response. Addressable systems also offer advanced features like drift compensation and cause-and-effect programming.",
      },
    ],
  },
  {
    slug: "fire-suppression-systems",
    name: "Fire Suppression Systems",
    shortDescription:
      "Advanced suppression systems for data centres, control rooms and industrial environments — FM-200, NOVEC 1230, CO2 and dry chemical systems.",
    description:
      "We design and install advanced fire suppression systems suitable for data centres, control rooms, industrial environments and commercial spaces. Our systems include FM-200, NOVEC 1230, CO2 flooding, dry chemical systems and kitchen hood suppression — all compliant with NFPA 2001.",
    icon: "Droplets",
  image: "/images/services/fire-suppression.jpg",
    features: [
      "FM-200 (HFC-227ea) clean agent systems",
      "NOVEC 1230 clean agent systems",
      "CO2 flooding systems",
      "Dry chemical suppression systems",
      "Kitchen hood suppression systems",
      "Fast-acting, non-conductive and residue-free",
      "Safe for use around people and equipment",
      "NFPA 2001 compliant",
    ],
    process: [
      "Risk assessment and suppression strategy",
      "System type selection and design",
      "Hydraulic or pneumatic calculations",
      "Equipment supply and installation",
      "Pressure testing and commissioning",
      "Training and documentation",
    ],
    applications: [
      "Server rooms and data centres",
      "Control rooms and electrical rooms",
      "Industrial process areas",
      "Commercial kitchens",
      "Archives and museums",
    ],
    relatedProducts: ["wet-pipe-sprinkler-system"],
    faq: [
      {
        question: "What is the best suppression system for a server room?",
        answer: "For server rooms, clean agent systems like FM-200 or NOVEC 1230 are preferred because they extinguish fires without water and leave no residue, protecting sensitive electronic equipment. CO2 is effective but not suitable for occupied spaces due to safety concerns.",
      },
    ],
  },
  {
    slug: "fire-hydrant-sprinkler-systems",
    name: "Fire Hydrant & Sprinkler Systems",
    shortDescription:
      "Full design, supply, installation and commissioning of fire hydrant and automatic sprinkler systems as per NFPA and BNBC standards.",
    description:
      "We provide full design, supply, installation and commissioning of fire hydrant and automatic sprinkler systems as per NFPA and BNBC standards. Our systems include landing valves, fire hose reels, sprinkler heads, piping networks and zone control valves.",
    icon: "Droplets",
  image: "/images/services/sprinkler.jpg",
    features: [
      "Fire hydrant system design and installation",
      "Automatic sprinkler system installation",
      "Landing valves and fire hose reels",
      "Sprinkler heads (pendent, upright, sidewall, concealed)",
      "Piping network and zone control valves",
      "Fire pump system integration",
      "NFPA 13 and NFPA 20 compliant",
      "Complete commissioning and testing",
    ],
    process: [
      "Hydraulic calculation and system design",
      "Pipe network and pump specification",
      "Tank and pump room design",
      "Equipment supply and installation",
      "Pressure testing and commissioning",
      "Documentation and handover",
    ],
    applications: [
      "High-rise residential and commercial buildings",
      "Factories and industrial complexes",
      "Warehouses and logistics centres",
      "Hospitals and educational institutions",
      "Government and institutional buildings",
    ],
    relatedProducts: ["wet-pipe-sprinkler-system"],
    faq: [
      {
        question: "What standards do your hydrant and sprinkler systems follow?",
        answer: "All our hydrant and sprinkler systems are designed and installed in accordance with NFPA 13 (sprinkler systems), NFPA 20 (fire pumps), and BNBC (Bangladesh National Building Code) requirements.",
      },
    ],
  },
  {
    slug: "fire-extinguisher-supply",
    name: "Fire Extinguisher Supply & Installation",
    shortDescription:
      "Certified fire extinguishers for various risks — ABC, CO2, foam, water and clean agent types with fire blankets, buckets and accessories.",
    description:
      "We supply and install certified fire extinguishers suited for various risks and environments. All extinguishers are CE marked, pressure-tested and refillable with wall-mounting brackets. We also supply fire blankets, fire buckets, stands and boxes.",
    icon: "Flame",
  image: "/images/services/fire-extinguishers.jpg",
    features: [
      "ABC dry powder extinguishers",
      "CO2 (carbon dioxide) extinguishers",
      "Foam type extinguishers",
      "Water type extinguishers",
      "Clean agent type extinguishers",
      "Fire blankets, fire buckets, stands and boxes",
      "CE marked, pressure-tested and refillable",
      "Wall-mounting brackets included",
    ],
    process: [
      "Fire risk assessment for extinguisher placement",
      "Selection of correct extinguisher types and ratings",
      "Supply of certified equipment",
      "Professional installation at designated locations",
      "Staff training on extinguisher use",
      "Annual refilling and maintenance",
    ],
    applications: [
      "All commercial and industrial premises",
      "Offices, hotels and restaurants",
      "Factories and warehouses",
      "Schools, hospitals and public buildings",
      "Vehicles and transport",
    ],
    relatedProducts: ["abc-dry-chemical-extinguisher-6kg", "portable-co2-fire-extinguisher-5kg"],
    faq: [
      {
        question: "How often should fire extinguishers be serviced?",
        answer: "Fire extinguishers should be inspected monthly visually, serviced annually by a competent person, and hydrostatically tested according to the manufacturer's schedule (typically every 5-12 years depending on type). We offer complete AMC contracts for extinguisher maintenance.",
      },
    ],
  },
  {
    slug: "fire-pump-systems",
    name: "Fire Pump System Setup",
    shortDescription:
      "Complete fire pump solutions — diesel, electric and jockey pumps with UL/FM approved equipment and control panels.",
    description:
      "We provide complete fire pump solutions including diesel, electric and jockey pumps with control panels. Our services include design and sizing, supply of UL/FM approved pumps, installation and testing, and panel programming. All systems comply with NFPA 20.",
    icon: "Zap",
  image: "/images/services/fire-pumps.jpg",
    features: [
      "Electric and diesel engine driven pumps",
      "Jockey pumps for pressure maintenance",
      "UL/FM approved pump supply",
      "End suction, horizontal split case and vertical turbine pumps",
      "Complete controllers, pressure sensors and test lines",
      "Design and sizing per NFPA 20",
      "Panel programming and automation",
      "Installation, testing and commissioning",
    ],
    process: [
      "System design and pump sizing",
      "Pump selection and procurement",
      "Pump room layout design",
      "Installation and piping",
      "Panel programming and wiring",
      "Testing, calibration and commissioning",
    ],
    applications: [
      "High-rise buildings",
      "Industrial facilities",
      "Power plants",
      "Hospitals and critical infrastructure",
      "Warehouses with sprinkler systems",
    ],
    relatedProducts: [],
    faq: [
      {
        question: "What types of fire pumps do you supply?",
        answer: "We supply electric-driven, diesel-driven and jockey pumps from manufacturers like Quantum Pump System (UK) and Defender Fire Pump (UK). All pumps are NFPA 20 compliant with UL and FM certification. We select the pump type based on your water supply, system demand and building requirements.",
      },
    ],
  },
  {
    slug: "fire-door-supply",
    name: "Fire Door Supply",
    shortDescription:
      "Fire-rated steel doors (30, 60, 90, 120 mins) with certified hardware — panic bars, door closers, seals and vision panels.",
    description:
      "We supply fire-rated steel doors of various ratings (30, 60, 90, 120 minutes), certified as per local and international fire safety standards. Doors come with certified hardware including panic bars, door closers, seals and vision panels. Tested as per BS, UL and EN standards.",
    icon: "Shield",
  image: "/images/services/fire-doors.jpg",
    features: [
      "Rated fire doors: 30, 60, 90 and 120 minutes",
      "Single and double leaf options",
      "Certified hardware: panic bars, door closers, seals",
      "Vision panels for visibility",
      "Tested per BS, UL and EN standards",
      "Suitable for staircases, basements, emergency exits",
    ],
    process: [
      "Fire compartment assessment",
      "Door specification and selection",
      "Supply of doors and hardware",
      "Professional installation",
      "Compliance verification",
      "Documentation and certification",
    ],
    applications: [
      "Staircases and escape routes",
      "Basements and parking areas",
      "Emergency exits",
      "Electrical and generator rooms",
      "Fire compartment separations",
    ],
    relatedProducts: [],
    faq: [
      {
        question: "What fire door ratings do you offer?",
        answer: "We supply fire doors rated for 30, 60, 90 and 120 minutes. The required rating depends on the building type, occupancy and local fire safety regulations. We help you select the correct rating during our site assessment.",
      },
    ],
  },
  {
    slug: "amc-maintenance",
    name: "AMC & Troubleshooting",
    shortDescription:
      "Annual maintenance contracts ensuring all fire safety systems remain operational — scheduled maintenance, emergency repairs and performance testing.",
    description:
      "Our Annual Maintenance Contract ensures that all fire safety systems remain operational through scheduled maintenance, emergency repairs, system troubleshooting and performance testing. We provide 24/7 emergency support to all clients.",
    icon: "Wrench",
  image: "/images/services/amc.jpg",
    features: [
      "Scheduled preventive maintenance",
      "Emergency repair and call-out service",
      "System troubleshooting and diagnostics",
      "Performance testing and calibration",
      "Extinguisher refilling and servicing",
      "Spare parts and replacement supply",
      "Maintenance reports and certificates",
      "24/7 emergency support",
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
      "Commercial and industrial buildings",
      "Government and institutional buildings",
      "Residential complexes",
    ],
    relatedProducts: [],
    faq: [
      {
        question: "What does your AMC include?",
        answer: "Our AMC covers all fire protection systems on your premises — fire alarm testing, extinguisher servicing, sprinkler inspection, hydrant system testing, and emergency lighting checks. Visit frequency and scope are agreed during contract setup based on your system inventory and risk level.",
      },
    ],
  },
  {
    slug: "fire-safety-consultancy",
    name: "Fire Safety Consultancy",
    shortDescription:
      "Professional fire safety audits, NOC support, design drawings, gap analysis and staff training for regulatory compliance.",
    description:
      "We conduct professional audits to assess your fire safety preparedness and compliance. Our consultancy services include design drawing support, NOC and occupancy certificate assistance from fire service, gap analysis and staff fire safety training.",
    icon: "BookOpen",
  image: "/images/services/fire-detection.jpg",
    features: [
      "Fire safety design drawing support",
      "NOC and occupancy certificate from fire service",
      "Gap analysis and compliance assessment",
      "Staff fire safety training programs",
      "Fire safety plan preparation",
      "Regulatory compliance guidance",
      "Insurance liaison support",
    ],
    process: [
      "Document review and initial assessment",
      "On-site inspection and risk evaluation",
      "Gap analysis and compliance report",
      "Design and documentation support",
      "Fire service NOC submission",
      "Staff training and handover",
    ],
    applications: [
      "New building developments",
      "Existing building compliance upgrades",
      "Government NOC requirements",
      "Insurance requirement surveys",
    ],
    relatedProducts: [],
    faq: [
      {
        question: "Do you help with fire service NOC?",
        answer: "Yes. We provide complete support for obtaining NOC (No Objection Certificate) from Fire Service & Civil Defence, including design drawings, fire safety plan preparation, documentation and liaison with fire service authorities.",
      },
    ],
  },
  {
    slug: "cctv-systems",
    name: "CCTV Surveillance Systems",
    shortDescription:
      "High-resolution CCTV systems for fire watch and security monitoring — IP and analog cameras, NVR/DVR and remote monitoring.",
    description:
      "We supply and install high-resolution CCTV surveillance systems for fire watch and security monitoring. Solutions include IP and analog cameras, NVR/DVR systems, remote monitoring, and integration with fire alarm systems for event-triggered recording.",
    icon: "Camera",
  image: "/images/services/fire-detection.jpg",
    features: [
      "IP and analog CCTV cameras",
      "Indoor/outdoor dome, bullet and PTZ cameras",
      "Centralized DVR/NVR recording systems",
      "Remote monitoring capability",
      "Motion detection and alerts",
      "Integration with fire alarm systems",
      "Event-triggered recording",
    ],
    process: [
      "Site survey and camera placement design",
      "Equipment selection and supply",
      "Cabling and installation",
      "System configuration and programming",
      "Client training and documentation",
      "Maintenance and support",
    ],
    applications: [
      "Commercial and office buildings",
      "Factories and warehouses",
      "Hotels and retail spaces",
      "Residential complexes",
      "Industrial facilities",
    ],
    relatedProducts: [],
    faq: [],
  },
  {
    slug: "solar-systems",
    name: "Solar Power Systems",
    shortDescription:
      "Turnkey solar solutions for commercial and industrial clients — on-grid, off-grid and hybrid systems with installation and net metering support.",
    description:
      "We offer turnkey solar solutions for commercial and industrial clients. Services include on-grid and off-grid systems, inverter, panel and battery supply, installation and commissioning, and net metering support. Compatible with fire alarm, CCTV and emergency lighting systems.",
    icon: "Sun",
  image: "/images/services/solar.jpg",
    features: [
      "On-grid and off-grid solar systems",
      "Hybrid solar solutions",
      "Inverter, panel and battery supply",
      "Installation and commissioning",
      "Net metering support",
      "Compatible with fire alarm and CCTV systems",
      "Emergency backup integration",
    ],
    process: [
      "Energy assessment and system sizing",
      "System design and equipment selection",
      "Supply and delivery",
      "Installation and wiring",
      "Commissioning and grid connection",
      "Net metering application support",
    ],
    applications: [
      "Commercial and office buildings",
      "Factories and industrial facilities",
      "Hospitals and educational institutions",
      "Fire pump backup power",
      "Emergency lighting backup",
    ],
    relatedProducts: [],
    faq: [],
  },
  {
    slug: "lightning-protection-system",
    name: "Lightning Protection System (LPS)",
    shortDescription:
      "Complete LPS design and installation per IEC/BS EN standards — air terminals, down conductors, earth pits and surge protection devices.",
    description:
      "We provide complete Lightning Protection System (LPS) design and installation following international standards (IEC/BS EN). Components include air terminals, down conductors, earth pits and surge protection devices (SPD) for comprehensive lightning and surge protection.",
    icon: "Zap",
  image: "/images/services/fire-pumps.jpg",
    features: [
      "Air terminals (lightning rods)",
      "Down conductors",
      "Earthing/grounding systems",
      "Surge Protection Devices (SPD)",
      "Designed per IEC 62305 and BNBC",
      "Complete system testing and certification",
    ],
    process: [
      "Risk assessment per IEC 62305",
      "LPS design and classification",
      "Component selection and supply",
      "Installation of air terminals and conductors",
      "Earthing system installation",
      "Testing and certification",
    ],
    applications: [
      "High-rise buildings",
      "Telecommunications towers",
      "Industrial facilities",
      "Power plants and substations",
      "Educational and institutional buildings",
    ],
    relatedProducts: [],
    faq: [],
  },
  {
    slug: "pa-systems",
    name: "Public Address (PA) Systems",
    shortDescription:
      "Emergency communication and evacuation guidance systems — integrated with fire alarms, zoning capabilities and mass notification standards.",
    description:
      "We design and install Public Address (PA) systems for real-time emergency communication and evacuation guidance. Systems are integrated with fire alarm systems, offer zoning capabilities for targeted messaging, and comply with mass notification standards.",
    icon: "Radio",
  image: "/images/services/fire-detection.jpg",
    features: [
      "Integrated with fire alarm systems",
      "Zoning capabilities for targeted messaging",
      "Ceiling and wall speakers",
      "Amplifiers, microphones and control panels",
      "Mass notification compliance",
      "Emergency evacuation guidance",
    ],
    process: [
      "Audio coverage assessment",
      "System design and zoning",
      "Equipment supply and installation",
      "System programming and testing",
      "Commissioning and documentation",
    ],
    applications: [
      "Large commercial buildings",
      "Shopping malls and retail",
      "Industrial facilities",
      "Educational institutions",
      "Hospitals and hotels",
    ],
    relatedProducts: [],
    faq: [],
  },
];

// Helper to get a single service
export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
