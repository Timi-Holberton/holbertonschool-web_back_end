const fs = require('fs'); // Import du module natif 'fs' pour lire les fichiers

function countStudents(path) {
  try {
    // Lire le fichier de manière synchrone en UTF-8 (sinon retourne un Buffer)
    const data = fs.readFileSync(path, 'utf-8');

    // Supprimer les espaces inutiles et découper le contenu en tableau de lignes
    const lines = data.trim().split('\n');

    // Retirer la première ligne (l’en-tête : firstname,lastname,age,field)
    lines.shift();

    // Objet pour stocker les étudiants par champ d’étude (ex: CS, SWE)
    const champs = {};

    // Compteur du nombre total d’étudiants
    let total = 0;

    // Parcours de chaque ligne du fichier
    for (const line of lines) {
      // Ignorer les lignes vides (par sécurité)
      if (line.trim() !== '') {
        total += 1; // Incrémenter le compteur total

        // Découper la ligne CSV en colonnes
        const decoupLigne = line.split(',');

        // Récupérer le prénom (première colonne)
        const firstname = decoupLigne[0];

        // Récupérer le champ d’étude (dernière colonne)
        const champ = decoupLigne[decoupLigne.length - 1];

        // Si ce champ n’existe pas encore dans l’objet, on l’initialise avec un tableau vide
        if (!champs[champ]) {
          champs[champ] = [];
        }

        // Ajouter le prénom dans le tableau correspondant au champ
        champs[champ].push(firstname);
      }
    }

    // Afficher le nombre total d’étudiants
    console.log(`Number of students: ${total}`);

    // Afficher le nombre d’étudiants et la liste des prénoms pour chaque champ
    for (const [champ, students] of Object.entries(champs)) {
      console.log(
        `Number of students in ${champ}: ${students.length}. List: ${students.join(', ')}`,
      );
    }
  } catch (err) {
    // En cas d’erreur (fichier introuvable ou illisible), on lance une erreur
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
// Export de la fonction pour qu’elle puisse être utilisée ailleurs
