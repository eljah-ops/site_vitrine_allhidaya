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

## Déploiement sur GitHub Pages

Site : https://eljah-ops.github.io/site_vitrine_allhidaya/

Chaque push sur `master` lance `.github/workflows/deploy.yml` : installation,
vérification TypeScript, export statique, contrôle des médias et publication.
Dans **Settings → Pages → Build and deployment**, la source doit rester
**GitHub Actions**. Une publication directe depuis la branche afficherait le
README au lieu du site compilé.

Pour vérifier localement la version destinée à GitHub Pages :

```bash
export NEXT_PUBLIC_SITE_URL=https://eljah-ops.github.io/site_vitrine_allhidaya
npm run build
npm run check:export
```

Le chemin de publication est déduit de cette URL. Pour un domaine personnalisé,
remplacer l’URL dans le workflow et configurer ce domaine dans GitHub Pages.

Les 32 photos et leurs 32 miniatures sont versionnées dans `public/images/ecole/`.
La fiche d’inscription est dans `public/documents/`. Le contrôle de l’export
vérifie que tous les fichiers publics sont copiés à l’identique et que les liens
vers les images, styles et scripts restent dans le chemin du site.
