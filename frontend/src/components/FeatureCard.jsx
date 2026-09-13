function FeatureCard({ icon, title, description }) {
  return (
    <div className="rounded-2xl bg-white p-6 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="mb-4 flex justify-center text-5xl text-red-700">
        {icon}
      </div>

      <h3 className="mb-3 text-2xl font-bold text-gray-800">
        {title}
      </h3>

      <p className="text-gray-600 leading-7">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;