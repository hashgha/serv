import { useLanguage } from '../context/LanguageContext.jsx';
import { translations } from '../context/translations.js';

const files = {
  ar: [
    { name: '30-60-90_Plan_Checklist.md', description: 'قائمة تنفيذ لمراحل 90 يوم.', href: '/downloads/30-60-90_Plan_Checklist.md' },
    { name: 'BD_Pipeline.xlsx', description: 'ورقة متابعة الفرص والمراحل.', href: '/downloads/BD_Pipeline.xlsx' },
    { name: 'Outreach_Emails_AR_EN.md', description: 'قوالب البريد واللينكدإن.', href: '/downloads/Outreach_Emails_AR_EN.md' },
    { name: 'B2B_Proposal_Template.md', description: 'مسودة العرض التجاري.', href: '/downloads/B2B_Proposal_Template.md' },
    { name: 'SLA_NDA_Skeleton_AR_EN.md', description: 'أطر SLA وNDA.', href: '/downloads/SLA_NDA_Skeleton_AR_EN.md' },
    { name: 'Anti_Churn_Playbook.md', description: 'دليل منع التسرب.', href: '/downloads/Anti_Churn_Playbook.md' },
    { name: 'City_Expansion_Scoring.xlsx', description: 'نموذج تقييم المدن.', href: '/downloads/City_Expansion_Scoring.xlsx' },
    { name: 'KPIs_Dashboard_Spec.md', description: 'تعريفات المؤشرات والتقارير.', href: '/downloads/KPIs_Dashboard_Spec.md' },
    { name: 'Meeting_Agenda_Minutes_Template.md', description: 'قالب أجندة ومحضر الاجتماع.', href: '/downloads/Meeting_Agenda_Minutes_Template.md' },
  ],
  en: [
    { name: '30-60-90_Plan_Checklist.md', description: 'Execution checklist for first 90 days.', href: '/downloads/30-60-90_Plan_Checklist.md' },
    { name: 'BD_Pipeline.xlsx', description: 'Pipeline tracker with stages and probabilities.', href: '/downloads/BD_Pipeline.xlsx' },
    { name: 'Outreach_Emails_AR_EN.md', description: 'Email and LinkedIn copy templates.', href: '/downloads/Outreach_Emails_AR_EN.md' },
    { name: 'B2B_Proposal_Template.md', description: 'Commercial proposal starter draft.', href: '/downloads/B2B_Proposal_Template.md' },
    { name: 'SLA_NDA_Skeleton_AR_EN.md', description: 'Service levels and NDA skeleton.', href: '/downloads/SLA_NDA_Skeleton_AR_EN.md' },
    { name: 'Anti_Churn_Playbook.md', description: 'Retention playbook.', href: '/downloads/Anti_Churn_Playbook.md' },
    { name: 'City_Expansion_Scoring.xlsx', description: 'City scoring model.', href: '/downloads/City_Expansion_Scoring.xlsx' },
    { name: 'KPIs_Dashboard_Spec.md', description: 'KPI and dashboard specification.', href: '/downloads/KPIs_Dashboard_Spec.md' },
    { name: 'Meeting_Agenda_Minutes_Template.md', description: 'Meeting agenda & minutes template.', href: '/downloads/Meeting_Agenda_Minutes_Template.md' },
  ],
};

export function Downloads() {
  const { language, isArabic } = useLanguage();
  const t = translations[language];

  return (
    <section className={isArabic ? 'text-right' : 'text-left'}>
      <h1 className="section-title text-3xl font-bold text-slate-900 mb-8">{t.downloadsPage.title}</h1>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {files[language].map((file) => (
          <div key={file.name} className="card flex flex-col h-full">
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-slate-900 mb-2">{file.name}</h2>
              <p className="text-slate-600 mb-4">{file.description}</p>
            </div>
            <div>
              <a
                href={file.href}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition"
              >
                {t.downloads}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
