import { useEffect, useState } from "react";

function Food() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/api/food");
      const data = await res.json();
      setFoods(data);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-r from-red-700 to-red-900 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-5xl font-bold">Yemeni Food</h1>
          <p className="mt-4 text-red-100">
            Discover authentic Yemeni cuisine.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {foods.map((food) => (
            <div
              key={food._id}
              className="overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <img
                src={food.image}
                alt={food.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold text-red-700">
                  {food.name}
                </h2>

                <p className="mt-2 text-sm text-red-600">{food.city}</p>

                <p className="mt-1 text-xs text-gray-500">
                  {food.category}
                </p>

                <p className="mt-4 text-gray-700">{food.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Food;