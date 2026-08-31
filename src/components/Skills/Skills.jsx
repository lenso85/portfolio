import React from 'react'

const Skills = () => {
  const skills = [
    { name: 'React JS', percentage: 90, color: '#61DAFB' },
    { name: 'Tailwind CSS', percentage: 98, color: '#06B6D4' },
    { name: 'Vue JS', percentage: 80, color: '#4FC08D' },
    { name: 'JavaScript', percentage: 95, color: '#F7DF1E' },
  ]

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center py-20 px-4 sm:px-6 overflow-hidden relative"
    >
      {/* Background Blur Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-0 w-80 h-80 bg-red-500/5 rounded-full blur-xl" />
        <div className="absolute bottom-40 right-0 w-80 h-80 bg-red-500/10 rounded-full blur-xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />

            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              Expertise
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            My{' '}
            <span className="text-red-500 dark:text-red-400">
              Skills
            </span>
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I specialize in modern web development technologies and
            create responsive, interactive, and user-friendly applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {skills.map((skill, index) => {
            const radius = 60
            const circumference = 2 * Math.PI * radius

            const offset =
              circumference -
              (skill.percentage / 100) * circumference

            const size = 150

            return (
              <div
                key={skill.name}
                className="flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Circular Progress */}
                <div
                  className="relative"
                  style={{
                    width: size,
                    height: size,
                  }}
                >
                  <svg
                    width={size}
                    height={size}
                    className="-rotate-90"
                  >
                    {/* Background Circle */}
                    <circle
                      cx={size / 2}
                      cy={size / 2}
                      r={radius}
                      fill="none"
                      stroke="#e5e5e5"
                      strokeWidth="10"
                      className="dark:stroke-gray-700"
                    />

                    {/* Progress Circle */}
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

                  {/* Percentage */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      {skill.percentage}%
                    </span>
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className="mt-4 text-base font-medium text-center text-gray-500 dark:text-gray-200">
                  {skill.name}
                </h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills