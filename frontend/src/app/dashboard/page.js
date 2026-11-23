import AppHeader from "@/components/layout/AppHeader";
import ModuleCard from "@/features/courses/components/ModuleCard";
import { LEARNING_MODULES } from "@/features/courses/data/modules";

export const metadata = {
  title: "Dashboard",
};

export const viewport = {
  themeColor: "#000000",
};

const totalLessons = LEARNING_MODULES.reduce((sum, m) => sum + m.lessons, 0);

const STATS = [
  { label: "Modules", value: LEARNING_MODULES.length },
  { label: "Lessons", value: totalLessons },
  { label: "Completed", value: "0%" },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col bg-black text-white [color-scheme:dark]">
      <AppHeader />

      <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-12">
        {/* Welcome */}
        <section>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Welcome back</h1>
          <p className="mt-3 max-w-xl text-white/55">
            Pick up where you left off, or start your Flutter learning journey with the first module.
          </p>
        </section>

        {/* Stats */}
        <section aria-label="Your progress" className="mt-10 grid grid-cols-3 gap-3 sm:max-w-lg">
          {STATS.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
              <p className="text-2xl font-semibold tabular-nums">{stat.value}</p>
              <p className="mt-1 text-xs text-white/50">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Learning path */}
        <section className="mt-14">
          <h2 className="text-xl font-semibold">Your learning path</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {LEARNING_MODULES.map((module, i) => (
              <ModuleCard key={module.id} index={i + 1} {...module} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
