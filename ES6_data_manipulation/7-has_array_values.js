// Créez une fonction nommée hasValuesFromArray qui renvoie une valeur
// booléenne si tous les éléments du tableau existent dans l'ensemble.
// Elle accepte deux arguments : un ensemble (Set) et un tableau (Array).

// Exporte la fonction pour qu'elle puisse être importée dans d'autres fichiers
export default function hasValuesFromArray(set, array) {
  // Utilise la méthode .every() sur le tableau "array"
  // .every() vérifie que TOUS les éléments du tableau remplissent la
  // condition donnée
  return array.every((element) =>
    // Pour chaque élément du tableau, on vérifie s'il est présent dans le Set
    set.has(element)
  );
  // La fonction retourne true si tous les éléments du tableau sont
  // dans le Set, sinon elle retourne false
}
