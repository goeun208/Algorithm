function solution(array, commands) {
    const answer = [];
    commands.forEach(command => {
        const spliceArr = array.slice(command[0] - 1, command[1])
        const sortArr = spliceArr.sort((a, b) => a - b)
        const pickNum = sortArr[command[2] - 1]
        answer.push(pickNum)
    })
    return answer;
}