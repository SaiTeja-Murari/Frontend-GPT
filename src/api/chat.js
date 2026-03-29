const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

export async function sendMessage(message) {
  const response = await fetch(`${API_URL}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Failed to send message");
  }

  return response.json();
}
