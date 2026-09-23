import { Download, CalendarDays, FileText, BookOpen } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import fees from "@/lib/school-fees.json";

const money = (amount: number) => `${amount.toLocaleString("fr-FR")} F`;

export default function SchoolFees() {
  return (
    <section id="inscriptions" className="section wrap">
      <div className="section-heading">
        <div>
          <span className="eyebrow">ANNÉE ACADÉMIQUE 2026–2027</span>
          <h2>
            Préparer sa rentrée, <em>simplement.</em>
          </h2>
        </div>
        <a
          className="button button-outline inline-flex"
          href="/documents/fiche-renseignement-2026-2027.pdf"
          download
        >
          <Download size={18} /> Télécharger la fiche (PDF)
        </a>
      </div>
      <p className="section-intro">
        Inscription et réinscription : retrouvez les tarifs communiqués par la
        direction. Tous les montants sont en francs CFA.
      </p>
      <div className="fees-table hidden md:block">
        <Table>
          <TableCaption className="sr-only">
            Tarifs d’inscription et de réinscription 2026–2027, en francs CFA.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead scope="col">Niveau / formule</TableHead>
              <TableHead scope="col">Droit d’inscription</TableHead>
              <TableHead scope="col">Scolarité mensuelle</TableHead>
              <TableHead scope="col">Uniforme</TableHead>
              <TableHead scope="col">Total à payer</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fees.map((fee) => (
              <TableRow key={fee.level}>
                <TableHead scope="row">
                  <strong>{fee.level}</strong>
                  {fee.detail && <small>{fee.detail}</small>}
                </TableHead>
                <TableCell>
                  {money(fee.registration)}
                  {fee.copies !== null && (
                    <small>Photocopies : {money(fee.copies)}</small>
                  )}
                </TableCell>
                <TableCell>{money(fee.monthly)}</TableCell>
                <TableCell>{money(fee.uniform)}</TableCell>
                <TableCell>
                  <strong className="fee-total">{money(fee.total)}</strong>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="fee-cards md:hidden">
        {fees.map((fee) => (
          <article className="fee-card" key={fee.level}>
            <h3>{fee.level}</h3>
            {fee.detail && <p className="fee-detail">{fee.detail}</p>}
            <dl>
              <div>
                <dt>Droit d’inscription</dt>
                <dd>{money(fee.registration)}</dd>
              </div>
              {fee.copies !== null && (
                <div>
                  <dt>Photocopies</dt>
                  <dd>{money(fee.copies)}</dd>
                </div>
              )}
              <div>
                <dt>Scolarité mensuelle</dt>
                <dd>{money(fee.monthly)}</dd>
              </div>
              <div>
                <dt>Uniforme</dt>
                <dd>{money(fee.uniform)}</dd>
              </div>
              <div className="fee-card-total">
                <dt>Total à payer</dt>
                <dd>{money(fee.total)}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
      <div className="enrollment-notes">
        <article>
          <CalendarDays size={23} />
          <h3>Les mensualités</h3>
          <p>
            La mensualité est payable au plus tard le{" "}
            <strong>05 du mois</strong>. Celle de juin est incluse dans
            l’inscription.
          </p>
        </article>
        <article>
          <FileText size={23} />
          <h3>Le document à fournir</h3>
          <p>
            Un <strong>extrait de naissance</strong> est demandé pour les
            nouveaux élèves et les élèves de CM2.
          </p>
        </article>
        <article>
          <BookOpen size={23} />
          <h3>Les cours complémentaires</h3>
          <p>
            Renforcement en français, anglais et informatique. Pour
            l’inscription et les mensualités de ces cours, veuillez vous
            adresser à la direction.
          </p>
        </article>
      </div>
      <p className="draft-note mt-5">
        Source : fiche de renseignement 2026–2027 de l’école. Pour les modalités
        du demi-pensionnat et de l’internat, contactez la direction.
      </p>
    </section>
  );
}
