import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { translations } from '../context/translations.js';

const checklistItems = {
  ar: {
    sow: [
      'تحديث مراحل جميع الفرص.',
      'تحديد Top 20 Accounts للأسبوع.',
      'رسائل متابعة لمحاولات الأسبوع الماضي.',
      'ضبط سعة المزودين مع التشغيل.',
    ],
    eow: [
      'تقرير مختصر: ما الذي أُنجز/تعطل؟',
      '3 دروس مستفادة + تحسين للأسبوع القادم.',
      'تحديث أهداف الأسبوع التالي.',
    ],
  },
  en: {
    sow: [
      'Refresh stages for every opportunity.',
      'Lock the Top 20 accounts for the week.',
      'Send follow-ups for last week’s touches.',
      'Align provider capacity with operations.',
    ],
    eow: [
      'Mini report: what shipped vs. stuck?',
      '3 lessons learned + one improvement for next week.',
      'Update next week’s priorities.',
    ],
  },
};

export function Checklists() {
  const { language, isArabic } = useLanguage();
  const t = translations[language];
  const [state, setState] = useState({ sow: new Set(), eow: new Set() });

  const toggle = (list, item) => {
    setState((prev) => {
      const nextSet = new Set(prev[list]);
      if (nextSet.has(item)) {
        nextSet.delete(item);
      } else {
        nextSet.add(item);
      }
      return { ...prev, [list]: nextSet };
    });
  };

  const renderList = (listKey) => (
    <div className="card">
      <h2 className="text-xl font-semibold text-primary mb-4">{t.checklists[listKey]}</h2>
      <ul className="space-y-3">
        {checklistItems[language][listKey].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <input
              type="checkbox"
              className="mt-1 h-5 w-5 rounded border-slate-300 text-primary focus:ring-primary"
              checked={state[listKey].has(item)}
              onChange={() => toggle(listKey, item)}
            />
            <span className="text-slate-700 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className={isArabic ? 'text-right' : 'text-left'}>
      <h1 className="section-title text-3xl font-bold text-slate-900 mb-8">{t.checklists.title}</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {renderList('sow')}
        {renderList('eow')}
      </div>
    </section>
  );
}
