import { useLanguage } from '../context/LanguageContext.jsx';
import { translations } from '../context/translations.js';

const planContent = {
  ar: [
    {
      title: '0–30 يومًا',
      items: [
        'بناء قائمة مستهدفة بالرياض (≥100 جهة).',
        'تجهيز القوالب (Proposal / NDA / SLA).',
        'تفعيل البايبلاين وتحديد KPIs.',
      ],
    },
    {
      title: '31–60 يومًا',
      items: [
        'إغلاق أول 10 عقود صغيرة–متوسطة.',
        'إطلاق حملة B2B متعددة القنوات.',
        'تطبيق إجراءات منع التسرب.',
      ],
    },
    {
      title: '61–90 يومًا',
      items: [
        'فتح مدينة/قطاع تجريبي (Pilot).',
        'رفع معدل التكرار على حسابات B2B.',
        'تقرير ربع سنوي للإدارة.',
      ],
    },
  ],
  en: [
    {
      title: '0–30 Days',
      items: [
        'Build a 100+ target account list in Riyadh.',
        'Finalize proposal / NDA / SLA templates.',
        'Activate the pipeline and lock KPIs.',
      ],
    },
    {
      title: '31–60 Days',
      items: [
        'Close the first 10 small-to-mid B2B contracts.',
        'Launch multi-channel B2B outreach.',
        'Roll out anti-churn interventions.',
      ],
    },
    {
      title: '61–90 Days',
      items: [
        'Open a pilot city/segment.',
        'Increase repeat rate across B2B accounts.',
        'Deliver the quarterly executive report.',
      ],
    },
  ],
};

const checklistLinks = {
  ar: '/downloads/30-60-90_Plan_Checklist.md',
  en: '/downloads/30-60-90_Plan_Checklist.md',
};

export function Plan() {
  const { language, isArabic } = useLanguage();
  const t = translations[language];
  const columns = planContent[language];

  return (
    <section className={isArabic ? 'text-right' : 'text-left'}>
      <h1 className="section-title text-3xl font-bold text-slate-900 mb-8">{t.plan.title}</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {columns.map((column) => (
          <div key={column.title} className="card">
            <h2 className="text-xl font-semibold text-primary mb-4">{column.title}</h2>
            <ul className="space-y-3 text-slate-700 leading-relaxed">
              {column.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <a
          href={checklistLinks[language]}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent text-white font-semibold hover:bg-accent/90 transition"
        >
          {t.plan.checklist}
        </a>
      </div>
    </section>
  );
}
