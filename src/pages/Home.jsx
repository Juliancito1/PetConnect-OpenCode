import { Link } from 'react-router'

const pets = [
  {
    id: 1,
    name: 'Luna',
    age: '2 años',
    location: 'Buenos Aires, AR',
    img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80',
    alt: 'Gato llamado Luna',
  },
  {
    id: 2,
    name: 'Max',
    age: '1 año',
    location: 'Córdoba, AR',
    img: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80',
    alt: 'Perro llamado Max',
  },
  {
    id: 3,
    name: 'Milo',
    age: '3 años',
    location: 'Rosario, AR',
    img: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?auto=format&fit=crop&w=600&q=80',
    alt: 'Gato llamado Milo',
  },
  {
    id: 4,
    name: 'Nala',
    age: '6 meses',
    location: 'Mendoza, AR',
    img: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80',
    alt: 'Perro llamado Nala',
  },
]

const stats = [
  { value: '1200+', label: 'Mascotas registradas' },
  { value: '500+', label: 'Adopciones exitosas' },
  { value: '4.9', label: 'Valoración de familias' },
]

function Hero() {
  return (
    <section className="bg-gradient-to-br from-emerald-50 via-slate-50 to-amber-50">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-600/10 px-4 py-1.5 text-sm font-semibold text-emerald-700">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
              <path d="M12 8.5c-3 0-6 2.6-6 5.6 0 2.1 1.6 3.9 3.2 3.9.9 0 1.5-.5 2-.5s1.1.5 2 .5 1.5.5 2 .5c1.6 0 3.2-1.8 3.2-3.9 0-3-3-5.6-6-5.6z" />
              <circle cx="17.2" cy="6.2" r="2" />
              <circle cx="13.7" cy="3.6" r="1.9" />
              <circle cx="9.5" cy="4.4" r="1.8" />
              <circle cx="6.4" cy="7.4" r="2" />
            </svg>
            Adopción responsable
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-800 sm:text-5xl lg:text-6xl">
            Encuentra a tu <span className="text-emerald-600">compañero ideal</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Miles de mascotas esperan por un hogar lleno de amor. Explora nuestro catálogo
            de adopción y dale a un animal la oportunidad de reescribir su historia.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/adoptar"
              className="w-full rounded-full bg-emerald-600 px-8 py-3.5 text-base font-semibold text-white shadow-md shadow-emerald-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg active:translate-y-0 sm:w-auto"
            >
              Adoptar ahora
            </Link>
            <Link
              to="/sobre-nosotros"
              className="w-full rounded-full border-2 border-indigo-600/20 bg-white px-8 py-3.5 text-base font-semibold text-indigo-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-600 hover:bg-indigo-50 active:translate-y-0 sm:w-auto"
            >
              Conocer más
            </Link>
          </div>
        </div>

        <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white/70 px-6 py-5 text-center shadow-sm ring-1 ring-slate-100 backdrop-blur">
              <dt className="order-2 mt-1 text-sm font-medium text-slate-600">{stat.label}</dt>
              <dd className="order-1 text-3xl font-extrabold text-emerald-600">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function PetsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
            Mascotas en adopción
          </h2>
          <p className="mt-2 text-slate-600">
            Conocé a quienes buscan un hogar lleno de cariño.
          </p>
        </div>
        <Link
          to="/adoptar"
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 transition-colors duration-300 hover:text-emerald-700"
        >
          Ver todas
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {pets.map((pet) => (
          <article
            key={pet.id}
            className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={pet.img}
                alt={pet.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm backdrop-blur">
                En adopción
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-3 p-5">
              <h3 className="text-lg font-bold text-slate-800">{pet.name}</h3>
              <ul className="space-y-1.5 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-4 w-4 text-indigo-600" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  {pet.age}
                </li>
                <li className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-indigo-600" aria-hidden="true">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {pet.location}
                </li>
              </ul>
              <button
                type="button"
                className="mt-auto w-full rounded-full bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-emerald-700"
              >
                Ver detalles
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Home() {
  return (
    <>
      <Hero />
      <PetsSection />
    </>
  )
}

export default Home