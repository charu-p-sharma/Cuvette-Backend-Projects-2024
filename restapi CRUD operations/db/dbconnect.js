import mongoose from 'mongoose';
import DB_NAME from '../utils/constants.js'

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("Connected to Mongodb");
    }
    catch (error) {
        console.log("Failed to connect MONGODB");
        process.exit(1);
    }
}
export default connectDB;
