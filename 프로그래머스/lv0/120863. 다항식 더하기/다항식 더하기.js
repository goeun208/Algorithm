//일차항, 상수항 나누기
function solution(polynomial) {
    let const_count = 0; // 상수항 계수
    let str_count= 0; // 일차항 계수
    
    let poly_str= polynomial.split(' ');
    for(let str of poly_str) { // poly_str
        if(str === "+") continue;
        
        if(str.includes("x")) //일차항
        {
            console.log('x포함?', str)
            let s = str.slice(0, str.length - 1)
                s > 1 ? str_count += Number(s) : str_count++;
        }
        else { // 상수
            if(!isNaN(str)) const_count += Number(str);
        }
    }

    if(str_count > 0) // 일차항이 존재함
    {
        if(str_count === 1 && const_count <= 0) return "x"
        
        if(const_count > 0){
            // 상수항이 존재하는가
            if(str_count === 1) {
                return "x" + " + " + const_count;
            } else
                return str_count + "x" + " + " + const_count;
        } else
                return str_count + "x";
    }
    else if(const_count > 0) { // 상수항만 존재함
            return const_count + '';
    }
    else
            return "0";
}