import { useLanguage } from '../context/LanguageContext.jsx';
import { translations } from '../context/translations.js';

const template = {
  ar: `التاريخ/الوقت: ____________\nالحضور: ____________\n\nالأهداف:\n- ___________________________\n\nجدول الأعمال:\n- تحديث البايبلاين\n- حملات B2B\n- قضايا التشغيل/الـSLA\n- المخاطر\n\nالقرارات:\n- ___________________________\n\nالأعمال (Action Items):\n- المسؤول: ______ | الوصف: ______ | الموعد: ______\n- المسؤول: ______ | الوصف: ______ | الموعد: ______\n\nالمخاطر والاعتمادات:\n- ___________________________`,
  en: `Date/Time: ____________\nAttendees: ____________\n\nObjectives:\n- ___________________________\n\nAgenda:\n- Pipeline update\n- B2B campaigns\n- Operations / SLA topics\n- Risks\n\nDecisions:\n- ___________________________\n\nAction Items:\n- Owner: ______ | Item: ______ | Due: ______\n- Owner: ______ | Item: ______ | Due: ______\n\nRisks & Dependencies:\n- ___________________________`,
};

export function Meetings() {
  const { language, isArabic } = useLanguage();
  const t = translations[language];

  return (
    <section className={isArabic ? 'text-right' : 'text-left'}>
      <h1 className="section-title text-3xl font-bold text-slate-900 mb-6">{t.meetings.title}</h1>
      <div className="card">
        <pre className="whitespace-pre-wrap leading-relaxed text-slate-700 text-sm">
          {template[language]}
        </pre>
      </div>
      <div className="mt-8">
        <a
          href="/downloads/Meeting_Agenda_Minutes_Template.md"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition"
        >
          {t.meetings.download}
        </a>
      </div>
    </section>
  );
}
