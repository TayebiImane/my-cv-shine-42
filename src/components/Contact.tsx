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
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready for a PFE internship starting January 2025. Let's discuss how I can contribute to your team!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="glass p-8 border-primary/20">
              <h3 className="text-2xl font-bold text-primary mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm actively seeking a PFE (Projet de Fin d'Études) internship starting in January 2025. 
                With my background in computer engineering and hands-on experience in data science and web development, 
                I'm excited to contribute to innovative projects and continue learning.
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <span className="text-2xl">{info.icon}</span>
                    <div>
                      <p className="text-sm font-medium text-primary">{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-smooth"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="glass p-8 border-primary/20">
              <h3 className="text-xl font-bold text-primary mb-4">Availability</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>🗓️ <strong>Available from:</strong> January 2025</p>
                <p>⏰ <strong>Duration:</strong> 4-6 months (PFE internship)</p>
                <p>🌍 <strong>Open to:</strong> Remote, Hybrid, or On-site positions</p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass p-8 border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-primary">Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="mt-1 bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-primary">Email</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="mt-1 bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-primary">Subject</label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="mt-1 bg-background/50 border-primary/20 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-primary">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or internship opportunity..."
                  required
                  rows={5}
                  className="mt-1 bg-background/50 border-primary/20 focus:border-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-primary hover:scale-105 transition-bounce glow"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;