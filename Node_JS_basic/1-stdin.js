console.log(`Welcome to Holberton School, what is your name?`);
process.stdin.on('data', data => {
  console.log(`Your name is: ${data.toString().trim()}`);
});
process.stdin.on('end', function() {
  process.stdout.write(`This important software is now closing\n`);
});




/*const readline = require('node:readline');

const lireligne = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

lireligne.question(`Welcome to Holberton School, what is your name?\n`, name => {
  console.log(`Your name is: ${name}`);
  console.log(`This important software is now closing`)
  lireligne.close();
});
*/
