import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from 'react-i18next';

interface SkillCategory {
  category: string;
  skills: string[];
}

const Skills = () => {
  const { t } = useTranslation();

  // Type assertion pour les tableaux
  const skillCategories = t('Skills.categories', { returnObjects: true }) as SkillCategory[];
  const softSkills = t('Skills.softSkills.skills', { returnObjects: true }) as string[];

  // Ajouter les icônes et couleurs aux catégories
  const categoriesWithIcons = skillCategories.map((category, index) => ({
    ...category,
    icon: ["💻", "🌐", "📊", "🗄️", "☁️", "🛠️"][index],
    color: [
      "from-blue-500/20 to-indigo-500/20",
      "from-green-500/20 to-emerald-500/20", 
      "from-purple-500/20 to-violet-500/20",
      "from-orange-500/20 to-red-500/20",
      "from-cyan-500/20 to-teal-500/20",
      "from-pink-500/20 to-rose-500/20"
    ][index]
  }));

  return (
    <section id="skills" className="py-20 bg-gradient-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 animate-gradient-shift"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-scale-in-bounce">
            {t('Skills.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t('Skills.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoriesWithIcons.map((category, index) => (
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
                  <h3 className="text-lg font-semibold text-primary">
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
              <h3 className="text-2xl font-bold text-primary mb-4">
                {t('Skills.softSkills.title')}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {softSkills.map((skill, index) => (
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