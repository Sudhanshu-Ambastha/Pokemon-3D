import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import router from './routes/db.route.js';

const app = express();
dotenv.config();
const port = process.env.PORT;
const allowedOrigins = [ 'https://pokemon3d-api.onrender.com',  'http://localhost:3000', 'http://localhost:5000','http://localhost:8080','http://localhost:5173','http://127.0.0.1:5173'];

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: false, useUnifiedTopology: false }
)
.then(() => console.log('MongoDB connected successfully.'))
.catch(err => console.error('Error connecting to MongoDB:', err));

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.error("CORS Error: Origin", origin, "is not allowed.");
            callback(new Error('Not allowed by CORS'));
        }
    }
}));

app.use('/v1', router); 

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!'); 
});

app.get('/', (req, res) => {
  res.send(`
     Welcome to the Pokemon3D API!\n
     See the docs at https://www.postman.com/weather-data/pokemon3d-api/documentation/8u7tw60/pokemon3d-api for available endpoints.\n
    To see the available 3D models, visit the https://sudhanshu-ambastha.github.io/Pokemon-3D/.
  `);
});

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});