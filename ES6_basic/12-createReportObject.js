export default function createReportObject(employeesList) {
  return {
    allEmployees: {     // clé allEmployees → contiendra tous les départements
      ...employeesList, // avec le spread on extrait directement les clés/valeurs de employeesList
    },                  // ... agit cmme un copier coller des propriétés internes de employeesList dans allEmployees
    // ES6 → pas besoin du mot-clé function
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length; // Object.keys(...) renvoie toutes les clés de l'objet employeesList.
// .length sur un tableau donne le nombre d’éléments dans ce tableau, ici il renvoie le nbre de département dans employeesList
    },
  };
}
