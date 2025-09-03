const fs = require('fs'); // Importation du module fs pour lire les fichiers

function countStudents(path) { // Fonction qui prend le chemin du fichier en paramètre
  return new Promise((resolve, reject) => { // Retourne une Promise pour l'asynchrone
    fs.readFile(path, 'utf8', (err, data) => { // Lecture asynchrone du fichier en UTF-8
      if (err) { // Si erreur lors de la lecture du fichier
        reject(new Error('Cannot load the database')); // Rejeter avec le message spécifique
        return; // Arrêter l'exécution
      }

      try { // Bloc try-catch pour gérer les erreurs de traitement
        const lines = data.trim().split('\n'); // Nettoyer et diviser en lignes
        const students = lines.slice(1).filter((line) => line.trim() !== ''); // Supprimer l'en-tête et lignes vides
        const fields = {}; // Objet pour regrouper par domaine d'étude

        students.forEach((line) => { // Parcourir chaque ligne d'étudiant
          const parts = line.split(','); // Diviser la ligne par les virgules
          if (parts.length >= 4) { // Vérifier qu'il y a au moins 4 colonnes
            const firstName = parts[0].trim(); // Extraire le prénom (1ère colonne)
            const field = parts[3].trim(); // Extraire le domaine (4ème colonne)

            if (!fields[field]) { // Si premier étudiant de ce domaine
              fields[field] = []; // Créer un tableau vide pour ce domaine
            }
            fields[field].push(firstName); // Ajouter le prénom à la liste du domaine
          }
        });

        console.log(`Number of students: ${students.length}`); // Afficher le nombre total d'étudiants

        for (const [field, list] of Object.entries(fields)) { // Parcourir chaque domaine
          console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`); // Afficher stats par domaine
        }

        resolve(); // Résoudre la Promise (succès)
      } catch (error) { // En cas d'erreur de traitement
        reject(new Error('Cannot load the database')); // Rejeter avec message d'erreur
      }
    });
  });
}

module.exports = countStudents; // Exporter la fonction pour utilisation externe
