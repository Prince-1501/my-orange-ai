import ChatInterface from '@/components/ChatInterface';

export default function StudyBuddy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Your AI Study Buddy
            </h1>
            <p className="text-xl text-gray-600">
              Ask any question about Physics, Chemistry, Mathematics, or Biology in Hindi or English
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Chat Interface */}
            <div className="md:col-span-2">
              <ChatInterface />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full text-left px-4 py-2 rounded-lg bg-orange-50 text-orange-600 hover:bg-orange-100">
                    📝 Get Notes
                  </button>
                  <button className="w-full text-left px-4 py-2 rounded-lg bg-orange-50 text-orange-600 hover:bg-orange-100">
                    ❓ Practice MCQs
                  </button>
                  <button className="w-full text-left px-4 py-2 rounded-lg bg-orange-50 text-orange-600 hover:bg-orange-100">
                    📊 Track Progress
                  </button>
                </div>
              </div>

              {/* Study Tips */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Study Tips</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Practice previous year questions daily
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Focus on NCERT concepts first
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Take regular mock tests
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Revise formulas weekly
                  </li>
                </ul>
              </div>

              {/* Progress Stats */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Your Progress</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600">Physics</span>
                      <span className="text-orange-600">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600">Chemistry</span>
                      <span className="text-orange-600">60%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600">Mathematics</span>
                      <span className="text-orange-600">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 