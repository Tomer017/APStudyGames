import React from 'react';
import Link from 'next/link';
import BaseLayout from '../../components/BaseLayout';

const subjectsData = [
  { name: 'AP Biology', color: 'from-green-500 to-teal-500', icon: '🧬', description: 'Study cell biology, genetics, evolution, and ecology with interactive quizzes and flashcards.' },
  { name: 'AP Calculus AB', color: 'from-blue-500 to-indigo-500', icon: '📊', description: 'Master limits, derivatives, integrals, and their applications through practice problems and visualizations.' },
  { name: 'AP Calculus BC', color: 'from-blue-400 to-indigo-400', icon: '📈', description: 'Advanced calculus concepts including series, parametric equations, and polar coordinates.' },
  { name: 'AP US History', color: 'from-amber-500 to-orange-500', icon: '📜', description: 'Explore American history from pre-colonial times to the present with timeline activities and source analysis.' },
  { name: 'AP World History', color: 'from-amber-600 to-orange-600', icon: '🌍', description: 'Learn about major civilizations, cultural interactions, and global developments throughout history.' },
  { name: 'AP Physics 1', color: 'from-red-500 to-pink-500', icon: '⚛️', description: 'Study mechanics, energy, waves, and electrical circuits with interactive simulations.' },
  { name: 'AP Physics 2', color: 'from-red-600 to-pink-600', icon: '🔭', description: 'Advanced physics concepts including fluids, thermodynamics, electricity, and nuclear physics.' },
  { name: 'AP English Literature', color: 'from-purple-500 to-violet-500', icon: '📚', description: 'Analyze literary texts, poetry, and drama while practicing essay writing techniques.' },
  { name: 'AP English Language', color: 'from-purple-600 to-violet-600', icon: '✏️', description: 'Develop rhetorical analysis skills and persuasive writing techniques.' },
  { name: 'AP Chemistry', color: 'from-yellow-500 to-amber-500', icon: '🧪', description: 'Explore atomic structure, chemical reactions, thermochemistry, and lab procedures.' },
  { name: 'AP Psychology', color: 'from-teal-500 to-cyan-500', icon: '🧠', description: 'Study behavior and mental processes, from neurons to social psychology concepts.' },
  { name: 'AP Computer Science A', color: 'from-blue-500 to-cyan-500', icon: '💻', description: 'Learn Java programming fundamentals, algorithms, and object-oriented design principles.' },
  { name: 'AP Computer Science Principles', color: 'from-blue-600 to-cyan-600', icon: '🖥️', description: 'Explore computing concepts, programming, and the impact of technology on society.' },
  { name: 'AP Statistics', color: 'from-green-400 to-emerald-500', icon: '📊', description: 'Master data analysis, experimental design, probability, and statistical inference.' },
  { name: 'AP Environmental Science', color: 'from-green-600 to-teal-600', icon: '🌱', description: 'Study ecosystems, biodiversity, resource management, and environmental policy.' },
  { name: 'AP Economics', color: 'from-amber-400 to-yellow-500', icon: '💰', description: 'Understand microeconomics, macroeconomics, and global economic systems.' },
];

export default function SubjectsPage() {
  return (
    <BaseLayout>
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              AP <span className="gradient-text">Subjects</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose a subject to start studying with interactive quizzes, flashcards, and practice exams designed to help you succeed on your AP tests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjectsData.map((subject, index) => (
              <Link 
                key={index} 
                href={`/subjects/${subject.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden flex flex-col h-full border border-gray-100 dark:border-gray-700`}
              >
                <div className={`bg-gradient-to-r ${subject.color} p-4 flex items-center`}>
                  <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-900 rounded-full mr-4 text-2xl">
                    {subject.icon}
                  </div>
                  <h2 className="text-xl font-bold text-white">{subject.name}</h2>
                </div>
                <div className="p-5 flex-grow">
                  <p className="text-gray-600 dark:text-gray-300">
                    {subject.description}
                  </p>
                </div>
                <div className="p-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                  <div className="flex items-center text-sm text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Start Studying
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
} 