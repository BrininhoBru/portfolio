export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-forest-900">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-mint-400 to-sage-400">
          Sobre mim
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6 text-sage-200">
            <p className="text-lg leading-relaxed">
              Sou Desenvolvedor Full-Stack com mais de 5 anos de experiência atuando no desenvolvimento e na evolução de aplicações web.
              Tenho vivência em projetos complexos, desde sistemas internos e ERPs até produtos voltados ao usuário final, sempre com foco em qualidade técnica, escalabilidade e clareza de código.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-forest-800/50 backdrop-blur-sm p-6 rounded-lg border border-sage-700/30 hover:border-mint-500/50 transition-all">
              <h3 className="text-xl font-semibold text-mint-400 mb-3">
                🧩 Resolução de Problemas
              </h3>
              <p className="text-sage-300">
                Grande parte do meu trabalho envolve entender problemas reais de negócio e transformá-los em soluções técnicas eficientes.
                Tenho experiência lidando com código legado, definindo arquitetura, reduzindo complexidade e tomando decisões pensando no longo prazo.
              </p>
            </div>

            <div className="bg-forest-800/50 backdrop-blur-sm p-6 rounded-lg border border-sage-700/30 hover:border-mint-500/50 transition-all">
              <h3 className="text-xl font-semibold text-mint-400 mb-3">
                📚 Aprendizado Contínuo
              </h3>
              <p className="text-sage-300">
                Trabalho no dia a dia com Angular, React, Next.js, Java, Node.js e TypeScript, integrando APIs REST e bancos como PostgreSQL e MongoDB.
                Estou sempre buscando evoluir em arquitetura de software, boas práticas e padrões modernos, aplicando aprendizado direto em projetos reais.
              </p>
            </div>

            <div className="bg-forest-800/50 backdrop-blur-sm p-6 rounded-lg border border-sage-700/30 hover:border-mint-500/50 transition-all">
              <h3 className="text-xl font-semibold text-mint-400 mb-3">
                🎯 Visão Técnica e Produto
              </h3>
              <p className="text-sage-300">
                Acredito que um bom sistema precisa ser sólido tecnicamente e fácil de usar.
                Já atuei próximo a times de UX/UI e Design Systems, garantindo consistência visual e decisões técnicas alinhadas à experiência do usuário e às necessidades do produto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
