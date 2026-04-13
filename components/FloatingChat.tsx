import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquareText, X, Send, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import Markdown from 'react-markdown';

// Initialize Gemini API
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

const FloatingChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am the ComplyAnto Compliance Assistant. How can I help you with AML/BSA compliance today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Keep the chat session in a ref so it persists across renders
  const chatRef = useRef<any>(null);

  const userMessageCount = messages.filter(m => m.role === 'user').length;
  const isLimitReached = userMessageCount >= 10;

  useEffect(() => {
    if (!chatRef.current) {
      chatRef.current = ai.chats.create({
        model: "gemini-3.1-flash-preview",
        config: {
          systemInstruction: "You are a helpful, professional AI assistant for ComplyAnto, a premier regulatory consulting group specializing in AML/CFT governance, risk assessments, and compliance advisory for MSBs and fintechs. Answer questions related to AML compliance, BSA consulting, and ComplyAnto's services. Be concise and professional.",
        }
      });
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading || isLimitReached) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      const response = await chatRef.current.sendMessage({ message: userText });
      setMessages(prev => [...prev, { role: 'model', text: response.text }]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'Sorry, I encountered an error. Please try again later.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 md:right-8 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] bg-navy-900 border border-white/10 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-navy-950 p-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <MessageSquareText className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">ComplyAnto Assistant</h3>
                  <p className="text-cyan-400 text-[10px] uppercase tracking-widest">Online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                      msg.role === 'user' 
                        ? 'bg-cyan-500 text-navy-950 rounded-tr-sm' 
                        : 'bg-navy-800 text-slate-200 border border-white/5 rounded-tl-sm'
                    }`}
                  >
                    {msg.role === 'user' ? (
                      msg.text
                    ) : (
                      <div className="prose prose-invert prose-sm max-w-none prose-p:leading-relaxed prose-pre:bg-navy-950 prose-pre:border prose-pre:border-white/10">
                        <Markdown>{msg.text}</Markdown>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-navy-800 border border-white/5 p-3 rounded-2xl rounded-tl-sm flex items-center space-x-2">
                    <Loader2 className="w-4 h-4 text-cyan-400 animate-spin" />
                    <span className="text-slate-400 text-xs">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-navy-950 border-t border-white/10">
              {isLimitReached ? (
                <div className="flex flex-col items-center justify-center text-center space-y-2 py-1">
                  <p className="text-slate-400 text-xs">Chat limit reached (10/10).</p>
                  <Link 
                    to="/contact" 
                    onClick={() => setIsOpen(false)}
                    className="w-full py-2.5 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 rounded-xl text-sm font-bold transition-colors flex items-center justify-center"
                  >
                    Contact Us to Continue
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about AML compliance..."
                    className="flex-1 bg-navy-800 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="p-2.5 bg-cyan-500 hover:bg-cyan-400 text-navy-950 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 p-4 bg-cyan-500 hover:bg-cyan-400 text-navy-950 rounded-full shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] transition-all duration-300 group flex items-center justify-center"
        aria-label={isOpen ? "Close Chat" : "Chat with a ComplyAnto Assistant"}
      >
        {isOpen ? <X className="w-8 h-8" /> : <MessageSquareText className="w-8 h-8" />}
        
        {/* Tooltip */}
        {!isOpen && (
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-navy-800 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-white/10 shadow-xl pointer-events-none">
            Chat with a ComplyAnto Assistant
          </span>
        )}
      </motion.button>
    </>
  );
};

export default FloatingChat;
