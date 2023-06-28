function solution(my_string) {
    let answer = my_string.split('');
    let count = 0;
    answer.map((item) => {if(!isNaN(item)) count += Number(item)})
    return count;
}