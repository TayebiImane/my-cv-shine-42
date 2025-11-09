import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

interface ContactInfoItem {
  label: string;
  value: string;
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: t('Contact.toast.title'),
      description: t('Contact.toast.description'),
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Récupération des données de contact
  const contactInfoData = t('Contact.contactInfo', { returnObjects: true }) as ContactInfoItem[];
  const availabilityItems = t('Contact.availability.items', { returnObjects: true }) as string[];

  // Ajouter les icônes et liens aux informations de contact
  const contactInfo = contactInfoData.map((info, index) => ({
    ...info,
    icon: ["📧", "📱", "📍", "🎓"][index],
    link: index === 0 ? "mailto:imane.tayebi@uit.ac.ma" : 
          index === 1 ? "tel:+212690292055" : null
  }));

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5 animate-gradient-shift"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-scale-in-bounce">
            {t('Contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t('Contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-left">
            <Card className="glass p-8 border-primary/20 hover:glow transition-bounce hover:scale-105 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  {t('Contact.letsConnect.title')}
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed group-hover:text-foreground transition-colors animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  {t('Contact.letsConnect.description')}
                </p>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-4 group/item hover:scale-105 transition-bounce animate-fade-in-up"
                      style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                    >
                      <span className="text-2xl group-hover/item:animate-bounce group-hover/item:scale-125 transition-all">
                        {info.icon}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-primary">
                          {info.label}
                        </p>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-smooth group-hover/item:text-foreground"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="glass p-8 border-primary/20 hover:glow transition-bounce hover:scale-105 group relative overflow-hidden animate-fade-in-left" style={{ animationDelay: '0.8s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-primary mb-4">
                  {t('Contact.availability.title')}
                </h3>
                <div className="space-y-2 text-muted-foreground group-hover:text-foreground transition-colors">
                  {availabilityItems.map((item, index) => (
                    <p 
                      key={index} 
                      className="animate-fade-in" 
                      style={{ animationDelay: `${0.9 + index * 0.1}s` }}
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass p-8 border-primary/20 hover:glow transition-smooth hover:scale-105 group relative overflow-hidden animate-fade-in-right">
            <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-primary mb-6">
                {t('Contact.sendMessage.title')}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <label className="text-sm font-medium text-primary">
                      {t('Contact.sendMessage.labels.name')}
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('Contact.sendMessage.placeholders.name')}
                      required
                      className="mt-1 bg-background/50 border-primary/20 focus:border-primary hover:scale-105 transition-bounce"
                    />
                  </div>
                  <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <label className="text-sm font-medium text-primary">
                      {t('Contact.sendMessage.labels.email')}
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('Contact.sendMessage.placeholders.email')}
                      required
                      className="mt-1 bg-background/50 border-primary/20 focus:border-primary hover:scale-105 transition-bounce"
                    />
                  </div>
                </div>
                
                <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                  <label className="text-sm font-medium text-primary">
                    {t('Contact.sendMessage.labels.subject')}
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t('Contact.sendMessage.placeholders.subject')}
                    required
                    className="mt-1 bg-background/50 border-primary/20 focus:border-primary hover:scale-105 transition-bounce"
                  />
                </div>
                
                <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                  <label className="text-sm font-medium text-primary">
                    {t('Contact.sendMessage.labels.message')}
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('Contact.sendMessage.placeholders.message')}
                    required
                    rows={5}
                    className="mt-1 bg-background/50 border-primary/20 focus:border-primary resize-none hover:scale-105 transition-bounce"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:scale-110 transition-bounce glow hover:animate-pulse-glow group/btn relative overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: '0.7s' }}
                >
                  <span className="relative z-10">
                    {t('Contact.sendMessage.submit')}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover/btn:opacity-20 transition-all duration-300"></div>
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
