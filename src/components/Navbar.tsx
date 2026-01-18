import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/waysafes-logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Stickers", href: "#stickers" },
    { name: "About", href: "#about" },
    { name: "Cab Services", href: "#cab-services" },
    { name: "Download", href: "#download" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="Waysafes Logo" className="h-12 w-12 rounded-full object-cover" />
            <div className="hidden sm:block">
              <span className="text-xl font-serif font-bold text-primary">Waysafes</span>
              <p className="text-xs text-muted-foreground">Technology for Safety</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:7710810844"
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-gold rounded-full text-primary-foreground font-semibold text-sm glow-gold hover:scale-105 transition-transform duration-300"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:7710810844"
              className="flex items-center justify-center gap-2 mt-4 px-5 py-3 bg-gradient-gold rounded-full text-primary-foreground font-semibold"
            >
              <Phone className="w-4 h-4" />
              Call 7710810844
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
