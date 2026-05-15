# Responsive CSS Changes

## Status
- [x] Added `className="itr-cards-top"` to 3-col ITR grid (`app/itr-filing/page.tsx` line 331)
- [x] Added `className="itr-cards-bottom"` to 2-col ITR grid (`app/itr-filing/page.tsx` line 343)
- [x] Added `className="header-brand-text"` to Header text div (`app/components/Header.tsx`)
- [x] Write responsive media queries in `app/globals.css`

---

## Media Queries Needed in `app/globals.css`

### Breakpoints used
| Breakpoint | Width | Purpose |
|---|---|---|
| lg | 1024px | 4-col → 2-col grids |
| md | 900px | Side-by-side → stacked |
| sm | 768px | 3-col → 2-col grids |
| xs | 640px | Footer collapse, process grid |
| xxs | 480px | Most grids → 1-col |
| xxxs | 400px | Process grid → 1-col |

---

## Grid Classes and Their Breakpoint Rules

### `@media (max-width: 1024px)`
```css
.services-grid { grid-template-columns: repeat(2, 1fr) !important; }
.stats-strip   { grid-template-columns: repeat(3, 1fr) !important; }
.areas-grid    { grid-template-columns: repeat(3, 1fr) !important; }
.who-contact-grid { grid-template-columns: repeat(3, 1fr) !important; }
.process-grid  { grid-template-columns: repeat(3, 1fr) !important; }
.footer-grid   { grid-template-columns: 1fr 1fr !important; }
```

### `@media (max-width: 900px)`
```css
.hero-grid     { grid-template-columns: 1fr !important; }
.about-grid    { grid-template-columns: 1fr !important; }
.why-grid      { grid-template-columns: 1fr !important; }
.contact-grid  { grid-template-columns: 1fr !important; }
.diff-grid     { grid-template-columns: 1fr !important; }
.who-grid      { grid-template-columns: 1fr !important; }
.sm-grid       { grid-template-columns: 1fr !important; }
.testi-grid    { grid-template-columns: 1fr !important; }

/* Fix RTL alternate layout on mobile */
.svc-detail-grid { grid-template-columns: 1fr !important; direction: ltr !important; }

/* Section padding reduction */
main > section { padding-top: 64px !important; padding-bottom: 64px !important; }
```

### `@media (max-width: 768px)`
```css
.values-grid   { grid-template-columns: repeat(2, 1fr) !important; }
.reasons-grid  { grid-template-columns: 1fr !important; }
.carry-grid    { grid-template-columns: repeat(2, 1fr) !important; }
.importance-grid { grid-template-columns: repeat(2, 1fr) !important; }

/* ITR 3+2 layout → 2-col on tablet */
.itr-cards-top    { grid-template-columns: repeat(2, 1fr) !important; }
.itr-cards-bottom { grid-template-columns: 1fr !important; max-width: 100% !important; }

/* Hide brand name text next to logo on small screens */
.header-brand-text { display: none !important; }
```

### `@media (max-width: 640px)`
```css
.footer-grid   { grid-template-columns: 1fr !important; }
.process-grid  { grid-template-columns: repeat(2, 1fr) !important; }
```

### `@media (max-width: 480px)`
```css
.services-grid    { grid-template-columns: 1fr !important; }
.stats-strip      { grid-template-columns: repeat(2, 1fr) !important; }
.areas-grid       { grid-template-columns: repeat(2, 1fr) !important; }
.who-contact-grid { grid-template-columns: repeat(2, 1fr) !important; }
.values-grid      { grid-template-columns: 1fr !important; }
.carry-grid       { grid-template-columns: 1fr !important; }
.importance-grid  { grid-template-columns: 1fr !important; }
.itr-cards-top    { grid-template-columns: 1fr !important; }
```

### `@media (max-width: 400px)`
```css
.process-grid  { grid-template-columns: 1fr !important; }
```

---

## File → Grid Class Map

| File | Grid class | Columns |
|---|---|---|
| `app/page.tsx` | `hero-grid` | 1fr 1fr |
| `app/page.tsx` | `about-grid` | 1fr 1fr |
| `app/page.tsx` | `services-grid` | repeat(4, 1fr) |
| `app/page.tsx` | `why-grid` | 1fr 1fr |
| `app/page.tsx` | `testi-grid` | repeat(3, 1fr) |
| `app/page.tsx` | `contact-grid` | 1fr 1.4fr |
| `app/about/page.tsx` | `values-grid` | repeat(3, 1fr) |
| `app/about/page.tsx` | `areas-grid` | repeat(6, 1fr) |
| `app/about/page.tsx` | `diff-grid` | 1fr 1fr |
| `app/services/page.tsx` | `svc-detail-grid` | 1fr 1fr (RTL) |
| `app/services/page.tsx` | `stats-strip` | repeat(6, 1fr) |
| `app/why/page.tsx` | `reasons-grid` | repeat(2, 1fr) |
| `app/why/page.tsx` | `process-grid` | repeat(5, 1fr) |
| `app/why/page.tsx` | `sm-grid` | 1fr 1fr |
| `app/itr-filing/page.tsx` | `carry-grid` | repeat(4, 1fr) |
| `app/itr-filing/page.tsx` | `importance-grid` | repeat(3, 1fr) |
| `app/itr-filing/page.tsx` | `who-grid` | 1fr 1fr |
| `app/itr-filing/page.tsx` | `who-contact-grid` | repeat(6, 1fr) |
| `app/itr-filing/page.tsx` | `itr-cards-top` | repeat(3, 1fr) ← new class |
| `app/itr-filing/page.tsx` | `itr-cards-bottom` | repeat(2, 1fr) ← new class |
| `app/components/Footer.tsx` | `footer-grid` | 1.6fr 1fr 1fr 1fr |
| `app/components/Header.tsx` | `header-brand-text` | (text div) ← new class |
