import Food from "../models/Food.js";

export const getFood = async (req, res) => {
  const data = await Food.find().sort({ createdAt: -1 });
  res.json(data);
};

export const createFood = async (req, res) => {
  const item = await Food.create(req.body);
  res.status(201).json(item);
};

export const updateFood = async (req, res) => {
  const item = await Food.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(item);
};

export const deleteFood = async (req, res) => {
  await Food.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};