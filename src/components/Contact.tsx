import { Phone, Clock, MapPin, ExternalLink } from "lucide-react";
import whatsappLogo from "@/assets/whatsapp-logo.webp";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Get In <span className="text-gradient-gold">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions? We're here to help 24/7
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto">
          {/* Phone */}
          <a
            href="tel:7710810844"
            className="group p-4 md:p-6 rounded-xl md:rounded-2xl border border-border bg-secondary/30 hover:border-primary/50 transition-all duration-300 text-center card-hover"
          >
            <div className="w-10 h-10 md:w-14 md:h-14 mx-auto rounded-lg md:rounded-xl bg-gradient-gold flex items-center justify-center mb-2 md:mb-4 glow-gold group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-5 h-5 md:w-7 md:h-7 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">Call Us</h3>
            <p className="text-lg md:text-2xl font-bold text-primary">7710810844</p>
          </a>

          {/* 24/7 Support */}
          <div className="group p-4 md:p-6 rounded-xl md:rounded-2xl border border-border bg-secondary/30 text-center">
            <div className="w-10 h-10 md:w-14 md:h-14 mx-auto rounded-lg md:rounded-xl bg-gradient-gold flex items-center justify-center mb-2 md:mb-4 glow-gold">
              <Clock className="w-5 h-5 md:w-7 md:h-7 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">Support Hours</h3>
            <p className="text-base md:text-lg text-primary font-bold">24×7 Available</p>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/+917710810844"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 md:p-6 rounded-xl md:rounded-2xl border border-border bg-secondary/30 hover:border-primary/50 transition-all duration-300 text-center card-hover"
          >
            <div className="w-10 h-10 md:w-14 md:h-14 mx-auto rounded-lg md:rounded-xl flex items-center justify-center mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300">
              <img src={whatsappLogo} alt="WhatsApp" className="w-10 h-10 md:w-14 md:h-14 object-contain" />
            </div>
            <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">WhatsApp</h3>
            <p className="text-xs md:text-sm text-muted-foreground">Chat with us</p>
          </a>

          {/* Location */}
          <a
            href="https://maps.google.com/maps?q=15.8311067%2C78.0393688&z=17&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 md:p-6 rounded-xl md:rounded-2xl border border-border bg-secondary/30 hover:border-primary/50 transition-all duration-300 text-center card-hover"
          >
            <div className="w-10 h-10 md:w-14 md:h-14 mx-auto rounded-lg md:rounded-xl bg-gradient-gold flex items-center justify-center mb-2 md:mb-4 glow-gold group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-5 h-5 md:w-7 md:h-7 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base flex items-center justify-center gap-1">
              Location <ExternalLink className="w-3 h-3" />
            </h3>
            <p className="text-xs text-muted-foreground">View on Map</p>
          </a>
        </div>

        {/* Address Section */}
        <div className="max-w-2xl mx-auto mt-8 md:mt-12 p-4 md:p-6 rounded-2xl border border-border bg-secondary/30 text-center">
          <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-base md:text-lg">Our Office Address</h3>
          <div className="text-muted-foreground space-y-1 text-sm md:text-base">
            <p className="font-medium text-primary">Abdullah Khan Estate</p>
            <p>Skanda Business Hub Complex, Office Number 1</p>
            <p>2nd Floor, Waysafes</p>
            <p className="font-medium">Kurnool - 518001</p>
          </div>
          <a
            href="https://maps.google.com/maps?q=15.8311067%2C78.0393688&z=17&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-6 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          >
            <MapPin className="w-4 h-4" />
            Open in Google Maps
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
