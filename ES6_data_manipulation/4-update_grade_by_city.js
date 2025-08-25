// Créez une fonction updateStudentGradeByCity qui renvoie un tableau
// d'étudiants pour une ville spécifique avec leur nouvelle note.
// Elle doit accepter une liste d'étudiants (provenant de getListStudents),
// une ville (chaîne de caractères) et newGrades (tableau d'objets « grade »)
// comme paramètres.
// newGrades est un tableau d'objets au format suivant :

// Crée et exporte par défaut la fonction updateStudentGradeByCity
// Elle prend trois paramètres : students (tableau d'étudiants), city (chaîne),
//  newGrades (tableau de notes)
export default function updateStudentGradeByCity(students, city, newGrades) {

  // Filtre les étudiants, ne garder que ceux qui sont dans la ville spécifiée
  let filteredStudents = students.filter(student => student.location === city);

  // Transforme chaque étudiant filtré en ajoutant la propriété grade
  filteredStudents = filteredStudents.map(student => {
    // Cherche la note correspondant à cet étudiant dans newGrades
    const gradeObj = newGrades.find(g => g.studentId === student.id);

    // Si une note existe, l'utilise, sinon met "N/A"
    const grade = gradeObj ? gradeObj.grade : "N/A";

    // Retourne un nouvel objet étudiant avec toutes les infos + grade
    return { ...student, grade };
  });

  // Retourne le tableau final d'étudiants avec les grades mis à jour
  return filteredStudents;
}

