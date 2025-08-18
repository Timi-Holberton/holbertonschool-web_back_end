// Modifiez la fonction suivante afin qu'elle renvoie le nombre d'arguments
// qui lui sont passés à l'aide de la syntaxe du paramètre rest.
export default function returnHowManyArguments(...reste) {
  return reste.length;
}
