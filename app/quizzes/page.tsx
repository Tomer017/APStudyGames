'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import BaseLayout from '../../components/BaseLayout';

// Mock data for quizzes
const mockQuizzes = [
  {
    id: 'bio-cells',
    title: 'Cell Structure and Function',
    subject: 'AP Biology',
    icon: '🧬',
    questions: 15,
    timeEstimate: '12 min',
    difficulty: 'Medium',
    description: 'Test your knowledge of cell organelles, membrane transport, and cellular respiration.',
    color: 'from-green-500 to-teal-500',
  },
  {
    id: 'calc-derivatives',
    title: 'Derivatives and Applications',
    subject: 'AP Calculus',
    icon: '📊',
    questions: 10,
    timeEstimate: '15 min',
    difficulty: 'Hard',
    description: 'Practice finding derivatives and their applications to related rates and optimization problems.',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    id: 'hist-revolution',
    title: 'American Revolution',
    subject: 'AP US History',
    icon: '📜',
    questions: 20,
    timeEstimate: '18 min',
    difficulty: 'Medium',
    description: 'Review the causes, key events, and outcomes of the American Revolution.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 'phys-motion',
    title: 'Kinematics and Dynamics',
    subject: 'AP Physics',
    icon: '⚛️',
    questions: 12,
    timeEstimate: '20 min',
    difficulty: 'Hard',
    description: 'Solve problems related to motion, forces, and Newton\'s laws.',
    color: 'from-red-500 to-pink-500',
  },
  {
    id: 'chem-periodicity',
    title: 'Periodic Trends',
    subject: 'AP Chemistry',
    icon: '🧪',
    questions: 15,
    timeEstimate: '15 min',
    difficulty: 'Medium',
    description: 'Explore atomic radius, ionization energy, and electronegativity trends across the periodic table.',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    id: 'psych-brain',
    title: 'The Brain and Behavior',
    subject: 'AP Psychology',
    icon: '🧠',
    questions: 18,
    timeEstimate: '16 min',
    difficulty: 'Easy',
    description: 'Learn about brain structures, neural communication, and their effects on behavior.',
    color: 'from-teal-500 to-cyan-500',
  },
];

// Filter options
const subjects = ['All Subjects', 'AP Biology', 'AP Calculus', 'AP US History', 'AP Physics', 'AP Chemistry', 'AP Psychology'];
const difficulties = ['All Difficulties', 'Easy', 'Medium', 'Hard'];

export default function QuizzesPage() {
  const [selectedSubject, setSelectedSubject] = useState('All Subjects');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All Difficulties');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter quizzes based on selected filters and search query
  const filteredQuizzes = mockQuizzes.filter(quiz => {
    const matchesSubject = selectedSubject === 'All Subjects' || quiz.subject === selectedSubject;
    const matchesDifficulty = selectedDifficulty === 'All Difficulties' || quiz.difficulty === selectedDifficulty;
    const matchesSearch = quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          quiz.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSubject && matchesDifficulty && matchesSearch;
  });
  
  return (
    <BaseLayout>
      <div className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              AP <span className="gradient-text">Quizzes</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Test your knowledge with our interactive quizzes designed to help you prepare for your AP exams.
            </p>
          </div>
          
          {/* Filters */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="subject-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <select
                  id="subject-filter"
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="difficulty-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Difficulty
                </label>
                <select
                  id="difficulty-filter"
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {difficulties.map((difficulty) => (
                    <option key={difficulty} value={difficulty}>
                      {difficulty}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="search-quizzes" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Search
                </label>
                <input
                  type="text"
                  id="search-quizzes"
                  placeholder="Search quizzes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>
          
          {/* Quizzes Grid */}
          {filteredQuizzes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredQuizzes.map((quiz) => (
                <Link 
                  key={quiz.id} 
                  href={`/quizzes/${quiz.id}`}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden flex flex-col h-full border border-gray-100 dark:border-gray-700"
                >
                  <div className={`bg-gradient-to-r ${quiz.color} p-4 flex items-center`}>
                    <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-900 rounded-full mr-4 text-2xl">
                      {quiz.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{quiz.title}</h3>
                      <p className="text-sm text-white/80">{quiz.subject}</p>
                    </div>
                  </div>
                  <div className="p-5 flex-grow">
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {quiz.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300">
                        {quiz.questions} questions
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300">
                        {quiz.timeEstimate}
                      </span>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        quiz.difficulty === 'Easy' ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300' :
                        quiz.difficulty === 'Medium' ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-300' :
                        'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300'
                      }`}>
                        {quiz.difficulty}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                    <div className="flex items-center text-sm text-primary font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Start Quiz
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No quizzes found</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We couldn't find any quizzes matching your search criteria. Try adjusting your filters.
              </p>
              <button 
                onClick={() => {
                  setSelectedSubject('All Subjects');
                  setSelectedDifficulty('All Difficulties');
                  setSearchQuery('');
                }}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </BaseLayout>
  );
} 