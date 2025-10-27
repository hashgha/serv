import { useLanguage } from '../context/LanguageContext.jsx';
import { translations } from '../context/translations.js';

const definitions = {
  ar: [
    'MRR (B2B): الإيراد الشهري المتكرر من العقود.',
    'Repeat Rate: نسبة الطلبات المتكررة.',
    'Cancellation Rate: نسبة الإلغاءات.',
    'SLA Compliance: الالتزام بأوقات الاستجابة والإنجاز.',
    'Pipeline Coverage: قيمة البايبلاين مقابل الهدف.',
  ],
  en: [
    'MRR (B2B): recurring monthly revenue from contracts.',
    'Repeat Rate: share of accounts ordering again.',
    'Cancellation Rate: proportion of jobs canceled.',
    'SLA Compliance: adherence to response and resolution targets.',
    'Pipeline Coverage: pipeline value vs. goal.',
  ],
};

const events = {
  ar: ['lead_created', 'outreach_sent', 'meeting_held', 'proposal_sent', 'contract_signed', 'job_completed', 'job_canceled', 'invoice_sent', 'payment_received'],
  en: ['lead_created', 'outreach_sent', 'meeting_held', 'proposal_sent', 'contract_signed', 'job_completed', 'job_canceled', 'invoice_sent', 'payment_received'],
};

const reports = {
  ar: ['أسبوعي: صفقات/مراحل/احتمالات/عوائق.', 'شهري: الإيراد، الامتثال للـSLA، الإلغاءات، التكرار.'],
  en: ['Weekly: deals, stages, probabilities, blockers.', 'Monthly: revenue, SLA compliance, cancellations, repeat rate.'],
};

const dashboardPreview = {
  ar: [
    { label: 'الصفقات المفتوحة', value: '24' },
    { label: 'معدل الإلغاء', value: '7%' },
    { label: 'الالتزام بالـSLA', value: '92%' },
  ],
  en: [
    { label: 'Open Deals', value: '24' },
    { label: 'Cancellation Rate', value: '7%' },
    { label: 'SLA Compliance', value: '92%' },
  ],
};

export function KPIs() {
  const { language, isArabic } = useLanguage();
  const t = translations[language];

  return (
    <section className={isArabic ? 'text-right' : 'text-left'}>
      <h1 className="section-title text-3xl font-bold text-slate-900 mb-6">{t.kpis.title}</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card">
          <h2 className="text-xl font-semibold text-primary mb-4">{language === 'ar' ? 'التعاريف الأساسية' : 'Core Definitions'}</h2>
          <ul className="space-y-2 text-slate-700 leading-relaxed">
            {definitions[language].map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold text-primary mb-4">{language === 'ar' ? 'أحداث التتبع المقترحة' : 'Suggested Tracking Events'}</h2>
          <ul className="space-y-2 text-slate-700 leading-relaxed">
            {events[language].map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold text-primary mb-4">{language === 'ar' ? 'التقارير' : 'Reporting Cadence'}</h2>
          <ul className="space-y-2 text-slate-700 leading-relaxed">
            {reports[language].map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold text-primary mb-4">Mini Dashboard Preview</h2>
          <div className="space-y-3">
            {dashboardPreview[language].map((metric) => (
              <div key={metric.label} className="flex items-center justify-between bg-slate-100 rounded-xl px-4 py-3">
                <span className="text-sm font-medium text-slate-600">{metric.label}</span>
                <span className="text-xl font-semibold text-slate-900">{metric.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8">
        <a
          href="/downloads/KPIs_Dashboard_Spec.md"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition"
        >
          {t.kpis.download}
        </a>
      </div>
    </section>
  );
}
