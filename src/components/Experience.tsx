import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "Road Network Segmentation Intern", 
      company: "ORANGE MAROC",
      location: "Casablanca",
      period: "July 2025 - August 2025",
      type: "On-site", 
      description: "Segmented Moroccan road network for traffic optimization using Python, Excel, and GIS tools.",
      technologies: ["Python", "Excel", "GIS", "QGIS", "Data Processing"],
      achievements: [
        "Analyzed and segmented national road network",
        "Created traffic optimization algorithms",
        "Generated detailed geographical reports"
      ],
      gradient: "from-orange-500/20 to-red-500/20"
    },
        {
      title: "Web Development Intern",
      company: "GOFTY SOLUTIONS",
      location: "Marrakech", 
      period: "January 2025 - March 2025",
      type: "Remote",
      description: "Developed a showcase website for the company using React.",
      technologies: ["React", "JavaScript", "HTML/CSS", "Web Development"],
      achievements: [
        "Built responsive company showcase website",
        "Implemented modern UI/UX design",
        "Optimized website performance"
      ],
      gradient: "from-green-500/20 to-emerald-500/20"
    },
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
      ],
      gradient: "from-blue-500/20 to-cyan-500/20"
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-accent/5 to-primary/5 animate-gradient-shift"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-scale-in-bounce">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Hands-on experience across data science, web development, and network optimization
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="glass p-8 hover:glow transition-bounce hover:scale-105 hover:rotate-1 border-primary/20 animate-fade-in-up group cursor-pointer relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
              
              <div className="relative z-10">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <h3 className="text-xl font-bold text-primary">
                        {exp.title}
                      </h3>
                      <Badge 
                        variant="outline" 
                        className="border-accent text-accent hover:scale-110 transition-bounce group-hover:animate-glow-pulse"
                      >
                        {exp.type}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-muted-foreground animate-fade-in-left" style={{ animationDelay: `${index * 0.2 + 0.1}s` }}>
                      <span className="font-semibold group-hover:text-primary transition-colors">
                        {exp.company}
                      </span>
                      <span className="hidden sm:inline">•</span>
                      <span className="group-hover:text-primary transition-colors">
                        {exp.location}
                      </span>
                      <span className="hidden sm:inline">•</span>
                      <span className="text-sm group-hover:text-primary transition-colors">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground transition-colors animate-fade-in" style={{ animationDelay: `${index * 0.2 + 0.2}s` }}>
                      {exp.description}
                    </p>
                    
                    <div className="mb-4 animate-fade-in" style={{ animationDelay: `${index * 0.2 + 0.3}s` }}>
                      <h4 className="text-sm font-semibold text-primary mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {exp.achievements.map((achievement, i) => (
                          <li 
                            key={i} 
                            className="animate-fade-in-left"
                            style={{ animationDelay: `${index * 0.2 + 0.4 + i * 0.1}s` }}
                          >
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-4 animate-fade-in-right" style={{ animationDelay: `${index * 0.2 + 0.5}s` }}>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge 
                            key={i} 
                            variant="secondary"
                            className="bg-primary/10 text-primary border-primary/20 text-xs hover:scale-110 transition-bounce animate-scale-in group-hover:animate-glow-pulse"
                            style={{ animationDelay: `${index * 0.2 + 0.6 + i * 0.05}s` }}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
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
