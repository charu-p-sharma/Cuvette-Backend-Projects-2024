import mongoose from 'mongoose';

const facultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    department: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    addressCity: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const Faculty = mongoose.model("Faculty", facultySchema);
