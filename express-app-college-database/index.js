import express from 'express';
import dotenv from 'dotenv/config';
import connectDB from './db/dbconnect.js';
import { Faculty } from './models/faculty.model.js';

const app = express();
app.use(express.json());

connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Server running on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log('MongoDB connection error: ', error);
    })

app.get('/', (req, res) => {
    res.send(req.body);
});

app.post('/api/college', async (req, res) => {
    try {
        const faculty = await Faculty.create(req.body);
        res.status(200).json(faculty);
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ error: 'An error occurred while creating the faculty' });
    }
})

app.get('/api/college', async (req, res) => {
    try {
        const faculty = await Faculty.find();
        res.status(200).json(faculty);
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ error: 'An error occurred while finding the faculty' });
    }
})
