export default function DashboardPage() {
  return (
    <div className="p-10">
      <h2 className="text-4xl font-bold mb-8">
        Welcome Back 👋
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <p className="text-gray-400">
            Total Orders
          </p>

          <h3 className="text-4xl font-bold mt-2">
            0
          </h3>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <p className="text-gray-400">
            Wallet Balance
          </p>

          <h3 className="text-4xl font-bold mt-2">
            $0
          </h3>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <p className="text-gray-400">
            Active Orders
          </p>

          <h3 className="text-4xl font-bold mt-2">
            0
          </h3>
        </div>
      </div>

      <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <h3 className="text-2xl font-bold mb-6">
          Recent Orders
        </h3>

        <div className="text-gray-400">
          No recent orders found.
        </div>
      </div>
    </div>
  );
}