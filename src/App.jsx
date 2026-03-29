import { useState, useRef, useEffect } from "react";

export default function App() {
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hello, how can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Auto-scroll to the bottom whenever messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");

    // Simulate backend response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "This is a demo response from backend-gpt. I am structured to look exactly like a modern LLM interface!" },
      ]);
    }, 600);
  };

  return (
    // ChatGPT Main Background Color: #212121
    <div className="flex h-screen bg-[#212121] text-[#ECECEC] font-sans overflow-hidden">
      
      {/* Sidebar: #171717 */}
      <aside className="hidden md:flex w-[260px] bg-[#171717] flex-col flex-shrink-0">
        <div className="p-3 h-full flex flex-col">
          <button className="flex items-center gap-2 rounded-lg hover:bg-[#2f2f2f] transition-colors px-3 py-2 text-sm text-[#ECECEC]">
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5v14M5 12h14"></path>
            </svg>
            New chat
          </button>
          
          <div className="mt-8 px-3 text-xs font-semibold text-gray-500 pb-2">
            Today
          </div>
          <div className="flex-1 overflow-y-auto">
             <div className="px-3 py-2 text-sm truncate rounded-lg hover:bg-[#2f2f2f] cursor-pointer text-[#ECECEC]">
                React Tailwind Setup
             </div>
          </div>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col relative min-w-0">
        {/* Simple Header */}
        <header className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 text-sm md:px-5 md:py-4">
          <div className="font-medium text-[#ECECEC] flex items-center gap-2 cursor-pointer rounded-lg hover:bg-[#2f2f2f] px-2 py-1 transition-colors">
            backend-gpt <span className="text-gray-500">3.5</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><path d="m6 9 6 6 6-6"/></svg>
          </div>
        </header>

        {/* Scrollable Messages Section */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col mx-auto max-w-3xl pb-32 pt-4 px-4 md:px-0">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex w-full mt-6 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {/* Assistant Avatar */}
                {msg.role === "assistant" && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center mr-4 mt-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                  </div>
                )}

                {/* Message Content */}
                <div
                  className={`${
                    msg.role === "user"
                      ? "bg-[#2f2f2f] text-[#ECECEC] rounded-3xl px-5 py-2.5 max-w-[70%]"
                      : "text-[#ECECEC] w-full max-w-[85%] leading-relaxed py-1"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {/* Invisible div to scroll to */}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Floating Input Area */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#212121] via-[#212121] to-transparent pt-10">
          <form 
            onSubmit={handleSend} 
            className="mx-auto max-w-3xl px-4 pb-6 md:pb-8"
          >
            {/* Input Background: #2f2f2f */}
            <div className="relative flex items-end w-full rounded-3xl bg-[#2f2f2f] border border-white/10 shadow-lg focus-within:ring-1 focus-within:ring-white/20">
              
              <button type="button" className="p-3 ml-1 text-gray-400 hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
              </button>

              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Message backend-gpt..."
                className="flex-1 max-h-52 bg-transparent py-3.5 px-2 text-base outline-none placeholder:text-gray-400"
                autoFocus
              />

              <button
                type="submit"
                disabled={!input.trim()}
                className={`mb-2 mr-2 p-2 rounded-full transition-colors ${
                  input.trim() 
                    ? "bg-white text-black hover:bg-gray-200" 
                    : "bg-[#4a4a4a] text-gray-500 cursor-not-allowed"
                }`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
              </button>
            </div>
            
            <div className="text-center text-xs text-gray-400 mt-2">
              backend-gpt can make mistakes. Consider verifying important information.
            </div>
          </form>
        </div>
      </main>
    </div>
  );
} 
