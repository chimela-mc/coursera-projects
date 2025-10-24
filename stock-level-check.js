//Using forEach to check stock levels of products
const products = [
  { product: 'Laptop', stock: 5 },
  { product: 'Monitor', stock: 0 },
  { product: 'Mouse', stock: 25 },
  { product: 'Keyboard', stock: 0},
  { product: 'Headphones', stock: 15 }
]

function checkStockLevels(products) {
  products.forEach(item => {
    console.log(item.stock > 0
      ? `In Stock: ${item.product}`
      : `Out of Stock: ${item.product}`);
  });
}

checkStockLevels(products)

//Using for loop to check stock levels of products
function checkStockLevelsWithLoop(products) {
  for (let i = 0; i < products.length; i++) {
    const item = products[i];
    console.log(item.stock > 0
      ? `In Stock: ${item.product}`
      : `Out of Stock: ${item.product}`);
  }
}

checkStockLevelsWithLoop(products)