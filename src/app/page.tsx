'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleStartLearning = () => {
    router.push('/auth/signin');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            India's First Hinglish AI Study Buddy
            <span className="block text-orange-600 mt-2">for JEE/NEET Aspirants</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Ask doubts, get notes & MCQs — in Hindi or English. Perfect for Class 11 & 12 students from Bihar, UP, and Jharkhand.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={handleStartLearning}
              className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition"
            >
              Start Learning
            </button>
            <button className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our AI Study Buddy?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-orange-50">
              <div className="text-orange-600 text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Personalized Learning</h3>
              <p className="text-gray-600">Get customized study plans and practice questions based on your strengths and weaknesses.</p>
            </div>
            <div className="p-6 rounded-xl bg-orange-50">
              <div className="text-orange-600 text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-2">Bilingual Support</h3>
              <p className="text-gray-600">Learn in Hindi or English - whatever makes you comfortable. Perfect for Hindi medium students.</p>
            </div>
            <div className="p-6 rounded-xl bg-orange-50">
              <div className="text-orange-600 text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Content</h3>
              <p className="text-gray-600">Access detailed notes, MCQs, and doubt-solving for all JEE/NEET subjects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-orange-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Ace Your Exams?</h2>
          <p className="text-xl mb-8">Join thousands of students who are already learning smarter with our AI Study Buddy.</p>
          <button 
            onClick={handleStartLearning}
            className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition"
          >
            Get Started Now
          </button>
        </div>
      </section>
    </main>
  );
}
