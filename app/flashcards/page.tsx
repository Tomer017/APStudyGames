'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import BaseLayout from '../../components/BaseLayout';

// Mock flashcard decks data
const mockDecks = [
  {
    id: 'bio-cells',
    title: 'Cell Biology Fundamentals',
    subject: 'AP Biology',
    icon: '🧬',
    cards: 32,
    mastery: 65,
    lastStudied: '3 days ago',
    color: 'from-green-500 to-teal-500',
  },
  {
    id: 'calc-limits',
    title: 'Limits and Continuity',
    subject: 'AP Calculus',
    icon: '📊',
    cards: 24,
    mastery: 42,
    lastStudied: '1 week ago',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    id: 'hist-revolution',
    title: 'American Revolution',
    subject: 'AP US History',
    icon: '📜',
    cards: 40,
    mastery: 78,
    lastStudied: '2 days ago',
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 'phys-mechanics',
    title: 'Classical Mechanics',
    subject: 'AP Physics',
    icon: '⚛️',
    cards: 28,
    mastery: 23,
    lastStudied: 'Never',
    color: 'from-red-500 to-pink-500',
  },
  {
    id: 'chem-periodic',
    title: 'Periodic Table & Elements',
    subject: 'AP Chemistry',
    icon: '🧪',
    cards: 36,
    mastery: 52,
    lastStudied: '5 days ago',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    id: 'psych-brain',
    title: 'Brain Structure & Function',
    subject: 'AP Psychology',
    icon: '🧠',
    cards: 30,
    mastery: 45,
    lastStudied: '1 day ago',
    color: 'from-teal-500 to-cyan-500',
  },
];

// Filter options
const subjects = ['All Subjects', 'AP Biology', 'AP Calculus', 'AP US History', 'AP Physics', 'AP Chemistry', 'AP Psychology'];
const sortOptions = ['Recently Studied', 'Mastery (Low to High)', 'Mastery (High to Low)', 'Number of Cards'];

export default function FlashcardsPage() {
  const [selectedSubject, setSelectedSubject] = useState('All Subjects');
  const [sortBy, setSortBy] = useState('Recently Studied');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter decks based on selected filters and search query
  let filteredDecks = mockDecks.filter(deck => {
    const matchesSubject = selectedSubject === 'All Subjects' || deck.subject === selectedSubject;
    const matchesSearch = deck.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          deck.subject.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSubject && matchesSearch;
  });
  
  // Sort decks based on sort option
  filteredDecks = [...filteredDecks].sort((a, b) => {
    switch (sortBy) {
      case 'Recently Studied':
        // This is a simple mock sort - in a real app would compare actual dates
        if (a.lastStudied === 'Never') return 1;
        if (b.lastStudied === 'Never') return -1;
        
        const aTime = a.lastStudied.includes('day') ? parseInt(a.lastStudied) : 7;
        const bTime = b.lastStudied.includes('day') ? parseInt(b.lastStudied) : 7;
        return aTime - bTime;
        
      case 'Mastery (Low to High)':
        return a.mastery - b.mastery;
        
      case 'Mastery (High to Low)':
        return b.mastery - a.mastery;
        
      case 'Number of Cards':
        return b.cards - a.cards;
        
      default:
        return 0;
    }
  });
  
  return (
    <BaseLayout>
      <div className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              AP <span className="gradient-text">Flashcards</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Study with our comprehensive flashcard decks designed to help you memorize key concepts for your AP exams.
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
                <label htmlFor="sort-by" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Sort By
                </label>
                <select
                  id="sort-by"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {sortOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="search-decks" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Search
                </label>
                <input
                  type="text"
                  id="search-decks"
                  placeholder="Search flashcard decks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>
          
          {/* Create New Deck Button */}
          <div className="flex justify-end mb-6">
            <Link 
              href="/flashcards/create" 
              className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary-light transition-colors font-medium flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Create New Deck
            </Link>
          </div>
          
          {/* Flashcard Decks Grid */}
          {filteredDecks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDecks.map((deck) => (
                <Link 
                  key={deck.id} 
                  href={`/flashcards/${deck.id}`}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden flex flex-col h-full border border-gray-100 dark:border-gray-700"
                >
                  <div className={`bg-gradient-to-r ${deck.color} p-4 flex items-center`}>
                    <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-900 rounded-full mr-4 text-2xl">
                      {deck.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{deck.title}</h3>
                      <p className="text-sm text-white/80">{deck.subject}</p>
                    </div>
                  </div>
                  <div className="p-5 flex-grow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                        </svg>
                        <span>{deck.cards} cards</span>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {deck.lastStudied === 'Never' ? 'Never studied' : `Studied ${deck.lastStudied}`}
                      </div>
                    </div>
                    
                    <div className="mb-2">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Mastery</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{deck.mastery}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div 
                          className={`h-2.5 rounded-full ${
                            deck.mastery < 30 ? 'bg-red-500' :
                            deck.mastery < 70 ? 'bg-yellow-500' :
                            'bg-green-500'
                          }`}
                          style={{ width: `${deck.mastery}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                    <div className="flex items-center text-sm text-primary font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Study Now
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No flashcard decks found</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We couldn't find any flashcard decks matching your search criteria. Try adjusting your filters or create a new deck.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <button 
                  onClick={() => {
                    setSelectedSubject('All Subjects');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors"
                >
                  Reset Filters
                </button>
                <Link 
                  href="/flashcards/create" 
                  className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-light transition-colors"
                >
                  Create New Deck
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </BaseLayout>
  );
} 