// controller for enhancing resume's professional summary
// POST: /api/ai/enhance-pro-sum

export const enhanceProfessionalSummary = async (req, res) => {
    try {
        const { userContent } = req.body;
        if (!userContent) {
            return res.status(400).json({ message: "Missing required data" });
        }

        const response = await ai.chat.completions.create({
            model: process.env.OPEN_AI_MODEL,
            temperature: 0.7,
            max_tokens: 80,
            messages: [
                {
                    role: "system",
                    content:
                        "You are an expert in resume writing. Your task is to enhance the professional summary of a resume. The summary should be 1–2 sentences highlighting key skills, experience, and career objectives. Make it compelling, ATS-friendly, and return only the text.",
                },
                {
                    role: "user",
                    content: userContent,
                },
            ],
        });

        const enhancedContent = response.choices[0].message.content;
        return res.status(200).json({ enhancedContent });
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
};

// controller for enhancing a resume's job description
// POST: /api/ai/enhance-job-desc

export const enhanceJobDescription = async (req, res) => {
    try {
        const { userContent } = req.body;

        if (!userContent) {
            return res.status(400).json({ message: "Missing required data" });
        }

        const response = await ai.chat.completions.create({
            model: process.env.OPEN_AI_MODEL,
            temperature: 0.7,
            max_tokens: 120,
            messages: [
                {
                    role: "system",
                    content:
                        "You are an expert in resume writing. Enhance the job description of a resume. The description should be 1–2 sentences highlighting key responsibilities and achievements. Use strong action verbs and quantifiable results where possible. Make it ATS-friendly and return only the text.",
                },
                {
                    role: "user",
                    content: userContent,
                },
            ],
        });

        return res.status(200).json({
            enhancedContent: response.choices[0].message.content,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
};

