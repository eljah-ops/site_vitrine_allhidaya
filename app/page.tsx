'use client';
import { useState } from 'react';
import SchoolFees from '@/components/school-fees';
import {
  ArrowUpRight,
  ArrowRight,
  BookOpen,
  Sprout,
  Heart,
  MapPin,
  CalendarDays,
  Menu,
  X,
  GraduationCap,
  Camera,
  Check,
  Mic,
  Bus,
  Sparkles,
  Phone,
  Mail,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';

const photos = [
  {
    src: '/images/hero.jpg',
    title: 'Le plaisir d’apprendre ensemble',
    alt: 'Des enfants souriants en classe — photo d’illustration',
  },
  {
    src: '/images/maternelle.jpg',
    title: 'De petites mains, de grandes idées',
    alt: 'Enfants participant à une activité créative — photo d’illustration',
  },
  {
    src: '/images/activite.jpg',
    title: 'Grandir, un apprentissage à la fois',
    alt: 'Un enseignant accompagne un élève — photo d’illustration',
  },
];
const navigation = [
  ['L’école', 'ecole'],
  ['Nos cycles', 'cycles'],
  ['Inscriptions', 'inscriptions'],
  ['Vie scolaire', 'galerie'],
  ['Événements', 'evenements'],
];
const events = [
  {
    icon: Mic,
    type: 'CONFÉRENCE',
    title: 'Apprendre et grandir ensemble',
    description:
      'Un temps d’échange entre les familles et l’équipe éducative autour de l’éducation des enfants.',
    detail:
      'Le thème, les intervenants et les modalités de participation seront précisés avec le programme de l’école.',
    tone: 'mint',
  },
  {
    icon: Bus,
    type: 'SORTIE PÉDAGOGIQUE',
    title: 'La découverte hors des murs',
    description:
      'Observer, explorer et s’émerveiller : une autre façon de découvrir le monde qui nous entoure.',
    detail:
      'La destination, les classes concernées et les horaires seront communiqués par l’école.',
    tone: 'cream',
  },
  {
    icon: Sparkles,
    type: 'VIE DE L’ÉCOLE',
    title: 'Nos talents à l’honneur',
    description:
      'Un moment de partage pour mettre en lumière les découvertes et les réalisations des élèves.',
    detail:
      'Le programme de cette rencontre et les informations destinées aux familles seront ajoutés après confirmation par l’école.',
    tone: 'blue',
  },
];
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [photo, setPhoto] = useState<number | null>(null);
  const [event, setEvent] = useState<number | null>(null);
  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <div className="topbar">
        <div className="wrap flex items-center justify-between gap-4">
          <span>Grandir dans le savoir, s’épanouir dans les valeurs.</span>
          <span className="hidden items-center gap-2 sm:flex">
            <MapPin size={13} /> Cambérène 1 · Dakar
          </span>
        </div>
      </div>
      <header className="site-header">
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
              <a className="nav-link" key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
          <a
            className="button button-green hidden sm:inline-flex"
            href="#contact"
          >
            Rencontrons-nous <ArrowUpRight size={17} />
          </a>
          <button
            className="menu-toggle xl:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
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
            {[...navigation, ['Contact', 'contact']].map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label}
                <ArrowUpRight size={16} />
              </a>
            ))}
          </nav>
        )}
      </header>
      <main id="contenu">
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
              <p className="hero-description">
                À Cambérène 1, l’école franco-arabe Al Hidaya Keur Fatma Haris
                accueille les enfants du préscolaire à l’élémentaire, pour
                apprendre et grandir ensemble.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#cycles" className="button button-green">
                  Découvrir notre école <ArrowUpRight size={18} />
                </a>
                <a href="#inscriptions" className="button button-outline">
                  Inscriptions & tarifs <ArrowRight size={17} />
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
                alt={photos[0].alt}
                width="700"
                height="760"
                fetchPriority="high"
              />
              <span className="photo-label">Photo d’illustration</span>
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
              IA Dakar / IEF Parcelles Assainies<br/>
              Autorisation : IA-Dk/BEP · NINEA : 00843-94-63
            </p>
          </div>
        </section>
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
                      alt={photos[index + 1].alt}
                      width="720"
                      height="460"
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
        <SchoolFees />
        <section id="evenements" className="section wrap events-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">DES MOMENTS QUI NOUS RASSEMBLENT</span>
              <h2>
                Une école <em>pleine de vie.</em>
              </h2>
            </div>
            <span className="agenda-label">
              <CalendarDays size={18} /> L’agenda de l’école
            </span>
          </div>
          <p className="section-intro">
            Conférences, sorties pédagogiques, rencontres… L’apprentissage
            continue aussi en dehors de la classe.
          </p>
          <div className="event-grid">
            {events.map((item, index) => (
              <article key={item.type} className="event-card">
                <div className={`event-cover ${item.tone}`}>
                  <item.icon size={48} strokeWidth={1.2} />
                  <span>EXEMPLE D’ÉVÉNEMENT</span>
                  <span className="event-index">0{index + 1}</span>
                </div>
                <div className="event-content">
                  <span className="eyebrow">{item.type}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="event-bottom">
                    <span>
                      <CalendarDays size={15} /> Date à confirmer
                    </span>
                    <button
                      aria-label={`Détails : ${item.title}`}
                      className="round-link"
                      onClick={() => setEvent(index)}
                    >
                      <ArrowUpRight size={20} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="draft-note mt-5">
            Agenda de démonstration. Les événements et dates réels seront
            communiqués par l’école.
          </p>
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
                  Un regard sur les petits moments
                  <br />
                  qui font les grandes années.
                </p>
              </div>
            </div>
            <div className="gallery-grid">
              {photos.map((item, index) => (
                <button
                  key={item.src}
                  className={`gallery-item gallery-item-${index}`}
                  onClick={() => setPhoto(index)}
                  aria-label={`Agrandir : ${item.title}`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    width="800"
                    height="700"
                    loading="lazy"
                  />
                  <span className="gallery-caption">
                    {item.title}
                    <ArrowUpRight size={22} />
                  </span>
                </button>
              ))}
            </div>
            <p className="draft-note mt-5">
              Photos d’illustration · Elles seront remplacées par les photos des
              élèves et des activités de l’école.
            </p>
          </div>
        </section>
        <section id="contact" className="section wrap">
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
                <MapPin size={18} /> Cambérène 1, quartier Islam, en face de la mer
              </span>
              <div className="contact-actions">
                <a className="button inline-flex" href="tel:+221776358919"><Phone size={18}/> Appeler l’école</a>
                <a className="button inline-flex" href="mailto:safietou1305@gmail.com"><Mail size={18}/> Écrire à la direction</a>
              </div>
            </div>
            <div className="contact-information">
              <h3>Préparer votre rencontre</h3>
              <div className="contact-row"><span>Téléphone</span><p><a href="tel:+221776358919">77 635 89 19</a></p></div>
              <div className="contact-row"><span>E-mail</span><p><a href="mailto:safietou1305@gmail.com">safietou1305@gmail.com</a></p></div>
              <div className="contact-row"><span>Adresse</span><p>Cambérène 1, quartier Islam, en face de la mer</p></div>
              <div className="contact-row"><span>Inscription / réinscription</span><p>Année académique 2026–2027 · <a href="#inscriptions">Consulter les tarifs et les pièces à fournir</a></p></div>
              <p className="contact-footnote">
                Pour connaître les horaires d’accueil, contactez la direction avant votre visite.
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
            <a href="#evenements">Événements</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <div className="wrap footer-bottom">
          <span>© {new Date().getFullYear()} Al Hidaya Keur Fatma Haris</span>
          <span>Année académique 2026–2027 · Photos d’illustration : Pexels</span>
          <a href="#accueil">Retour en haut ↑</a>
        </div>
      </footer>
      <Dialog
        open={photo !== null}
        onOpenChange={(open) => {
          if (!open) setPhoto(null);
        }}
      >
        <DialogContent
          className="max-h-[92dvh] overflow-y-auto p-5 sm:max-w-4xl"
          showCloseButton={false}
        >
          {photo !== null && (
            <>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <DialogTitle className="text-xl">
                    {photos[photo].title}
                  </DialogTitle>
                  <DialogDescription className="mt-2">
                    Photo d’illustration · Les photos de l’école seront ajoutées
                    prochainement.
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
                src={photos[photo].src}
                alt={photos[photo].alt}
                className="max-h-[65dvh] w-full rounded-xl object-contain"
              />
              <div className="flex justify-between gap-3">
                <button
                  className="button button-outline"
                  onClick={() => setPhoto((photo + 2) % 3)}
                >
                  ← Précédente
                </button>
                <button
                  className="button button-green"
                  onClick={() => setPhoto((photo + 1) % 3)}
                >
                  Suivante →
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
      <Dialog
        open={event !== null}
        onOpenChange={(open) => {
          if (!open) setEvent(null);
        }}
      >
        <DialogContent className="p-7 sm:max-w-lg" showCloseButton={false}>
          {event !== null && (
            <>
              <div className="flex items-center justify-between gap-4">
                <span className="eyebrow">EXEMPLE D’ÉVÉNEMENT</span>
                <DialogClose
                  aria-label="Fermer les détails"
                  className="round-link"
                >
                  <X size={20} />
                </DialogClose>
              </div>
              <DialogTitle className="text-2xl">
                {events[event].title}
              </DialogTitle>
              <DialogDescription className="text-base leading-relaxed">
                {events[event].description} {events[event].detail}
              </DialogDescription>
              <p className="flex items-center gap-2 text-sm font-medium text-green-800">
                <CalendarDays size={18} /> Date et programme à confirmer
              </p>
              <DialogClose className="button button-green mt-2">
                Fermer
              </DialogClose>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
