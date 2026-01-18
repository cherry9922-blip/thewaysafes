import { Shield, Target, Users } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">
            About <span className="text-gold">Us</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gold font-playfair mb-4">
                Waysafes Technologies Pvt. Ltd
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                We are a leading vehicle safety technology company dedicated to protecting your vehicles 
                and loved ones. Our innovative QR-based safety solutions provide real-time alerts, 
                emergency notifications, and comprehensive vehicle security for individuals and businesses alike.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-gold to-gold-light flex items-center justify-center">
                  <Shield className="w-8 h-8 text-black" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Our Mission</h4>
                <p className="text-gray-400">
                  To provide affordable and reliable vehicle safety solutions for everyone
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-gold to-gold-light flex items-center justify-center">
                  <Target className="w-8 h-8 text-black" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Our Vision</h4>
                <p className="text-gray-400">
                  To become India's most trusted vehicle safety technology provider
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-gold to-gold-light flex items-center justify-center">
                  <Users className="w-8 h-8 text-black" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Our Values</h4>
                <p className="text-gray-400">
                  Trust, innovation, and customer-first approach in everything we do
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
