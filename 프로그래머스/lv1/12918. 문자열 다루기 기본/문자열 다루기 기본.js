function solution(s) {
     if(s.length != 4 && s.length != 6) 
        return false;
    
    if(s.includes('e')) {
        return false;
    }
    
    var answer = isNaN(s) ? false : true;
    return answer;
}