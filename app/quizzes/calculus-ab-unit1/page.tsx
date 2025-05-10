'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import BaseLayout from '../../../components/BaseLayout';

const quizData = {
  title: 'AP Calculus AB - Unit 1: Limits and Continuity',
  subject: 'AP Calculus AB',
  icon: '📈',
  color: 'from-blue-500 to-indigo-500',
  description: 'Test your understanding of limits, continuity, and the foundational concepts of calculus.',
  questions: [
    {
      id: 1,
      question: 'Evaluate the limit: \\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}',
      options: [
        '0',
        '2',
        '4',
        'Does not exist'
      ],
      correctAnswer: 1, // 2nd option (index 1)
      explanation: "For this limit, we have an indeterminate form 0/0 when x = 2. We can factor the numerator as $(x^2 - 4) = (x - 2)(x + 2)$, which gives us $\\lim_{x \\to 2} \\frac{(x - 2)(x + 2)}{x - 2} = \\lim_{x \\to 2} (x + 2) = 4$. Therefore, the limit equals 4."
    },
    {
      id: 2,
      question: 'At what values of x is the function f(x) = \\frac{x^2 - 9}{x - 3} discontinuous?',
      options: [
        'x = 3 only',
        'x = -3 only',
        'x = 3 and x = -3',
        'The function is continuous for all real values of x'
      ],
      correctAnswer: 0, // 1st option (index 0)
      explanation: "The function f(x) = \\frac{x^2 - 9}{x - 3} can be simplified to f(x) = x + 3 when x ≠ 3 (by factoring the numerator as (x-3)(x+3)). At x = 3, the function is undefined because division by zero is undefined. Since the function is defined and equal to the simplified form x + 3 everywhere else, it's only discontinuous at x = 3."
    },
    {
      id: 3,
      question: 'Which of the following statements about the limit \\lim_{x \\to 0} \\frac{sin(x)}{x} is true?',
      options: [
        'The limit equals 0',
        'The limit equals 1',
        'The limit equals infinity',
        'The limit does not exist'
      ],
      correctAnswer: 1, // 2nd option (index 1)
      explanation: "This is a fundamental limit in calculus: $\\lim_{x \\to 0} \\frac{sin(x)}{x} = 1$. This can be proven using the squeeze theorem or by using L'Hôpital's rule. This limit is essential in proving that the derivative of sin(x) is cos(x)."
    },
    {
      id: 4,
      question: 'What is the value of \\lim_{x \\to \\infty} \\frac{3x^2 + 2x - 5}{2x^2 - x + 3}?',
      options: [
        '0',
        '1',
        '1.5',
        '3/2'
      ],
      correctAnswer: 3, // 4th option (index 3)
      explanation: "When finding limits as x approaches infinity for rational functions, we divide both the numerator and denominator by the highest power of x. In this case, $\\frac{3x^2 + 2x - 5}{2x^2 - x + 3} = \\frac{3 + \\frac{2}{x} - \\frac{5}{x^2}}{2 - \\frac{1}{x} + \\frac{3}{x^2}}$. As x approaches infinity, the terms with $\\frac{1}{x}$ and $\\frac{1}{x^2}$ approach 0, leaving us with $\\frac{3}{2} = 1.5$."
    },
    {
      id: 5,
      question: 'For the function f(x) = |x - 2|, at which value is the function not differentiable?',
      options: [
        'x = 0',
        'x = 1',
        'x = 2',
        'x = 3'
      ],
      correctAnswer: 2, // 3rd option (index 2)
      explanation: "The absolute value function |x - 2| changes behavior at x = 2, where it transitions from -(x-2) to (x-2). At this point, the graph has a sharp corner (a 'cusp'), and the derivative does not exist. The function is not differentiable at x = 2."
    },
    {
      id: 6,
      question: 'Which of the following is an example of the Intermediate Value Theorem?',
      options: [
        'If f(a) ≠ f(b), then f is not continuous on [a,b]',
        'If f is continuous on [a,b] and k is between f(a) and f(b), then there exists c in [a,b] such that f(c) = k',
        'If f is continuous on [a,b], then f must be increasing on [a,b]',
        'If f is continuous on [a,b], then f has a maximum value but no minimum value'
      ],
      correctAnswer: 1, // 2nd option (index 1)
      explanation: "The Intermediate Value Theorem states that if f is continuous on a closed interval [a,b] and k is any value between f(a) and f(b), then there must be at least one point c in the interval [a,b] where f(c) = k. This is essentially saying that a continuous function cannot 'jump' over values; it must take on all intermediate values."
    },
    {
      id: 7,
      question: 'Evaluate the one-sided limit: \\lim_{x \\to 3^-} \\frac{|x - 3|}{x - 3}',
      options: [
        '-1',
        '0',
        '1',
        'The limit does not exist'
      ],
      correctAnswer: 0, // 1st option (index 0)
      explanation: "For x < 3, we have |x - 3| = -(x - 3) since x - 3 is negative. So $\\lim_{x \\to 3^-} \\frac{|x - 3|}{x - 3} = \\lim_{x \\to 3^-} \\frac{-(x - 3)}{x - 3} = \\lim_{x \\to 3^-} -1 = -1$."
    },
    {
      id: 8,
      question: 'If \\lim_{x \\to a} f(x) = \\lim_{x \\to a} g(x) = 0 and \\lim_{x \\to a} \\frac{f(x)}{g(x)} = 5, what is \\lim_{x \\to a} \\frac{2f(x)}{g(x)}?',
      options: [
        '2.5',
        '5',
        '10',
        'Cannot be determined from the given information'
      ],
      correctAnswer: 2, // 3rd option (index 2)
      explanation: "Given that $\\lim_{x \\to a} \\frac{f(x)}{g(x)} = 5$, if we multiply f(x) by 2, the limit will be multiplied by 2 as well. So $\\lim_{x \\to a} \\frac{2f(x)}{g(x)} = 2 \\cdot \\lim_{x \\to a} \\frac{f(x)}{g(x)} = 2 \\cdot 5 = 10$."
    },
    {
      id: 9,
      question: 'For which value of the constant k is the function f(x) = \\begin{cases} x^2, & x ≤ 1 \\\\ kx + 2, & x > 1 \\end{cases} continuous at x = 1?',
      options: [
        'k = -1',
        'k = 0',
        'k = 1',
        'k = 3'
      ],
      correctAnswer: 2, // 3rd option (index 2)
      explanation: "For the function to be continuous at x = 1, the left and right limits must be equal: $\\lim_{x \\to 1^-} f(x) = \\lim_{x \\to 1^+} f(x)$. The left limit is $\\lim_{x \\to 1^-} x^2 = 1^2 = 1$. The right limit is $\\lim_{x \\to 1^+} (kx + 2) = k \\cdot 1 + 2 = k + 2$. Setting these equal: $1 = k + 2$, which gives us $k = -1$."
    },
    {
      id: 10,
      question: 'Which of the following limits requires the use of the Squeeze Theorem to evaluate?',
      options: [
        '\\lim_{x \\to 0} \\frac{sin(x)}{x}',
        '\\lim_{x \\to 0} x \\cdot cos(x)',
        '\\lim_{x \\to 0} x^2 \\cdot sin(\\frac{1}{x})',
        '\\lim_{x \\to 0} \\frac{1 - cos(x)}{x}'
      ],
      correctAnswer: 2, // 3rd option (index 2)
      explanation: "The limit $\\lim_{x \\to 0} x^2 \\cdot sin(\\frac{1}{x})$ can be evaluated using the Squeeze Theorem. Since $-1 ≤ sin(\\frac{1}{x}) ≤ 1$ for all x ≠ 0, we have $-x^2 ≤ x^2 \\cdot sin(\\frac{1}{x}) ≤ x^2$. As $x \\to 0$, both $-x^2$ and $x^2$ approach 0, so by the Squeeze Theorem, $\\lim_{x \\to 0} x^2 \\cdot sin(\\frac{1}{x}) = 0$."
    }
  ]
};

export default function LimitsQuizPage() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  // Set up timer when component mounts
  useEffect(() => {
    if (!timerActive && !quizCompleted) {
      // Set timer for 2 minutes per question
      setTimeRemaining(quizData.questions.length * 120);
      setTimerActive(true);
    }
  }, [timerActive, quizCompleted]);

  // Timer countdown
  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (timerActive && timeRemaining > 0) {
      timerId = setTimeout(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0 && !quizCompleted) {
      // Time's up - automatically submit quiz
      setQuizCompleted(true);
    }

    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [timeRemaining, timerActive, quizCompleted]);

  const currentQuestion = quizData.questions[currentQuestionIndex];

  const handleOptionClick = (optionIndex: number) => {
    if (quizCompleted) return;
    setSelectedOption(optionIndex);
  };

  const handleNextQuestion = () => {
    // Save answer
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestionIndex] = selectedOption !== null ? selectedOption : -1;
    setUserAnswers(newUserAnswers);
    
    // Reset states
    setSelectedOption(null);
    setShowExplanation(false);

    // Move to next question or complete quiz
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setQuizCompleted(true);
      setTimerActive(false);
    }
  };

  const calculateScore = () => {
    let correctCount = 0;
    for (let i = 0; i < quizData.questions.length; i++) {
      if (userAnswers[i] === quizData.questions[i].correctAnswer) {
        correctCount++;
      }
    }
    return correctCount;
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Results screen after quiz completion
  if (quizCompleted) {
    const score = calculateScore();
    const percentage = Math.round((score / quizData.questions.length) * 100);
    
    return (
      <BaseLayout>
        <div className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
              <div className="text-center mb-8">
                <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-r ${quizData.color} flex items-center justify-center text-white text-4xl mb-4`}>
                  {quizData.icon}
                </div>
                <h1 className="text-3xl font-bold mb-2">{quizData.title}</h1>
                <p className="text-gray-600 dark:text-gray-300">{quizData.subject}</p>
              </div>
              
              <div className="text-center mb-8">
                <div className="text-6xl font-bold mb-2 gradient-text">{percentage}%</div>
                <p className="text-xl">
                  You got <span className="font-semibold">{score}</span> out of <span className="font-semibold">{quizData.questions.length}</span> questions correct!
                </p>
                <div className="mt-4">
                  {percentage >= 80 ? (
                    <div className="text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/20 p-3 rounded-lg inline-block">
                      Excellent! You have a strong understanding of limits and continuity.
                    </div>
                  ) : percentage >= 60 ? (
                    <div className="text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/20 p-3 rounded-lg inline-block">
                      Good job! Review the questions you missed to strengthen your understanding.
                    </div>
                  ) : (
                    <div className="text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/20 p-3 rounded-lg inline-block">
                      You might need additional review of limits and continuity concepts.
                    </div>
                  )}
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                {quizData.questions.map((q, index) => (
                  <div 
                    key={q.id} 
                    className={`p-4 rounded-lg ${
                      userAnswers[index] === q.correctAnswer 
                        ? 'bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700' 
                        : 'bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700'
                    }`}
                  >
                    <div className="flex">
                      <div className="w-6 h-6 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-sm font-medium mr-3">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium mb-2">{q.question}</p>
                        <div className="space-y-1 mb-2">
                          {q.options.map((option, optIndex) => (
                            <div 
                              key={optIndex} 
                              className={`p-2 rounded ${
                                optIndex === q.correctAnswer
                                  ? 'bg-green-200 dark:bg-green-800/40 font-medium'
                                  : optIndex === userAnswers[index] 
                                    ? 'bg-red-200 dark:bg-red-800/40'
                                    : 'bg-gray-100 dark:bg-gray-700'
                              }`}
                            >
                              {option}
                              {optIndex === q.correctAnswer && (
                                <span className="ml-2 text-green-600 dark:text-green-400">✓</span>
                              )}
                              {optIndex === userAnswers[index] && optIndex !== q.correctAnswer && (
                                <span className="ml-2 text-red-600 dark:text-red-400">✗</span>
                              )}
                            </div>
                          ))}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 bg-gray-50 dark:bg-gray-700 p-2 rounded">
                          <span className="font-medium">Explanation:</span> {q.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center sm:space-x-4 space-y-3 sm:space-y-0">
                <Link 
                  href="/quizzes/calculus-ab-unit1" 
                  className="px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-colors font-medium text-center"
                >
                  Try Again
                </Link>
                <Link 
                  href="/subjects/ap-calculus-ab" 
                  className="px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary-light transition-colors font-medium text-center"
                >
                  Back to AP Calculus AB
                </Link>
              </div>
            </div>
          </div>
        </div>
      </BaseLayout>
    );
  }

  // Quiz in progress
  return (
    <BaseLayout>
      <div className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
            {/* Quiz header with progress */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
              <div className="flex items-center mb-4 sm:mb-0">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${quizData.color} flex items-center justify-center text-white text-xl mr-3`}>
                  {quizData.icon}
                </div>
                <div>
                  <h1 className="text-xl font-bold">{quizData.title}</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{quizData.subject}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-sm font-medium">
                  <span className="text-primary">{currentQuestionIndex + 1}</span>/{quizData.questions.length}
                </div>
                <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                  Time: {formatTime(timeRemaining)}
                </div>
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-8">
              <div 
                className="bg-primary h-2.5 rounded-full" 
                style={{ width: `${((currentQuestionIndex + 1) / quizData.questions.length) * 100}%` }}
              ></div>
            </div>
            
            {/* Question */}
            <div className="mb-8">
              <h2 className="text-xl font-medium mb-6">
                {currentQuestionIndex + 1}. {currentQuestion.question}
              </h2>
              
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(index)}
                    className={`w-full p-4 rounded-lg text-left transition-all border 
                      ${selectedOption === index 
                        ? 'border-primary bg-primary/10 dark:bg-primary/20' 
                        : 'border-gray-200 dark:border-gray-700 hover:border-primary hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    disabled={showExplanation}
                  >
                    <div className="flex items-start">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 text-sm ${
                        selectedOption === index 
                          ? 'bg-primary text-white' 
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span>{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Explanation (shows after selection) */}
            {showExplanation && (
              <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className={`p-2 rounded-lg mb-2 ${
                  selectedOption === currentQuestion.correctAnswer
                    ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300'
                    : 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300'
                }`}>
                  {selectedOption === currentQuestion.correctAnswer 
                    ? 'Correct!' 
                    : `Incorrect. The correct answer is ${String.fromCharCode(65 + currentQuestion.correctAnswer)}: ${currentQuestion.options[currentQuestion.correctAnswer]}`
                  }
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium">Explanation:</span> {currentQuestion.explanation}
                </p>
              </div>
            )}
            
            {/* Actions */}
            <div className="flex justify-between">
              <button
                onClick={() => router.push('/subjects/ap-calculus-ab')}
                className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Exit Quiz
              </button>
              
              {!showExplanation ? (
                <button
                  onClick={() => {
                    if (selectedOption !== null) {
                      setShowExplanation(true);
                    }
                  }}
                  disabled={selectedOption === null}
                  className={`px-6 py-3 rounded-lg transition-colors font-medium ${
                    selectedOption !== null
                      ? 'bg-primary text-white hover:bg-primary-light'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Check Answer
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary-light transition-colors font-medium"
                >
                  {currentQuestionIndex < quizData.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
} 