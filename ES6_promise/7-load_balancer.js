// Fonction loadBalancer qui prend deux promesses en entrée
// chinaDownload : une promesse qui simule un téléchargement depuis la Chine
// USDownload : une promesse qui simule un téléchargement depuis l'US
export default function loadBalancer(chinaDownload, USDownload) {
  // Promise.race attend plusieurs promesses en entrée
  // et renvoie la valeur de celle qui se résout (ou se rejette) en premier
  // => Ici, on retourne le résultat du téléchargement le plus rapide
  return Promise.race([chinaDownload, USDownload]);
}
