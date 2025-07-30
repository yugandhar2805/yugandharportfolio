
import { Button } from "@/components/ui/button";
import { Download, Github, ArrowDown, Sparkles } from "lucide-react";

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a link element to trigger download
    const link = document.createElement('a');
    link.href = '/placeholder.svg'; // This will be the resume image
    link.download = 'Yugandhar_Bevara_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Modern animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float opacity-60" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-float opacity-40" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in max-w-5xl mx-auto">
          {/* Modern greeting with sparkle icon */}
          <div className="inline-flex items-center gap-3 px-6 py-3 dark-glass rounded-full mb-8 animate-slide-up">
            <Sparkles className="w-5 h-5 text-accent animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Welcome to my digital space</span>
          </div>
          
          {/* Enhanced name with modern typography */}
          <h1 className="text-7xl md:text-9xl font-black mb-8 gradient-text leading-tight tracking-tight">
            Yugandhar
            <br />
            <span className="text-6xl md:text-8xl font-light">Bevara</span>
          </h1>
          
          {/* Modern subtitle with enhanced styling */}
          <div className="inline-flex items-center gap-3 px-8 py-4 dark-glass rounded-2xl border border-white/10 shadow-2xl mb-10">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse shadow-lg shadow-accent/50"></div>
            <h2 className="text-2xl md:text-3xl text-foreground font-medium tracking-wide">
              Aspiring Software Developer
            </h2>
          </div>
          
          {/* Enhanced description with better typography */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-16 leading-relaxed font-light">
            Passionate about building <span className="text-primary font-semibold text-glow">scalable applications</span> and 
            mastering <span className="text-accent font-semibold">cutting-edge technologies</span>. 
            Currently pursuing B.Tech in Computer Science with expertise in React, Python, and modern web development.
          </p>
          
          {/* Modern CTA buttons with enhanced styling */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Button 
              size="lg" 
              className="gradient-primary text-white shadow-2xl hover:shadow-primary/25 transition-all duration-500 hover:scale-110 px-8 py-4 text-lg font-medium rounded-2xl glow-effect"
              onClick={handleDownloadResume}
            >
              <Download className="mr-3 h-6 w-6" />
              Download Resume
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary/30 dark-glass hover:bg-primary hover:text-white transition-all duration-500 hover:scale-110 px-8 py-4 text-lg font-medium rounded-2xl">
              <Github className="mr-3 h-6 w-6" />
              View GitHub
            </Button>
          </div>
          
          {/* Enhanced scroll indicator */}
          <div className="animate-bounce">
            <div className="inline-flex flex-col items-center gap-2">
              <span className="text-sm text-muted-foreground font-medium">Scroll to explore</span>
              <ArrowDown className="h-6 w-6 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
