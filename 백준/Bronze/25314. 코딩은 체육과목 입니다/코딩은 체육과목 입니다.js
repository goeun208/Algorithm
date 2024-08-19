const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = Number(line.split(' ')[0])
}).on('close', function(){
    let str = "long int";
    let l = "";
	for(let i = 1; i < input / 4; i++){
        l += "long ";
    }
    console.log(l.concat(str));

    process.exit();
});