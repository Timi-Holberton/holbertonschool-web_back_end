export default function appendToEachArrayValue(array, appendString) {
  const tableau = [];
  for (const valeur of array) {
    tableau.push(appendString + valeur); // ajoute élément au tableau vide
  }
  return tableau;
}
