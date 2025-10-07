import { Code2, Palette, Server, Cpu, Rocket, Terminal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const workshopCategories = [
  {
    icon: Code2,
    title: "PHP",
    description: "Do básico ao avançado, explorando recursos modernos do PHP",
    color: "from-purple-500 to-indigo-600",
    examples: ["PHP 8.x features", "Design Patterns", "APIs RESTful"]
  },
  {
    icon: Palette,
    title: "Frontend",
    description: "Frameworks modernos e técnicas de desenvolvimento web",
    color: "from-blue-500 to-cyan-600",
    examples: ["React & Vue", "Tailwind CSS", "Animações CSS"]
  },
  {
    icon: Server,
    title: "Infraestrutura",
    description: "DevOps, containers, e arquitetura de sistemas",
    color: "from-green-500 to-emerald-600",
    examples: ["Docker", "CI/CD", "Cloud Services"]
  },
  {
    icon: Rocket,
    title: "Frameworks",
    description: "Hyperf, Laravel, Symfony e outros frameworks populares",
    color: "from-orange-500 to-red-600",
    examples: ["Hyperf", "Laravel", "Symfony"]
  },
  {
    icon: Terminal,
    title: "Produção de Conteúdo",
    description: "Aprenda a criar e compartilhar conhecimento técnico",
    color: "from-pink-500 to-rose-600",
    examples: ["Blogs técnicos", "Screencasts", "Documentação"]
  },
  {
    icon: Cpu,
    title: "Tecnologias Emergentes",
    description: "IA, Machine Learning e tendências do mercado",
    color: "from-amber-500 to-yellow-600",
    examples: ["AI Integration", "Microservices", "WebAssembly"]
  }
];

const WorkshopExamples = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,200,100,0.15),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,150,80,0.15),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-nordeste px-6 py-2 rounded-full mb-6 shadow-glow">
            <Rocket className="w-5 h-5 text-white" />
            <span className="text-sm font-bold text-white">Explore os Temas</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-sunset bg-clip-text text-transparent">
              Exemplos de Workshops
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Do desenvolvimento web ao conteúdo técnico, nossos workshops cobrem uma ampla variedade de temas para todos os níveis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-in">
          {workshopCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden border-2 border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <CardContent className="p-8 relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} mb-6 shadow-soft group-hover:shadow-glow transition-all duration-300 group-hover:scale-110`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground/80 uppercase tracking-wide">
                      Tópicos:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.examples.map((example, i) => (
                        <span 
                          key={i}
                          className="text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-full border border-primary/20 font-medium"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-block bg-card/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft border-2 border-primary/20 max-w-2xl">
            <p className="text-foreground leading-relaxed">
              <strong className="text-primary">Novo workshop toda semana!</strong> Cada workshop é uma branch diferente. 
              Confira a lista completa no README do repositório principal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopExamples;
