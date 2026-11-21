import React, { useEffect, useState } from "react";
import { FaJs, FaNodeJs, FaPython, FaReact } from "react-icons/fa";

const skills = [
  { name: "React", percentage: 90, color: "#61DAFB", icon: FaReact },
  { name: "Node.js", percentage: 82, color: "#339933", icon: FaNodeJs },
  { name: "JavaScript", percentage: 92, color: "#F7DF1E", icon: FaJs },
  { name: "Python", percentage: 80, color: "#3776AB", icon: FaPython },
];

const Skills = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center py-20 px-4 sm:px-6 overflow-hidden relative"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-0 w-80 h-80 bg-red-500/5 rounded-full blur-xl" />
        <div className="absolute bottom-40 right-0 w-80 h-80 bg-red-500/10 rounded-full blur-xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              Expertise
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            My <span className="text-red-500 dark:text-red-400">Skills</span>
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I build with React, Node.js, JavaScript, and Python — from
            interactive interfaces to APIs and scripts.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {skills.map((skill) => {
            const radius = 60;
            const circumference = 2 * Math.PI * radius;
            const shown = visible ? skill.percentage : 0;
            const offset = circumference - (shown / 100) * circumference;
            const size = 150;
            const Icon = skill.icon;

            return (
              <div key={skill.name} className="flex flex-col items-center">
                <div className="relative" style={{ width: size, height: size }}>
                  <svg width={size} height={size} className="-rotate-90">
                    <circle
                      cx={size / 2}
                      cy={size / 2}
                      r={radius}
                      fill="none"
                      stroke="#e5e5e5"
                      strokeWidth="10"
                      className="dark:stroke-gray-700"
                    />
                    <circle
                      cx={size / 2}
                      cy={size / 2}
                      r={radius}
                      fill="none"
                      stroke={skill.color}
                      strokeWidth="10"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>

                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                    <Icon style={{ color: skill.color }} className="text-2xl" />
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      {shown}%
                    </span>
                  </div>
                </div>

                <h3 className="mt-4 text-base font-medium text-center text-gray-500 dark:text-gray-200">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
