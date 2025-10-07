import { GitBranch, GitPullRequest, CheckCircle, BookOpen, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: BookOpen,
    title: "1. Escolha um Workshop",
    description: "Acesse o repositório github.com/phpcomrapadura/academy e confira os workshops disponíveis listados no README da branch main.",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: GitBranch,
    title: "2. Encontre a Branch",
    description: "Cada workshop tem sua própria branch. Localize a branch correspondente ao workshop que você deseja participar.",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    icon: GitPullRequest,
    title: "3. Faça seu Pull Request",
    description: "Crie um Pull Request na branch do workshop escolhido. Esse é o seu registro de inscrição!",
    gradient: "from-orange-500 to-red-600",
  },
  {
    icon: CheckCircle,
    title: "4. Confirmação",
    description: "Assim que seu PR for aceito, você estará oficialmente inscrito. Aguarde as informações sobre data e horário.",
    gradient: "from-green-500 to-emerald-600",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Vibrant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,200,100,0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-primary px-6 py-2 rounded-full mb-6 shadow-glow">
            <Sparkles className="w-5 h-5 text-white animate-pulse" />
            <span className="text-sm font-bold text-white">Processo Único</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-nordeste bg-clip-text text-transparent">
              Como Funciona?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Inscrição através do GitHub - simples, rápido e colaborativo! 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-slide-in">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:scale-105 bg-card/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Gradient accent on top */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient}`}></div>
                
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center space-y-6">
                    <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all duration-300 group-hover:scale-110`}>
                      <Icon className="w-10 h-10 text-white" />
                      
                      {/* Connection line for desktop */}
                      {index < steps.length - 1 && (
                        <div className="hidden lg:block absolute left-full top-1/2 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-20 relative animate-fade-in">
          <div className="absolute inset-0 bg-gradient-nordeste rounded-3xl blur-xl opacity-20"></div>
          <div className="relative bg-card/90 backdrop-blur-sm p-8 md:p-10 rounded-3xl border-2 border-primary/30 shadow-glow">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-glow">
                  <GitBranch className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Workshops Sempre Atualizados
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  A lista de workshops disponíveis está sempre no <strong className="text-primary">README da branch main</strong> do repositório. 
                  Visite o repositório para conferir as próximas oportunidades!
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
