import sticker1 from "@/assets/sticker-1.jpeg";
import sticker2 from "@/assets/sticker-2.jpeg";
import sticker3 from "@/assets/sticker-3.jpeg";
import sticker4 from "@/assets/sticker-4.jpeg";

const stickers = [
  {
    image: sticker1,
    name: "Premium Gold Sticker",
    description: "Elegant black & gold design",
  },
  {
    image: sticker2,
    name: "Shield Sticker",
    description: "Classic badge-style design",
  },
  {
    image: sticker3,
    name: "Eco Sticker",
    description: "Fresh green & cream design",
  },
  {
    image: sticker4,
    name: "Keychain Tag",
    description: "Portable QR tag design",
  },
];

const Stickers = () => {
  return (
    <section id="stickers" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-playfair">
            Our <span className="text-gold">Products</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose from our premium collection of Waysafes QR stickers for your vehicle
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stickers.map((sticker, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700 transition-all duration-300 hover:border-gold hover:shadow-2xl hover:shadow-gold/10 hover:scale-105"
            >
              <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-white">
                <img
                  src={sticker.image}
                  alt={sticker.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-semibold text-white text-center font-playfair">
                {sticker.name}
              </h3>
              <p className="text-gray-400 text-sm text-center mt-1">
                {sticker.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://play.google.com/store/apps/details?id=com.iprism.waysafesnew&hl=en_IN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-gold to-gold-light text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/30 transition-all duration-300"
          >
            Get Your Sticker Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Stickers;
