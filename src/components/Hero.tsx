import { Button } from "@/components/ui/button";
import PhpComRaparura from "/php-com-rapadura.webp";
import { Github, BookOpen, Code2, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}bg-phpeste.jpg)` }}
      ></div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/20"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-10 animate-fade-in">
          {/* Logo Badge */}
          <div className="inline-flex items-center gap-3 bg-white backdrop-blur-md px-4 py-2 rounded-full shadow-glow border-2 border-primary/40 hover:border-primary/60 transition-all">
            <img src={PhpComRaparura} alt="Logo PHP com Rapadura" className="w-auto object-contain h-[40px]" />
          </div>

          {/* Main heading */}
          <h1 className="text-7xl md:text-9xl font-black leading-tight tracking-tight">
            <span className="relative inline-block">
              <span
                className="relative bg-gradient-nordeste bg-clip-text text-transparent"
                style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
              >
                Rapadura
              </span>
            </span>
            <br />
            <span className="relative inline-block">
              <span
                className="relative bg-gradient-nordeste bg-clip-text text-transparent"
                style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
              >
                Academy
              </span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-2xl md:text-4xl font-bold text-foreground max-w-4xl mx-auto drop-shadow-lg leading-relaxed">
            Tudo na faixa para a comunidade 🌵
          </p>

          {/* Description card */}
          <div className="relative max-w-4xl mx-auto group">
            <div className="absolute -inset-1 bg-gradient-accent rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-card/60 backdrop-blur-xl p-10 md:p-14 rounded-3xl shadow-hover border-2 border-primary/30 group-hover:border-primary/50 transition-all">
              <p className="text-xl md:text-2xl text-card-foreground leading-relaxed font-medium">
                Aprenda, contribua e cresça junto com a gente! O Rapadura Academy é uma iniciativa da{" "}
                <strong className="text-primary font-bold">PHP com Rapadura</strong> para compartilhar conhecimento
                através de workshops online.
                <br />
                <br />A inscrição é feita de um jeito único: através de um{" "}
                <strong className="text-accent font-bold">Pull Request no GitHub</strong>! 🚀
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6">
            <Button
              size="lg"
              className="group relative text-xl px-12 py-8 bg-gradient-nordeste hover:bg-gradient-nordeste/90 text-gray-300 shadow-glow hover:shadow-hover transition-all duration-300 hover:scale-105 font-bold rounded-2xl"
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
