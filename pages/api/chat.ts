import OpenAI from "openai";
import { Assistant } from "../../types";
const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_JENTZ_PHARMA_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function callOpenAI(message: string) {
  try {
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        { role: "user", content: message },
        {
          role: "assistant",
          content:
            "Here are the medication details as described in the leaflet: 'You are a pharmacist with a leaflet. Provide answers based on the leaflet",
        },
      ],
      model: "gpt-4",
      max_tokens: 4096,
    });

    const data = chatCompletion.choices[0].message;
    return {
      content: data.content,
      role: data.role,
    } as Assistant;
  } catch (error) {
    console.error(error);
  }
}
