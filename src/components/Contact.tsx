import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "imane.tayebi@uit.ac.ma",
      link: "mailto:imane.tayebi@uit.ac.ma"
    },
    {
      icon: "📱",
      label: "Phone", 
      value: "+212 690 292 055",
      link: "tel:+212690292055"
    },
    {
      icon: "📍",
      label: "Location",
      value: "Kénitra, Morocco",
      link: null
    },
    {
      icon: "🎓",
      label: "Institution",
      value: "ENSAK Kénitra",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5 animate-gradient-shift"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 animate-scale-in-bounce">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Ready for a PFE internship starting January 2025. Let's discuss how I can contribute to your team!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-left">
            <Card className="glass p-8 border-primary/20 hover:glow transition-bounce hover:scale-105 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-primary mb-6 group-hover:animate-text-shimmer bg-gradient-to-r from-primary to-accent bg-[length:200%_auto]">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed group-hover:text-foreground transition-colors animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  I'm actively seeking a PFE (Projet de Fin d'Études) internship starting in January 2025. 
                  With my background in computer engineering and hands-on experience in data science and web development, 
                  I'm excited to contribute to innovative projects and continue learning.
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
                        <p className="text-sm font-medium text-primary group-hover/item:animate-text-shimmer bg-gradient-to-r from-primary to-accent bg-[length:200%_auto]">
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
                <h3 className="text-xl font-bold text-primary mb-4 group-hover:animate-text-shimmer bg-gradient-to-r from-primary to-accent bg-[length:200%_auto]">
                  Availability
                </h3>
                <div className="space-y-2 text-muted-foreground group-hover:text-foreground transition-colors">
                  <p className="animate-fade-in" style={{ animationDelay: '0.9s' }}>
                    🗓️ <strong>Available from:</strong> January 2025
                  </p>
                  <p className="animate-fade-in" style={{ animationDelay: '1s' }}>
                    ⏰ <strong>Duration:</strong> 4-6 months (PFE internship)
                  </p>
                  <p className="animate-fade-in" style={{ animationDelay: '1.1s' }}>
                    🌍 <strong>Open to:</strong> Remote, Hybrid, or On-site positions
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass p-8 border-primary/20 hover:glow transition-smooth hover:scale-105 group relative overflow-hidden animate-fade-in-right">
            <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-primary mb-6 group-hover:animate-text-shimmer bg-gradient-to-r from-primary to-accent bg-[length:200%_auto]">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <label className="text-sm font-medium text-primary">Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="mt-1 bg-background/50 border-primary/20 focus:border-primary hover:scale-105 transition-bounce"
                    />
                  </div>
                  <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <label className="text-sm font-medium text-primary">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="mt-1 bg-background/50 border-primary/20 focus:border-primary hover:scale-105 transition-bounce"
                    />
                  </div>
                </div>
                
                <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                  <label className="text-sm font-medium text-primary">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="mt-1 bg-background/50 border-primary/20 focus:border-primary hover:scale-105 transition-bounce"
                  />
                </div>
                
                <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                  <label className="text-sm font-medium text-primary">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or internship opportunity..."
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
                  <span className="relative z-10">Send Message</span>
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