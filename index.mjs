import express from 'express';
import mongoose from 'mongoose';
import config from './config/Config.mjs';
import route from './routes/UserRoute.mjs';
import cors from 'cors';


const app = express();
// Middleware for parsing JSON data
app.use(express.json());

// Enable CORS to allow cross-origin requests
app.use(cors());

// Use the defined routes
app.use('/', route);

// Connect to MongoDB using the provided configuration
// Connect to MongoDB using the provided configuration
// Connect to MongoDB using the provided configuration
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // Fix the write concern configuration
    writeConcern: {
        w: 'majority',
        wtimeout: 0,
        provenance: 'clientSupplied',
    },
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });


const port = config.port;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
