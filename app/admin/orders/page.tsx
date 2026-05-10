export default function AdminOrdersPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">Manage Orders</h1>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <div className="grid grid-cols-5 text-gray-400 border-b border-zinc-800 pb-3 mb-3">
          <p>Order ID</p>
          <p>Service</p>
          <p>Quantity</p>
          <p>Status</p>
          <p>Price</p>
        </div>

        <div className="grid grid-cols-5 py-3">
          <p>#1001</p>
          <p>TikTok Followers</p>
          <p>1000</p>
          <p className="text-yellow-400">Pending</p>
          <p>$3.00</p>
        </div>
      </div>
    </main>
  );
}