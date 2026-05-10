export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-800 p-6">
        <h1 className="text-3xl font-bold text-red-500 mb-10">
          Admin Panel
        </h1>

        <nav className="flex flex-col gap-4">
          <a
            href="/admin"
            className="bg-zinc-900 hover:bg-zinc-800 px-4 py-3 rounded-xl"
          >
            Dashboard
          </a>

          <a
            href="/admin/orders"
            className="bg-zinc-900 hover:bg-zinc-800 px-4 py-3 rounded-xl"
          >
            Orders
          </a>

          <a
            href="/admin/services"
            className="bg-zinc-900 hover:bg-zinc-800 px-4 py-3 rounded-xl"
          >
            Services
          </a>

          <a
            href="/admin/users"
            className="bg-zinc-900 hover:bg-zinc-800 px-4 py-3 rounded-xl"
          >
            Users
          </a>

          <a
            href="/admin/tickets"
            className="bg-zinc-900 hover:bg-zinc-800 px-4 py-3 rounded-xl"
          >
            Tickets
          </a>

          <a
            href="/"
            className="bg-red-600 hover:bg-red-700 px-4 py-3 rounded-xl mt-10"
          >
            Logout
          </a>
        </nav>
      </aside>

      {/* Content */}
      <section className="flex-1 p-10">
        {children}
      </section>
    </main>
  );
}