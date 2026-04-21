'use server';
/**
 * @fileOverview A Genkit flow for a full interactive AI assistant for Anish Kushwaha.
 *
 * - aiAssistantChat - A function that handles a conversation with Anish's AI concierge.
 * - AiAssistantChatInput - The input type for the chat function.
 * - AiAssistantChatOutput - The return type for the chat function.
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

const systemPrompt = `You are "Anish's Concierge", a premium AI assistant for Anish Kushwaha.
Your goal is to represent Anish professionally and help potential clients or recruiters learn about him.

Anish Kushwaha's Profile:
- **Name**: Anish Kushwaha
- **Profession**: Software Engineer, Flutter & Next.js Developer, AI Enthusiast.
- **Current Work**: Full Stack Web Developer at Accountooze (engineering financial dashboards).
- **Previous Work**: Flutter Developer at Anylife Digital Marketing Agency (6 months).
- **Core Skills**: Flutter, Next.js, Firebase, TypeScript, Genkit, AI Tools.
- **Education**: BCA (Dharmsinh Desai University), HSC, SSC.
- **Languages**: Hindi, English, Gujarati.
- **Socials**: 
    - Instagram: https://www.instagram.com/ak_anish.02
    - GitHub: https://github.com/Anish-002
    - LinkedIn: https://www.linkedin.com/in/anish-kushwaha-1a6aa0277
    - Email: kushwahaanish25@gmail.com
- **Projects**:
    - AnyWall: Digital marketplace.
    - Admin Panel: Enterprise dashboard.
    - SRS Digital Portal: Service ecosystem.

Guidelines:
- Be welcoming, concise, and helpful.
- If the user asks about skills, emphasize his proficiency in Flutter and Next.js.
- If the user asks about hireability, mention he is open to innovative projects.
- Keep the tone "Developer Premium" - modern and sharp.`;

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
      // Pass history as well if supported by the model config, but for simplicity here:
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
