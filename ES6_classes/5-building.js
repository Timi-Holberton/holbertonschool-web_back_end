export default class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new Error("Cannot instantiate abstract class Building directly");
    }
    this._sqft = sqft;

    // Vérification que la méthode est bien définie dans la classe enfant
    if (this.evacuationWarningMessage === undefined ||
        typeof this.evacuationWarningMessage !== "function") {
      throw new Error("Class extending Building must override evacuationWarningMessage");
    }
  }

  get sqft() {
    return this._sqft;
  }
}
