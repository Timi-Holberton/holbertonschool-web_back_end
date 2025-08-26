export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      // On résout la promesse avec un objet
      resolve({status: 200, body: 'Success'});
    } else {
      // On rejette la promesse avec une erreur
      reject(new Error('The fake API is not working currently'));
    }
  });
}
