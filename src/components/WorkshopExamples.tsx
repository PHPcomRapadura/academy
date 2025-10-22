import { Code2, Palette, Server, Cpu, Rocket, Terminal } from "lucide-react";

const workshopCategories = [
  {
    icon: Code2,
    title: "PHP",
    description: "Do básico ao avançado, explorando recursos modernos do PHP",
    color: "from-primary via-accent to-secondary",
    examples: ["PHP 8.x features", "Design Patterns", "APIs RESTful"],
  },
  {
    icon: Palette,
    title: "Frontend",
    description: "Frameworks modernos e técnicas de desenvolvimento web",
    color: "from-accent via-secondary to-primary",
    examples: ["React & Vue", "Tailwind CSS", "Animações CSS"],
  },
  {
    icon: Server,
    title: "Infraestrutura",
    description: "DevOps, containers, e arquitetura de sistemas",
    color: "from-secondary via-primary to-accent",
    examples: ["Docker", "CI/CD", "Cloud Services"],
  },
  {
    icon: Rocket,
    title: "Frameworks",
    description: "Hyperf, Laravel, Symfony e outros frameworks populares",
    color: "from-primary via-secondary to-accent",
    examples: ["Hyperf", "Laravel", "Symfony"],
  },
  {
    icon: Terminal,
    title: "Produção de Conteúdo",
    description: "Aprenda a criar e compartilhar conhecimento técnico",
    color: "from-accent via-primary to-secondary",
    examples: ["Palestras", "Documentação", "Blogs técnicos"],
  },
  {
    icon: Cpu,
    title: "Tecnologias Emergentes",
    description: "IA, Machine Learning e tendências do mercado",
    color: "from-secondary via-accent to-primary",
    examples: ["AI Integration", "Microservices", "WebAssembly"],
  },
];

const WorkshopExamples = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}bg-phpeste.jpg)` }}
      ></div>

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-background/30"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-6 py-3 rounded-full">
            <Rocket className="w-5 h-5 text-accent" />
            <span className="text-sm font-bold text-accent uppercase tracking-wider">Explore os Temas</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-foreground">
            <span className="bg-gradient-nordeste bg-clip-text text-transparent">Exemplos de Workshops</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-medium leading-relaxed">
            Do desenvolvimento web ao conteúdo técnico, nossos workshops cobrem uma ampla variedade de temas para todos
            os níveis
          </p>
        </div>

        {/* Workshop Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {workshopCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="group relative animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Gradient glow effect */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-br ${category.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                ></div>

                <div className="relative h-full bg-card backdrop-blur-sm p-8 rounded-3xl border-2 border-border/50 group-hover:border-primary/50 transition-all duration-300 shadow-soft group-hover:shadow-hover group-hover:scale-105">
                  {/* Icon with gradient background */}
                  <div className="mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-card-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">{category.description}</p>

                  {/* Topics tags */}
                  <div className="space-y-3">
                    <p className="text-sm font-bold text-foreground/70 uppercase tracking-wide">Tópicos:</p>
                    <div className="flex flex-wrap gap-2">
                      {category.examples.map((example, i) => (
                        <span
                          key={i}
                          className="text-sm px-4 py-2 bg-primary/15 text-primary rounded-full border-2 border-primary/30 font-semibold hover:bg-primary/25 hover:border-primary/50 transition-all"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom highlight */}
        <div className="text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="inline-block relative group max-w-3xl">
            <div className="absolute -inset-1 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-gradient-nordeste backdrop-blur-xl p-8 md:p-10 rounded-3xl border-2 border-primary/40 shadow-hover">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
                <strong className="text-primary text-2xl">Vários conteúdos sendo disponibilizados!</strong>
                <br className="mb-2" />
                Cada workshop é uma branch diferente. Confira a lista completa no{" "}
                <a href="https://github.com/PHPcomRapadura/academy/blob/main/README.md" target="_blank">
                  README.md
                </a>{" "}
                do repositório principal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopExamples;
