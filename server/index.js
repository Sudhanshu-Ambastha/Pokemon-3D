import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

import router from './routes/db.route.js';

const app = express();
dotenv.config();
const port = process.env.PORT;

mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: false, useUnifiedTopology: false }
)
.then(() => console.log('MongoDB connected successfully.'))
.catch(err => console.error('Error connecting to MongoDB:', err));

app.use(cors());

const limiter = rateLimit({
    windowMs: 60 * 1000, 
    max: 5, 
    standardHeaders: true,
    legacyHeaders: false,
    message: 'Too many requests, please try again after 1 minute.',
});

app.use('/v1/', limiter);

app.use('/v1', router); 

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!'); 
});

app.get('/', (req, res) => {
    res.send(`
       Welcome to the Pokemon3D API!\n
       See the docs at https://documenter.getpostman.com/view/29725199/2sAYX8KMU8 for available endpoints.\n
       To see the available 3D models, visit the https://sudhanshu-ambastha.github.io/Pokemon-3D/.\n
       else proceed to the /v1/${Form} endpoint to get the list of all pokemon.
    `);
});

app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
});