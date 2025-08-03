import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, TrendingUp, Shield, Brain, Users } from "lucide-react";

const AboutSection = () => {
  const learningModules = [
    {
      icon: TrendingUp,
      title: "Technical & Fundamental Analysis",
      description: "Master chart patterns, indicators, and market fundamentals"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Learn to protect your capital and minimize losses"
    },
    {
      icon: BookOpen,
      title: "Chart Reading & Indicators",
      description: "Decode market signals and trading opportunities"
    },
    {
      icon: Brain,
      title: "Trading Psychology",
      description: "Develop the mental discipline for consistent success"
    },
    {
      icon: Users,
      title: "Live Market Sessions",
      description: "Real-time trading with expert guidance and analysis"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About the <span className="text-primary">Course</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            RAW TRADE is a complete trading education platform designed to help you 
            build real-world skills in the financial markets.
          </p>
        </div>

        {/* What you'll learn */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            What You'll Learn
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-5xl mx-auto">
            {learningModules.map((module, index) => {
              const IconComponent = module.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border-border">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-card-foreground">{module.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{module.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;