function solution(my_string) {
    let arr = [];
    my_string.split('').map((item) => !arr.includes(item) && arr.push(item))
    return arr.join('');
}