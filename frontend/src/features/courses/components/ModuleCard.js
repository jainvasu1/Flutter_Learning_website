/** One module in the learning path. */
export default function ModuleCard({ index, title, description, lessons }) {
  return (
    <article className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-white/25 hover:bg-white/[0.07]">
      <div className="flex items-center justify-between">
        <span className="font-mono text-sm text-white/40">{String(index).padStart(2, "0")}</span>
        <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/55">
          Coming soon
        </span>
      </div>

      <h3 className="mt-6 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">{description}</p>

      <div className="mt-6">
        <div className="flex justify-between text-xs text-white/45">
          <span>{lessons} lessons</span>
          <span>0%</span>
        </div>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-0 rounded-full bg-white" />
        </div>
      </div>
    </article>
  );
}
