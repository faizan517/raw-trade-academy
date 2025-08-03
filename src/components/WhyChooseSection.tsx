import { Check } from "lucide-react";

const WhyChooseSection = () => {
  const benefits = [
    "Real Strategies — no fluff",
    "Learn from Experienced Traders",
    "Practical, Step-by-Step Modules", 
    "Weekly Live Q&A",
    "Lifetime Access & Community Support"
  ];

  return (
    <section className="py-20 px-6 bg-secondary/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Why Choose <span className="text-primary">RAW TRADE</span>?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-4 p-6 rounded-lg bg-card hover:bg-card/80 transition-colors">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
              <p className="text-lg font-medium text-card-foreground text-left">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;