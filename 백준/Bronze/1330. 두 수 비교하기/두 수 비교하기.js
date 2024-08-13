const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    arr = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
    arr[0] > arr[1] ? console.log(">") : arr[0] < arr[1] ? console.log("<") : console.log("==")
    process.exit();
});