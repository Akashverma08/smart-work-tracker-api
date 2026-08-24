const matrix = [
 [1, 2, 3],
 [4, 5, 6],
];

const newArr=matrix.map((m)=> m[0]);
const newArr1=matrix.map((m)=> m[1]);
const newArr2=matrix.map((m)=> m[2]);

const f=matrix[0].map((e,i)=> {
    return matrix.map((x)=>x[i])
})

console.log(newArr);
console.log(newArr1)
console.log(newArr2)
console.log(f)
