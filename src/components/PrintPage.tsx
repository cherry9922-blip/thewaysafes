import { Download } from "lucide-react";

const PrintPage = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 bg-gradient-gold rounded-full text-primary-foreground font-semibold shadow-lg hover:scale-105 transition-transform duration-300 glow-gold print:hidden"
      aria-label="Download page as PDF"
    >
      <Download className="w-5 h-5" />
      <span className="hidden sm:inline">Save as PDF</span>
    </button>
  );
};

export default PrintPage;
