import { Card } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: "🎓",
      title: "Education",
      description: "5th year Computer Engineering at ENSAK Kénitra, strong foundation in CS fundamentals"
    },
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
              <p className="text-muted-foreground leading-relaxed mb-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                I am a Moroccan student in my fifth year of Computer Engineering at ENSAK Kénitra. 
                At 21 years old, I am passionate about new technologies and currently seeking a 
                PFE internship starting in January to apply my skills and contribute to innovative projects.
              </p>
              <p className="text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '0.5s' }}>
                My journey includes hands-on experience in data analysis, web development, and 
                network optimization through various internships and academic projects. I thrive 
                on solving complex problems and turning ideas into reality through code.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-right">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="glass p-6 hover:glow transition-bounce hover:scale-110 hover:rotate-1 border-primary/20 group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
              >
                <div className="text-3xl mb-3 group-hover:animate-bounce group-hover:scale-125 transition-all duration-300">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;