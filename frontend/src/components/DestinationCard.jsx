import { Link } from "react-router-dom";

function DestinationCard({ id, image, title, description }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <img
        src={image}
        alt={title}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">
        <h3 className="mb-2 text-2xl font-bold text-gray-800">
          {title}
        </h3>

        <p className="text-gray-600">
          {description}
        </p>

        <Link
          to={`/destinations/${id}`}
          className="mt-4 inline-block font-semibold text-red-700 hover:underline"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
}

export default DestinationCard;