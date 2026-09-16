// Product categories and products data

export interface Product {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  description: string;
  image: string;
  features: string[];
  applications: string[];
  brand?: string;
  specs?: Record<string, string>;
}

export interface ProductCategory {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  icon: string;
}

export const productCategories: ProductCategory[] = [
  {
    slug: "fire-alarm-systems",
    name: "Fire Alarm Systems",
    shortDescription:
      "Addressable and conventional fire alarm panels, detectors, sounders and visual alarm devices for early fire detection.",
    description:
      "Complete fire alarm system solutions including addressable panels, smoke detectors, heat detectors, manual call points, sounders, visual alarm devices and interface modules. Our systems are designed for buildings of all sizes — from small commercial premises to large industrial complexes.",
    image: "/products/fire-alarm-system.jpg",
    icon: "Bell",
  },
  {
    slug: "fire-extinguishers",
    name: "Fire Extinguishers",
    shortDescription:
      "ABC dry chemical, CO2, foam and water-based fire extinguishers for all fire classes.",
    description:
      "Full range of portable and wheeled fire extinguishers — ABC dry chemical powder, carbon dioxide (CO2), AFFF foam, water mist and specialist extinguishers for electrical, kitchen and metal fires. All units comply with international standards.",
    image: "/products/fire-extinguisher.jpg",
    icon: "Flame",
  },
  {
    slug: "fire-detection-systems",
    name: "Fire Detection Systems",
    shortDescription:
      "Advanced smoke, heat and gas detection technologies for early warning and life safety.",
    description:
      "Advanced fire detection solutions including optical smoke detectors, rate-of-rise heat detectors, beam detectors, aspirating smoke detection (ASD), gas detection systems and multi-sensor detectors. Designed for environments ranging from clean rooms to harsh industrial settings.",
    image: "/products/fire-detection.jpg",
    icon: "ScanEye",
  },
  {
    slug: "fire-suppression-systems",
    name: "Fire Suppression Systems",
    shortDescription:
      "Automatic suppression including sprinkler, FM-200, CO2 and clean agent systems.",
    description:
      "Automatic fire suppression systems including wet and dry sprinkler systems, pre-action systems, deluge systems, FM-200 (HFC-227ea), Novec 1230, CO2 flooding systems and kitchen hood suppression. Designed for occupied spaces, server rooms, archives and high-hazard areas.",
    image: "/products/fire-suppression.jpg",
    icon: "Droplets",
  },
  {
    slug: "fire-fighting-equipment",
    name: "Fire Fighting Equipment",
    shortDescription:
      "Hoses, nozzles, hydrants, couplings, cabinets and accessories for firefighting operations.",
    description:
      "Fire hoses, adjustable nozzles, pillar hydrants, landing valves, fire hose cabinets, couplings, breechings, wrenches and firefighting accessories. Suitable for building fire brigades, industrial firefighting and municipal fire services.",
    image: "/products/fire-fighting.jpg",
    icon: "FlameKindling",
  },
  {
    slug: "emergency-safety-equipment",
    name: "Emergency & Safety Equipment",
    shortDescription:
      "Emergency lighting, evacuation signs, first aid kits, PPE and safety accessories.",
    description:
      "Emergency escape lighting, illuminated and non-illuminated exit signs, first aid kits, personal protective equipment (PPE), safety helmets, high-visibility vests, safety boots, gloves, goggles and respiratory protection for industrial and construction use.",
    image: "/products/emergency-equipment.jpg",
    icon: "ShieldAlert",
  },
  {
    slug: "fire-hose-accessories",
    name: "Fire Hose & Accessories",
    shortDescription:
      "Lay-flat hoses, reinforced hoses, couplings and accessories for fire service and industrial use.",
    description:
      "Lay-flat fire hoses, reinforced rubber-lined hoses, PVC hoses, instantaneous couplings, Storz couplings, hose reels, hose ramps and storage racks. Available in multiple diameters and pressure ratings for building, industrial and municipal fire service.",
    image: "/products/fire-hose.jpg",
    icon: "Cable",
  },
  {
    slug: "safety-signage",
    name: "Safety Signage",
    shortDescription:
      "Mandatory, warning, prohibition and emergency exit signs for fire safety compliance.",
    description:
      "Complete range of fire safety signage — mandatory signs (fire extinguisher location, fire door keep shut), warning signs (flammable materials, electrical hazard), prohibition signs (no smoking, no open flames) and emergency escape route signs. Photoluminescent and illuminated options available.",
    image: "/products/safety-signage.jpg",
    icon: "Sign",
  },
];

export const products: Product[] = [
  {
    slug: "addressable-fire-alarm-panel",
    name: "Addressable Fire Alarm Control Panel",
    category: "Fire Alarm Systems",
    categorySlug: "fire-alarm-systems",
    shortDescription:
      "Multi-loop addressable fire alarm panel with LCD display, zone mapping and network capability.",
    description:
      "Advanced addressable fire alarm control panel supporting up to 200 addressable devices per loop. Features include LCD touchscreen interface, automatic device mapping, day/night sensitivity, pre-alarm warnings, cause-and-effect programming and network connectivity for multi-panel installations.",
    image: "/products/addressable-panel.jpg",
    features: [
      "Up to 200 devices per loop",
      "LCD touchscreen interface",
      "Automatic device mapping",
      "Cause-and-effect programming",
      "Day/night sensitivity modes",
      "Network connectivity for multi-panel systems",
      "Built-in event log (10,000+ events)",
      "EN 54-2 / BS 5839 compliant",
    ],
    applications: [
      "Office buildings",
      "Hotels and hospitality",
      "Hospitals",
      "Shopping malls",
      "Warehouses",
      "Industrial facilities",
    ],
    brand: "[Brand — Client Verification Required]",
    specs: {
      Loops: "1–8 configurable",
      DevicesPerLoop: "Up to 200",
      Display: "LCD touchscreen",
      Protocol: "Compatible with major detector protocols",
      Voltage: "230V AC mains with battery backup",
      Compliance: "EN 54-2, BS 5839-1",
    },
  },
  {
    slug: "optical-smoke-detector",
    name: "Optical Smoke Detector",
    category: "Fire Detection Systems",
    categorySlug: "fire-detection-systems",
    shortDescription:
      "High-sensitivity optical smoke detector for early fire warning in commercial and residential buildings.",
    description:
      "Point-type optical smoke detector using light scattering technology for reliable early fire detection. Suitable for offices, corridors, hotels, residential buildings and general commercial environments. drift compensation and anti-tamper features as standard.",
    image: "/products/smoke-detector.jpg",
    features: [
      "Optical light-scattering technology",
      "Automatic drift compensation",
      "Anti-tamper design",
      "LED status indicator",
      "Wide voltage range operation",
      "Compatible with major alarm panels",
    ],
    applications: [
      "Offices and commercial buildings",
      "Hotels and hospitality",
      "Residential buildings",
      "Educational institutions",
      "Healthcare facilities",
    ],
    brand: "[Brand — Client Verification Required]",
    specs: {
      Technology: "Optical light scattering",
      OperatingVoltage: "9–28V DC",
      Current: "< 300μA (quiescent)",
      Temperature: "-10°C to +50°C",
      Compliance: "EN 14604, EN 54-7",
    },
  },
  {
    slug: "abc-dry-chemical-extinguisher-6kg",
    name: "ABC Dry Chemical Fire Extinguisher — 6kg",
    category: "Fire Extinguishers",
    categorySlug: "fire-extinguishers",
    shortDescription:
      "Multi-purpose 6kg ABC dry chemical powder extinguisher for Class A, B and C fires.",
    description:
      "6kg capacity ABC dry chemical powder fire extinguisher suitable for fires involving ordinary combustibles (Class A), flammable liquids (Class B) and flammable gases (Class C). Rated 27A 183B. Supplied with wall bracket and operating instructions.",
    image: "/products/abc-extinguisher-6kg.jpg",
    features: [
      "6kg ABC dry chemical powder",
      "Rated 27A 183B",
      "Steel cylinder — powder-coated",
      "Brass valve assembly",
      "Wall bracket included",
      "5-year warranty on cylinder",
    ],
    applications: [
      "Offices and commercial spaces",
      "Warehouses and storage",
      "Vehicles and transport",
      "Industrial facilities",
      "Schools and public buildings",
    ],
    brand: "[Brand — Client Verification Required]",
    specs: {
      Capacity: "6 kg",
      Agent: "ABC dry chemical powder (monoammonium phosphate)",
      FireRating: "27A 183B",
      Cylinder: "Seamless steel, powder-coated",
      Weight: "8.5 kg (gross)",
      Height: "540 mm",
      Diameter: "150 mm",
      OperatingTemp: "-30°C to +60°C",
      Compliance: "EN 3, CE marked",
    },
  },
  {
    slug: "wet-pipe-sprinkler-system",
    name: "Wet Pipe Sprinkler System",
    category: "Fire Suppression Systems",
    categorySlug: "fire-suppression-systems",
    shortDescription:
      "Automatic wet pipe sprinkler system for continuous fire protection in commercial and residential buildings.",
    description:
      "Fully automatic wet pipe sprinkler system with permanently water-filled pipework for immediate response. Includes sprinkler heads (glass bulb or fusible link), piping network, alarm valve assembly, flow switches and drain valves. Designed to NFPA 13 / BS EN 12845 standards.",
    image: "/products/sprinkler-system.jpg",
    features: [
      "Immediate water discharge on activation",
      "Glass bulb or fusible link heads available",
      "Standard and quick-response options",
      "Alarm valve with flow switch",
      "Network design and hydraulic calculation",
      "Ongoing maintenance and inspection programs",
    ],
    applications: [
      "Office and commercial buildings",
      "Warehouses and logistics centres",
      "Hotels and hospitality",
      "Manufacturing facilities",
      "Residential high-rise buildings",
    ],
    brand: "[Brand — Client Verification Required]",
    specs: {
      SystemType: "Wet pipe — permanently water-filled",
      Standards: "NFPA 13 / BS EN 12845",
      ResponseTime: "Fast — immediate on activation",
      HeadTypes: "Glass bulb (57°C–93°C), fusible link",
      PipeMaterial: "Galvanized steel / CPVC",
    },
  },
  {
    slug: "portable-co2-fire-extinguisher-5kg",
    name: "CO2 Fire Extinguisher — 5kg",
    category: "Fire Extinguishers",
    categorySlug: "fire-extinguishers",
    shortDescription:
      "5kg CO2 fire extinguisher for electrical and live equipment fires — residue-free.",
    description:
      "5kg carbon dioxide (CO2) fire extinguisher specifically designed for fires involving electrical equipment, server rooms, laboratories and areas where residue-free discharge is essential. Zero residue after use — no damage to sensitive equipment.",
    image: "/products/co2-extinguisher.jpg",
    features: [
      "5kg CO2 — clean agent, zero residue",
      "Safe for electrical equipment",
      "No cleanup required after discharge",
      "Horn-type discharge nozzle",
      "Suitable for server rooms and labs",
      "Wall bracket included",
    ],
    applications: [
      "Server rooms and data centres",
      "Electrical switch rooms",
      "Laboratories",
      "Telecommunications facilities",
      "Industrial machinery areas",
    ],
    brand: "[Brand — Client Verification Required]",
    specs: {
      Capacity: "5 kg CO2",
      FireRating: "34B C",
      DischargeTime: "~10 seconds",
      Cylinder: "Seamless steel",
      Weight: "9.0 kg (gross)",
      Height: "545 mm",
      OperatingTemp: "-30°C to +60°C",
      Compliance: "EN 3, CE marked",
    },
  },
];

// Helper to get products by category
export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

// Helper to get a single product
export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

// Helper to get a category
export function getCategory(slug: string): ProductCategory | undefined {
  return productCategories.find((c) => c.slug === slug);
}
