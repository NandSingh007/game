// Import the necessary dependencies
import { userformdetails } from '../models/User.mjs';
import { sendOTPToUser } from '../utils/otpUtils.mjs'; // Assuming you have an OTP utility function

// Function to generate a random 6-digit OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
}

export const sendAllUser = async (req, res, next) => {
    try {
        const { name, email, phone, otps } = req.body;
        if (!otps) {
            return res.status(400).json({ error: 'The otps field is required.' });
        }
        const newUser = new userformdetails({
            name,
            email,
            phone,
            otps,
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.error(error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: error.message });
        }
        res.status(500).json({ error: 'Server error' });
    }
};



export const sendOTP = async (req, res) => {
    try {
        const { phone } = req.body;
        const otp = generateOTP();
        const num = `+91${phone}`
        sendOTPToUser(num, otp);
        res.json({ success: true, message: 'OTP sent successfully ' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Failed to send OTP' });
    }
};



export const verifyOTP = async (req, res) => {
    try {
        const { phone, otp } = req.body;
        console.log(otp)
        const user = await userformdetails.findOne({ otps: otp });
        if (!user || user.otps.toString() !== otp) {
            return res.json({ success: false, message: 'Invalid OTP' });
        }
        await userformdetails.findByIdAndUpdate(user._id, { $set: { otp: null } });
        return res.json({ success: true, message: 'OTP verification successful' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
};