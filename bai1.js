// const car1 = ["AUDI","BMW","TATA","MERCEDES"];
// const car2 = [...car1];
// const car3 = [...car1,"NISSAN","TOYOTA"];
// console.log(car3);

// const car1 = {
//     Brand : "BMW",
//     Color : "Red",
// }
// const car2 = {...car1};
// console.log(car2)
// const cars1 = {
//     Brand : " Toyota",
//     Color : "RED"
// }
// const cars2 = {
//     Brand : " Nissan",
//     Color : "Blue",
//     Year : 2004,
// }
// const car3 = {...cars1,...cars2};
// console.log(car3)
const numbers = [3,5,7,8,9];
const [a,b,c,...others] = numbers;
console.log(a);
console.log(b);
console.log(c);
console.log(others);