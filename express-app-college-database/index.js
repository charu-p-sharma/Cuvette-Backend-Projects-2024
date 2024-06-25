import express from 'express';
import mongoose from 'mongoose';

const app = express();

app.use();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
