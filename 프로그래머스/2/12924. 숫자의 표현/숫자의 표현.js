function solution(n) {
    let result = 1;
    
    for(let i = 1; i <= n/2; i++){
        let total = 0;
        let j = i;
        while(total < n){
            total += j;
            j += 1;
        }
        if(total == n){
            result += 1;
        }
    }
    return result;
}