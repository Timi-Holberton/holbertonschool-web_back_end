// Créez une fonction nommée createInt8TypedArray qui renvoie un nouveau
// ArrayBuffer avec une valeur Int8 à une position spécifique.
// Elle doit accepter trois arguments : length (Nombre), position (Nombre)
// et value (Nombre).
// Si l'ajout de la valeur n'est pas possible, l'erreur Position outside range
// doit être générée.

export default function createInt8TypedArray(length, position, value) {
  let buffer = new ArrayBuffer(length);
  let int8 = new Int8Array(buffer);

  // Vérifie si la position est valide
  if (position >= 0 && position < length) {
    int8[position] = value; // Si valide, écrit la valeur
  } else {
    throw new Error("Position outside range"); // Sinon lance l'erreur
  }

  // Retourne le buffer avec la valeur ajoutée
  return buffer;
}
