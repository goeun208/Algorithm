const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line);
}).on('close', function(){
	for(let i = 1; i <= Number(input[0]); i++){
        console.log(input[i].charAt(0) + input[i].charAt(input[i].length -1 ) + "")
    }
    process.exit();
});