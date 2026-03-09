import { ExternalLink, Github, Car, Recycle, ShoppingCart } from "lucide-react";

const projects = [
  {
    title: "Bluebook Renew System",
    icon: Car,
    description: "A web-based system that manages vehicle bluebook and insurance renewal requests with admin dashboard, request tracking, payment status management, and filtering/sorting features.",
    tech: ["React", "TypeScript", "Tailwind CSS", "REST API"],
    highlights: ["Admin Dashboard", "Request Tracking", "Payment Management", "Filter & Sort"],
  },
  {
    title: "Digital Waste Management System",
    icon: Recycle,
    description: "A mobile application designed to improve waste collection systems with waste pickup scheduling, live truck tracking, issue reporting with images, and reward-based reporting.",
    tech: ["React Native", "Node.js", "MongoDB", "Maps API"],
    highlights: ["Pickup Scheduling", "Live Tracking", "Image Reporting", "Reward System"],
  },
  {
    title: "RKStore Ecommerce Website",
    icon: ShoppingCart,
    description: "An ecommerce frontend project built with modern UI design, responsive layout, product catalog, and shopping cart functionality.",
    tech: ["React", "CSS3", "JavaScript", "Responsive Design"],
    highlights: ["Modern UI", "Responsive Layout", "Product Catalog", "Shopping Cart"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-mono text-sm mb-2">04. Projects</p>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle mb-12">Some things I've built</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group p-6 rounded-xl bg-card shadow-card border border-border hover:shadow-glow hover:-translate-y-1 transition-all duration-300 animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <project.icon className="text-primary" size={28} />
                <div className="flex gap-3">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={18} />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.highlights.map((h) => (
                  <span key={h} className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary font-medium">
                    {h}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
