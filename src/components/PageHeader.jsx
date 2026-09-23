function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="bg-gradient-to-br from-emerald-50 via-slate-50 to-amber-50">
      <div className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 lg:px-8 lg:py-20">
        {eyebrow && (
          <span className="inline-block rounded-full bg-emerald-600/10 px-4 py-1.5 text-sm font-semibold text-emerald-700">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">{description}</p>
        )}
      </div>
    </section>
  )
}

export default PageHeader