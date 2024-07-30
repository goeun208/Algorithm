function solution(s) {
    let splitStr = s.toLowerCase().split(' ');
    // return splitStr
    let newStr = ''
    splitStr.map((item, i) => {
        isNaN(item.charAt(0)) 
        ? newStr += item.charAt(0).toUpperCase()
        : newStr += item.charAt(0)
            
        newStr += item.substr(1)
        
        i === splitStr.length - 1 ? newStr += '' : newStr += ' '
    })
    
    return newStr
}