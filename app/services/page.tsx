export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        Our Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h2 className="text-2xl font-bold mb-4">
            TikTok Growth
          </h2>

          <p className="text-gray-400">
            Fast TikTok engagement and promotion services.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h2 className="text-2xl font-bold mb-4">
            Instagram Growth
          </h2>

          <p className="text-gray-400">
            Instagram reels, likes, followers, and engagement.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h2 className="text-2xl font-bold mb-4">
            YouTube Promotion
          </h2>

          <p className="text-gray-400">
            YouTube Shorts views and subscriber promotion.
          </p>
        </div>
      </div>
    </main>
  );
}