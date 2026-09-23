# Alhidaya — Keur Fatma Haris

Maquette de site vitrine en React 19 et Tailwind CSS 4, avec Vinext.

## Démarrer

```bash
npm install
npm run dev
```

## Vérifier et construire

```bash
npx tsc --noEmit
npm run build
```

## Compléter le site

- `app/page.tsx` : présentation, cycles, événements, coordonnées et galerie.
- `app/globals.css` : couleurs, typographie et mise en page responsive.
- `app/layout.tsx` : titre et description du site.
- `components/school-fees.tsx` : tarifs sur ordinateur et mobile, conditions d’inscription.
- `lib/school-fees.json` : montants de la fiche officielle 2026–2027.
- `public/documents/fiche-renseignement-2026-2027.pdf` : fiche originale téléchargeable.
- `public/images/` : images locales optimisées. Sources dans `SOURCES.md`.
- `lib/school-photos.json` : ordre, légendes, dimensions et miniatures des 32 photos de l’école.

Les coordonnées, niveaux, tarifs, formules d’accueil et conditions d’inscription proviennent de la fiche officielle 2026–2027. Les liens de contact ouvrent le téléphone ou la messagerie de l’utilisateur. Les horaires d’accueil restent à confirmer auprès de la direction.

Les 32 photographies de l’école proviennent de l’archive WhatsApp fournie. Elles sont optimisées en WebP, avec des miniatures pour la galerie et des images plus grandes pour l’agrandissement. La galerie montre d’abord six photos, puis permet de consulter l’ensemble. Dans l’agrandissement, les flèches du clavier changent de photo et Échap ferme la fenêtre.

Les événements sont encore des exemples sans dates réelles. Le programme de l’école reste à fournir ; aucune date n’est déduite du nom des fichiers photo.

Navigation par ancres, menu mobile, galerie agrandissable au clavier et fiches d’événements. Les animations respectent la préférence de réduction de mouvement.

## Support de stockage

Le dossier actuel est sur un disque FAT, qui ne gère pas les liens symboliques utilisés par npm. Pour travailler en local, copier ce projet sur un système de fichiers Linux standard, puis lancer les commandes ci-dessus. Cette maquette a été compilée dans `/tmp/alhidaya-build` pour cette raison ; ce dossier temporaire n’est pas nécessaire au site publié.
