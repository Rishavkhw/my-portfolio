const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["HTML", "Tailwind CSS",  "JavaScript", "TypeScript", "React.js", "Responsive Design", "UI/UX Principles"],
  },
  {
    title: "Backend & Mobile Development",
    skills: [ "RESTful APIs integration", "Python", "Django", "Flutter Mobile App Development"],
  },
  {
    title: "Networking & IT",
    skills: ["ISP Operations", "Network Infrastructure", "System Support", "Troubleshooting", "IT Service Management", "Finance Management"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git & GitHub", "VS Code", "Figma", "Canva", "Wordpress", "Postman", "Linux", "Manual Testing",],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-mono text-sm mb-2">02. Skills</p>
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle mb-12">Technologies and tools I work with</p>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className="p-6 rounded-xl bg-card shadow-card border border-border animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <h3 className="font-heading font-semibold text-lg mb-4 text-foreground">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
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

export default SkillsSection;
