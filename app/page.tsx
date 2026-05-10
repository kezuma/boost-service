export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <h2 className="text-6xl font-bold mb-6">
          Grow Your Social Presence
        </h2>

        <p className="text-gray-400 text-xl max-w-2xl mb-10">
          Fast, modern, and professional social media marketing services.
        </p>

        <a
          href="/services"
          className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold transition"
        >
          Get Started
        </a>
      </section>
    </main>
  );
}