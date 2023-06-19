function solution(num_list) {
    let multiNum = 1;
    let plusNum = 0;
    
    for(let i = 0; i < num_list.length; i++) {
        multiNum *= num_list[i];
        plusNum += num_list[i];
    }
    return multiNum < plusNum * plusNum ? 1 : 0;
}