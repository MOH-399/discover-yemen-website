import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit, FaTrash } from "react-icons/fa";

function FoodManager() {
  const [foods, setFoods] = useState([]);

  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    city: "",
    category: "Main Dish",
    image: "",
    description: "",
  });

  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/api/food");
    const data = await res.json();
    setFoods(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const reset = () => {
    setEditingId(null);
    setForm({
      name: "",
      city: "",
      category: "Main Dish",
      image: "",
      description: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = editingId
      ? `http://localhost:5000/api/food/${editingId}`
      : "http://localhost:5000/api/food";

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

    toast.success(editingId ? "Food updated" : "Food added");

    reset();
    fetchData();
  };

  const handleEdit = (item) => {
    setEditingId(item._id);
    setForm(item);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this food?")) return;

    await fetch(`http://localhost:5000/api/food/${id}`, {
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
          {editingId ? "Edit Food" : "Add Food"}
        </h3>

        <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
          <input
            name="name"
            placeholder="Food Name"
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

          <input
            name="category"
            placeholder="Category"
            value={form.category}
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
            rows="4"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="rounded-lg border p-3 md:col-span-2"
            required
          />

          <button className="rounded-lg bg-red-700 py-3 text-white hover:bg-red-800 md:col-span-2">
            {editingId ? "Update Food" : "Add Food"}
          </button>
        </form>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {foods.map((food) => (
          <div
            key={food._id}
            className="overflow-hidden rounded-2xl bg-white shadow"
          >
            <img
              src={food.image}
              alt={food.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold">{food.name}</h3>

              <p className="mt-1 text-red-700">{food.city}</p>

              <p className="mt-1 text-sm text-gray-500">{food.category}</p>

              <p className="mt-4 text-gray-600">{food.description}</p>

              <div className="mt-5 flex gap-3">
                <button
                  onClick={() => handleEdit(food)}
                  className="rounded-lg bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600"
                >
                  <FaEdit />
                </button>

                <button
                  onClick={() => handleDelete(food._id)}
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

export default FoodManager;