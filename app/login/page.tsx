export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-2">Login</h1>

        <p className="text-gray-400 mb-8">
          Welcome back to BoostService.
        </p>

        <form className="space-y-5">
          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl bg-black border border-zinc-700 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-xl bg-black border border-zinc-700 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="button"
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold transition"
          >
            Login
          </button>
        </form>

        <p className="text-gray-400 text-sm mt-6 text-center">
          Don&apos;t have an account?{" "}
          <a href="/register" className="text-blue-400 hover:underline">
            Register
          </a>
        </p>
      </div>
    </main>
  );
}