import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './db/dbconnect.js';
import router from './route/facultyRouter.js'

const app = express();
app.use(bodyParser.json());

connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Server running on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log('MongoDB connection error: ', error);
    })


app.use("/", router)