// À l'aide de la syntaxe spread, concaténez deux tableaux et
// chaque caractère d'une chaîne en modifiant la fonction ci-dessous.
// Le corps de votre fonction doit tenir sur une seule ligne.

export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}

// ...array1 prend tous les éléments du premier tableau.
// ...array2 prend tous les éléments du second tableau.
// ...string transforme la chaîne de caractères en tableau de lettres.
// "Hello" devient ["H", "e", "l", "l", "o"].
// Le tout est regroupé dans un nouveau tableau grâce aux []
