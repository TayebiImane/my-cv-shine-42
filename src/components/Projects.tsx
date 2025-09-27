import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "University Graduates Employability Study",
      description: "Statistical analysis of employment outcomes for university graduates using advanced R programming and Excel data visualization techniques.",
      technologies: ["R", "Excel", "Statistics", "Data Visualization"],
      category: "Data Analysis",
      highlights: [
        "Comprehensive statistical modeling",
        "Interactive data visualizations", 
        "Employment trend analysis"
      ]
    },
    {
      title: "Multi-Language Poem/Song Verifier & Translator",
      description: "Advanced NLP application supporting Arabic, Darija, Tamazight, French, and English with real-time translation and content verification.",
      technologies: ["Python", "Flask", "NLP", "Machine Learning"],
      category: "AI/NLP",
      highlights: [
        "Multi-language support (5 languages)",
        "Real-time translation engine",
        "Content verification algorithms"
      ]
    },
    {
      title: "Hotel Booking Website Prototype", 
      description: "Modern hotel booking interface design with intuitive user experience and responsive layout for seamless reservation management.",
      technologies: ["Figma", "UI/UX Design", "Prototyping"],
      category: "Design",
      highlights: [
        "User-centered design approach",
        "Interactive prototype",
        "Responsive design system"
      ]
    },
    {
      title: "Job Offer Scraping & Classification",
      description: "Intelligent job market analysis tool that scrapes job offers and classifies them using machine learning algorithms.",
      technologies: ["Java", "Machine Learning", "Web Scraping"],
      category: "Machine Learning", 
      highlights: [
        "Automated web scraping",
        "ML-based job classification",
        "Market trend analysis"
      ]
    },
    {
      title: "Absence Management System",
      description: "Full-stack web application for educational institutions to efficiently track and manage student/staff attendance.",
      technologies: ["React", "PostgreSQL", "Express.js", "Node.js"],
      category: "Full Stack",
      highlights: [
        "Real-time attendance tracking",
        "Role-based access control",
        "Comprehensive reporting system"
      ]
    }
  ];

  const categoryColors = {
    "Data Analysis": "bg-blue-500/10 text-blue-400 border-blue-400/20",
    "AI/NLP": "bg-purple-500/10 text-purple-400 border-purple-400/20", 
    "Design": "bg-pink-500/10 text-pink-400 border-pink-400/20",
    "Machine Learning": "bg-green-500/10 text-green-400 border-green-400/20",
    "Full Stack": "bg-orange-500/10 text-orange-400 border-orange-400/20"
  };

  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Academic Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative projects showcasing technical expertise and problem-solving skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glass p-6 h-full flex flex-col hover:glow transition-smooth hover:scale-105 border-primary/20 animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <Badge 
                  variant="outline" 
                  className={categoryColors[project.category as keyof typeof categoryColors]}
                >
                  {project.category}
                </Badge>
              </div>
              
              <h3 className="text-lg font-bold text-primary mb-3 line-clamp-2">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-primary mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-center">
                        <span className="text-accent mr-2">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xs font-semibold text-primary mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 text-xs px-2 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            View More Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;