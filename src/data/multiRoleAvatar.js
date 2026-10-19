/**
 * ============================================================================
 * SOLO AVATARS CONFIGURATION (WOMAN & MAN PORTFOLIOS)
 * ============================================================================
 * Provides rich multi-profession profiles and video portfolios for:
 * 1. Solo Woman Avatar: Elena Valeri (7 masterclass video roles)
 * 2. Solo Man Avatar: Dr. Julian Vance (3 newly added custom video roles:
 *    - Relativistic Astrophysics & Black Holes (black_holes_oct19_combined.mov)
 *    - Neuro-Ophthalmology & Visual Optics (eye_videos_combined.mov)
 *    - Sustainable AgroTech & Botanical Biosystems (tomato_videos_combined.mov)
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// 1. SOLO WOMAN AVATAR PORTFOLIO (ELENA VALERI)
// ----------------------------------------------------------------------------
export const WOMAN_VIDEOS = [
  {
    id: 'doctor-brain',
    name: 'Neuroscience & Brain Systems',
    roleTitle: 'Lead Neuroscientist & Brain Systems Researcher',
    department: 'Neuroscience & Cognitive Systems',
    videoSrc: './videos/brain_videos_combined.mov',
    posterSrc: './thumbnails/brain_videos_combined.mov.png',
    avatarImg: './avatars_crop/doctor_brain_avatar.png',
    professionId: 'neuroscience',
    accentColor: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.35)',
    tag: 'NEUROSCIENCE'
  },
  {
    id: 'woman-car',
    name: 'Autonomous Mobility & Smart Vehicles',
    roleTitle: 'Lead Autonomous Mobility & Robotics Engineer',
    department: 'Autonomous Vehicles & Mechatronics',
    videoSrc: './videos/Woman_holding_toy_car_1080p_20261018234506.mp4',
    posterSrc: './thumbnails/Woman_holding_toy_car_1080p_20261018234506.mp4.png',
    avatarImg: './avatars_crop/woman_car_avatar.png',
    professionId: 'auto-mobility',
    accentColor: '#38bdf8',
    glowColor: 'rgba(56, 189, 248, 0.35)',
    tag: 'AUTONOMOUS CARS'
  },
  {
    id: 'black-holes',
    name: 'Relativistic Astrophysics & Black Holes',
    roleTitle: 'Relativistic Astrophysicist & Gravity Theorist',
    department: 'Cosmology & Relativistic Physics',
    videoSrc: './videos/black_holes_combined.mov',
    posterSrc: './thumbnails/black_holes_combined.mov.png',
    avatarImg: './avatars_crop/woman_car_avatar.png',
    professionId: 'astrophysics',
    accentColor: '#a855f7',
    glowColor: 'rgba(168, 85, 247, 0.35)',
    tag: 'BLACK HOLES'
  },
  {
    id: 'farm-agri',
    name: 'Regenerative Agriculture & Eco-Farming',
    roleTitle: 'Regenerative AgroTech & Ecological Architect',
    department: 'Sustainable Agronomy & Soil Systems',
    videoSrc: './videos/farm_videos_combined.mov',
    posterSrc: './thumbnails/farm_videos_combined.mov.png',
    avatarImg: './avatars_crop/farmer_avatar.jpg',
    professionId: 'farm-ecology',
    accentColor: '#eab308',
    glowColor: 'rgba(234, 179, 8, 0.35)',
    tag: 'AGRI-TECH'
  },
  {
    id: 'swimming-kinetics',
    name: 'Aquatic Kinetics & Hydrodynamics',
    roleTitle: 'Aquatic Kinetics & Sports Biomechanic',
    department: 'Human Physiology & Hydrodynamics',
    videoSrc: './videos/swimming_videos_swapped.mov',
    posterSrc: './thumbnails/swimming_videos_swapped.mov.png',
    avatarImg: './avatars_crop/director_avatar.jpg',
    professionId: 'aquatic-kinetics',
    accentColor: '#06b6d4',
    glowColor: 'rgba(6, 182, 212, 0.35)',
    tag: 'AQUATIC KINETICS'
  },
  {
    id: 'apple-design',
    name: 'Industrial Design & Ecosystems',
    roleTitle: 'Industrial Product & Hardware Ecosystems Architect',
    department: 'Industrial Design & Material Science',
    videoSrc: './videos/apple_videos_swapped.mov',
    posterSrc: './thumbnails/apple_videos_swapped.mov.png',
    avatarImg: './avatars_crop/mechanic_avatar.jpg',
    professionId: 'product-design',
    accentColor: '#f43f5e',
    glowColor: 'rgba(244, 63, 94, 0.35)',
    tag: 'PRODUCT DESIGN'
  },
  {
    id: 'combined-master',
    name: 'Omni-Discipline Polymath Showcase',
    roleTitle: 'Universal Polymath & Cross-Discipline Fellow',
    department: 'Multidisciplinary Knowledge Synthesis',
    videoSrc: './videos/combined_videos.mov',
    posterSrc: './thumbnails/combined_videos.mov.png',
    avatarImg: './avatars_crop/showreel_avatar.jpg',
    professionId: 'omni-showcase',
    accentColor: '#ec4899',
    glowColor: 'rgba(236, 72, 153, 0.35)',
    tag: 'SHOWREEL POLYMATH'
  }
];

export const WOMAN_AVATAR_PROFILE = {
  id: 'omni-avatar-woman',
  gender: 'woman',
  genderLabel: 'Solo Woman Avatar',
  genderLabelRu: 'Соло-аватар: Женщина',
  name: 'Elena Valeri',
  title: 'Lead Omni-Scientist & Polymath Engineer',
  avatarImage: './avatars_crop/doctor_brain_avatar.png',
  videoSrc: './videos/brain_videos_combined.mov',
  posterSrc: './thumbnails/brain_videos_combined.mov.png',
  videoFocus: '50% 30%',
  bio: 'Unified multidisciplinary researcher directing vanguard initiatives across cognitive neuroscience, autonomous vehicle robotics, relativistic astrophysics, regenerative agriculture, and biomechanics.',
  totalMasteredRoles: 7,
  version: 7
};

export const WOMAN_PROFESSIONS = [
  {
    id: 'neuroscience',
    title: 'Lead Neuroscientist & Brain Systems Researcher',
    titleEn: 'Lead Neuroscientist & Brain Systems Researcher',
    department: 'Neuroscience & Cognitive Systems',
    badge: 'Principal Neuroscientist',
    accentColor: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.35)',
    icon: 'Brain',
    videoSrc: './videos/brain_videos_combined.mov',
    posterSrc: './thumbnails/brain_videos_combined.mov.png',
    avatarImage: './avatars_crop/doctor_brain_avatar.png',
    experience: '12 Years Clinical Research',
    impact: 'Cortical Neural Mapping & BCI Decoders',
    quote: '“The human brain is the most intricate structure in the known cosmos. Unraveling its neural circuitry unlocks the nature of conscious experience.”',
    description: 'Investigating cortical mapping, synaptic plasticity mechanisms, and direct non-invasive brain-computer interfaces for cognitive augmentation.',
    skills: ['Cognitive Neural Networks', 'Functional MRI (fMRI)', 'Synaptic Plasticity', 'Brain-Computer Interfaces', 'Cortical Mapping'],
    tools: ['BrainVision', 'MNE-Python', 'OpenBCI', 'fMRI NeuroLab', 'Patch-Clamp Systems'],
    metrics: {
      clearance: 'Neural Ethics Board',
      projects: '7 Clinical Protocols',
      specialty: 'Cortical Mapping'
    },
    voiceStyle: 'Deep, measured academic tone',
    qa: [
      {
        q: 'How can cognitive neuroplasticity be maximized in adulthood?',
        a: 'Through continuous engagement with fundamentally novel heuristic challenges, sustained deep-wave sleep for glymphatic clearance, and high-intensity aerobic exercise.'
      },
      {
        q: 'How close are we to non-invasive brain-computer intent decoding?',
        a: 'Modern non-invasive multimodal decoders achieve 92% predictive accuracy on motor and verbal intention up to 200 milliseconds before conscious execution.'
      }
    ]
  },
  {
    id: 'auto-mobility',
    title: 'Lead Autonomous Mobility & Robotics Engineer',
    titleEn: 'Lead Autonomous Mobility & Robotics Engineer',
    department: 'Autonomous Vehicles & Mechatronics',
    badge: 'Autonomous Systems Lead',
    accentColor: '#38bdf8',
    glowColor: 'rgba(56, 189, 248, 0.35)',
    icon: 'Cpu',
    videoSrc: './videos/Woman_holding_toy_car_1080p_20261018234506.mp4',
    posterSrc: './thumbnails/Woman_holding_toy_car_1080p_20261018234506.mp4.png',
    avatarImage: './avatars_crop/woman_car_avatar.png',
    experience: '11 Years Vehicle R&D',
    impact: 'Level 4/5 Highway Fleet Deployment',
    quote: '“True vehicular autonomy is not just sensors mounted on a chassis. It is the machine’s ability to anticipate human intent fractions of a second before it occurs.”',
    description: 'Engineering multi-sensor perception pipelines (LiDAR, Radar, HD Vision), real-time SLAM, and fault-tolerant mechatronics for next-generation autonomous fleets.',
    skills: ['Level 4/5 Autopilot', 'Multi-Sensor Fusion', 'LiDAR SLAM', 'Fault-Tolerant Ethernet', 'Real-Time Edge Neural Nets', 'Perception Pipelines'],
    tools: ['NVIDIA Drive Orin', 'ROS2 Galactic', 'PyTorch Vision', 'TensorRT', 'C++20', 'CARLA Simulator'],
    metrics: {
      clearance: 'Autonomous Safety Council',
      projects: '3 Platform Generations',
      specialty: 'Edge Perception Pipelines'
    },
    voiceStyle: 'Crisp, confident, engineering-grade timbre',
    qa: [
      {
        q: 'How do autonomous systems reliably solve edge cases in urban driving?',
        a: 'By generating tens of millions of photorealistic synthetic stress scenarios in CARLA and Omniverse, reinforced by deterministic fail-safe braking heuristics.'
      },
      {
        q: 'Why does LiDAR remain indispensable alongside stereo cameras?',
        a: 'LiDAR delivers absolute geometric spatial coordinates unaffected by glare, shadow, dense fog, or nighttime illumination loss.'
      },
      {
        q: 'What is the maximum permissible perception-to-actuation latency at 120 km/h?',
        a: 'No more than 15-20 milliseconds from photon capture on sensors to torque commands dispatched to steering racks and brake actuators.'
      }
    ]
  },
  {
    id: 'astrophysics',
    title: 'Relativistic Astrophysicist & Gravity Theorist',
    titleEn: 'Relativistic Astrophysicist & Gravity Theorist',
    department: 'Cosmology & Relativistic Physics',
    badge: 'Astrophysics Fellow',
    accentColor: '#a855f7',
    glowColor: 'rgba(168, 85, 247, 0.35)',
    icon: 'Compass',
    videoSrc: './videos/black_holes_combined.mov',
    posterSrc: './thumbnails/black_holes_combined.mov.png',
    avatarImage: './avatars_crop/woman_car_avatar.png',
    experience: '14 Years Fundamental Inquiry',
    impact: '18 Papers in Astrophysical Journal',
    quote: '“The event horizon marks the boundary of known physics, where space and time exchange fundamental topological roles.”',
    description: 'Simulating nonlinear spacetime curvature around rotating Kerr black holes, relativistic accretion disc dynamics, and gravitational wave signals from compact binary mergers.',
    skills: ['General Relativity', 'Gravitational Wave Geodesics', 'Relativistic Magnetohydrodynamics', 'Numerical GR', 'Quantum Field Theory in Curved Spacetime'],
    tools: ['Einstein Toolkit', 'LIGO Science Pack', 'Python GR', 'Astropy', 'HPC Clusters'],
    metrics: {
      clearance: 'Astrophysical Observatory Lead',
      projects: '4 Gravitational Catalogs',
      specialty: 'Kerr Spacetime Geodesics'
    },
    voiceStyle: 'Deep, philosophical, measured baritone',
    qa: [
      {
        q: 'What happens to information falling past a black hole event horizon?',
        a: 'Under modern AdS/CFT holographic duality, information is encoded on the quantum stretched horizon and holographically preserved in entangled Hawking radiation.'
      },
      {
        q: 'How do gravitational wave observatories detect sub-proton spatial distortions?',
        a: 'Via 4-kilometer Fabry-Perot laser interferometry enhanced by frequency-dependent quantum squeezed light and ultra-isolated mirror suspensions.'
      }
    ]
  },
  {
    id: 'farm-ecology',
    title: 'Regenerative AgroTech & Ecological Architect',
    titleEn: 'Regenerative AgroTech & Ecological Architect',
    department: 'Sustainable Agronomy & Soil Systems',
    badge: 'AgroTech Fellow',
    accentColor: '#eab308',
    glowColor: 'rgba(234, 179, 8, 0.35)',
    icon: 'Trees',
    videoSrc: './videos/farm_videos_combined.mov',
    posterSrc: './thumbnails/farm_videos_combined.mov.png',
    avatarImage: './avatars_crop/farmer_avatar.jpg',
    experience: '13 Years Sustainable Agriculture',
    impact: '25,000 Hectares Zero-Erosion Restored',
    quote: '“Healthy soil is a living quantum carbon reactor. The future of global agriculture unites ancient mycorrhizal biology with orbital telemetry.”',
    description: 'Deploying autonomous precision agricultural drones, satellite NDVI spectral imaging, zero-tillage agroecology, and closed-loop soil biome replenishment at commercial scale.',
    skills: ['Satellite NDVI Spectral Analysis', 'No-Till Agroecology', 'Soil Microbiome Enrichment', 'Autonomous Drone Fleets', 'Carbon Sequestration Farming'],
    tools: ['Sentinel-2 Orbital Hub', 'QGIS Spatial Suite', 'IoT Moisture Mesh', 'FarmBot Automated Fleet', 'AgriAI Engine'],
    metrics: {
      clearance: 'Sustainable Land Stewardship',
      projects: '8 Regional Agro-Clusters',
      specialty: 'Soil Carbon Sequestration'
    },
    voiceStyle: 'Warm, grounded, empirical tone',
    qa: [
      {
        q: 'How does regenerative agriculture eliminate artificial chemical fertilizers?',
        a: 'By preserving subterranean fungal mycelial networks, roots naturally establish symbiotic relationships with nitrogen-fixing bacteria, retaining moisture and minerals.'
      },
      {
        q: 'What role does multispectral satellite monitoring play in daily field stewardship?',
        a: 'It diagnoses crop nitrogen deficiency and localized moisture stress up to seven days before symptoms become discernible to the human eye.'
      }
    ]
  },
  {
    id: 'aquatic-kinetics',
    title: 'Aquatic Kinetics & Sports Biomechanic',
    titleEn: 'Aquatic Kinetics & Sports Biomechanic',
    department: 'Human Physiology & Hydrodynamics',
    badge: 'Olympic Performance Scientist',
    accentColor: '#06b6d4',
    glowColor: 'rgba(6, 182, 212, 0.35)',
    icon: 'Activity',
    videoSrc: './videos/swimming_videos_swapped.mov',
    posterSrc: './thumbnails/swimming_videos_swapped.mov.png',
    avatarImage: './avatars_crop/director_avatar.jpg',
    experience: '10 Years Elite Athlete Coaching',
    impact: '14 Olympic & World Championship Medals',
    quote: '“Water is 800 times denser than air. Victory is not won by pulling harder, but by minimizing hydrodynamic turbulence and form drag.”',
    description: 'Optimizing laminar streamline profiles of the human body, trailing vortex reduction around propulsion surfaces, and cellular lactate clearance during peak aerobic efforts.',
    skills: ['Hydrodynamic Drag Minimization', 'High-Speed Motion Analysis (1000 fps)', 'Lactate Kinetic Buffering', 'VO2 Peak Optimization', 'Neuromuscular Synchronization'],
    tools: ['Dartfish Motion Capture', 'HydroCFD Simulation', 'Cosmed K5 Spirometry', 'Wireless Surface EMG'],
    metrics: {
      clearance: 'Olympic High-Performance Lab',
      projects: '22 Training Protocols',
      specialty: 'Fluid Boundary Layer Management'
    },
    voiceStyle: 'Dynamic, inspiring, results-oriented delivery',
    qa: [
      {
        q: 'What is the primary physical differentiator of an Olympic swimmer?',
        a: 'Sustaining a razor-sharp horizontal body waterline and anchoring the forearm against still water without breaking the laminar boundary layer.'
      },
      {
        q: 'How does computational fluid dynamics improve start and turn kinematics?',
        a: 'It maps turbulent trailing vortices, guiding the swimmer to adjust entry pitch and dolphin kick amplitude for maximum conservation of momentum.'
      }
    ]
  },
  {
    id: 'product-design',
    title: 'Industrial Product & Hardware Ecosystems Architect',
    titleEn: 'Industrial Product & Hardware Ecosystems Architect',
    department: 'Industrial Design & Material Science',
    badge: 'Chief Design Strategist',
    accentColor: '#f43f5e',
    glowColor: 'rgba(244, 63, 94, 0.35)',
    icon: 'Zap',
    videoSrc: './videos/apple_videos_swapped.mov',
    posterSrc: './thumbnails/apple_videos_swapped.mov.png',
    avatarImage: './avatars_crop/mechanic_avatar.jpg',
    experience: '15 Years Consumer Electronics',
    impact: 'Over 50M Precision Devices Shipped',
    quote: '“Design is not merely how a device looks on a pedestal. Design is how flawlessly and intuitively it operates beneath your fingertips.”',
    description: 'Sculpting high-precision consumer electronics, advancing titanium and anodized aluminum CMF metallurgy, and forging frictionless multi-device continuity ecosystems.',
    skills: ['CMF Materials Engineering', 'Haptic Proprioception', 'Precision Micromechanics', 'Unified Device Ecosystems', 'Architectural Ergonomics'],
    tools: ['Rhino 3D CAD', 'KeyShot Pro', '5-Axis CNC Milling', 'Apple Metal Prototyping', 'Figma Design Systems'],
    metrics: {
      clearance: 'Hardware Confidential / Design Studio',
      projects: '16 Flagship Hardware Lines',
      specialty: 'Tactile Micro-Precision'
    },
    voiceStyle: 'Succinct, refined, detail-obsessed phrasing',
    qa: [
      {
        q: 'Why does tactile haptic feedback outweigh visual animation in product satisfaction?',
        a: 'Tactile confirmation creates immediate subconscious muscle trust. Human fingertips detect micron-level surface variations within milliseconds.'
      },
      {
        q: 'What is the golden rule for frictionless cross-device continuity?',
        a: 'Context preservation: a task initiated on a wearable device must seamlessly resume on an ultra-wide desktop canvas without a single extra interaction.'
      }
    ]
  },
  {
    id: 'omni-showcase',
    title: 'Universal Polymath & Cross-Discipline Fellow',
    titleEn: 'Universal Polymath & Cross-Discipline Fellow',
    department: 'Multidisciplinary Knowledge Synthesis',
    badge: 'Universal Polymath',
    accentColor: '#ec4899',
    glowColor: 'rgba(236, 72, 153, 0.35)',
    icon: 'Sparkles',
    videoSrc: './videos/combined_videos.mov',
    posterSrc: './thumbnails/combined_videos.mov.png',
    avatarImage: './avatars_crop/showreel_avatar.jpg',
    experience: 'Synthesis of All 6 Frontiers',
    impact: 'Unified Intelligence Architecture',
    quote: '“Disciplinary borders are artificial constructs. Humanity’s greatest breakthroughs emerge at the convergence of autonomous robotics, cosmic gravity, and biological systems.”',
    description: 'Harmonizing cutting-edge engineering, relativistic cosmology, sustainable bio-agronomy, and tactile industrial design into a unified blueprint for tomorrow.',
    skills: ['Cross-Discipline Synthesis', 'Systems Dynamics', 'Long-Range Heuristics', 'Multimodal Intelligence Orchestration', 'Strategic Foresight'],
    tools: ['Nexus Omni Studio', 'Systems Thinking Suite', 'Obsidian Knowledge Graph', 'Cross-Discipline Matrix'],
    metrics: {
      clearance: 'Fellowship Master Deck',
      projects: 'Comprehensive Polymath Spectrum',
      specialty: 'Holistic Intelligence Synthesis'
    },
    voiceStyle: 'Inspiring, resonant, multifaceted cadence',
    qa: [
      {
        q: 'How does a polymathic methodology resolve modern hyper-complex challenges?',
        a: 'Narrow specialization remains blind to systemic cascades. Bridging hydrodynamics, quantum physics, robotics, and ecology creates resilient future architecture.'
      }
    ]
  }
];

// ----------------------------------------------------------------------------
// 2. SOLO MAN AVATAR PORTFOLIO (DR. JULIAN VANCE)
// 3 Custom Video Roles with the Male Avatar:
// 1. Relativistic Astrophysics & Black Holes (black_holes_oct19_combined.mov)
// 2. Neuro-Ophthalmology & Ocular Vision Systems (eye_videos_combined.mov)
// 3. Sustainable AgroTech & Botanical Greenhouse Systems (tomato_videos_combined.mov)
// ----------------------------------------------------------------------------
export const MAN_VIDEOS = [
  {
    id: 'man-black-holes',
    name: 'Relativistic Astrophysics & Black Holes',
    roleTitle: 'Relativistic Astrophysicist & Theoretical Cosmologist',
    department: 'Cosmology & Relativistic Physics',
    videoSrc: './videos/black_holes_oct19_combined.mov',
    posterSrc: './thumbnails/black_holes_oct19_combined.mov.png',
    avatarImg: './avatars_crop/man_oct19_library_avatar.png',
    professionId: 'man-black-holes',
    accentColor: '#a855f7',
    glowColor: 'rgba(168, 85, 247, 0.35)',
    tag: 'ASTROPHYSICS & BLACK HOLES'
  },
  {
    id: 'man-eye-vision',
    name: 'Neuro-Ophthalmology & Vision Systems',
    roleTitle: 'Lead Neuro-Ophthalmologist & Vision Systems Researcher',
    department: 'Neuro-Ophthalmology & Visual Optics',
    videoSrc: './videos/eye_videos_combined.mov',
    posterSrc: './thumbnails/eye_videos_combined.mov.png',
    avatarImg: './avatars_crop/man_oct19_doctor_avatar.png',
    professionId: 'man-eye-vision',
    accentColor: '#38bdf8',
    glowColor: 'rgba(56, 189, 248, 0.35)',
    tag: 'OPHTHALMOLOGY & VISION'
  },
  {
    id: 'man-tomato-agri',
    name: 'Sustainable AgroTech & Botanical Systems',
    roleTitle: 'Botanical Systems & Greenhouse AgroTech Architect',
    department: 'Sustainable Agronomy & Plant Genetics',
    videoSrc: './videos/tomato_videos_combined.mov',
    posterSrc: './thumbnails/tomato_videos_combined.mov.png',
    avatarImg: './avatars_crop/man_oct19_farmer_avatar.png',
    professionId: 'man-tomato-agri',
    accentColor: '#eab308',
    glowColor: 'rgba(234, 179, 8, 0.35)',
    tag: 'AGROTECH & BOTANY'
  }
];

export const MAN_AVATAR_PROFILE = {
  id: 'omni-avatar-man',
  gender: 'man',
  genderLabel: 'Solo Man Avatar',
  genderLabelRu: 'Соло-аватар: Мужчина',
  name: 'Dr. Julian Vance',
  title: 'Lead Omni-Scientist & Multidisciplinary Fellow',
  avatarImage: './avatars_crop/man_avatar.png',
  videoSrc: './videos/black_holes_oct19_combined.mov',
  posterSrc: './thumbnails/black_holes_oct19_combined.mov.png',
  videoFocus: '50% 30%',
  bio: 'Distinguished multidisciplinary researcher directing vanguard initiatives across relativistic astrophysics and Kerr black hole spacetime curvature, clinical neuro-ophthalmology and retinal microvascular diagnostics, and sustainable high-tech greenhouse agro-ecosystems.',
  totalMasteredRoles: 3,
  version: 7
};

export const MAN_PROFESSIONS = [
  {
    id: 'man-black-holes',
    title: 'Relativistic Astrophysicist & Theoretical Cosmologist',
    titleEn: 'Relativistic Astrophysicist & Theoretical Cosmologist',
    department: 'Cosmology & Relativistic Physics',
    badge: 'Astrophysics Fellow',
    accentColor: '#a855f7',
    glowColor: 'rgba(168, 85, 247, 0.35)',
    icon: 'Compass',
    videoSrc: './videos/black_holes_oct19_combined.mov',
    posterSrc: './thumbnails/black_holes_oct19_combined.mov.png',
    avatarImage: './avatars_crop/man_oct19_library_avatar.png',
    experience: '15 Years Astrophysical Research',
    impact: 'Theoretical Black Hole Models & Horizon Geometry',
    quote: '“The event horizon marks the boundary of known physics, where space and time exchange fundamental topological roles.”',
    description: 'Simulating nonlinear spacetime curvature around rotating Kerr black holes, relativistic accretion disc dynamics, and gravitational wave signals from compact binary mergers.',
    skills: ['General Relativity', 'Gravitational Geodesics', 'Relativistic Magnetohydrodynamics', 'Quantum Field Theory', 'Numerical GR'],
    tools: ['Einstein Toolkit', 'LIGO Science Pack', 'Python GR', 'Astropy', 'HPC Clusters'],
    metrics: {
      clearance: 'Astrophysical Observatory Lead',
      projects: 'Kerr Metric Calculations',
      specialty: 'Spacetime Singularity Physics'
    },
    voiceStyle: 'Deep, measured, contemplative baritone',
    qa: [
      {
        q: 'What happens to information falling past a black hole event horizon?',
        a: 'Under modern holographic duality, information is encoded on the quantum stretched horizon and holographically preserved in entangled Hawking radiation.'
      },
      {
        q: 'How do gravitational wave observatories detect sub-proton spatial distortions?',
        a: 'Via 4-kilometer laser interferometry enhanced by frequency-dependent quantum squeezed light and ultra-isolated mirror suspensions.'
      },
      {
        q: 'How does relativistic frame dragging affect objects orbiting rotating black holes?',
        a: 'Inside the ergosphere, spacetime itself is dragged at the speed of light along the black hole spin axis. No particle can remain stationary relative to a distant observer.'
      }
    ]
  },
  {
    id: 'man-eye-vision',
    title: 'Lead Neuro-Ophthalmologist & Vision Systems Researcher',
    titleEn: 'Lead Neuro-Ophthalmologist & Vision Systems Researcher',
    department: 'Neuro-Ophthalmology & Visual Optics',
    badge: 'Principal Neuro-Ophthalmologist',
    accentColor: '#38bdf8',
    glowColor: 'rgba(56, 189, 248, 0.35)',
    icon: 'Activity',
    videoSrc: './videos/eye_videos_combined.mov',
    posterSrc: './thumbnails/eye_videos_combined.mov.png',
    avatarImage: './avatars_crop/man_oct19_doctor_avatar.png',
    experience: '12 Years Clinical & Optical Systems Research',
    impact: 'High-Resolution Retinal Mapping & Neural Optic Decoders',
    quote: '“The human eye is the only place where living neural and vascular pathways can be observed directly in real time without surgical invasion.”',
    description: 'Investigating retinal microvascular architecture, optic nerve neuro-regeneration, adaptive optics scanning laser ophthalmoscopy, and neural vision interfaces.',
    skills: ['Adaptive Optics Ophthalmoscopy', 'Optical Coherence Tomography (OCT)', 'Retinal Microvasculature', 'Optic Nerve Plasticity', 'Bionic Photoreceptors'],
    tools: ['Heidelberg Spectralis OCT', 'Adaptive Optics SLO', 'Ocular Wavefront Analyzer', 'Visual Field Perimetry', 'Neural Decoders'],
    metrics: {
      clearance: 'Clinical Neural & Optical Board',
      projects: '14 Clinical Protocols',
      specialty: 'Retinal Microvasculature'
    },
    voiceStyle: 'Articulate, reassuring, clinical precision',
    qa: [
      {
        q: 'How can retinal vascular imaging detect early systemic and neurodegenerative disorders?',
        a: 'Retinal micro-vessels mirror cerebral microcirculation directly. AI-driven fractal dimension and tortuosity analysis identify preclinical signs of stroke risk, hypertension, and cognitive decline years before systemic symptoms appear.'
      },
      {
        q: 'What is the current threshold for restoring visual function with bionic retinal implants?',
        a: 'High-density subretinal photovoltaic microarrays currently restore landmark recognition and high-contrast letter reading up to 20/400 visual acuity, with next-gen optogenetic therapies targeting single-cell resolution.'
      },
      {
        q: 'How does adaptive optics compensate for ocular optical aberrations in vivo?',
        a: 'By measuring wavefront distortions through a Hartmann-Shack sensor and dynamically reshaping a deformable mirror up to 1,000 times per second, resolving individual rod and cone photoreceptors.'
      }
    ]
  },
  {
    id: 'man-tomato-agri',
    title: 'Botanical Systems & Greenhouse AgroTech Architect',
    titleEn: 'Botanical Systems & Greenhouse AgroTech Architect',
    department: 'Sustainable Agronomy & Plant Genetics',
    badge: 'AgroTech Fellow',
    accentColor: '#eab308',
    glowColor: 'rgba(234, 179, 8, 0.35)',
    icon: 'Trees',
    videoSrc: './videos/tomato_videos_combined.mov',
    posterSrc: './thumbnails/tomato_videos_combined.mov.png',
    avatarImage: './avatars_crop/man_oct19_farmer_avatar.png',
    experience: '14 Years Controlled-Environment Agriculture',
    impact: 'Closed-Loop Greenhouse Biosystems & Heirloom Crops',
    quote: '“True agricultural abundance unites natural photosynthetic biology with precision closed-loop microclimate telemetry.”',
    description: 'Developing autonomous climate-controlled greenhouse ecosystems, spectral LED photosynthetic optimization, biological pest control, and heirloom crop resilience.',
    skills: ['Closed-Loop Hydroponics', 'Multispectral PAR Optimization', 'Biological Integrated Pest Management', 'Microclimate Telemetry', 'Heirloom Plant Genetics'],
    tools: ['IoT Climate Mesh', 'Quantum PAR Sensors', 'Drip Fertigation Automation', 'Bio-Inoculation Chambers', 'Thermal Infrared Scanners'],
    metrics: {
      clearance: 'Sustainable Agriculture Stewardship',
      projects: '12 Autonomous Greenhouse Facilities',
      specialty: 'Closed-Loop Photosynthetic Optimization'
    },
    voiceStyle: 'Grounded, warm, authentic delivery',
    qa: [
      {
        q: 'How does spectral LED light tuning accelerate photosynthetic yield without heat stress?',
        a: 'By dynamically balancing 660nm deep red and 450nm royal blue photon fluxes to match chlorophyll absorption peaks while pulsing far-red 730nm light to trigger the Emerson enhancement effect.'
      },
      {
        q: 'Why is closed-loop precision greenhouse farming essential for future food security?',
        a: 'It uses 90% less water than traditional open-field agriculture, eliminates chemical run-off through bio-filtering, and guarantees consistent year-round nutrition unaffected by climate shocks.'
      },
      {
        q: 'How do beneficial micro-organisms in the root zone protect crops against pathogens?',
        a: 'Symbiotic Bacillus and Trichoderma strains colonize the rhizosphere, forming a protective biofilm around root hairs and out-competing harmful fungi for nutrients while inducing systemic plant resistance.'
      }
    ]
  }
];

// ----------------------------------------------------------------------------
// 3. UNIFIED SOLO AVATARS REGISTRY
// ----------------------------------------------------------------------------
export const SOLO_AVATARS_DATA = {
  man: {
    key: 'man',
    gender: 'man',
    label: 'Solo Man Avatar',
    labelRu: 'Соло-аватар: Мужчина',
    shortName: 'Dr. Julian Vance',
    roleTag: '3 Mastered Roles',
    avatarImg: './avatars_crop/man_avatar.png',
    accentColor: '#a855f7',
    glowColor: 'rgba(168, 85, 247, 0.35)',
    defaultProfile: MAN_AVATAR_PROFILE,
    videos: MAN_VIDEOS,
    professions: MAN_PROFESSIONS
  },
  woman: {
    key: 'woman',
    gender: 'woman',
    label: 'Solo Woman Avatar',
    labelRu: 'Соло-аватар: Женщина',
    shortName: 'Elena Valeri',
    roleTag: '7 Active Roles',
    avatarImg: './avatars_crop/doctor_brain_avatar.png',
    accentColor: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.35)',
    defaultProfile: WOMAN_AVATAR_PROFILE,
    videos: WOMAN_VIDEOS,
    professions: WOMAN_PROFESSIONS
  }
};

// Backward-compatible exports
export const RECENTLY_ADDED_VIDEOS = WOMAN_VIDEOS;
export const DEFAULT_AVATAR_PROFILE = WOMAN_AVATAR_PROFILE;
export const INITIAL_PROFESSIONS = WOMAN_PROFESSIONS;
