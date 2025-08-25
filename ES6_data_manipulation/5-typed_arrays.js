// Crée et exporte par défaut la fonction createInt8TypedArray
// Cette fonction crée un ArrayBuffer de longueur spécifiée et place une valeur Int8 à une position donnée
export default function createInt8TypedArray(length, position, value) {

  // Crée un ArrayBuffer de 'length' octets
  let buffer = new ArrayBuffer(length);

  // Crée un Int8Array qui permet de manipuler le buffer comme un tableau d'entiers 8 bits
  let int8 = new Int8Array(buffer);

  // Vérifie si la position est valide (0 <= position < length)
  if (position >= 0 && position < length) {

    // Si la position est valide, écrit la valeur à cet indice
    int8[position] = value;

  } else {

    // Si la position est invalide, lance une erreur
    throw new Error("Position outside range");
  }

  // Retourne le buffer final contenant la valeur
  return buffer;
}

