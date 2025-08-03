import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Instagram } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "info@rawtrade.com",
      href: "mailto:info@rawtrade.com"
    },
    {
      icon: Phone,
      label: "Phone", 
      value: "+91-XXXXXXXXXX",
      href: "tel:+91XXXXXXXXXX"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@rawtrade_official",
      href: "https://instagram.com/rawtrade_official"
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Contact <span className="text-primary">Us</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-12">
          Have questions before enrolling? Reach out:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-3">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-card-foreground">{method.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href={method.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {method.value}
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground text-center">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-card-foreground">Name</Label>
                <Input 
                  id="name" 
                  placeholder="Your full name" 
                  className="bg-secondary border-border text-foreground"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-card-foreground">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your.email@example.com"
                  className="bg-secondary border-border text-foreground"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-card-foreground">Phone (Optional)</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="+91 XXXXXXXXXX"
                  className="bg-secondary border-border text-foreground"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-card-foreground">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Ask us anything about the course..."
                  className="bg-secondary border-border text-foreground min-h-[100px]"
                />
              </div>
              <Button variant="cta" className="w-full">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* CTA Card */}
          <Card className="bg-card border-border flex flex-col justify-center">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Ready to Start Your Trading Journey?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join RAW TRADE and take control of your financial future.
              </p>
              <Button variant="hero" size="lg">
                Enroll Now
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                🔐 Trusted by Hundreds of Traders
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;