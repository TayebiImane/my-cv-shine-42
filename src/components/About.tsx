import { Card } from '@/components/ui/card';

const About = () => {
  const education = [
    {
      degree: "Preparatory Cycle, Engineering Cycle in Computer Science",
      school: "ENSAK",
      icon: "🎓"
    },
    {
      degree: "Baccalaureate in Mathematical Sciences A",
      school: "Palestine High School, Jorf El Melha",
      icon: "📚"
    }
  ];

  const highlights = [
    {
      icon: "💼",
      title: "Experience", 
      description: "Data Analysis, Web Development, and Network Segmentation internships"
    },
    {
      icon: "🌍",
      title: "Languages",
      description: "Native Arabic, Fluent in French and English"
    },
    {
      icon: "🚀",
      title: "Goal",
      description: "Seeking PFE internship to apply skills in innovative projects"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 animate-gradient-shift"></div>
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-scale-in-bounce">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            A passionate 21-year-old computer science student with expertise in modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-left">
            <div className="glass rounded-2xl p-8 border border-primary/20 hover:glow transition-smooth hover:scale-105 group">
              <h3 className="text-2xl font-bold text-primary mb-4">
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
                I am a Moroccan student in my fifth year of Computer Engineering at ENSAK Kénitra. 
                At 21 years old, I am passionate about new technologies and currently seeking a 
                PFE internship starting in January to apply my skills and contribute to innovative projects.
              </p>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-right">
            <div className="glass rounded-2xl p-8 border border-primary/20 hover:glow transition-smooth hover:scale-105">
              <h3 className="text-2xl font-bold text-primary mb-6">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="flex gap-4 animate-fade-in" style={{ animationDelay: `${index * 0.1 + 0.4}s` }}>
                    <div className="text-2xl">{edu.icon}</div>
                    <div>
                      <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-sm text-muted-foreground">{edu.school}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {highlights.map((item, index) => (
                <Card 
                  key={index} 
                  className="glass p-6 hover:glow transition-bounce hover:scale-105 border-primary/20 group cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 0.1 + 0.6}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl group-hover:animate-bounce group-hover:scale-125 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;