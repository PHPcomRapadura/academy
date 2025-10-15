import { GitBranch, GitPullRequest, CheckCircle2, Sparkles, BookOpen, RefreshCw } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    icon: BookOpen,
    title: "Escolha seu Workshop",
    description:
      "Visite o repositório no GitHub e confira a lista de workshops disponíveis no README da branch main. Cada workshop tem sua própria branch com todos os detalhes.",
    color: "from-primary to-accent",
  },
  {
    icon: GitBranch,
    title: "Encontre a Branch",
    description:
      "Navegue até a branch específica do workshop que te interessa. Lá você encontrará todas as informações: data, horário, instrutor e conteúdo programático.",
    color: "from-accent to-secondary",
  },
  {
    icon: GitPullRequest,
    title: "Faça seu Pull Request",
    description:
      "Adicione seu nome à lista de participantes e abra um PR na branch do workshop. Essa é sua inscrição! Simples assim, do jeito que a gente ama: código primeiro! 💻",
    color: "from-secondary to-primary",
  },
  {
    icon: CheckCircle2,
    title: "Confirmação",
    description:
      "Após a revisão do seu PR, você receberá a confirmação da inscrição e todas as informações para participar do workshop online. Prepare-se para aprender!",
    color: "from-primary to-accent",
  },
];

const HowItWorks = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleCards((prev) => [...new Set([...prev, index])]);
              }, index * 150);
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{ backgroundImage: "url(/bg-phpeste.jpg)" }}
      ></div>

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-background/30"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Como Funciona</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-foreground">
            Inscrição via
            <span className="block mt-2 bg-gradient-nordeste bg-clip-text text-transparent">Pull Request</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Um processo único que combina aprendizado com prática em Git e GitHub
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div 
                key={index} 
                ref={(el) => (cardRefs.current[index] = el)}
                className="group relative"
              >
                {/* Gradient border effect */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-br ${step.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-700 ${
                    isVisible ? 'scale-100 opacity-20' : 'scale-50 opacity-0'
                  }`}
                ></div>

                <div className={`relative h-full bg-card backdrop-blur-sm rounded-3xl border-2 border-border/50 group-hover:border-primary/50 transition-all duration-700 shadow-soft group-hover:shadow-hover ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                  {/* Icon - aparece primeiro */}
                  <div className={`mb-6 transition-all duration-500 ${
                    isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 -translate-y-4'
                  }`} style={{ transitionDelay: `${index * 150}ms` }}>
                    <div className={`inline-flex p-4 bg-gradient-to-br ${step.color} rounded-2xl shadow-lg m-8 md:m-10 mb-0`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content - aparece depois */}
                  <div className={`px-8 md:px-10 pb-8 md:pb-10 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`} style={{ transitionDelay: `${index * 150 + 200}ms` }}>
                    <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight box */}
        <div className="max-w-5xl mx-auto relative group animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="absolute -inset-1 bg-gradient-accent rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <div className="relative bg-card backdrop-blur-xl p-10 md:p-14 rounded-3xl border-2 border-primary/40 shadow-hover">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-glow">
                  <RefreshCw className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">Workshops sempre atualizados!</h3>
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                  A lista de workshops disponíveis está sempre atualizada no{" "}
                  <strong className="text-primary">README da branch main</strong> do repositório. Novos workshops são
                  adicionados regularmente, então fique de olho! 👀
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
