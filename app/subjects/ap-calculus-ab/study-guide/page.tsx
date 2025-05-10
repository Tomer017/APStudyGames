'use client';

import { useState } from 'react';
import Link from 'next/link';
import BaseLayout from '../../../../components/BaseLayout';

// Study guide sections
const studyGuideSections = [
  {
    id: 'limits',
    title: 'Limits and Continuity',
    content: `
      <h3 class="text-xl font-bold mb-3">Key Concepts</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>A limit describes the behavior of a function as the input approaches a specific value.</li>
        <li>Limits can be evaluated graphically, numerically, or algebraically.</li>
        <li>A function is continuous at a point if the limit at that point exists and equals the function value.</li>
        <li>The Intermediate Value Theorem states that if f is continuous on [a,b] and k is between f(a) and f(b), then there exists c in [a,b] such that f(c) = k.</li>
      </ul>

      <h3 class="text-xl font-bold mb-3">Important Formulas</h3>
      <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4 font-mono">
        <p class="mb-2">Limit definition: lim<sub>x→a</sub> f(x) = L</p>
        <p class="mb-2">Continuity at x = a: lim<sub>x→a</sub> f(x) = f(a)</p>
        <p>Squeeze Theorem: If g(x) ≤ f(x) ≤ h(x) for all x near a, and lim<sub>x→a</sub> g(x) = lim<sub>x→a</sub> h(x) = L, then lim<sub>x→a</sub> f(x) = L</p>
      </div>

      <h3 class="text-xl font-bold mb-3">Example</h3>
      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <p class="font-medium mb-2">Evaluate: lim<sub>x→2</sub> (x² - 4)/(x - 2)</p>
        <p>Solution:</p>
        <p>First, note that this is an indeterminate form 0/0 when x = 2.</p>
        <p>We can factor the numerator: (x² - 4) = (x - 2)(x + 2)</p>
        <p>So: lim<sub>x→2</sub> (x² - 4)/(x - 2) = lim<sub>x→2</sub> (x - 2)(x + 2)/(x - 2) = lim<sub>x→2</sub> (x + 2) = 4</p>
      </div>
    `
  },
  {
    id: 'derivatives',
    title: 'Derivatives',
    content: `
      <h3 class="text-xl font-bold mb-3">Key Concepts</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>The derivative measures the instantaneous rate of change of a function.</li>
        <li>Geometrically, the derivative represents the slope of the tangent line to the curve at a point.</li>
        <li>A function is differentiable at a point if its derivative exists at that point.</li>
        <li>Differentiability implies continuity, but continuity does not imply differentiability.</li>
      </ul>

      <h3 class="text-xl font-bold mb-3">Differentiation Rules</h3>
      <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4 font-mono">
        <p class="mb-2">Definition: f'(x) = lim<sub>h→0</sub> [f(x+h) - f(x)]/h</p>
        <p class="mb-2">Power Rule: d/dx [x<sup>n</sup>] = nx<sup>n-1</sup></p>
        <p class="mb-2">Product Rule: d/dx [f(x)·g(x)] = f'(x)·g(x) + f(x)·g'(x)</p>
        <p class="mb-2">Quotient Rule: d/dx [f(x)/g(x)] = [f'(x)·g(x) - f(x)·g'(x)]/[g(x)]²</p>
        <p class="mb-2">Chain Rule: d/dx [f(g(x))] = f'(g(x))·g'(x)</p>
        <p class="mb-2">Derivatives of Trigonometric Functions:</p>
        <p class="mb-2">d/dx [sin(x)] = cos(x)</p>
        <p class="mb-2">d/dx [cos(x)] = -sin(x)</p>
        <p>d/dx [tan(x)] = sec²(x)</p>
      </div>

      <h3 class="text-xl font-bold mb-3">Example</h3>
      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <p class="font-medium mb-2">Find the derivative of f(x) = x³sin(x)</p>
        <p>Solution:</p>
        <p>Using the product rule: f'(x) = d/dx[x³]·sin(x) + x³·d/dx[sin(x)]</p>
        <p>f'(x) = 3x²·sin(x) + x³·cos(x)</p>
      </div>
    `
  },
  {
    id: 'applications-derivatives',
    title: 'Applications of Derivatives',
    content: `
      <h3 class="text-xl font-bold mb-3">Key Concepts</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Related rates problems involve finding how different quantities change with respect to time.</li>
        <li>The Mean Value Theorem states that if f is continuous on [a,b] and differentiable on (a,b), then there exists c in (a,b) such that f'(c) = [f(b) - f(a)]/(b-a).</li>
        <li>Critical points occur where f'(x) = 0 or f'(x) is undefined.</li>
        <li>Local extrema (maxima or minima) occur at critical points, subject to the First or Second Derivative Tests.</li>
        <li>Inflection points occur where the concavity changes (f''(x) changes sign).</li>
      </ul>

      <h3 class="text-xl font-bold mb-3">Optimization Steps</h3>
      <ol class="list-decimal pl-5 mb-4 space-y-1">
        <li>Identify the quantity to be optimized and any constraints.</li>
        <li>Express the quantity to be optimized as a function of one variable.</li>
        <li>Find the critical points by setting the derivative equal to zero.</li>
        <li>Use the Second Derivative Test or analyze the behavior to determine the extrema.</li>
      </ol>

      <h3 class="text-xl font-bold mb-3">Example</h3>
      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <p class="font-medium mb-2">Find the dimensions of a rectangle with perimeter 100 units that has maximum area.</p>
        <p>Solution:</p>
        <p>Let x = width and y = length of the rectangle.</p>
        <p>Perimeter: 2x + 2y = 100 → y = (100 - 2x)/2 = 50 - x</p>
        <p>Area: A = xy = x(50 - x) = 50x - x²</p>
        <p>To find maximum area, take the derivative and set it equal to zero:</p>
        <p>A'(x) = 50 - 2x = 0 → x = 25</p>
        <p>Therefore, y = 50 - 25 = 25</p>
        <p>The rectangle with maximum area is a square with dimensions 25 × 25.</p>
      </div>
    `
  },
  {
    id: 'integrals',
    title: 'Integrals',
    content: `
      <h3 class="text-xl font-bold mb-3">Key Concepts</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Integration is the process of finding the accumulation of quantities.</li>
        <li>The definite integral represents the net area between a function and the x-axis over an interval.</li>
        <li>The Fundamental Theorem of Calculus connects differentiation and integration.</li>
        <li>Riemann sums provide a way to approximate definite integrals.</li>
      </ul>

      <h3 class="text-xl font-bold mb-3">Integration Formulas</h3>
      <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4 font-mono">
        <p class="mb-2">Indefinite Integral: ∫ f(x) dx = F(x) + C, where F'(x) = f(x)</p>
        <p class="mb-2">Definite Integral: ∫<sub>a</sub><sup>b</sup> f(x) dx = F(b) - F(a)</p>
        <p class="mb-2">Power Rule: ∫ x<sup>n</sup> dx = x<sup>n+1</sup>/(n+1) + C, n ≠ -1</p>
        <p class="mb-2">∫ 1/x dx = ln|x| + C</p>
        <p class="mb-2">∫ e<sup>x</sup> dx = e<sup>x</sup> + C</p>
        <p class="mb-2">∫ sin(x) dx = -cos(x) + C</p>
        <p>∫ cos(x) dx = sin(x) + C</p>
      </div>

      <h3 class="text-xl font-bold mb-3">Example</h3>
      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <p class="font-medium mb-2">Evaluate: ∫<sub>0</sub><sup>4</sup> (3x² + 2x - 1) dx</p>
        <p>Solution:</p>
        <p>∫<sub>0</sub><sup>4</sup> (3x² + 2x - 1) dx = [3x³/3 + 2x²/2 - x]<sub>0</sub><sup>4</sup></p>
        <p>= [x³ + x² - x]<sub>0</sub><sup>4</sup></p>
        <p>= (4³ + 4² - 4) - (0³ + 0² - 0)</p>
        <p>= (64 + 16 - 4) - 0</p>
        <p>= 76</p>
      </div>
    `
  },
  {
    id: 'applications-integrals',
    title: 'Applications of Integrals',
    content: `
      <h3 class="text-xl font-bold mb-3">Key Concepts</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>Area between curves: ∫<sub>a</sub><sup>b</sup> [f(x) - g(x)] dx, where f(x) ≥ g(x) on [a,b].</li>
        <li>Volumes of solids of revolution can be calculated using the disk or washer methods.</li>
        <li>Average value of a function on [a,b]: f<sub>avg</sub> = (1/(b-a)) · ∫<sub>a</sub><sup>b</sup> f(x) dx</li>
      </ul>

      <h3 class="text-xl font-bold mb-3">Volume Formulas</h3>
      <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4 font-mono">
        <p class="mb-2">Disk Method (around x-axis): V = π ∫<sub>a</sub><sup>b</sup> [f(x)]² dx</p>
        <p class="mb-2">Washer Method: V = π ∫<sub>a</sub><sup>b</sup> [(R(x))² - (r(x))²] dx</p>
        <p>Shell Method (around y-axis): V = 2π ∫<sub>a</sub><sup>b</sup> x·f(x) dx</p>
      </div>

      <h3 class="text-xl font-bold mb-3">Example</h3>
      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <p class="font-medium mb-2">Find the area between f(x) = x² and g(x) = x over the interval [0,1].</p>
        <p>Solution:</p>
        <p>Over [0,1], g(x) = x is greater than f(x) = x² when 0 < x < 1, so:</p>
        <p>Area = ∫<sub>0</sub><sup>1</sup> [x - x²] dx</p>
        <p>= [x²/2 - x³/3]<sub>0</sub><sup>1</sup></p>
        <p>= (1/2 - 1/3) - (0 - 0)</p>
        <p>= 1/6</p>
      </div>
    `
  },
  {
    id: 'differential-equations',
    title: 'Differential Equations',
    content: `
      <h3 class="text-xl font-bold mb-3">Key Concepts</h3>
      <ul class="list-disc pl-5 mb-4 space-y-1">
        <li>A differential equation relates an unknown function to its derivatives.</li>
        <li>Slope fields provide a visual representation of the solution to a differential equation.</li>
        <li>Separation of variables is a technique for solving certain first-order differential equations.</li>
        <li>Exponential growth and decay models are important applications of differential equations.</li>
      </ul>

      <h3 class="text-xl font-bold mb-3">Solving First-Order Differential Equations</h3>
      <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4 font-mono">
        <p class="mb-2">Separable Equations: dy/dx = g(x)·h(y) → ∫ (1/h(y)) dy = ∫ g(x) dx + C</p>
        <p>Exponential Growth/Decay: dy/dt = ky → y = y<sub>0</sub>e<sup>kt</sup></p>
      </div>

      <h3 class="text-xl font-bold mb-3">Example</h3>
      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <p class="font-medium mb-2">Solve the differential equation dy/dx = 2xy with initial condition y(0) = 3.</p>
        <p>Solution:</p>
        <p>This is a separable equation. Rearranging:</p>
        <p>(1/y) dy = 2x dx</p>
        <p>Integrating both sides:</p>
        <p>∫ (1/y) dy = ∫ 2x dx</p>
        <p>ln|y| = x² + C</p>
        <p>y = e<sup>x² + C</sup> = e<sup>C</sup>·e<sup>x²</sup> = Ae<sup>x²</sup></p>
        <p>Using the initial condition y(0) = 3:</p>
        <p>3 = Ae<sup>0</sup> = A</p>
        <p>Therefore, y = 3e<sup>x²</sup></p>
      </div>
    `
  }
];

export default function StudyGuidePage() {
  const [activeSection, setActiveSection] = useState('limits');
  
  return (
    <BaseLayout>
      <div className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl p-8 mb-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">AP Calculus AB Study Guide</h1>
                <p className="text-blue-100">
                  Comprehensive review of essential concepts, formulas, and examples
                </p>
              </div>
              <Link
                href="/flashcards/calculus-ab-formulas"
                className="mt-4 md:mt-0 px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                Study Flashcards
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="md:w-1/4">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden sticky top-24">
                <div className="p-4 bg-gray-50 dark:bg-gray-700">
                  <h2 className="font-bold text-lg">Study Guide Contents</h2>
                </div>
                <nav className="p-4">
                  <ul className="space-y-1">
                    {studyGuideSections.map((section) => (
                      <li key={section.id}>
                        <button
                          onClick={() => setActiveSection(section.id)}
                          className={`w-full px-3 py-2 text-left rounded-md transition-colors ${
                            activeSection === section.id
                              ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                        >
                          {section.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <Link
                    href="/subjects/ap-calculus-ab/practice-exam"
                    className="flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Practice Exam
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="md:w-3/4">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold mb-6">{studyGuideSections.find(section => section.id === activeSection)?.title}</h2>
                <div 
                  className="prose max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{ 
                    __html: studyGuideSections.find(section => section.id === activeSection)?.content || '' 
                  }}
                ></div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                {/* Previous Button */}
                {studyGuideSections.findIndex(section => section.id === activeSection) > 0 && (
                  <button
                    onClick={() => {
                      const currentIndex = studyGuideSections.findIndex(section => section.id === activeSection);
                      setActiveSection(studyGuideSections[currentIndex - 1].id);
                    }}
                    className="flex items-center text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Previous: {studyGuideSections[studyGuideSections.findIndex(section => section.id === activeSection) - 1].title}
                  </button>
                )}

                {/* Next Button */}
                {studyGuideSections.findIndex(section => section.id === activeSection) < studyGuideSections.length - 1 && (
                  <button
                    onClick={() => {
                      const currentIndex = studyGuideSections.findIndex(section => section.id === activeSection);
                      setActiveSection(studyGuideSections[currentIndex + 1].id);
                    }}
                    className="flex items-center ml-auto text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Next: {studyGuideSections[studyGuideSections.findIndex(section => section.id === activeSection) + 1].title}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}
              </div>
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
              Back to AP Calculus AB
            </Link>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
} 