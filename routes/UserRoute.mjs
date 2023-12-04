// Import the necessary dependencies
import express from 'express';
import { sendAllUser, sendOTP, verifyOTP } from '../controllers/ControllerUser.mjs';
const route = express.Router();

// Route to handle user registration
route.post('/userform', sendAllUser);

// Route to send OTP
route.post('/send-otp', sendOTP);

// Route to verify OTP
route.post('/verify-otp', verifyOTP);

// Export the configured router for use in other parts of the application
export default route;
