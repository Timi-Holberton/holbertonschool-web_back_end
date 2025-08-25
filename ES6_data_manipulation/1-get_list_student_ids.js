// Créez une fonction getListStudentIds qui renvoie un tableau d'identifiants
// à partir d'une liste d'objets. Cette fonction prend un seul argument,
// qui est un tableau d'objets. Ce tableau a le même format que celui de la
// fonction getListStudents de la tâche précédente. Si l'argument n'est pas
// un tableau, la fonction renvoie un tableau vide. Vous devez utiliser
// la fonction map sur le tableau.

// Déclare et exporte par défaut la fonction getListStudentIds avec un
// paramètre students
export default function getListStudentIds(students) {

  // Vérifie si students n'est pas un tableau
  if (!Array.isArray(students)) {

    // Si ce n'est pas un tableau, retourne un tableau vide
    return [];
  }

  // Sinon, crée et retourne un nouveau tableau contenant uniquement les
  // id des objets étudiants
  return students.map((student) => student.id);
}
