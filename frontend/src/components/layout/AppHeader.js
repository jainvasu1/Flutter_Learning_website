import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ROUTES } from "@/constants/routes";

/** Top bar for logged-in pages. */
export default function AppHeader() {
  return (
    <header className="border-b border-white/10">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href={ROUTES.dashboard} className="text-base font-semibold tracking-tight text-white">
          {siteConfig.shortName}
        </Link>
        <Link
          href={ROUTES.login}
          className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/80 transition-colors hover:border-white/40 hover:text-white"
        >
          Log out
        </Link>
      </div>
    </header>
  );
}
