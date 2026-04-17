from __future__ import annotations

from dataclasses import dataclass

from django.core.management.base import BaseCommand

from content.models import Page


@dataclass(frozen=True)
class SeedPage:
    slug: str
    title: str
    description: str
    body: str


def _project_body(
    *,
    category: str,
    client: str,
    duration: str,
    technologies: list[str],
    year: str,
    challenge: str,
    solution: str,
    results: list[str],
) -> str:
    tech = ", ".join(technologies)
    results_md = "\n".join([f"- {r}" for r in results])

    return f"""\
## Overview

- **Category:** {category}
- **Client:** {client}
- **Duration:** {duration}
- **Year:** {year}
- **Technologies:** {tech}

## Challenge

{challenge}

## Solution

{solution}

## Results

{results_md}
"""


def _blog_body(*, content_md: str, author_name: str, author_role: str, tags: list[str]) -> str:
    tags_md = ", ".join([f"`{t}`" for t in tags])
    return f"""\
**Author:** {author_name} ({author_role})  
**Tags:** {tags_md}

{content_md.strip()}
"""


def build_seed_pages() -> list[SeedPage]:
    # Mirrors frontend mock data:
    # - frontend/src/app/data/projects.ts
    # - frontend/src/app/data/blogs.ts

    projects = [
        {
            "id": "1",
            "title": "Corporate Management System",
            "category": "Enterprise Software",
            "description": "A comprehensive enterprise resource planning system for a leading manufacturing company",
            "client": "TechCorp International",
            "duration": "8 months",
            "technologies": ["React", "Node.js", "PostgreSQL", "AWS", "TypeScript"],
            "challenge": "The client needed a unified system to manage inventory, sales, and employee data across multiple locations with real-time synchronization.",
            "solution": "We developed a cloud-based ERP system with microservices architecture, enabling seamless data flow and real-time updates across all departments.",
            "results": [
                "40% reduction in operational costs",
                "Real-time inventory tracking across 15 locations",
                "Improved employee productivity by 35%",
                "99.9% system uptime",
            ],
            "year": "2025",
        },
        {
            "id": "2",
            "title": "FinTech Mobile Application",
            "category": "Mobile Development",
            "description": "Secure mobile banking application with advanced financial management features",
            "client": "Kazakhstan National Bank",
            "duration": "6 months",
            "technologies": ["React Native", "Python", "MongoDB", "Firebase", "Blockchain"],
            "challenge": "Create a secure, user-friendly mobile banking app that meets strict financial regulations while providing modern features.",
            "solution": "Implemented biometric authentication, end-to-end encryption, and a sleek interface with comprehensive financial tools.",
            "results": [
                "500K+ active users in first year",
                "4.8 star rating on app stores",
                "Zero security breaches",
                "60% of transactions now mobile",
            ],
            "year": "2024",
        },
        {
            "id": "3",
            "title": "E-Commerce Platform",
            "category": "Web Development",
            "description": "Full-stack e-commerce solution with AI-powered recommendations",
            "client": "Central Asian Retail Group",
            "duration": "5 months",
            "technologies": ["Next.js", "GraphQL", "Redis", "Stripe", "TensorFlow"],
            "challenge": "Build a scalable e-commerce platform that handles high traffic during sales events and provides personalized shopping experiences.",
            "solution": "Developed a headless commerce architecture with AI-driven product recommendations and dynamic pricing capabilities.",
            "results": [
                "300% increase in online sales",
                "Average cart value up by 45%",
                "Page load time under 2 seconds",
                "Handled 50K concurrent users",
            ],
            "year": "2025",
        },
        {
            "id": "4",
            "title": "Business Intelligence Dashboard",
            "category": "Data Analytics",
            "description": "Real-time analytics platform for data-driven decision making",
            "client": "Oil & Gas Analytics Ltd",
            "duration": "7 months",
            "technologies": ["React", "D3.js", "Python", "Apache Kafka", "Elasticsearch"],
            "challenge": "Process and visualize massive amounts of operational data in real-time for strategic decision-making.",
            "solution": "Built a comprehensive BI platform with custom visualizations, predictive analytics, and automated reporting.",
            "results": [
                "Processing 2M+ data points/hour",
                "Reduced report generation from days to minutes",
                "Identified $5M in cost savings",
                "Improved forecast accuracy by 28%",
            ],
            "year": "2024",
        },
        {
            "id": "5",
            "title": "Creative Agency Website",
            "category": "UI/UX Design",
            "description": "Award-winning responsive website with immersive animations",
            "client": "Almaty Design Studio",
            "duration": "3 months",
            "technologies": ["React", "Motion", "Three.js", "Tailwind CSS", "Vercel"],
            "challenge": "Create a visually stunning portfolio website that showcases creative work while maintaining fast load times.",
            "solution": "Designed and developed a modern, animation-rich website with optimized assets and progressive image loading.",
            "results": [
                "Won Awwwards Site of the Day",
                "95+ Google Lighthouse score",
                "150% increase in client inquiries",
                "Featured in design publications",
            ],
            "year": "2025",
        },
        {
            "id": "6",
            "title": "Healthcare Management Portal",
            "category": "Healthcare Tech",
            "description": "Integrated patient management system for medical facilities",
            "client": "National Healthcare Network",
            "duration": "10 months",
            "technologies": ["Vue.js", "Django", "PostgreSQL", "Docker", "HL7 FHIR"],
            "challenge": "Digitize patient records and streamline hospital operations while ensuring HIPAA compliance and data security.",
            "solution": "Implemented a secure, role-based healthcare portal with electronic health records, appointment scheduling, and telemedicine capabilities.",
            "results": [
                "Digitized 100K+ patient records",
                "Reduced patient wait times by 50%",
                "Full HIPAA compliance achieved",
                "Deployed across 12 facilities",
            ],
            "year": "2024",
        },
    ]

    blog_posts = [
        {
            "id": "1",
            "title": "The Future of AI in Business: Trends to Watch in 2026",
            "excerpt": "Explore how artificial intelligence is revolutionizing business operations and what trends will dominate in the coming year.",
            "content": """
Artificial Intelligence continues to transform the business landscape at an unprecedented pace. As we move through 2026, several key trends are emerging that will reshape how companies operate and compete.

## Machine Learning Integration

Machine learning models are becoming more accessible and easier to integrate into existing business processes. Companies are leveraging AI for predictive analytics, customer behavior analysis, and automated decision-making.

## Natural Language Processing Advances

NLP technologies have reached new heights, enabling more natural human-computer interactions. Chatbots and virtual assistants are now capable of understanding context and nuance, providing genuinely helpful customer service.

## AI-Powered Automation

Robotic Process Automation (RPA) combined with AI is streamlining repetitive tasks across industries. This allows employees to focus on creative and strategic work that adds more value to the organization.

## Ethical AI and Transparency

As AI becomes more prevalent, companies are prioritizing ethical considerations and transparency in their AI systems. Explainable AI is becoming a standard requirement in regulated industries.

## Edge AI Computing

Processing AI models at the edge, closer to where data is generated, is reducing latency and improving real-time decision-making capabilities in IoT devices and autonomous systems.

The future of AI in business is bright, but it requires careful planning, ethical considerations, and a commitment to continuous learning and adaptation.
""",
            "author_name": "Askar Nurmagambetov",
            "author_role": "Chief Technology Officer",
            "category": "Artificial Intelligence",
            "tags": ["AI", "Machine Learning", "Business", "Technology"],
            "publishedDate": "2026-04-10",
            "readTime": "8 min read",
        },
        {
            "id": "2",
            "title": "Cloud Migration Strategies for Enterprise Applications",
            "excerpt": "A comprehensive guide to successfully migrating your enterprise applications to the cloud with minimal disruption.",
            "content": """
Cloud migration is no longer optional for enterprises seeking to remain competitive. However, the journey to the cloud requires careful planning and execution.

## Assessing Your Current Infrastructure

Before migrating, conduct a thorough assessment of your existing applications, data, and infrastructure. Identify which workloads are cloud-ready and which require refactoring.

## Choosing the Right Cloud Model

Whether you opt for public, private, or hybrid cloud, each model has its advantages. Consider factors like security requirements, compliance needs, and budget constraints.

## Migration Strategies

**Rehost (Lift and Shift):** Quick migration with minimal changes  
**Replatform:** Optimize for cloud without changing core architecture  
**Refactor:** Redesign applications to be cloud-native  
**Rebuild:** Complete rewrite using cloud-native technologies

## Data Migration Challenges

Moving large volumes of data requires bandwidth planning, data validation, and ensuring minimal downtime. Consider using hybrid approaches during transition periods.

## Security and Compliance

Ensure your cloud provider meets industry-specific compliance requirements. Implement proper identity and access management, encryption, and monitoring solutions.

## Cost Optimization

Monitor cloud spending closely. Use auto-scaling, reserved instances, and spot instances to optimize costs while maintaining performance.

A successful cloud migration transforms not just your infrastructure, but your entire approach to IT operations and business agility.
""",
            "author_name": "Dinara Suleimenova",
            "author_role": "Cloud Solutions Architect",
            "category": "Cloud Computing",
            "tags": ["Cloud", "Migration", "Enterprise", "DevOps"],
            "publishedDate": "2026-04-05",
            "readTime": "10 min read",
        },
        {
            "id": "3",
            "title": "Cybersecurity Best Practices for Modern Businesses",
            "excerpt": "Essential cybersecurity measures every business should implement to protect against evolving threats.",
            "content": """
In today's digital landscape, cybersecurity is not just an IT concern—it's a business imperative. Here's how to protect your organization.

## Zero Trust Architecture

Adopt a "never trust, always verify" approach. Implement strict identity verification for every person and device trying to access resources on your network.

## Multi-Factor Authentication (MFA)

MFA adds an essential layer of security. Require it for all users, especially those with access to sensitive data or administrative functions.

## Regular Security Audits

Conduct frequent vulnerability assessments and penetration testing. Stay ahead of threats by identifying and fixing security gaps before they're exploited.

## Employee Training

Human error remains the biggest security risk. Regular training on phishing, social engineering, and security best practices is crucial.

## Data Encryption

Encrypt data both at rest and in transit. This ensures that even if data is intercepted or stolen, it remains unreadable without the encryption keys.

## Incident Response Plan

Have a comprehensive incident response plan ready. Know exactly what to do when a security breach occurs to minimize damage and recovery time.

## Regular Backups

Maintain regular, secure backups of critical data. Test your backup and recovery processes to ensure they work when needed.

## Network Segmentation

Divide your network into segments to limit the spread of potential breaches and make it easier to monitor and control access.

Cybersecurity is an ongoing process, not a one-time implementation. Stay vigilant and keep your defenses updated.
""",
            "author_name": "Marat Zhumabayev",
            "author_role": "Security Specialist",
            "category": "Cybersecurity",
            "tags": ["Security", "Cybersecurity", "Best Practices", "Privacy"],
            "publishedDate": "2026-03-28",
            "readTime": "7 min read",
        },
        {
            "id": "4",
            "title": "Building Scalable Microservices Architecture",
            "excerpt": "Learn how to design and implement microservices that can grow with your business needs.",
            "content": """
Microservices architecture has become the standard for building scalable, maintainable applications. Here's how to do it right.

## Understanding Microservices

Microservices break down applications into small, independent services that communicate through APIs. Each service focuses on a specific business capability.

## Service Design Principles

- **Single Responsibility:** Each microservice should have one clear purpose
- **Loose Coupling:** Services should be independent and not rely heavily on each other
- **High Cohesion:** Related functionality should be grouped together

## API Gateway Pattern

Use an API gateway as a single entry point for clients. It handles routing, authentication, rate limiting, and load balancing.

## Database Per Service

Each microservice should have its own database to ensure independence. Use event-driven patterns for data synchronization when needed.

## Container Orchestration

Use Kubernetes or similar tools to manage containerized microservices. This provides automatic scaling, health checks, and self-healing capabilities.

## Monitoring and Observability

Implement comprehensive logging, metrics, and tracing across all services. Tools like Prometheus, Grafana, and Jaeger are essential.

## Service Mesh

Consider implementing a service mesh like Istio for advanced traffic management, security, and observability features.

## CI/CD Pipeline

Automate testing and deployment. Each microservice should have its own pipeline for independent releases.

Microservices offer flexibility and scalability but require careful planning and the right tooling to succeed.
""",
            "author_name": "Aliya Kozhakhmetova",
            "author_role": "Software Architect",
            "category": "Software Development",
            "tags": ["Microservices", "Architecture", "DevOps", "Scalability"],
            "publishedDate": "2026-03-20",
            "readTime": "12 min read",
        },
        {
            "id": "5",
            "title": "The Rise of Low-Code/No-Code Development Platforms",
            "excerpt": "How low-code platforms are democratizing software development and accelerating digital transformation.",
            "content": """
Low-code and no-code platforms are transforming how organizations build applications, making development accessible to non-technical users.

## What Are Low-Code Platforms?

Low-code platforms provide visual interfaces and pre-built components that minimize hand-coding. They enable rapid application development with less technical expertise.

## Benefits for Businesses

- **Faster Development:** Build applications in days instead of months
- **Reduced Costs:** Less need for specialized developers
- **Business Agility:** Quickly adapt to changing requirements
- **Empowered Users:** Business users can create their own solutions

## Use Cases

Low-code platforms excel at:
- Internal business applications
- Workflow automation
- Customer portals
- Data collection forms
- Dashboard and reporting tools

## When to Use Traditional Development

Complex applications with unique requirements, high-performance needs, or extensive integrations may still require traditional development approaches.

## Integration Capabilities

Modern low-code platforms offer robust integration options with existing systems, databases, and third-party services through APIs and connectors.

## Security Considerations

Ensure your low-code platform meets security standards, offers proper access controls, and complies with relevant regulations.

## The Future of Development

Low-code doesn't replace developers—it augments them. Professional developers can focus on complex problems while business users handle simpler applications.

As these platforms mature, we'll see even more sophisticated applications built with minimal coding.
""",
            "author_name": "Yerlan Akhmetov",
            "author_role": "Digital Transformation Lead",
            "category": "Software Development",
            "tags": ["Low-Code", "No-Code", "Development", "Innovation"],
            "publishedDate": "2026-03-15",
            "readTime": "6 min read",
        },
    ]

    seed: list[SeedPage] = []

    # High-level landing pages (helpful for CMS navigation)
    seed.append(
        SeedPage(
            slug="home",
            title="Home",
            description="Homepage content and hero copy.",
            body="""\
## Transforming Ideas Into Digital Reality

We are a leading IT company in Kazakhstan, specializing in custom software development, mobile apps, and digital solutions.
""",
        )
    )
    seed.append(
        SeedPage(
            slug="portfolio",
            title="Portfolio",
            description="Selected projects and case studies.",
            body="A curated list of our latest projects.\n",
        )
    )
    seed.append(
        SeedPage(
            slug="blog",
            title="Blog",
            description="Insights and articles from our team.",
            body="Latest posts about AI, cloud, security, and architecture.\n",
        )
    )
    seed.append(
        SeedPage(
            slug="contact",
            title="Contact",
            description="How to reach us.",
            body="""\
## Get in touch

Tell us about your project and we’ll respond with next steps.
""",
        )
    )

    # Project pages
    for p in projects:
        seed.append(
            SeedPage(
                slug=f"project-{p['id']}",
                title=p["title"],
                description=p["description"],
                body=_project_body(
                    category=p["category"],
                    client=p["client"],
                    duration=p["duration"],
                    technologies=p["technologies"],
                    year=p["year"],
                    challenge=p["challenge"],
                    solution=p["solution"],
                    results=p["results"],
                ),
            )
        )

    # Blog pages
    for b in blog_posts:
        seed.append(
            SeedPage(
                slug=f"blog-{b['id']}",
                title=b["title"],
                description=b["excerpt"],
                body=_blog_body(
                    content_md=b["content"],
                    author_name=b["author_name"],
                    author_role=b["author_role"],
                    tags=b["tags"],
                ),
            )
        )

    return seed


class Command(BaseCommand):
    help = "Seed database with mock CMS pages (projects + blog posts)."

    def add_arguments(self, parser):
        parser.add_argument(
            "--clear",
            action="store_true",
            help="Delete existing pages before seeding.",
        )

    def handle(self, *args, **options):
        pages = build_seed_pages()

        if options["clear"]:
            deleted, _ = Page.objects.all().delete()
            self.stdout.write(self.style.WARNING(f"Deleted {deleted} objects"))

        created = 0
        updated = 0

        for p in pages:
            obj, was_created = Page.objects.update_or_create(
                slug=p.slug,
                defaults={
                    "title": p.title,
                    "description": p.description,
                    "body": p.body,
                },
            )
            if was_created:
                created += 1
            else:
                updated += 1

        self.stdout.write(self.style.SUCCESS(f"Seed complete: created={created}, updated={updated}"))

