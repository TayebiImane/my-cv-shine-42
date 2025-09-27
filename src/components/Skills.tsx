import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: "💻",
      skills: ["Python", "Java", "C/C++", "JavaScript", "TypeScript", "Ruby", "Go", "R"],
      color: "from-blue-500/20 to-indigo-500/20"
    },
    {
      category: "Web Development", 
      icon: "🌐",
      skills: ["React.js", "Angular", "Vue.js", "Node.js", "Laravel", "Rails", "HTML/CSS", "Tailwind CSS"],
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      category: "Data Science & ML",
      icon: "📊", 
      skills: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow", "PyTorch", "NLP", "OpenCV"],
      color: "from-purple-500/20 to-violet-500/20"
    },
    {
      category: "Databases",
      icon: "🗄️",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Oracle", "Redis", "SQLite"],
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      category: "Cloud & DevOps",
      icon: "☁️",
      skills: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins", "CI/CD"],
      color: "from-cyan-500/20 to-teal-500/20"
    },
    {
      category: "Tools & Technologies",
      icon: "🛠️",
      skills: ["Git/GitHub", "VS Code", "Figma", "QGIS", "Postman", "Linux", "Agile/Scrum"],
      color: "from-pink-500/20 to-rose-500/20"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 animate-gradient-shift"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 animate-scale-in-bounce">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            A comprehensive toolkit for modern software development and data science
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`glass p-6 hover:glow transition-bounce hover:scale-105 hover:rotate-1 border-primary/20 animate-fade-in-up group cursor-pointer relative overflow-hidden`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3 group-hover:animate-bounce group-hover:scale-125 transition-all duration-300">
                    {category.icon}
                  </span>
                  <h3 className="text-lg font-semibold text-primary group-hover:animate-text-shimmer bg-gradient-to-r from-primary to-accent bg-[length:200%_auto]">
                    {category.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-smooth hover:scale-110 animate-scale-in group-hover:animate-glow-pulse"
                      style={{ animationDelay: `${index * 0.15 + skillIndex * 0.05}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <Card className="glass p-8 max-w-4xl mx-auto border-primary/20 hover:glow transition-smooth hover:scale-105 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-primary mb-4 group-hover:animate-text-shimmer bg-gradient-to-r from-primary to-accent bg-[length:200%_auto]">
                Soft Skills
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Problem Solving", "Team Collaboration", "Critical Thinking", 
                  "Project Management", "Communication", "Adaptability", "Leadership"
                ].map((skill, index) => (
                  <Badge 
                    key={index}
                    variant="outline" 
                    className="text-lg px-4 py-2 border-accent text-accent hover:bg-accent/10 transition-bounce hover:scale-110 hover:rotate-1 animate-bounce-in"
                    style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;