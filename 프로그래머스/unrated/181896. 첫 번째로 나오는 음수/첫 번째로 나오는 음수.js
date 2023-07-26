function solution(num_list) {
    var answer = 0
    for(let i of num_list){
        if( i < 0 ) return num_list.indexOf(i)
    }
    return -1
}