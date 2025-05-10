'use client';

import { useState } from 'react';
import Link from 'next/link';
import BaseLayout from '../../../../components/BaseLayout';

const PracticeExamPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <BaseLayout>
      <div className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl p-8 mb-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full mr-6 text-5xl text-blue-500">
                  📝
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">AP Calculus AB Practice Exam</h1>
                  <p className="text-blue-100">Full-length exam with multiple choice and free response sections</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b border-gray-200 dark:border-gray-700 mb-8">
            <button
              onClick={() => setActiveSection('overview')}
              className={`px-4 py-2 text-sm font-medium ${
                activeSection === 'overview'
                  ? 'text-blue-600 dark:text-blue-500 border-b-2 border-blue-600 dark:border-blue-500'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              Exam Overview
            </button>
            <button
              onClick={() => setActiveSection('section1A')}
              className={`px-4 py-2 text-sm font-medium ${
                activeSection === 'section1A'
                  ? 'text-blue-600 dark:text-blue-500 border-b-2 border-blue-600 dark:border-blue-500'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              Section I-A: Multiple Choice (No Calculator)
            </button>
            <button
              onClick={() => setActiveSection('section1B')}
              className={`px-4 py-2 text-sm font-medium ${
                activeSection === 'section1B'
                  ? 'text-blue-600 dark:text-blue-500 border-b-2 border-blue-600 dark:border-blue-500'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              Section I-B: Multiple Choice (Calculator)
            </button>
            <button
              onClick={() => setActiveSection('section2')}
              className={`px-4 py-2 text-sm font-medium ${
                activeSection === 'section2'
                  ? 'text-blue-600 dark:text-blue-500 border-b-2 border-blue-600 dark:border-blue-500'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              Section II: Free Response
            </button>
          </div>

          {/* Overview Section */}
          {activeSection === 'overview' && (
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-4">AP Calculus AB Practice Exam</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  This full-length practice exam follows the format and guidelines of the official AP Calculus AB exam. It's designed to help you prepare for the actual test by simulating real exam conditions.
                </p>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-6 pb-2">
                  <h3 className="text-lg font-bold mb-3">Exam Structure</h3>
                  <div className="space-y-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Section I: Multiple Choice — 1 hour 45 minutes</h4>
                      <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                        <li><span className="font-medium">Part A:</span> 30 questions (60 minutes) — No calculator permitted</li>
                        <li><span className="font-medium">Part B:</span> 15 questions (45 minutes) — Graphing calculator required</li>
                        <li>Section I counts for 50% of your total exam score</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Section II: Free Response — 1 hour 30 minutes</h4>
                      <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                        <li><span className="font-medium">Part A:</span> 2 problems (30 minutes) — Graphing calculator required</li>
                        <li><span className="font-medium">Part B:</span> 4 problems (60 minutes) — No calculator permitted</li>
                        <li>Section II counts for 50% of your total exam score</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
                  <h3 className="text-lg font-bold mb-3">How to Use This Practice Exam</h3>
                  <ol className="list-decimal pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                    <li>Set aside approximately 3 hours and 15 minutes to complete the full exam in one sitting.</li>
                    <li>Use a timer to ensure you're staying within the time limits for each section.</li>
                    <li>For calculator sections, use only the approved graphing calculators permitted by College Board.</li>
                    <li>For no-calculator sections, refrain from using any calculating devices.</li>
                    <li>After completing each section, review your answers and explanations.</li>
                  </ol>
                </div>

                <div className="mt-8 text-center">
                  <button
                    onClick={() => setActiveSection('section1A')}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Begin Practice Exam
                  </button>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
                <h3 className="text-xl font-bold mb-4">Topic Coverage</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  This practice exam covers all the major units from the AP Calculus AB curriculum:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="font-semibold mb-2 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 flex items-center justify-center mr-2">1</div>
                      Limits and Continuity
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">~10-12% of exam</p>
                  </div>
                  
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="font-semibold mb-2 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 flex items-center justify-center mr-2">2</div>
                      Differentiation: Definition and Fundamental Properties
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">~10-12% of exam</p>
                  </div>

                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="font-semibold mb-2 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 flex items-center justify-center mr-2">3</div>
                      Differentiation: Composite, Implicit, and Inverse Functions
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">~9-10% of exam</p>
                  </div>

                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="font-semibold mb-2 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 flex items-center justify-center mr-2">4</div>
                      Contextual Applications of Differentiation
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">~10-15% of exam</p>
                  </div>

                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="font-semibold mb-2 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 flex items-center justify-center mr-2">5</div>
                      Analytical Applications of Differentiation
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">~15-18% of exam</p>
                  </div>

                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="font-semibold mb-2 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 flex items-center justify-center mr-2">6</div>
                      Integration and Accumulation of Change
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">~17-20% of exam</p>
                  </div>

                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="font-semibold mb-2 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 flex items-center justify-center mr-2">7</div>
                      Differential Equations
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">~6-12% of exam</p>
                  </div>

                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="font-semibold mb-2 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 flex items-center justify-center mr-2">8</div>
                      Applications of Integration
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">~10-15% of exam</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section I-A: Multiple Choice (No Calculator) */}
          {activeSection === 'section1A' && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold">Section I-A: Multiple Choice</h2>
                  <p className="text-gray-600 dark:text-gray-300">No calculator permitted • 30 questions • 60 minutes</p>
                </div>
                <div className="bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300 px-4 py-2 rounded-lg text-sm font-medium">
                  Calculator: Not Permitted
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/10 p-4 rounded-lg mb-8">
                <div className="flex items-start">
                  <div className="text-yellow-500 dark:text-yellow-400 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      This section contains 30 multiple-choice questions for which calculators are not permitted. You have 60 minutes to complete this section. Each question has 4 possible answer choices.
                    </p>
                  </div>
                </div>
              </div>

              <Link 
                href="/subjects/ap-calculus-ab/practice-exam/section1a" 
                className="block w-full py-3 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 transition-colors"
              >
                Start Section I-A (No Calculator)
              </Link>

              <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
                <h3 className="text-lg font-semibold mb-4">Sample Questions</h3>
                <div className="space-y-6">
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <p className="mb-3"><span className="font-medium">1.</span> If f(x) = x³ - 3x² + 2x - 1, then f'(2) = </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded">A. 1</div>
                      <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded">B. 3</div>
                      <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded">C. 5</div>
                      <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded">D. 7</div>
                    </div>
                  </div>

                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <p className="mb-3"><span className="font-medium">2.</span> The limit as x approaches 0 of (sin 3x)/(2x) equals</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded">A. 0</div>
                      <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded">B. 3/2</div>
                      <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded">C. 2/3</div>
                      <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded">D. 3</div>
                    </div>
                  </div>
                </div>

                <div className="text-center text-gray-500 dark:text-gray-400 text-sm mt-6">
                  <p>...and 28 more questions in the complete section</p>
                </div>
              </div>
            </div>
          )}

          {/* Section I-B: Multiple Choice (Calculator) */}
          {activeSection === 'section1B' && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold">Section I-B: Multiple Choice</h2>
                  <p className="text-gray-600 dark:text-gray-300">Graphing calculator required • 15 questions • 45 minutes</p>
                </div>
                <div className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 px-4 py-2 rounded-lg text-sm font-medium">
                  Calculator: Required
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/10 p-4 rounded-lg mb-8">
                <div className="flex items-start">
                  <div className="text-yellow-500 dark:text-yellow-400 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      This section contains 15 multiple-choice questions for which a graphing calculator is required. You have 45 minutes to complete this section. These questions often involve real-world applications and interpretation of graphs.
                    </p>
                  </div>
                </div>
              </div>

              <Link 
                href="/subjects/ap-calculus-ab/practice-exam/section1b" 
                className="block w-full py-3 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 transition-colors"
              >
                Start Section I-B (Calculator)
              </Link>

              <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
                <h3 className="text-lg font-semibold mb-4">Sample Questions</h3>
                <div className="space-y-6">
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <p className="mb-3">
                      <span className="font-medium">1.</span> The rate at which water flows into a tank is modeled by the function r(t) = 2t² - 8t + 12, where r(t) is measured in gallons per minute and t is measured in hours. According to this model, how many gallons of water flow into the tank during the first 3 hours?
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded">A. 6</div>
                      <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded">B. 12</div>
                      <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded">C. 18</div>
                      <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded">D. 24</div>
                    </div>
                  </div>

                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <p className="mb-3">
                      <span className="font-medium">2.</span> A particle moves along the x-axis with position given by x(t) = t³ - 6t² + 9t + 2, where t ≥ 0 is measured in seconds and x is measured in meters. At what time t is the velocity of the particle equal to zero?
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded">A. t = 1</div>
                      <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded">B. t = 2</div>
                      <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded">C. t = 3</div>
                      <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded">D. t = 4</div>
                    </div>
                  </div>
                </div>

                <div className="text-center text-gray-500 dark:text-gray-400 text-sm mt-6">
                  <p>...and 13 more questions in the complete section</p>
                </div>
              </div>
            </div>
          )}

          {/* Section II: Free Response */}
          {activeSection === 'section2' && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold">Section II: Free Response</h2>
                  <p className="text-gray-600 dark:text-gray-300">6 questions • 90 minutes</p>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/10 p-4 rounded-lg mb-8">
                <div className="flex items-start">
                  <div className="text-yellow-500 dark:text-yellow-400 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      This section contains 6 free-response questions divided into two parts:
                    </p>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                      <li>• Part A: 2 problems requiring a graphing calculator (30 minutes)</li>
                      <li>• Part B: 4 problems for which calculators are not permitted (60 minutes)</li>
                    </ul>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                      Each question is scored on a 9-point scale based on the College Board's rubric. Show all your work and explain your reasoning clearly.
                    </p>
                  </div>
                </div>
              </div>

              <Link 
                href="/subjects/ap-calculus-ab/practice-exam/section2" 
                className="block w-full py-3 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 transition-colors"
              >
                Start Section II (Free Response)
              </Link>

              <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
                <h3 className="text-lg font-semibold mb-4">Sample Question</h3>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-center mb-3">
                    <div className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 px-3 py-1 rounded-lg text-xs font-medium mr-3">
                      Calculator: Required
                    </div>
                    <p className="font-medium">Question 1</p>
                  </div>
                  
                  <p className="mb-4">
                    A particle moves along the x-axis with velocity v(t) = sin(πt) - t for 0 ≤ t ≤ 2, where t is measured in seconds and v(t) is measured in meters per second.
                  </p>
                  
                  <ol className="list-lower-alpha pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Find the acceleration of the particle at t = 1.</li>
                    <li>Find all values of t in the given interval where the velocity of the particle is zero.</li>
                    <li>Find the position of the particle at t = 2 if its position at t = 0 is x = 3.</li>
                    <li>Does the particle ever change direction in the given time interval? Give a reason for your answer.</li>
                  </ol>
                </div>

                <div className="text-center text-gray-500 dark:text-gray-400 text-sm mt-6">
                  <p>...and 5 more questions in the complete section</p>
                </div>
              </div>
            </div>
          )}

          {/* Back Button */}
          <div className="mt-8 text-center">
            <Link
              href="/subjects/ap-calculus-ab"
              className="text-blue-600 dark:text-blue-500 hover:underline flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to AP Calculus AB
            </Link>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default PracticeExamPage; 