'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import BaseLayout from '../../components/BaseLayout';

// Mock data for the dashboard
const mockUserData = {
  name: 'Alex Johnson',
  streak: 12,
  points: 2350,
  level: 8,
  lastActive: '2023-06-12',
  avatarUrl: '👨‍🎓', // Using emoji as placeholder
};

const mockExamData = [
  { name: 'AP Biology', progress: 65, icon: '🧬' },
  { name: 'AP Calculus', progress: 42, icon: '📊' },
  { name: 'AP History', progress: 78, icon: '📜' },
  { name: 'AP Physics', progress: 23, icon: '⚛️' },
];

const mockRecentActivities = [
  { type: 'quiz', subject: 'AP Biology', score: '8/10', date: '2 days ago' },
  { type: 'flashcard', subject: 'AP Calculus', completed: 25, date: '3 days ago' },
  { type: 'exam', subject: 'AP History', score: '85%', date: '1 week ago' },
];

const mockLeaderboard = [
  { name: 'Emily Chen', points: 3850, rank: 1, avatar: '👩‍🎓' },
  { name: 'Alex Johnson', points: 2350, rank: 2, avatar: '👨‍🎓' },
  { name: 'Sam Rodriguez', points: 2100, rank: 3, avatar: '👨‍🎓' },
  { name: 'Taylor Kim', points: 1950, rank: 4, avatar: '👩‍🎓' },
  { name: 'Jordan Smith', points: 1820, rank: 5, avatar: '👨‍🎓' },
];

const mockRewards = [
  { name: 'Gold Star Badge', icon: '⭐', unlocked: true },
  { name: 'Science Whiz', icon: '🔬', unlocked: true },
  { name: 'Math Genius', icon: '🧮', unlocked: false },
  { name: 'History Buff', icon: '🏛️', unlocked: true },
];

const currentDate = new Date();
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const currentMonth = monthNames[currentDate.getMonth()];

// Generate mock streak calendar data
const generateCalendarData = () => {
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const data = [];
  
  // Start with some randomized historical data
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
    
    // Don't show future dates
    if (date > currentDate) {
      data.push({ day: i, status: 'future' });
      continue;
    }
    
    // Random statuses for past dates, with higher chance of 'completed' to show a good streak
    const rand = Math.random();
    let status;
    if (rand > 0.7) {
      status = 'missed';
    } else {
      status = 'completed';
    }
    
    data.push({ day: i, status });
  }
  
  return data;
};

export default function Dashboard() {
  const [calendarData] = useState(generateCalendarData());
  
  return (
    <BaseLayout>
      <div className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Welcome Section with Streak */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center text-white text-3xl mr-4">
                  {mockUserData.avatarUrl}
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Welcome back, {mockUserData.name}!</h1>
                  <p className="text-gray-600 dark:text-gray-300">
                    Level {mockUserData.level} • {mockUserData.points} XP
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex flex-col items-center mr-8">
                  <div className="text-3xl font-bold text-primary">{mockUserData.streak}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Day Streak</div>
                </div>
                <Link 
                  href="/study" 
                  className="px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary-light transition-colors font-medium"
                >
                  Start Studying
                </Link>
              </div>
            </div>
          </div>
          
          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Progress by Subject */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold mb-6">Your Subjects</h2>
                <div className="space-y-4">
                  {mockExamData.map((exam, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center text-xl mr-4">
                        {exam.icon}
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{exam.name}</span>
                          <span className="text-sm">{exam.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                          <div 
                            className="bg-primary h-2.5 rounded-full" 
                            style={{ width: `${exam.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link 
                    href="/subjects" 
                    className="text-primary font-medium hover:text-primary-light flex items-center"
                  >
                    Browse All Subjects
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Streak Calendar */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Study Streak - {currentMonth}</h2>
                <div className="grid grid-cols-7 gap-1 text-center">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                    <div key={index} className="text-xs font-medium text-gray-500 dark:text-gray-400 py-1">
                      {day}
                    </div>
                  ))}
                  
                  {/* Fill in empty cells for the first day of the month */}
                  {Array.from({ length: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay() }).map((_, index) => (
                    <div key={`empty-${index}`} className="h-8"></div>
                  ))}
                  
                  {/* Calendar days */}
                  {calendarData.map((day, index) => (
                    <div 
                      key={index} 
                      className={`h-8 w-8 rounded-full flex items-center justify-center text-xs ${
                        day.status === 'completed' ? 'bg-primary text-white' :
                        day.status === 'missed' ? 'bg-gray-200 dark:bg-gray-700 text-gray-500' :
                        'text-gray-400'
                      } ${day.day === currentDate.getDate() ? 'ring-2 ring-offset-2 ring-primary' : ''}`}
                    >
                      {day.status !== 'future' ? day.day : ''}
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                    <span className="text-gray-600 dark:text-gray-300">Studied</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gray-200 dark:bg-gray-700 rounded-full mr-2"></div>
                    <span className="text-gray-600 dark:text-gray-300">Missed</span>
                  </div>
                </div>
              </div>
              
              {/* Recent Activity */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  {mockRecentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start border-b border-gray-100 dark:border-gray-700 last:border-0 pb-4 last:pb-0">
                      <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-white mr-4">
                        {activity.type === 'quiz' ? 'Q' : activity.type === 'flashcard' ? 'F' : 'E'}
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                          <h3 className="font-medium">
                            {activity.type === 'quiz' ? 'Completed Quiz' : 
                              activity.type === 'flashcard' ? 'Studied Flashcards' : 'Practice Exam'}
                          </h3>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{activity.date}</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                          {activity.subject} • 
                          {activity.type === 'flashcard' ? ` ${activity.completed} cards` : ` Score: ${activity.score}`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Link href="/activity" className="text-primary font-medium hover:text-primary-light">
                    View All Activity
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-8">
              {/* Leaderboard */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Leaderboard</h2>
                <div className="space-y-3">
                  {mockLeaderboard.map((user, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center p-2 rounded-lg ${user.name === mockUserData.name ? 'bg-primary/10' : ''}`}
                    >
                      <div className="w-8 h-8 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full mr-2 text-sm">
                        {user.rank}
                      </div>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-lg mr-3">
                        {user.avatar}
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium text-sm">{user.name}</h3>
                      </div>
                      <div className="text-sm font-semibold">
                        {user.points} XP
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Link href="/leaderboard" className="text-primary font-medium hover:text-primary-light">
                    View Full Leaderboard
                  </Link>
                </div>
              </div>
              
              {/* Rewards & Achievements */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Rewards & Achievements</h2>
                <div className="grid grid-cols-2 gap-3">
                  {mockRewards.map((reward, index) => (
                    <div 
                      key={index} 
                      className={`p-3 border rounded-lg flex flex-col items-center text-center ${
                        reward.unlocked 
                          ? 'border-primary dark:border-primary-light'
                          : 'border-gray-200 dark:border-gray-700 opacity-50'
                      }`}
                    >
                      <div className="text-3xl mb-2">{reward.icon}</div>
                      <h3 className="text-sm font-medium">{reward.name}</h3>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {reward.unlocked ? 'Unlocked' : 'Locked'}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Link href="/rewards" className="text-primary font-medium hover:text-primary-light">
                    View All Rewards
                  </Link>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <Link 
                    href="/quizzes" 
                    className="flex items-center p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    Take a Quiz
                  </Link>
                  <Link 
                    href="/flashcards" 
                    className="flex items-center p-3 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    Study Flashcards
                  </Link>
                  <Link 
                    href="/practice-exams" 
                    className="flex items-center p-3 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                    Practice Exam
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
} 