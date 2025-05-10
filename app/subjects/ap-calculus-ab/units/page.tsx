'use client';

import { useState } from 'react';
import Link from 'next/link';
import BaseLayout from '../../../../components/BaseLayout';

// Unit data
const unitsData = [
  {
    unit: 1,
    title: 'Limits and Continuity',
    topics: [
      'Finding limits graphically and numerically',
      'Evaluating limits analytically',
      'Continuity and discontinuities',
      'Infinite limits and asymptotic behavior',
      'Defining the derivative'
    ],
    icon: '📈',
    color: 'from-blue-500 to-indigo-500',
    description: 'Explore the foundational concepts of calculus, including limits and continuity, which are essential for understanding derivatives and integrals.',
    quizLink: '/quizzes/calculus-ab-unit1',
    resourceLink: '/subjects/ap-calculus-ab/resources#unit1'
  },
  {
    unit: 2,
    title: 'Differentiation: Definition and Fundamental Properties',
    topics: [
      'Defining the derivative',
      'Differentiability',
      'Rules for differentiation',
      'Rates of change',
      'Higher order derivatives'
    ],
    icon: '📊',
    color: 'from-blue-600 to-indigo-600',
    description: 'Learn the definition of the derivative and basic differentiation rules, including the power rule, product rule, and quotient rule.',
    quizLink: '/quizzes/calculus-ab-unit2',
    resourceLink: '/subjects/ap-calculus-ab/resources#unit2'
  },
  {
    unit: 3,
    title: 'Differentiation: Composite, Implicit, and Inverse Functions',
    topics: [
      'Chain rule',
      'Implicit differentiation',
      'Derivatives of inverse functions',
      'Derivatives of logarithmic and exponential functions',
      'Logarithmic differentiation'
    ],
    icon: '🔄',
    color: 'from-blue-500 to-indigo-500',
    description: 'Master advanced differentiation techniques, including the chain rule, implicit differentiation, and derivatives of transcendental functions.',
    quizLink: '/quizzes/calculus-ab-unit3',
    resourceLink: '/subjects/ap-calculus-ab/resources#unit3'
  },
  {
    unit: 4,
    title: 'Contextual Applications of Differentiation',
    topics: [
      'Related rates',
      'Linearization and differentials',
      'Mean Value Theorem',
      'L\'Hôpital\'s rule',
      'Using derivatives to analyze functions'
    ],
    icon: '🚀',
    color: 'from-blue-600 to-indigo-600',
    description: 'Apply derivatives to solve real-world problems involving rates of change, approximation, and optimization.',
    quizLink: '/quizzes/calculus-ab-unit4',
    resourceLink: '/subjects/ap-calculus-ab/resources#unit4'
  },
  {
    unit: 5,
    title: 'Analytical Applications of Differentiation',
    topics: [
      'Extreme value theorem',
      'Critical points and extrema',
      'Monotonicity and concavity',
      'Optimization problems',
      'Curve sketching'
    ],
    icon: '📐',
    color: 'from-blue-500 to-indigo-500',
    description: 'Use derivatives to analyze functions, find extreme values, and sketch graphs with precision.',
    quizLink: '/quizzes/calculus-ab-unit5',
    resourceLink: '/subjects/ap-calculus-ab/resources#unit5'
  },
  {
    unit: 6,
    title: 'Integration and Accumulation of Change',
    topics: [
      'Riemann sums',
      'Definite integrals',
      'Fundamental Theorem of Calculus',
      'Antiderivatives and indefinite integrals',
      'Properties of integrals'
    ],
    icon: '∫',
    color: 'from-blue-600 to-indigo-600',
    description: 'Understand integration as the accumulation of change and learn to compute definite and indefinite integrals.',
    quizLink: '/quizzes/calculus-ab-unit6',
    resourceLink: '/subjects/ap-calculus-ab/resources#unit6'
  },
  {
    unit: 7,
    title: 'Differential Equations',
    topics: [
      'Modeling with differential equations',
      'Verifying solutions to differential equations',
      'Slope fields',
      'Exponential models',
      'Separation of variables'
    ],
    icon: '📝',
    color: 'from-blue-500 to-indigo-500',
    description: 'Solve and interpret differential equations, including separation of variables and slope fields.',
    quizLink: '/quizzes/calculus-ab-unit7',
    resourceLink: '/subjects/ap-calculus-ab/resources#unit7'
  },
  {
    unit: 8,
    title: 'Applications of Integration',
    topics: [
      'Area between curves',
      'Volumes of revolution',
      'Arc length',
      'Work and energy',
      'Average value of a function'
    ],
    icon: '🔍',
    color: 'from-blue-600 to-indigo-600',
    description: 'Apply integration to calculate areas, volumes, and other physical quantities.',
    quizLink: '/quizzes/calculus-ab-unit8',
    resourceLink: '/subjects/ap-calculus-ab/resources#unit8'
  }
];

export default function CalcUnitsPage() {
  const [activeUnit, setActiveUnit] = useState<number | null>(null);
  
  const toggleUnit = (unitNumber: number) => {
    if (activeUnit === unitNumber) {
      setActiveUnit(null);
    } else {
      setActiveUnit(unitNumber);
    }
  };
  
  return (
    <BaseLayout>
      <div className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl p-8 mb-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">AP Calculus AB Units</h1>
                <p className="text-blue-100">
                  Complete curriculum breakdown with study materials for each unit
                </p>
              </div>
              <Link
                href="/subjects/ap-calculus-ab/practice-exam"
                className="mt-4 md:mt-0 px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                Take Practice Exam
              </Link>
            </div>
          </div>

          {/* Course Progress */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
              <h2 className="text-xl font-bold mb-2 sm:mb-0">Your Course Progress</h2>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                <span className="text-blue-600 dark:text-blue-500">2 of 8</span> units completed
              </div>
            </div>
            
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: "25%" }}
              ></div>
            </div>
            
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Continue your studies with Unit 3: Differentiation of Composite and Inverse Functions
            </div>
          </div>

          {/* Units List */}
          <div className="space-y-6 mb-8">
            {unitsData.map((unit) => (
              <div key={unit.unit} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <div 
                  className={`bg-gradient-to-r ${unit.color} p-5 flex items-center justify-between cursor-pointer`}
                  onClick={() => toggleUnit(unit.unit)}
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-900 rounded-full mr-4 text-2xl">
                      {unit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Unit {unit.unit}: {unit.title}</h3>
                    </div>
                  </div>
                  <div className="text-white">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-6 w-6 transition-transform ${activeUnit === unit.unit ? 'transform rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                {/* Expanded Unit Content */}
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeUnit === unit.unit 
                    ? 'max-h-[1000px] opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-6">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {unit.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Key Topics</h4>
                      <ul className="space-y-2">
                        {unit.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-700 dark:text-gray-300">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                      <Link
                        href={unit.quizLink}
                        className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        Practice Quiz
                      </Link>
                      <Link
                        href={unit.resourceLink}
                        className="flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        Study Materials
                      </Link>
                      <Link
                        href={`/flashcards/calculus-ab-unit${unit.unit}`}
                        className="flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        Flashcards
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Resources */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link 
                href="/flashcards/calculus-ab-formulas"
                className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mr-4">
                  🗂️
                </div>
                <div>
                  <h3 className="font-medium">Formula Flashcards</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Master all essential calculus formulas</p>
                </div>
              </Link>
              
              <Link 
                href="/subjects/ap-calculus-ab/practice-exam"
                className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg flex items-center justify-center mr-4">
                  📝
                </div>
                <div>
                  <h3 className="font-medium">Practice Exam</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Full-length AP Calculus AB exam simulation</p>
                </div>
              </Link>
              
              <Link 
                href="/subjects/ap-calculus-ab/study-guide"
                className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg flex items-center justify-center mr-4">
                  📚
                </div>
                <div>
                  <h3 className="font-medium">Comprehensive Study Guide</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Complete review of all topics and concepts</p>
                </div>
              </Link>
              
              <Link 
                href="/subjects/ap-calculus-ab/tips"
                className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-lg flex items-center justify-center mr-4">
                  💡
                </div>
                <div>
                  <h3 className="font-medium">Exam Tips & Strategies</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">How to tackle multiple-choice and free-response</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-8 text-center">
            <Link
              href="/subjects/ap-calculus-ab"
              className="text-blue-600 dark:text-blue-500 hover:underline flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to AP Calculus AB Overview
            </Link>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
} 