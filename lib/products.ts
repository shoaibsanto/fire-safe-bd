// Product categories and products data — Updated from Fire Safe BD Product Catalogue

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
  brand: string;
  model?: string;
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
    shortDescription: "Analogue addressable, conventional and extinguishant control panels — from small to large installations.",
    description: "Fire Safe offers a powerful and sophisticated range of Analogue Addressable, Conventional and Extinguishant Control Panels available intelligent and technically robust. The wide range ensures to meet the current and future needs of customers' specifications from small to larger buildings and installations.",
        image: "/images/services/fire-detection.jpg",
    icon: "Bell",
  },
  {
    slug: "fire-pumps",
    name: "Fire Pumps",
    shortDescription: "UL/FM listed fire pumps — end suction, vertical turbine, diesel and electric driven, NFPA 20 compliant.",
    description: "Fire Safe supplies and installs UL/FM listed fire pump systems including end suction pumps, vertical turbine pumps, diesel engine driven pumps and electric motor driven pumps with complete controllers and jockey pumps.",
        image: "/images/services/fire-pumps.jpg",
    icon: "Zap",
  },
  {
    slug: "fire-suppression-systems",
    name: "Fire Suppression Systems",
    shortDescription: "FM-200, Novec 1230, CO2 and clean agent suppression systems — residue-free, safe for occupied spaces.",
    description: "Advanced fire suppression systems including FM-200, Novec 1230 and CO2 flooding systems. Clean agent suppression that is fast-acting, non-conductive and residue-free — ideal for data centres, control rooms and occupied spaces.",
        image: "/images/services/fire-suppression.jpg",
    icon: "Droplets",
  },
  {
    slug: "fire-extinguishers",
    name: "Fire Extinguishers",
    shortDescription: "Portable and trolley fire extinguishers — ABC Powder, AFFF Foam, CO2, CE marked and refillable.",
    description: "Fire Safe fire extinguishers are best in class — CE marked, pressure-tested and refillable. Available as portable and wheeled/trolley types for various fire risks including Class A, B, C and electrical fires.",
        image: "/images/services/fire-extinguishers.jpg",
    icon: "Flame",
  },
  {
    slug: "fire-doors",
    name: "Fire Rated Doors",
    shortDescription: "Fire-rated steel doors (1 HR, 1.5 HR, 3 HR) — single and double leaf, UL listed, custom sizes up to 3m x 3m.",
    description: "Fire Safe supplies UL listed fire-rated steel doors with various ratings (1 HR, 1.5 HR, 3 HR). Available as single and pairs swinging types with custom sizes up to 3 Meter x 3 Meter. Core materials include Honey Comb, Ceramic Fiber or Fiber Glass.",
        image: "/images/services/fire-doors.jpg",
    icon: "Shield",
  },
  {
    slug: "sprinkler-systems",
    name: "Sprinkler Systems",
    shortDescription: "Automatic sprinkler heads and complete sprinkler system components for residential, commercial and industrial use.",
    description: "Complete sprinkler system components including pendent, upright, sidewall and concealed sprinkler heads. Designed for residential, commercial and high-hazard occupancies per NFPA 13 standards.",
        image: "/images/services/sprinkler.jpg",
    icon: "Droplets",
  },
  {
    slug: "fire-hose-fittings",
    name: "Fire Hose & Fittings",
    shortDescription: "Fire hose reels, landing valves, hydrant valves, gauges and hydraulic fittings for fire hydrant systems.",
    description: "Complete range of fire hose and fittings including hose reels, landing valves, hydrant valves, pressure gauges, flow switches and hydraulic fittings for fire hydrant and sprinkler systems.",
        image: "/images/services/fire-pumps.jpg",
    icon: "Cable",
  },
  {
    slug: "safety-signage",
    name: "Safety Signage",
    shortDescription: "Illuminated and non-illuminated emergency exit signs, fire safety signs and photoluminescent signage.",
    description: "Complete range of fire safety and emergency signage — illuminated and non-illuminated exit signs, mandatory and warning signs, photoluminescent signs for escape routes and fire equipment locations.",
        image: "/images/services/fire-detection.jpg",
    icon: "Sign",
  },
];

export const products: Product[] = [
  // ===== FIRE ALARM SYSTEMS =====
  {
    slug: "matrix-addressable-fire-alarm-panel",
    name: "Matrix Addressable Fire Alarm Control Panel",
    category: "Fire Alarm Systems",
    categorySlug: "fire-alarm-systems",
    shortDescription: "UL Listed (Tenth Edition) addressable fire alarm panel with 7-inch touch screen, 2-16 loops, networkable up to 127 panels.",
    description: "The Matrix product range fire alarm control equipment combines the very latest hardware and software to produce a control indication system which is powerful and sophisticated, also simple to use and understand. The 7 inch touch screen provides a clear, uncluttered and intuitive interface. Available in 4 slot and 8 slot variants, supporting from 2 to 16 detection loops. Networkable up to 127 panels for small to large complex installations.",
    image: "/products/matrix-panel.jpg",
    features: [
      "UL Listed (Tenth Edition)",
      "2 to 8 loop or 2 to 16 loop versions",
      "Single or Double Aperture (includes zone LED module and Printer)",
      "Modular and expandable electronics",
      "2 programmable Class B NACs, Class B or Class A",
      "7 inch, full-color resistive touch screen with intuitive user interface",
      "Power supply options (5.25A or 10.25A)",
      "Programmable (3) Inputs and (5) Relay Outputs",
      "Networkable with programmable functionality",
      "Coincidence OR and AND operators in cause and effect",
      "Programming via USB or PC",
      "Network up to 127 panels",
    ],
    applications: ["Office buildings", "Hotels", "Hospitals", "Factories", "Warehouses", "Government buildings"],
    brand: "Matrix",
    model: "Matrix Series",
    specs: {
      Loops: "2 to 16 detection loops",
      TouchScreen: "7 inch full-color resistive",
      NetworkCapacity: "Up to 127 panels",
      PowerSupply: "5.25A or 10.25A",
      NACs: "2 programmable Class B, Class B or Class A",
      Inputs: "3 programmable inputs",
      Outputs: "5 relay outputs",
      Programming: "USB or PC",
      Compliance: "UL Listed (Tenth Edition)",
    },
  },
  {
    slug: "le-aln-v-photoelectric-smoke-sensor",
    name: "LE-ALN-V Photoelectric Smoke Sensor",
    category: "Fire Alarm Systems",
    categorySlug: "fire-alarm-systems",
    shortDescription: "UL Listed addressable photoelectric smoke detector for Matrix fire alarm systems.",
    description: "The Photoelectric Smoke Sensor is suited to detecting optically dense smoke typical of fires involving materials such as soft furnishings, plastic, foam, or other similar materials, which tend to smolder and produce large visible smoke particles. Compatible with Matrix addressable fire alarm systems.",
    image: "/products/smoke-sensor.jpg",
    features: [
      "UL Listed",
      "Addressable — compatible with Matrix panels",
      "Photoelectric technology",
      "Optical dense smoke detection",
      "Suitable for soft furnishings, plastic, foam materials",
      "For smoldering fire detection",
    ],
    applications: ["Offices", "Hotels", "Residential buildings", "Hospitals", "Warehouses"],
    brand: "Fire Safe",
    model: "LE-ALN-V",
    specs: {
      Type: "Photoelectric Smoke Sensor",
      Technology: "Optical scatter",
      Compatibility: "Matrix addressable panels",
      Certification: "UL Listed",
    },
  },
  {
    slug: "le-hps-sah-wp-manual-pull-station",
    name: "LE-HPS-SAH-WP Manual Pull Station",
    category: "Fire Alarm Systems",
    categorySlug: "fire-alarm-systems",
    shortDescription: "UL Listed weatherproof manual pull station for outdoor mounting — compatible with Matrix series.",
    description: "The Fire Safe LE-HPS-SAH-WP Weatherproof Manual Pull Station is a conventional initiating device suitable for applications requiring outdoor mounting. It is appropriate for applications where the manual pull station may be subject to wet conditions. Compatible using addressable interface module.",
    image: "/products/manual-pull.jpg",
    features: [
      "UL Listed",
      "Weatherproof design",
      "Suitable for outdoor mounting",
      "Wet conditions resistant",
      "Compatible via addressable interface module",
    ],
    applications: ["Outdoor installations", "Industrial facilities", "Warehouses", "Parking areas"],
    brand: "Fire Safe",
    model: "LE-HPS-SAH-WP",
    specs: {
      Type: "Manual Pull Station",
      Weatherproof: "Yes",
      Mounting: "Outdoor / Wet conditions",
      Compatibility: "Matrix via interface module",
      Certification: "UL Listed",
    },
  },

  // ===== FIRE PUMPS =====
  {
    slug: "end-suction-fire-pump",
    name: "End Suction Fire Pump",
    category: "Fire Pumps",
    categorySlug: "fire-pumps",
    shortDescription: "UL/FM listed end suction fire pump — electric or diesel driven, NFPA 20 compliant.",
    description: "Fire Safe supplies and installs UL/FM listed end suction fire pumps for fire suppression systems. Available in electric motor driven and diesel engine driven configurations. Fully compliant with NFPA 20 standards for stationary fire pump installations.",
    image: "/products/end-suction-pump.jpg",
    features: [
      "UL Listed and FM Approved",
      "Electric or diesel engine driven",
      "NFPA 20 compliant",
      "Horizontal end suction design",
      "Various flow and head capacities",
      "Complete with controller and jockey pump",
    ],
    applications: ["High-rise buildings", "Industrial facilities", "Power plants", "Commercial complexes"],
    brand: "Quantum / Defender",
    specs: {
      Type: "End Suction",
      Driver: "Electric motor or Diesel engine",
      Compliance: "UL Listed, FM Approved, NFPA 20",
      Includes: "Controller, pressure sensors, test lines",
    },
  },
  {
    slug: "vertical-turbine-fire-pump",
    name: "Vertical Turbine Fire Pump",
    category: "Fire Pumps",
    categorySlug: "fire-pumps",
    shortDescription: "UL/FM listed vertical turbine fire pump for underground water supply — NFPA 20 compliant.",
    description: "Fire Safe supplies vertical turbine fire pumps for installations requiring underground water supply or high-head applications. UL/FM listed and NFPA 20 compliant. Ideal for deep well water supply and high-rise building fire protection systems.",
    image: "/products/vertical-turbine-pump.jpg",
    features: [
      "UL Listed and FM Approved",
      "Vertical turbine design",
      "NFPA 20 compliant",
      "Suitable for underground water supply",
      "High-head applications",
      "Complete with controller",
    ],
    applications: ["Deep well water supply", "High-rise buildings", "Industrial complexes", "Municipal fire protection"],
    brand: "Quantum / Defender",
    specs: {
      Type: "Vertical Turbine",
      Driver: "Electric motor or Diesel engine",
      Compliance: "UL Listed, FM Approved, NFPA 20",
      Application: "Underground water supply / high-head",
    },
  },

  // ===== FIRE SUPPRESSION =====
  {
    slug: "fm200-suppression-system",
    name: "FM-200 Fire Suppression System",
    category: "Fire Suppression Systems",
    categorySlug: "fire-suppression-systems",
    shortDescription: "Clean agent suppression system — fast-acting, residue-free, safe for people and equipment. NFPA 2001 compliant.",
    description: "FM-200 (HFC-227ea) is a clean agent fire suppression system ideal for protecting sensitive environments such as server rooms, data centres and electrical control rooms. Fast-acting, non-conductive and residue-free — extinguishes fire within seconds by interrupting the combustion process. Safe for use around people and equipment. Fully compliant with NFPA 2001.",
    image: "/products/fm200-system.jpg",
    features: [
      "Fast-acting clean agent suppression",
      "Non-conductive and residue-free",
      "Safe for use around people and equipment",
      "Extinguishes fire within seconds",
      "NFPA 2001 compliant",
      "Complete system with storage container, nozzles, piping, control panel",
    ],
    applications: ["Server rooms", "Data centres", "Control rooms", "Electrical rooms", "Telecom facilities", "Archives"],
    brand: "Fire Safe / Honeywell",
    specs: {
      Agent: "FM-200 (HFC-227ea)",
      Compliance: "NFPA 2001",
      DischargeTime: "Within 10 seconds",
      Residue: "None — clean agent",
      Safety: "Safe for occupied spaces",
      Components: "Storage container, discharge nozzle, selector valve, control panel, abort switch, manual release, pre-discharge alarm",
    },
  },
  {
    slug: "novec-1230-suppression-system",
    name: "Novec 1230 Fire Suppression System",
    category: "Fire Suppression Systems",
    categorySlug: "fire-suppression-systems",
    shortDescription: "Clean agent suppression — zero ozone depletion, safe for occupied spaces. For data centres and museums.",
    description: "Novec 1230 is a clean agent fire suppression fluid that provides an environmentally responsible alternative to halon and other clean agents. Zero ozone depletion potential, very low global warming potential. Safe for occupied spaces at design concentration. Ideal for data centres, museums, archives and telecommunication facilities.",
    image: "/products/novec-1230.jpg",
    features: [
      "Clean agent — zero residue",
      "Zero ozone depletion potential",
      "Very low global warming potential",
      "Safe for occupied spaces",
      "NFPA 2001 compliant",
      "Ideal for sensitive equipment environments",
    ],
    applications: ["Data centres", "Museums", "Archives", "Telecom facilities", "Control rooms"],
    brand: "Fire Safe / 3M",
    specs: {
      Agent: "Novec 1230 (FK-5-1-12)",
      Compliance: "NFPA 2001",
      ODP: "Zero",
      GWP: "1 (very low)",
      Safety: "Safe for occupied spaces at design concentration",
    },
  },
  {
    slug: "co2-fire-suppression-system",
    name: "CO2 Fire Suppression System",
    category: "Fire Suppression Systems",
    categorySlug: "fire-suppression-systems",
    shortDescription: "Carbon dioxide flooding system for high-hazard areas — industrial facilities, power plants, engine rooms.",
    description: "CO2 fire suppression systems use carbon dioxide gas to extinguish fires by displacing oxygen. Suitable for high-hazard industrial environments where people are not normally present during operation. Effective on Class A, B and C fires and electrical equipment fires.",
    image: "/products/co2-system.jpg",
    features: [
      "Total flooding and local application systems",
      "Effective on Class A, B, C and electrical fires",
      "Suitable for unoccupied high-hazard areas",
      "NFPA 12 compliant",
      "High extinguishing concentration",
      "Complete system with cylinders, manifolds, nozzles",
    ],
    applications: ["Engine rooms", "Power plants", "Industrial facilities", "Paint booths", "Aircraft hangars"],
    brand: "Fire Safe",
    specs: {
      Agent: "Carbon Dioxide (CO2)",
      Compliance: "NFPA 12",
      Application: "Total flooding and local",
      Hazard: "High hazard — unoccupied during discharge",
    },
  },

  // ===== FIRE EXTINGUISHERS =====
  {
    slug: "abc-powder-fire-extinguisher",
    name: "ABC Powder Fire Extinguisher",
    category: "Fire Extinguishers",
    categorySlug: "fire-extinguishers",
    shortDescription: "CE marked portable ABC dry powder extinguisher — works by coating the fire like a blanket to suffocate it.",
    description: "ABC Powder fire extinguishers work by firstly applying a coating to the fire which acts like a blanket suffocating the fire. Suitable for Class A (solids), Class B (liquids) and Class C (gas) fires. CE marked and pressure-tested. Available in various capacities with wall-mounting brackets.",
    image: "/products/abc-extinguisher.jpg",
    features: [
      "CE marked and pressure-tested",
      "Works on Class A, B and C fires",
      "Coating action — suffocates fire",
      "Portable and wheeled options",
      "Wall-mounting brackets included",
      "Refillable",
    ],
    applications: ["Offices", "Homes", "Factories", "Warehouses", "Vehicles", "Public buildings"],
    brand: "Fire Safe / SRI",
    specs: {
      Type: "ABC Dry Powder",
      Agent: "Monoammonium Phosphate",
      FireClasses: "A, B, C",
      Certification: "CE Marked",
      Available: "1kg, 2kg, 4kg, 6kg, 9kg, 25kg Trolley",
    },
  },
  {
    slug: "afff-foam-fire-extinguisher",
    name: "AFFF Foam Fire Extinguisher",
    category: "Fire Extinguishers",
    categorySlug: "fire-extinguishers",
    shortDescription: "CE marked AFFF foam extinguisher — forms a film over liquid fuel to suffocate the fire.",
    description: "Aqueous Film Forming Foam (AFFF) works by applying a film forming foam to the fire which causes a blanket over the fire suffocating the fire. Particularly effective on Class B (flammable liquid) fires. CE marked and pressure-tested.",
    image: "/products/afff-extinguisher.jpg",
    features: [
      "CE marked",
      "AFFF foam agent",
      "Film-forming action",
      "Effective on Class B liquid fires",
      "Also effective on Class A fires",
      "Portable options available",
    ],
    applications: ["Fuel storage", "Aircraft facilities", "Chemical plants", "Warehouses", "Marine"],
    brand: "Fire Safe / SRI",
    specs: {
      Type: "AFFF Foam",
      Agent: "Aqueous Film Forming Foam",
      FireClasses: "A, B",
      Certification: "CE Marked",
    },
  },
  {
    slug: "co2-fire-extinguisher",
    name: "Carbon Dioxide (CO2) Fire Extinguisher",
    category: "Fire Extinguishers",
    categorySlug: "fire-extinguishers",
    shortDescription: "CE marked CO2 extinguisher — inert gas that expels oxygen, suitable for electrical and Class B fires.",
    description: "Carbon Dioxide being an inert gas works by expelling the oxygen and thereby suffocating the fire and is suitable for common industries where small Class B fires may occur. Leaves no residue — safe for electrical equipment and sensitive environments.",
    image: "/products/co2-extinguisher.jpg",
    features: [
      "CE marked",
      "Carbon Dioxide agent",
      "Inert gas — expels oxygen",
      "Leaves no residue",
      "Safe for electrical equipment",
      "Suitable for Class B fires",
    ],
    applications: ["Electrical rooms", "Server rooms", "Laboratories", "Factories", "Offices"],
    brand: "Fire Safe / SRI",
    specs: {
      Type: "Carbon Dioxide (CO2)",
      Agent: "CO2",
      FireClasses: "B, C (electrical)",
      Residue: "None",
      Certification: "CE Marked",
    },
  },
  {
    slug: "powder-trolley-fire-extinguisher",
    name: "Dry Powder Trolley Fire Extinguisher",
    category: "Fire Extinguishers",
    categorySlug: "fire-extinguishers",
    shortDescription: "Mobile trolley extinguisher — high performance, rapid knock down. For large industrial fire risks.",
    description: "Dry Powder Mobile Trolley Extinguishers models represent newly developed designs of pressurized fire extinguishers and are characterized by their high performance and rapid fire knock down capabilities. Mobile wheeled design for easy transport in large industrial environments.",
    image: "/products/trolley-extinguisher.jpg",
    features: [
      "Mobile wheeled design",
      "High performance",
      "Rapid fire knock down",
      "Large capacity (25kg+)",
      "Easy transport in industrial areas",
      "ABC dry powder agent",
    ],
    applications: ["Industrial facilities", "Warehouses", "Aircraft facilities", "Large commercial spaces"],
    brand: "Fire Safe / SRI",
    specs: {
      Type: "Dry Powder Trolley",
      Agent: "ABC Dry Powder",
      Capacity: "25kg or larger",
      Mobility: "Wheeled trolley",
    },
  },

  // ===== FIRE DOORS =====
  {
    slug: "fire-rated-steel-door",
    name: "Fire Rated Steel Door",
    category: "Fire Rated Doors",
    categorySlug: "fire-doors",
    shortDescription: "UL listed fire-rated steel doors — 1 HR, 1.5 HR, 3 HR ratings. Custom sizes up to 3m x 3m.",
    description: "Fire Safe supplies fire-rated steel doors available as Single and Pairs Swinging Types. Custom sizes available up to Maximum 3 Meter x 3 Meter. Fire Rating options: 3 HR, 1-1/2 HR, or 1 HR. Temperature Rise Rating: 30 Min — 450 F Max. Core materials: Honey Comb Core, Ceramic Fiber Core or Fiber Glass.",
        image: "/images/services/fire-doors.jpg",
    features: [
      "UL Listed",
      "Single and pairs swinging types",
      "Custom sizes up to 3m x 3m",
      "Fire Rating: 3 HR, 1.5 HR, or 1 HR",
      "Temperature Rise Rating: 30 Min — 450 F Max",
      "Core: Honey Comb, Ceramic Fiber, or Fiber Glass",
      "Certified hardware available",
    ],
    applications: ["Staircases", "Basements", "Emergency exits", "Electrical rooms", "Generator rooms", "Fire compartments"],
    brand: "Fire Safe",
    specs: {
      Types: "Single and Pairs Swinging",
      MaxSize: "3 Meter x 3 Meter",
      FireRating: "3 HR, 1-1/2 HR, or 1 HR",
      TempRise: "30 Min — 450 F Max",
      CoreMaterial: "Honey Comb, Ceramic Fiber, or Fiber Glass",
      Certification: "UL Listed",
    },
  },

  // ===== SPRINKLER SYSTEMS =====
  {
    slug: "pendent-sprinkler-head",
    name: "Pendent Sprinkler Head",
    category: "Sprinkler Systems",
    categorySlug: "sprinkler-systems",
    shortDescription: "Standard pendent sprinkler head for concealed and exposed installations — residential and commercial.",
    description: "Pendent sprinkler heads hang down from the ceiling and discharge water downward in a dome pattern. Available in standard and quick-response variants. Suitable for residential, commercial and light industrial occupancies. Temperature-rated glass bulb or fusible link options.",
    image: "/products/pendent-sprinkler.jpg",
    features: [
      "Pendent mounting orientation",
      "Glass bulb or fusible link activation",
      "Standard and quick-response options",
      "Multiple temperature ratings (57°C — 141°C)",
      "Residential and commercial rated",
      "Concealed option available",
    ],
    applications: ["Offices", "Hotels", "Residential", "Retail", "Light industrial"],
    brand: "SRI / NAFFCO",
    specs: {
      Type: "Pendent",
      Activation: "Glass bulb or fusible link",
      Temperatures: "57°C, 68°C, 79°C, 93°C, 141°C",
      KFactor: "K5.6 or K8.0",
    },
  },

  // ===== FIRE HOSE & FITTINGS =====
  {
    slug: "fire-hose-reel",
    name: "Fire Hose Reel",
    category: "Fire Hose & Fittings",
    categorySlug: "fire-hose-fittings",
    shortDescription: "Wall-mounted fire hose reel with adjustable nozzle — for first-aid firefighting in commercial buildings.",
    description: "Fire Safe supplies wall-mounted fire hose reels for first-aid firefighting. Includes adjustable spray/nozzle, 30m lay-flat hose, manual or automatic operation. Suitable for commercial and residential buildings per local fire safety requirements.",
    image: "/products/hose-reel.jpg",
    features: [
      "Wall-mounted design",
      "Adjustable spray/nozzle",
      "30m lay-flat hose",
      "Manual or automatic operation",
      "CE marked",
      "Compliant with BS EN 671",
    ],
    applications: ["Offices", "Hotels", "Shopping malls", "Residential buildings", "Hospitals"],
    brand: "Fire Safe / SRI",
    specs: {
      Type: "Wall-mounted",
      HoseLength: "30m",
      Nozzle: "Adjustable spray",
      Operation: "Manual or automatic",
      Compliance: "BS EN 671",
    },
  },
  {
    slug: "landing-valve",
    name: "Landing Valve",
    category: "Fire Hose & Fittings",
    categorySlug: "fire-hose-fittings",
    shortDescription: "Indoor and outdoor landing valves for fire hydrant systems — approved for fire service use.",
    description: "Fire Safe supplies landing valves for fire hydrant systems. Available in indoor (pillar type) and outdoor configurations. Approved for fire service use with standard hose connections.",
    image: "/products/landing-valve.jpg",
    features: [
      "Indoor and outdoor types",
      "Standard hose connection",
      "Approved for fire service use",
      "Durable brass/stainless construction",
      "Various pressure ratings",
    ],
    applications: ["Fire hydrant systems", "High-rise buildings", "Industrial facilities"],
    brand: "Fire Safe / SRI",
    specs: {
      Types: "Indoor pillar, outdoor",
      Material: "Brass / Stainless Steel",
      Connection: "Standard fire service coupling",
    },
  },

  // ===== SAFETY SIGNAGE =====
  {
    slug: "illuminated-exit-sign",
    name: "Illuminated Emergency Exit Sign",
    category: "Safety Signage",
    categorySlug: "safety-signage",
    shortDescription: "Battery-backed illuminated exit sign — LED, single/double sided, for escape route marking.",
    description: "Fire Safe supplies illuminated emergency exit signs with battery backup for escape route marking. LED technology with low power consumption. Available in single-sided and double-sided versions. Automatically activates during power failure.",
    image: "/products/exit-sign.jpg",
    features: [
      "LED technology",
      "Battery backup (3-hour duration)",
      "Single and double sided",
      "Auto activation on power failure",
      "Low power consumption",
      "Various mounting options",
    ],
    applications: ["All buildings", "Escape routes", "Staircases", "Corridors", "Exits"],
    brand: "Fire Safe",
    specs: {
      Technology: "LED",
      BatteryBackup: "3 hours minimum",
      Sides: "Single or double",
      Mounting: "Wall, ceiling, suspended",
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
