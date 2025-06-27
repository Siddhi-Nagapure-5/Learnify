
import dotenv from "dotenv";
dotenv.config();
import { OpenAI } from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export const generateRoadmapFromGPT = async (goal, duration) => {
    const prompt = `Generate a week-by-week learning roadmap to achieve the goal: "${goal}" in ${duration}. Each week should include specific tasks, recommended tools, and online resources. Format clearly with week numbers and bullet points.`;

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo", // or "gpt-4"
            messages: [{ role: "user", content: prompt }],
            temperature: 0.7,
            max_tokens: 1500,
        });

        const roadmap = response.choices[0].message.content;
        return roadmap;
    } catch (err) {
        console.error("❌ GPT Error:", err.message);
        throw new Error("Failed to generate roadmap from GPT");
    }
};
