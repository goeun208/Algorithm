const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
	for(let i = 1; i <= 9; i++){
        console.log(input[0] + ' * ' + i + ' = ' + input[0] * i); 
    }
    process.exit();
});