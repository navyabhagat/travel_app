import axios from 'axios';

const API_URL = 'http://localhost:5000/api/itineraries';

export const fetchItineraries = async (token: string) => {
  try {
    const response = await axios.get(API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; // Returns an array of itineraries
  } catch (error) {
    throw error.response?.data?.message || 'Error fetching itineraries';
  }
};

export const createItinerary = async (token: string, itineraryData: any) => {
  try {
    const response = await axios.post(API_URL, itineraryData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; // Returns the new itinerary
  } catch (error) {
    throw error.response?.data?.message || 'Error creating itinerary';
  }
};
