export default function guardrail(mathFunction) {
  const queue = [];       // on prépare notre tableau résultat
  try {
    const result = mathFunction(); // on essaie d’exécuter la fonction passée
    queue.push(result);   // si ça marche → on met le résultat
  } catch (error) {
    queue.push(error.toString());  // si erreur → on met le message d’erreur
  } finally {
    queue.push('Guardrail was processed'); // toujours exécuté, succès/erreur
  }
  return queue;           // on retourne le tableau
}
