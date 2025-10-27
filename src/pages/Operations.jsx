import { useLanguage } from '../context/LanguageContext.jsx';
import { translations } from '../context/translations.js';

const cadence = {
  ar: [
    {
      title: 'يوميًا',
      items: [
        'متابعة الطلبات الحرجة (P1/P2).',
        'معالجة الشكاوى.',
        'مزامنة سريعة مع التقنية لأي عوائق تؤثر على التحويل/الإكمال.',
        'رصد منافسين وعروض السوق.',
      ],
    },
    {
      title: 'أسبوعيًا',
      items: [
        'تحديث البايبلاين (مراحل/احتمالات/توقعات الإغلاق).',
        'اجتماع تسويق (B2B Email/LinkedIn/Calls).',
        'اجتماع تقنية (بوابة الشركات، التقارير، مكافحة التسرب).',
        'اجتماع تشغيل (الطاقة الاستيعابية للمزوّدين).',
      ],
    },
    {
      title: 'شهريًا',
      items: [
        'تقرير أداء BD.',
        'مراجعة التسعير والباقات.',
        'تقييم مزودي الخدمة.',
      ],
    },
  ],
  en: [
    {
      title: 'Daily',
      items: [
        'Review critical requests (P1/P2).',
        'Handle escalations and complaints.',
        'Sync quickly with product/tech on blockers impacting conversion or completion.',
        'Track competitor offers and market updates.',
      ],
    },
    {
      title: 'Weekly',
      items: [
        'Refresh the pipeline (stages / probabilities / expected close).',
        'Marketing sync (B2B Email / LinkedIn / Calls).',
        'Tech sync (corporate portal, reporting, anti-churn backlog).',
        'Operations sync (provider capacity, SLAs).',
      ],
    },
    {
      title: 'Monthly',
      items: [
        'BD performance report.',
        'Pricing and packaging review.',
        'Service provider evaluation.',
      ],
    },
  ],
};

export function Operations() {
  const { language, isArabic } = useLanguage();
  const t = translations[language];
  const blocks = cadence[language];

  return (
    <section className={isArabic ? 'text-right' : 'text-left'}>
      <h1 className="section-title text-3xl font-bold text-slate-900 mb-8">{t.operations.title}</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {blocks.map((block) => (
          <div key={block.title} className="card">
            <h2 className="text-xl font-semibold text-primary mb-4">{block.title}</h2>
            <ul className="space-y-3 text-slate-700 leading-relaxed">
              {block.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
