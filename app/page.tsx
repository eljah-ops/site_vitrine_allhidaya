'use client';
/* oxlint-disable next/no-img-element */
import { useRef, useState } from 'react';
import { usePageMotion } from '@/hooks/use-page-motion';
import SchoolFees from '@/components/school-fees';
import {
  SchoolDailyLife,
  SchoolFaq,
  SchoolPedagogy,
  SchoolTeam,
  SchoolVisit,
} from '@/components/school-life';
import { schoolHours } from '@/lib/school-info';
import photos from '@/lib/school-photos.json';
import {
  ArrowUpRight,
  ArrowRight,
  ArrowUp,
  BookOpen,
  Sprout,
  Heart,
  MapPin,
  Clock3,
  Menu,
  X,
  GraduationCap,
  Camera,
  Check,
  Bus,
  Sparkles,
  Phone,
  Mail,
  MessageCircle,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';

const navigation = [
  ['L’école', 'ecole'],
  ['Nos cycles', 'cycles'],
  ['L’équipe', 'equipe'],
  ['Inscriptions', 'inscriptions'],
  ['Vie scolaire', 'evenements'],
  ['FAQ', 'questions'],
];
const activities = [
  {
    icon: Sprout,
    type: 'EN CLASSE',
    title: 'Le plaisir de découvrir',
    description:
      'Des jeux, des couleurs et des activités partagées : les enfants explorent, s’expriment et apprennent ensemble.',
    photo: photos.find((photo) => photo.id === 16)!,
    photoPosition: 'center',
  },
  {
    icon: Bus,
    type: 'SORTIES PÉDAGOGIQUES',
    title: 'La découverte hors des murs',
    description:
      'Observer, explorer et s’émerveiller : une autre façon de découvrir le monde qui nous entoure.',
    photo: photos.find((photo) => photo.id === 4)!,
    photoPosition: 'center',
  },
  {
    icon: Sparkles,
    type: 'VIE DE L’ÉCOLE',
    title: 'La joie de se retrouver',
    description:
      'Des ballons, des sourires et des moments collectifs qui font aussi les souvenirs de l’école.',
    photo: photos.find((photo) => photo.id === 30)!,
    photoPosition: 'center',
  },
];
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [photo, setPhoto] = useState<number | null>(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { contentRef, progressRef, activeSection, scrolled, showBackToTop } =
    usePageMotion(showAllPhotos);
  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <div className="topbar">
        <div className="wrap flex items-center justify-between gap-4">
          <span className="topbar-hours">
            <Clock3 size={14} aria-hidden="true" /> {schoolHours}
          </span>
          <span className="hidden items-center gap-2 sm:flex">
            <MapPin size={13} /> Cambérène 1 · Dakar
          </span>
        </div>
      </div>
      <header
        className={`site-header${scrolled ? ' is-scrolled' : ''}`}
        role="banner"
      >
        <div className="reading-progress" aria-hidden="true">
          <div ref={progressRef} />
        </div>
        <div className="wrap flex min-h-24 items-center justify-between gap-6">
          <a href="#accueil" className="brand" aria-label="Alhidaya — Accueil">
            <span className="brand-icon">
              <BookOpen size={28} strokeWidth={1.5} />
            </span>
            <span>
              <strong>
                AL HIDAYA<span className="brand-dot">.</span>
              </strong>
              <small>ÉCOLE FRANCO-ARABE</small>
            </span>
          </a>
          <nav
            className="hidden items-center gap-5 xl:flex"
            aria-label="Navigation principale"
          >
            {navigation.map(([label, id]) => (
              <a
                className="nav-link"
                key={id}
                href={`#${id}`}
                aria-current={activeSection === id ? 'location' : undefined}
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            className="button button-green hidden sm:inline-flex"
            href="#visite"
            aria-current={activeSection === 'visite' ? 'location' : undefined}
          >
            Visiter l’école <ArrowUpRight size={17} />
          </a>
          <button
            ref={menuButtonRef}
            className="menu-toggle xl:hidden"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            onKeyDown={(event) => {
              if (menuOpen && event.key === 'Escape') {
                setMenuOpen(false);
                menuButtonRef.current?.focus();
              }
            }}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav
            id="mobile-nav"
            className="mobile-nav xl:hidden"
            aria-label="Navigation mobile"
          >
            {[
              ...navigation,
              ['Galerie', 'galerie'],
              ['Visiter l’école', 'visite'],
              ['Contact', 'contact'],
            ].map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={activeSection === id ? 'location' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {label}
                <ArrowUpRight size={16} />
              </a>
            ))}
          </nav>
        )}
      </header>
      <main id="contenu" ref={contentRef}>
        <section id="accueil" className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">
                <span className="little-dot" /> AL HIDAYA · RENTRÉE 2026–2027
              </span>
              <h1>
                De belles racines.
                <br />
                Un <em>grand avenir.</em>
              </h1>
              <p className="hero-school-type">
                École franco-arabe à Cambérène
                <br />
                <span>Préscolaire & élémentaire · Dakar</span>
              </p>
              <p className="hero-description">
                À Cambérène 1, l’école franco-arabe Al Hidaya Keur Fatma Haris
                accueille les enfants du préscolaire à l’élémentaire, pour
                apprendre et grandir ensemble.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#inscriptions" className="button button-green">
                  Préparer une inscription <ArrowUpRight size={18} />
                </a>
                <a href="#ecole" className="button button-outline">
                  Découvrir l’école <ArrowRight size={17} />
                </a>
              </div>
              <div className="hero-note">
                <span className="note-icon">
                  <Heart size={19} />
                </span>
                <span>
                  Le savoir pour grandir.
                  <br />
                  <strong>Les valeurs pour se construire.</strong>
                </span>
              </div>
            </div>
            <div className="hero-visual">
              <img
                className="hero-photo"
                src={photos[0].src}
                srcSet={`${photos[0].thumbnail} ${photos[0].thumbnailWidth}w, ${photos[0].src} ${photos[0].width}w`}
                sizes="(max-width: 767px) 90vw, 45vw"
                alt={photos[0].alt}
                width={photos[0].width}
                height={photos[0].height}
                fetchPriority="high"
              />

              <div className="hero-seal">
                <Sprout size={25} />
                <span>
                  APPRENDRE
                  <br />& S’ÉPANOUIR
                </span>
              </div>
              <div className="hero-card">
                <span lang="ar" dir="rtl">
                  أهلاً وسهلاً
                </span>
                <div>
                  <strong>Bienvenue chez nous</strong>
                  <small>Deux langues, un même avenir.</small>
                </div>
                <ArrowUpRight size={22} />
              </div>
            </div>
          </div>
          <div className="wrap">
            <div className="values-strip">
              <div>
                <BookOpen />
                <span>
                  Enseignement<strong>Français & arabe</strong>
                </span>
              </div>
              <div>
                <Sprout />
                <span>
                  Les premiers pas<strong>Préscolaire</strong>
                </span>
              </div>
              <div>
                <GraduationCap />
                <span>
                  Des bases pour la vie<strong>Élémentaire</strong>
                </span>
              </div>
              <div>
                <Heart />
                <span>
                  Au cœur du projet<strong>Savoir & valeurs</strong>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section id="ecole" className="section wrap about-grid">
          <div>
            <span className="eyebrow">L’ESPRIT ALHIDAYA</span>
            <h2>
              Une école pour apprendre.
              <br />
              Un cadre pour <em>grandir.</em>
            </h2>
          </div>
          <div className="about-copy">
            <p>
              L’école franco-arabe Al Hidaya Keur Fatma Haris se situe à
              Cambérène 1, quartier Islam, en face de la mer. Elle propose le
              préscolaire, de la petite à la grande section, et l’élémentaire,
              du CI au CM2.
            </p>
            <p>
              L’école propose également le demi-pensionnat, l’internat et des
              cours complémentaires : renforcement en français, anglais et
              informatique.
            </p>
            <div className="inline-values">
              <span>
                <Check size={16} /> Éveiller la curiosité
              </span>
              <span>
                <Check size={16} /> Cultiver le respect
              </span>
            </div>
            <p className="draft-note">
              IA Dakar / IEF Parcelles Assainies
              <br />
              Autorisation : IA-Dk/BEP · NINEA : 00843-94-63
            </p>
            <div className="school-jump-links">
              <a href="#pedagogie">
                Notre pédagogie <ArrowUpRight size={16} />
              </a>
              <a href="#quotidien">
                Le quotidien <ArrowUpRight size={16} />
              </a>
              <a href="#equipe">
                L’équipe <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>
        <SchoolPedagogy />
        <section id="cycles" className="cycles-section section">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <span className="eyebrow">À CHAQUE ÂGE, SON CHEMIN</span>
                <h2>
                  Petits pas, <em>grandes découvertes.</em>
                </h2>
              </div>
              <p>
                Deux cycles pour accompagner
                <br className="hidden md:block" /> les premières années
                d’apprentissage.
              </p>
            </div>
            <div className="cycle-grid">
              {[
                {
                  title: 'Le préscolaire',
                  description:
                    'La petite, la moyenne et la grande section accueillent les enfants pour leurs premiers pas à l’école. Un univers pour s’éveiller, s’exprimer et découvrir le plaisir d’apprendre ensemble.',
                  tags: ['Petite section', 'Moyenne section', 'Grande section'],
                  label: 'LES PREMIERS PAS',
                  icon: Sprout,
                },
                {
                  title: 'L’élémentaire',
                  description:
                    'Du CI au CM2, un parcours franco-arabe pour lire, écrire, comprendre et construire les bases des apprentissages.',
                  tags: ['CI · CP', 'CE1 · CE2', 'CM1 · CM2'],
                  label: 'GRANDIR DANS LE SAVOIR',
                  icon: BookOpen,
                },
              ].map((cycle, index) => (
                <article className="cycle-card" key={cycle.title}>
                  <div className="cycle-image">
                    <img
                      src={photos[index + 1].src}
                      srcSet={`${photos[index + 1].thumbnail} ${photos[index + 1].thumbnailWidth}w, ${photos[index + 1].src} ${photos[index + 1].width}w`}
                      sizes="(max-width: 767px) 90vw, 45vw"
                      alt={photos[index + 1].alt}
                      width={photos[index + 1].width}
                      height={photos[index + 1].height}
                      loading="lazy"
                    />
                    <span className="image-pill">
                      <cycle.icon size={15} />
                      {cycle.label}
                    </span>
                  </div>
                  <div className="cycle-content">
                    <span className="cycle-number">0{index + 1}</span>
                    <h3>{cycle.title}</h3>
                    <p>{cycle.description}</p>
                    <div className="tags">
                      {cycle.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <a href="#inscriptions" className="text-link">
                      Voir les tarifs pour{' '}
                      {index === 0 ? 'le préscolaire' : 'l’élémentaire'}{' '}
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <SchoolDailyLife />
        <SchoolTeam />
        <SchoolFees />
        <section id="evenements" className="section wrap events-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">ACTIVITÉS & DÉCOUVERTES</span>
              <h2>
                Une école <em>pleine de vie.</em>
              </h2>
            </div>
            <a className="button button-outline" href="#galerie">
              <Camera size={18} /> Voir les photos
            </a>
          </div>
          <p className="section-intro">
            En classe comme en sortie, les photos de l’école racontent des
            moments d’apprentissage, de découverte et de partage.
          </p>
          <div className="event-grid">
            {activities.map((item) => (
              <article key={item.type} className="event-card">
                <div className="event-cover">
                  <img
                    src={item.photo.thumbnail}
                    srcSet={`${item.photo.thumbnail} ${item.photo.thumbnailWidth}w, ${item.photo.src} ${item.photo.width}w`}
                    sizes="(max-width: 767px) 90vw, 30vw"
                    alt={item.photo.alt}
                    width={item.photo.width}
                    height={item.photo.height}
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: item.photoPosition }}
                  />
                  <span className="event-photo-label">
                    <item.icon size={16} aria-hidden="true" /> {item.type}
                  </span>
                </div>
                <div className="event-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="galerie" className="gallery-section section">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <span className="eyebrow">LES SOUVENIRS DE DEMAIN</span>
                <h2>
                  Des sourires. Des découvertes.
                  <br />
                  <em>La vie ensemble.</em>
                </h2>
              </div>
              <div>
                <Camera
                  size={27}
                  strokeWidth={1.4}
                  className="mb-3 text-green-800"
                />
                <p>
                  Les photos de notre école,
                  <br />
                  en classe et lors de nos sorties.
                </p>
              </div>
            </div>
            <div id="school-gallery" className="gallery-grid school-gallery">
              {photos
                .slice(0, showAllPhotos ? photos.length : 6)
                .map((item, index) => (
                  <button
                    key={item.src}
                    className="gallery-item"
                    onClick={() => setPhoto(index)}
                    aria-label={`Agrandir la photo ${index + 1} : ${item.title}`}
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="gallery-caption">
                      <span>
                        {item.title}
                        <small>{item.alt.split(' — ')[0]}</small>
                      </span>
                      <ArrowUpRight size={22} />
                    </span>
                  </button>
                ))}
            </div>
            <div className="gallery-actions">
              <p aria-live="polite">
                {showAllPhotos ? photos.length : 6} photos sur {photos.length}
              </p>
              <button
                className="button button-outline"
                aria-expanded={showAllPhotos}
                aria-controls="school-gallery"
                onClick={() => setShowAllPhotos(!showAllPhotos)}
              >
                {showAllPhotos
                  ? 'Réduire la galerie'
                  : `Voir les ${photos.length} photos`}
                <Camera size={18} />
              </button>
            </div>
          </div>
        </section>
        <SchoolFaq />
        <SchoolVisit />
        <section id="contact" className="section wrap contact-section">
          <div className="contact-panel">
            <div>
              <span className="eyebrow">FAISONS CONNAISSANCE</span>
              <h2>
                Le début d’une
                <br />
                <em>belle aventure.</em>
              </h2>
              <p>
                Une question sur l’école ou les inscriptions ?<br />
                La direction vous renseigne sur la rentrée 2026–2027.
              </p>
              <span className="contact-location">
                <MapPin size={18} /> Cambérène 1, quartier Islam, en face de la
                mer
              </span>
              <div className="contact-actions">
                <a className="button inline-flex" href="tel:+221776358919">
                  <Phone size={18} /> Appeler l’école
                </a>
                <a
                  className="button inline-flex whatsapp-button"
                  href="https://wa.me/221776358919"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={18} /> WhatsApp
                </a>
                <a
                  className="button inline-flex"
                  href="mailto:safietou1305@gmail.com"
                >
                  <Mail size={18} /> Écrire à la direction
                </a>
              </div>
            </div>
            <div className="contact-information">
              <h3>Préparer votre rencontre</h3>
              <div className="contact-row">
                <span>Téléphone</span>
                <p>
                  <a href="tel:+221776358919">77 635 89 19</a>
                </p>
              </div>
              <div className="contact-row">
                <span>E-mail</span>
                <p>
                  <a href="mailto:safietou1305@gmail.com">
                    safietou1305@gmail.com
                  </a>
                </p>
              </div>
              <div className="contact-row">
                <span>Adresse</span>
                <p>Cambérène 1, quartier Islam, en face de la mer</p>
              </div>
              <div className="contact-row">
                <span>Horaires d’ouverture</span>
                <p>{schoolHours}</p>
              </div>
              <div className="contact-row">
                <span>Inscription / réinscription</span>
                <p>
                  Année académique 2026–2027 ·{' '}
                  <a href="#inscriptions">
                    Consulter les tarifs et les pièces à fournir
                  </a>
                </p>
              </div>
              <p className="contact-footnote">
                Pour préparer votre visite, contactez la direction ou consultez{' '}
                <a href="#visite">les informations d’accès</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-top">
          <a href="#accueil" className="brand">
            <span className="brand-icon">
              <BookOpen size={27} strokeWidth={1.5} />
            </span>
            <span>
              <strong>AL HIDAYA.</strong>
              <small>KEUR FATMA HARIS</small>
            </span>
          </a>
          <p>
            Le savoir nous éclaire.
            <br />
            Les valeurs nous unissent.
          </p>
          <nav aria-label="Navigation de pied de page">
            <a href="#ecole">L’école</a>
            <a href="#cycles">Nos cycles</a>
            <a href="#inscriptions">Inscriptions</a>
            <a href="#equipe">L’équipe</a>
            <a href="#questions">FAQ</a>
            <a href="#visite">Accès & horaires</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <div className="wrap footer-bottom">
          <span>© {new Date().getFullYear()} Al Hidaya Keur Fatma Haris</span>
          <span>Année académique 2026–2027</span>
          <span>Développé par Elijahdev</span>
          <a href="#accueil">Retour en haut ↑</a>
        </div>
      </footer>
      <a
        className="whatsapp-float"
        href="https://wa.me/221776358919"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter l’école sur WhatsApp"
        title="Contacter l’école sur WhatsApp"
      >
        <MessageCircle size={24} />
        <span>WhatsApp</span>
      </a>
      {showBackToTop && (
        <a
          className="back-to-top"
          href="#accueil"
          aria-label="Revenir en haut de la page"
          title="Revenir en haut"
        >
          <ArrowUp size={21} />
        </a>
      )}
      <Dialog
        open={photo !== null}
        onOpenChange={(open) => {
          if (!open) setPhoto(null);
        }}
      >
        <DialogContent
          className="max-h-[92dvh] overflow-y-auto p-5 sm:max-w-4xl"
          showCloseButton={false}
          onKeyDown={(e) => {
            if (
              photo !== null &&
              (e.key === 'ArrowLeft' || e.key === 'ArrowRight')
            ) {
              e.preventDefault();
              setPhoto(
                (photo + (e.key === 'ArrowLeft' ? photos.length - 1 : 1)) %
                  photos.length,
              );
            }
          }}
        >
          {photo !== null && (
            <>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <DialogTitle className="text-xl">
                    {photos[photo].title}
                  </DialogTitle>
                  <DialogDescription className="mt-2" aria-live="polite">
                    Al Hidaya Keur Fatma Haris · Photo {photo + 1} sur{' '}
                    {photos.length}
                  </DialogDescription>
                </div>
                <DialogClose
                  aria-label="Fermer la photo"
                  className="round-link shrink-0"
                >
                  <X size={20} />
                </DialogClose>
              </div>
              <img
                key={photos[photo].src}
                src={photos[photo].src}
                alt={photos[photo].alt}
                className="lightbox-photo max-h-[65dvh] w-full rounded-xl object-contain"
              />
              <div className="flex justify-between gap-3">
                <button
                  className="button button-outline"
                  onClick={() =>
                    setPhoto((photo + photos.length - 1) % photos.length)
                  }
                >
                  ← Précédente
                </button>
                <button
                  className="button button-green"
                  onClick={() => setPhoto((photo + 1) % photos.length)}
                >
                  Suivante →
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
