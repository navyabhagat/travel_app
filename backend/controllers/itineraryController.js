const Itinerary = require('../models/Itinerary');

/**
 * @desc Create a new itinerary
 * @route POST /api/itineraries
 */
exports.createItinerary = async (req, res) => {
  try {
    const { title, destinations } = req.body;
    const newItinerary = new Itinerary({ user: req.user.id, title, destinations });

    const itinerary = await newItinerary.save();
    res.status(201).json(itinerary);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @desc Get all itineraries for logged-in user
 * @route GET /api/itineraries
 */
exports.getItineraries = async (req, res) => {
  try {
    const itineraries = await Itinerary.find({ user: req.user.id });
    res.json(itineraries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @desc Get a single itinerary by ID
 * @route GET /api/itineraries/:id
 */
exports.getItineraryById = async (req, res) => {
  try {
    const itinerary = await Itinerary.findById(req.params.id);
    if (!itinerary || itinerary.user.toString() !== req.user.id) {
      return res.status(404).json({ message: 'Itinerary not found' });
    }
    res.json(itinerary);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @desc Update an itinerary
 * @route PUT /api/itineraries/:id
 */
exports.updateItinerary = async (req, res) => {
  try {
    let itinerary = await Itinerary.findById(req.params.id);
    if (!itinerary || itinerary.user.toString() !== req.user.id) {
      return res.status(404).json({ message: 'Itinerary not found' });
    }

    itinerary = await Itinerary.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(itinerary);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @desc Delete an itinerary
 * @route DELETE /api/itineraries/:id
 */
exports.deleteItinerary = async (req, res) => {
  try {
    const itinerary = await Itinerary.findById(req.params.id);
    if (!itinerary || itinerary.user.toString() !== req.user.id) {
      return res.status(404).json({ message: 'Itinerary not found' });
    }

    await itinerary.remove();
    res.json({ message: 'Itinerary removed' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
