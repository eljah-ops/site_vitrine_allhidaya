import type { Metadata } from 'next';
import './globals.css';
import { withBasePath } from '@/lib/utils';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  icons: { icon: withBasePath('/favicon.svg') },
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: 'Al Hidaya Keur Fatma Haris | École franco-arabe à Dakar',
    template: '%s | Al Hidaya Keur Fatma Haris',
  },
  description:
    'École franco-arabe Al Hidaya Keur Fatma Haris à Cambérène 1, Dakar. Préscolaire, élémentaire, demi-pensionnat et internat. Tarifs et inscriptions 2026–2027.',
  keywords: [
    'école franco-arabe Dakar',
    'école Cambérène',
    'école préscolaire Dakar',
    'école élémentaire Dakar',
    'Al Hidaya Keur Fatma Haris',
    'inscription école Dakar',
  ],
  authors: [{ name: 'Al Hidaya Keur Fatma Haris' }],
  creator: 'Al Hidaya Keur Fatma Haris',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fr_SN',
    siteName: 'Al Hidaya Keur Fatma Haris',
    title: 'Al Hidaya Keur Fatma Haris | École franco-arabe à Dakar',
    description:
      'Une école franco-arabe à Cambérène 1, Dakar, du préscolaire à l’élémentaire.',
    images: [
      {
        url: withBasePath('/images/ecole/al-hidaya-13.webp'),
        width: 1200,
        height: 1600,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Al Hidaya Keur Fatma Haris | École franco-arabe à Dakar',
    description:
      'Préscolaire, élémentaire, internat et demi-pensionnat à Cambérène 1.',
    images: [withBasePath('/images/ecole/al-hidaya-13.webp')],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'School',
              '@id': siteUrl ? `${siteUrl}/#school` : '/#school',
              name: 'Al Hidaya Keur Fatma Haris',
              alternateName: 'École franco-arabe Al Hidaya',
              description: metadata.description,
              url: siteUrl || '/',
              telephone: '+221776358919',
              email: 'safietou1305@gmail.com',
              image: siteUrl
                ? `${siteUrl}/images/ecole/al-hidaya-13.webp`
                : withBasePath('/images/ecole/al-hidaya-13.webp'),
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Cambérène 1, quartier Islam, en face de la mer',
                addressLocality: 'Dakar',
                addressCountry: 'SN',
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                ],
                opens: '08:00',
                closes: '17:00',
              },
              areaServed: 'Dakar',
              educationalLevel: ['Préscolaire', 'Élémentaire'],
              sameAs: [],
            }),
          }}
        />
      </body>
    </html>
  );
}
