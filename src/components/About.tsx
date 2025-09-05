import React from 'react';
import { GraduationCap, Code, Trophy } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const About: React.FC = () => {
  const achievements = [
    {
      icon: <GraduationCap size={24} />,
      title: "8.76/10 CGPA",
      description: "Excellent academic performance at VIT AP"
    },
    {
      icon: <Code size={24} />,
      title: "10+ Projects",
      description: "Full-stack, AI/ML, and Data Analytics projects"
    },
    {
      icon: <Trophy size={24} />,
      title: "Multiple Awards",
      description: "CODE BATTLE Winner & FUTURE TECH EXPO 1st Place"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">About Me</h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 p-1">
                <div className="w-full h-full rounded-2xl bg-gray-100 flex items-center justify-center">
                  <div className="w-72 h-72 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center text-white text-6xl font-bold">
                    RKT
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Building the Future Through Innovation
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a passionate Computer Science student at VIT AP University with a focus on 
                Full Stack Development, AI/ML, and Data Analytics. My journey in technology 
                started with a curiosity to solve real-world problems through innovative solutions, 
                and I've been fascinated by the intersection of technology and creativity ever since.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm a competitive programmer who thrives in challenging environments. I've won multiple 
                competitions including CODE BATTLE (1st place among 250 teams), FUTURE TECH EXPO (1st place), 
                and CODE STORM (3rd place). When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or mentoring fellow students.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {achievements.map((achievement, index) => (
                  <ScrollReveal key={index} delay={index * 200}>
                    <div className="text-center p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-300">
                      <div className="text-blue-600 mb-2 flex justify-center">
                        {achievement.icon}
                      </div>
                      <div className="font-semibold text-gray-800 mb-1">
                        {achievement.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {achievement.description}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};