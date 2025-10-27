import { useLanguage } from '../context/LanguageContext.jsx';
import { translations } from '../context/translations.js';

const pipelineRows = [
  {
    account: 'Alpha Towers',
    sector: 'Real Estate',
    city: 'Riyadh',
    contact: 'Noura Al-Fahad',
    stage: 'S2',
    probability: '35%',
    mrr: '18,500',
    nextStep: 'Demo corporate portal — 5 May',
    risk: 'Need legal review',
  },
  {
    account: 'Metro Facilities',
    sector: 'Facility Management',
    city: 'Riyadh',
    contact: 'Hashim Al-Harbi',
    stage: 'S3',
    probability: '55%',
    mrr: '24,000',
    nextStep: 'Send SLA redlines — 7 May',
    risk: 'Competing incumbent',
  },
  {
    account: 'Green Oasis Compounds',
    sector: 'Residential',
    city: 'Jeddah',
    contact: 'Maya Khalil',
    stage: 'S1',
    probability: '20%',
    mrr: '9,750',
    nextStep: 'Book discovery call — 9 May',
    risk: 'Budget confirmation pending',
  },
];

export function Pipeline() {
  const { language, isArabic } = useLanguage();
  const t = translations[language];

  return (
    <section className={isArabic ? 'text-right' : 'text-left'}>
      <h1 className="section-title text-3xl font-bold text-slate-900 mb-6">{t.pipeline.title}</h1>
      <div className="space-y-4 text-slate-700 leading-relaxed mb-8">
        {t.pipeline.intro.map((line) => (
          <p key={line}>• {line}</p>
        ))}
      </div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>{language === 'ar' ? 'اسم الجهة' : 'Account Name'}</th>
              <th>{language === 'ar' ? 'القطاع' : 'Sector'}</th>
              <th>{language === 'ar' ? 'المدينة' : 'City'}</th>
              <th>{language === 'ar' ? 'اسم جهة الاتصال' : 'Contact Name'}</th>
              <th>{language === 'ar' ? 'المرحلة' : 'Stage'}</th>
              <th>{language === 'ar' ? 'احتمال الإغلاق %' : 'Close Probability %'}</th>
              <th>{language === 'ar' ? 'Est. MRR (ر.س)' : 'Est. MRR (SAR)'}</th>
              <th>{language === 'ar' ? 'الخطوة التالية / تاريخها' : 'Next Step / Date'}</th>
              <th>{language === 'ar' ? 'المخاطر / الملاحظات' : 'Risk / Notes'}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {pipelineRows.map((row) => (
              <tr key={row.account}>
                <td>{row.account}</td>
                <td>{row.sector}</td>
                <td>{row.city}</td>
                <td>{row.contact}</td>
                <td>{row.stage}</td>
                <td>{row.probability}</td>
                <td>{row.mrr}</td>
                <td>{row.nextStep}</td>
                <td>{row.risk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6">
        <a
          href="/downloads/BD_Pipeline.xlsx"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition"
        >
          {t.pipeline.download}
        </a>
      </div>
    </section>
  );
}
