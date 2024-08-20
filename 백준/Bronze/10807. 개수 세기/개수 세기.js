const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line);
}).on('close', function(){
    let arr = input[1].split(" ").map(el => parseInt(el));
    let same = arr.filter(item => item === Number(input[2]));
    console.log(same.length);
    
    process.exit();
});