// Créez une fonction nommée updateUniqueItems qui renvoie une carte mise à
// jour pour tous les éléments dont la quantité initiale est égale à 1.

// Elle doit accepter une carte comme argument. La carte qu'elle accepte
// comme argument est similaire à celle que vous avez créée dans la tâche
// précédente.

// Pour chaque entrée de la carte dont la quantité est égale à 1,
// mettez à jour la quantité à 100. Si la mise à jour de la quantité n'est
// pas possible (l'argument n'est pas une carte), l'erreur Cannot process
// doit être générée.

export default function updateUniqueItems(myMap) {
  if (!(myMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [key, value] of myMap) {
    if (typeof value === 'number' && value === 1) {
      myMap.set(key, 100);
    }
  }
  return myMap;
}
