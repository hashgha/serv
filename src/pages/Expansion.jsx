import { useLanguage } from '../context/LanguageContext.jsx';
import { translations } from '../context/translations.js';

const scoringRows = [
  {
    factor: 'Population Index',
    weight: '0.20',
    example: 'Riyadh — 9/10',
    notes: 'Larger population provides dense demand clusters.',
  },
  {
    factor: 'B2B Stock',
    weight: '0.20',
    example: 'Eastern Province — 7/10',
    notes: 'Volume of compounds, FM operators, multi-site accounts.',
  },
  {
    factor: 'Avg Income / ARPU',
    weight: '0.15',
    example: 'Riyadh — 8/10',
    notes: 'Ability to sustain subscription-style contracts.',
  },
  {
    factor: 'Competition Density',
    weight: '0.15',
    example: 'Jeddah — 5/10',
    notes: 'Lower score is better; weigh incumbent FM vendors.',
  },
  {
    factor: 'Logistics & Ops Cost',
    weight: '0.10',
    example: 'Dammam — 6/10',
    notes: 'Travel times, technician supply, warehousing.',
  },
  {
    factor: 'Expected CAC',
    weight: '0.10',
    example: 'Pilot city — 4/10',
    notes: 'Acquisition cost vs. expected contract value.',
  },
  {
    factor: 'Regulatory Ease',
    weight: '0.05',
    example: 'Economic cities — 7/10',
    notes: 'Licensing, compliance, municipality approvals.',
  },
  {
    factor: 'Partnership Footprint',
    weight: '0.05',
    example: 'Local developers — 6/10',
    notes: 'Alliances that accelerate entry (developers, FM partners).',
  },
  {
    factor: 'Weighted Score',
    weight: '—',
    example: 'Auto-calculated',
    notes: 'Multiply factor rating by weight for each city.',
  },
];

const descriptions = {
  ar: [
    'اختر مدينة تجريبية (Pilot) خلال 60–90 يوم بناءً على البيانات الفعلية.',
    'جمّع نقاط التقييم من فرق المبيعات، التشغيل، والمالية لتحديد الجاهزية.',
    'استخدم الجدول التالي كنموذج مرجعي قابل للتخصيص.',
  ],
  en: [
    'Select a pilot city within 60–90 days using actual data.',
    'Collect scoring inputs from sales, operations, and finance.',
    'Use the scoring table as a customizable reference.',
  ],
};

export function Expansion() {
  const { language, isArabic } = useLanguage();
  const t = translations[language];

  return (
    <section className={isArabic ? 'text-right' : 'text-left'}>
      <h1 className="section-title text-3xl font-bold text-slate-900 mb-6">{t.expansion.title}</h1>
      <div className="space-y-3 text-slate-700 leading-relaxed mb-8">
        {descriptions[language].map((line) => (
          <p key={line}>• {line}</p>
        ))}
      </div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>{language === 'ar' ? 'العامل' : 'Factor'}</th>
              <th>{language === 'ar' ? 'الوزن' : 'Weight'}</th>
              <th>{language === 'ar' ? 'مثال تقييم' : 'Sample Rating'}</th>
              <th>{language === 'ar' ? 'ملاحظات' : 'Notes'}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {scoringRows.map((row) => (
              <tr key={row.factor}>
                <td>{row.factor}</td>
                <td>{row.weight}</td>
                <td>{row.example}</td>
                <td>{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6">
        <a
          href="/downloads/City_Expansion_Scoring.xlsx"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition"
        >
          {t.expansion.download}
        </a>
      </div>
    </section>
  );
}
