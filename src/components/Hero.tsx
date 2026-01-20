import { ArrowRight, Shield, Play } from "lucide-react";
import logo from "@/assets/waysafes-logo.jpeg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-radial-gold opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Animation */}
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex flex-col items-center">
              <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-gold glow-gold-lg">
                <img
                  src={logo}
                  alt="Waysafes Logo"
                  className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover animate-pulse-gold"
                />
              </div>
              <h2 className="mt-4 text-2xl md:text-3xl font-serif font-bold text-gradient-gold">Waysafes</h2>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Technology for Safety</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="text-foreground">Your Vehicle.</span>
            <br />
            <span className="text-gradient-gold">Your Safety.</span>
            <br />
            <span className="text-foreground">Your Control.</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Safety that speaks when you can't. Protect your vehicle and loved ones with instant emergency alerts, 24/7 support, and smart vehicle management.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <a
              href="#download"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-gold rounded-full text-primary-foreground font-semibold glow-gold hover:scale-105 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#features"
              className="flex items-center gap-3 px-8 py-4 border-gradient-gold rounded-full text-foreground font-semibold hover:bg-primary/10 transition-all duration-300"
            >
              <Play className="w-5 h-5 text-primary" />
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">24/7</p>
              <p className="text-sm text-muted-foreground mt-1">Support Available</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">5+</p>
              <p className="text-sm text-muted-foreground mt-1">Alert Types</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground mt-1">Secure</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
