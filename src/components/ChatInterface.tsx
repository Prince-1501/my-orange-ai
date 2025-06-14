import { useState } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  language: 'hindi' | 'english';
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [language, setLanguage] = useState<'hindi' | 'english'>('english');

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: input,
      sender: 'user',
      language,
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // TODO: Add API call to AI backend here
    // For now, we'll just simulate a response
    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: 'This is a simulated AI response. The actual AI integration will be implemented soon!',
        sender: 'ai',
        language,
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-lg">
      {/* Language Toggle */}
      <div className="p-4 border-b">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setLanguage('english')}
            className={`px-4 py-2 rounded-full ${
              language === 'english'
                ? 'bg-orange-600 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage('hindi')}
            className={`px-4 py-2 rounded-full ${
              language === 'hindi'
                ? 'bg-orange-600 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            हिंदी
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(message => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.sender === 'user'
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t">
        <div className="flex space-x-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={language === 'english' ? 'Ask your question...' : 'अपना प्रश्न पूछें...'}
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
          <button
            onClick={handleSend}
            className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
} 