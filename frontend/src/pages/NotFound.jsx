import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-6">
      <div className="text-center">
        <h1 className="mb-4 text-7xl font-bold text-red-700">404</h1>

        <h2 className="mb-4 text-3xl font-bold text-gray-800">
          Page Not Found
        </h2>

        <p className="mb-8 text-gray-600">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="rounded-full bg-red-700 px-8 py-3 text-white transition hover:bg-red-800"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;