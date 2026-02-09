import Resume from "../models/Resume.js";

// controller for enhancing resume's professional summary
// POST: /api/ai/enhance-pro-sum
export const uploadResume = async (req, res) => {
    try {
        const { resumeText, title } = req.body;
        const userId = req.userId;

        if (!resumeText) {
            return res.status(400).json({ message: "Missing required data" });
        }

        const systemPrompt = `
You are an expert resume parser.
Extract structured resume data and return ONLY valid JSON.

JSON format:
{
  "professional_summary": "",
  "skills": [],
  "personal_info": {
    "image": "",
    "full_name": "",
    "profession": "",
    "email": "",
    "phone": "",
    "location": "",
    "linkedin": "",
    "website": ""
  },
  "experience": [],
  "project": [],
  "education": [],
  "certifications": []
}
`;

        const response = await ai.chat.completions.create({
            model: process.env.OPEN_AI_MODEL,
            temperature: 0,
            max_tokens: 800,
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: resumeText },
            ],
            response_format: { type: "json_object" },
        });

        let parsedData;
        try {
            parsedData = JSON.parse(response.choices[0].message.content);
        } catch {
            return res.status(500).json({
                message: "Failed to parse resume data",
            });
        }

        const newResume = await Resume.create({
            userId,
            title,
            ...parsedData,
        });

        return res.status(201).json({ resumeId: newResume._id });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
};