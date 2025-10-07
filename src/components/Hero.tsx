import { Button } from "@/components/ui/button";
import { Github, BookOpen, Code2, Sparkles, Sun } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      
      {/* Floating decorative elements - more vibrant */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary rounded-full blur-3xl opacity-25 animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/3 w-36 h-36 bg-secondary rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-accent rounded-full blur-2xl opacity-15 animate-float" style={{ animationDelay: "1.5s" }}></div>
        
        {/* Sun rays effect */}
        <Sun className="absolute top-10 right-20 w-24 h-24 text-accent/10 animate-pulse" />
        <Sparkles className="absolute bottom-32 left-20 w-16 h-16 text-primary/20 animate-float" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Logo/Badge with glow */}
          <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-glow border-2 border-primary/30">
            <Code2 className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-foreground">PHP com Rapadura</span>
          </div>

          {/* Main heading with gradient */}
          <h1 className="text-6xl md:text-8xl font-bold leading-tight">
            <span className="bg-gradient-nordeste bg-clip-text text-transparent drop-shadow-lg">
              Rapadura Academy
            </span>
          </h1>

          {/* Subheading with better contrast */}
          <p className="text-xl md:text-3xl font-semibold text-background/90 max-w-3xl mx-auto drop-shadow-md">
            Workshops online gratuitos para a comunidade. Aprenda, contribua e cresça junto com a gente! 🌵
          </p>

          {/* Description card with gradient border */}
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-nordeste rounded-3xl blur opacity-30"></div>
            <div className="relative bg-background/95 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-glow border-2 border-primary/20">
              <p className="text-lg text-foreground leading-relaxed">
                O Rapadura Academy é uma iniciativa da comunidade <strong className="text-primary">PHP com Rapadura</strong> para compartilhar conhecimento através de workshops online. 
                A inscrição é feita de um jeito único: através de um <strong className="text-accent">Pull Request no GitHub</strong>! 🚀
              </p>
            </div>
          </div>

          {/* CTA Buttons with enhanced styling */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="group relative text-lg px-10 py-7 shadow-glow hover:shadow-hover transition-all duration-300 hover:scale-110 overflow-hidden"
              asChild
            >
              <a 
                href="https://github.com/phpcomrapadura/academy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 relative z-10"
              >
                <Github className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Ver Workshops Disponíveis
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-10 py-7 border-2 border-background/30 bg-background/20 backdrop-blur-sm text-background hover:bg-background hover:text-foreground transition-all duration-300 hover:scale-105 shadow-soft"
              asChild
            >
              <a 
                href="https://phpcomrapadura.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <BookOpen className="w-6 h-6" />
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
