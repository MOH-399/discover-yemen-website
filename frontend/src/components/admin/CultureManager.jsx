import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit, FaTrash } from "react-icons/fa";
import { API_URL } from "../../config";

function CultureManager() {
  const [items, setItems] = useState([]);

  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    image: "",
    description: "",
  });

  const fetchData = async () => {
    const res = await fetch("`${API_URL}/api/culture`");
    const data = await res.json();
    setItems(data);
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

  const reset = () => {
    setEditingId(null);
    setForm({
      title: "",
      image: "",
      description: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = editingId
      ? `${API_URL}/api/culture/${editingId}`
      : "${API_URL}/api/culture";

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
      editingId ? "Culture updated" : "Culture added"
    );

    reset();
    fetchData();
  };

  const handleEdit = (item) => {
    setEditingId(item._id);
    setForm(item);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this item?")) return;

    await fetch(`${API_URL}/api/culture/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    toast.success("Deleted");
    fetchData();
  };

  return (
    <div className="space-y-8">
      <div className="rounded-2xl bg-white p-6 shadow">
        <h3 className="mb-5 text-2xl font-bold text-red-700">
          {editingId ? "Edit Culture" : "Add Culture"}
        </h3>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            className="rounded-lg border p-3"
            required
          />

          <input
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            className="rounded-lg border p-3"
            required
          />

          <textarea
            name="description"
            rows="5"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="rounded-lg border p-3"
            required
          />

          <button className="rounded-lg bg-red-700 py-3 text-white hover:bg-red-800">
            {editingId ? "Update" : "Add"}
          </button>
        </form>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <div key={item._id} className="rounded-2xl bg-white shadow overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="h-56 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="mb-3 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mb-5 text-gray-600">
                {item.description}
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => handleEdit(item)}
                  className="rounded-lg bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600"
                >
                  <FaEdit />
                </button>

                <button
                  onClick={() => handleDelete(item._id)}
                  className="rounded-lg bg-gray-800 px-4 py-2 text-white hover:bg-black"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CultureManager;