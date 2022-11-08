export function calculateTotal (items, tax) {
  // TODO
  let taxableItemsTotal = 0
  let nonTaxableItemsTotal = 0 
  for(let item of items){
    if(item['taxable'] === false){
      nonTaxableItemsTotal += item['price']
    } else {
      taxableItemsTotal += item['price'] + (item['price']*Math.abs(tax))
    }
  }
  return nonTaxableItemsTotal + taxableItemsTotal
}

