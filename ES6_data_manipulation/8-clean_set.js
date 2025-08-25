export default function cleanSet(set, startString) {
  let resultat = [];

  set.forEach(function (value) {
    // Vérifiez si la valeur commence par startString
    if (value.startsWith(startString)) {
      // Utilisez slice pour obtenir le reste de la chaîne
      resultat.push(value.slice(startString.length));
    }
  });

  // Joindre et retourner le tableau comme chaîne
  return resultat.join('-');
}
