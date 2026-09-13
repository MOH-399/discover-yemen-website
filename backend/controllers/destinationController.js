export const getAllDestinations = (req, res) => {
  const destinations = [
    {
      id: 1,
      name: "Old Sana'a",
      city: "Sana'a",
      category: "Historical",
    },
    {
      id: 2,
      name: "Socotra Island",
      city: "Socotra",
      category: "Nature",
    },
    {
      id: 3,
      name: "Shibam",
      city: "Hadramout",
      category: "Historical",
    },
  ];

  res.json(destinations);
};

export const getDestinationById = (req, res) => {
  const { id } = req.params;

  const destinations = [
    {
      id: 1,
      name: "Old Sana'a",
      city: "Sana'a",
      category: "Historical",
    },
    {
      id: 2,
      name: "Socotra Island",
      city: "Socotra",
      category: "Nature",
    },
    {
      id: 3,
      name: "Shibam",
      city: "Hadramout",
      category: "Historical",
    },
  ];

  const destination = destinations.find(
    (item) => item.id === Number(id)
  );

  if (!destination) {
    return res.status(404).json({
      message: "Destination not found",
    });
  }

  res.json(destination);
};