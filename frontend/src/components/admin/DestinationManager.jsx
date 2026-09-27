import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit, FaTrash } from "react-icons/fa";
import { API_URL } from "../../config";

function DestinationManager() {
  const [destinations, setDestinations] = useState([]);

  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    city: "",
    category: "Historical",
    image: "",
    description: "",
  });

  const fetchData = async () => {
    const res = await fetch(`${API_URL}/api/destinations`);
    const data = await res.json();
    setDestinations(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setEditingId(null);
    setForm({
      name: "",
      city: "",
      category: "Historical",
      image: "",
      description: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = editingId
      ? `${API_URL}/api/destinations/${editingId}`
      : "${API_URL}/api/destinations";

    const method = editingId ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      toast.error("Operation failed");
      return;
    }

    toast.success(
      editingId ? "Destination updated" : "Destination added"
    );

    resetForm();
    fetchData();
  };

  const handleEdit = (item) => {
    setEditingId(item._id);
    setForm(item);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this destination?")) return;

    await fetch(`${API_URL}/api/destinations/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    toast.success("Destination deleted");
    fetchData();
  };

  return (
    <div className="space-y-8">
      <div className="rounded-2xl bg-white p-6 shadow">
        <h3 className="mb-5 text-2xl font-bold text-red-700">
          {editingId ? "Edit Destination" : "Add Destination"}
        </h3>

        <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
          <input
            name="name"
            placeholder="Destination Name"
            value={form.name}
            onChange={handleChange}
            className="rounded-lg border p-3"
            required
          />

          <input
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            className="rounded-lg border p-3"
            required
          />

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="rounded-lg border p-3"
          >
            <option>Historical</option>
            <option>Nature</option>
          </select>

          <input
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            className="rounded-lg border p-3"
          />

          <textarea
            name="description"
            rows="4"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="rounded-lg border p-3 md:col-span-2"
          />

          <button
            className="rounded-lg bg-red-700 py-3 text-white hover:bg-red-800 md:col-span-2"
          >
            {editingId ? "Update Destination" : "Add Destination"}
          </button>
        </form>
      </div>

      <div className="overflow-hidden rounded-2xl bg-white shadow">
        <table className="w-full">
          <thead className="bg-red-700 text-white">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">City</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {destinations.map((item) => (
              <tr key={item._id} className="border-b hover:bg-slate-50">
                <td className="p-4">{item.name}</td>
                <td className="p-4">{item.city}</td>
                <td className="p-4">{item.category}</td>

                <td className="p-4">
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => handleEdit(item)}
                      className="rounded-lg bg-yellow-500 p-3 text-white hover:bg-yellow-600"
                    >
                      <FaEdit />
                    </button>

                    <button
                      onClick={() => handleDelete(item._id)}
                      className="rounded-lg bg-gray-800 p-3 text-white hover:bg-black"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DestinationManager;