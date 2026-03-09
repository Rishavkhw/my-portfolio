import { useState } from "react";
import { Mail, Send, Github, Linkedin, MapPin } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Message sent! (This is a demo)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-mono text-sm mb-2">05. Contact</p>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle mb-12">
          Have a project in mind or want to connect? Drop me a message.
        </p>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="text-primary mt-1" size={20} />
              <div>
                <h4 className="font-heading font-semibold text-foreground">Email</h4>
                <p className="text-muted-foreground text-sm">rishav@example.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-primary mt-1" size={20} />
              <div>
                <h4 className="font-heading font-semibold text-foreground">Location</h4>
                <p className="text-muted-foreground text-sm">Nepal</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Github className="text-primary mt-1" size={20} />
              <div>
                <h4 className="font-heading font-semibold text-foreground">GitHub</h4>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  github.com/rishavkhatiwada
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Linkedin className="text-primary mt-1" size={20} />
              <div>
                <h4 className="font-heading font-semibold text-foreground">LinkedIn</h4>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  linkedin.com/in/rishavkhatiwada
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              <Send size={16} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
