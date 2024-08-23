const fs = require('fs');

try {
  const input = fs.readFileSync('dev/stdin').toString().trim();
    
  console.log(input === input.split('').reverse().join('') ? 1 : 0);
} catch (err) {
  console.log(err.message);
}