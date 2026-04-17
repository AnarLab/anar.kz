export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  client: string;
  duration: string;
  technologies: string[];
  challenge: string;
  solution: string;
  results: string[];
  year: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Corporate Management System",
    category: "Enterprise Software",
    description: "A comprehensive enterprise resource planning system for a leading manufacturing company",
    image: "https://images.unsplash.com/photo-1775709610612-c589e29679ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NjMzNDAwMXww&ixlib=rb-4.1.0&q=80&w=1080",
    client: "TechCorp International",
    duration: "8 months",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "TypeScript"],
    challenge: "The client needed a unified system to manage inventory, sales, and employee data across multiple locations with real-time synchronization.",
    solution: "We developed a cloud-based ERP system with microservices architecture, enabling seamless data flow and real-time updates across all departments.",
    results: [
      "40% reduction in operational costs",
      "Real-time inventory tracking across 15 locations",
      "Improved employee productivity by 35%",
      "99.9% system uptime"
    ],
    year: "2025"
  },
  {
    id: "2",
    title: "FinTech Mobile Application",
    category: "Mobile Development",
    description: "Secure mobile banking application with advanced financial management features",
    image: "https://images.unsplash.com/photo-1630442923896-244dd3717b35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NzYzMzY3MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    client: "Kazakhstan National Bank",
    duration: "6 months",
    technologies: ["React Native", "Python", "MongoDB", "Firebase", "Blockchain"],
    challenge: "Create a secure, user-friendly mobile banking app that meets strict financial regulations while providing modern features.",
    solution: "Implemented biometric authentication, end-to-end encryption, and a sleek interface with comprehensive financial tools.",
    results: [
      "500K+ active users in first year",
      "4.8 star rating on app stores",
      "Zero security breaches",
      "60% of transactions now mobile"
    ],
    year: "2024"
  },
  {
    id: "3",
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-stack e-commerce solution with AI-powered recommendations",
    image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NzYzODgxNTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    client: "Central Asian Retail Group",
    duration: "5 months",
    technologies: ["Next.js", "GraphQL", "Redis", "Stripe", "TensorFlow"],
    challenge: "Build a scalable e-commerce platform that handles high traffic during sales events and provides personalized shopping experiences.",
    solution: "Developed a headless commerce architecture with AI-driven product recommendations and dynamic pricing capabilities.",
    results: [
      "300% increase in online sales",
      "Average cart value up by 45%",
      "Page load time under 2 seconds",
      "Handled 50K concurrent users"
    ],
    year: "2025"
  },
  {
    id: "4",
    title: "Business Intelligence Dashboard",
    category: "Data Analytics",
    description: "Real-time analytics platform for data-driven decision making",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3NjQzNjAzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    client: "Oil & Gas Analytics Ltd",
    duration: "7 months",
    technologies: ["React", "D3.js", "Python", "Apache Kafka", "Elasticsearch"],
    challenge: "Process and visualize massive amounts of operational data in real-time for strategic decision-making.",
    solution: "Built a comprehensive BI platform with custom visualizations, predictive analytics, and automated reporting.",
    results: [
      "Processing 2M+ data points/hour",
      "Reduced report generation from days to minutes",
      "Identified $5M in cost savings",
      "Improved forecast accuracy by 28%"
    ],
    year: "2024"
  },
  {
    id: "5",
    title: "Creative Agency Website",
    category: "UI/UX Design",
    description: "Award-winning responsive website with immersive animations",
    image: "https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzYzNTk4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    client: "Almaty Design Studio",
    duration: "3 months",
    technologies: ["React", "Motion", "Three.js", "Tailwind CSS", "Vercel"],
    challenge: "Create a visually stunning portfolio website that showcases creative work while maintaining fast load times.",
    solution: "Designed and developed a modern, animation-rich website with optimized assets and progressive image loading.",
    results: [
      "Won Awwwards Site of the Day",
      "95+ Google Lighthouse score",
      "150% increase in client inquiries",
      "Featured in design publications"
    ],
    year: "2025"
  },
  {
    id: "6",
    title: "Healthcare Management Portal",
    category: "Healthcare Tech",
    description: "Integrated patient management system for medical facilities",
    image: "https://images.unsplash.com/photo-1775709610612-c589e29679ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NjMzNDAwMXww&ixlib=rb-4.1.0&q=80&w=1080",
    client: "National Healthcare Network",
    duration: "10 months",
    technologies: ["Vue.js", "Django", "PostgreSQL", "Docker", "HL7 FHIR"],
    challenge: "Digitize patient records and streamline hospital operations while ensuring HIPAA compliance and data security.",
    solution: "Implemented a secure, role-based healthcare portal with electronic health records, appointment scheduling, and telemedicine capabilities.",
    results: [
      "Digitized 100K+ patient records",
      "Reduced patient wait times by 50%",
      "Full HIPAA compliance achieved",
      "Deployed across 12 facilities"
    ],
    year: "2024"
  }
];
