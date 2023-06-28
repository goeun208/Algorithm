function solution(numbers) {
    let new_arr = numbers.sort((a,b) => a-b);
    let max1 = new_arr[0] * new_arr[1];
    let max2 = new_arr[new_arr.length - 1] * new_arr[new_arr.length - 2]
    return max1 > max2 ? max1 : max2;
}