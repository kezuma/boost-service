export default function AdminServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        Manage Services
      </h1>

      {/* Add Service */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6">
          Add New Service
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Service Name"
            className="rounded-xl bg-black border border-zinc-700 px-4 py-3 outline-none focus:border-blue-500"
          />

          <input
            type="number"
            placeholder="Price per 1000"
            className="rounded-xl bg-black border border-zinc-700 px-4 py-3 outline-none focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="Category"
            className="rounded-xl bg-black border border-zinc-700 px-4 py-3 outline-none focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="Provider Service ID"
            className="rounded-xl bg-black border border-zinc-700 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        <button className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold">
          Add Service
        </button>
      </div>

      {/* Existing Services */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-6">
          Existing Services
        </h2>

        <div className="grid grid-cols-5 text-gray-400 border-b border-zinc-800 pb-3 mb-3">
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p>Status</p>
          <p>Provider ID</p>
        </div>

        <div className="grid grid-cols-5 py-3">
          <p>TikTok Followers</p>
          <p>TikTok</p>
          <p>$3 / 1000</p>
          <p className="text-green-400">
            Active
          </p>
          <p>#5541</p>
        </div>
      </div>
    </main>
  );
}