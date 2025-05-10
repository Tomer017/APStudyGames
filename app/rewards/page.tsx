'use client';

import React, { useState } from 'react';
import BaseLayout from '../../components/BaseLayout';

// Mock data for rewards and achievements
const mockAchievements = [
  {
    id: 'streak-7',
    name: 'Weekly Warrior',
    description: 'Maintain a 7-day study streak',
    icon: '🔥',
    color: 'from-amber-500 to-orange-500',
    progress: 100,
    completed: true,
    xp: 50,
    date: '2023-06-15',
  },
  {
    id: 'quiz-10',
    name: 'Quiz Master',
    description: 'Complete 10 quizzes with a score of 80% or higher',
    icon: '🏆',
    color: 'from-blue-500 to-indigo-500',
    progress: 70,
    completed: false,
    xp: 100,
    date: null,
  },
  {
    id: 'flashcards-500',
    name: 'Flashcard Fanatic',
    description: 'Study 500 flashcards',
    icon: '📚',
    color: 'from-green-500 to-teal-500',
    progress: 45,
    completed: false,
    xp: 75,
    date: null,
  },
  {
    id: 'subjects-5',
    name: 'Renaissance Scholar',
    description: 'Study at least 5 different AP subjects',
    icon: '🎓',
    color: 'from-purple-500 to-violet-500',
    progress: 80,
    completed: false,
    xp: 150,
    date: null,
  },
  {
    id: 'perfect-exam',
    name: 'Perfect Score',
    description: 'Score 100% on a practice exam',
    icon: '⭐',
    color: 'from-yellow-500 to-amber-500',
    progress: 0,
    completed: false,
    xp: 200,
    date: null,
  },
  {
    id: 'streak-30',
    name: 'Monthly Master',
    description: 'Maintain a 30-day study streak',
    icon: '🌟',
    color: 'from-red-500 to-pink-500',
    progress: 40,
    completed: false,
    xp: 250,
    date: null,
  },
];

const mockAvatarItems = [
  {
    id: 'graduation-cap',
    name: 'Graduation Cap',
    description: 'A scholarly cap for your avatar',
    type: 'hat',
    icon: '🎓',
    color: 'bg-blue-100 dark:bg-blue-900/20',
    unlocked: true,
    cost: 0,
  },
  {
    id: 'lab-coat',
    name: 'Lab Coat',
    description: 'Perfect for science experiments',
    type: 'outfit',
    icon: '🥼',
    color: 'bg-white dark:bg-gray-800',
    unlocked: true,
    cost: 100,
  },
  {
    id: 'calculator',
    name: 'Calculator',
    description: 'Essential for AP Calculus',
    type: 'accessory',
    icon: '🧮',
    color: 'bg-gray-100 dark:bg-gray-700',
    unlocked: false,
    cost: 150,
  },
  {
    id: 'microscope',
    name: 'Microscope',
    description: 'For biology enthusiasts',
    type: 'accessory',
    icon: '🔬',
    color: 'bg-green-100 dark:bg-green-900/20',
    unlocked: false,
    cost: 200,
  },
  {
    id: 'wizard-hat',
    name: 'Wizard Hat',
    description: 'For magical study sessions',
    type: 'hat',
    icon: '🧙',
    color: 'bg-purple-100 dark:bg-purple-900/20',
    unlocked: false,
    cost: 300,
  },
  {
    id: 'superhero-cape',
    name: 'Superhero Cape',
    description: 'Study with superpowers',
    type: 'outfit',
    icon: '🦸',
    color: 'bg-red-100 dark:bg-red-900/20',
    unlocked: false,
    cost: 500,
  },
];

// Mock user data
const mockUserData = {
  points: 250,
  level: 8,
  nextLevelPoints: 500,
};

// Filter options for rewards
const rewardTypes = ['All', 'Achievements', 'Avatar Items'];
const filterOptions = ['All', 'Unlocked', 'Locked'];

export default function RewardsPage() {
  const [activeTab, setActiveTab] = useState('achievements');
  const [rewardTypeFilter, setRewardTypeFilter] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  
  // Filter achievements based on selected filter
  const filteredAchievements = mockAchievements.filter(achievement => {
    if (filterStatus === 'Unlocked') return achievement.completed;
    if (filterStatus === 'Locked') return !achievement.completed;
    return true; // 'All' filter
  });
  
  // Filter avatar items based on selected filter
  const filteredAvatarItems = mockAvatarItems.filter(item => {
    if (rewardTypeFilter !== 'All' && rewardTypeFilter !== 'Avatar Items') return false;
    
    if (filterStatus === 'Unlocked') return item.unlocked;
    if (filterStatus === 'Locked') return !item.unlocked;
    return true; // 'All' filter
  });
  
  return (
    <BaseLayout>
      <div className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Rewards & <span className="gradient-text">Achievements</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Track your progress, earn achievements, and unlock customization items for your avatar.
            </p>
          </div>
          
          {/* User Stats Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="flex items-center mb-4 sm:mb-0">
                <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center text-white text-3xl mr-4">
                  👨‍🎓
                </div>
                <div>
                  <h2 className="text-xl font-bold">Level {mockUserData.level}</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {mockUserData.points} XP • {mockUserData.nextLevelPoints - mockUserData.points} XP to next level
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/3">
                <div className="flex justify-between mb-1 text-sm">
                  <span>Progress to Level {mockUserData.level + 1}</span>
                  <span>{Math.round((mockUserData.points / mockUserData.nextLevelPoints) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-primary h-2.5 rounded-full" 
                    style={{ width: `${(mockUserData.points / mockUserData.nextLevelPoints) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tabs and Filters */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 mb-8">
            <div className="flex flex-col sm:flex-row justify-between">
              {/* Tabs */}
              <div className="flex space-x-4 mb-4 sm:mb-0">
                <button
                  onClick={() => setActiveTab('achievements')}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    activeTab === 'achievements' 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  Achievements
                </button>
                <button
                  onClick={() => setActiveTab('avatar')}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    activeTab === 'avatar' 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  Avatar Items
                </button>
              </div>
              
              {/* Filters */}
              <div className="flex space-x-2">
                {activeTab === 'avatar' && (
                  <select
                    value={rewardTypeFilter}
                    onChange={(e) => setRewardTypeFilter(e.target.value)}
                    className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {rewardTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                )}
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {filterOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Achievements Tab Content */}
          {activeTab === 'achievements' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAchievements.map((achievement) => (
                <div 
                  key={achievement.id} 
                  className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden ${
                    !achievement.completed && 'opacity-75'
                  }`}
                >
                  <div className={`bg-gradient-to-r ${achievement.color} p-4 flex items-center`}>
                    <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-900 rounded-full mr-4 text-2xl">
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{achievement.name}</h3>
                      <p className="text-sm text-white/80">
                        {achievement.completed 
                          ? `Completed on ${achievement.date}` 
                          : `${achievement.progress}% Complete`
                        }
                      </p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {achievement.description}
                    </p>
                    
                    {!achievement.completed && (
                      <div className="mb-4">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                          <div 
                            className="bg-primary h-2.5 rounded-full" 
                            style={{ width: `${achievement.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-semibold text-yellow-600 dark:text-yellow-400">
                        +{achievement.xp} XP
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Avatar Items Tab Content */}
          {activeTab === 'avatar' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Available Items</h2>
                <div className="flex items-center bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-300 px-3 py-1 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">{mockUserData.points} Points</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAvatarItems.map((item) => (
                  <div 
                    key={item.id} 
                    className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden ${
                      !item.unlocked && 'opacity-75'
                    }`}
                  >
                    <div className={`${item.color} p-4 flex items-center justify-center h-32`}>
                      <div className="text-6xl">{item.icon}</div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {item.description}
                      </p>
                      
                      {item.unlocked ? (
                        <button 
                          className="w-full py-2 px-4 bg-secondary text-white rounded-lg hover:bg-secondary-light transition-colors font-medium"
                        >
                          Equip
                        </button>
                      ) : (
                        <button 
                          className={`w-full py-2 px-4 rounded-lg font-medium flex items-center justify-center ${
                            mockUserData.points >= item.cost
                              ? 'bg-primary text-white hover:bg-primary-light'
                              : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                          }`}
                          disabled={mockUserData.points < item.cost}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                          </svg>
                          Unlock for {item.cost} Points
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </BaseLayout>
  );
} 