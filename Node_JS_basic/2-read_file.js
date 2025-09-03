const fs = require('fs'); // Import du module natif 'fs' pour lire les fichiers

function countStudents(path) { // Fonction qui prend le chemin du fichier en paramètre
  try { // Bloc try-catch pour gérer les erreurs de lecture/traitement
    const data = fs.readFileSync(path, 'utf-8'); // Lire le fichier de manière synchrone en UTF-8

    const lines = data.trim().split('\n'); // Supprimer espaces et découper en tableau de lignes

    lines.shift(); // Retirer la première ligne (en-tête : firstname,lastname,age,field)

    const champs = {}; // Objet pour stocker les étudiants par champ d'étude

    let total = 0; // Compteur du nombre total d'étudiants

    for (const line of lines) { // Parcours de chaque ligne du fichier
      if (line.trim() !== '') { // Ignorer les lignes vides
        total += 1; // Incrémenter le compteur total

        const decoupLigne = line.split(','); // Découper la ligne CSV en colonnes

        const firstname = decoupLigne[0]; // Récupérer le prénom (première colonne)

        const champ = decoupLigne[decoupLigne.length - 1]; // Récupérer le champ d'étude (dernière colonne)

        if (!champs[champ]) { // Si ce champ n'existe pas encore dans l'objet
          champs[champ] = []; // L'initialiser avec un tableau vide
        }

        champs[champ].push(firstname); // Ajouter le prénom dans le tableau du champ
      }
    }

    console.log(`Number of students: ${total}`); // Afficher le nombre total d'étudiants

    for (const [champ, students] of Object.entries(champs)) { // Parcourir chaque champ d'étude
      console.log(`Number of students in ${champ}: ${students.length}. List: ${students.join(', ')}`); // Afficher stats par champ
    }
  } catch (err) { // En cas d'erreur de lecture ou de traitement
    throw new Error('Cannot load the database'); // Lancer une erreur avec message spécifique
  }
}

module.exports = countStudents; // Export de la fonction pour utilisation externe
