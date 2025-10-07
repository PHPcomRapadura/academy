import { Button } from "@/components/ui/button";
import { Github, BookOpen, Code2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Logo/Badge */}
          <div className="inline-flex items-center gap-2 bg-card px-6 py-3 rounded-full shadow-soft border border-border">
            <Code2 className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-foreground">PHP com Rapadura</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Rapadura <span className="bg-gradient-primary bg-clip-text text-transparent">Academy</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Workshops online gratuitos para a comunidade. Aprenda, contribua e cresça junto com a gente.
          </p>

          {/* Description */}
          <div className="bg-card p-6 md:p-8 rounded-2xl shadow-soft border border-border max-w-2xl mx-auto">
            <p className="text-foreground leading-relaxed">
              O Rapadura Academy é uma iniciativa da comunidade <strong>PHP com Rapadura</strong> para compartilhar conhecimento através de workshops online. 
              A inscrição é feita de um jeito único: através de um <strong>Pull Request no GitHub</strong>! 🚀
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-hover hover:shadow-soft transition-all duration-300 hover:scale-105"
              asChild
            >
              <a 
                href="https://github.com/phpcomrapadura/academy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                Ver Workshops Disponíveis
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 hover:bg-primary/5 transition-all duration-300"
              asChild
            >
              <a 
                href="https://phpcomrapadura.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
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
