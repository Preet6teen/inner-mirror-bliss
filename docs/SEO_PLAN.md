# Comprehensive Technical SEO & Local Search Strategy
## Inner Mirror Bliss by Deepika — Navi Mumbai

**Document Version:** 1.0.0  
**Target Market:** Navi Mumbai (Ghansoli, Vashi, Kopar Khairane, Airoli, Nerul), Greater Mumbai, Maharashtra & Online Clients Globally  

---

## 1. Technical SEO Principles & Core Web Vitals Target

1. **Rendering Performance:**
   - Server-Side Rendering (SSR) ensures search engines receive pre-rendered, semantic HTML with full metadata.
   - Largest Contentful Paint (LCP) target: `< 1.2s`
   - First Input Delay (FID) / Interaction to Next Paint (INP): `< 50ms`
   - Cumulative Layout Shift (CLS): `0.00` (strict dimensions on all imagery and fonts)

2. **Metadata Architecture:**
   - Dynamic `generateMetadata()` on all service and blog pages.
   - Automatic OpenGraph (`og:image`, `og:title`, `og:description`) and Twitter Card generation.
   - Absolute canonical tags on every route to prevent duplicate content indexing.

---

## 2. Local SEO & NAP (Name, Address, Phone) Consistency

Local search authority in Navi Mumbai is critical for walk-in studio clients. The NAP information is hardcoded in structured data and displayed consistently across the footer, contact page, and header.

- **Name:** Inner Mirror Bliss by Deepika
- **Phone:** `+91 9987969557`
- **Street Address:** Panchvati Co-op Society, Shop No. C-38, Near Panchvati Bus Stop, Sector 5
- **Locality:** Ghansoli
- **City:** Navi Mumbai
- **Postal Code:** 400701
- **Region:** Maharashtra
- **Country:** India (IN)
- **Geo Coordinates:** Latitude `19.1235`, Longitude `72.9981` (Ghansoli Sector 5)

---

## 3. Schema.org JSON-LD Implementations

### 3.1 Local Business & Spiritual Wellness Schema (`HealthAndBeautyBusiness`)
```json
{
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "name": "Inner Mirror Bliss by Deepika",
  "image": "https://innermirrorbliss.com/images/hero/inner-mirror-bliss-banner.jpg",
  "@id": "https://innermirrorbliss.com",
  "url": "https://innermirrorbliss.com",
  "telephone": "+919987969557",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Panchvati Co-op Society, Shop No. C-38, Near Panchvati Bus Stop, Sector 5",
    "addressLocality": "Ghansoli, Navi Mumbai",
    "postalCode": "400701",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 19.1235,
    "longitude": 72.9981
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "10:00",
      "closes": "20:00"
    }
  ]
}
```

### 3.2 Service Catalog Schema
Every service detail page renders a distinct `Service` schema specifying:
- `provider`: Inner Mirror Bliss by Deepika
- `serviceType`: "Tarot Reading", "Reiki Healing", "Aura Cleansing", etc.
- `offers`: `price`, `priceCurrency: "INR"`, `availability: "InStock"`

### 3.3 FAQPage Schema
Embedded on the homepage and `/faq` to earn Google rich snippet accordion results in SERPs.

---

## 4. High-Intent Keyword Targeting

| Route | Primary Keyword | Secondary Keywords | Search Intent |
| :--- | :--- | :--- | :--- |
| `/` | Tarot Card Reading Navi Mumbai | Spiritual healer Ghansoli, Energy healing Navi Mumbai, Inner Mirror Bliss | Navigational / Commercial |
| `/services/tarot-card-reading` | Best Tarot reader in Navi Mumbai | 1 hour tarot consultation Mumbai, Online tarot reading India, Love tarot guidance | Commercial / Transactional |
| `/services/reiki-healing-facial` | Reiki healing facial Mumbai | Holistic energy facial Navi Mumbai, Anti stress facial Ghansoli | Transactional |
| `/services/aura-cleansing` | Aura cleansing Navi Mumbai | Negative energy removal Mumbai, Chakra clearing Ghansoli | Transactional |
| `/services/crystal-healing` | Crystal healing therapy Navi Mumbai | Chakra gemstone balancing, Natural frequency therapy | Transactional |
| `/services/reiki-healing-body-massage` | Reiki body massage Navi Mumbai | Full body energy healing massage Ghansoli, Spiritual massage Mumbai | Transactional |
| `/services/reiki-healing-head-massage` | Head massage for stress relief Ghansoli | Migraine healing Reiki massage, Deep sleep therapy Navi Mumbai | Transactional |
| `/about` | Spiritual healer Deepika Navi Mumbai | Deepika tarot reader, Inner Mirror Bliss founder story | Informational |
| `/contact` | Inner Mirror Bliss Ghansoli address | Tarot reader near Panchvati bus stop Ghansoli | Local Navigation |
