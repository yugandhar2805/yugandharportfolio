
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, ArrowRight, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-7 w-7" />,
      label: "Email",
      value: "yugandharbevara7@gmail.com",
      href: "mailto:yugandharbevara7@gmail.com",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Phone className="h-7 w-7" />,
      label: "Phone",
      value: "+91 86866 31700",
      href: "tel:+918686631700",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: <MapPin className="h-7 w-7" />,
      label: "Location",
      value: "Visakhapatnam, India",
      href: "#",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 animate-slide-up">
          <div className="inline-flex items-center gap-3 px-6 py-3 dark-glass rounded-full mb-8">
            <MessageCircle className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">Get In Touch</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-black text-foreground mb-8 tracking-tight">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on exciting projects or just want to say hello?
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group text-center hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 hover:-translate-y-6 border-0 dark-glass overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                
                <CardHeader className="pb-6 relative z-10">
                  <div className={`bg-gradient-to-br ${info.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-2xl group-hover:scale-125 transition-transform duration-500`}>
                    {info.icon}
                  </div>
                  <CardTitle className="text-2xl text-foreground font-bold">{info.label}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  {info.href.startsWith('#') ? (
                    <p className="text-muted-foreground font-medium text-lg">{info.value}</p>
                  ) : (
                    <a 
                      href={info.href}
                      className="text-primary hover:text-accent transition-colors duration-300 font-medium inline-flex items-center gap-2 group text-lg hover:scale-105 transition-transform"
                    >
                      {info.value}
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <div className="gradient-primary p-16 rounded-3xl text-white shadow-2xl relative overflow-hidden glow-effect">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
              
              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Ready to Build Something Amazing?</h3>
                <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed font-light">
                  I'm always excited to discuss new opportunities, collaborate on interesting projects, or simply connect with fellow developers.
                </p>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="dark-glass border border-white/20 text-white hover:bg-white/10 hover:scale-110 transition-all duration-500 shadow-2xl px-10 py-4 text-lg font-semibold rounded-2xl backdrop-blur-xl"
                  onClick={() => window.location.href = 'mailto:yugandharbevara7@gmail.com'}
                >
                  <Send className="mr-3 h-6 w-6" />
                  Start a Conversation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
