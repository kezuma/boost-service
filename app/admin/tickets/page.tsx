export default function AdminTicketsPage() {
  return (
       <div>
      <h1 className="text-4xl font-bold mb-8">Support Tickets</h1>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <div className="grid grid-cols-5 text-gray-400 border-b border-zinc-800 pb-3 mb-3">
          <p>Ticket ID</p>
          <p>User</p>
          <p>Subject</p>
          <p>Status</p>
          <p>Action</p>
        </div>

        <div className="grid grid-cols-5 py-3 items-center">
          <p>#T1001</p>
          <p>Demo User</p>
          <p>Order not completed</p>
          <p className="text-yellow-400">Open</p>

          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl w-fit">
            View
          </button>
        </div>
      </div>
    </div>
  );
}