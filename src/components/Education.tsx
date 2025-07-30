
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Bharath Institute of Higher Education and Research",
      location: "Chennai, Tamil Nadu",
      duration: "2021 - 2025",
      grade: "CGPA: 8.77/10",
    },
    {
      degree: "Andhra Pradesh Board of Intermediate Education",
      institution: "Sri Chaitanya Junior College",
      location: "Visakhapatnam, Andhra Pradesh",
      duration: "2019-2021",
      grade: "Percentage: 95%",
    },
    {
      degree: "ICSE",
      institution: "St.Francis School",
      location: "Visakhapatnam, Andhra Pradesh",
      duration: "2019",
      grade: "Percentage: 88.6%",
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-lg text-gray-600">My academic journey and achievements</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-gray-900 mb-2">{edu.degree}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <p className="text-primary font-medium">{edu.institution}</p>
                      <span className="text-sm text-gray-500">{edu.duration}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2 ml-16">
                  <p className="text-gray-600">{edu.location}</p>
                  <p className="font-semibold text-accent">{edu.grade}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
