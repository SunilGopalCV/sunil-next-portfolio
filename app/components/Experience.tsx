const Experience = () => {
  return (
    <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 py-0 lg:py-24">
      <h2 className="hidden lg:block text-sm font-bold uppercase tracking-widest text-[rgb(var(--primary-rgb))] mb-8">
        Experience
      </h2>
      {/* Added group, padding, rounded-lg, and hover effects */}
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 p-4 rounded-lg hover:bg-white/5 hover:shadow-lg">
        <header className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-[rgb(var(--secondary-rgb))] sm:col-span-2">
          Sep — Dec 2024
        </header>
        <div className="sm:col-span-6">
          <h3 className="font-medium leading-snug text-slate-200">
            <span className="font-bold">
              Software Engineer Intern · HealthyKid
            </span>
          </h3>
          <ul className="mt-2 list-disc list-inside text-[rgb(var(--secondary-rgb))] space-y-2">
            <li>
              Scaled user engagement by 23% by designing and developing a
              comprehensive health scoring mobile application using React Native
              and an optimized backend architecture.{" "}
            </li>
            <li>
              Improved health parameter accuracy by 20% through advanced
              research, algorithm optimization, and machine learning model
              integration.{" "}
            </li>
            <li>
              Reduced database query latency by 17% through efficient schema
              design and query optimization.{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12">
        <a
          className="inline-flex items-center font-bold leading-tight text-slate-200 group"
          aria-label="View Full Résumé"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <span className="border-b border-transparent pb-px transition group-hover:border-white motion-reduce:transition-none">
              View Full&nbsp;Résumé
            </span>
            <span className="whitespace-nowrap">
              <span className="ml-1.5 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none">
                ↗
              </span>
            </span>
          </span>
        </a>
      </div>
    </section>
  );
};

export default Experience;
