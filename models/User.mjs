// Import the Mongoose library
import mongoose from 'mongoose';

// Define your schema for the 'bookmovies' collection
const userform = new mongoose.Schema({
    // Define properties and their types with validation rules
    name: { type: String, required: true }, // Movie name (required)
    email: { type: String, required: true },  // Time slot (required)
    phone: { type: Number, required: true },  // Time slot (required)
    otps: { type: Number, required: true },

});

// Create and export the 'bookmovies' model based on the schema
export const userformdetails = mongoose.model('userformdetails', userform);
