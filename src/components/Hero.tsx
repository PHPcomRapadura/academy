import { Button } from "@/components/ui/button";
import { Github, BookOpen, Code2, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Decorative pattern background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cactus-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              {/* Cacto */}
              <path d="M100 150 Q95 120 95 100 Q95 80 100 60 Q105 80 105 100 Q105 120 100 150 M85 110 Q80 105 80 95 Q80 85 85 80 M115 110 Q120 105 120 95 Q120 85 115 80" 
                    fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground"/>
              {/* Flor */}
              <circle cx="50" cy="50" r="3" fill="currentColor" className="text-accent"/>
              <circle cx="46" cy="46" r="2" fill="currentColor" className="text-accent"/>
              <circle cx="54" cy="46" r="2" fill="currentColor" className="text-accent"/>
              <circle cx="46" cy="54" r="2" fill="currentColor" className="text-accent"/>
              <circle cx="54" cy="54" r="2" fill="currentColor" className="text-accent"/>
              {/* Sol */}
              <circle cx="160" cy="30" r="8" fill="currentColor" className="text-primary"/>
              <line x1="160" y1="18" x2="160" y2="12" stroke="currentColor" strokeWidth="2" className="text-primary"/>
              <line x1="172" y1="30" x2="178" y2="30" stroke="currentColor" strokeWidth="2" className="text-primary"/>
              <line x1="148" y1="30" x2="142" y2="30" stroke="currentColor" strokeWidth="2" className="text-primary"/>
              <line x1="160" y1="42" x2="160" y2="48" stroke="currentColor" strokeWidth="2" className="text-primary"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cactus-pattern)" />
        </svg>
      </div>

      {/* Floating decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-secondary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        
        {/* Sparkle icons */}
        <Sparkles className="absolute top-20 right-1/4 w-12 h-12 text-accent/30 animate-pulse" />
        <Sparkles className="absolute bottom-40 left-1/3 w-8 h-8 text-primary/30 animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-10 animate-fade-in">
          {/* Logo Badge */}
          <div className="inline-flex items-center gap-3 bg-background/40 backdrop-blur-md px-8 py-4 rounded-full shadow-glow border-2 border-primary/40 hover:border-primary/60 transition-all">
            <Code2 className="w-6 h-6 text-primary animate-pulse" />
            <span className="text-base font-bold text-foreground">PHP com Rapadura</span>
          </div>

          {/* Main heading */}
          <h1 className="text-7xl md:text-9xl font-black leading-tight tracking-tight">
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-nordeste blur-2xl opacity-50"></span>
              <span className="relative bg-gradient-nordeste bg-clip-text text-transparent drop-shadow-2xl">
                Rapadura
              </span>
            </span>
            <br />
            <span className="relative inline-block mt-4">
              <span className="absolute inset-0 bg-gradient-accent blur-xl opacity-40"></span>
              <span className="relative text-foreground/90 drop-shadow-lg">
                Academy
              </span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-2xl md:text-4xl font-bold text-foreground/80 max-w-4xl mx-auto drop-shadow-lg leading-relaxed">
            Workshops online gratuitos<br className="hidden md:block" /> 
            <span className="text-primary"> para a comunidade</span> 🌵
          </p>

          {/* Description card */}
          <div className="relative max-w-4xl mx-auto group">
            <div className="absolute -inset-1 bg-gradient-accent rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-card/60 backdrop-blur-xl p-10 md:p-14 rounded-3xl shadow-hover border-2 border-primary/30 group-hover:border-primary/50 transition-all">
              <p className="text-xl md:text-2xl text-card-foreground leading-relaxed font-medium">
                Aprenda, contribua e cresça junto com a gente! O Rapadura Academy é uma iniciativa da <strong className="text-primary font-bold">PHP com Rapadura</strong> para compartilhar conhecimento através de workshops online. 
                <br /><br />
                A inscrição é feita de um jeito único: através de um <strong className="text-accent font-bold">Pull Request no GitHub</strong>! 🚀
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6">
            <Button 
              size="lg" 
              className="group relative text-xl px-12 py-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-hover transition-all duration-300 hover:scale-105 font-bold rounded-2xl"
              asChild
            >
              <a 
                href="https://github.com/phpcomrapadura/academy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Github className="w-7 h-7 group-hover:rotate-12 transition-transform" />
                Ver Workshops Disponíveis
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-xl px-12 py-8 border-3 border-foreground/40 bg-background/30 backdrop-blur-md text-foreground hover:bg-background/60 hover:border-foreground/60 transition-all duration-300 hover:scale-105 shadow-soft font-bold rounded-2xl"
              asChild
            >
              <a 
                href="https://phpcomrapadura.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <BookOpen className="w-7 h-7" />
                Sobre a Comunidade
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
