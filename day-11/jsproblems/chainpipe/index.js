const products = [
 { name: "Pen", price: 1.256, qty: 3 },
 { name: "Book", price: 12.5, qty: 2 },
 { name: "Cup", price: 4.999, qty: 5 },
];



// ["Pen: $3.77", "Book: $25.00", "Cup: $25.00"]


const newpro=products.map((arr)=>{
    return  `${arr.name} : ${(arr.price * arr.qty).toFixed(2)}`;
})

console.log(newpro)
