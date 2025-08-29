import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // On utilise Promise.allSettled pour exécuter les 2 promesses en parallèle
  // - signUpUser() : crée un utilisateur avec prénom et nom
  // - uploadPhoto() : tente de téléverser une photo
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ])
    // Une fois que les 2 promesses sont terminées (réussies ou rejetées),
    // on traite les résultats dans un tableau.
    .then((resultat) => results.map((resultat) => {
      // Si la promesse est résolue correctement
      if (resultat.status === 'fulfilled') {
        return { status: 'fulfilled', value: resultat.value };
      }
      // Si la promesse est rejetée (erreur), on retourne la raison en string
      return { status: 'rejected', value: resultat.reason.toString() };
    }));
}
