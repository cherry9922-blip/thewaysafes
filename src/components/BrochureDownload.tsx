import { Download } from "lucide-react";
import { jsPDF } from "jspdf";

const BrochureDownload = () => {
  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    let y = 20;

    // Helper functions
    const centerText = (text: string, yPos: number, size: number = 12) => {
      doc.setFontSize(size);
      const textWidth = doc.getTextWidth(text);
      doc.text(text, (pageWidth - textWidth) / 2, yPos);
    };

    const addSection = (title: string) => {
      if (y > 250) {
        doc.addPage();
        y = 20;
      }
      doc.setFontSize(16);
      doc.setTextColor(212, 175, 55); // Gold color
      doc.text(title, 20, y);
      y += 10;
      doc.setTextColor(0, 0, 0);
    };

    // Header
    doc.setFillColor(0, 0, 0);
    doc.rect(0, 0, pageWidth, 50, "F");
    doc.setTextColor(212, 175, 55);
    centerText("WAYSAFES", 25, 28);
    doc.setTextColor(255, 255, 255);
    centerText("Technology for Safety", 35, 12);
    doc.setTextColor(0, 0, 0);
    y = 65;

    // Tagline
    doc.setFontSize(11);
    centerText("Safety that speaks when you can't. Protect your vehicle with instant emergency alerts.", y);
    y += 15;

    // Features Section
    addSection("KEY FEATURES & ALERTS");
    doc.setFontSize(10);
    
    const features = [
      "Safety & Emergency: Accident Alerts, Emergency Alerts, Fire Alerts, Blood Bank, Emergency Contacts",
      "Vehicle Security: Theft Alerts, Towing Alert, Lock Alert",
      "Smart Management: Parking Alert, Store Documents, Family Notifications, Location Tracking, Instant Notifications, Vehicle Details"
    ];
    
    features.forEach(feature => {
      const lines = doc.splitTextToSize(feature, pageWidth - 40);
      doc.text(lines, 20, y);
      y += lines.length * 6 + 4;
    });
    y += 5;

    // Subscription Plans
    addSection("SUBSCRIPTION PLANS");
    doc.setFontSize(10);
    
    const plans = [
      { name: "Silver Plan", price: "₹799", duration: "1 Year" },
      { name: "Gold Plan (Most Popular)", price: "₹1,799", duration: "3 Years" },
      { name: "Platinum Plan", price: "₹2,899", duration: "5 Years" },
    ];

    plans.forEach(plan => {
      doc.setFont("helvetica", "bold");
      doc.text(`${plan.name} - ${plan.price} / ${plan.duration}`, 20, y);
      y += 8;
    });
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text("All plans include: QR Sticker, Advanced Safety Features, Emergency Alerts, Priority Support, Family Notifications", 20, y);
    y += 15;

    // Products
    addSection("OUR PRODUCTS");
    doc.setFontSize(10);
    
    const products = [
      "Premium Gold Sticker - Elegant black & gold design",
      "Shield Sticker - Classic badge-style design",
      "Eco Sticker - Fresh green & cream design",
      "Keychain Tag - Portable QR tag design"
    ];
    
    products.forEach(product => {
      doc.text(`• ${product}`, 20, y);
      y += 7;
    });
    y += 8;

    // Cab Registration
    addSection("CAB REGISTRATION FEE (Monthly)");
    doc.setFontSize(10);
    
    const cabPlans = [
      { name: "Bike", price: "₹299/month", features: "QR Sticker, Emergency Alerts, 24/7 Support" },
      { name: "Auto", price: "₹599/month", features: "QR Sticker, Emergency Alerts, Priority Support" },
      { name: "Car", price: "₹899/month", features: "QR Sticker, Premium Alerts, Priority Support, Family Notifications" },
    ];

    cabPlans.forEach(plan => {
      doc.setFont("helvetica", "bold");
      doc.text(`${plan.name} - ${plan.price}`, 20, y);
      y += 6;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.text(`   ${plan.features}`, 20, y);
      doc.setFontSize(10);
      y += 8;
    });
    y += 5;

    // How It Works
    addSection("HOW IT WORKS");
    doc.setFontSize(9);
    
    const steps = [
      "1. Signup & Login to the app",
      "2. Attach your vehicle details",
      "3. Choose a subscription plan",
      "4. Enter shipping address for sticker delivery",
      "5. Receive QR sticker by post",
      "6. Stick QR on your vehicle",
      "7. Link the QR with the app",
      "8. Enjoy all safety services & alerts!"
    ];
    
    steps.forEach(step => {
      doc.text(step, 20, y);
      y += 6;
    });
    y += 10;

    // Contact Section
    if (y > 230) {
      doc.addPage();
      y = 20;
    }
    addSection("CONTACT US");
    doc.setFontSize(10);
    
    doc.text("Phone: 7710810844", 20, y);
    y += 7;
    doc.text("WhatsApp: +91 7710810844", 20, y);
    y += 7;
    doc.text("Support Hours: Mon-Sat, 9 AM - 6 PM", 20, y);
    y += 7;
    const address = doc.splitTextToSize("Address: Abdullah Khan Estate, Skanda Business Hub Complex, Office number 1, 2nd floor, Kurnool 518001", pageWidth - 40);
    doc.text(address, 20, y);
    y += 15;

    // Footer
    doc.setFillColor(0, 0, 0);
    doc.rect(0, 270, pageWidth, 30, "F");
    doc.setTextColor(212, 175, 55);
    centerText("Download the Waysafes App", 280, 10);
    doc.setTextColor(255, 255, 255);
    centerText("Available on Google Play Store", 287, 9);

    // Save PDF
    doc.save("Waysafes-Brochure.pdf");
  };

  return (
    <button
      onClick={generatePDF}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 bg-gradient-gold rounded-full text-primary-foreground font-semibold shadow-lg hover:scale-105 transition-transform duration-300 glow-gold"
    >
      <Download className="w-5 h-5" />
      <span className="hidden sm:inline">Download Brochure</span>
    </button>
  );
};

export default BrochureDownload;
