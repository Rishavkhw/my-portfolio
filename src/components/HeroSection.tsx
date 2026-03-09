import { ArrowDown, Github, Linkedin, FileDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <p className="text-primary font-mono text-sm mb-4 animate-fade-in-up">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Rishav{" "}
            <span className="text-gradient">Khatiwada</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-heading font-medium mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            IT Professional · Frontend Developer · Networking Enthusiast
          </p>
          <p className="text-muted-foreground max-w-xl mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Building modern web systems and solving technical problems — from responsive UIs to networking infrastructure. BSc CSIT student with real-world experience across ISP ops, public-sector IT, and frontend development.
          </p>

          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#"
              className="px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-colors inline-flex items-center gap-2"
            >
              <FileDown size={18} />
              Resume
            </a>
          </div>

          <div className="flex items-center gap-5 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={22} />
            </a>
            <span className="h-px w-16 bg-border" />
            <span className="text-muted-foreground text-sm font-mono">rishav@example.com</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-float">
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default HeroSection;
