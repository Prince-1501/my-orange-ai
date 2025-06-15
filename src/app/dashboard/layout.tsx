'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-600"></div>
      </div>
    );
  }

  if (!session) {
    redirect('/auth/signin');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/dashboard" className="text-2xl font-bold text-orange-600">
              My Orange AI
            </Link>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome, {session.user?.name}</span>
              <Link
                href="/api/auth/signout"
                className="text-gray-600 hover:text-orange-600"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <nav className="space-y-2">
                <Link
                  href="/dashboard"
                  className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-orange-50 hover:text-orange-600"
                >
                  📊 Overview
                </Link>
                <Link
                  href="/dashboard/chat"
                  className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-orange-50 hover:text-orange-600"
                >
                  💬 AI Chat
                </Link>
                <Link
                  href="/dashboard/notes"
                  className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-orange-50 hover:text-orange-600"
                >
                  📝 Notes
                </Link>
                <Link
                  href="/dashboard/quiz"
                  className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-orange-50 hover:text-orange-600"
                >
                  ❓ Practice MCQs
                </Link>
                <Link
                  href="/dashboard/progress"
                  className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-orange-50 hover:text-orange-600"
                >
                  📈 Progress
                </Link>
                <Link
                  href="/dashboard/doubts"
                  className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-orange-50 hover:text-orange-600"
                >
                  ❔ Doubt History
                </Link>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 