function solution(n) {
    let divisors = [];
    let combi = 0;
    //1 ~ n까지 약수 구해서 
    for(let i = 1; i <= n; i++) {
        combi = 0;
         for(let j = 1; j <= i; j++) {
             if(i % j === 0) combi++;
         }
        if(combi >= 3) divisors.push(i)
    }
    return divisors.length;
}