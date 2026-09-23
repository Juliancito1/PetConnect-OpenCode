import { useState } from 'react'
import { Link } from 'react-router'

const inputClass =
  'mt-1.5 w-full rounded-xl border-0 bg-slate-50 px-4 py-2.5 text-slate-800 transition-colors duration-300 ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-1 items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-slate-100 lg:grid-cols-2">
        <div className="relative hidden items-center justify-center bg-gradient-to-br from-emerald-500 via-emerald-600 to-indigo-600 p-10 lg:flex">
          <div className="text-center text-white">
            <svg viewBox="0 0 24 24" fill="currentColor" className="mx-auto h-16 w-16 opacity-90" aria-hidden="true">
              <ellipse cx="17.2" cy="6.2" rx="1.6" ry="2" />
              <ellipse cx="13.7" cy="3.6" rx="1.1" ry="1.9" />
              <ellipse cx="9.5" cy="4.4" rx="1.2" ry="1.8" transform="rotate(-18 9.5 4.4)" />
              <ellipse cx="6.4" cy="7.4" rx="1.5" ry="2" />
              <path d="M12 8.5c-3 0-6 2.6-6 5.6 0 2.1 1.6 3.9 3.2 3.9.9 0 1.5-.5 2-.5s1.1.5 2 .5 1.5.5 2 .5c1.6 0 3.2-1.8 3.2-3.9 0-3-3-5.6-6-5.6z" />
            </svg>
            <h2 className="mt-6 text-2xl font-extrabold tracking-tight">Bienvenido de nuevo</h2>
            <p className="mt-3 text-emerald-100">
              Accedé a tu cuenta para gestionar tus adopciones y publicaciones.
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-10">
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-800">Iniciar sesión</h1>
          <p className="mt-2 text-slate-600">
            Ingresá tus datos para continuar con PetConnect.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-5" noValidate>
            <div>
              <label htmlFor="email" className="text-sm font-semibold text-slate-800">
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="tu@email.com"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-semibold text-slate-800">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="••••••••"
                className={inputClass}
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-600">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                />
                Recordarme
              </label>
              <a href="#" className="font-semibold text-emerald-600 transition-colors duration-300 hover:text-emerald-700">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-emerald-600 px-8 py-3.5 text-base font-semibold text-white shadow-md shadow-emerald-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg active:translate-y-0"
            >
              Iniciar sesión
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-600">
            ¿Todavía no tenés cuenta?{' '}
            <Link
              to="/iniciar-sesion"
              className="font-semibold text-emerald-600 transition-colors duration-300 hover:text-emerald-700"
            >
              Crear cuenta
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Login