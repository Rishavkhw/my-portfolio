import { useState } from "react";
import { Mail, Send, Github, Linkedin, MapPin } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });


  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-mono text-sm mb-2">05. Contact</p>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle mb-12">
          Have a project in your  mind or want to connect? Drop me a message.
        </p>

     
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="text-primary mt-1" size={20} />
              <div>
                <h4 className="font-heading font-semibold text-foreground">Email</h4>
                <p className="text-muted-foreground text-sm">rishabkhatiwada300@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-primary mt-1" size={20} />
              <div>
                <h4 className="font-heading font-semibold text-foreground">Location</h4>
                <p className="text-muted-foreground text-sm">Dharan-16, Nepal</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Github className="text-primary mt-1" size={20} />
              <div>
                <h4 className="font-heading font-semibold text-foreground">GitHub</h4>
                <a href="https://github.com/Rishavkhw" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  github.com/Rishavkhw
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Linkedin className="text-primary mt-1" size={20} />
              <div>
                <h4 className="font-heading font-semibold text-foreground">LinkedIn</h4>
                <a href="https://www.linkedin.com/in/rishavkhatiwada21/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  linkedin.com/in/rishavkhatiwada21/
                </a>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default ContactSection;
