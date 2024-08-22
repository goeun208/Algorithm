const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line);
}).on('close', function(){
	let str = input[0];
    let idx = Number(input[1]);
    console.log(str.charAt(idx - 1));
    process.exit();
});
