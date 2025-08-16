export default function Timeline({ entries = [] }) {
  return (
    // make room on the left for the year column
    <ol className="relative ml-28 border-l border-gray-300 dark:border-gray-700">
      {entries.map((e, i) => (
        <li key={i} className="relative pl-12 pb-12 last:pb-0">
          {/* Year in left gutter (to the LEFT of the rail) */}
          <time
            className="absolute -left-28 top-1 w-24 text-right tabular-nums
                       text-sm text-gray-400 dark:text-gray-500"
          >
            {e.year}
          </time>

          {/* Small dot centered on the rail */}
          <span
            aria-hidden
            className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full
                       bg-gray-400 dark:bg-gray-500"
          />

          {/* Right side: logo + content */}
          <div className="flex items-start gap-4">
            {e.logo && (
              <img
                src={e.logo}              
                alt={e.logoAlt ?? ""}
                className="h-[150px] w-[150px] rounded-lg shadow"
              />
            )}

            <div>
              <h3 className="text-lg font-semibold">{e.title}</h3>

              {e.subtitle && (
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {e.subtitle}
                </p>
              )}

              {e.body && (
                <div className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
                  {e.body}
                </div>
              )}

              {e.points?.length > 0 && (
                <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                  {e.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
