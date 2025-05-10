'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import BaseLayout from '../../../components/BaseLayout';

// Mock flashcard data
const flashcardData = {
  'bio-cells': {
    title: 'Cell Biology Fundamentals',
    subject: 'AP Biology',
    icon: '🧬',
    color: 'from-green-500 to-teal-500',
    cards: [
      {
        id: 1,
        front: 'What is the cell theory?',
        back: 'The cell theory states that: 1) All living organisms are composed of one or more cells, 2) The cell is the basic unit of life, and 3) New cells arise from pre-existing cells through cell division.'
      },
      {
        id: 2,
        front: 'What are the two main types of cells?',
        back: 'Prokaryotic and eukaryotic cells. Prokaryotic cells lack a nucleus and membrane-bound organelles (e.g., bacteria), while eukaryotic cells have a true nucleus and various membrane-bound organelles (e.g., plant and animal cells).'
      },
      {
        id: 3,
        front: 'What is the function of the plasma membrane?',
        back: 'The plasma membrane (cell membrane) forms a selective barrier around the cell, controlling what enters and exits the cell. It maintains the cell\'s internal environment and provides protection and support.'
      },
      {
        id: 4,
        front: 'What is the primary function of mitochondria?',
        back: 'Mitochondria are the "powerhouses of the cell" responsible for cellular respiration, a process that generates ATP (adenosine triphosphate), the cell\'s main energy currency.'
      },
      {
        id: 5,
        front: 'What is the endoplasmic reticulum (ER)?',
        back: 'The endoplasmic reticulum is a network of membranes within the cell. Rough ER has ribosomes on its surface and is involved in protein synthesis, while smooth ER lacks ribosomes and is involved in lipid synthesis and detoxification.'
      },
      {
        id: 6,
        front: 'What is the function of the Golgi apparatus?',
        back: 'The Golgi apparatus modifies, sorts, and packages proteins and lipids for storage in the cell or secretion outside the cell. It works closely with the endoplasmic reticulum.'
      },
      {
        id: 7,
        front: 'What is the function of lysosomes?',
        back: 'Lysosomes contain digestive enzymes that break down cellular waste, foreign materials, and damaged organelles. They are involved in cellular digestion and recycling.'
      }
    ]
  },
  // More flashcard data would be defined here for other decks
};

export default function FlashcardStudyPage({ params }: { params: { deckId: string } }) {
  const router = useRouter();
  const { deckId } = params;
  const deck = flashcardData[deckId as keyof typeof flashcardData];
  
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [studyMode, setStudyMode] = useState<'all' | 'shuffle' | 'review'>('all');
  const [cards, setCards] = useState<typeof deck.cards>([]);
  const [knownCards, setKnownCards] = useState<number[]>([]);
  const [reviewCards, setReviewCards] = useState<number[]>([]);
  const [studyComplete, setStudyComplete] = useState(false);
  
  // Initialize cards based on study mode
  useEffect(() => {
    if (!deck) return;
    
    if (studyMode === 'shuffle') {
      // Shuffle cards
      const shuffled = [...deck.cards].sort(() => Math.random() - 0.5);
      setCards(shuffled);
    } else if (studyMode === 'review') {
      // Only show cards marked for review (using mock data for demo)
      const toReview = deck.cards.filter((_, index) => reviewCards.includes(index));
      setCards(toReview.length > 0 ? toReview : deck.cards);
    } else {
      // Default: show all cards in order
      setCards(deck.cards);
    }
    
    setCurrentCardIndex(0);
    setFlipped(false);
    setStudyComplete(false);
  }, [deck, studyMode, reviewCards]);
  
  // If deck not found, show error
  if (!deck) {
    return (
      <BaseLayout>
        <div className="py-12 px-4 text-center">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-3xl font-bold mb-6">Flashcard Deck Not Found</h1>
            <p className="text-lg mb-8">
              Sorry, the flashcard deck you're looking for doesn't exist or has been removed.
            </p>
            <Link 
              href="/flashcards" 
              className="px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary-light transition-colors font-medium"
            >
              Back to Flashcards
            </Link>
          </div>
        </div>
      </BaseLayout>
    );
  }
  
  const currentCard = cards[currentCardIndex];
  
  const handleCardFlip = () => {
    setFlipped(!flipped);
  };
  
  const handleNextCard = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(prev => prev + 1);
      setFlipped(false);
    } else {
      setStudyComplete(true);
    }
  };
  
  const handlePrevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(prev => prev - 1);
      setFlipped(false);
    }
  };
  
  const markAsKnown = () => {
    const cardId = currentCard.id;
    if (!knownCards.includes(cardId)) {
      setKnownCards(prev => [...prev, cardId]);
    }
    handleNextCard();
  };
  
  const markForReview = () => {
    const cardId = currentCard.id;
    if (!reviewCards.includes(cardId)) {
      setReviewCards(prev => [...prev, cardId]);
    }
    handleNextCard();
  };
  
  // Study complete screen
  if (studyComplete) {
    const totalCards = cards.length;
    const knownCount = knownCards.length;
    const reviewCount = reviewCards.length;
    
    return (
      <BaseLayout>
        <div className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
              <div className="text-center mb-8">
                <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-r ${deck.color} flex items-center justify-center text-white text-4xl mb-4`}>
                  {deck.icon}
                </div>
                <h1 className="text-3xl font-bold mb-2">{deck.title}</h1>
                <p className="text-gray-600 dark:text-gray-300">{deck.subject}</p>
              </div>
              
              <div className="text-center mb-8">
                <div className="text-4xl font-bold mb-2 gradient-text">Study Session Complete!</div>
                <p className="text-xl">
                  You've gone through all {totalCards} flashcards in this deck.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-green-100 dark:bg-green-900/20 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{knownCount}</div>
                  <p className="text-green-800 dark:text-green-300">Cards Mastered</p>
                </div>
                <div className="bg-yellow-100 dark:bg-yellow-900/20 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">{reviewCount}</div>
                  <p className="text-yellow-800 dark:text-yellow-300">Cards for Review</p>
                </div>
                <div className="bg-blue-100 dark:bg-blue-900/20 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{totalCards - knownCount - reviewCount}</div>
                  <p className="text-blue-800 dark:text-blue-300">Cards to Learn</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => {
                    setStudyMode('review');
                    setStudyComplete(false);
                  }}
                  className="px-6 py-3 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600 transition-colors font-medium"
                >
                  Review Cards ({reviewCount})
                </button>
                <button 
                  onClick={() => {
                    setStudyMode('all');
                    setStudyComplete(false);
                  }}
                  className="px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-colors font-medium"
                >
                  Study Again
                </button>
                <Link 
                  href="/flashcards" 
                  className="px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary-light transition-colors font-medium"
                >
                  Back to Decks
                </Link>
              </div>
            </div>
          </div>
        </div>
      </BaseLayout>
    );
  }

  // Flashcard study view
  return (
    <BaseLayout>
      <div className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <div className="flex items-center mb-4 sm:mb-0">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${deck.color} flex items-center justify-center text-white text-xl mr-3`}>
                {deck.icon}
              </div>
              <div>
                <h1 className="text-xl font-bold">{deck.title}</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">{deck.subject}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <select
                value={studyMode}
                onChange={(e) => setStudyMode(e.target.value as 'all' | 'shuffle' | 'review')}
                className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Cards</option>
                <option value="shuffle">Shuffle</option>
                <option value="review">Review Cards</option>
              </select>
              <button
                onClick={() => router.push('/flashcards')}
                className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-sm"
              >
                Exit
              </button>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-6">
            <div 
              className="bg-primary h-2.5 rounded-full" 
              style={{ width: `${((currentCardIndex + 1) / cards.length) * 100}%` }}
            ></div>
          </div>
          
          {/* Flashcard */}
          <div className="mb-6">
            <div 
              className={`relative w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg cursor-pointer transition-all duration-500 ${
                flipped ? 'shadow-xl' : ''
              }`}
              style={{ perspective: '1000px', height: '300px' }}
              onClick={handleCardFlip}
            >
              <div
                className={`absolute w-full h-full rounded-xl transition-all duration-500 transform-gpu ${
                  flipped ? 'rotateY-180' : ''
                }`}
                style={{ 
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                }}
              >
                {/* Front of card */}
                <div 
                  className={`absolute w-full h-full flex items-center justify-center p-8 rounded-xl border-2 ${
                    flipped ? 'opacity-0' : 'opacity-100'
                  } transition-opacity duration-200 border-gray-200 dark:border-gray-700`}
                >
                  <div className="text-center">
                    <p className="text-xl font-medium">{currentCard.front}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">Click to reveal answer</p>
                  </div>
                </div>
                
                {/* Back of card */}
                <div 
                  className={`absolute w-full h-full flex items-center justify-center p-8 rounded-xl border-2 ${
                    flipped ? 'opacity-100' : 'opacity-0'
                  } transition-opacity duration-200 border-primary`}
                  style={{ 
                    transform: 'rotateY(180deg)',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <div className="text-center">
                    <p className="text-xl">{currentCard.back}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-2 text-sm text-gray-500 dark:text-gray-400">
              Card {currentCardIndex + 1} of {cards.length}
            </div>
          </div>
          
          {/* Card navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevCard}
              disabled={currentCardIndex === 0}
              className={`px-4 py-2 rounded-lg flex items-center ${
                currentCardIndex === 0
                  ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Previous
            </button>
            
            <div className="flex space-x-3">
              <button
                onClick={markForReview}
                className="px-5 py-2 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600 transition-colors font-medium"
              >
                Review Later
              </button>
              <button
                onClick={markAsKnown}
                className="px-5 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors font-medium"
              >
                I Know This
              </button>
            </div>
            
            <button
              onClick={handleNextCard}
              className="px-4 py-2 rounded-lg flex items-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Next
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
} 