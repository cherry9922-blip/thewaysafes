import { QrCode, Smartphone, Bell, Users } from "lucide-react";

const steps = [
  {
    icon: QrCode,
    number: "01",
    title: "Get Your Sticker",
    description: "Receive your unique Waysafes QR code sticker to place on your vehicle",
  },
  {
    icon: Smartphone,
    number: "02",
    title: "Download the App",
    description: "Install Waysafes app and register your vehicle with your details",
  },
  {
    icon: Users,
    number: "03",
    title: "Add Family Members",
    description: "Add emergency contacts who will be notified during any incident",
  },
  {
    icon: Bell,
    number: "04",
    title: "Stay Protected",
    description: "Get instant alerts for accidents, theft, parking issues, and more",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Simple Steps to <span className="text-gradient-gold">Safety</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Get started with Waysafes in just a few simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/10" />
              )}

              {/* Card */}
              <div className="relative p-8 rounded-2xl bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300 card-hover">
                {/* Number */}
                <span className="absolute -top-4 -right-4 text-6xl font-bold text-primary/10 font-serif">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 glow-gold group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
