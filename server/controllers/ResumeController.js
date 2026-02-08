import Resume from "../models/Resume.js";


// controller for creating resume
// post: /api/resumes/create
export const createResume = async (req, res) => {
    try {
        const userId = req.userId;
        const { title } = req.body;

        const newResume = await Resume.create({ userId, title });

        return res
            .status(201)
            .json({
                message: "Resume created successfully",
                resume: newResume,
            });
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
};
