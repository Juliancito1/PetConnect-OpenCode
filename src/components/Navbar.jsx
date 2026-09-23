import { useState } from 'react'
import { Link } from 'react-router'

const navLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Adoptar', to: '/adoptar' },
  { label: 'Dar en Adopción', to: '/dar-en-adopcion' },
  { label: 'Sobre Nosotros', to: '/sobre-nosotros' },
]

function Logo() {
  return (
    <span className="flex items-center gap-2">
      <svg viewBox="0 0 24 24" fill="url(#pawGradientNav)" className="h-9 w-9" aria-hidden="true">
        <defs>
          <linearGradient id="pawGradientNav" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <ellipse cx="17.2" cy="6.2" rx="1.6" ry="2" />
        <ellipse cx="13.7" cy="3.6" rx="1.1" ry="1.9" />
        <ellipse cx="9.5" cy="4.4" rx="1.2" ry="1.8" transform="rotate(-18 9.5 4.4)" />
        <ellipse cx="6.4" cy="7.4" rx="1.5" ry="2" />
        <path d="M12 8.5c-3 0-6 2.6-6 5.6 0 2.1 1.6 3.9 3.2 3.9.9 0 1.5-.5 2-.5s1.1.5 2 .5 1.5.5 2 .5c1.6 0 3.2-1.8 3.2-3.9 0-3-3-5.6-6-5.6z" />
      </svg>
      <span className="text-2xl font-extrabold tracking-tight text-slate-800">
        Pet<span className="text-emerald-600">Connect</span>
      </span>
    </span>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 shadow-sm backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" aria-label="PetConnect - Inicio">
          <Logo />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-semibold text-slate-600 transition-colors duration-300 hover:text-emerald-600"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/iniciar-sesion"
            className="rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-emerald-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-md active:translate-y-0"
          >
            Iniciar Sesión
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-lg p-2 text-slate-600 transition-colors duration-300 hover:bg-slate-100 hover:text-emerald-600 md:hidden"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-6 w-6">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-6 w-6">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {isOpen && (
        <div className="flex flex-col gap-1 border-t border-slate-100 bg-white px-4 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition-colors duration-300 hover:bg-emerald-50 hover:text-emerald-600"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/iniciar-sesion"
            onClick={() => setIsOpen(false)}
            className="mt-2 rounded-full bg-emerald-600 px-5 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-emerald-700"
          >
            Iniciar Sesión
          </Link>
        </div>
      )}
    </header>
  )
}

export default Navbar