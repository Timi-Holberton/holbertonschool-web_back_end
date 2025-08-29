import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  // On lance les deux fonctions en parallèle
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  // On attend que toutes les promesses soient résolues
  return Promise.all([photoPromise, userPromise])
    .then(([photo, user]) => {
      // Une fois toutes résolues, on affiche photo, prénom et nom
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      // Si une promesse échoue, on affiche le message d'erreur
      console.log('Signup system offline');
    });
}
