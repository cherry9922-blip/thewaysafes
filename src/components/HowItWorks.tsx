import { UserPlus, LogIn, Car, CreditCard, MapPin, Mail, QrCode, Smartphone, Link, Bell } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Signup",
    description: "Enter the requirement, details & set your user ID and password",
  },
  {
    icon: LogIn,
    number: "02",
    title: "Login",
    description: "Login with user ID and password",
  },
  {
    icon: Car,
    number: "03",
    title: "Attach Vehicle",
    description: "Select the Attach vehicle option and enter your vehicle details",
  },
  {
    icon: CreditCard,
    number: "04",
    title: "Do Subscription",
    description: "Subscribe with your preferred plan from the available affordable plans",
  },
  {
    icon: MapPin,
    number: "05",
    title: "Enter Shipping Address",
    description: "Enter your residential or office address and submit to get the Waysafes QR sticker",
  },
  {
    icon: Mail,
    number: "06",
    title: "Receive QR Sticker",
    description: "Get the Waysafes QR sticker through post",
  },
  {
    icon: QrCode,
    number: "07",
    title: "Stick the QR",
    description: "Stick the Waysafes QR on your vehicle",
  },
  {
    icon: Smartphone,
    number: "08",
    title: "Connect with QR",
    description: "Select 'Connect with QR link' option in the app",
  },
  {
    icon: Link,
    number: "09",
    title: "Link Your App",
    description: "Link your Waysafes app with QR code",
  },
  {
    icon: Bell,
    number: "10",
    title: "Enjoy Services",
    description: "Enjoy the Waysafes services and alerts",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
            >
              {/* Card */}
              <div className="relative p-6 rounded-2xl bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300 card-hover h-full">
                {/* Number */}
                <span className="absolute -top-3 -right-3 text-5xl font-bold text-primary/10 font-serif">
                  {step.number}
                </span>

                {/* Step Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                  Step {index + 1}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-4 glow-gold group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
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
