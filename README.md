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

Le site présente l'école, sa pédagogie, son équipe, ses cycles, tarifs, activités, coordonnées et
photos. Il comprend les étapes d’inscription, une FAQ et un plan d’accès.
Les horaires d’ouverture sont du lundi au vendredi de 8 h à 17 h. Il est responsive, optimisé pour le référencement et inclut une
galerie photo ainsi que la fiche d'inscription 2026–2027.

Pour préparer la mise en ligne, je dois définir l'URL publique :

```bash
NEXT_PUBLIC_SITE_URL=https://votre-domaine.sn npm run build
```

## Déploiement GitHub Pages

Le workflow `.github/workflows/deploy-pages.yml` publie automatiquement le site sur GitHub Pages à chaque push sur `master` (et via déclenchement manuel).

Étape unique à faire dans GitHub : **Settings > Pages > Source = GitHub Actions**.

> ⚠️ Les sites GitHub Pages sont publics. Si ce dépôt reste privé, la publication peut nécessiter une offre GitHub éligible pour Pages sur dépôt privé.
