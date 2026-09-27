import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { API_URL } from "../../config";

function ContactManager() {
  const [form, setForm] = useState({
    heroTitle: "",
    heroDescription: "",
    phone: "",
    email: "",
    address: "",
    facebook: "",
    instagram: "",
    twitter: "",
    youtube: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("`${API_URL}/api/settings`");
      const data = await res.json();
      setForm(data);
    };

    fetchData();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("`${API_URL}/api/settings`", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      toast.error("Update failed");
      return;
    }

    toast.success("Site updated successfully");
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <h2 className="mb-6 text-2xl font-bold text-red-700">
        Site Settings
      </h2>

      <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
        <input
          name="heroTitle"
          placeholder="Hero Title"
          value={form.heroTitle}
          onChange={handleChange}
          className="rounded-lg border p-3 md:col-span-2"
        />

        <textarea
          name="heroDescription"
          placeholder="Hero Description"
          value={form.heroDescription}
          onChange={handleChange}
          rows="3"
          className="rounded-lg border p-3 md:col-span-2"
        />

        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="rounded-lg border p-3"
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="rounded-lg border p-3"
        />

        <input
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="rounded-lg border p-3 md:col-span-2"
        />

        <input
          name="facebook"
          placeholder="Facebook URL"
          value={form.facebook}
          onChange={handleChange}
          className="rounded-lg border p-3"
        />

        <input
          name="instagram"
          placeholder="Instagram URL"
          value={form.instagram}
          onChange={handleChange}
          className="rounded-lg border p-3"
        />

        <input
          name="twitter"
          placeholder="X (Twitter) URL"
          value={form.twitter}
          onChange={handleChange}
          className="rounded-lg border p-3"
        />

        <input
          name="youtube"
          placeholder="YouTube URL"
          value={form.youtube}
          onChange={handleChange}
          className="rounded-lg border p-3"
        />

        <button className="rounded-lg bg-red-700 py-3 text-white hover:bg-red-800 md:col-span-2">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default ContactManager;