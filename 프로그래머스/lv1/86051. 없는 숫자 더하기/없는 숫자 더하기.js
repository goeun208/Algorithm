function solution(numbers) {
    numbers.sort()
    let sum = 0;
    let new_numbers = [0,1,2,3,4,5,6,7,8,9];
    for(let i = 0; i < new_numbers.length; i++) {
        if(numbers.indexOf(new_numbers[i]) === -1)
            sum += new_numbers[i]
    }
    return sum;
}