'use client';

import { useState } from 'react';

interface ThoughtItem {
  id: number;
  thought: string;
  encouragement: string;
  timestamp: Date;
}

const encouragements = [
  "당신은 충분히 훌륭해요! 💪",
  "오늘도 최선을 다하고 있는 당신이 자랑스러워요! ✨",
  "힘든 시간도 지나갈 거예요. 함께 해요! 🌟",
  "당신의 노력이 언젠가 빛을 발할 거예요! 🌈",
  "지금 이 순간의 당신이 최고예요! 🎉",
  "작은 발걸음도 큰 변화의 시작이에요! 🚀",
  "당신은 생각보다 훨씬 강한 사람이에요! 💎",
  "오늘 하루도 잘 견뎌냈어요. 고생했어요! 🌻"
];

export default function Home() {
  const [thought, setThought] = useState('');
  const [thoughts, setThoughts] = useState<ThoughtItem[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [currentEncouragement, setCurrentEncouragement] = useState('');

  const getRandomEncouragement = () => {
    return encouragements[Math.floor(Math.random() * encouragements.length)];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (thought.trim()) {
      const encouragement = getRandomEncouragement();
      const newThought: ThoughtItem = {
        id: Date.now(),
        thought: thought.trim(),
        encouragement,
        timestamp: new Date()
      };
      
      setThoughts(prev => [newThought, ...prev]);
      setCurrentEncouragement(encouragement);
      setShowModal(true);
      setThought('');
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            마음의 위로
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            당신의 생각을 나누고 따뜻한 격려를 받아보세요
          </p>
        </div>

        {/* Input Form */}
        <div className="max-w-lg mx-auto mb-12">
          <div 
            className="relative p-8 rounded-3xl transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl group"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 16px 40px 0 rgba(0, 0, 0, 0.1)'
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center">
                <label 
                  htmlFor="thought" 
                  className="block text-xl font-semibold text-gray-800 dark:text-white mb-6"
                  style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                >
                  지금 어떤 생각을 하고 계신가요?
                </label>
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  id="thought"
                  value={thought}
                  onChange={(e) => setThought(e.target.value)}
                  placeholder="자유롭게 당신의 생각을 적어보세요..."
                  className="w-full px-6 py-4 rounded-full focus:ring-2 focus:ring-purple-400 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-300 transition-all duration-200 text-lg outline-none border-0"
                  style={{
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.1)'
                  }}
                  required
                />
              </div>
              
              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="relative px-8 py-3 rounded-full font-medium text-sm tracking-wide overflow-hidden group transition-all duration-300 hover:shadow-xl transform hover:scale-105 active:scale-95"
                  style={{
                    background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.9), rgba(236, 72, 153, 0.9), rgba(59, 130, 246, 0.9))',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 8px 32px 0 rgba(138, 43, 226, 0.3)',
                    color: 'white',
                    textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                  }}
                >
                  <span className="relative z-10 font-semibold">
                    격려받기 ✨
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Thoughts List */}
        {thoughts.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
              나눠진 생각들
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {thoughts.map((item) => (
                <div
                  key={item.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="mb-4">
                    <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                      {item.thought}
                    </p>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-center bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3">
                      {item.encouragement}
                    </p>
                  </div>
                  <div className="mt-3 text-xs text-gray-500 dark:text-gray-400 text-center">
                    {item.timestamp.toLocaleString('ko-KR')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-md w-full transform animate-pulse">
              <div className="text-center">
                <div className="text-6xl mb-4">🌟</div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  격려의 메시지
                </h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-6">
                  {currentEncouragement}
                </p>
                <button
                  onClick={closeModal}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 transform hover:scale-105"
                >
                  고마워요 ❤️
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
