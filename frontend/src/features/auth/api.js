import { apiRequest } from "@/lib/apiClient";

export function login({ email, password }) {
  return apiRequest("/auth/login", {
    method: "POST",
    body: { email: email.trim(), password },
  });
}
