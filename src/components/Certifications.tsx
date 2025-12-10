import React from 'react';
import { Card } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

interface CertificationItem {
  image: string; // chaque certif est juste une image
}

const Certifications = () => {
  const { t } = useTranslation();

  // récupère simplement une liste d’images
  const rawCerts = t('Certifications.items', { returnObjects: true });
  const certifications = Array.isArray(rawCerts) ? (rawCerts as CertificationItem[]) : [];

  const colors = [
    "from-blue-500/20 to-indigo-500/20",
    "from-green-500/20 to-emerald-500/20", 
    "from-purple-500/20 to-violet-500/20",
    "from-orange-500/20 to-red-500/20",
    "from-cyan-500/20 to-teal-500/20",
    "from-pink-500/20 to-rose-500/20"
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-secondary relative overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 animate-gradient-shift"></div>

      <div className="container mx-auto px-6 relative">

        {/* Title */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-scale-in-bounce">
            {t('Certifications.title')}
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            {t('Certifications.subtitle')}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="glass p-6 hover:glow transition-bounce hover:scale-105 hover:rotate-1 
              border-primary/20 animate-fade-in-up group cursor-pointer relative overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${colors[index % colors.length]} 
                opacity-0 group-hover:opacity-100 transition-all duration-500`}
              ></div>

              <div className="relative z-10 flex justify-center">
                {
                  (() => {
                    const isAbsolute = typeof cert.image === 'string' && cert.image.startsWith('/');
                    const imageSrc = isAbsolute
                      ? cert.image
                      : (() => {
                          try {
                            return new URL(`../assets/${cert.image}`, import.meta.url).href;
                          } catch (e) {
                            return cert.image;
                          }
                        })();

                    return (
                      <img
                        src={imageSrc}
                        alt={`cert-${index}`}
                        width={300}
                        height={300}
                        loading="lazy"
                        className="rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-2"
                      />
                    );
                  })()
                }
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
