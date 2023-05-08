const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let new_str = str.split('');
    for(let i = 0; i < new_str.length;  i++) console.log(new_str[i]);
});