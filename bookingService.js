const axios = require('axios');
require('dotenv').config();

const BOOKING_API_KEY = process.env.BOOKING_API_KEY;
const BASE_URL = "https://api.booking.com/flights"; // Replace with actual API endpoint

const searchFlights = async (origin, destination, departureDate, returnDate = null) => {
  try {
    const params = {
      origin,
      destination,
      departure_date: departureDate,
      return_date: returnDate,
    };

    const response = await axios.get(`${BASE_URL}/search`, {
      headers: {
        "X-Booking-API-Key": BOOKING_API_KEY,
      },
      params,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching flights:", error.response ? error.response.data : error.message);
    return null;
  }
};

module.exports = { searchFlights };
