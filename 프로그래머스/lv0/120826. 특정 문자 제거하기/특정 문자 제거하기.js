function solution(my_string, letter) {
    const arr = my_string.split('').filter(item => item !== letter);
    const new_string = arr.join('');
    return new_string;
}