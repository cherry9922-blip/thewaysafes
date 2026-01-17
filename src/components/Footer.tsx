import { Shield } from "lucide-react";
import logo from "@/assets/waysafes-logo.jpeg";

const Footer = () => {
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
