function solution(id_pw, db) {
    let answer = db.map(item => (item[0] === id_pw[0] && item[1] === id_pw[1]) ? "login" : (item[0] === id_pw[0] && item[1] !== id_pw[1]) ? "wrong pw" : "fail")
    if(answer.includes("login")) return "login"
    else if(answer.includes("wrong pw")) return "wrong pw"
    else return "fail";
}