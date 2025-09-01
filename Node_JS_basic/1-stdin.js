const readline = require('node:readline');

const lireligne = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

lireligne.question(`Welcome to Holberton School, what is your name?\n`, name => {
  console.log(`Your name is: ${name}`);
  lireligne.close(`This important software is now closing\n`);
});
