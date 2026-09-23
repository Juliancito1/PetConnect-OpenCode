import { useId } from 'react'

function Logo({ light = false }) {
  const gradientId = useId()

  return (
    <span className="flex items-center gap-2">
      <svg viewBox="0 0 24 24" fill={`url(#${gradientId})`} className="h-9 w-9" aria-hidden="true">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={light ? '#34d399' : '#059669'} />
            <stop offset="100%" stopColor={light ? '#fbbf24' : '#f59e0b'} />
          </linearGradient>
        </defs>
        <ellipse cx="17.2" cy="6.2" rx="1.6" ry="2" />
        <ellipse cx="13.7" cy="3.6" rx="1.1" ry="1.9" />
        <ellipse cx="9.5" cy="4.4" rx="1.2" ry="1.8" transform="rotate(-18 9.5 4.4)" />
        <ellipse cx="6.4" cy="7.4" rx="1.5" ry="2" />
        <path d="M12 8.5c-3 0-6 2.6-6 5.6 0 2.1 1.6 3.9 3.2 3.9.9 0 1.5-.5 2-.5s1.1.5 2 .5 1.5.5 2 .5c1.6 0 3.2-1.8 3.2-3.9 0-3-3-5.6-6-5.6z" />
      </svg>
      <span className={`text-2xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-slate-800'}`}>
        Pet<span className={light ? 'text-emerald-400' : 'text-emerald-600'}>Connect</span>
      </span>
    </span>
  )
}

export default Logo