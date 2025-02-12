const express = require('express');
const { fetchTripAdvisorData } = require('../services/tripadvisorService');
const router = express.Router();

// Fetch hotels by location
router.get('/hotels', async (req, res) => {
  const { location_id } = req.query;
  if (!location_id) return res.status(400).json({ error: "Location ID required" });

  const hotels = await fetchTripAdvisorData('hotels', { location_id });
  if (!hotels) return res.status(500).json({ error: "Failed to fetch hotels" });

  res.json(hotels);
});

// Fetch restaurants by location
router.get('/restaurants', async (req, res) => {
  const { location_id } = req.query;
  if (!location_id) return res.status(400).json({ error: "Location ID required" });

  const restaurants = await fetchTripAdvisorData('restaurants', { location_id });
  if (!restaurants) return res.status(500).json({ error: "Failed to fetch restaurants" });

  res.json(restaurants);
});

// Fetch attractions by location
router.get('/attractions', async (req, res) => {
  const { location_id } = req.query;
  if (!location_id) return res.status(400).json({ error: "Location ID required" });

  const attractions = await fetchTripAdvisorData('attractions', { location_id });
  if (!attractions) return res.status(500).json({ error: "Failed to fetch attractions" });

  res.json(attractions);
});

module.exports = router;
