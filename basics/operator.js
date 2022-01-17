var sellingPrice = 699;
var listPrice = 999;

var discountPrice = ((listPrice - sellingPrice) / listPrice) * 100;

console.log('Discount percentage is :' + discountPrice);
displayDiscountPercentage = Math.round(discountPrice);

console.log(displayDiscountPercentage + '%off');

var result = listPrice > sellingPrice;
console.log(typeof result);
