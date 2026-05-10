export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-black text-white flex">
      <aside className="w-64 border-r border-zinc-800 p-6">
        <h1 className="text-3xl font-bold text-blue-500 mb-10">
          BoostService
        </h1>

        <nav className="flex flex-col gap-4">
          <a href="/dashboard" className="bg-zinc-900 hover:bg-zinc-800 px-4 py-3 rounded-xl">
            Dashboard
          </a>

          <a href="/dashboard/new-order" className="bg-zinc-900 hover:bg-zinc-800 px-4 py-3 rounded-xl">
            New Order
          </a>

          <a href="/dashboard/orders" className="bg-zinc-900 hover:bg-zinc-800 px-4 py-3 rounded-xl">
            Orders
          </a>

          <a href="/dashboard/wallet" className="bg-zinc-900 hover:bg-zinc-800 px-4 py-3 rounded-xl">
            Wallet
          </a>

          <a href="/dashboard/support" className="bg-zinc-900 hover:bg-zinc-800 px-4 py-3 rounded-xl">
            Support
          </a>

          <a href="/" className="bg-red-600 hover:bg-red-700 px-4 py-3 rounded-xl mt-10">
            Logout
          </a>
        </nav>
      </aside>

      <section className="flex-1">{children}</section>
    </main>
  );
}