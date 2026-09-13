import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

function DestinationDetails() {
  const { id } = useParams();

  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/destinations/${id}`
        );

        if (!response.ok) {
          throw new Error("Destination not found");
        }

        const data = await response.json();
        setDestination(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDestination();
  }, [id]);

  if (loading) return <LoadingSpinner />;

  if (error) {
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
        alt={destination.name}
        className="h-[450px] w-full object-cover"
      />

      <div className="mx-auto max-w-5xl px-6 py-12">
        <p className="mb-3 text-red-700 font-semibold uppercase">
          {destination.category}
        </p>

        <h1 className="mb-6 text-5xl font-bold text-red-700">
          {destination.name}
        </h1>

        <p className="mb-2 text-xl text-gray-700">
          📍 {destination.city}
        </p>

        <p className="mb-8 text-lg leading-8 text-gray-700">
          {destination.description}
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