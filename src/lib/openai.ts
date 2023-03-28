import { Configuration, OpenAIApi } from "openai";

const confifuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

export const openai = new OpenAIApi(confifuration)