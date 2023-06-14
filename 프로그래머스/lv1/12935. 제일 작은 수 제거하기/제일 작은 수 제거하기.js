function solution(arr) {
    let num =Math.min(...arr);
    let new_arr = arr.filter((element) => element !== num);
    return new_arr.length < 1 ? [-1] : new_arr;
    
}