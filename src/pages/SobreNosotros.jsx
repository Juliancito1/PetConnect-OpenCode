import PageHeader from '../components/PageHeader.jsx'

const values = [
  {
    title: 'Compromiso',
    description:
      'Acompañamos cada adopción hasta que la mascota y su nueva familia se adaptan plenamente.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Transparencia',
    description:
      'Publicamos la información real de cada mascota: salud, edad y personalidad, sin rodeos.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: 'Bienestar animal',
    description:
      'Cada animal debe vivir en condiciones dignas. Verificamos los hogares antes de entregar.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7z" />
      </svg>
    ),
  },
]

const stats = [
  { value: '1200+', label: 'Mascotas registradas' },
  { value: '500+', label: 'Adopciones exitosas' },
  { value: '150+', label: 'Organizaciones aliadas' },
  { value: '4.9', label: 'Valoración de familias' },
]

function SobreNosotros() {
  return (
    <>
      <PageHeader
        eyebrow="Nuestra misión"
        title="Sobre nosotros"
        description="Conectamos mascotas sin hogar con personas que buscan un compañero fiel, promoviendo la adopción responsable en toda la región."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl shadow-md ring-1 ring-slate-100">
            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=80"
              alt="Dos perros jugando juntos"
              loading="lazy"
              className="h-96 w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
              Un puente entre mascotas y familias
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              PetConnect nació con una idea simple: ninguna mascota debería esperar una vida
              entera por un hogar. Trabajamos junto a refugios y voluntarios para digitalizar
              el proceso de adopción, hacerlo transparente y acercarlo a más familias.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Creemos que la tecnología puede ser una herramienta de cambio social: cada
              publicación es una segunda oportunidad, y cada adopción concreta es el comienzo
              de una historia de amor que dura toda la vida.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
          Nuestros valores
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl bg-white p-7 text-center shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600/10 text-emerald-600">
                {value.icon}
              </span>
              <h3 className="mt-5 text-lg font-bold text-slate-800">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <dl className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dd className="text-3xl font-extrabold text-emerald-600 sm:text-4xl">{stat.value}</dd>
                <dt className="mt-2 text-sm font-medium text-slate-600">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  )
}

export default SobreNosotros