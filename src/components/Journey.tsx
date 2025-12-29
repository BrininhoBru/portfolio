export default function Journey() {
  const milestones = [
    {
      year: 'Beginning',
      title: 'Started My Coding Journey',
      description: 'Discovered my passion for programming and decided to pursue it professionally.',
      icon: '🌱',
    },
    {
      year: 'Growth',
      title: 'Expanded My Skills',
      description: 'Learned multiple programming languages and frameworks, building various projects.',
      icon: '🌿',
    },
    {
      year: 'Experience',
      title: 'Real-World Projects',
      description: 'Applied my knowledge to real-world applications and collaborative projects.',
      icon: '🌳',
    },
    {
      year: 'Today',
      title: 'Continuous Evolution',
      description: 'Still learning, still growing, and excited about what is next.',
      icon: '🚀',
    },
  ];

  return (
    <section id="journey" className="py-20 px-6 bg-gradient-to-b from-forest-900 to-forest-800">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-mint-400 to-sage-400">
          My Journey
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-mint-500 via-sage-500 to-mint-500 hidden md:block"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-forest-800/70 backdrop-blur-sm p-6 rounded-lg border border-sage-700/30 hover:border-mint-500/50 transition-all hover:transform hover:scale-105">
                    <div className="text-mint-400 text-sm font-semibold mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold text-sage-100 mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-sage-300">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-mint-500 to-sage-500 flex items-center justify-center text-3xl shadow-lg">
                    {milestone.icon}
                  </div>
                </div>
                
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
