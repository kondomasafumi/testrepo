console.log("worx外部参照")

let getTotalPrice = 　 => price * quantity;

const addTax = total => getTotalPrice * 1.1;

const total = getTotalPrice(1000, 2); // → 2000

console.log(　　);

const  = addTax(total);     // → 2200

console.log(`税込金額は${taxedTotal}円です`);

