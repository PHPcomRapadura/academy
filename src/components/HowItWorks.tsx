import { GitBranch, GitPullRequest, BookOpen, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    icon: BookOpen,
    title: "1. Escolha um Workshop",
    description: "Visite o repositório e confira a lista de workshops disponíveis no README da branch main.",
    color: "text-primary"
  },
  {
    icon: GitBranch,
    title: "2. Encontre a Branch",
    description: "Cada workshop tem sua própria branch. Procure pela branch correspondente ao workshop escolhido.",
    color: "text-accent"
  },
  {
    icon: GitPullRequest,
    title: "3. Faça seu Pull Request",
    description: "Crie um Pull Request para a branch do workshop. Esse é o seu processo de inscrição!",
    color: "text-secondary"
  },
  {
    icon: CheckCircle2,
    title: "4. Confirmação",
    description: "Assim que seu PR for aceito, você está oficialmente inscrito. Receberá as informações sobre o workshop.",
    color: "text-primary"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Como Funciona?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Um processo simples e inovador de inscrição usando Git
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="border-2 hover:shadow-hover transition-all duration-300 hover:scale-105 animate-fade-in bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-primary/10 ${step.color}`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-foreground/80">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 bg-card rounded-2xl border-2 border-primary/20 shadow-soft animate-fade-in">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                <GitBranch className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Workshops Sempre Atualizados
              </h3>
              <p className="text-muted-foreground text-lg">
                A lista de workshops disponíveis está sempre no <strong>README da branch main</strong> do repositório. 
                Visite o repositório para conferir as próximas oportunidades!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
