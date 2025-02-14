import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tripadvisor'; // Change to your backend endpoint

export const searchHotels = async (location: string) => {
  try {
    const response = await axios.get(`${API_URL}/hotels`, {
      params: { location },
    });
    return response.data; // Returns a list of hotels
  } catch (error) {
    throw error.response?.data?.message || 'Error fetching hotels';
  }
};

export const searchRestaurants = async (location: string) => {
  try {
    const response = await axios.get(`${API_URL}/restaurants`, {
      params: { location },
    });
    return response.data; // Returns a list of restaurants
  } catch (error) {
    throw error.response?.data?.message || 'Error fetching restaurants';
  }
};

export const searchAttractions = async (location: string) => {
  try {
    const response = await axios.get(`${API_URL}/attractions`, {
      params: { location },
    });
    return response.data; // Returns a list of attractions
  } catch (error) {
    throw error.response?.data?.message || 'Error fetching attractions';
  }
};

// Function to fetch search results from TripAdvisor
export const fetchSearchResults = async (userToken: string, query: string) => {
    try {
      const response = await axios.get(`${API_URL}`, {
        headers: {
          Authorization: `Bearer ${userToken}`, // Ensure the API requires authentication
        },
        params: {
          query, // Pass search query as a parameter
        },
      });
  
      return response.data.results; // Adjust based on API response structure
    } catch (error) {
      console.error('Error fetching search results:', error);
      throw error;
    }
};
