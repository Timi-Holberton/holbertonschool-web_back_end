export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    // Si on est dans une classe fille (pas directement Building)
    // alors on vérifie la présence de evacuationWarningMessage
    if (new.target !== Building) {
      if (this.evacuationWarningMessage === undefined ||
          typeof this.evacuationWarningMessage !== "function") {
        throw new Error("Class extending Building must override evacuationWarningMessage");
      }
    }
  }

  get sqft() {
    return this._sqft;
  }
}
