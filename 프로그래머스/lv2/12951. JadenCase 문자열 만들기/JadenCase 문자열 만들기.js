function solution(s) {
    let splitStr = s.split(' ');
    // return splitStr
    let newStr = ''
    splitStr.map((item, i) => {
        isNaN(item.charAt(0)) 
        ? newStr += item.charAt(0).toUpperCase()
        : newStr += item.charAt(0)
            
        newStr += item.substr(1).toLowerCase()
        
        i === splitStr.length - 1 ? newStr += '' : newStr += ' '
    })
    
    return newStr
}