import { useLanguage } from '../context/LanguageContext.jsx';
import { translations } from '../context/translations.js';

const proposalSections = {
  ar: [
    {
      title: 'الملخص التنفيذي',
      items: [
        'المشكلة: تفاوت جودة الخدمة، إلغاءات، غياب مؤشرات قابلة للقياس.',
        'الحل: عقد صيانة/تشغيل مدعوم بـ SLA وتقارير شهرية وبوابة للشركات.',
      ],
    },
    {
      title: 'نطاق الخدمات',
      items: ['كهرباء، سباكة، تكييف، نظافة، إدارة مزودين فرعيين (حسب الحاجة).', 'نقطة اتصال واحدة + تتبع أوامر العمل.'],
    },
    {
      title: 'الباقات والتسعير (أمثلة)',
      table: [
        ['الباقة', 'النطاق', 'زمن الاستجابة', 'زمن الإنجاز', 'التقارير', 'السعر شهريًا (ر.س)'],
        ['أساسية', 'مواقع صغيرة', '6 ساعات', '48 ساعة', 'شهري', '{{xxxx}}'],
        ['قياسية', 'مواقع متوسطة', '4 ساعات', '24 ساعة', 'نصف شهري', '{{xxxx}}'],
        ['متقدمة', 'مواقع متعددة', '2 ساعة', '12 ساعة', 'أسبوعي', '{{xxxx}}'],
      ],
    },
    {
      title: 'الجدول الزمني للتنفيذ',
      items: ['T0 توقيع العقد', 'T+7 تجهيز الوصول والبوابة', 'T+14 بدء التشغيل.'],
    },
    {
      title: 'المتطلبات من العميل',
      items: ['نقاط الاتصال، صلاحيات الدخول، سياسة السلامة، إعدادات الفوترة.'],
    },
    {
      title: 'الشروط الرئيسية',
      items: ['الفوترة، مدد الإشعار، أحكام الإنهاء، الجزاءات/الحوافز.'],
    },
    {
      title: 'منطقة التوقيع',
      items: ['الاسم: ___________', 'التاريخ: ___________', 'الختم: ___________'],
    },
  ],
  en: [
    {
      title: 'Executive Summary',
      items: [
        'Problem: inconsistent service quality, churn, lack of measurable metrics.',
        'Solution: facilities contract backed by SLA, monthly reporting, and a corporate portal.',
      ],
    },
    {
      title: 'Scope of Services',
      items: ['Electrical, plumbing, HVAC, cleaning, landscaping, subcontractor coordination.', 'Single point of contact + job tracking.'],
    },
    {
      title: 'Packages & Pricing (Sample)',
      table: [
        ['Package', 'Scope', 'Response Time', 'Resolution Time', 'Reporting', 'Monthly Fee (SAR)'],
        ['Essential', 'Smaller sites', '6h', '48h', 'Monthly', '{{xxxx}}'],
        ['Standard', 'Mid-size sites', '4h', '24h', 'Bi-monthly', '{{xxxx}}'],
        ['Premium', 'Multi-site', '2h', '12h', 'Weekly', '{{xxxx}}'],
      ],
    },
    {
      title: 'Timeline',
      items: ['T0 Contract signature', 'T+7 Access and portal setup', 'T+14 Go-live'],
    },
    {
      title: 'Client Requirements',
      items: ['Points of contact, site access, safety policy, billing preferences.'],
    },
    {
      title: 'Key Terms',
      items: ['Billing, notice periods, termination terms, incentives/penalties.'],
    },
    {
      title: 'Signature Block',
      items: ['Name: ___________', 'Date: ___________', 'Stamp: ___________'],
    },
  ],
};

const legalCards = {
  ar: [
    {
      title: 'SLA (AR)',
      bullets: [
        'الاستجابة: P1 خلال 2 ساعة / P2 خلال 4 ساعات / P3 خلال 8 ساعات.',
        'الإنجاز المستهدف: P1 خلال 12 ساعة / P2 خلال 24 ساعة / P3 خلال 72 ساعة.',
        'توفر الخدمة: 6 أيام في الأسبوع (أو 24/7 للباقة المتقدمة).',
        'التقارير: شهريًا يشمل الالتزام بالـSLA والإلغاءات والشكاوى.',
        'المسودات أولية وتتطلب اعتمادًا قانونيًا قبل الإرسال.',
      ],
    },
    {
      title: 'SLA (EN)',
      bullets: [
        'Response: P1 within 2h / P2 within 4h / P3 within 8h.',
        'Resolution: P1 within 12h / P2 within 24h / P3 within 72h.',
        'Availability: 6 days/week or 24/7 for premium tiers.',
        'Reporting: Monthly SLA, completions, cancellations, complaints.',
        'Drafts only — seek legal approval before sharing.',
      ],
    },
    {
      title: 'NDA (AR)',
      bullets: [
        'التعريفات، الغرض، السرية، السماحيات، الاستثناءات.',
        'المدة (2–3 سنوات)، القانون الواجب التطبيق، الاختصاص.',
        'التأكيد على إعادة جميع المعلومات عند انتهاء العلاقة.',
      ],
    },
    {
      title: 'NDA (EN)',
      bullets: [
        'Definitions, purpose, confidentiality obligations, permitted use, exceptions.',
        'Term (2–3 years), governing law, jurisdiction.',
        'Return/destroy confidential information upon termination.',
      ],
    },
  ],
  en: [],
};

legalCards.en = legalCards.ar;

export function Proposals() {
  const { language, isArabic } = useLanguage();
  const t = translations[language];
  const sections = proposalSections[language];
  const cards = legalCards[language];

  return (
    <section className={isArabic ? 'text-right' : 'text-left'}>
      <h1 className="section-title text-3xl font-bold text-slate-900 mb-4">{t.proposals.title}</h1>
      <p className="bg-yellow-100 border border-yellow-300 text-yellow-900 px-4 py-3 rounded-xl mb-8 text-sm">
        {t.proposals.legalNotice}
      </p>
      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.title} className="card">
            <h2 className="text-xl font-semibold text-primary mb-4">{section.title}</h2>
            {section.items && (
              <ul className="space-y-3 text-slate-700 leading-relaxed">
                {section.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            )}
            {section.table && (
              <div className="table-container mt-4">
                <table className="table">
                  <thead>
                    <tr>
                      {section.table[0].map((header) => (
                        <th key={header}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {section.table.slice(1).map((row, idx) => (
                      <tr key={idx}>
                        {row.map((cell, index) => (
                          <td key={`${idx}-${index}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">SLA / NDA</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {cards.map((card) => (
          <div key={card.title} className="card">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">{card.title}</h3>
            <ul className="space-y-2 text-slate-700 leading-relaxed">
              {card.bullets.map((bullet) => (
                <li key={bullet}>• {bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="/downloads/B2B_Proposal_Template.md"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition"
        >
          {t.proposals.downloads.proposal}
        </a>
        <a
          href="/downloads/SLA_NDA_Skeleton_AR_EN.md"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent text-white font-semibold hover:bg-accent/90 transition"
        >
          {t.proposals.downloads.legal}
        </a>
      </div>
    </section>
  );
}
