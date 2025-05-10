'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import BaseLayout from '../../../components/BaseLayout';

// Mock quiz data
const quizData = {
  'bio-cells': {
    title: 'Cell Structure and Function',
    subject: 'AP Biology',
    icon: '🧬',
    color: 'from-green-500 to-teal-500',
    questions: [
      {
        id: 1,
        question: 'Which organelle is responsible for protein synthesis in the cell?',
        options: [
          'Mitochondria',
          'Golgi apparatus',
          'Ribosomes',
          'Lysosomes'
        ],
        correctAnswer: 2, // Ribosomes
        explanation: 'Ribosomes are the cellular structures responsible for protein synthesis. They can be found floating freely in the cytoplasm or attached to the endoplasmic reticulum.'
      },
      {
        id: 2,
        question: 'What is the primary function of the mitochondria?',
        options: [
          'Protein synthesis',
          'Cellular respiration and ATP production',
          'Lipid synthesis',
          'Cell division'
        ],
        correctAnswer: 1, // Cellular respiration
        explanation: 'Mitochondria are often called the "powerhouse of the cell" because they generate most of the cell\'s supply of ATP through cellular respiration.'
      },
      {
        id: 3,
        question: 'Which of the following is NOT a component of the endomembrane system?',
        options: [
          'Endoplasmic reticulum',
          'Golgi apparatus',
          'Mitochondria',
          'Lysosomes'
        ],
        correctAnswer: 2, // Mitochondria
        explanation: 'The endomembrane system includes the nuclear envelope, ER, Golgi apparatus, lysosomes, vesicles, and plasma membrane. Mitochondria and chloroplasts are not part of this system.'
      },
      {
        id: 4,
        question: 'Which type of transport requires energy (ATP) to move molecules across a cell membrane?',
        options: [
          'Facilitated diffusion',
          'Osmosis',
          'Active transport',
          'Simple diffusion'
        ],
        correctAnswer: 2, // Active transport
        explanation: 'Active transport requires energy in the form of ATP to move molecules against their concentration gradient across a cell membrane.'
      },
      {
        id: 5,
        question: 'What cellular structure controls what enters and exits the cell?',
        options: [
          'Cell wall',
          'Cell membrane',
          'Nucleus',
          'Cytoplasm'
        ],
        correctAnswer: 1, // Cell membrane
        explanation: 'The cell membrane (plasma membrane) is the selective barrier that controls what enters and exits the cell, maintaining homeostasis.'
      }
    ]
  },
  // More quiz data would be defined here for other quizzes
};

export default function QuizPage({ params }: { params: { quizId: string } }) {
  const router = useRouter();
  const { quizId } = params;
  const quiz = quizData[quizId as keyof typeof quizData];
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  // If quiz not found, show error
  if (!quiz) {
    return (
      <BaseLayout>
        <div className="py-12 px-4 text-center">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-3xl font-bold mb-6">Quiz Not Found</h1>
            <p className="text-lg mb-8">
              Sorry, the quiz you're looking for doesn't exist or has been removed.
            </p>
            <Link 
              href="/quizzes" 
              className="px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary-light transition-colors font-medium"
            >
              Back to Quizzes
            </Link>
          </div>
        </div>
      </BaseLayout>
    );
  }

  // Set up timer when component mounts
  useEffect(() => {
    if (!timerActive && !quizCompleted) {
      // Set timer for 60 seconds per question
      setTimeRemaining(quiz.questions.length * 60);
      setTimerActive(true);
    }
  }, [quiz.questions.length, timerActive, quizCompleted]);

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

  const currentQuestion = quiz.questions[currentQuestionIndex];

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
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setQuizCompleted(true);
      setTimerActive(false);
    }
  };

  const calculateScore = () => {
    let correctCount = 0;
    for (let i = 0; i < quiz.questions.length; i++) {
      if (userAnswers[i] === quiz.questions[i].correctAnswer) {
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
    const percentage = Math.round((score / quiz.questions.length) * 100);
    
    return (
      <BaseLayout>
        <div className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
              <div className="text-center mb-8">
                <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-r ${quiz.color} flex items-center justify-center text-white text-4xl mb-4`}>
                  {quiz.icon}
                </div>
                <h1 className="text-3xl font-bold mb-2">{quiz.title}</h1>
                <p className="text-gray-600 dark:text-gray-300">{quiz.subject}</p>
              </div>
              
              <div className="text-center mb-8">
                <div className="text-6xl font-bold mb-2 gradient-text">{percentage}%</div>
                <p className="text-xl">
                  You got <span className="font-semibold">{score}</span> out of <span className="font-semibold">{quiz.questions.length}</span> questions correct!
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                {quiz.questions.map((q, index) => (
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
                      <div>
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
              
              <div className="flex justify-center space-x-4">
                <Link 
                  href={`/quizzes/${quizId}`} 
                  className="px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-colors font-medium"
                >
                  Try Again
                </Link>
                <Link 
                  href="/quizzes" 
                  className="px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary-light transition-colors font-medium"
                >
                  More Quizzes
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
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${quiz.color} flex items-center justify-center text-white text-xl mr-3`}>
                  {quiz.icon}
                </div>
                <div>
                  <h1 className="text-xl font-bold">{quiz.title}</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{quiz.subject}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-sm font-medium">
                  <span className="text-primary">{currentQuestionIndex + 1}</span>/{quiz.questions.length}
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
                style={{ width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%` }}
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
                onClick={() => router.push('/quizzes')}
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
                  {currentQuestionIndex < quiz.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
} 