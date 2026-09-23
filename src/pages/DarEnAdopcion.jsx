import { useState } from 'react'
import { useForm } from 'react-hook-form'
import PageHeader from '../components/PageHeader.jsx'

const speciesOptions = [
  { value: '', label: 'Seleccioná una especie' },
  { value: 'perro', label: 'Perro' },
  { value: 'gato', label: 'Gato' },
]

const ageOptions = [
  { value: '', label: 'Seleccioná el rango de edad' },
  { value: '0-6 meses', label: '0 a 6 meses' },
  { value: '6-12 meses', label: '6 a 12 meses' },
  { value: '1-3 años', label: '1 a 3 años' },
  { value: '3-7 años', label: '3 a 7 años' },
  { value: '7+ años', label: '7 años o más' },
]

const inputClass =
  'mt-1.5 w-full rounded-xl border-0 bg-slate-50 px-4 py-2.5 text-slate-800 transition-colors duration-300 ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500'

function FieldError({ message }) {
  if (!message) return null
  return <p className="mt-1.5 text-sm font-medium text-rose-600">{message}</p>
}

function DarEnAdopcion() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = () => {
    setSubmitted(true)
  }

  return (
    <>
      <PageHeader
        eyebrow="Ayudá a uno que lo necesita"
        title="Dar en adopción"
        description="Si no podés seguir cuidando a tu mascota, ayudala a encontrar un nuevo hogar. Completá el formulario y la publicaremos en PetConnect."
      />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        {submitted ? (
          <div className="flex flex-col items-center gap-4 rounded-3xl bg-white p-10 text-center shadow-sm ring-1 ring-slate-100">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600/10">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-emerald-600" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
            <h2 className="text-2xl font-extrabold text-slate-800">¡Publicación enviada!</h2>
            <p className="max-w-md text-slate-600">
              Gracias por darle esta oportunidad a tu mascota. Nuestro equipo revisará la
              publicación y te contactará a la brevedad.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="grid gap-5 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="species" className="text-sm font-semibold text-slate-800">
                  Tipo de mascota
                </label>
                <select
                  id="species"
                  {...register('species', { required: 'Elegí una especie' })}
                  className={inputClass}
                >
                  {speciesOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <FieldError message={errors.species?.message} />
              </div>

              <div>
                <label htmlFor="name" className="text-sm font-semibold text-slate-800">
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Ej: Bruno"
                  {...register('name', {
                    required: 'Ingresá el nombre',
                    minLength: { value: 2, message: 'Mínimo 2 caracteres' },
                  })}
                  className={inputClass}
                />
                <FieldError message={errors.name?.message} />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="age" className="text-sm font-semibold text-slate-800">
                  Edad aproximada
                </label>
                <select id="age" {...register('age', { required: 'Seleccioná la edad' })} className={inputClass}>
                  {ageOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <FieldError message={errors.age?.message} />
              </div>

              <div>
                <label htmlFor="location" className="text-sm font-semibold text-slate-800">
                  Ubicación
                </label>
                <input
                  id="location"
                  type="text"
                  placeholder="Ciudad, País"
                  {...register('location', { required: 'Ingresá la ubicación' })}
                  className={inputClass}
                />
                <FieldError message={errors.location?.message} />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="text-sm font-semibold text-slate-800">
                Descripción
              </label>
              <textarea
                id="description"
                rows="4"
                placeholder="Contanos sobre su personalidad, salud y necesidades"
                {...register('description', {
                  required: 'Ingresá una descripción',
                  minLength: { value: 20, message: 'Contanos un poco más (mínimo 20 caracteres)' },
                })}
                className={inputClass}
              />
              <FieldError message={errors.description?.message} />
            </div>

            <div>
              <label htmlFor="img" className="text-sm font-semibold text-slate-800">
                Foto (URL)
              </label>
              <input
                id="img"
                type="url"
                placeholder="https://..."
                {...register('img', { required: 'Ingresá una URL de la foto' })}
                className={inputClass}
              />
              <FieldError message={errors.img?.message} />
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-emerald-600 px-8 py-3.5 text-base font-semibold text-white shadow-md shadow-emerald-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg active:translate-y-0"
            >
              Publicar mascota
            </button>
          </form>
        )}
      </section>
    </>
  )
}

export default DarEnAdopcion