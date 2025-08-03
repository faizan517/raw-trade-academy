import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-8 bg-primary/20 rounded-sm animate-pulse"></div>
        <div className="absolute top-32 left-16 w-2 h-12 bg-primary/30 rounded-sm animate-pulse delay-300"></div>
        <div className="absolute top-28 left-22 w-2 h-6 bg-primary/25 rounded-sm animate-pulse delay-500"></div>
        
        <div className="absolute top-40 right-20 w-2 h-10 bg-primary/20 rounded-sm animate-pulse delay-700"></div>
        <div className="absolute top-28 right-32 w-2 h-14 bg-primary/30 rounded-sm animate-pulse delay-1000"></div>
        <div className="absolute top-44 right-26 w-2 h-8 bg-primary/25 rounded-sm animate-pulse delay-200"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        {/* Logo */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <img 
              src="/raw-trade-logo.png" 
              alt="RAW TRADE Logo" 
              className="h-32 md:h-48 w-auto mx-auto mb-0 block"
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className="text-lg text-muted-foreground mb-12">
            Master the Markets. Trade with Confidence.
          </p>
        </div>

        {/* Main headline */}
        <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          Unlock the Power of{" "}
          <span className="text-primary">Trading</span>
        </h2>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Learn proven strategies from industry experts and trade like a pro — 
          whether you're a beginner or looking to refine your edge.
        </p>

        {/* CTA Button */}
        <Button 
          variant="hero" 
          size="lg" 
          className="shadow-2xl hover-scale animate-fade-in"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Enroll Now
        </Button>

        {/* Trust indicator */}
        <p className="text-sm text-muted-foreground mt-8">
          🔐 Trusted by Hundreds of Traders
        </p>
      </div>
    </section>
  );
};

export default HeroSection;