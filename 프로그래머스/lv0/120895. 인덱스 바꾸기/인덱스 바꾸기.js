function solution(my_string, num1, num2) {
    let str = my_string.split('');
    let tmp = str[num1]
    str[num1] = str[num2];
    str[num2] = tmp;
    return str.join('');
}