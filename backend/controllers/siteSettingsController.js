import SiteSettings from "../models/SiteSettings.js";

export const getSettings = async (req, res) => {
  let settings = await SiteSettings.findOne();

  if (!settings) {
    settings = await SiteSettings.create({
      heroTitle: "Discover Yemen",
      heroDescription: "Explore the beauty, culture and history of Yemen.",
      phone: "+967 700 000 000",
      email: "info@discoveryemen.com",
      address: "Sana'a, Yemen",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://x.com",
      youtube: "https://youtube.com",
    });
  }

  res.json(settings);
};

export const updateSettings = async (req, res) => {
  const settings = await SiteSettings.findOne();

  const updated = await SiteSettings.findByIdAndUpdate(
    settings._id,
    req.body,
    { new: true }
  );

  res.json(updated);
};