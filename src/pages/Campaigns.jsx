import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { translations } from '../context/translations.js';

const templates = {
  ar: [
    {
      title: 'البريد الافتتاحي (AR)',
      content: `الموضوع: حلول صيانة وتشغيل مضمونة المستوى لمنشآتكم\nالسلام عليكم أ/ {{الاسم}}،\nأنا {{اسمك}} من {{اسم الشركة}}. ندعم الشركات والمجمعات بعقود صيانة وتشغيل وفق SLA واضح.\nهل يناسبك اجتماع 20 دقيقة هذا الأسبوع؟\nتحياتي،\n{{اسمك}} | {{جوال}} | {{بريد}}`,
    },
    {
      title: 'Follow-up 1 (AR)',
      content: `الموضوع: متابعة سريعة\nمرحبًا أ/ {{الاسم}}،\nأرسلت تصورًا لعقد صيانة/تشغيل. هل يناسبك غدًا 11:00؟`,
    },
    {
      title: 'Follow-up 2 (AR)',
      content: `الموضوع: هل نجعل الأمر أسهل؟\nنقترح تجربة شهرية (Pilot) في {{موقع}} مع مؤشرات أداء واضحة. أخبرنا بالوقت الأنسب.`,
    },
    {
      title: 'Cold Intro Email (EN)',
      content: `Subject: Reliable FM & Maintenance under a clear SLA\nHi {{Name}},\nThis is {{Your Name}} from {{Company}}. Shall we schedule a 20-minute call to tailor a package for {{Account}}?`,
    },
    {
      title: 'LinkedIn DM (EN)',
      content: `Hi {{Name}} — we help real estate/FM teams standardize maintenance with SLA-backed contracts and reporting. Open to a quick chat?`,
    },
    {
      title: 'Voicemail Script (AR)',
      content: `مرحبًا أ/ {{الاسم}}، هنا {{اسمك}} من {{الشركة}}. أرسلت لك بريدًا بعنوان “حلول صيانة وتشغيل مضمونة”. يسعدني تواصلك على {{الجوال}}.`,
    },
  ],
  en: [
    {
      title: 'Opening Email (AR)',
      content: `الموضوع: حلول صيانة وتشغيل مضمونة المستوى لمنشآتكم\nالسلام عليكم أ/ {{الاسم}}،\nأنا {{اسمك}} من {{اسم الشركة}}. ندعم الشركات والمجمعات بعقود صيانة وتشغيل وفق SLA واضح.\nهل يناسبك اجتماع 20 دقيقة هذا الأسبوع؟\nتحياتي،\n{{اسمك}} | {{جوال}} | {{بريد}}`,
    },
    {
      title: 'Follow-up 1 (AR)',
      content: `الموضوع: متابعة سريعة\nمرحبًا أ/ {{الاسم}}،\nأرسلت تصورًا لعقد صيانة/تشغيل. هل يناسبك غدًا 11:00؟`,
    },
    {
      title: 'Follow-up 2 (AR)',
      content: `الموضوع: هل نجعل الأمر أسهل؟\nنقترح تجربة شهرية (Pilot) في {{موقع}} مع مؤشرات أداء واضحة. أخبرنا بالوقت الأنسب.`,
    },
    {
      title: 'Cold Intro Email (EN)',
      content: `Subject: Reliable FM & Maintenance under a clear SLA\nHi {{Name}},\nThis is {{Your Name}} from {{Company}}. Shall we schedule a 20-minute call to tailor a package for {{Account}}?`,
    },
    {
      title: 'LinkedIn DM (EN)',
      content: `Hi {{Name}} — we help real estate/FM teams standardize maintenance with SLA-backed contracts and reporting. Open to a quick chat?`,
    },
    {
      title: 'Voicemail Script (AR)',
      content: `مرحبًا أ/ {{الاسم}}، هنا {{اسمك}} من {{الشركة}}. أرسلت لك بريدًا بعنوان “حلول صيانة وتشغيل مضمونة”. يسعدني تواصلك على {{الجوال}}.`,
    },
  ],
};

export function Campaigns() {
  const { language, isArabic } = useLanguage();
  const t = translations[language];
  const [openIndex, setOpenIndex] = useState(0);

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(language === 'ar' ? 'تم النسخ إلى الحافظة' : 'Copied to clipboard');
    } catch (error) {
      console.error('copy failed', error);
    }
  };

  return (
    <section className={isArabic ? 'text-right' : 'text-left'}>
      <h1 className="section-title text-3xl font-bold text-slate-900 mb-6">{t.campaigns.title}</h1>
      <div className="space-y-4 text-slate-700 leading-relaxed mb-8">
        {t.campaigns.guidance.map((item) => (
          <p key={item}>• {item}</p>
        ))}
      </div>
      <h2 className="text-2xl font-semibold text-primary mb-4">{t.campaigns.templatesTitle}</h2>
      <div className="space-y-4">
        {templates[language].map((template, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={template.title} className="card">
              <button
                className="w-full flex justify-between items-center text-lg font-semibold text-slate-900"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{template.title}</span>
                <span>{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && (
                <div className="mt-4 space-y-3">
                  <pre className="bg-slate-900 text-slate-100 p-4 rounded-xl text-sm whitespace-pre-wrap leading-relaxed">
                    {template.content}
                  </pre>
                  <button
                    onClick={() => copyText(template.content)}
                    className="px-4 py-2 rounded-full bg-accent text-white font-semibold hover:bg-accent/90 transition"
                  >
                    {t.campaigns.copy}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
