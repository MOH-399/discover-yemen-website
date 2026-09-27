import { useEffect, useState } from "react";
import DestinationCard from "../components/DestinationCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { API_URL } from "../config";

function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchDestinations = async () => {
      setLoading(true);

      try {
        const params = new URLSearchParams();

        if (search) params.append("search", search);
        if (category) params.append("category", category);

        const response = await fetch(
          `${API_URL}/api/destinations`);

        if (!response.ok) {
          throw new Error("Failed to fetch destinations");
        }

        const data = await response.json();
        setDestinations(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, [search, category]);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-red-700 to-red-900 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">
            Discover Yemen's Destinations
          </h1>

          <p className="mx-auto max-w-3xl text-lg text-red-100">
            Search and explore destinations across Yemen.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-10 grid gap-4 md:grid-cols-2">
          <input
            type="text"
            placeholder="Search destinations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-xl border p-3"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-xl border p-3"
          >
            <option value="">All Categories</option>
            <option value="Historical">Historical</option>
            <option value="Nature">Nature</option>
          </select>
        </div>

        {/* Destinations */}
        {loading ? (
          <LoadingSpinner />
        ) : destinations.length === 0 ? (
          <p className="text-center text-gray-600">
            No destinations found.
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {destinations.map((place) => (
              <DestinationCard
                key={place._id}
                id={place._id}
                image={place.image}
                title={place.name}
                description={place.description}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Destinations;