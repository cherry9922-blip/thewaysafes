import { Bike, Car, Home } from "lucide-react";

const cabPlans = [
  {
    name: "Bike",
    price: "299",
    icon: Bike,
    color: "from-blue-400 to-blue-600",
    features: ["Monthly Subscription", "QR Safety Sticker", "Emergency Alerts", "24/7 Support"],
  },
  {
    name: "Auto",
    price: "599",
    icon: Car,
    color: "from-green-400 to-green-600",
    features: ["Monthly Subscription", "QR Safety Sticker", "Emergency Alerts", "Priority Support"],
  },
  {
    name: "Car",
    price: "899",
    icon: Car,
    color: "from-gold to-gold-light",
    features: ["Monthly Subscription", "QR Safety Sticker", "Premium Alerts", "Priority Support", "Family Notifications"],
  },
];

const CabServices = () => {
  return (
    <section id="cab-services" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Home className="w-8 h-8 text-gold" />
            <h2 className="text-3xl md:text-4xl font-bold text-white font-playfair">
              Cab & Taxi <span className="text-gold">Services</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Cab Registration Subscriptions - Secure your commercial vehicles with Waysafes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cabPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 transition-all duration-300 hover:scale-105 hover:border-gold hover:shadow-2xl hover:shadow-gold/10"
              >
                <div className="text-center mb-6">
                  <div
                    className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center`}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-playfair">{plan.name}</h3>
                </div>

                <div className="text-center mb-8">
                  <span className="text-4xl font-bold text-gold">₹{plan.price}</span>
                  <span className="text-gray-400">/-</span>
                  <p className="text-gray-500 text-sm mt-1">per month</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://play.google.com/store/apps/details?id=com.iprism.waysafesnew&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 rounded-lg font-semibold text-center bg-gradient-to-r from-gold to-gold-light text-black hover:shadow-lg hover:shadow-gold/30 transition-all duration-300"
                >
                  Register Now
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CabServices;
