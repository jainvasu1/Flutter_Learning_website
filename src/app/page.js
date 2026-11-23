import { siteConfig } from "@/config/site";

// Temporary placeholder. The real homepage will be built in a later step.
export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center p-6">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-semibold text-text">{siteConfig.name}</h1>
        <p className="mt-2 text-text-muted">Project initialized. Ready for development.</p>
      </div>
    </main>
  );
}
