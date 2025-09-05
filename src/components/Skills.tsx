import React, { useEffect, useRef, useState } from 'react';
import { ScrollReveal } from './ScrollReveal';

interface Skill {
  name: string;
  level: number;
  color: string;
}

export const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90, color: "bg-blue-500" },
        { name: "TypeScript", level: 85, color: "bg-indigo-500" },
        { name: "Tailwind CSS", level: 95, color: "bg-cyan-500" },
        { name: "JavaScript", level: 90, color: "bg-yellow-500" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 80, color: "bg-green-500" },
        { name: "Python", level: 85, color: "bg-blue-600" },
        { name: "MongoDB", level: 75, color: "bg-green-600" },
        { name: "PostgreSQL", level: 70, color: "bg-blue-700" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 90, color: "bg-orange-500" },
        { name: "Docker", level: 70, color: "bg-blue-400" },
        { name: "AWS", level: 65, color: "bg-orange-400" },
        { name: "Linux", level: 80, color: "bg-gray-600" }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const SkillBar: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
    return (
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span className="text-gray-700 font-medium">{skill.name}</span>
          <span className="text-gray-500 text-sm">{skill.level}%</span>
        </div>
        <div className="bg-gray-200 rounded-full h-2">
          <div
            className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
            style={{
              width: isVisible ? `${skill.level}%` : '0%',
              transitionDelay: `${index * 100}ms`
            }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Skills & Technologies</h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal key={categoryIndex} delay={categoryIndex * 200}>
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                  {category.title}
                </h3>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex} 
                    skill={skill} 
                    index={categoryIndex * 4 + skillIndex} 
                  />
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};