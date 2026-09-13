import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "../config/db.js";
import Destination from "../models/Destination.js";
import destinations from "./destinations.js";

dotenv.config();

await connectDB();

const importData = async () => {
  try {
    await Destination.deleteMany();

    await Destination.insertMany(destinations);

    console.log("Destinations Imported Successfully");

    mongoose.connection.close();
  } catch (error) {
    console.error(error);
    mongoose.connection.close();
  }
};

importData();