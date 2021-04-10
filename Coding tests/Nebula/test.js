const S = 'id,name,age,score\n1,Jack,ANULL,12\n17,Betty,28,11\n14,doe,null,84\n25,Jim,NULL,12'


    let rows = S.split(/\r?\n|\r/)
    const data = rows.slice(1)
    let output = ''
    let nullExpression = ~/^NULL$/

    function checker(row) {
      [...row].every(word => word !== 'NULL')
    }

    let validRows = rows.filter(checker)

    validRows.map((row,i) => {
    if (i < validRows.length -1){
      output += row + ','
    }
    else {
      output += row
    }
   })
    
console.log(output)


const S = 'id,name,age,score\n1,Jack,ANULL,12\n17,Betty,28,11\n14,doe,NULL,84\n25,Jim,NULL,12'


let rows = S.split(/\r?\n|\r/)
const data = rows.slice(1)
let output = ''
let nullExpression = ~/^NULL$/


function checker(row) {
  return !row.includes('NULL')
}

let validRows = rows.filter(checker)

validRows.map((row, i) => {
  if (i < validRows.length - 1) {
    output += row + ','
  }
  else {
    output += row
  }
})

console.log(output)