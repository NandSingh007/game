// Example using Twilio
import twilio from 'twilio';
import dotenv from 'dotenv';
dotenv.config();
// Your Twilio account SID, authentication token, and Twilio phone number
const accountSid = process.env.ACCOUNTSid;
const authToken = process.env.AUTHTOKEN;
const twilioPhoneNumber = process.env.TWILIOPHONENUMBER;

// Create a Twilio client
const twilioClient = twilio(accountSid, authToken);

export const sendOTPToUser = (phone, otp) => {
    twilioClient.messages.create({
        body: `Your OTP is: ${otp}`,
        from: twilioPhoneNumber,
        to: phone,
    })
        .then(() => {
            console.log('OTP sent successfully');
        })
        .catch((error) => {
            console.error('Failed to send OTP', error);
        });
};
