'use server';
/**
 * @fileOverview A Genkit flow for generating a personalized introduction to Anish Kushwaha.
 *
 * - aiAssistantIntroduction - A function that generates an introduction script for Anish Kushwaha.
 * - AiAssistantIntroductionInput - The input type for the aiAssistantIntroduction function.
 * - AiAssistantIntroductionOutput - The return type for the aiAssistantIntroduction function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AiAssistantIntroductionInputSchema = z.object({
  context:
    z.string()
      .optional()
      .describe(
        'Optional context or specific focus for the introduction (e.g., "highlight his frontend skills" or "introduce him as a mobile developer").'
      ),
});
export type AiAssistantIntroductionInput = z.infer<typeof AiAssistantIntroductionInputSchema>;

const AiAssistantIntroductionOutputSchema = z.object({
  introduction: z.string().describe("A personalized introduction script for Anish Kushwaha."),
});
export type AiAssistantIntroductionOutput = z.infer<typeof AiAssistantIntroductionOutputSchema>;

const prompt = ai.definePrompt({
  name: 'aiAssistantIntroductionPrompt',
  input: { schema: AiAssistantIntroductionInputSchema },
  output: { schema: AiAssistantIntroductionOutputSchema },
  prompt: `You are an AI assistant tasked with introducing Anish Kushwaha, a skilled developer and AI enthusiast.
Your goal is to provide a personalized and engaging introduction based on the context provided, highlighting his key skills and background.

Anish Kushwaha's Profile:
- **Name**: Anish Kushwaha
- **Core Strengths**: Best learning skills in Technology and Developments, Quick learner, AI enthusiast.
- **Skills**: Mobile Development, Frontend Development, Backend Development, Programming.
- **Education**: SSC, HSC, BCA.
- **Languages**: Hindi, English, Gujarati.
- **Extra Skills**: Video editing, Logo design, AI tools.
- **AI Engagement**: Anish actively uses and demonstrates proficiency with AI tools.

If a 'context' is provided, tailor the introduction to that specific focus. Otherwise, provide a general overview of his professional profile, ensuring to mention his AI enthusiasm and proficiency.
The introduction should be welcoming and professional.

Context (if provided): {{{context}}}

Generate the introduction script:`,
});

const aiAssistantIntroductionFlow = ai.defineFlow(
  {
    name: 'aiAssistantIntroductionFlow',
    inputSchema: AiAssistantIntroductionInputSchema,
    outputSchema: AiAssistantIntroductionOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
        throw new Error('Failed to generate introduction.');
    }
    return output;
  }
);

export async function aiAssistantIntroduction(
  input: AiAssistantIntroductionInput
): Promise<AiAssistantIntroductionOutput> {
  return aiAssistantIntroductionFlow(input);
}
