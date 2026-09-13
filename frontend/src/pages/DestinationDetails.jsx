import { Link, useParams } from "react-router-dom";
import { destinations } from "../data/destinations";

function DestinationDetails() {
  const { id } = useParams();

  const destination = destinations.find((place) => place.id === id);

  if (!destination) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h1 className="mb-4 text-4xl font-bold text-red-700">
          Destination Not Found
        </h1>

        <Link to="/destinations" className="text-red-700 hover:underline">
          Back to Destinations
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50">
      <img
        src={destination.image}
        alt={destination.title}
        className="h-[450px] w-full object-cover"
      />

      <div className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="mb-6 text-5xl font-bold text-red-700">
          {destination.title}
        </h1>

        <p className="mb-8 text-lg leading-8 text-gray-700">
          {destination.details}
        </p>

        <Link
          to="/destinations"
          className="rounded-full bg-red-700 px-6 py-3 text-white hover:bg-red-800"
        >
          Back to Destinations
        </Link>
      </div>
    </div>
  );
}

export default DestinationDetails;