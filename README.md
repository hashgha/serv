# تطوير الأعمال - تطبيق سيرف (SERVE)

واجهة تشغيلية تفاعلية لمسؤول تطوير الأعمال خلال أول 90 يومًا.
يوفّر الموقع الخطة 30-60-90، جدول التشغيل اليومي/الأسبوعي/الشهري، البايبلاين، قوالب العروض والعقود، مكافحة التسرب، خطة التوسع الجغرافي، لوحة المؤشرات، قوالب الاجتماعات، وقوائم المراجعة الأسبوعية. يدعم العربية والإنجليزية مع تبديل فوري لاتجاه الصفحة، وجميع الملفات المساندة جاهزة للتنزيل.

## 🚀 التشغيل المحلي

```bash
npm install
npm run dev
```

* عند تنفيذ `npm run dev` ستجد الخادم المحلي على العنوان الذي يعرضه Vite (افتراضيًا `http://localhost:5173`).
* لضمان تبديل اللغة بين العربية والإنجليزية يتم حفظ التفضيل في `localStorage`.

## 🛠️ بناء نسخة الإنتاج

```bash
npm run build
```

* الناتج سيظهر داخل مجلد `dist/`.
* لاختبار النسخة الإنتاجية محليًا يمكنك تشغيل:

```bash
npm run preview
```

## ☁️ النشر على Vercel

1. سجّل الدخول إلى [Vercel](https://vercel.com/) وأنشئ مشروعًا جديدًا.
2. اربط المستودع (GitHub/GitLab/Bitbucket) أو ارفع مجلد المشروع يدويًا.
3. تأكد من إعداد أوامر البناء:
   * **Install Command:** `npm install`
   * **Build Command:** `npm run build`
   * **Output Directory:** `dist`
4. ابدأ عملية النشر. عند الاكتمال سيعرض Vercel رابط المعاينة والإصدار الإنتاجي.

> ملاحظة: لا توجد متغيرات بيئة مطلوبة في هذه النسخة.

## 🈯 تعديل النصوص والترجمات

* جميع النصوص مُدارة عبر ملف `src/context/translations.js`.
* يحتوي الملف على كائن `translations` بقسمين (`ar` و `en`).
* لتعديل أي نص أو إضافة عبارة جديدة:
  1. عدّل النص في القسم العربي/الإنجليزي حسب الحاجة.
  2. استخدم نفس المفاتيح (`home`, `plan`, `pipeline` …) لضمان التوافق مع المكوّنات.
  3. في حال إضافة نص جديد تأكد من تحديث المكوّن المقابل ليقرأ المفتاح الجديد من `translations`.

## 📁 بنية المجلدات

```
.
├── public
│   ├── favicon.svg
│   └── downloads
│       ├── 30-60-90_Plan_Checklist.md
│       ├── Anti_Churn_Playbook.md
│       ├── B2B_Proposal_Template.md
│       ├── BD_Pipeline.xlsx
│       ├── City_Expansion_Scoring.xlsx
│       ├── KPIs_Dashboard_Spec.md
│       ├── Meeting_Agenda_Minutes_Template.md
│       ├── Outreach_Emails_AR_EN.md
│       └── SLA_NDA_Skeleton_AR_EN.md
├── src
│   ├── components
│   │   ├── Layout.jsx
│   │   └── Navbar.jsx
│   ├── context
│   │   ├── LanguageContext.jsx
│   │   └── translations.js
│   ├── pages
│   │   ├── AntiChurn.jsx
│   │   ├── Campaigns.jsx
│   │   ├── Checklists.jsx
│   │   ├── Downloads.jsx
│   │   ├── Expansion.jsx
│   │   ├── Home.jsx
│   │   ├── KPIs.jsx
│   │   ├── Meetings.jsx
│   │   ├── Operations.jsx
│   │   ├── Pipeline.jsx
│   │   └── Plan.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## 📄 الملفات القابلة للتنزيل

* جميع الملفات موجودة في `public/downloads/` بصيغة Placeholder، ويمكن استبدالها بالملفات الرسمية لاحقًا.
* عند استبدال أي ملف احتفظ بنفس الاسم لضمان عمل روابط التنزيل داخل الواجهة.

## ❓ أسئلة شائعة

**كيف أضيف صفحة جديدة؟**
1. أنشئ ملفًا جديدًا داخل `src/pages`.
2. أضف Route داخل `src/App.jsx`.
3. عرّف النصوص اللازمة داخل `translations.js`.

**كيف أغير الشعار أو الألوان؟**
* يمكن تعديل الألوان ضمن `tailwind.config.js` (قسم `extend.colors`).
* لتغيير العنوان في شريط التنقل عدّل القيمة `brand` في `translations.js`.

استمتع باستخدام دليل تطوير الأعمال لسيرف! 🚀
