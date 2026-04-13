
import { GoogleGenAI, Type } from "@google/genai";
import { RiskAssessmentData, RiskResult, ChatMessage } from "../types";

// Security Check: Ensure API key is present before initializing
const API_KEY = process.env.API_KEY;

const validateKey = () => {
  if (!API_KEY) {
    throw new Error("SEC_AUTH_MISSING: Secure API Key not found in environment.");
  }
};

const ai = new GoogleGenAI({ apiKey: API_KEY || '' });

// Handle API errors with descriptive, user-friendly messages
const handleApiError = (error: any): string => {
  console.error("Compliance Engine Error:", error);
  if (error.message?.includes("429")) return "System Quota Exceeded: Please wait a moment while we throttle the secure node.";
  if (error.message?.includes("401") || error.message?.includes("403")) return "System Authentication Failure: Secure handshake failed.";
  return "Infrastructure Connection Error: The compliance node is temporarily unreachable.";
};

export const getAIAssistantResponse = async (history: ChatMessage[], message: string) => {
  try {
    validateKey();
    const model = 'gemini-3-pro-preview';
    const chatHistory = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    const chat = ai.chats.create({
      model,
      history: chatHistory,
      config: {
        systemInstruction: `You are a Senior AML and BSA (Bank Secrecy Act) Compliance Specialist at ComplyAnto. 
        Your tone is professional, direct, and extremely concise. 
        Your focus is on AML (Anti-Money Laundering) and BSA regulations. 
        Keep responses very short (maximum 2-3 sentences).
        Always include a tiny disclaimer that you are an AI and not providing legal advice.`,
      },
    });

    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    return handleApiError(error);
  }
};

export const generatePolicySkeleton = async (industry: string, jurisdiction: string) => {
  try {
    validateKey();
    const model = 'gemini-3-pro-preview';
    const prompt = `Generate a comprehensive high-level AML/BSA Policy Table of Contents and Key Focus Areas for a business in the ${industry} industry located in ${jurisdiction}. 
    Include sections for: 
    1. Internal Controls & Governance
    2. KYC/CDD procedures
    3. Transaction Monitoring
    4. Reporting (SAR/CTR)
    5. Independent Testing.
    Return the output as a structured text outline.`;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        temperature: 0.7,
      }
    });

    return response.text;
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};

export const performRiskAssessment = async (data: RiskAssessmentData): Promise<RiskResult> => {
  try {
    validateKey();
    const model = 'gemini-3-pro-preview';
    const prompt = `Perform a high-level simulated AML/Sanctions screening for the following profile:
      Customer Name: ${data.customerName}
      Phone Number: ${data.phoneNumber || 'Not provided'}
      Physical Address: ${data.address || 'Not provided'}
      E-wallet Address: ${data.walletAddress || 'Not provided'}
      Country/Jurisdiction: ${data.country}
      Declared PEP Status: ${data.isPep ? 'Yes' : 'No'}
      
      Evaluate EXPLICITLY against ALL of the following major global sanction lists:
      1. OFAC (US Treasury Department - United States)
      2. EU Consolidated List (Europe)
      3. OFCI / OSFI (Office of the Superintendent of Financial Institutions - Canada)
      4. UK HM Treasury (UK HMT - United Kingdom)
      5. UN Security Council Consolidated Sanctions List
      6. Global PEP (Politically Exposed Persons) Databases
      7. FATF Jurisdictional Risk (Evaluating ${data.country} AML/CFT framework)
      8. Global Adverse Media & Regulatory Watchlists
      
      For EACH list above, provide a status (Clear, Caution, or Match Found) and specific details of the check.
      The riskLevel should be Low, Medium, High, or Critical based on the findings. 
      Ensure the summary is professional and defensible for an AML audit trail.`;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            riskLevel: { type: Type.STRING },
            summary: { type: Type.STRING },
            listVerification: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  status: { type: Type.STRING },
                  details: { type: Type.STRING }
                },
                required: ["name", "status"]
              }
            },
            recommendations: { type: Type.ARRAY, items: { type: Type.STRING } },
          },
          required: ["riskLevel", "summary", "recommendations", "listVerification"],
        },
      },
    });

    const resText = response.text || '{}';
    const parsed = JSON.parse(resText);
    const timestamp = new Date().getTime();
    const randomStr = Math.random().toString(36).substring(2, 7).toUpperCase();
    const caseId = `CA-${randomStr}-${timestamp.toString().slice(-4)}`;

    return {
      ...parsed,
      caseId,
      timestamp: new Date().toISOString(),
      screeningHits: []
    } as RiskResult;
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};
