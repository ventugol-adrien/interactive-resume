import {
  GenerativeModel,
  GoogleGenerativeAI,
  ModelParams,
  ResponseSchema,
} from "@google/generative-ai";
import z, { ZodType } from "zod";

export const createModel = (
  systemInstructions: string,
  schema?: ResponseSchema
) => {
  const model = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
  const modelParams: ModelParams = schema
    ? {
        model: "gemini-2.5-flash-lite",
        generationConfig: {
          responseMimeType: "application/json",
          responseSchema: schema,
        },
        systemInstruction: systemInstructions,
      }
    : { model: "gemini-2.5-flash-lite", systemInstruction: systemInstructions };
  return model.getGenerativeModel({ ...modelParams });
};

export const generateContent = async <T extends ZodType>(
  model: GenerativeModel,
  prompt: string,
  zodSchema: T
): Promise<z.infer<typeof zodSchema>> => {
  const { response } = await model.generateContent(prompt);
  console.log(response.text());
  const data =
    model.generationConfig.responseMimeType === "application/json"
      ? zodSchema.parse(JSON.parse(response.text()))
      : zodSchema.parse(response.text());
  return data;
};
