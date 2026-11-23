import { faqItems } from "../landing/data";
import { site } from "../../lib/site";

/** Structured data for Google: organisation, website, the Android app and the FAQ. */
export function HomeJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.companyUrl}/#organization`,
        name: site.company,
        alternateName: "OrbitApps Technologies LLP",
        url: site.companyUrl,
        email: site.email,
        brand: { "@type": "Brand", name: site.name, url: site.url, logo: `${site.url}/icon.png` },
        owns: { "@id": `${site.url}/#app` },
        address: {
          "@type": "PostalAddress",
          streetAddress: site.streetAddress,
          postalCode: site.postalCode,
          addressLocality: site.locality,
          addressRegion: site.region,
          addressCountry: site.country,
        },
        sameAs: [site.companyUrl],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        inLanguage: ["en-IN", "hi-IN"],
        publisher: { "@id": `${site.companyUrl}/#organization` },
      },
      {
        "@type": "MobileApplication",
        "@id": `${site.url}/#app`,
        name: site.name,
        description: site.description,
        operatingSystem: "ANDROID",
        applicationCategory: "LifestyleApplication",
        installUrl: site.playStoreUrl,
        downloadUrl: site.playStoreUrl,
        image: `${site.url}/icon.png`,
        inLanguage: ["en", "hi"],
        publisher: { "@id": `${site.companyUrl}/#organization` },
        author: { "@id": `${site.companyUrl}/#organization` },
        offers: {
          "@type": "Offer",
          price: "990",
          priceCurrency: "INR",
          description:
            "₹5 for the first 48 hours, then ₹990 per month, renewing automatically until cancelled.",
          url: site.playStoreUrl,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faq`,
        mainEntity: faqItems.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // escape "<" so the JSON can never close the script tag
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
