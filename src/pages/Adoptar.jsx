import { useState } from 'react'
import PetCard from '../components/PetCard.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { pets } from '../data/pets.js'

const filters = [
  { value: 'todas', label: 'Todas' },
  { value: 'perro', label: 'Perros' },
  { value: 'gato', label: 'Gatos' },
]

function Adoptar() {
  const [species, setSpecies] = useState('todas')
  const filteredPets = species === 'todas' ? pets : pets.filter((pet) => pet.species === species)

  return (
    <>
      <PageHeader
        eyebrow="Adopta una mascota"
        title="Mascotas en adopción"
        description="Cada una de estas mascotas espera por un hogar lleno de cariño. Elegí una especie, conocé sus historias y cambiale la vida."
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setSpecies(filter.value)}
              className={
                species === filter.value
                  ? 'rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-emerald-600/30 transition-colors duration-300'
                  : 'rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-600 transition-colors duration-300 hover:border-emerald-300 hover:text-emerald-600'
              }
            >
              {filter.label}
            </button>
          ))}
        </div>

        {filteredPets.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredPets.map((pet) => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </div>
        ) : (
          <p className="mt-16 text-center text-slate-600">
            No hay mascotas de esta especie disponibles por el momento.
          </p>
        )}
      </section>
    </>
  )
}

export default Adoptar