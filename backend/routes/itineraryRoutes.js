const express = require('express');
const { createItinerary, getItineraries, getItineraryById, updateItinerary, deleteItinerary } = require('../controllers/itineraryController');
const authMiddleware = require('../backend/middleware/authMiddleware');
const router = express.Router();

// Create a new itinerary
router.post('/', authMiddleware, createItinerary);

// Get all itineraries for logged-in user
router.get('/', authMiddleware, getItineraries);

// Get a single itinerary by ID
router.get('/:id', authMiddleware, getItineraryById);

// Update an itinerary
router.put('/:id', authMiddleware, updateItinerary);

// Delete an itinerary
router.delete('/:id', authMiddleware, deleteItinerary);

module.exports = router;
