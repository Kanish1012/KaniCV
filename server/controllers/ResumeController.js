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

//get user resume by id
// GET: /api/resumes/get
export const getResumeById = async (req, res) => {
    try {
        const userId = req.userId;
        const { resumeId } = req.params;

        const resume = await Resume.findOne(
            { _id: resumeId, userId: req.userId },
            "-__v -createdAt -updatedAt",
        );

        if (!resume) {
            return res.status(404).json({ message: "Resume not found" });
        }

        return res.status(200).json({ resume });
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
};

// get resume by id public
// GET: /api/resumes/public/:resumeId

export const getPublicResumeById = async (req, res) => {
    try {
        const { resumeId } = req.params;
        const resume = await Resume.findOne(
            { _id: resumeId, public: true },
            "-__v -updatedAt -userId",
        );

        if (!resume) {
            return res.status(404).json({ message: "Resume not found" });
        }

        return res.status(200).json({ resume });
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
};
