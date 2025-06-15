import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from './providers';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Orange AI - JEE/NEET Study Buddy",
  description: "India's First Hinglish AI Study Buddy for JEE/NEET Aspirants. Ask doubts, get notes & MCQs in Hindi or English.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <nav className="bg-white shadow-sm">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-orange-600">My Orange AI</span>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                  <a href="#" className="text-gray-600 hover:text-orange-600">Home</a>
                  <a href="#" className="text-gray-600 hover:text-orange-600">Features</a>
                  <a href="#" className="text-gray-600 hover:text-orange-600">Pricing</a>
                  <a href="#" className="text-gray-600 hover:text-orange-600">About</a>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {children}

          <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">My Orange AI</h3>
                  <p className="text-gray-400">Your personal AI study buddy for JEE/NEET preparation.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Subjects</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white">Physics</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Chemistry</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Mathematics</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Biology</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Contact</h4>
                  <ul className="space-y-2">
                    <li className="text-gray-400">Email: support@myorangeai.com</li>
                    <li className="text-gray-400">Phone: +91 1234567890</li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2024 My Orange AI. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
