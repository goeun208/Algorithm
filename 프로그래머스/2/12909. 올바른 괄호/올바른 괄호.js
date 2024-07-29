function solution(s){
    const str = s.split('');
    const stack = [];
    
    if(str[0] === ")") return false;
    else {
        str.map(item => {
            item === "(" ? stack.push(item) : stack.pop();
        })
        return stack.length > 0 ? false : true;
    }
}