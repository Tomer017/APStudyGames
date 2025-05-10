'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import BaseLayout from '../../../components/BaseLayout';

// Units/Topics for AP Calculus AB
const calcTopics = [
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
    color: 'from-blue-500 to-indigo-500'
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
    color: 'from-blue-600 to-indigo-600'
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
    color: 'from-blue-500 to-indigo-500'
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
    color: 'from-blue-600 to-indigo-600'
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
    color: 'from-blue-500 to-indigo-500'
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
    color: 'from-blue-600 to-indigo-600'
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
    color: 'from-blue-500 to-indigo-500'
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
    color: 'from-blue-600 to-indigo-600'
  }
];

// Study resources
const resources = [
  {
    title: 'Interactive Quizzes',
    description: 'Test your knowledge with topic-specific quizzes designed to challenge your understanding',
    icon: '❓',
    link: '/quizzes',
    color: 'bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300'
  },
  {
    title: 'Flashcard Decks',
    description: 'Master key concepts, formulas, and definitions with our comprehensive flashcard decks',
    icon: '🗂️',
    link: '/flashcards',
    color: 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300'
  },
  {
    title: 'Practice Tests',
    description: 'Simulate the AP exam experience with full-length practice tests and timed sections',
    icon: '📝',
    link: '/practice-tests',
    color: 'bg-amber-100 dark:bg-amber-900/20 text-amber-800 dark:text-amber-300'
  },
  {
    title: 'Video Lessons',
    description: 'Learn complex concepts with our detailed video explanations and step-by-step solutions',
    icon: '🎬',
    link: '/videos',
    color: 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300'
  }
];

export default function APCalculusABPage() {
  const [activeTab, setActiveTab] = useState('topics');
  
  return (
    <BaseLayout>
      <div className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl p-8 mb-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full mr-6 text-5xl text-blue-500">
                  📊
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">AP Calculus AB</h1>
                  <p className="text-blue-100">Master calculus concepts for the AP exam</p>
                </div>
              </div>
              <Link
                href="/quizzes?subject=AP+Calculus+AB"
                className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                Start Practice Quiz
              </Link>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-gray-200 dark:border-gray-700 mb-8">
            <button
              onClick={() => setActiveTab('topics')}
              className={`px-4 py-2 font-medium text-sm ${
                activeTab === 'topics'
                  ? 'text-blue-600 dark:text-blue-500 border-b-2 border-blue-600 dark:border-blue-500'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              Course Topics
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`px-4 py-2 font-medium text-sm ${
                activeTab === 'resources'
                  ? 'text-blue-600 dark:text-blue-500 border-b-2 border-blue-600 dark:border-blue-500'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              Study Resources
            </button>
            <button
              onClick={() => setActiveTab('formulas')}
              className={`px-4 py-2 font-medium text-sm ${
                activeTab === 'formulas'
                  ? 'text-blue-600 dark:text-blue-500 border-b-2 border-blue-600 dark:border-blue-500'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              Key Formulas
            </button>
          </div>
          
          {/* Topics Tab Content */}
          {activeTab === 'topics' && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">AP Calculus AB Course Units</h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Explore all the major topics covered in the AP Calculus AB curriculum, organized by unit.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {calcTopics.map((unit) => (
                  <div key={unit.unit} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                    <div className={`bg-gradient-to-r ${unit.color} p-4 flex items-center`}>
                      <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-900 rounded-full mr-4 text-2xl">
                        {unit.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">Unit {unit.unit}: {unit.title}</h3>
                      </div>
                    </div>
                    <div className="p-5">
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
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                        <Link
                          href={`/quizzes?topic=Unit+${unit.unit}+Calculus+AB`}
                          className="text-blue-600 dark:text-blue-500 font-medium hover:text-blue-800 dark:hover:text-blue-400 flex items-center"
                        >
                          Practice this unit
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Resources Tab Content */}
          {activeTab === 'resources' && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Study Resources for AP Calculus AB</h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Explore our comprehensive collection of study resources designed to help you succeed on the AP Calculus AB exam.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources.map((resource, index) => (
                  <Link 
                    key={index}
                    href={resource.link} 
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex transition-all hover:shadow-lg"
                  >
                    <div className={`w-16 h-16 rounded-lg ${resource.color} flex items-center justify-center text-2xl mr-4 flex-shrink-0`}>
                      {resource.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{resource.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {resource.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mt-8">
                <h3 className="text-lg font-bold mb-4 text-blue-800 dark:text-blue-300">Recommended Textbooks & References</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <div>
                      <span className="font-medium">Calculus: Graphical, Numerical, Algebraic</span>
                      <p className="text-sm text-gray-600 dark:text-gray-400">by Finney, Demana, Waits, and Kennedy</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <div>
                      <span className="font-medium">Barron's AP Calculus</span>
                      <p className="text-sm text-gray-600 dark:text-gray-400">by David Bock, Dennis Donovan, and Shirley O. Hockett</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <div>
                      <span className="font-medium">Princeton Review: Cracking the AP Calculus AB Exam</span>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Updated annually with practice tests and strategies</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}
          
          {/* Formulas Tab Content */}
          {activeTab === 'formulas' && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Key Formulas for AP Calculus AB</h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Essential formulas you need to memorize for success on the AP Calculus AB exam.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Limits */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                  <div className="bg-blue-500 p-4">
                    <h3 className="text-lg font-bold text-white">Limits</h3>
                  </div>
                  <div className="p-5">
                    <ul className="space-y-4">
                      <li className="border-b border-gray-100 dark:border-gray-700 pb-3">
                        <div className="font-medium mb-1">Definition of a Limit</div>
                        <div className="text-gray-700 dark:text-gray-300 font-mono">
                          lim<sub>x→a</sub> f(x) = L
                        </div>
                      </li>
                      <li className="border-b border-gray-100 dark:border-gray-700 pb-3">
                        <div className="font-medium mb-1">Limit Laws</div>
                        <div className="text-gray-700 dark:text-gray-300 font-mono">
                          lim<sub>x→a</sub> [f(x) ± g(x)] = lim<sub>x→a</sub> f(x) ± lim<sub>x→a</sub> g(x)
                        </div>
                      </li>
                      <li>
                        <div className="font-medium mb-1">Squeeze Theorem</div>
                        <div className="text-gray-700 dark:text-gray-300 font-mono">
                          If g(x) ≤ f(x) ≤ h(x) and lim<sub>x→a</sub> g(x) = lim<sub>x→a</sub> h(x) = L,<br/>
                          then lim<sub>x→a</sub> f(x) = L
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Derivatives */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                  <div className="bg-blue-500 p-4">
                    <h3 className="text-lg font-bold text-white">Derivatives</h3>
                  </div>
                  <div className="p-5">
                    <ul className="space-y-4">
                      <li className="border-b border-gray-100 dark:border-gray-700 pb-3">
                        <div className="font-medium mb-1">Definition of Derivative</div>
                        <div className="text-gray-700 dark:text-gray-300 font-mono">
                          f'(x) = lim<sub>h→0</sub> [f(x+h) - f(x)]/h
                        </div>
                      </li>
                      <li className="border-b border-gray-100 dark:border-gray-700 pb-3">
                        <div className="font-medium mb-1">Power Rule</div>
                        <div className="text-gray-700 dark:text-gray-300 font-mono">
                          d/dx [x<sup>n</sup>] = nx<sup>n-1</sup>
                        </div>
                      </li>
                      <li>
                        <div className="font-medium mb-1">Chain Rule</div>
                        <div className="text-gray-700 dark:text-gray-300 font-mono">
                          d/dx [f(g(x))] = f'(g(x)) · g'(x)
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Integrals */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                  <div className="bg-blue-500 p-4">
                    <h3 className="text-lg font-bold text-white">Integrals</h3>
                  </div>
                  <div className="p-5">
                    <ul className="space-y-4">
                      <li className="border-b border-gray-100 dark:border-gray-700 pb-3">
                        <div className="font-medium mb-1">Indefinite Integral</div>
                        <div className="text-gray-700 dark:text-gray-300 font-mono">
                          ∫ f(x) dx = F(x) + C, where F'(x) = f(x)
                        </div>
                      </li>
                      <li className="border-b border-gray-100 dark:border-gray-700 pb-3">
                        <div className="font-medium mb-1">Definite Integral</div>
                        <div className="text-gray-700 dark:text-gray-300 font-mono">
                          ∫<sub>a</sub><sup>b</sup> f(x) dx = F(b) - F(a)
                        </div>
                      </li>
                      <li>
                        <div className="font-medium mb-1">Power Rule for Integration</div>
                        <div className="text-gray-700 dark:text-gray-300 font-mono">
                          ∫ x<sup>n</sup> dx = x<sup>n+1</sup>/(n+1) + C, n ≠ -1
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Applications */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                  <div className="bg-blue-500 p-4">
                    <h3 className="text-lg font-bold text-white">Applications</h3>
                  </div>
                  <div className="p-5">
                    <ul className="space-y-4">
                      <li className="border-b border-gray-100 dark:border-gray-700 pb-3">
                        <div className="font-medium mb-1">Area Between Curves</div>
                        <div className="text-gray-700 dark:text-gray-300 font-mono">
                          Area = ∫<sub>a</sub><sup>b</sup> [f(x) - g(x)] dx
                        </div>
                      </li>
                      <li className="border-b border-gray-100 dark:border-gray-700 pb-3">
                        <div className="font-medium mb-1">Mean Value Theorem</div>
                        <div className="text-gray-700 dark:text-gray-300 font-mono">
                          f'(c) = [f(b) - f(a)]/(b-a) for some c in [a,b]
                        </div>
                      </li>
                      <li>
                        <div className="font-medium mb-1">Average Value of a Function</div>
                        <div className="text-gray-700 dark:text-gray-300 font-mono">
                          f<sub>avg</sub> = (1/(b-a)) · ∫<sub>a</sub><sup>b</sup> f(x) dx
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Link
                  href="/flashcards/calculus-formulas"
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium inline-flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Study Formula Flashcards
                </Link>
              </div>
            </div>
          )}
          
          {/* Exam info */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mt-12">
            <h2 className="text-xl font-bold mb-4">About the AP Calculus AB Exam</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-medium text-blue-600 dark:text-blue-500 mb-2">Exam Format</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• 3 hours and 15 minutes total</li>
                  <li>• Multiple-choice section (45 questions)</li>
                  <li>• Free-response section (6 questions)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-blue-600 dark:text-blue-500 mb-2">Calculator Policy</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Section 1 Part A: No calculator (30 min)</li>
                  <li>• Section 1 Part B: Calculator allowed (60 min)</li>
                  <li>• Section 2: Mixed calculator usage</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-blue-600 dark:text-blue-500 mb-2">Scoring</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• 5: Extremely well qualified</li>
                  <li>• 4: Well qualified</li>
                  <li>• 3: Qualified</li>
                  <li>• 2: Possibly qualified</li>
                  <li>• 1: No recommendation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
} 