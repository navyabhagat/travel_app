const mongoose = require('mongoose');

const ItinerarySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  destinations: [
    {
      location: { type: String, required: true },
      startDate: { type: Date, required: true },
      endDate: { type: Date, required: true },
    }
  ],
  savedFlights: [{ type: String }], // Stores Booking.com flight IDs
  savedHotels: [{ type: String }], // Stores Booking.com hotel IDs
  savedRestaurants: [{ type: String }], // Stores TripAdvisor restaurant IDs
  savedAttractions: [{ type: String }], // Stores TripAdvisor attraction IDs
  notes: { type: String }, // User notes or custom plans
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Itinerary', ItinerarySchema);
