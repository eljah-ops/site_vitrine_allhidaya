export const schoolHours = 'Du lundi au vendredi, de 8 h à 17 h';
export const schoolAddress = 'Cambérène 1, quartier Islam, en face de la mer';
const mapQuery = encodeURIComponent(
  'École Al Hidaya Keur Fatma Haris, Cambérène 1, Dakar, Sénégal',
);
export const schoolMapUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
export const schoolDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;
export const schoolMapEmbedUrl = `https://maps.google.com/maps?q=${mapQuery}&output=embed`;
