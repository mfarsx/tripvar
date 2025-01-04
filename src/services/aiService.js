import { HfInference } from "@huggingface/inference";

const hf = new HfInference(process.env.GATSBY_HUGGINGFACE_API_KEY);

const SYSTEM_PROMPT = `
You are a helpful travel planning assistant that speaks English. Help users plan their trips with detailed recommendations and local insights.
Current conversation:
`;

export const generateChatResponse = async (messages) => {
  if (!process.env.GATSBY_HUGGINGFACE_API_KEY) {
    throw new Error("Hugging Face API key is missing");
  }

  try {
    const conversation = messages
      .map(
        (msg) => `${msg.role === "user" ? "User" : "Assistant"}: ${msg.content}`
      )
      .join("\n");

    const prompt = `${SYSTEM_PROMPT}\n${conversation}\nAssistant:`;

    const response = await hf.textGeneration({
      model: "mistralai/Mistral-7B-Instruct-v0.2",
      inputs: prompt,
      parameters: {
        max_new_tokens: 150,
        temperature: 0.7,
        top_p: 0.95,
        repetition_penalty: 1.2,
        do_sample: true,
        return_full_text: false,
        wait_for_model: true,
      },
    });

    return response.generated_text.trim();
  } catch (error) {
    console.error("Error generating chat response:", error);
    if (error.message.includes("503")) {
      return "Sorry, the AI service is currently busy. Please try again in a few seconds.";
    }
    if (error.message.includes("rate limit")) {
      return "Sorry, there are too many requests right now. Please wait a moment and try again.";
    }
    throw error;
  }
};
