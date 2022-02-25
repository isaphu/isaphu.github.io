//implementing vending machine

//1 รับเหรียญ
const coins = prompt('Please insert your coins');
console.log('coins',coins);
const coinArray = coins.split(' ')
console.log('coinArray', coinArray)

//2 เช๊คเหรียญ และคำนวนเงิน
const coinValue = [1,2,5,10]

let amount = 0;
for(let i = 0; i < coinArray.length; i++) {
    amount += coinArray[i] * coinValue[i]
}

console.log('amount',amount)

//เลือกของ
const products = ['coke', 'water', 'm150','coffee', 'code zero','vodka'];
const prices = [13,10,10,50,13,100]
//1 รับ input เบอร์จาก user
const productInputIndex = prompt('Please select product (0-5)')

console.log('productInputIndex', productInputIndex)

//2 เลือกจำนวน
const quantity = Number(prompt('Please type quantity'))
console.log('quantity', quantity)

//3 คำนวนราคาสุทธิ
const selectedPrice = prices[productInputIndex]
console.log('selectedPrice', selectedPrice)

//เช็คราคา