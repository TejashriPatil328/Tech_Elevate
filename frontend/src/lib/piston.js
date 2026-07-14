const API_URL = import.meta.env.VITE_API_URL;

export async function executeCode(language, code) {
  const response = await fetch(`${API_URL}/execute`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      language,
      code,
    }),
  });

  return await response.json();
}