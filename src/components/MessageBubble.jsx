export default function MessageBubble({ role, text }) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-6 ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-white/10 text-white border border-white/10"
        }`}
      >
        {text}
      </div>
    </div>
  );
}
