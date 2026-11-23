import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ROUTES } from "@/constants/routes";

export const metadata = {
  title: "Dashboard",
};

// Placeholder page shown after a successful login.
export default function DashboardPage() {
  return (
    <main className="flex flex-1 items-center justify-center p-6">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-semibold text-text">You are logged in</h1>
        <p className="mt-2 text-text-muted">Welcome to {siteConfig.name}.</p>
        <Link href={ROUTES.login} className="mt-6 inline-block text-primary hover:text-primary-hover">
          Back to login
        </Link>
      </div>
    </main>
  );
}
