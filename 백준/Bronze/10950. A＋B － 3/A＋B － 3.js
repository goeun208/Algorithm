const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line);
}).on('close', function(){
	let t = Number(input[0]);
    for(let i = 1; i <= t; i++){
        let a = Number(input[i].split(' ')[0]);
        let b = Number(input[i].split(' ')[1]);
        console.log(a + b);        
    }    
    process.exit();
});