import { useState } from "react";

export default function ChatInput({ onSend, loading }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed || loading) return;

    onSend(trimmed);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="border-t border-white/10 p-4">
      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Message backend-gpt..."
          className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-white/40"
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </form>
  );
}
