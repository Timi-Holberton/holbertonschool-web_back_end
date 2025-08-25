// Créez une fonction getStudentIdsSum qui renvoie la somme de tous les
// identifiants des étudiants.
// Elle doit accepter une liste d'étudiants (provenant de getListStudents)
// comme paramètre.
// Vous devez utiliser la fonction reduce sur le tableau.

export default function getStudentIdsSum(listStudent) {
  // On utilise reduce pour additionner tous les id des étudiants
  let sum = listStudent.reduce((total, student) => total + student.id, 0);
  return sum;
}
