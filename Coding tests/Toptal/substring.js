// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, P) {
    let matchs = []
    let names = []
    let name = ''
    const NO_CONTACT ='NO CONTACT'

    B.forEach((nber, i) => {
        if (nber.includes(P)) {
            matchs.push(i)
        }
    });

    matchs.forEach(match => {
       name = A[match]
       names.push(name)
    })
    
    console.log(name);
    let sortedNames = names.sort((a, b) => a.length - b.length)

    if (sortedNames.length > 0) {
        return sortedNames[0]
    }else {
        return NO_CONTACT
    }
}


let A = ['pim', 'pom']
let B = ['999999999', '777888999']
let P = '88999'

console.log(solution(A, B, P));