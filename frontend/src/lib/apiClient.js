// "/api" is proxied to the backend by next.config.mjs, so this works from any device.
const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "/api";

/**
 * Small fetch wrapper for the backend API.
 * Returns parsed JSON, or throws an Error carrying the server's message.
 */
export async function apiRequest(path, { method = "GET", body } = {}) {
  let response;
  try {
    response = await fetch(`${API_URL}${path}`, {
      method,
      headers: body ? { "Content-Type": "application/json" } : undefined,
      body: body ? JSON.stringify(body) : undefined,
    });
  } catch {
    throw new Error("Cannot reach the server. Is the backend running?");
  }

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message ?? "Something went wrong. Please try again.");
  }
  return data;
}
