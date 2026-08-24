

console.log(digitSums([123,45,6]));
function digitSums(nums){
    
    return nums.map((s)=>String(s).split('').reduce((acc,c)=>{ return acc + Number(c)},0))

}


const n=[123,45,6];

/*const newArr=n.map((s)=>{
    return String(s).split('').reduce((acc,cur)=>{
    return acc + Number(cur)
},0)
} )

console.log(newArr);*/