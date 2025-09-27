import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "Data Analysis Intern",
      company: "GOFTY SOLUTIONS",
      location: "Marrakech",
      period: "June 2024 - August 2024",
      type: "Hybrid",
      description: "Designed chartflow to structure data analysis and performed sentiment analysis using Python ML techniques.",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Sentiment Analysis"],
      achievements: [
        "Implemented ML models for sentiment analysis",
        "Created data visualization dashboards",
        "Optimized data processing workflows"
      ]
    },
    {
      title: "Web Development Intern",
      company: "GOFTY SOLUTIONS", 
      location: "Marrakech",
      period: "January 2024 - March 2024",
      type: "Remote",
      description: "Developed a showcase website for the company using React.",
      technologies: ["React", "JavaScript", "HTML/CSS", "Web Development"],
      achievements: [
        "Built responsive company showcase website",
        "Implemented modern UI/UX design",
        "Optimized website performance"
      ]
    },
    {
      title: "Road Network Segmentation Intern",
      company: "ORANGE MAROC",
      location: "Casablanca", 
      period: "July 2023 - August 2023",
      type: "On-site",
      description: "Segmented Moroccan road network for traffic optimization using Python, Excel, and GIS tools.",
      technologies: ["Python", "Excel", "GIS", "QGIS", "Data Processing"],
      achievements: [
        "Analyzed and segmented national road network",
        "Created traffic optimization algorithms", 
        "Generated detailed geographical reports"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hands-on experience across data science, web development, and network optimization
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="glass p-8 hover:glow transition-smooth border-primary/20 animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                    <Badge variant="outline" className="border-accent text-accent">
                      {exp.type}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-muted-foreground">
                    <span className="font-semibold">{exp.company}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{exp.location}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-primary mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge 
                          key={i} 
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;