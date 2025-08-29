// Fonction qui prend une promesse en entrée
// handler = fonction qui "gère" un événement ou le résultat d’une opération.
export default function handleResponseFromAPI(promise) {
  return promise
    // Handler exécuté si la promesse est résolue (succès)
    // On retourne un objet avec status 200 et body 'success'
    .then(() => ({ status: 200, body: 'success' }))

    // Handler exécuté si la promesse est rejetée (erreur)
    // On retourne un nouvel objet Error vide
    .catch(() => new Error())

    // Handler exécuté **dans tous les cas**, succès ou échec
    // Parfait pour effectuer des actions "side-effect" comme logger
    .finally(() => console.log('Got a response from the API'));
}
