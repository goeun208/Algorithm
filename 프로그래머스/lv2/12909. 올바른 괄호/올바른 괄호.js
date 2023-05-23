function solution(s){
    let answer = true;
    let splitStr = s.split('');
    let stack = [];

    splitStr.map((item, i) => (
        answer && (
            item === ')' 
            ?
            i === 0 ? answer = false : (
                stack.length > 0 ? stack.pop() : null
            )
            : stack.push(item)
        )  
    ))
    return (answer && stack.length === 0) ? true : false
}