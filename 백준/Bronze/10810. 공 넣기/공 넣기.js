const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line);
}).on('close', function(){
    let [N, M] = input[0].split(" ").map(el => parseInt(el));
    let arr = new Array(N);
    for(let i = 1; i <= M; i++){
        let [start, end, num] = input[i].split(" ").map(el => parseInt(el)); 
        for(let j = start; j <= end; j++){
            arr[j-1] = num; // 값 채우기
        }
    }
    
    for(let k=0; k<arr.length; k++){
        typeof arr[k] === "undefined" ? arr[k] = 0 : arr[k]
    }
    console.log(arr.join(" "));
    process.exit();
});