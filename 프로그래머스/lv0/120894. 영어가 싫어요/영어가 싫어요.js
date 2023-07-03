function solution(numbers) {
    let eng_num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let answer = '';
    eng_num.forEach((num, idx) => {
        numbers = numbers.replaceAll(num, idx);
    });
    return Number(numbers);
}