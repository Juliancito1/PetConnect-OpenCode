import { Link, useParams } from 'react-router'
import { pets } from '../data/pets.js'

const steps = [
  'Completá la solicitud de adopción',
  'Conocerás a tu futura mascota',
  'Te acompañamos en la entrega',
  'Seguimiento y post-adopción',
]

function PetDetail() {
  const { id } = useParams()
  const pet = pets.find((item) => String(item.id) === id)

  if (!pet) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-slate-800">Mascota no encontrada</h1>
        <p className="mt-3 text-slate-600">La mascota que buscás ya no está disponible en el catálogo.</p>
        <Link
          to="/adoptar"
          className="mt-8 inline-block rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-emerald-700"
        >
          Volver al catálogo
        </Link>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        to="/adoptar"
        className="group inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 transition-colors duration-300 hover:text-emerald-600"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" aria-hidden="true">
          <path d="M19 12H5M11 18l-6-6 6-6" />
        </svg>
        Volver a Adoptar
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-3xl shadow-md ring-1 ring-slate-100">
          <img src={pet.img} alt={pet.alt} className="h-80 w-full object-cover sm:h-[520px]" />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-emerald-700 shadow-sm backdrop-blur">
            {pet.species === 'gato' ? 'Gato' : 'Perro'}
          </span>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-800">{pet.name}</h1>
            <p className="mt-2 text-lg text-slate-600">
              Esperando por su hogar definitivo.
            </p>
          </div>

          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5 text-indigo-600" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              <div>
                <dt className="text-xs font-medium text-slate-500">Edad</dt>
                <dd className="font-semibold text-slate-800">{pet.age}</dd>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-indigo-600" aria-hidden="true">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <dt className="text-xs font-medium text-slate-500">Ubicación</dt>
                <dd className="font-semibold text-slate-800">{pet.location}</dd>
              </div>
            </div>
          </dl>

          <div>
            <h2 className="text-lg font-bold text-slate-800">Sobre {pet.name}</h2>
            <p className="mt-2 leading-relaxed text-slate-600">{pet.description}</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-800">Proceso de adopción</h2>
            <ol className="mt-3 space-y-2.5">
              {steps.map((step, index) => (
                <li key={step} className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600/10 text-xs font-bold text-emerald-700">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <button
            type="button"
            className="w-full rounded-full bg-emerald-600 px-8 py-3.5 text-base font-semibold text-white shadow-md shadow-emerald-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg active:translate-y-0 sm:w-auto sm:self-start"
          >
            Adoptar a {pet.name}
          </button>
        </div>
      </div>
    </section>
  )
}

export default PetDetail