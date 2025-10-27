import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import { translations } from '../context/translations.js';

export function Layout() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col" lang={language}>
      <Navbar />
      <main className="flex-1 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Outlet />
        </div>
      </main>
      <footer className="bg-slate-900 text-slate-200 text-center py-6 text-sm">{t.footer}</footer>
    </div>
  );
}
