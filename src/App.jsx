function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white shadow">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-red-700">
            Discover Yemen
          </h1>

          <div className="flex gap-6 text-gray-700">
            <a href="#">Home</a>
            <a href="#">Destinations</a>
            <a href="#">Culture</a>
            <a href="#">Food</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </nav>

      <section className="flex min-h-[80vh] items-center justify-center bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="max-w-3xl px-6 text-center">
          <h2 className="mb-6 text-5xl font-bold">
            Welcome to Discover Yemen
          </h2>

          <p className="mb-8 text-xl text-red-100">
            Explore Yemen's history, culture, food, and breathtaking
            destinations through one beautiful website.
          </p>

          <button className="rounded-full bg-white px-8 py-3 font-semibold text-red-700 transition hover:bg-red-100">
            Explore Now
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;