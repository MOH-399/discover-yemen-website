import Culture from "../models/Culture.js";

export const getCulture = async (req, res) => {
  try {
    const data = await Culture.find().sort({ createdAt: -1 });

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createCulture = async (req, res) => {
  try {
    const item = await Culture.create(req.body);

    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const updateCulture = async (req, res) => {
  try {
    const item = await Culture.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.json(item);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const deleteCulture = async (req, res) => {
  try {
    await Culture.findByIdAndDelete(req.params.id);

    res.json({
      message: "Deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};