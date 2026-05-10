export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-zinc-800 bg-black text-white">
      <a href="/" className="text-2xl font-bold text-blue-500">
        BoostService
      </a>

      <div className="flex gap-6 text-sm font-medium">
        <a href="/" className="hover:text-blue-400">
          Home
        </a>

        <a href="/services" className="hover:text-blue-400">
          Services
        </a>

        <a href="/login" className="hover:text-blue-400">
          Login
        </a>

        <a href="/register" className="hover:text-blue-400">
          Register
        </a>
      </div>
    </nav>
  );
}