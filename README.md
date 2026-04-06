# Biospire Lifesciences — Website v2

React 18 + Vite 5 + Tailwind CSS 3 + React Router 6 + React Icons 5

---

## Quick Start

```bash
npm install
npm run dev
# → http://localhost:5173
```

## Build for Production
```bash
npm run build
npm run preview
```

---

## Project Structure

```
src/
├── App.jsx                  # HashRouter + all 7 routes
├── main.jsx
├── index.css                # Tailwind + custom component classes
├── components/
│   ├── Layout.jsx           # Shared wrapper (Navbar + Footer + WhatsApp)
│   ├── Navbar.jsx           # Sticky nav with active NavLink states
│   ├── PageHero.jsx         # Reusable inner-page banner
│   ├── Footer.jsx
│   └── WhatsApp.jsx
└── pages/
    ├── Home.jsx             # Hero, Promise cards, preview grid, CTA
    ├── About.jsx            # Story, Mission/Vision, Values, Directors
    ├── Portfolio.jsx        # LOHIVA™ card, ingredients, pipeline
    ├── Quality.jsx          # Certs, guarantee, process steps, packaging
    ├── WhyUs.jsx            # 6 advantage cards, checklist, quote
    ├── Partner.jsx          # Partnership benefits, who can partner, CTA
    └── Contact.jsx          # Corporate details + contact form
```

---

## Pages & Routes (HashRouter)

| URL hash       | Page       |
|----------------|------------|
| `/#/`          | Home       |
| `/#/about`     | About      |
| `/#/portfolio` | Portfolio  |
| `/#/quality`   | Quality    |
| `/#/why-us`    | Why Us     |
| `/#/partner`   | Partner    |
| `/#/contact`   | Contact    |

Uses `HashRouter` — works on any static host (Netlify, Vercel, GitHub Pages) without server config.

---

## Brand Tokens (tailwind.config.js)

| Token        | Hex       | Usage                        |
|--------------|-----------|------------------------------|
| `navy`       | #1A292F   | Primary dark, headings       |
| `navy-mid`   | #243a41   | Secondary dark backgrounds   |
| `b-teal`     | #6B8E99   | Accents, icons, links        |
| `teal-dark`  | #4a6e78   | Deeper teal for gradients    |
| `gold`       | #C5A059   | Highlights, active nav       |
| `gold-light` | #e8c879   | Badge gradients              |
| `coral`      | #FF6B6B   | CTA buttons only             |
| `body-bg`    | #F8FAFB   | Main background              |
| `alt-bg`     | #F0F4F5   | Alternating sections         |
| `b-text`     | #333333   | Body paragraph text          |
| `meta`       | #7F8C8D   | Subtitles, descriptions      |

---

## TODO — Replace Before Going Live

Search the codebase (Ctrl+Shift+F in VS Code) for these placeholders:

```
[Your Full Office Address]          → Registered office, Nagpur
[Your Business Email]               → info@biospire.in (or similar)
[Your Business Phone]               → +91 XXXXXXXXXX
[Insert Corporate Identity Number]  → CIN from MCA portal
[Director A Name]                   → Full name
[Director B Name]                   → Full name
```

### Director Photos (About.jsx)
Replace the `<FiUser />` placeholder divs with:
```jsx
<img
  src="/images/director-a.jpg"
  alt="Director Name"
  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
/>
```
Place photos in `public/images/`.

### WhatsApp Number (WhatsApp.jsx)
```
https://wa.me/?text=...
→
https://wa.me/91XXXXXXXXXX?text=Hello%20Biospire%20Lifesciences%2C
```

### Contact Form (Contact.jsx)
Wire up `handleSubmit` to your backend / EmailJS / Formspree:
```js
const handleSubmit = async (e) => {
  e.preventDefault()
  // await emailjs.send(...) or fetch('/api/contact', ...)
  setSent(true)
}
```
# BioScience
