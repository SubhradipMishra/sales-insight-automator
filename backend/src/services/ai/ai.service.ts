import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

export const generateSummary = async (data: any): Promise<string> => {
  try {

    const prompt = `
You are a sales analytics expert.

Analyze the following sales dataset and generate a short professional executive summary.

Dataset:
${JSON.stringify(data)}
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant", 
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.3,
      max_tokens: 300,
    });

    return completion.choices[0].message.content ?? "No summary generated";

  } catch (error) {
    console.error("AI generation error:", error);
    throw new Error("AI summary generation failed");
  }
};