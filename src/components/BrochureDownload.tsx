import { Download } from "lucide-react";
import { jsPDF } from "jspdf";

const BrochureDownload = () => {
  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    let y = 0;

    // Colors
    const gold = [212, 175, 55];
    const black = [0, 0, 0];
    const darkGray = [30, 30, 30];
    const white = [255, 255, 255];
    const gray = [156, 163, 175];

    // Helper functions
    const setColor = (color: number[], type: 'text' | 'fill' | 'draw' = 'text') => {
      if (type === 'text') doc.setTextColor(color[0], color[1], color[2]);
      else if (type === 'fill') doc.setFillColor(color[0], color[1], color[2]);
      else doc.setDrawColor(color[0], color[1], color[2]);
    };

    const centerText = (text: string, yPos: number, size: number = 12) => {
      doc.setFontSize(size);
      const textWidth = doc.getTextWidth(text);
      doc.text(text, (pageWidth - textWidth) / 2, yPos);
    };

    const addNewPage = () => {
      doc.addPage();
      setColor(black, 'fill');
      doc.rect(0, 0, pageWidth, pageHeight, "F");
      y = 20;
    };

    // ===== PAGE 1: HERO =====
    setColor(black, 'fill');
    doc.rect(0, 0, pageWidth, pageHeight, "F");

    // Hero section
    y = 60;
    setColor(gold);
    doc.setFont("helvetica", "bold");
    centerText("WAYSAFES", y, 42);
    
    y += 15;
    setColor(white);
    doc.setFont("helvetica", "normal");
    centerText("Technology for Safety", y, 14);

    y += 25;
    setColor(gray);
    doc.setFontSize(11);
    const tagline = "Safety that speaks when you can't. Protect your vehicle with instant emergency alerts.";
    const taglineLines = doc.splitTextToSize(tagline, pageWidth - 60);
    taglineLines.forEach((line: string) => {
      centerText(line, y, 11);
      y += 7;
    });

    // Decorative line
    y += 15;
    setColor(gold, 'fill');
    doc.rect(pageWidth / 2 - 30, y, 60, 2, "F");

    y += 25;
    setColor(white);
    doc.setFont("helvetica", "bold");
    centerText("COMPLETE VEHICLE SAFETY SOLUTION", y, 16);

    // Contact highlight
    y += 30;
    setColor(gold, 'fill');
    doc.roundedRect(pageWidth / 2 - 50, y - 8, 100, 25, 5, 5, "F");
    setColor(black);
    doc.setFont("helvetica", "bold");
    centerText("Call Now: 7710810844", y + 5, 14);

    // ===== PAGE 2: FEATURES =====
    addNewPage();
    
    setColor(gold);
    doc.setFont("helvetica", "bold");
    centerText("KEY FEATURES & ALERTS", y, 22);
    y += 20;

    const featureCategories = [
      {
        title: "SAFETY & EMERGENCY",
        features: ["Accident Alerts", "Emergency Alerts", "Fire Alerts", "Blood Bank", "Emergency Contacts"]
      },
      {
        title: "VEHICLE SECURITY", 
        features: ["Theft Alerts", "Towing Alert", "Lock Alert"]
      },
      {
        title: "SMART MANAGEMENT",
        features: ["Parking Alert", "Store Documents", "Family Notifications", "Location Tracking", "Instant Notifications", "Vehicle Details"]
      }
    ];

    featureCategories.forEach(category => {
      setColor(gold);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text(category.title, 20, y);
      y += 10;

      setColor(white);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      
      category.features.forEach(feature => {
        setColor(gold, 'fill');
        doc.circle(25, y - 1.5, 1.5, "F");
        setColor(white);
        doc.text(feature, 32, y);
        y += 8;
      });
      y += 8;
    });

    // ===== PAGE 3: SUBSCRIPTION PLANS =====
    addNewPage();
    
    setColor(gold);
    doc.setFont("helvetica", "bold");
    centerText("SUBSCRIPTION PLANS", y, 22);
    y += 25;

    const plans = [
      { name: "SILVER", price: "₹799", duration: "1 Year", color: [156, 163, 175] },
      { name: "GOLD", price: "₹1,799", duration: "3 Years", color: gold, popular: true },
      { name: "PLATINUM", price: "₹2,899", duration: "5 Years", color: [167, 139, 250] }
    ];

    const cardWidth = 55;
    const startX = (pageWidth - (cardWidth * 3 + 10)) / 2;

    plans.forEach((plan, index) => {
      const x = startX + index * (cardWidth + 5);
      
      // Card background
      setColor(darkGray, 'fill');
      doc.roundedRect(x, y, cardWidth, 80, 3, 3, "F");
      
      // Border
      doc.setDrawColor(plan.color[0], plan.color[1], plan.color[2]);
      doc.setLineWidth(1);
      doc.roundedRect(x, y, cardWidth, 80, 3, 3, "S");

      if (plan.popular) {
        setColor(gold, 'fill');
        doc.roundedRect(x + 5, y - 5, cardWidth - 10, 10, 2, 2, "F");
        setColor(black);
        doc.setFontSize(7);
        doc.setFont("helvetica", "bold");
        doc.text("Most Popular", x + cardWidth / 2 - 10, y);
      }

      // Plan name
      doc.setTextColor(plan.color[0], plan.color[1], plan.color[2]);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text(plan.name, x + cardWidth / 2 - doc.getTextWidth(plan.name) / 2, y + 20);

      // Duration
      setColor(gray);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.text(plan.duration, x + cardWidth / 2 - doc.getTextWidth(plan.duration) / 2, y + 28);

      // Price
      setColor(gold);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      doc.text(plan.price, x + cardWidth / 2 - doc.getTextWidth(plan.price) / 2, y + 45);

      // Features (small)
      setColor(white);
      doc.setFontSize(7);
      doc.setFont("helvetica", "normal");
      const features = ["QR Sticker", "Safety Features", "Emergency Alerts", "Priority Support"];
      features.forEach((f, i) => {
        doc.text("✓ " + f, x + 5, y + 55 + i * 6);
      });
    });

    y += 100;

    // All plans include
    setColor(gray);
    doc.setFontSize(9);
    doc.setFont("helvetica", "italic");
    centerText("All plans include: QR Sticker, Advanced Safety Features, Emergency Alerts, Priority Support, Family Notifications", y);

    // ===== PAGE 4: PRODUCTS =====
    addNewPage();
    
    setColor(gold);
    doc.setFont("helvetica", "bold");
    centerText("OUR PRODUCTS", y, 22);
    y += 25;

    const products = [
      { name: "Premium Gold Sticker", desc: "Elegant black & gold design" },
      { name: "Shield Sticker", desc: "Classic badge-style design" },
      { name: "Eco Sticker", desc: "Fresh green & cream design" },
      { name: "Keychain Tag", desc: "Portable QR tag design" }
    ];

    const prodCardWidth = 85;
    const prodStartX = (pageWidth - (prodCardWidth * 2 + 10)) / 2;

    products.forEach((product, index) => {
      const row = Math.floor(index / 2);
      const col = index % 2;
      const x = prodStartX + col * (prodCardWidth + 10);
      const cardY = y + row * 55;

      setColor(darkGray, 'fill');
      doc.roundedRect(x, cardY, prodCardWidth, 45, 3, 3, "F");
      
      setColor(gold, 'draw');
      doc.setLineWidth(0.5);
      doc.roundedRect(x, cardY, prodCardWidth, 45, 3, 3, "S");

      // Product placeholder
      setColor([50, 50, 50], 'fill');
      doc.roundedRect(x + 5, cardY + 5, 30, 30, 2, 2, "F");
      setColor(gold);
      doc.setFontSize(8);
      doc.text("QR", x + 15, cardY + 22);

      // Product info
      setColor(white);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.text(product.name, x + 40, cardY + 18);
      
      setColor(gray);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.text(product.desc, x + 40, cardY + 28);
    });

    // ===== PAGE 5: CAB SERVICES =====
    addNewPage();
    
    setColor(gold);
    doc.setFont("helvetica", "bold");
    centerText("CAB REGISTRATION FEE", y, 22);
    y += 8;
    setColor(gray);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    centerText("Monthly Subscription for Commercial Vehicles", y);
    y += 25;

    const cabPlans = [
      { name: "BIKE", price: "₹299", color: [96, 165, 250] },
      { name: "AUTO", price: "₹599", color: [74, 222, 128] },
      { name: "CAR", price: "₹899", color: gold }
    ];

    cabPlans.forEach((plan, index) => {
      const x = startX + index * (cardWidth + 5);
      
      setColor(darkGray, 'fill');
      doc.roundedRect(x, y, cardWidth, 70, 3, 3, "F");
      
      doc.setDrawColor(plan.color[0], plan.color[1], plan.color[2]);
      doc.setLineWidth(1);
      doc.roundedRect(x, y, cardWidth, 70, 3, 3, "S");

      // Icon circle
      doc.setFillColor(plan.color[0], plan.color[1], plan.color[2]);
      doc.circle(x + cardWidth / 2, y + 18, 12, "F");

      // Plan name
      setColor(white);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text(plan.name, x + cardWidth / 2 - doc.getTextWidth(plan.name) / 2, y + 42);

      // Price
      setColor(gold);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(16);
      doc.text(plan.price, x + cardWidth / 2 - doc.getTextWidth(plan.price) / 2, y + 55);

      setColor(gray);
      doc.setFontSize(8);
      doc.text("/month", x + cardWidth / 2 - 6, y + 62);
    });

    // ===== PAGE 6: HOW IT WORKS =====
    addNewPage();
    
    setColor(gold);
    doc.setFont("helvetica", "bold");
    centerText("HOW IT WORKS", y, 22);
    y += 25;

    const steps = [
      "Signup & Login to the app",
      "Attach your vehicle details",
      "Choose a subscription plan",
      "Enter shipping address for sticker delivery",
      "Receive QR sticker by post",
      "Stick QR on your vehicle",
      "Select 'connect with QR link' in app",
      "Link app with QR code",
      "Enjoy all safety services & alerts!"
    ];

    steps.forEach((step, index) => {
      // Step number circle
      setColor(gold, 'fill');
      doc.circle(30, y, 8, "F");
      setColor(black);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.text(String(index + 1), 27.5, y + 3.5);

      // Step text
      setColor(white);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.text(step, 45, y + 3);
      
      y += 20;
    });

    // ===== PAGE 7: CONTACT =====
    addNewPage();
    
    setColor(gold);
    doc.setFont("helvetica", "bold");
    centerText("CONTACT US", y, 22);
    y += 30;

    // Contact card
    setColor(darkGray, 'fill');
    doc.roundedRect(30, y, pageWidth - 60, 80, 5, 5, "F");
    setColor(gold, 'draw');
    doc.setLineWidth(1);
    doc.roundedRect(30, y, pageWidth - 60, 80, 5, 5, "S");

    y += 20;
    const contactInfo = [
      ["Phone", "7710810844"],
      ["WhatsApp", "+91 7710810844"],
      ["Support Hours", "Mon-Sat, 9 AM - 6 PM"],
    ];

    contactInfo.forEach(([label, value]) => {
      setColor(gold);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.text(label + ":", 40, y);
      
      setColor(white);
      doc.setFont("helvetica", "normal");
      doc.text(value, 85, y);
      y += 12;
    });

    y += 5;
    setColor(gold);
    doc.setFont("helvetica", "bold");
    doc.text("Address:", 40, y);
    setColor(white);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    const address = doc.splitTextToSize("Abdullah Khan Estate, Skanda Business Hub Complex, Office number 1, 2nd floor, Kurnool 518001", pageWidth - 100);
    doc.text(address, 40, y + 10);

    // Footer
    y = pageHeight - 30;
    setColor(gold, 'fill');
    doc.rect(0, y, pageWidth, 30, "F");
    setColor(black);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    centerText("Download Waysafes App on Google Play Store", y + 12);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    centerText("www.waysafes.com", y + 22);

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
