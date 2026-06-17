import { Cpu, Terminal, Network } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Typography */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold leading-tight">
              Building Intelligent Systems & Data-Driven Solutions
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I am a Computer Science undergraduate specializing in Artificial Intelligence with a rock-solid foundation in Data Structures, full-stack pipelines, and statistical analysis.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My passion lies at the intersection of AI Engineering and Data Analytics—not just training complex models, but diving deep into raw data to extract patterns that solve real-world problems.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Whether I am engineering real-time computer vision pipelines, deploying autonomous reinforcement learning agents, or performing advanced statistical preprocessing and dimensionality reduction on massive datasets, I focus on building systems that are highly optimized, accurate, and scalable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="#"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Side: Feature Cards */}
          <div className="grid grid-cols-1 gap-6">
            {/* Card 1 */}
            <div className="p-6 bg-slate-900/50 backdrop-blur-md rounded-xl border border-slate-800 transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] flex gap-4">
              <div className="p-3 bg-purple-950/40 rounded-lg text-purple-400 h-fit">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">AI & Computer Vision</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Building real-time intelligent pipelines for object tracking, activity recognition, and multi-modal biometrics.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['YOLOv11', 'CNNs', 'Streamlit', 'CLAHE'].map((tech) => (
                    <span key={tech} className="text-xs font-mono px-2 py-1 bg-purple-950/30 text-purple-300 rounded border border-purple-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-slate-900/50 backdrop-blur-md rounded-xl border border-slate-800 transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] flex gap-4">
              <div className="p-3 bg-purple-950/40 rounded-lg text-purple-400 h-fit">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Full-Stack Development</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Engineering modular, scalable web platforms and process automation dashboards with secure architectures.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['MERN Stack', 'Node.js', 'Express.js', 'REST APIs'].map((tech) => (
                    <span key={tech} className="text-xs font-mono px-2 py-1 bg-purple-950/30 text-purple-300 rounded border border-purple-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-slate-900/50 backdrop-blur-md rounded-xl border border-slate-800 transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] flex gap-4">
              <div className="p-3 bg-purple-950/40 rounded-lg text-purple-400 h-fit">
                <Network className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Reinforcement Learning</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Designing autonomous, multi-intersection traffic control agents optimized to adapt to real-world anomalies.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'SUMO', 'Gymnasium', 'PettingZoo'].map((tech) => (
                    <span key={tech} className="text-xs font-mono px-2 py-1 bg-purple-950/30 text-purple-300 rounded border border-purple-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
