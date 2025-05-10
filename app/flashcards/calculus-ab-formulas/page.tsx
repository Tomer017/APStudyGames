'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import BaseLayout from '../../../components/BaseLayout';

// Flashcard data
const flashcards = [
  {
    id: 1,
    front: 'Definition of the Derivative',
    back: 'f\'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}'
  },
  {
    id: 2,
    front: 'Power Rule',
    back: 'If f(x) = x^n, then f\'(x) = nx^{n-1}'
  },
  {
    id: 3,
    front: 'Product Rule',
    back: 'If h(x) = f(x) \\cdot g(x), then h\'(x) = f\'(x) \\cdot g(x) + f(x) \\cdot g\'(x)'
  },
  {
    id: 4,
    front: 'Quotient Rule',
    back: 'If h(x) = \\frac{f(x)}{g(x)}, then h\'(x) = \\frac{f\'(x) \\cdot g(x) - f(x) \\cdot g\'(x)}{[g(x)]^2}'
  },
  {
    id: 5,
    front: 'Chain Rule',
    back: 'If h(x) = f(g(x)), then h\'(x) = f\'(g(x)) \\cdot g\'(x)'
  },
  {
    id: 6,
    front: 'Derivative of sin(x)',
    back: '\\frac{d}{dx}[\\sin(x)] = \\cos(x)'
  },
  {
    id: 7,
    front: 'Derivative of cos(x)',
    back: '\\frac{d}{dx}[\\cos(x)] = -\\sin(x)'
  },
  {
    id: 8,
    front: 'Derivative of tan(x)',
    back: '\\frac{d}{dx}[\\tan(x)] = \\sec^2(x)'
  },
  {
    id: 9,
    front: 'Derivative of e^x',
    back: '\\frac{d}{dx}[e^x] = e^x'
  },
  {
    id: 10,
    front: 'Derivative of ln(x)',
    back: '\\frac{d}{dx}[\\ln(x)] = \\frac{1}{x}'
  },
  {
    id: 11,
    front: 'Fundamental Theorem of Calculus (Part 1)',
    back: 'If F(x) is an antiderivative of f(x), then \\int_a^b f(x) dx = F(b) - F(a)'
  },
  {
    id: 12,
    front: 'Fundamental Theorem of Calculus (Part 2)',
    back: 'If g(x) = \\int_a^x f(t) dt, then g\'(x) = f(x)'
  },
  {
    id: 13,
    front: 'Mean Value Theorem',
    back: 'If f is continuous on [a,b] and differentiable on (a,b), then there exists at least one c in (a,b) such that f\'(c) = \\frac{f(b) - f(a)}{b - a}'
  },
  {
    id: 14,
    front: 'Area Between Curves',
    back: 'Area = \\int_a^b [f(x) - g(x)] dx, where f(x) ≥ g(x) for all x in [a,b]'
  },
  {
    id: 15,
    front: 'Average Value of a Function',
    back: 'f_{avg} = \\frac{1}{b-a} \\int_a^b f(x) dx'
  },
  {
    id: 16,
    front: 'Volumes of Revolution (Disk Method)',
    back: 'V = \\pi \\int_a^b [f(x)]^2 dx (around x-axis)'
  },
  {
    id: 17,
    front: 'Volumes of Revolution (Washer Method)',
    back: 'V = \\pi \\int_a^b [(R(x))^2 - (r(x))^2] dx, where R(x) is the outer radius and r(x) is the inner radius'
  },
  {
    id: 18,
    front: 'Integral of sin(x)',
    back: '\\int \\sin(x) dx = -\\cos(x) + C'
  },
  {
    id: 19,
    front: 'Integral of cos(x)',
    back: '\\int \\cos(x) dx = \\sin(x) + C'
  },
  {
    id: 20,
    front: 'Integral of sec²(x)',
    back: '\\int \\sec^2(x) dx = \\tan(x) + C'
  },
  {
    id: 21,
    front: 'L\'Hôpital\'s Rule',
    back: 'If \\lim_{x \\to a} \\frac{f(x)}{g(x)} results in the indeterminate form \\frac{0}{0} or \\frac{\\infty}{\\infty}, then \\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f\'(x)}{g\'(x)}, provided the latter limit exists'
  },
  {
    id: 22,
    front: 'Definition of Continuity at x = a',
    back: 'f is continuous at x = a if:\n1. f(a) is defined\n2. \\lim_{x \\to a} f(x) exists\n3. \\lim_{x \\to a} f(x) = f(a)'
  },
  {
    id: 23,
    front: 'Intermediate Value Theorem',
    back: 'If f is continuous on [a,b] and k is any value between f(a) and f(b), then there exists at least one c in [a,b] such that f(c) = k'
  },
  {
    id: 24,
    front: 'Integration by Parts Formula',
    back: '\\int u(x) \\cdot v\'(x) dx = u(x) \\cdot v(x) - \\int v(x) \\cdot u\'(x) dx'
  },
  {
    id: 25,
    front: 'Integration by Substitution',
    back: '\\int f(g(x)) \\cdot g\'(x) dx = \\int f(u) du, where u = g(x) and du = g\'(x) dx'
  },
  {
    id: 26,
    front: 'Implicit Differentiation',
    back: 'For an equation of the form F(x,y) = 0, differentiate both sides with respect to x, then solve for \\frac{dy}{dx}'
  },
  {
    id: 27,
    front: 'Related Rates',
    back: 'Use implicit differentiation to relate the rates of change of different variables with respect to time'
  },
  {
    id: 28,
    front: 'Concavity Test',
    back: 'f is concave up on an interval if f\'\'(x) > 0 on that interval\nf is concave down on an interval if f\'\'(x) < 0 on that interval'
  },
  {
    id: 29,
    front: 'Critical Points',
    back: 'Critical points of f occur where f\'(x) = 0 or f\'(x) is undefined'
  },
  {
    id: 30,
    front: 'First Derivative Test',
    back: 'If f\'(x) changes from positive to negative at a critical point c, then f has a local maximum at c\nIf f\'(x) changes from negative to positive at a critical point c, then f has a local minimum at c'
  }
];

const FlashcardsPage = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [studyComplete, setStudyComplete] = useState(false);
  const [knownCards, setKnownCards] = useState<number[]>([]);
  const [remainingCards, setRemainingCards] = useState<number[]>(flashcards.map(card => card.id));
  const [studyMode, setStudyMode] = useState<'all' | 'known' | 'unknown'>('all');
  const [showProgress, setShowProgress] = useState(false);

  // Function to move to the next card
  const nextCard = () => {
    if (remainingCards.length > 1) {
      // Move to next card and reset flip
      const nextIndex = (currentCardIndex + 1) % remainingCards.length;
      setCurrentCardIndex(nextIndex);
      setFlipped(false);
    } else if (remainingCards.length === 1) {
      // Study session complete
      setStudyComplete(true);
    }
  };

  // Function to move to the previous card
  const prevCard = () => {
    if (remainingCards.length > 0) {
      // Move to previous card and reset flip
      const prevIndex = (currentCardIndex - 1 + remainingCards.length) % remainingCards.length;
      setCurrentCardIndex(prevIndex);
      setFlipped(false);
    }
  };

  // Function to mark current card as known
  const markAsKnown = () => {
    if (remainingCards.length > 0) {
      const currentCardId = remainingCards[currentCardIndex];
      setKnownCards(prev => [...prev, currentCardId]);
      
      if (studyMode === 'unknown') {
        // Remove card from remaining if studying unknown cards
        const newRemaining = remainingCards.filter((_, idx) => idx !== currentCardIndex);
        setRemainingCards(newRemaining);
        
        // Adjust current index if needed
        if (currentCardIndex >= newRemaining.length) {
          setCurrentCardIndex(0);
        }
      } else {
        // Just move to next card
        nextCard();
      }
    }
  };

  // Switch study mode
  useEffect(() => {
    if (studyMode === 'all') {
      setRemainingCards(flashcards.map(card => card.id));
    } else if (studyMode === 'known') {
      setRemainingCards(knownCards);
    } else if (studyMode === 'unknown') {
      const unknownCards = flashcards
        .filter(card => !knownCards.includes(card.id))
        .map(card => card.id);
      setRemainingCards(unknownCards);
    }
    setCurrentCardIndex(0);
    setFlipped(false);
    setStudyComplete(false);
  }, [studyMode, knownCards]);

  // Get current card
  const getCurrentCard = () => {
    if (remainingCards.length === 0) return null;
    const currentCardId = remainingCards[currentCardIndex];
    return flashcards.find(card => card.id === currentCardId);
  };

  const currentCard = getCurrentCard();

  // Calculate progress
  const progress = {
    total: flashcards.length,
    known: knownCards.length,
    remaining: flashcards.length - knownCards.length,
    percentage: Math.round((knownCards.length / flashcards.length) * 100)
  };

  return (
    <BaseLayout>
      <div className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-3">AP Calculus AB Formula Flashcards</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Master the essential formulas and concepts for AP Calculus AB with these interactive flashcards.
            </p>
          </div>

          {/* Study Mode Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setStudyMode('all')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  studyMode === 'all'
                    ? 'bg-white dark:bg-gray-700 shadow text-blue-600 dark:text-blue-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                All Cards ({flashcards.length})
              </button>
              <button
                onClick={() => setStudyMode('unknown')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  studyMode === 'unknown'
                    ? 'bg-white dark:bg-gray-700 shadow text-blue-600 dark:text-blue-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Still Learning ({progress.remaining})
              </button>
              <button
                onClick={() => setStudyMode('known')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  studyMode === 'known'
                    ? 'bg-white dark:bg-gray-700 shadow text-blue-600 dark:text-blue-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Mastered ({progress.known})
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div 
            className="cursor-pointer mb-8 bg-gray-100 dark:bg-gray-800 rounded-full h-4 overflow-hidden"
            onClick={() => setShowProgress(!showProgress)}
          >
            <div
              className="bg-green-500 h-4 transition-all duration-500 ease-out"
              style={{ width: `${progress.percentage}%` }}
            ></div>
          </div>

          {/* Progress Stats (Collapsible) */}
          {showProgress && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8 transition-all duration-300 ease-in-out">
              <h2 className="text-lg font-semibold mb-4">Your Progress</h2>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{progress.total}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Total Cards</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">{progress.known}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Mastered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{progress.percentage}%</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Complete</div>
                </div>
              </div>
            </div>
          )}

          {/* Study Complete Message */}
          {studyComplete ? (
            <div className="text-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-8">
              <div className="w-20 h-20 mx-auto bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Study Session Complete!</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                You've gone through all the flashcards in this set. Great job!
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => {
                    setStudyComplete(false);
                    setCurrentCardIndex(0);
                  }}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Restart Session
                </button>
                <Link
                  href="/subjects/ap-calculus-ab"
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Back to Calculus
                </Link>
              </div>
            </div>
          ) : (
            // Flashcard
            currentCard && (
              <div className="mb-8">
                <div className="relative">
                  <div 
                    onClick={() => setFlipped(!flipped)}
                    className={`bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 h-64 sm:h-96 flex items-center justify-center cursor-pointer transition-all duration-500 transform relative ${
                      flipped ? 'rotateY180' : ''
                    }`}
                    style={{
                      perspective: '1000px',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <div 
                      className={`absolute inset-0 backface-hidden flex flex-col items-center justify-center p-8 ${
                        flipped ? 'opacity-0' : 'opacity-100'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                          Tap to reveal answer
                        </div>
                        <h2 className="text-2xl font-bold mb-2">{currentCard.front}</h2>
                      </div>
                    </div>
                    <div 
                      className={`absolute inset-0 backface-hidden flex flex-col items-center justify-center p-8 ${
                        flipped ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{
                        transform: 'rotateY(180deg)'
                      }}
                    >
                      <div className="text-center">
                        <div className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                          {currentCard.front}
                        </div>
                        <div className="text-xl font-mono">{currentCard.back}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Controls */}
                <div className="flex justify-between items-center mt-6">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Card {currentCardIndex + 1} of {remainingCards.length}
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={prevCard}
                      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                      aria-label="Previous card"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={markAsKnown}
                      className={`px-4 py-2 rounded-lg text-sm font-medium ${
                        knownCards.includes(currentCard.id)
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900/30 hover:text-green-700 dark:hover:text-green-300'
                      }`}
                    >
                      {knownCards.includes(currentCard.id) ? 'Mastered' : 'I Know This'}
                    </button>
                    <button
                      onClick={nextCard}
                      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                      aria-label="Next card"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )
          )}

          {/* Back to Course Link */}
          <div className="text-center">
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

export default FlashcardsPage;

const styles = {
  rotateY180: {
    transform: 'rotateY(180deg)',
  },
  backface: {
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
  }
}; 