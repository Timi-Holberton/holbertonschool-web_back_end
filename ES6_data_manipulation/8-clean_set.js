/**
 * cleanSet - Retourne une chaîne composée des valeurs d'un Set
 * commençant par une sous-chaîne donnée (startString).
 *
 * Chaque valeur trouvée est tronquée pour retirer startString,
 * et toutes les parties sont concaténées avec un séparateur "-".
 */

export default function cleanSet(set, startString) {
  // Vérifie que le premier argument est bien un Set
  // et que startString est une chaîne non vide
  if (!(set instanceof Set) || typeof startString !== 'string'
  || startString.length === 0) {
    return '';
  }

  // Tableau temporaire pour stocker les morceaux qui suivent startString
  const result = [];

  // Parcourt chaque valeur du Set
  for (const value of set) {
    // On ne travaille que si la valeur est une chaîne
    // et qu'elle commence par startString
    if (typeof value === 'string' && value.startsWith(startString)) {
      // Retire le préfixe (startString) et garde le reste
      result.push(value.slice(startString.length));
    }
  }

  // Concatène les morceaux trouvés en une seule chaîne, séparés par "-"
  return result.join('-');
}
