const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line);
}).on('close', function(){
	let arr = input[1].split(" ").map(el => Number(el));
    console.log(Math.min(...arr) + " " + Math.max(...arr));
    process.exit();
});