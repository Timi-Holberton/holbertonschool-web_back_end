// Condensez le contenu de la fonction suivante en une seule ligne,
// sans modifier le nom des fonctions/variables.

// Les valeurs par default sont indiquées directement dans la définition des
// paramètres.

export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  return initialNumber + expansion1989 + expansion2019;
}

/*
export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  if (expansion1989 === undefined) {
    expansion1989 = 89;
  }

  if (expansion2019 === undefined) {
    expansion2019 = 19;
  }
  return initialNumber + expansion1989 + expansion2019;
}
*/
