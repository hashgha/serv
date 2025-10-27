import { useLanguage } from '../context/LanguageContext.jsx';
import { translations } from '../context/translations.js';

const steps = {
  ar: [
    {
      title: 'داخل المنتج',
      bullets: [
        'تذكير مزايا الإتمام داخل التطبيق.',
        'رسائل الدفع الذكية.',
        'تحذير قبل الإلغاء + بديل (خصم/موعد بديل/فني بديل).',
      ],
    },
    {
      title: 'اتفاقيات المزوّدين',
      bullets: [
        'ربط مستحقات المزوّد بإتمام الطلب داخل التطبيق.',
        'حوافز للالتزام بالـSLA والرضا.',
      ],
    },
    {
      title: 'عمليات التشغيل',
      bullets: [
        'متابعة يومية لحالات P1/P2.',
        'اتصال بشري للحالات المعرّضة للإلغاء خلال ساعتين.',
      ],
    },
    {
      title: 'التحليلات',
      bullets: [
        'لوحة أسباب الإلغاء.',
        'نسبة التكرار.',
        'الرضا.',
        'زمن الاستجابة/الإنجاز.',
      ],
    },
  ],
  en: [
    {
      title: 'In-product',
      bullets: [
        'Highlight the value of completing inside the app.',
        'Smart payment nudges.',
        'Pre-cancel warning + alternative (discount/reschedule/alternate technician).',
      ],
    },
    {
      title: 'Provider Agreements',
      bullets: [
        'Tie payouts to finishing the job inside the platform.',
        'Incentives for SLA adherence and satisfaction.',
      ],
    },
    {
      title: 'Operations',
      bullets: [
        'Daily review of P1/P2 cases.',
        'Human outreach within 2h for at-risk cancellations.',
      ],
    },
    {
      title: 'Analytics',
      bullets: [
        'Cancellation reasons dashboard.',
        'Repeat rate.',
        'Customer satisfaction.',
        'Response and completion times.',
      ],
    },
  ],
};

export function AntiChurn() {
  const { language, isArabic } = useLanguage();
  const t = translations[language];

  return (
    <section className={isArabic ? 'text-right' : 'text-left'}>
      <h1 className="section-title text-3xl font-bold text-slate-900 mb-8">{t.antiChurn.title}</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {steps[language].map((step) => (
          <div key={step.title} className="card">
            <h2 className="text-xl font-semibold text-primary mb-4">{step.title}</h2>
            <ul className="space-y-2 text-slate-700 leading-relaxed">
              {step.bullets.map((bullet) => (
                <li key={bullet}>• {bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <a
          href="/downloads/Anti_Churn_Playbook.md"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition"
        >
          {t.antiChurn.download}
        </a>
      </div>
    </section>
  );
}
