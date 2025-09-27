import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: "💻",
      skills: ["Python", "Java", "C/C++", "JavaScript", "TypeScript", "Ruby", "Go", "R"]
    },
    {
      category: "Web Development",
      icon: "🌐",
      skills: ["React.js", "Angular", "Vue.js", "Node.js", "Laravel", "Rails", "HTML/CSS", "Tailwind CSS"]
    },
    {
      category: "Data Science & ML",
      icon: "📊",
      skills: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow", "PyTorch", "NLP", "OpenCV"]
    },
    {
      category: "Databases",
      icon: "🗄️",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Oracle", "Redis", "SQLite"]
    },
    {
      category: "Cloud & DevOps",
      icon: "☁️",
      skills: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins", "CI/CD"]
    },
    {
      category: "Tools & Technologies",
      icon: "🛠️",
      skills: ["Git/GitHub", "VS Code", "Figma", "QGIS", "Postman", "Linux", "Agile/Scrum"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for modern software development and data science
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="glass p-6 hover:glow transition-smooth hover:scale-105 border-primary/20 animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="text-lg font-semibold text-primary">{category.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-smooth"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="glass p-8 max-w-4xl mx-auto border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-4">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Problem Solving", "Team Collaboration", "Critical Thinking", 
                "Project Management", "Communication", "Adaptability", "Leadership"
              ].map((skill, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="text-lg px-4 py-2 border-accent text-accent hover:bg-accent/10 transition-smooth"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;