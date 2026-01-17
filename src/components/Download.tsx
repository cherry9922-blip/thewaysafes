import { Apple, Play } from "lucide-react";
import logo from "@/assets/waysafes-logo.jpeg";

const Download = () => {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-primary/10" />
      <div className="absolute inset-0 bg-gradient-radial-gold opacity-40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl border border-primary/30 bg-card/50 backdrop-blur-sm p-8 md:p-16 overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Download Now
                </span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                  Get the <span className="text-gradient-gold">Waysafes</span> App
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-xl">
                  Download the app now and start protecting your vehicle and loved ones. Available on both Android and iOS.
                </p>

                {/* App Store Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a
                    href="#"
                    className="flex items-center gap-3 px-6 py-4 bg-foreground rounded-xl text-background hover:scale-105 transition-transform duration-300 w-full sm:w-auto justify-center"
                  >
                    <Play className="w-8 h-8" />
                    <div className="text-left">
                      <p className="text-xs opacity-80">GET IT ON</p>
                      <p className="text-lg font-semibold">Google Play</p>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-6 py-4 bg-foreground rounded-xl text-background hover:scale-105 transition-transform duration-300 w-full sm:w-auto justify-center"
                  >
                    <Apple className="w-8 h-8" />
                    <div className="text-left">
                      <p className="text-xs opacity-80">Download on the</p>
                      <p className="text-lg font-semibold">App Store</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* App Preview */}
              <div className="relative">
                <div className="relative z-10 p-2 bg-gradient-gold rounded-3xl glow-gold-lg">
                  <div className="w-64 h-auto bg-card rounded-2xl p-8 flex flex-col items-center">
                    <img 
                      src={logo} 
                      alt="Waysafes App" 
                      className="w-32 h-32 rounded-full mb-6"
                    />
                    <h3 className="text-xl font-serif font-bold text-foreground mb-2">Waysafes</h3>
                    <p className="text-sm text-muted-foreground text-center">Technology for Safety</p>
                    <div className="mt-6 flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">4.8 Rating</p>
                  </div>
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-primary rounded-full text-primary-foreground text-sm font-semibold shadow-lg">
                  Free Download
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
