import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  highlights: string[];
}

const Projects = () => {
  const { t } = useTranslation();

  // Récupération des données avec typage
  const projects = (t('Projects.projects', { returnObjects: true }) || []) as ProjectItem[];
  const categories = t('Projects.categories', { returnObjects: true }) as Record<string, string>;

  // Ajouter les gradients aux projets
  const projectsWithGradients = projects.map((project, index) => ({
    ...project,
    gradient: [
      "from-blue-500/20 to-indigo-500/20",
      "from-purple-500/20 to-violet-500/20",
      "from-pink-500/20 to-rose-500/20",
      "from-green-500/20 to-emerald-500/20",
      "from-orange-500/20 to-red-500/20"
    ][index]
  }));

  // Couleurs des catégories
  const categoryColors = {
    "Data Analysis": "bg-blue-500/10 text-blue-400 border-blue-400/20",
    "AI/NLP": "bg-purple-500/10 text-purple-400 border-purple-400/20",
    "Design": "bg-pink-500/10 text-pink-400 border-pink-400/20",
    "Machine Learning": "bg-green-500/10 text-green-400 border-green-400/20",
    "Full Stack": "bg-orange-500/10 text-orange-400 border-orange-400/20"
  };

  return (
    <section id="projects" className="py-20 bg-gradient-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tl from-primary/10 via-transparent to-accent/10 animate-gradient-shift"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-scale-in-bounce">
            {t('Projects.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t('Projects.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projectsWithGradients.map((project, index) => (
            <Card 
              key={index} 
              className="glass p-6 h-full flex flex-col hover:glow transition-bounce hover:scale-105 hover:rotate-1 border-primary/20 animate-fade-in-up group cursor-pointer relative overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <Badge 
                    variant="outline" 
                    className={`${categoryColors[project.category as keyof typeof categoryColors]} hover:scale-110 transition-bounce group-hover:animate-glow-pulse`}
                  >
                    {categories[project.category] || project.category}
                  </Badge>
                </div>
                
                <h3 className="text-lg font-bold text-primary mb-3 line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed group-hover:text-foreground transition-colors animate-fade-in" style={{ animationDelay: `${index * 0.15 + 0.1}s` }}>
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <div className="animate-fade-in" style={{ animationDelay: `${index * 0.15 + 0.2}s` }}>
                    <h4 className="text-xs font-semibold text-primary mb-2">
                      {t('Projects.sections.keyFeatures')}
                    </h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li 
                          key={i} 
                          className="text-xs text-muted-foreground flex items-center group-hover:text-foreground transition-colors animate-fade-in-left"
                          style={{ animationDelay: `${index * 0.15 + 0.3 + i * 0.05}s` }}
                        >
                          <span className="text-accent mr-2 group-hover:animate-bounce">✓</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="animate-fade-in" style={{ animationDelay: `${index * 0.15 + 0.4}s` }}>
                    <h4 className="text-xs font-semibold text-primary mb-2">
                      {t('Projects.sections.technologies')}
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, i) => (
                        <Badge 
                          key={i} 
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20 text-xs px-2 py-1 hover:scale-110 transition-bounce animate-scale-in group-hover:animate-glow-pulse"
                          style={{ animationDelay: `${index * 0.15 + 0.5 + i * 0.03}s` }}
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

        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-bounce hover:scale-110 hover:rotate-1 group relative overflow-hidden"
            onClick={() => window.open('https://github.com/TayebiImane?tab=repositories', '_blank')}
          >
            <span className="relative z-10">{t('Projects.sections.viewMore')}</span>
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;