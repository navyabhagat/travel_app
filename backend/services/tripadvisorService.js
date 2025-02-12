const axios = require('axios');
require('dotenv').config();

const TRIPADVISOR_API_KEY = process.env.TRIPADVISOR_API_KEY;
const BASE_URL = "https://api.tripadvisor.com/api"; // Replace with actual API endpoint

const fetchTripAdvisorData = async (endpoint, params) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`, {
      headers: {
        "X-TripAdvisor-API-Key": TRIPADVISOR_API_KEY,
      },
      params,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching TripAdvisor data:", error.response ? error.response.data : error.message);
    return null;
  }
};

module.exports = { fetchTripAdvisorData };
