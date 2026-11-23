import { siteConfig } from "@/config/site";
import LoginForm from "@/features/auth/components/LoginForm";

export const metadata = {
  title: "Log in",
};

export default function LoginPage() {
  return (
    <main className="flex flex-1 items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm rounded-lg border border-border bg-surface p-8 shadow-sm">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-text">Welcome back</h1>
          <p className="mt-1 text-sm text-text-muted">Log in to {siteConfig.name}</p>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
