function solution(n) {
    var answer = 0;
    const value = n.toString(2).split('0').join('');
    let s = n + 1;
    while(n > 0){
        let sv = s.toString(2).split('0').join('');
        if(sv === value) {
            break;
        } else{
            s++;
        };
    }
    return s;
}