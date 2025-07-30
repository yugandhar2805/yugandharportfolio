
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Cloud, Gavel, BookOpen, Rocket } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Weather Webpage",
      description: "Built a responsive React Weather App that fetches real-time data from the OpenWeatherMap API. Features reusable components, state management with hooks, and clean responsive UI design.",
      icon: <Cloud className="h-10 w-10" />,
      technologies: ["React JS", "OpenWeatherMap API", "CSS", "JavaScript"],
      gradient: "from-blue-500 to-cyan-600",
      glowColor: "shadow-blue-500/25"
    },
    {
      title: "Online Auction Management System",
      description: "Developed a comprehensive auction platform with real-time bidding, user management, and secure data handling. Implemented robust database design and system integration.",
      icon: <Gavel className="h-10 w-10" />,
      technologies: ["DBMS", "SQL", "Database Design", "System Integration"],
      gradient: "from-emerald-500 to-green-600",
      glowColor: "shadow-emerald-500/25"
    },
    {
      title: "Book Hub (Goodreads Clone)",
      description: "Created a feature-rich book review platform with authentication, dynamic search, star ratings, and personalized recommendations. Includes theme switching and carousel UI elements.",
      icon: <BookOpen className="h-10 w-10" />,
      technologies: ["React JS", "JWT", "API Integration", "Authentication"],
      gradient: "from-purple-500 to-pink-600",
      glowColor: "shadow-purple-500/25"
    }
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 animate-slide-up">
          <div className="inline-flex items-center gap-3 px-6 py-3 dark-glass rounded-full mb-8">
            <Rocket className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">My Work</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-black text-foreground mb-8 tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing my passion for building innovative solutions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10 max-w-8xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className={`group hover:shadow-2xl ${project.glowColor} transition-all duration-700 hover:-translate-y-8 border-0 dark-glass overflow-hidden h-full flex flex-col relative`}>
              {/* Animated gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
              
              {/* Card Header with enhanced styling */}
              <div className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
                <CardHeader className="p-8 relative z-10">
                  <div className={`bg-gradient-to-br ${project.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-white shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                    {project.icon}
                  </div>
                  <CardTitle className="text-2xl md:text-3xl text-foreground mb-4 font-bold group-hover:gradient-text transition-all duration-500">
                    {project.title}
                  </CardTitle>
                </CardHeader>
              </div>
              
              <CardContent className="flex-1 flex flex-col justify-between p-8 pt-0 relative z-10">
                <div>
                  <p className="text-muted-foreground mb-8 leading-relaxed text-base">
                    {project.description}
                  </p>
                  
                  <div className="mb-8">
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 dark-glass text-muted-foreground rounded-xl text-sm font-medium border border-white/10 hover:border-primary/30 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 mt-auto">
                  <Button size="sm" variant="outline" className="flex-1 border-2 border-white/20 dark-glass hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105 rounded-xl py-3">
                    <Github className="mr-2 h-5 w-5" />
                    Code
                  </Button>
                  <Button size="sm" className={`flex-1 bg-gradient-to-r ${project.gradient} text-white hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg rounded-xl py-3 font-semibold`}>
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
