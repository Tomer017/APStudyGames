import Link from 'next/link';
import BaseLayout from '../components/BaseLayout';

export default function Home() {
  return (
    <BaseLayout>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Make AP Exam Prep <span className="gradient-text">Fun & Effective</span>
              </h1>
              <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
                Join thousands of students using gamified learning to ace their AP exams. Interactive quizzes, flashcards, and rewards that make studying enjoyable.
              </p>
              <div className="space-x-4">
                <Link 
                  href="/signup" 
                  className="px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary-light transition-colors font-medium"
                >
                  Get Started For Free
                </Link>
                <Link 
                  href="/subjects" 
                  className="px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-colors font-medium"
                >
                  Explore Subjects
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-80 md:h-96 bg-gradient-to-r from-primary to-accent rounded-xl shadow-xl flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <div className="text-7xl font-bold mb-4">AP</div>
                  <div className="text-2xl">Study Games</div>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                <div className="text-sm text-center">
                  <div>5/5</div>
                  <div>Score</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Students Love Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary-light mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Engaging Learning</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Interactive quizzes, flashcards, and games make studying engaging and less intimidating.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 rounded-full bg-secondary-light mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Monitor your study streaks, mastery levels, and achievements to stay motivated.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 rounded-full bg-accent-light mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Earn Rewards</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Unlock avatar items, badges, and exclusive content as you study and complete challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Popular AP Subjects</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Comprehensive study materials for all AP exams, designed by educators and top students
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'AP Biology', color: 'from-green-500 to-teal-500', icon: '🧬' },
              { name: 'AP Calculus', color: 'from-blue-500 to-indigo-500', icon: '📊' },
              { name: 'AP History', color: 'from-amber-500 to-orange-500', icon: '📜' },
              { name: 'AP Physics', color: 'from-red-500 to-pink-500', icon: '⚛️' },
              { name: 'AP English', color: 'from-purple-500 to-violet-500', icon: '📚' },
              { name: 'AP Chemistry', color: 'from-yellow-500 to-amber-500', icon: '🧪' },
              { name: 'AP Psychology', color: 'from-teal-500 to-cyan-500', icon: '🧠' },
              { name: 'AP Computer Science', color: 'from-blue-500 to-cyan-500', icon: '💻' },
            ].map((subject, index) => (
              <Link 
                key={index} 
                href={`/subjects/${subject.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className={`bg-gradient-to-r ${subject.color} p-6 rounded-xl text-white shadow-md hover:shadow-lg transition-all h-full flex flex-col items-center justify-center text-center cursor-pointer`}>
                  <div className="text-4xl mb-3">{subject.icon}</div>
                  <h3 className="text-xl font-semibold">{subject.name}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/subjects"
              className="px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-colors font-medium"
            >
              View All Subjects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">What Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Alex J.',
                avatar: '👨‍🎓',
                text: "The gamification aspect really keeps me motivated. I've maintained a 30-day streak and my AP Bio scores have improved significantly!",
                score: '4/5'
              },
              {
                name: 'Sophia L.',
                avatar: '👩‍🎓',
                text: "I was struggling with AP Calculus until I found this platform. The interactive quizzes and practice exams helped me understand the concepts better.",
                score: '5/5'
              },
              {
                name: 'Marcus T.',
                avatar: '👨‍🎓',
                text: "Earning rewards while studying makes me want to continue. I've collected so many avatar items and it's fun to customize my profile.",
                score: '5/5'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-white text-2xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <div className="text-yellow-500">{testimonial.score} ★</div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ace Your AP Exams?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of students using AP Study Games to prepare effectively while having fun. Create a free account today!
          </p>
          <Link 
            href="/signup" 
            className="px-8 py-4 rounded-lg bg-white text-primary hover:bg-gray-100 transition-colors font-medium text-lg"
          >
            Start Your Free Account
          </Link>
        </div>
      </section>
    </BaseLayout>
  );
}
