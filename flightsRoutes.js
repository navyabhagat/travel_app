const express = require('express');
const { searchFlights } = require('../services/bookingService');
const router = express.Router();

// Search for flights
router.get('/search', async (req, res) => {
  const { origin, destination, departureDate, returnDate } = req.query;

  if (!origin || !destination || !departureDate) {
    return res.status(400).json({ error: "Origin, destination, and departure date are required" });
  }

  const flights = await searchFlights(origin, destination, departureDate, returnDate);
  if (!flights) return res.status(500).json({ error: "Failed to fetch flights" });

  res.json(flights);
});

module.exports = router;
