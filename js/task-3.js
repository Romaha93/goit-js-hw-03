'use strict';

// function filterArray(numbers, value) {
    
//     let largerNumbers = [];

//     for (let number of numbers) {
        
//         if (number > value) {
            
//             largerNumbers.push(number);
        
//         }
       
//     }
//     return largerNumbers;
       
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]



// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for (let key of keys) {
//   values.push(apartment[key]);
// }

// console.log(values)
// console.log(keys)

// function countProps(object) {
//   let propCount = 0;
//   const allKeys = Object.keys(object);
//   propCount = allKeys.length;
//   return propCount;
  
// }

// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
// console.log(countProps({ name: "Mango", age: 2 }));



// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const total = Object.values(salaries);
//   for(sum of total) {
//     totalSalary += sum;
//   }
//   return totalSalary
// }
//  console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }))




// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (let color of colors ) {
//   hexColors.push(color.hex);
// }

// for (let color of colors) {
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//     for (let product of products) {
      
//     if (product.name === productName) {
        
//         return product.price
        
//       }
      
//     }
//     return null;
// }

// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Engine"));



// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   let totalArray = [];

//   for (let product of products) {
//     if (product[propName]) {
//       totalArray.push(product[propName])
//     }
    
//   }
//   return totalArray;
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("quantity"));



// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totalPrice = 0;
//     for (let potion of this.potions) {
//       totalPrice += potion.price;
//     }
//     return totalPrice;
//   },
// };

// console.log(atTheOldToad.getTotalPrice())




// function getExtremeScores(scores) {
//   const bestResalt = Math.max(...scores);
//   const worstResalt = Math.min(...scores);
//   const object = {
//     best: bestResalt,
//     worst: worstResalt,
//     };
//     return object;
// }

// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));

