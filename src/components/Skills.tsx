
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Wrench, Layers, Zap } from "lucide-react";

const Skills = () => {
  const skillsData = [
    {
      category: "Programming Languages",
      icon: <Code className="h-8 w-8" />,
      skills: ["C++", "JavaScript", "Python"],
      gradient: "from-blue-500 to-purple-600",
      glowColor: "shadow-blue-500/25"
    },
    {
      category: "Frameworks",
      icon: <Layers className="h-8 w-8" />,
      skills: ["React JS", "React Native"],
      gradient: "from-green-500 to-emerald-600",
      glowColor: "shadow-green-500/25"
    },
    {
      category: "Tools & Technologies",
      icon: <Wrench className="h-8 w-8" />,
      skills: ["VS Code", "GitHub", "Windows", "HTML", "CSS", "SQL"],
      gradient: "from-orange-500 to-red-600",
      glowColor: "shadow-orange-500/25"
    }
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 animate-slide-up">
          <div className="inline-flex items-center gap-3 px-6 py-3 dark-glass rounded-full mb-8">
            <Zap className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">What I Work With</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-black text-foreground mb-8 tracking-tight">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {skillsData.map((category, index) => (
            <Card key={index} className={`group hover:shadow-2xl ${category.glowColor} transition-all duration-700 hover:-translate-y-8 border-0 dark-glass overflow-hidden relative`}>
              {/* Animated gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
              
              <CardHeader className="text-center pb-8 relative z-10">
                <div className={`bg-gradient-to-br ${category.gradient} w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 text-white shadow-2xl group-hover:scale-125 transition-all duration-500 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/20 rounded-3xl animate-pulse"></div>
                  <div className="relative z-10">
                    {category.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl md:text-3xl text-foreground group-hover:text-foreground transition-colors duration-500 font-bold">
                  {category.category}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-4 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-5 py-3 dark-glass text-foreground rounded-2xl text-sm font-semibold border border-white/10 hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 hover:border-primary/30 transition-all duration-500 hover:scale-110 shadow-lg hover:shadow-xl backdrop-blur-xl"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
