import Resume from "../models/Resume.js";

// controller for creating resume
// post: /api/resumes/create
export const createResume = async (req, res) => {
    try {
        const userId = req.userId;
        const { title } = req.body;

        const newResume = await Resume.create({ userId, title });

        return res.status(201).json({
            message: "Resume created successfully",
            resume: newResume,
        });
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
};

// controller for deleting resumes
// delete: /api/resumes/delete
export const deleteResume = async (req, res) => {
    try {
        const userId = req.userId;
        const { resumeId } = req.params;

        await Resume.findOneAndDelete({ userId, _id: resumeId });

        return res.status(204).json({
            message: "Resume deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
};
