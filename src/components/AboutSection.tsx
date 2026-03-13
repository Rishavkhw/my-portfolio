import { GraduationCap, Briefcase, Code2, Wifi } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Frontend Dev", desc: "React, TypeScript, Modern UI" },
  { icon: Wifi, label: "Networking", desc: "ISP Ops, Infrastructure" },
  { icon: Briefcase, label: "4+ Internships & Jobs", desc: "Real-world experience" },
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
              Driven by a passion for IT and frontend development, my journey as
              a BSc CSIT graduate from Tribhuvan University has been shaped by
              hands-on learning and practical industry exposure. Through
              professional roles and internships, I have gained experience
              across networking operations, public-sector IT systems, fullstack
              web development, web designing and digital marketing, developing a
              well-rounded understanding of how technology supports real-world
              organizations and services.
            </p>
            <p>
              My expertise lies in frontend development with strong skills in
              React.js, JavaScript, and TypeScript, building scalable,
              responsive, and user-friendly interfaces. I have hands-on
              experience in API integration and working knowledge of Python and
              Django, enabling seamless collaboration in modern full-stack web
              applications.
            </p>
            <p>
              Beyond academics and professional experience, I actively
              participate in hackathons, Robothon competitions, and technical
              activities, strengthening my problem-solving mindset, teamwork,
              and practical approach to developing impactful technology
              solutions.{" "}
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
                <h3 className="font-heading font-semibold text-foreground mb-1">
                  {item.label}
                </h3>
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
