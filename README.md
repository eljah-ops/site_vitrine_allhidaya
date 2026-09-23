# Alhidaya — Keur Fatma Haris

Site vitrine de l'école, développé avec React, Tailwind CSS et Vinext.

## Installation

```bash
npm install
npm run dev
```

## Vérification

```bash
npx tsc --noEmit
npm run build
```

Le site présente l'école, ses cycles, tarifs, événements, coordonnées et
photos. Il est responsive, optimisé pour le référencement et inclut une
galerie photo ainsi que la fiche d'inscription 2026–2027.

Pour préparer la mise en ligne, je dois définir l'URL publique :

```bash
NEXT_PUBLIC_SITE_URL=https://votre-domaine.sn npm run build
```

