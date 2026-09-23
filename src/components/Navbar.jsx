import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import Logo from './Logo.jsx'

const navLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Adoptar', to: '/adoptar' },
  { label: 'Dar en Adopción', to: '/dar-en-adopcion' },
  { label: 'Sobre Nosotros', to: '/sobre-nosotros' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const desktopLinkClass = ({ isActive }) =>
    `text-sm font-semibold transition-colors duration-300 ${
      isActive ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'
    }`

  const mobileLinkClass = ({ isActive }) =>
    `rounded-lg px-3 py-2 text-sm font-semibold transition-colors duration-300 ${
      isActive ? 'bg-emerald-50 text-emerald-600' : 'text-slate-600 hover:bg-emerald-50 hover:text-emerald-600'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 shadow-sm backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" aria-label="PetConnect - Inicio">
          <Logo />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={desktopLinkClass}>
              {link.label}
            </NavLink>
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
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setIsOpen(false)}
              className={mobileLinkClass}
            >
              {link.label}
            </NavLink>
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