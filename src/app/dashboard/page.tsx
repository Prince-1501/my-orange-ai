import { getServerSession } from 'next-auth';
import Link from 'next/link';

export default async function Dashboard() {
  const session = await getServerSession();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">
            Current Streak: <span className="text-orange-600 font-semibold">5 days</span>
          </span>
          <Link
            href="/dashboard/quiz"
            className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
          >
            Start Daily Practice
          </Link>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-orange-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Physics</h3>
          <div className="flex justify-between items-center">
            <span className="text-3xl font-bold text-orange-600">75%</span>
            <div className="w-16 h-16 relative">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#F97316"
                  strokeWidth="3"
                  strokeDasharray="75, 100"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Chemistry</h3>
          <div className="flex justify-between items-center">
            <span className="text-3xl font-bold text-orange-600">60%</span>
            <div className="w-16 h-16 relative">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#F97316"
                  strokeWidth="3"
                  strokeDasharray="60, 100"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Mathematics</h3>
          <div className="flex justify-between items-center">
            <span className="text-3xl font-bold text-orange-600">85%</span>
            <div className="w-16 h-16 relative">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#F97316"
                  strokeWidth="3"
                  strokeDasharray="85, 100"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Biology</h3>
          <div className="flex justify-between items-center">
            <span className="text-3xl font-bold text-orange-600">45%</span>
            <div className="w-16 h-16 relative">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#F97316"
                  strokeWidth="3"
                  strokeDasharray="45, 100"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Doubts</h3>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <p className="text-gray-600">What is Newton's Third Law?</p>
              <p className="text-sm text-gray-500">Physics • 2 hours ago</p>
            </div>
            <div className="border-b pb-4">
              <p className="text-gray-600">Explain chemical bonding in simple terms</p>
              <p className="text-sm text-gray-500">Chemistry • 5 hours ago</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Quiz Results</h3>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-900">Physics Quiz</p>
                  <p className="text-sm text-gray-500">Mechanics • 1 day ago</p>
                </div>
                <span className="text-orange-600 font-semibold">8/10</span>
              </div>
            </div>
            <div className="border-b pb-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-900">Chemistry Quiz</p>
                  <p className="text-sm text-gray-500">Organic Chemistry • 2 days ago</p>
                </div>
                <span className="text-orange-600 font-semibold">7/10</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/dashboard/chat"
          className="bg-orange-50 rounded-lg p-6 hover:bg-orange-100 transition"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Ask a Doubt</h3>
          <p className="text-gray-600">Get instant help with your questions in Hindi or English</p>
        </Link>
        <Link
          href="/dashboard/notes"
          className="bg-orange-50 rounded-lg p-6 hover:bg-orange-100 transition"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Generate Notes</h3>
          <p className="text-gray-600">Get AI-generated notes for any topic</p>
        </Link>
        <Link
          href="/dashboard/quiz"
          className="bg-orange-50 rounded-lg p-6 hover:bg-orange-100 transition"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Practice MCQs</h3>
          <p className="text-gray-600">Test your knowledge with chapter-wise MCQs</p>
        </Link>
      </div>
    </div>
  );
} 