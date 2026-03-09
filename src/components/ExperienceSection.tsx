import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "CodeAlpha",
    location: "Pune, India",
    period: "2024",
    description: "Worked on frontend web applications and UI implementation, building responsive interfaces with modern frameworks and collaborating with the development team.",
  },
  {
    role: "IT Intern",
    company: "WorldLink Communications Ltd.",
    location: "Nepal",
    period: "2024",
    description: "Gained experience in networking operations, IT service management, and ISP infrastructure. Supported system maintenance and network troubleshooting.",
  },
  {
    role: "IT Officer Intern",
    company: "Dharan Municipality",
    location: "Nepal",
    period: "2023",
    description: "Provided IT support for public-sector operations, assisted with system administration and digital record management.",
  },
  {
    role: "Networking & IT Specialist",
    company: "Classic Tech ISP",
    location: "Nepal",
    period: "2023",
    description: "Handled networking operations, customer support, and infrastructure troubleshooting in a live ISP environment.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-mono text-sm mb-2">03. Experience</p>
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle mb-12">My professional journey so far</p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="relative pl-12 md:pl-20 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {/* Dot */}
                <div className="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full bg-primary shadow-glow" />

                <div className="p-6 rounded-xl bg-card shadow-card border border-border hover:shadow-glow transition-shadow duration-300">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <Briefcase size={16} className="text-primary" />
                    <span className="text-sm font-mono text-primary">{exp.period}</span>
                    <span className="text-sm text-muted-foreground">· {exp.location}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground">{exp.role}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{exp.company}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
