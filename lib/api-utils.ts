export function getInternalApiUrl(path: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  return `${baseUrl}/api${path}`;
}

export function getExternalApiUrl(path: string) {
  const baseUrl = process.env.API_URL || "http://localhost:8080";
  return `${baseUrl}${path}`;
}

export async function apiRequest(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" = "GET",
  body?: any,
) {
  const options: RequestInit = {
    method,
    cache: "no-store",
  };

  if (body && method !== "GET") {
    if (body instanceof FormData) {
      options.body = body;
    } else {
      options.headers = { "Content-Type": "application/json" };
      options.body = JSON.stringify(body);
    }
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json();
}
