"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";
import { login } from "../api";
import { validateLogin } from "../validation";

const inputClass =
  "h-14 w-full rounded-full border border-white/10 bg-white/[0.08] px-6 text-[15px] text-white placeholder:text-white/40 transition-colors focus:border-white/50 focus:bg-white/[0.12] focus:outline-none aria-invalid:border-red-400/70";

export default function LoginForm() {
  const router = useRouter();
  // Boxes start pre-filled with the one allowed account (from .env.local).
  const [values, setValues] = useState({
    email: process.env.NEXT_PUBLIC_LOGIN_EMAIL ?? "",
    password: process.env.NEXT_PUBLIC_LOGIN_PASSWORD ?? "",
  });
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setFormError("");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validateLogin(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    setFormError("");
    try {
      await login(values);
      router.push(ROUTES.dashboard);
    } catch (error) {
      setFormError(error.message);
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
      {formError && (
        <p
          role="alert"
          className="rounded-2xl border border-red-400/30 bg-red-500/10 px-5 py-3 text-center text-sm text-red-300"
        >
          {formError}
        </p>
      )}

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email address"
          value={values.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={inputClass}
        />
        {errors.email && (
          <p id="email-error" className="px-6 text-sm text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            aria-invalid={Boolean(errors.password)}
            aria-describedby={errors.password ? "password-error" : undefined}
            className={`${inputClass} pr-20`}
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute inset-y-0 right-0 rounded-r-full px-6 text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        {errors.password && (
          <p id="password-error" className="px-6 text-sm text-red-400">
            {errors.password}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-3 h-14 rounded-full bg-white text-[15px] font-semibold text-black transition hover:bg-white/90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Logging in…" : "Continue"}
      </button>
    </form>
  );
}
