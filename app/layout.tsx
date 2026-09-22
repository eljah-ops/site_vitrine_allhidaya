import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  icons: { icon: '/favicon.svg' },
  title: 'Al Hidaya Keur Fatma Haris — École franco-arabe à Cambérène',
  description:
    'École franco-arabe Al Hidaya Keur Fatma Haris à Cambérène 1, Dakar. Préscolaire, élémentaire, demi-pensionnat et internat. Tarifs et inscriptions 2026–2027.',
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
