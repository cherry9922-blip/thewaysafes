import { Car, Bike, Truck } from "lucide-react";

const vehicles = [
  { icon: Car, name: "Cars", description: "Sedans, SUVs, Hatchbacks" },
  { icon: Bike, name: "Bikes", description: "Motorcycles & Scooters" },
  { icon: Truck, name: "Commercial", description: "Trucks & Auto-rickshaws" },
];

const Vehicles = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Supported Vehicles
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Works With <span className="text-gradient-gold">All Vehicles</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From two-wheelers to commercial vehicles, Waysafes protects them all
          </p>
        </div>

        {/* Vehicle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.name}
              className="group relative p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 text-center card-hover"
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-gold flex items-center justify-center mb-6 glow-gold group-hover:scale-110 transition-transform duration-300">
                <vehicle.icon className="w-10 h-10 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                {vehicle.name}
              </h3>
              <p className="text-muted-foreground">
                {vehicle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vehicles;
