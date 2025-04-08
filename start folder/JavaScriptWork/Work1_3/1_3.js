// function getTotalPrice(price, quantity) {
//     return price * quantity;
// }
// const TotalPrice = getTotalPrice(1000, 2)
// console.log(`税抜金額は${TotalPrice}円です`);

// function addTax(TotalPrice, tax) {
//     return TotalPrice * tax;
// }
// const taxedTotal = addTax(TotalPrice, 1.1); 
// console.log(`税込金額は${taxedTotal}円です`);

const TAX =1.1

const getTotalPrice = (price, quantity ) =>  price * quantity;
const addTax = (total,) => total * TAX;
// なぜ引数として 1.1がないのか,()がなく混乱した。
const total = getTotalPrice(1000, 2); // → 2000
console.log(`税抜金額は${total}円です`);
const taxedTotal = addTax(total, 1.1);     // → 2200
console.log(`税込金額は${taxedTotal}円です`);