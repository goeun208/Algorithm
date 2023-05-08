const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0].split('');
    let new_str = [];
    for(let i = 0; i < str.length; i+=1) str[i].charCodeAt() >= 97 ? new_str[i] = str[i].toUpperCase() : new_str[i] = str[i].toLowerCase()
    console.log(new_str.join(''))
});