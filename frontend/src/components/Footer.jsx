import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Logo */}
          <div>
            <h2 className="mb-4 text-2xl font-bold text-red-400">
              Discover Yemen
            </h2>

            <p className="text-gray-300 leading-7">
              Discover Yemen's history, culture, food, and breathtaking
              destinations through one beautiful website.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">Quick Links</h3>

            <ul className="space-y-2 text-gray-300">
              <li>Home</li>
              <li>Destinations</li>
              <li>Culture</li>
              <li>Food</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">Follow Us</h3>

            <div className="flex gap-5 text-2xl text-gray-300">
              <a href="#" className="hover:text-red-400">
                <FaFacebook />
              </a>

              <a href="#" className="hover:text-red-400">
                <FaInstagram />
              </a>

              <a href="#" className="hover:text-red-400">
                <FaXTwitter />
              </a>

              <a href="#" className="hover:text-red-400">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400">
          © 2026 Discover Yemen. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;