// Réécrivez la fonction standard suivante afin d'utiliser la syntaxe
// fléchée ES6 de la fonction add (il s'agira ensuite d'une fonction anonyme).
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}
/*
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = function add(newNeighborhood) {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
*/
// Permet de supprimer "const self = this" car grâce à la fonction fléchés
// le "this" reste celui du parent.

// on supprime "function add" et on ajoute "=>", elle devient une
// fonction anonyme

