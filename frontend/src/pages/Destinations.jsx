import DestinationCard from "../components/DestinationCard";
import { destinations } from "../data/destinations";

function Destinations() {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-700 to-red-900 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">
            Discover Yemen's Destinations
          </h1>

          <p className="mx-auto max-w-3xl text-lg text-red-100">
            From ancient cities to breathtaking islands, Yemen offers incredible
            places waiting to be explored.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((place) => (
            <DestinationCard
              key={place.id}
              id={place.id}
              image={place.image}
              title={place.title}
              description={place.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Destinations;