import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatMistralAI } from "@langchain/mistralai";
import {HumanMessage} from "langchain";

    const googleModel = new ChatGoogleGenerativeAI({
        model: "gemini-2.5-flash-lite",
        apiKey: process.env.GOOGLE_GEMINI_API_KEY,
    });

    let mistralModel = null;

   export async function generateResponse(message) {
        const response = await googleModel.invoke([
            new HumanMessage(message)
        ]);
        return response.text;
    }
    
    export async function generateResponseMistral(message) {
        if (!mistralModel) {
            mistralModel = new ChatMistralAI({
                apiKey: process.env.MISTRAL_API_KEY,
                model: "mistral-small",
            });
        }
        const response = await mistralModel.invoke([
            new HumanMessage(message)
        ]);
        return response.text;
    }   

    export async function generateChatTitle(message) {
        if (!mistralModel) {
            mistralModel = new ChatMistralAI({
                apiKey: process.env.MISTRAL_API_KEY,
                model: "mistral-small",
            });
        }

        const response = await mistralModel.invoke([
            new HumanMessage(`Generate a concise title for a chat conversation based on the following message: ${message}`)
        ]);
        return response.text;
    }
