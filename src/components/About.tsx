export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-forest-900">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-mint-400 to-sage-400">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6 text-sage-200">
            <p className="text-lg leading-relaxed">
              I'm a passionate developer who loves turning ideas into reality through code. 
              My journey in tech has been driven by curiosity and a constant desire to learn and grow.
            </p>
            <p className="text-lg leading-relaxed">
              I believe in writing clean, maintainable code and creating user experiences 
              that make a difference. Every project is an opportunity to push boundaries 
              and deliver something exceptional.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-forest-800/50 backdrop-blur-sm p-6 rounded-lg border border-sage-700/30 hover:border-mint-500/50 transition-all">
              <h3 className="text-xl font-semibold text-mint-400 mb-3">
                🚀 Problem Solver
              </h3>
              <p className="text-sage-300">
                I thrive on tackling complex challenges and finding elegant solutions.
              </p>
            </div>
            
            <div className="bg-forest-800/50 backdrop-blur-sm p-6 rounded-lg border border-sage-700/30 hover:border-mint-500/50 transition-all">
              <h3 className="text-xl font-semibold text-mint-400 mb-3">
                💡 Continuous Learner
              </h3>
              <p className="text-sage-300">
                Technology evolves rapidly, and I'm committed to staying ahead of the curve.
              </p>
            </div>
            
            <div className="bg-forest-800/50 backdrop-blur-sm p-6 rounded-lg border border-sage-700/30 hover:border-mint-500/50 transition-all">
              <h3 className="text-xl font-semibold text-mint-400 mb-3">
                🎨 Creative Thinker
              </h3>
              <p className="text-sage-300">
                I blend technical expertise with creative thinking to build unique solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
