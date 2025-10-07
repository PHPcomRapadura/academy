import { Users, Heart, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Comunidade",
    description: "Somos uma comunidade de pessoas apaixonadas por tecnologia, reunindo desenvolvedores de todos os níveis."
  },
  {
    icon: Lightbulb,
    title: "Conhecimento",
    description: "Promovemos a troca de conhecimento através de eventos, workshops e encontros, celebrando o aprendizado coletivo."
  },
  {
    icon: Heart,
    title: "Colaboração",
    description: "Acreditamos no poder da colaboração e no crescimento através do compartilhamento de experiências."
  }
];

const About = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Sobre o <span className="bg-gradient-primary bg-clip-text text-transparent">PHP com Rapadura</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Uma comunidade vibrante de entusiastas de tecnologia, dedicada a promover 
            o crescimento profissional e pessoal através do conhecimento compartilhado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center space-y-4 p-6 rounded-2xl hover:bg-card transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="inline-flex p-4 rounded-2xl bg-gradient-primary">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-card p-8 md:p-12 rounded-2xl shadow-soft border border-border animate-fade-in">
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <h3 className="text-3xl font-bold text-foreground">
              Rapadura Conference
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Além do Academy, organizamos a <strong>Rapadura Conference</strong> (ou Encontro de Devs), 
              um evento que reúne pessoas apaixonadas por tecnologia para celebrar a troca de conhecimentos. 
              É um momento especial de aprendizado, networking e fortalecimento da nossa comunidade.
            </p>
            <a 
              href="https://phpcomrapadura.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-primary hover:text-accent font-semibold text-lg transition-colors duration-300 underline underline-offset-4 decoration-2"
            >
              Conheça mais sobre a PHP com Rapadura →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
