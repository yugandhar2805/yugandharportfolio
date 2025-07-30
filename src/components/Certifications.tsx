
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Wifi, Brain } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Introduction to Internet of Things",
      issuer: "NPTEL",
      icon: <Wifi className="h-8 w-8" />,
      color: "bg-blue-500"
    },
    {
      title: "30-day Virtual Internship Program on AI and ML",
      issuer: "KODACK in association with scientific platform",
      icon: <Brain className="h-8 w-8" />,
      color: "bg-green-500"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <p className="text-lg text-gray-600">Professional development and learning achievements</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className={`${cert.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                  {cert.icon}
                </div>
                <CardTitle className="text-xl text-gray-900 mb-2">{cert.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-primary font-medium mb-4">{cert.issuer}</p>
                <div className="flex justify-center">
                  <Award className="h-5 w-5 text-accent mr-2" />
                  <span className="text-sm text-gray-600">Certified</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
