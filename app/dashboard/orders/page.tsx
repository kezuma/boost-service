export default function OrdersPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">Order History</h1>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">Your Orders</h2>

        <div className="text-gray-400">
          No orders yet.
        </div>
      </div>
    </main>
  );
}