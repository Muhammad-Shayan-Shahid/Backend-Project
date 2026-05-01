import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

export async function testAI() {
    // ✅ Create model inside function so env is already loaded
    const model = new ChatGoogleGenerativeAI({
        model: "gemini-2.5-flash-lite",
        apiKey: process.env.GOOGLE_GEMINI_API_KEY,
    });

    const response = await model.invoke("What is the capital of Pakistan?")
    console.log(response.text)
}