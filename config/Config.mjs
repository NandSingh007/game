// config.mjs
import dotenv from 'dotenv';
dotenv.config();

// Configuration object with various settings
export default {
    // MongoDB connection URI
    mongoURI: "mongodb+srv://shubhamsrathore07:op7j3wPV60Ueq8R5@cluster0.dmvgkk4.mongodb.net/test?retryWrites=true&w=majority,", // Use the environment variable here
    // Port for the server to listen on (use environment variable or default to 8080)
    port: process.env.PORT || 8080,
};
