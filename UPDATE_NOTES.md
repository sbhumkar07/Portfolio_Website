# Portfolio update notes

Updated content to reflect the uploaded GenAI resume and LinkedIn profile. Preserved the original React/Vite/Tailwind layout, assets, and motion components.

## Review before publishing
- Experience dates, titles, metrics, and company descriptions differ across the uploaded resume and LinkedIn. Reconcile them with verified employment history before publishing.
- Hero resume button was changed to a LinkedIn link because the old Drive URL might point to an outdated resume. Replace it with a verified current resume URL if desired.
- Review the public phone number and email address in `src/constants/index.js`.
- Existing GitHub project URLs were retained. Confirm repositories are accessible and match their descriptions.
- Employer projects are described only in Experience. Do not publish proprietary code, screenshots, or sensitive data.
- `npm install && npm run build` should be run before deployment.

## Main edited files
- src/constants/index.js
- src/components/Hero/Hero.jsx
- src/components/Skills/Skills.jsx
- src/components/Experience/Experience.jsx
- src/components/Contact/Contact.jsx
- src/components/Footer/Footer.jsx
- src/App.jsx
- index.html
