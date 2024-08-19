const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line);
}).on('close', function(){
    let total = Number(input[0]);
    let product_sum = Number(input[1]);
	let sum = 0;
    for(let i = 2; i < product_sum + 2; i++){
        let arr = input[i].split(' ').map(el => parseInt(el));
        sum += arr[0] * arr[1]; 
    }
    
    sum === total ? console.log("Yes") : console.log("No")
        
    process.exit();
});