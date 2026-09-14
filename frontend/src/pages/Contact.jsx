import { useEffect, useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [settings, setSettings] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/api/settings");
      const data = await res.json();
      setSettings(data);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-r from-red-700 to-red-900 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-red-100">
            We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 text-center shadow">
            <FaPhone className="mx-auto mb-3 text-3xl text-red-700" />
            <p>{settings.phone}</p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-center shadow">
            <FaEnvelope className="mx-auto mb-3 text-3xl text-red-700" />
            <p>{settings.email}</p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-center shadow">
            <FaMapMarkerAlt className="mx-auto mb-3 text-3xl text-red-700" />
            <p>{settings.address}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;