import { Phone, Mail, Clock, MapPin, Instagram, Facebook } from "lucide-react";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* Phone */}
          <a
            href="tel:7710810844"
            className="group p-6 rounded-2xl border border-border bg-secondary/30 hover:border-primary/50 transition-all duration-300 text-center card-hover"
          >
            <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-gold flex items-center justify-center mb-4 glow-gold group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
            <p className="text-2xl font-bold text-primary">7710810844</p>
          </a>

          {/* 24/7 Support */}
          <div className="group p-6 rounded-2xl border border-border bg-secondary/30 text-center">
            <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-gold flex items-center justify-center mb-4 glow-gold">
              <Clock className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Support Hours</h3>
            <p className="text-lg text-primary font-bold">24×7 Available</p>
          </div>

          {/* Email */}
          <a
            href="mailto:support@waysafes.com"
            className="group p-6 rounded-2xl border border-border bg-secondary/30 hover:border-primary/50 transition-all duration-300 text-center card-hover"
          >
            <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-gold flex items-center justify-center mb-4 glow-gold group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
            <p className="text-sm text-muted-foreground">support@waysafes.com</p>
          </a>

          {/* Location */}
          <div className="group p-6 rounded-2xl border border-border bg-secondary/30 text-center">
            <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-gold flex items-center justify-center mb-4 glow-gold">
              <MapPin className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Location</h3>
            <p className="text-sm text-muted-foreground">India</p>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <span className="text-muted-foreground">Follow Us:</span>
          <a
            href="#"
            className="w-12 h-12 rounded-full border border-border bg-secondary/30 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
          >
            <Instagram className="w-5 h-5 text-foreground" />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full border border-border bg-secondary/30 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
          >
            <Facebook className="w-5 h-5 text-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
