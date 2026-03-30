import { buildSystemPrompt } from './buildPrompt';

export async function generateWebsite(config: any, onChunk: (text: string) => void): Promise<void> {
  // We check for the NVIDIA key instead
  const apiKey = import.meta.env.VITE_NVIDIA_API_KEY;
  
  if (!apiKey) {
    throw new Error("Missing VITE_NVIDIA_API_KEY in environment. Please add to .env");
  }

  const systemPrompt = buildSystemPrompt(config);

  try {
    const response = await fetch("/api/nvidia/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "meta/llama-3.1-405b-instruct",
        max_tokens: 4096,
        stream: true,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: config.userPrompt || "Generate a site based on the provided configuration." }
        ]
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("NVIDIA API Error:", errText);
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    if (!response.body) throw new Error("No response body");

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      
      const chunk = decoder.decode(value, { stream: true });
      const lines = chunk.split('\n');
      
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith('data: ') && trimmed !== 'data: [DONE]') {
          try {
            const data = JSON.parse(trimmed.slice(6));
            if (data.choices && data.choices[0].delta && data.choices[0].delta.content) {
              onChunk(data.choices[0].delta.content);
            }
          } catch (e) {
            // Ignore parse errors on incomplete chunks
          }
        }
      }
    }
  } catch (error) {
    console.error("Generation failed:", error);
    throw error;
  }
}

