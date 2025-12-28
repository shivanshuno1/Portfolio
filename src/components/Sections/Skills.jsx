// components/Sections/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ skill, level, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="font-semibold text-gray-800">{skill}</span>
        <span className="text-blue-600 font-bold">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const technicalSkills = [
    { skill: 'React/Next.js', level: 95 },
    { skill: 'TypeScript', level: 90 },
    { skill: 'Node.js', level: 85 },
    { skill: 'UI/UX Design', level: 80 },
    { skill: 'MongoDB', level: 75 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            I've worked with a wide range of technologies in the web development world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
            {technicalSkills.map((skill, index) => (
              <SkillBar key={skill.skill} {...skill} index={index} />
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8">Soft Skills</h3>
            <div className="space-y-4">
              {['Problem Solving', 'Communication', 'Team Leadership', 'Project Management', 'Agile Methodology'].map((skill) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">✓</span>
                    </div>
                    <span className="font-semibold text-gray-800">{skill}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;