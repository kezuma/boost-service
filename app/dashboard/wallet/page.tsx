export default function WalletPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">Wallet</h1>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-6">
        <p className="text-gray-400">Current Balance</p>
        <h2 className="text-5xl font-bold mt-2">$0</h2>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">Add Funds</h2>

        <input
          type="number"
          placeholder="Enter amount"
          className="w-full max-w-md rounded-xl bg-black border border-zinc-700 px-4 py-3 outline-none focus:border-blue-500 mb-4"
        />

        <button className="block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold">
          Continue to Checkout
        </button>
      </div>
    </main>
  );
}