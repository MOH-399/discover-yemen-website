import { useEffect, useState } from "react";
import { API_URL } from "../config";

function Culture() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${API_URL}/api/culture`);
      const data = await res.json();
      setItems(data);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-gradient-to-r from-red-700 to-red-900 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-5xl font-bold">
            Yemeni Culture
          </h1>

          <p className="mt-4 text-red-100">
            Discover traditions, architecture, clothing, and heritage.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item._id}
              className="overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h2 className="mb-3 text-2xl font-bold text-red-700">
                  {item.title}
                </h2>

                <p className="text-gray-700 leading-7">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Culture;