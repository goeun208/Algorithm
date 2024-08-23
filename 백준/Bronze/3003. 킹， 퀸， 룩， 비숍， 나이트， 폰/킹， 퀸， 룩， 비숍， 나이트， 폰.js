const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
    let arr = [1, 1, 2, 2, 2, 8];
    let new_arr = [];
	for(let i = 0; i < input.length; i++){
       new_arr.push(arr[i] - input[i]);
    }
    console.log(new_arr.join(" "));
    process.exit();
});