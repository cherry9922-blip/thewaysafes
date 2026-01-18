import { Check, Crown, Star, Shield } from "lucide-react";

const standardFeatures = [
  "QR Sticker for Vehicle",
  "Advanced Safety Features",
  "Emergency Alerts",
  "Priority Support",
  "Family Notifications",
];

const plans = [
  {
    name: "Silver",
    price: "799",
    duration: "1 Year",
    icon: Shield,
    color: "from-gray-400 to-gray-500",
    borderColor: "border-gray-400",
    features: standardFeatures,
  },
  {
    name: "Gold",
    price: "1799",
    duration: "3 Years",
    icon: Star,
    color: "from-gold to-gold-light",
    borderColor: "border-gold",
    popular: true,
    features: standardFeatures,
  },
  {
    name: "Platinum",
    price: "2899",
    duration: "5 Years",
    icon: Crown,
    color: "from-purple-400 to-purple-600",
    borderColor: "border-purple-400",
    features: standardFeatures,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">
            Subscription <span className="text-gold">Plan</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select the perfect subscription plan for your vehicle safety needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={index}
                className={`relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border-2 ${plan.borderColor} transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular ? "ring-2 ring-gold ring-offset-2 ring-offset-black" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-gold to-gold-light text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-playfair">{plan.name}</h3>
                  <p className="text-gray-400">{plan.duration}</p>
                </div>

                <div className="text-center mb-8">
                  <span className="text-4xl font-bold text-gold">₹{plan.price}</span>
                  <span className="text-gray-400">/-</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://play.google.com/store/apps/details?id=com.iprism.waysafesnew&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 rounded-lg font-semibold text-center transition-all duration-300 bg-gradient-to-r from-gold to-gold-light text-black hover:shadow-lg hover:shadow-gold/30 hover:scale-105"
                >
                  Subscribe Now
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
