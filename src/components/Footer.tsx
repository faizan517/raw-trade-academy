const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <img 
            src="/raw-trade-logo.png" 
            alt="RAW TRADE Logo" 
            className="h-10 md:h-14 w-auto mx-auto mb-0 block"
            style={{ objectFit: "contain" }}
          />
        </div>
        
        <p className="text-muted-foreground mb-6">
          Master the Markets. Trade with Confidence.
        </p>
        
        <div className="text-sm text-muted-foreground">
          <p>&copy; 2025 RAW TRADE. All rights reserved.</p>
          <p className="mt-2">🔐 Trusted by Hundreds of Traders</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;