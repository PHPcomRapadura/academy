import { Github, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Rapadura Academy
            </h3>
            <p className="text-muted-foreground">
              Uma iniciativa da comunidade PHP com Rapadura
            </p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/phpcomrapadura/academy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-soft hover:shadow-hover"
            >
              <Github className="w-5 h-5" />
              <span className="font-medium">GitHub</span>
            </a>
            
            <a 
              href="https://phpcomrapadura.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-soft hover:shadow-hover"
            >
              <Globe className="w-5 h-5" />
              <span className="font-medium">Website</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>Feito com ❤️ pela comunidade PHP com Rapadura</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
