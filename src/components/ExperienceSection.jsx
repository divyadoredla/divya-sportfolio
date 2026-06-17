import { Briefcase, GraduationCap, Trophy } from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Experience & <span className="text-primary">Credentials</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Briefcase className="text-primary" /> Experience
            </h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-secondary before:to-transparent before:content-['']">
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-card text-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-4 rounded border border-secondary shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold">Data Valley</div>
                    <time className="font-caveat font-medium text-primary">Apr 2026 – June 2026</time>
                  </div>
                  <div className="text-sm font-medium mb-2">AI Automation & Agent Engineering Intern</div>
                  <p className="text-sm text-muted-foreground">Designed and deployed autonomous AI agents and intelligent workflow automation systems. Engineered multi-agent systems capable of executing complex, multi-turn reasoning. Integrated LLMs with external APIs and data tools to build resilient, self-correcting task automation loops.</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-card text-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-4 rounded border border-secondary shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold">Infosys Springboard</div>
                    <time className="font-caveat font-medium text-primary">Nov 2025 – Feb 2026</time>
                  </div>
                  <div className="text-sm font-medium mb-2">AI Engineering Intern</div>
                  <p className="text-sm text-muted-foreground">Achieved 90% detection accuracy on real-time surveillance datasets using YOLO and CNN models. Automated security alert generation, reducing manual monitoring workflows by 30%.</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-card text-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-4 rounded border border-secondary shadow">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold">AICTE – EY</div>
                    <time className="font-caveat font-medium text-primary">Feb 2025 – Apr 2025</time>
                  </div>
                  <div className="text-sm font-medium mb-2">Full-Stack Developer Intern</div>
                  <p className="text-sm text-muted-foreground">Collaborated within a three-member team to build a feature-rich recipe app using the MERN Stack, delivering a seamless, responsive, and interactive user experience.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <GraduationCap className="text-primary" /> Education
              </h3>
              <div className="bg-card p-6 rounded-lg shadow-xs border border-secondary mb-4">
                <h4 className="font-bold text-lg">B.Tech in Artificial Intelligence</h4>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-primary">Narasaraopeta Engineering College</p>
                  <span className="text-sm text-muted-foreground">2023–2027</span>
                </div>
                <p className="text-sm mt-2 text-muted-foreground font-semibold">CGPA: 8.7/10</p>
              </div>
              <h4 className="font-semibold text-lg mb-3">Certifications</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                <li>MERN Stack Internship — AICTE / EY</li>
                <li>Data Structures & Algorithms (Java) — Apna College</li>
                <li>Object-Oriented Programming in Java — Coding Ninjas</li>
                <li>Python Programming — NPTEL</li>
              </ul>
            </div>

            {/* Competitions */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Trophy className="text-primary" /> Competitions
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-xl">🏆</span>
                  <div>
                    <h4 className="font-semibold">2nd Place – 24-Hour Hackathon (Technova 2K26)</h4>
                    <p className="text-sm text-muted-foreground">Shri Vishnu Engineering College, Bhimavaram</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">🥇</span>
                  <div>
                    <h4 className="font-semibold">1st Place – Campus Coding Competition</h4>
                    <p className="text-sm text-muted-foreground">Narasaraopeta Engineering College</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">💻</span>
                  <div>
                    <h4 className="font-semibold">200+ DSA Problems Solved</h4>
                    <p className="text-sm text-muted-foreground">Across competitive programming platforms like LeetCode</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
