/* oxlint-disable next/no-img-element */
import {
  ArrowUpRight,
  BookOpen,
  Clock3,
  HeartHandshake,
  Languages,
  MapPin,
  MessageCircle,
  Plus,
  Sprout,
} from 'lucide-react';
import photos from '@/lib/school-photos.json';
import {
  schoolAddress,
  schoolDirectionsUrl,
  schoolHours,
  schoolMapEmbedUrl,
  schoolMapUrl,
} from '@/lib/school-info';

function SchoolPhoto({ id, caption }: { id: number; caption: string }) {
  const photo = photos.find((item) => item.id === id)!;
  return (
    <figure className="editorial-photo">
      <img
        src={photo.src}
        srcSet={`${photo.thumbnail} ${photo.thumbnailWidth}w, ${photo.src} ${photo.width}w`}
        sizes="(max-width: 767px) 90vw, 45vw"
        width={photo.width}
        height={photo.height}
        alt={photo.alt}
        loading="lazy"
        decoding="async"
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export function SchoolPedagogy() {
  return (
    <section id="pedagogie" className="section wrap editorial-grid">
      <SchoolPhoto
        id={24}
        caption="Dans une classe d’Al Hidaya, les apprentissages prennent vie."
      />
      <div>
        <span className="eyebrow">NOTRE APPROCHE PÉDAGOGIQUE</span>
        <h2>
          Apprendre avec curiosité.
          <br />
          <em>Grandir avec des repères.</em>
        </h2>
        <p className="editorial-intro">
          Du premier jeu aux premiers textes, un parcours franco-arabe qui fait
          une place au savoir, à l’expression et à la vie ensemble.
        </p>
        <div className="pedagogy-points">
          <article>
            <Languages aria-hidden="true" />
            <div>
              <h3>Le français et l’arabe</h3>
              <p>
                Deux langues au cœur du parcours scolaire, du préscolaire à
                l’élémentaire.
              </p>
            </div>
          </article>
          <article>
            <Sprout aria-hidden="true" />
            <div>
              <h3>Découvrir, puis construire</h3>
              <p>
                Au préscolaire, jouer et s’exprimer. Du CI au CM2, apprendre à
                lire, écrire et comprendre.
              </p>
            </div>
          </article>
          <article>
            <BookOpen aria-hidden="true" />
            <div>
              <h3>Aller plus loin</h3>
              <p>
                Des cours complémentaires de renforcement en français, d’anglais
                et d’informatique sont également proposés.
              </p>
            </div>
          </article>
        </div>
        <a className="text-link" href="#equipe">
          Échanger sur le parcours de votre enfant <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}

export function SchoolDailyLife() {
  return (
    <section id="quotidien" className="daily-section section">
      <div className="wrap">
        <div className="daily-heading">
          <div>
            <span className="eyebrow">LE QUOTIDIEN À L’ÉCOLE</span>
            <h2>
              Des repères pour les enfants.
              <br />
              <em>De la clarté pour les parents.</em>
            </h2>
          </div>
          <div className="opening-hours">
            <Clock3 size={26} aria-hidden="true" />
            <span>HORAIRES D’OUVERTURE</span>
            <strong>8 h — 17 h</strong>
            <p>Du lundi au vendredi</p>
          </div>
        </div>
        <div className="daily-details">
          <article>
            <span className="detail-number">01</span>
            <h3>Le temps d’apprendre</h3>
            <p>
              Classes, jeux et activités rythment la vie de l’école. L’emploi du
              temps de chaque niveau est à demander à la direction.
            </p>
          </article>
          <article>
            <span className="detail-number">02</span>
            <h3>Les formules d’accueil</h3>
            <p>
              Le demi-pensionnat et l’internat sont proposés. Échangez avec la
              direction sur les repas, l’organisation et les modalités
              d’accueil.
            </p>
            <a href="#inscriptions">
              Consulter les tarifs <ArrowUpRight size={16} />
            </a>
          </article>
          <article>
            <span className="detail-number">03</span>
            <h3>Le lien avec les familles</h3>
            <p>
              Une question sur la scolarité ou la prochaine rentrée ? Contactez
              la direction par téléphone, par e-mail ou sur WhatsApp.
            </p>
            <a href="#contact">
              Parlons de votre enfant <ArrowUpRight size={16} />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

export function SchoolTeam() {
  return (
    <section id="equipe" className="section wrap editorial-grid team-section">
      <div>
        <span className="eyebrow">L’ÉQUIPE & LES FAMILLES</span>
        <h2>
          Faisons connaissance,
          <br />
          <em>tout simplement.</em>
        </h2>
        <p className="editorial-intro">
          Choisir une école, c’est aussi rencontrer les personnes à qui l’on
          confie son enfant. Prenez le temps de découvrir Al Hidaya et de poser
          vos questions.
        </p>
        <div className="team-roles">
          <article>
            <h3>La direction</h3>
            <p>
              Votre contact pour préparer une visite, connaître les modalités
              d’admission et vous renseigner sur les formules d’accueil.
            </p>
          </article>
          <article>
            <h3>L’équipe éducative</h3>
            <p>
              Rencontrez l’équipe pour parler des apprentissages en français et
              en arabe, des activités et du suivi de votre enfant.
            </p>
          </article>
        </div>
        <div className="family-note">
          <HeartHandshake aria-hidden="true" />
          <p>
            <strong>Votre échange commence ici.</strong> Présentez-nous l’âge et
            le niveau scolaire de votre enfant pour préparer votre rencontre
            avec l’école.
          </p>
        </div>
        <a className="button button-green" href="#contact">
          Rencontrer l’équipe <ArrowUpRight size={18} />
        </a>
      </div>
      <SchoolPhoto
        id={25}
        caption="Un moment de rencontre dans une classe de l’école."
      />
    </section>
  );
}

const questions = [
  {
    question: 'Quels niveaux l’école accueille-t-elle ?',
    answer:
      'Al Hidaya accueille les enfants au préscolaire (petite, moyenne et grande section) et à l’élémentaire, du CI au CM2. Pour l’âge d’admission et le niveau adapté à votre enfant, contactez la direction.',
  },
  {
    question: 'Quels sont les horaires d’ouverture ?',
    answer: `L’école est ouverte du lundi au vendredi, de 8 h à 17 h. Les horaires de cours et l’emploi du temps propres à chaque classe sont à demander à l’école.`,
  },
  {
    question: 'Quelles langues sont enseignées ?',
    answer:
      'L’école propose un parcours franco-arabe. Des cours complémentaires de renforcement en français, d’anglais et d’informatique sont également proposés ; leurs modalités sont à demander à la direction.',
  },
  {
    question: 'Comment préparer une inscription ?',
    answer:
      'Consultez les tarifs et téléchargez la fiche de renseignement 2026–2027. Un extrait de naissance est demandé pour les nouveaux élèves et les élèves de CM2. Contactez ensuite la direction pour organiser le dépôt du dossier et vérifier les modalités d’admission.',
  },
  {
    question: 'Quand faut-il payer les mensualités ?',
    answer:
      'La mensualité est payable au plus tard le 5 du mois. Celle de juin est incluse dans l’inscription. Les montants par niveau et par formule sont détaillés dans la rubrique Inscriptions & tarifs.',
  },
  {
    question: 'L’école propose-t-elle le demi-pensionnat et l’internat ?',
    answer:
      'Oui, les deux formules sont proposées et leurs tarifs figurent sur le site. Contactez la direction pour connaître l’organisation des repas, les conditions d’accueil et les modalités de l’internat.',
  },
  {
    question: 'Comment visiter l’école et préparer les fournitures ?',
    answer:
      'Appelez le 77 635 89 19 ou écrivez sur WhatsApp pour convenir d’une visite du lundi au vendredi, entre 8 h et 17 h. Vous pourrez demander la liste des fournitures adaptée au niveau de votre enfant et les informations sur l’uniforme.',
  },
];

export function SchoolFaq() {
  return (
    <section id="questions" className="faq-section section">
      <div className="wrap faq-grid">
        <div>
          <span className="eyebrow">LES QUESTIONS DES PARENTS</span>
          <h2>
            Avant le premier jour,
            <br />
            <em>on vous répond.</em>
          </h2>
          <p className="editorial-intro">
            Les informations essentielles pour préparer la rentrée en toute
            sérénité.
          </p>
          <a
            className="text-link"
            href="https://wa.me/221776358919"
            target="_blank"
            rel="noopener noreferrer"
          >
            Poser une autre question <MessageCircle size={18} />
          </a>
        </div>
        <div className="faq-list">
          {questions.map((item) => (
            <details key={item.question}>
              <summary>
                {item.question}
                <Plus size={19} aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SchoolVisit() {
  return (
    <section id="visite" className="section wrap visit-section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">VENIR NOUS RENCONTRER</span>
          <h2>
            Votre prochaine étape :<br />
            <em>une visite à Al Hidaya.</em>
          </h2>
        </div>
        <p>
          Découvrez notre cadre et échangez
          <br className="hidden md:block" /> avec l’équipe sur place.
        </p>
      </div>
      <div className="visit-grid">
        <div className="visit-map">
          <iframe
            title="Rechercher l’école Al Hidaya à Cambérène sur Google Maps"
            src={schoolMapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a href={schoolMapUrl} target="_blank" rel="noopener noreferrer">
            Ouvrir la carte <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="visit-info">
          <MapPin size={28} aria-hidden="true" />
          <h3>À Cambérène 1, Dakar</h3>
          <p>{schoolAddress}.</p>
          <div className="visit-hours">
            <Clock3 size={20} aria-hidden="true" />
            <div>
              <strong>{schoolHours}</strong>
              <span>Horaires d’ouverture de l’école</span>
            </div>
          </div>
          <p>
            Pour préparer votre visite, appelez le{' '}
            <a href="tel:+221776358919">77 635 89 19</a>. La direction pourra
            aussi vous préciser l’accès à l’école.
          </p>
          <a
            className="button button-green"
            href={schoolDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Itinéraire <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
