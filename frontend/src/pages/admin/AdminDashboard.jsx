import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CultureManager from "../../components/admin/CultureManager";
import FoodManager from "../../components/admin/FoodManager";
import ContactManager from "../../components/admin/ContactManager";
import {
  FaMapMarkedAlt,
  FaUtensils,
  FaLandmark,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import DestinationManager from "../../components/admin/DestinationManager";

function AdminDashboard() {
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState("dashboard");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  const menu = [
    { id: "dashboard", title: "Dashboard", icon: <FaCog /> },
    { id: "destinations", title: "Destinations", icon: <FaMapMarkedAlt /> },
    { id: "culture", title: "Culture", icon: <FaLandmark /> },
    { id: "food", title: "Food", icon: <FaUtensils /> },
    { id: "contact", title: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-col bg-red-800 text-white md:flex">
        <div className="border-b border-red-700 p-6">
          <h1 className="text-2xl font-bold">Discover Yemen</h1>
          <p className="text-sm text-red-200">Admin Panel</p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menu.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition ${
                activeSection === item.id
                  ? "bg-red-700"
                  : "hover:bg-red-700"
              }`}
            >
              {item.icon}
              {item.title}
            </button>
          ))}
        </nav>

        <button
          onClick={logout}
          className="m-4 flex items-center justify-center gap-2 rounded-lg bg-white py-3 text-red-700 hover:bg-red-100"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </aside>

      {/* Main */}
      <main className="flex-1">
        <header className="bg-white px-6 py-5 shadow">
          <h2 className="text-3xl font-bold text-gray-800">
            {menu.find((m) => m.id === activeSection)?.title}
          </h2>
        </header>

        <div className="p-6">
          {activeSection === "dashboard" && (
            <div className="grid gap-6 md:grid-cols-4">
              <div className="rounded-2xl bg-white p-6 shadow">
                <FaMapMarkedAlt className="mb-3 text-3xl text-red-700" />
                <h3 className="text-xl font-bold">Destinations</h3>
                <p className="text-gray-500">
                  Manage tourist destinations.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow">
                <FaLandmark className="mb-3 text-3xl text-red-700" />
                <h3 className="text-xl font-bold">Culture</h3>
                <p className="text-gray-500">
                  Manage cultural content.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow">
                <FaUtensils className="mb-3 text-3xl text-red-700" />
                <h3 className="text-xl font-bold">Food</h3>
                <p className="text-gray-500">
                  Manage Yemeni food.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow">
                <FaEnvelope className="mb-3 text-3xl text-red-700" />
                <h3 className="text-xl font-bold">Contact</h3>
                <p className="text-gray-500">
                  Edit contact information.
                </p>
              </div>
            </div>
          )}

          {activeSection === "destinations" && <DestinationManager />}

          {activeSection === "culture" && <CultureManager />}

          {activeSection === "food" && <FoodManager />}

          {activeSection === "contact" && <ContactManager />}
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;