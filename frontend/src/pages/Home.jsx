import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../config";

function Home() {
  const [settings, setSettings] = useState({
    heroTitle: "Discover Yemen",
    heroDescription: "Explore the beauty, culture and history of Yemen.",
  });

  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetchSettings();
    fetchDestinations();
  }, []);

  const fetchSettings = async () => {
    try {
      const res = await fetch(`${API_URL}/api/settings`);
      const data = await res.json();
      setSettings(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDestinations = async () => {
    try {
      const res = await fetch(`${API_URL}/api/destinations`);
      const data = await res.json();
      setDestinations(data.slice(0, 6));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-red-700 to-red-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">
            {settings.heroTitle}
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-lg text-red-100">
            {settings.heroDescription}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/destinations"
              className="rounded-xl bg-white px-8 py-3 font-semibold text-red-700 hover:bg-red-100"
            >
              Explore Destinations
            </Link>

            <Link
              to="/admin/login"
              className="rounded-xl border border-white px-8 py-3 font-semibold text-white hover:bg-white hover:text-red-700"
            >
              Admin Login
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold text-red-700">
            Featured Destinations
          </h2>

          <p className="mt-3 text-gray-600">
            Discover some of Yemen's most beautiful places.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <div
              key={destination._id}
              className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:shadow-xl"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-red-700">
                  {destination.name}
                </h3>

                <p className="mt-2 text-sm text-red-600">
                  {destination.city}
                </p>

                <p className="mt-4 text-gray-600">
                  {destination.description?.length > 120
                    ? destination.description.substring(0, 120) + "..."
                    : destination.description}
                </p>

                <Link
                  to={`/destinations/${destination._id}`}
                  className="mt-6 inline-block rounded-lg bg-red-700 px-5 py-2 text-white hover:bg-red-800"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 text-center md:grid-cols-3">
          <div>
            <h3 className="text-4xl font-bold text-red-700">
              {destinations.length}+
            </h3>
            <p className="mt-2 text-gray-600">Tourist Destinations</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-red-700">1000+</h3>
            <p className="mt-2 text-gray-600">Years of History</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-red-700">4</h3>
            <p className="mt-2 text-gray-600">UNESCO World Heritage Sites</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-700 py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold">
            Experience the Heart of Yemen
          </h2>

          <p className="mt-4 text-red-100">
            Explore breathtaking landscapes, authentic traditions, and
            unforgettable Yemeni hospitality.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-3 font-semibold text-red-700 hover:bg-red-100"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;