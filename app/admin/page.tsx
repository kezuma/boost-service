export default function AdminPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <p className="text-gray-400">
            Total Users
          </p>

          <h2 className="text-4xl font-bold mt-2">
            0
          </h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <p className="text-gray-400">
            Total Orders
          </p>

          <h2 className="text-4xl font-bold mt-2">
            0
          </h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <p className="text-gray-400">
            Revenue
          </p>

          <h2 className="text-4xl font-bold mt-2">
            $0
          </h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <p className="text-gray-400">
            Open Tickets
          </p>

          <h2 className="text-4xl font-bold mt-2">
            0
          </h2>
        </div>
      </div>
    </div>
  );
}