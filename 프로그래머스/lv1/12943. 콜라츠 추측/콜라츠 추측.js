function solution(num) {
    var answer = num;
    let cnt = 1;
    if(num === 1) return 0;
    while(cnt <= 500) {
        if(num % 2 === 0) 
            num = num / 2;
        else 
            num = num * 3 + 1;
        if(num === 1) return cnt;
        cnt++;
    }
    
    return -1;
    
}