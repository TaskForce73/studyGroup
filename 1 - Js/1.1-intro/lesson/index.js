//vars
//number, boolean, str, bigint, undefind, NaN, null, obj, array

// prompt() // field with input - string
// alert() //alert - true
// confirm() //boolean - true / false

// const number = +prompt('enter number')
// console.log(typeof number)

// const str = '' , "", ``

// console.log(++5)
// let five = 5
// console.log(five++)
// console.log(++five)

// let num1 = num1 + 5
// let num1 = 5
// num1 += 5

// =
// == //not strong - true if 5 == "5" - value
// === //strong - false if 5==="5" - type and value

// 1 and 2 // &&
// 1 or 2 // ||

//-----function-----
// Regular
// function fun1(qwe) {
//     return {
//         a: qwe
//     }
// }

// console.log(fun1("rfgoehrg"))
// Anonymous
// () => {

// }

// (() => {

// })()

// Arrow
// const xfun2 = () => {
//     return 5
// }

// console.log(xfun2())

//---if, else if, else---
// const userData = prompt('eorignoer')

// if (userData.length > 0) {
//     alert(userData)
// } else {
//     alert('WE need more letters!!')
// }

//---Switch case----
// switch (userData) {
//     case "da":
//         console.log('we get yes')
//         break;
//     case "net":
//         console.log('we get no')
//         break;
//     default:
//         console.log(`alse`)
// }

//---Loop---
// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// const obj = {
//     name: "Anton",
//     hobbie: "Sleep"
// }

// for (key in obj) {
//     console.log(key)
// }

// let i = 5;

// while (i > 10) {
//     console.log(i++)
// }

// let y = 7

// do {
//     console.log(y++)
// } while (y > 10);

//----OBJECTS----
// const obj = {
//     name: "Anton",
//     hobbie: "Sleep",
//     getHobbie: function () {

//         function gethobbie222() {
//             return this.hobbie
//         }

//         console.log(gethobbie222())
//         return this.hobbie
//     }
// }

// console.log(obj["name"])
// const { name, hobbie } = obj
// console.log(name, hobbie)

// console.log(obj.getHobbie())

// const stringify = JSON.stringify(obj)
// console.log(stringify)

// const aaa = {
//     "name": "Anton",
//     "hobbie": "Sleep"
// }

// const parseJson = JSON.parse(aaa)
// console.log(parseJson)

//-----OBJ OF STORE----
// const store = {
//     products: [
//         // {name:..., price...}
//     ],
//     addNewProduct: function (id, name, price) {
//         return this.products.push({ id, name, price })
//     },
//     deleteProduct: function (id) {
//         console.log(id)
//         // this.products
//         return this.products.filter((item) => item.id !== id)
//     }
// }

// store.addNewProduct(12, "apple", 789)
// store.addNewProduct(15, "banana", 789)
// console.log(store.products)

// console.log(store.products)
// console.log(store.deleteProduct(15))