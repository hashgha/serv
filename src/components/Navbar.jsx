import { NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import { translations } from '../context/translations.js';
import clsx from 'clsx';

const navLinks = [
  { to: '/', key: 'home' },
  { to: '/plan', key: 'plan' },
  { to: '/operations', key: 'operations' },
  { to: '/pipeline', key: 'pipeline' },
  { to: '/campaigns', key: 'campaigns' },
  { to: '/proposals', key: 'proposals' },
  { to: '/anti-churn', key: 'antiChurn' },
  { to: '/expansion', key: 'expansion' },
  { to: '/kpis', key: 'kpis' },
  { to: '/meetings', key: 'meetings' },
  { to: '/checklists', key: 'checklists' },
  { to: '/downloads', key: 'downloads' },
];

export function Navbar() {
  const { language, switchLanguage, isArabic } = useLanguage();
  const t = translations[language];

  return (
    <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between gap-4">
            <span className="text-xl font-semibold text-primary">{t.brand}</span>
            <div className="flex items-center gap-2">
              <button
                onClick={switchLanguage}
                className="px-3 py-1 text-sm font-semibold rounded-full bg-slate-100 text-slate-700 hover:bg-primary hover:text-white transition"
              >
                {t.languageToggle}
              </button>
              <NavLink
                to="/downloads"
                className="px-3 py-1 text-sm font-semibold rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition"
              >
                {t.downloads}
              </NavLink>
            </div>
          </div>
          <nav className="flex flex-wrap gap-2 lg:justify-end">
            {navLinks.map((link) => (
              <NavLink
                key={link.key}
                to={link.to}
                className={({ isActive }) =>
                  clsx(
                    'px-3 py-1 text-sm rounded-full font-medium transition border border-transparent',
                    isActive ? 'bg-primary text-white' : 'bg-slate-100 text-slate-700 hover:bg-primary/10',
                    isArabic ? 'ml-0' : 'mr-0'
                  )
                }
              >
                {t.nav[link.key]}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
