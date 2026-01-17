import {
  AlertTriangle,
  Car,
  Shield,
  Flame,
  Lock,
  FileText,
  Bell,
  Droplets,
  MapPin,
  Truck,
} from "lucide-react";

const features = [
  {
    icon: AlertTriangle,
    title: "Accident Alerts",
    description: "Family instantly informed during accidents",
    category: "safety",
  },
  {
    icon: Bell,
    title: "Emergency Alerts",
    description: "Follow safety instructions immediately",
    category: "safety",
  },
  {
    icon: Car,
    title: "Vehicle Risk Alert",
    description: "Alerts during emergency situations",
    category: "safety",
  },
  {
    icon: Shield,
    title: "Theft Alerts",
    description: "Real-time theft notifications",
    category: "security",
  },
  {
    icon: Truck,
    title: "Towing Alert",
    description: "Get notified if your vehicle is towed",
    category: "security",
  },
  {
    icon: Lock,
    title: "Lock Alert",
    description: "Reminder if vehicle is left unlocked",
    category: "security",
  },
  {
    icon: MapPin,
    title: "Parking Alert",
    description: "Get notified about parking issues instantly",
    category: "management",
  },
  {
    icon: FileText,
    title: "Store Documents",
    description: "RC, License, Insurance, PUC & more",
    category: "management",
  },
  {
    icon: Flame,
    title: "Fire Alerts",
    description: "Immediate fire detection notifications",
    category: "safety",
  },
  {
    icon: Droplets,
    title: "Blood Bank",
    description: "Store blood group for emergencies",
    category: "safety",
  },
];

const categoryColors = {
  safety: "from-red-500/20 to-orange-500/20 border-red-500/30",
  security: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
  management: "from-green-500/20 to-emerald-500/20 border-green-500/30",
};

const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial-gold opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Key Features & <span className="text-gradient-gold">Alerts</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive safety features designed to protect you and your vehicle in every situation
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative p-6 rounded-2xl border bg-gradient-to-br ${categoryColors[feature.category as keyof typeof categoryColors]} backdrop-blur-sm card-hover`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Category Legend */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <span className="text-sm text-muted-foreground">Safety & Emergency</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500/50" />
            <span className="text-sm text-muted-foreground">Vehicle Security</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
            <span className="text-sm text-muted-foreground">Smart Management</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
