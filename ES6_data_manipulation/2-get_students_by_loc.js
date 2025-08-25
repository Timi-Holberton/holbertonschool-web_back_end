// Créez une fonction getStudentsByLocation qui renvoie un tableau d'objets
// situés dans une ville spécifique. Elle doit accepter une liste d'étudiants
// (provenant de getListStudents) et une ville (chaîne de caractères) comme
// paramètres. Vous devez utiliser la fonction filter sur le tableau.

export default function getStudentsByLocation(students, ville) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.filter((student) => student.location === ville);
}
