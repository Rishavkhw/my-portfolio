import { GraduationCap, Briefcase, Code2, Wifi } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Frontend Dev", desc: "React, TypeScript, Modern UI" },
  { icon: Wifi, label: "Networking", desc: "ISP Ops, Infrastructure" },
  { icon: Briefcase, label: "4+ Internships", desc: "Real-world experience" },
  { icon: GraduationCap, label: "BSc CSIT", desc: "Tribhuvan University" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-mono text-sm mb-2">01. About</p>
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 mt-10">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I am a BSc CSIT student at Tribhuvan University with hands-on experience across ISP operations, public-sector IT, and frontend development. I've worked as a Networking & IT Specialist at Classic Tech ISP, IT Intern at WorldLink, IT Officer Intern at Dharan Municipality, and Frontend Intern at CodeAlpha.
            </p>
            <p>
              My core technical strength lies in frontend development, with strong proficiency in HTML, CSS, JavaScript, and React.js. I focus on building clean, responsive, and user-friendly interfaces and have working knowledge of the MERN stack, enabling effective collaboration across full-stack workflows.
            </p>
            <p>
              I have participated in hackathons, Robothon competitions, and various technical activities, strengthening my problem-solving abilities and practical approach to real-world challenges.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <div
                key={item.label}
                className="p-5 rounded-xl bg-card shadow-card border border-border hover:shadow-glow transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <item.icon className="text-primary mb-3" size={24} />
                <h3 className="font-heading font-semibold text-foreground mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
