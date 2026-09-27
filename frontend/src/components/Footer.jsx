import { useEffect, useState } from "react";
import { API_URL } from "../config";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const [settings, setSettings] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${API_URL}/api/settings`);
      const data = await res.json();
      setSettings(data);
    };

    fetchData();
  }, []);

  return (
    <footer className="bg-red-900 py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 md:flex-row md:justify-between">
        <div>
          <h3 className="text-xl font-bold">Discover Yemen</h3>
          <p className="text-red-200">
            Explore Yemen's beauty and heritage.
          </p>
        </div>

        <div className="flex gap-5 text-2xl">
          <a href={settings.facebook} target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>

          <a href={settings.instagram} target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>

          <a href={settings.twitter} target="_blank" rel="noreferrer">
            <FaXTwitter />
          </a>

          <a href={settings.youtube} target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;