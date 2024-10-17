function calculateTotalPrice(price, customerType, quantity) {
  //if (customerType == "unknown") return false


  function checkQuantity(rabatt) {
    if (quantity >= 3) rabatt *= 0.95

    return price * quantity * rabatt
  }
  /*Switch case för customer type*/
  switch (customerType) {
    
    case "any":
      return checkQuantity(1)

    case "member":
      return checkQuantity(0.9)

    case "vip":
      return checkQuantity(0.8)

    


    default:
      return false
  }

  
}

module.exports = calculateTotalPrice