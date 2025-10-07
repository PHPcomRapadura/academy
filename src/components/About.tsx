import { Users, Heart, Lightbulb, Zap } from "lucide-react";

const About = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient background with pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-muted/50"></div>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gradient-sunset px-6 py-2 rounded-full mb-6 shadow-glow">
              <Zap className="w-5 h-5 text-white" />
              <span className="text-sm font-bold text-white">Nossa Comunidade</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Sobre o <span className="bg-gradient-nordeste bg-clip-text text-transparent">PHP com Rapadura</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Somos uma comunidade que celebra a troca de conhecimento e o crescimento coletivo 🌵
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16 animate-slide-in">
            <div className="group relative text-center p-8 bg-card/80 backdrop-blur-sm rounded-3xl shadow-soft border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all group-hover:scale-110">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">Comunidade</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Participantes de todo o Brasil unidos pela paixão por tecnologia e nordestinidade
                </p>
              </div>
            </div>
            
            <div className="group relative text-center p-8 bg-card/80 backdrop-blur-sm rounded-3xl shadow-soft border-2 border-border hover:border-accent/50 transition-all duration-300 hover:shadow-glow hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all group-hover:scale-110">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">Colaboração</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Eventos e workshops que promovem o aprendizado coletivo e gratuito
                </p>
              </div>
            </div>
            
            <div className="group relative text-center p-8 bg-card/80 backdrop-blur-sm rounded-3xl shadow-soft border-2 border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-glow hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all group-hover:scale-110">
                  <Lightbulb className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-secondary transition-colors">Inovação</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Explorando novas ideias e tecnologias em conjunto, do tradicional ao moderno
                </p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-xl opacity-20"></div>
            <div className="relative bg-card/90 backdrop-blur-sm p-10 md:p-12 rounded-3xl shadow-glow border-2 border-primary/30">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-sunset bg-clip-text text-transparent">
                Rapadura Conference 🎉
              </h3>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                O <strong className="text-primary">Rapadura Conference</strong> é nosso evento presencial que reúne desenvolvedores, designers, e entusiastas de tecnologia para celebrar a troca de experiências e o networking.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                O Rapadura Academy surge como uma extensão desse espírito, levando conteúdo de qualidade para quem não pode estar presente fisicamente, mas quer fazer parte dessa comunidade incrível! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
