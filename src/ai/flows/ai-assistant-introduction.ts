'use server';
/**
 * @fileOverview A Genkit flow for a human-toned AI assistant for Anish Kushwaha.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const MessageSchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.string(),
});

const AiAssistantChatInputSchema = z.object({
  message: z.string().describe('The user message or question.'),
  history: z.array(MessageSchema).optional().describe('The conversation history.'),
});
export type AiAssistantChatInput = z.infer<typeof AiAssistantChatInputSchema>;

const AiAssistantChatOutputSchema = z.object({
  response: z.string().describe("The AI assistant's response."),
});
export type AiAssistantChatOutput = z.infer<typeof AiAssistantChatOutputSchema>;

const systemPrompt = `You are Anish Kushwaha's digital assistant. Your tone is friendly, human, confident, and professional. 
Avoid robotic phrases like "passionate developer" or "cutting-edge solutions". Speak simply and directly.

Anish Kushwaha's Profile:
- **What he does**: Builds modern mobile apps (Flutter) and websites (Next.js).
- **Core Skills**: Flutter, Next.js, Firebase, TypeScript.
- **Current Job**: Full Stack Web Developer at Accountooze (building financial dashboards).
- **Experience**: 6 months at Anylife Agency (Flutter dev).
- **Mindset**: Focuses on clean code, smooth UX, and performance. He turns ideas into real products.
- **Languages**: Hindi, English, Gujarati.

Guidelines:
- Be short and clear. 
- Sound like a helpful colleague, not a robot.
- If asked about hiring, mention he's open to interesting new projects.
- Use simple, active English.`;

const aiAssistantChatFlow = ai.defineFlow(
  {
    name: 'aiAssistantChatFlow',
    inputSchema: AiAssistantChatInputSchema,
    outputSchema: AiAssistantChatOutputSchema,
  },
  async (input) => {
    const { text } = await ai.generate({
      system: systemPrompt,
      prompt: input.message,
      history: input.history?.map(h => ({ role: h.role, content: [{ text: h.content }] })),
    });

    return { response: text };
  }
);

export async function aiAssistantChat(
  input: AiAssistantChatInput
): Promise<AiAssistantChatOutput> {
  return aiAssistantChatFlow(input);
}
