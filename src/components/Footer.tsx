const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="flex items-end gap-1">
            <div className="w-2 h-4 bg-primary rounded-sm"></div>
            <div className="w-2 h-6 bg-primary rounded-sm"></div>
          </div>
          <h3 className="text-2xl font-bold text-foreground">RAW TRADE</h3>
        </div>
        
        <p className="text-muted-foreground mb-6">
          Master the Markets. Trade with Confidence.
        </p>
        
        <div className="text-sm text-muted-foreground">
          <p>&copy; 2024 RAW TRADE. All rights reserved.</p>
          <p className="mt-2">🔐 Trusted by Hundreds of Traders</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;