function solution(slice, n) {
    let i = 1;
    while(1) {
        
        if((slice * i) >= n) return i;
        i++;
    }
}