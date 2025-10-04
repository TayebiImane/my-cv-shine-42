import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in-left">
              <h2 className="text-lg text-primary mb-2 animate-glow-pulse">Hello, I'm</h2>
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 animate-scale-in-bounce">
                Imane Tayebi
              </h1>
              <h3 className="text-2xl md:text-3xl text-muted-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Computer Science Engineer
              </h3>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Passionate about new technologies, data science, and web development. 
                Currently seeking a PFE internship to apply my skills in innovative projects.
              </p>
            </div>
            
            <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:scale-110 transition-bounce glow hover:animate-pulse-glow group relative overflow-hidden"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth hover:scale-105 hover:rotate-1 group relative overflow-hidden"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="flex gap-4">
                <a 
                  href="mailto:imane.tayebi@uit.ac.ma" 
                  className="text-muted-foreground hover:text-primary transition-smooth hover:scale-125 hover:rotate-12 animate-bounce-in group"
                  style={{ animationDelay: '1s' }}
                >
                  <svg className="w-6 h-6 group-hover:animate-shake" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com" 
                  className="text-muted-foreground hover:text-primary transition-smooth hover:scale-125 hover:rotate-12 animate-bounce-in group"
                  style={{ animationDelay: '1.1s' }}
                >
                  <svg className="w-6 h-6 group-hover:animate-shake" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com" 
                  className="text-muted-foreground hover:text-primary transition-smooth hover:scale-125 hover:rotate-12 animate-bounce-in group"
                  style={{ animationDelay: '1.2s' }}
                >
                  <svg className="w-6 h-6 group-hover:animate-shake" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end animate-fade-in-right">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 animate-pulse-glow group-hover:opacity-50 transition-all duration-300"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 blur-2xl animate-gradient-shift group-hover:blur-xl transition-all duration-500"></div>
              <img 
                src={profilePhoto} 
                alt="Imane Tayebi - Computer Science Engineer" 
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-primary glow animate-float-delayed hover:scale-105 transition-smooth cursor-pointer group-hover:animate-pulse-glow"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;