import { Shield, Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/waysafes-logo.jpeg";

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/way-safes-4930393a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/way_safes?igsh=cHc4Y2E1OGRhOGJq", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/share/1CEJxa37nB/", label: "Facebook" },
    { icon: Youtube, href: "https://youtube.com/@waysafes?si=u3quS5Re-Py2Xxzq", label: "YouTube" },
  ];

  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Waysafes Logo" className="h-12 w-12 rounded-full object-cover" />
            <div>
              <span className="text-xl font-serif font-bold text-primary">Waysafes</span>
              <p className="text-xs text-muted-foreground">Technology for Safety</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary hover:scale-110 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Tagline */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm italic">"Safety that speaks when you can't."</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Waysafes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
