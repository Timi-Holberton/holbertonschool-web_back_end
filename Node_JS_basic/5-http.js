const http = require('http'); // Import du module HTTP natif pour créer un serveur
const fs = require('fs'); // Import du module fs pour lire les fichiers

function countStudents(path) { // Fonction pour compter les étudiants dans un fichier CSV
  return new Promise((resolve, reject) => { // Retourne une Promise pour l'asynchrone
    fs.readFile(path, 'utf8', (err, data) => { // Lecture asynchrone du fichier en UTF-8
      if (err) { // Si erreur lors de la lecture du fichier
        reject(new Error('Cannot load the database')); // Rejeter avec message d'erreur
        return; // Arrêter l'exécution
      }

      const lines = data.trim().split('\n'); // Nettoyer et diviser en lignes
      const students = lines.slice(1).filter((line) => line.trim() !== ''); // Supprimer en-tête et lignes vides
      const fields = {}; // Objet pour regrouper par domaine d'étude

      students.forEach((line) => { // Parcourir chaque ligne d'étudiant
        const parts = line.split(','); // Diviser la ligne par les virgules
        const field = parts[parts.length - 1]; // Récupérer le domaine (dernière colonne)
        if (!fields[field]) { // Si premier étudiant de ce domaine
          fields[field] = []; // Créer un tableau vide
        }
        fields[field].push(parts[0]); // Ajouter le prénom (première colonne)
      });

      let result = `Number of students: ${students.length}\n`; // Début du résultat avec total
      for (const [field, list] of Object.entries(fields)) { // Parcourir chaque domaine
        result += `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}\n`; // Ajouter stats par domaine
      }
      resolve(result.trim()); // Résoudre avec le résultat final (sans espace final)
    });
  });
}
// Créer le serveur HTTP avec callback pour chaque requête
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' }); // Définir le statut 200 et type de contenu texte

  if (req.url === '/') { // Si route racine demandée
    res.end('Hello Holberton School!'); // Envoyer message d'accueil
  } else if (req.url === '/students') { // Si route /students demandée
    const database = process.argv[2]; // Récupérer le nom du fichier depuis les arguments CLI
    if (!database) { // Si aucun fichier fourni
      res.end('This is the list of our students\nCannot load the database'); // Envoyer message d'erreur
      return; // Arrêter l'exécution
    }

    countStudents(database) // Appeler la fonction de comptage
      .then((report) => { // En cas de succès
        res.end(`This is the list of our students\n${report}`); // Envoyer le rapport des étudiants
      })
      .catch((err) => { // En cas d'erreur
        res.end(`This is the list of our students\n${err.message}`); // Envoyer message d'erreur
      });
  } else { // Pour toute autre route
    res.end('Hello Holberton School!'); // Envoyer message d'accueil par défaut
  }
});

app.listen(1245); // Démarrer le serveur sur le port 1245

module.exports = app; // Exporter l'application pour utilisation externe
