const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
	if(input[0] >= 90 && input <=100) console.log("A")
    else if(input[0] >= 80 && input <= 89) console.log("B")
    else if(input[0] >= 70 && input <= 79) console.log("C")
    else if(input[0] >= 60 && input <= 69) console.log("D")
    else console.log("F")
    
    process.exit();
});