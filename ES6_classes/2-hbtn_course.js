export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== "string") {
      throw new TypeError("Name must be a string");
    }
    this._name = name;

    if (typeof length !== "number") {
      throw new TypeError("Length must be a number");
    }
    this._length = length;

    if (!Array.isArray(students)) {
      throw new TypeError("Students must be an array");
    }
    this._students = students;
  }

  // Getter et setter pour name
  get name() {
    return this._name;
  }
  set name(newName) {
    if (typeof newName !== "string") {
      throw new TypeError("Name must be a string");
    }
    this._name = newName;
  }

  // Getter et setter pour length
  get length() {
    return this._length;
  }
  set length(newLength) {
    if (typeof newLength !== "number") {
      throw new TypeError("Length must be a number");
    }
    this._length = newLength;
  }

  // Getter et setter pour students
  get students() {
    return this._students;
  }
  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw new TypeError("Students must be an array");
    }
    this._students = newStudents;
  }
}
