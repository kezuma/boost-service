export default function AdminUsersPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Manage Users</h1>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <div className="grid grid-cols-4 text-gray-400 border-b border-zinc-800 pb-3 mb-3">
          <p>Name</p>
          <p>Email</p>
          <p>Role</p>
          <p>Status</p>
        </div>

        <div className="grid grid-cols-4 py-3">
          <p>Demo User</p>
          <p>user@example.com</p>
          <p>User</p>
          <p className="text-green-400">Active</p>
        </div>
      </div>
    </div>
  );
}