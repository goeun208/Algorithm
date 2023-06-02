function solution(s){
    var answer = true;
    let pArr = s.toLowerCase().split('p').length;
    let yArr = s.toLowerCase().split('y').length;

    return pArr === yArr ? true : false;
}