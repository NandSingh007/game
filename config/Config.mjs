// config.mjs
import dotenv from 'dotenv';
dotenv.config();
// Configuration object with various settings
export default {
    // MongoDB connection URI
    mongoURI: process.env.MONGOURI,
    // Port for the server to listen on (use environment variable or default to 8080)
    port: process.env.PORT || 8080,
};
