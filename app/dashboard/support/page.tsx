export default function SupportPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">Support Center</h1>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">
          Create Support Ticket
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-xl bg-black border border-zinc-700 px-4 py-3 outline-none focus:border-blue-500"
          />

          <textarea
            placeholder="Describe your issue..."
            rows={6}
            className="w-full rounded-xl bg-black border border-zinc-700 px-4 py-3 outline-none focus:border-blue-500"
          />

          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold">
            Submit Ticket
          </button>
        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">
          Previous Tickets
        </h2>

        <p className="text-gray-400">
          No support tickets yet.
        </p>
      </div>
    </main>
  );
}