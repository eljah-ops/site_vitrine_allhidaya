import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  icons: { icon: '/favicon.svg' },
  title: 'Alhidaya Keur Fatma Haris — École franco-arabe',
  description:
    'Découvrez la maquette de l’école franco-arabe Alhidaya Keur Fatma Haris : préscolaire, élémentaire, vie scolaire et événements.',
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
