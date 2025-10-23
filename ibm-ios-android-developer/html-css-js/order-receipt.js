const order = [
  { item: "Laptop", quantity: 2, price: 800 },
  { item: "Monitor", quantity: 1, price: 150 },
  { item: "Mouse", quantity: 4, price: 25 },
]

function generateReceipt(order) {
  let orderReceipt = order.map(unitOrder => unitOrder.quantity * unitOrder.price)
  let orderReceiptTotal= orderReceipt.reduce((acc, curr) => acc+= curr, 0)
  
  order.forEach((unitOrder, index) => {
    console.log(`${unitOrder.item} - ${orderReceipt[index]}`);
  })
  
  console.log(`Grand Total: $${orderReceiptTotal}`);
}

generateReceipt(order)