const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '../.env') });

module.exports = {
  mongoURI: process.env.MONGO_URI,
  bookingApiKey: process.env.BOOKING_API_KEY,
  jwtSecret: process.env.JWT_SECRET,
  port: process.env.PORT || 5000,
};
