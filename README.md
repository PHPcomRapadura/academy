# 🌵 Rapadura Academy

<div align="center">

![Rapadura Academy](https://img.shields.io/badge/PHP%20com%20Rapadura-Academy-orange?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Ativo-success?style=for-the-badge)

**Aprenda, contribua e cresça junto com a gente!**

Uma iniciativa da [PHP com Rapadura](https://phpcomrapadura.org) para compartilhar conhecimento através de workshops online.

[🌐 Visite o Site](https://academy.phpcomrapadura.org) | [💬 Comunidade](https://phpcomrapadura.org) | [🐙 GitHub](https://github.com/PHPcomRapadura)

</div>

---

## 📚 Sobre o Projeto

O **Rapadura Academy** é uma iniciativa da comunidade PHP com Rapadura de trazer workshops online. Nosso objetivo é democratizar o conhecimento técnico através de workshops práticos e interativos, cobrindo uma ampla variedade de temas para todos os níveis.

### 🎯 O que torna o Rapadura Academy especial?

- **Inscrição via Pull Request**: Uma forma única de combinar aprendizado com prática em Git e GitHub
- **Workshops Práticos**: Conteúdo hands-on com instrutores experientes
- **Comunidade Ativa**: Aprenda e interaja com outros desenvolvedores
- **100% Gratuito**: Conhecimento acessível para todos

---

## 🚀 Como Funciona

### 1️⃣ Escolha seu Workshop

Navegue pela lista de workshops disponíveis abaixo. Cada workshop possui sua própria **branch** com todas as informações detalhadas.

### 2️⃣ Encontre a Branch do Workshop

Acesse a branch específica do workshop que te interessa. Lá você encontrará:
- 📅 Data e horário
- 👨‍🏫 Informações do instrutor
- 📝 Conteúdo programático
- 🎯 Pré-requisitos
- 🔗 Link para a sala online

### 3️⃣ Faça seu Pull Request

Para se inscrever:
1. Navegue até a branch do workshop desejado
2. Edite o arquivo de participantes (geralmente `PARTICIPANTES.md`)
3. Adicione seu nome e informações de contato
4. Abra um Pull Request para essa branch

**Essa é sua inscrição! Simples assim, do jeito que a gente ama: código primeiro!** 💻

### 4️⃣ Confirmação

Após a revisão do seu PR, você receberá:
- ✅ Confirmação da inscrição
- 📧 Informações para participar do workshop
- 🎁 Material complementar (quando disponível)

---

## 🎓 Workshops Disponíveis

### 💻 PHP
*Do básico ao avançado, explorando recursos modernos do PHP*

**Tópicos incluem:**
- PHP 8.x features (Match Expressions, Named Arguments, Attributes)
- Design Patterns em PHP
- APIs RESTful e GraphQL
- Performance e otimização

### 🎨 Frontend
*Frameworks modernos e técnicas de desenvolvimento web*

**Tópicos incluem:**
- React & Vue.js
- Tailwind CSS e estilização moderna
- Animações e interações
- Performance no frontend

### 🔧 Infraestrutura
*DevOps, containers, e arquitetura de sistemas*

**Tópicos incluem:**
- Docker e containerização
- CI/CD pipelines
- Cloud Services (AWS, GCP, Azure)
- Kubernetes básico

### 🚀 Frameworks
*Hyperf, Laravel, Symfony e outros frameworks populares*

**Tópicos incluem:**
- Hyperf para aplicações de alta performance
- Laravel: features avançadas
- Symfony components
- Microframeworks (Slim, Lumen)

### ✍️ Produção de Conteúdo
*Aprenda a criar e compartilhar conhecimento técnico*

**Tópicos incluem:**
- Como preparar palestras técnicas
- Documentação efetiva
- Escrita de blogs técnicos
- Criação de tutoriais e screencasts

### 🤖 Tecnologias Emergentes
*IA, Machine Learning e tendências do mercado*

**Tópicos incluem:**
- Integração de AI em aplicações PHP
- Microservices architecture
- WebAssembly
- Event-driven architectures

---

## 📋 Lista de Workshops

> **Nota**: Cada workshop possui sua própria branch. Para ver os workshops ativos, navegue pelas branches deste repositório ou visite nosso [site oficial](https://academy.phpcomrapadura.org).

```bash
# Listar todas as branches de workshops disponíveis
git branch -r | grep workshop/
```

**Convenção de nomenclatura das branches:**
- `workshop/[categoria]/[nome-do-workshop]`
- Exemplo: `workshop/php/php-8-features`

---

## 🛠️ Tecnologias Utilizadas

Este projeto (site) é construído com:

- **Vite** - Build tool e dev server ultra-rápido
- **TypeScript** - Tipagem estática para JavaScript
- **React** - Biblioteca para interfaces de usuário
- **shadcn-ui** - Componentes de UI acessíveis e customizáveis
- **Tailwind CSS** - Framework CSS utility-first

---

## 💻 Desenvolvimento Local

Se você deseja contribuir com o site ou rodá-lo localmente:

### Pré-requisitos

- Node.js (v18 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/PHPcomRapadura/academy.git

# Entre no diretório
cd academy

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:5173`

### Comandos Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Cria build de produção
npm run preview  # Preview do build de produção
npm run lint     # Executa o linter
```

---

## 🤝 Como Contribuir

Adoramos contribuições! Você pode contribuir de várias formas:

### Contribuindo com o Site

1. Fork este repositório
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

### Ministrando um Workshop

Interessado em ministrar um workshop? Ótimo! 

1. Entre em contato com a comunidade através do [site oficial](https://phpcomrapadura.org)
2. Proponha seu tema e conteúdo
3. Após aprovação, criaremos uma branch para seu workshop
4. Você receberá suporte para organizar e divulgar

### Sugestões e Feedback

- Abra uma [Issue](https://github.com/PHPcomRapadura/academy/issues) com sugestões
- Participe das discussões na comunidade
- Compartilhe o projeto com outros desenvolvedores

---

## 📞 Contato e Comunidade

- **Site Oficial**: [phpcomrapadura.org](https://phpcomrapadura.org)
- **GitHub**: [github.com/PHPcomRapadura](https://github.com/PHPcomRapadura)
- **Discord**: [Entre em nosso servidor](https://discord.gg/phpcomrapadura)
- **Twitter/X**: [@phpcomrapadura](https://twitter.com/phpcomrapadura)

---

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🌟 Apoie o Projeto

Se você gostou do Rapadura Academy:
- ⭐ Dê uma estrela neste repositório
- 🔄 Compartilhe com outros desenvolvedores
- 💬 Participe da comunidade
- 🎤 Ministre um workshop

---

<div align="center">

**Feito com ❤️ pela comunidade PHP com Rapadura**

*Tudo na faixa para a comunidade* 🌵

</div>
