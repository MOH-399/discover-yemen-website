import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="bg-red-700 px-8 py-5 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <h1 className="text-3xl font-bold">
            Admin Dashboard
          </h1>

          <button
            onClick={logout}
            className="rounded-lg bg-white px-5 py-2 text-red-700 hover:bg-red-100"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-xl font-bold">Total Destinations</h2>
            <p className="mt-4 text-4xl font-bold text-red-700">5+</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-xl font-bold">Categories</h2>
            <p className="mt-4 text-4xl font-bold text-red-700">2</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-xl font-bold">Status</h2>
            <p className="mt-4 text-xl font-semibold text-green-600">
              Connected
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-white p-6 shadow">
          <h2 className="mb-4 text-2xl font-bold text-red-700">
            Destination Management
          </h2>

          <p className="text-gray-600">
            Add, edit, and delete destinations from this dashboard.
            We will connect this section to MongoDB in the next steps.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;