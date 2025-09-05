// 7-http_express.js // Nom du fichier

const express = require('express'); // Import du framework Express
const fs = require('fs'); // Import du module File System pour lire le fichier CSV

const app = express(); // Création d'une instance d'application Express
const port = 1245; // Définition du port d'écoute du serveur

/**
 * Fonction pour compter les étudiants dans un fichier CSV
 * @param {string} path - Chemin vers le fichier de base de données
 * @returns {Promise<string>} - Promesse qui renvoie le rapport formaté
 */
function countStudents(path) { // Déclaration de la fonction countStudents
  return new Promise((resolve, reject) => { // La fonction retourne une promesse
    fs.readFile(path, 'utf8', (err, data) => { // Lecture asynchrone du fichier CSV en UTF-8
      if (err) { // Vérifie s'il y a une erreur à la lecture
        reject(new Error('Cannot load the database')); // Rejette la promesse avec un message d'erreur
        return; // Stoppe l'exécution
      }

      const lines = data.trim().split('\n').filter((line) => line.trim() !== ''); // Découpe le fichier par lignes et enlève les lignes vides
      const students = lines.slice(1); // Supprime la première ligne (entête du CSV)

      const fields = {}; // Objet qui contiendra les étudiants regroupés par filière
      students.forEach((student) => { // Parcourt chaque étudiant
        const details = student.split(','); // Découpe chaque ligne CSV en colonnes (séparateur = virgule)
        const field = details[3]; // La 4ème colonne correspond à la filière (CS ou SWE)
        if (field) { // Vérifie que la filière existe
          if (!fields[field]) { // Si la filière n'est pas encore présente dans l'objet
            fields[field] = []; // Initialise un tableau vide pour cette filière
          } // Ajoute le prénom de l'étudiant (1ère colonne) à la filière
          fields[field].push(details[0]);
        }
      });

      let result = `Number of students: ${students.length}\n`; // Ajoute le nombre total d'étudiants
      // Parcourt chaque filière et sa liste d'étudiants
      for (const [field, list] of Object.entries(fields)) {
        result += `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}\n`; // Ajoute le nombre d'étudiants par filière + la liste
      }
      // Résout la promesse avec le rapport formaté (sans espaces inutiles à la fin)
      resolve(result.trim());
    });
  });
}

// Route /
app.get('/', (req, res) => { // Déclare une route GET sur l'URL "/"
  res.send('Hello Holberton School!'); // Envoie une réponse en texte brut
});

// Route /students
app.get('/students', async (req, res) => { // Déclare une route GET sur l'URL "/students"
  // Récupère le chemin du fichier CSV passé en argument lors du lancement du script
  const database = process.argv[2];
  if (!database) { // Vérifie si aucun fichier n'est passé
    res.send('This is the list of our students\nCannot load the database'); // Envoie un message d'erreur
    return; // Stoppe l'exécution
  }

  try { // Exécute la fonction countStudents et attend son résultat
    const report = await countStudents(database);
    res.send(`This is the list of our students\n${report}`); // Envoie le rapport précédé du texte fixe
  } catch (error) { // En cas d'erreur (exemple : fichier introuvable)
    res.send('This is the list of our students\nCannot load the database'); // Envoie un message d'erreur
  }
});

app.listen(port, () => { // Lance le serveur sur le port défini
  console.log(`Server listening on port ${port}`); // Affiche un message de confirmation dans le terminal
});
// Exporte l'application Express pour pouvoir être importée ailleurs (tests, etc.)
module.exports = app;
