import { Link } from "react-router-dom";
import DestinationCard from "../components/DestinationCard";
import FeatureCard from "../components/FeatureCard";
import { FaMountain, FaLandmark, FaLeaf } from "react-icons/fa6";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex min-h-[90vh] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 max-w-4xl px-6 text-center text-white">
          <p className="mb-4 text-lg uppercase tracking-[0.3em] text-red-300">
            Discover the Hidden Beauty of Arabia
          </p>

          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Discover Yemen
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200">
            Experience ancient cities, breathtaking mountains, rich traditions,
            delicious cuisine, and unforgettable adventures across Yemen.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              to="/destinations"
              className="rounded-full bg-red-700 px-8 py-3 font-semibold transition hover:bg-red-800"
            >
              Explore Destinations
            </Link>

            <a
              href="#why-visit"
              className="rounded-full border border-white px-8 py-3 font-semibold transition hover:bg-white hover:text-black"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Why Visit Yemen */}
      <section id="why-visit" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Why Visit Yemen?
            </h2>

            <p className="mx-auto max-w-3xl text-gray-600">
              Yemen offers a unique combination of ancient history,
              breathtaking landscapes, and rich traditions found nowhere else.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<FaLandmark />}
              title="Ancient Heritage"
              description="Discover UNESCO World Heritage sites and centuries-old architecture."
            />

            <FeatureCard
              icon={<FaMountain />}
              title="Amazing Landscapes"
              description="Explore mountains, valleys, islands, and unforgettable natural beauty."
            />

            <FeatureCard
              icon={<FaLeaf />}
              title="Unique Nature"
              description="Experience rare wildlife and the famous Dragon Blood Trees of Socotra."
            />
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Featured Destinations
            </h2>

            <p className="mx-auto max-w-2xl text-gray-600">
              Discover some of Yemen's most iconic places, from ancient cities
              to breathtaking islands.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <DestinationCard
              id="sanaa"
              image="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80"
              title="Old Sana'a"
              description="A UNESCO World Heritage city famous for its unique tower houses."
            />

            <DestinationCard
              id="socotra"
              image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
              title="Socotra Island"
              description="An extraordinary island known for its Dragon Blood Trees."
            />

            <DestinationCard
              id="shibam"
              image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80"
              title="Shibam"
              description="The Manhattan of the Desert with impressive mud-brick skyscrapers."
            />
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-red-700 py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 text-center md:grid-cols-4">
          <div>
            <h3 className="text-4xl font-bold">5000+</h3>
            <p className="mt-2 text-red-100">Years of History</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">5</h3>
            <p className="mt-2 text-red-100">UNESCO Heritage Sites</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">300+</h3>
            <p className="mt-2 text-red-100">Unique Plant Species</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">100+</h3>
            <p className="mt-2 text-red-100">Cultural Traditions</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;