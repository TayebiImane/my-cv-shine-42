import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from 'react-i18next';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

const Experience = () => {
  const { t } = useTranslation();

  // Récupération des données avec typage
  const experiences = (t('Experience.experiences', { returnObjects: true }) || []) as ExperienceItem[];

  // Ajouter les gradients aux expériences
  const experiencesWithGradients = experiences.map((exp, index) => ({
    ...exp,
    gradient: [
      "from-orange-500/20 to-red-500/20",
      "from-blue-500/20 to-cyan-500/20",
      "from-green-500/20 to-emerald-500/20"
    ][index]
  }));

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-accent/5 to-primary/5 animate-gradient-shift"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-scale-in-bounce">
            {t('Experience.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t('Experience.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiencesWithGradients.map((exp, index) => (
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
                        {t('Experience.sections.keyAchievements')}
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
                        {t('Experience.sections.technologiesUsed')}
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
