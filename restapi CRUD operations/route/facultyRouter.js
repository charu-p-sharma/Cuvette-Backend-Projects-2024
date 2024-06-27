import express from 'express';
import Faculty from '../models/faculty.model.js';

const router = express.Router();

router.post('/api/faculty', async (req, res) => {
    const { name, email, department, designation } = req.body;
    try {
        const faculty = await Faculty.create({ name, email, department, designation });
        res.status(200).json(faculty);
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ error: 'An error occurred while creating the faculty' });
    }
});

router.get('/api/faculty', async (req, res) => {
    try {
        const faculty = await Faculty.find();
        res.status(200).json(faculty);
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ error: 'An error occurred while finding the faculty' });
    }
});

router.put("/api/faculty/:id", async (req, res) => {
    const { id } = req.params;
    const { name, email, department, designation } = req.body;
    try {
        const user = await Faculty.findByIdAndUpdate(
            id,
            { name, email, department, designation },
            { new: true, runValidators: true }
        );
        if (!user) {
            return res.status(404).json({ message: "Faculty not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get("/api/faculty/:id", async (req, res) => {
    const { id } = req.params;
    const employee = await Faculty.findById(id);
    if (!employee) {
        return res.status(404).json({ message: "Faculty not found" });
    }
    res.status(200).json(employee);
});

router.delete("/api/faculty/:id", async (req, res) => {
    const { id } = req.params;
    const { name, email, department, designation } = req.body;
    try {
        const user = await Faculty.findByIdAndDelete(
            id,
            { name, email, department, designation },
            { new: true, runValidators: true }
        );
        if (!user) {
            return res.status(404).json({ message: "Faculty not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get("/api/faculty/:id", async (req, res) => {
    const { id } = req.params;
    const employee = await Faculty.findById(id);
    if (!employee) {
        return res.status(404).json({ message: "Faculty not found" });
    }
    res.status(200).json(employee);
});


export default router;
