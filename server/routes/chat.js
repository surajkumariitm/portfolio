import express from 'express';
import { HfInference } from '@huggingface/inference';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    // Initialize Hugging Face Inference inside the route to ensure env vars are loaded
    const hf = new HfInference(process.env.HF_TOKEN);

    const { message, history } = req.body;
    
    console.log("Received chat request");
    // console.log("History:", JSON.stringify(history, null, 2));
    
    // Convert history from Gemini format (role: 'model'/'user', parts: [{text: ...}]) 
    // to OpenAI/HF format (role: 'assistant'/'user', content: string)
    const formattedHistory = (history || []).map(msg => ({
      role: msg.role === 'model' ? 'assistant' : 'user',
      content: msg.parts[0].text
    }));

    // Add current message
    const messages = [
      ...formattedHistory,
      { role: 'user', content: message }
    ];

    console.log("Sending to HF:", messages.length, "messages");

    const response = await hf.chatCompletion({
      model: "Qwen/Qwen2.5-72B-Instruct",
      messages: messages,
      max_tokens: 1024,
      temperature: 0.7
    });

    console.log("HF Response received");
    const text = response.choices[0].message.content;

    res.status(200).json({ text });
  } catch (error) {
    console.error("Hugging Face API Error Details:", error);
    res.status(500).json({ message: "Failed to get response from AI", error: error.message });
  }
});

export default router;
