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
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate 21-year-old computer science student with expertise in modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-primary mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I am a Moroccan student in my fifth year of Computer Engineering at ENSAK Kénitra. 
                At 21 years old, I am passionate about new technologies and currently seeking a 
                PFE internship starting in January to apply my skills and contribute to innovative projects.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey includes hands-on experience in data analysis, web development, and 
                network optimization through various internships and academic projects. I thrive 
                on solving complex problems and turning ideas into reality through code.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="glass p-6 hover:glow transition-smooth hover:scale-105 border-primary/20"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="text-lg font-semibold text-primary mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;