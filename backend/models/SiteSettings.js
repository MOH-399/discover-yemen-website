import mongoose from "mongoose";

const siteSettingsSchema = new mongoose.Schema(
  {
    heroTitle: String,
    heroDescription: String,
    phone: String,
    email: String,
    address: String,
    facebook: String,
    instagram: String,
    twitter: String,
    youtube: String,
  },
  { timestamps: true }
);

export default mongoose.model("SiteSettings", siteSettingsSchema);