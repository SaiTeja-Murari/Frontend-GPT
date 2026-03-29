export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-white/10 bg-[#111318] p-4 hidden md:flex md:flex-col">
      <div className="text-xl font-bold mb-6">frontend-gpt</div>

      <button className="w-full rounded-xl bg-white/10 px-4 py-3 text-left hover:bg-white/15">
        + New chat
      </button>

      <div className="mt-6 text-sm text-white/60">
        Chat history can go here later.
      </div>
    </aside>
  );
}
