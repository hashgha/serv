import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import { translations } from '../context/translations.js';

const cards = [
  { key: 'plan', to: '/plan' },
  { key: 'operations', to: '/operations' },
  { key: 'pipeline', to: '/pipeline' },
  { key: 'proposals', to: '/proposals' },
  { key: 'antiChurn', to: '/anti-churn' },
  { key: 'expansion', to: '/expansion' },
  { key: 'kpis', to: '/kpis' },
  { key: 'meetings', to: '/meetings' },
  { key: 'checklists', to: '/checklists' },
];

export function Home() {
  const { language, isArabic } = useLanguage();
  const t = translations[language];

  return (
    <div className={isArabic ? 'text-right' : 'text-left'}>
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900">{t.home.title}</h1>
        <p className="text-lg leading-relaxed text-slate-700 max-w-3xl">{t.home.subtitle}</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <div key={card.key} className="card flex flex-col h-full">
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-slate-900 mb-2">{t.home.cards[card.key].title}</h2>
              <p className="text-slate-600 mb-4">{t.home.cards[card.key].description}</p>
            </div>
            <div>
              <Link
                to={card.to}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition"
              >
                {t.home.enter}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
