import MessageBubble from "./MessageBubble";

export default function ChatWindow({ messages, loading }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6">
      <div className="mx-auto max-w-3xl">
        {messages.map((msg, index) => (
          <MessageBubble key={index} role={msg.role} text={msg.text} />
        ))}

        {loading && (
          <div className="text-sm text-white/50 mt-2">Thinking...</div>
        )}
      </div>
    </div>
  );
}
