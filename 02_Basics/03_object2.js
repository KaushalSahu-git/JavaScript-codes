const tinderUser = new Object()
const tinderUser2 = {}

tinderUser2.id = "123abc"
tinderUser2.name = "Sammy "
tinderUser2.isLoggedIn = false

// console.log(tinderUser)

const regularUser ={
    email: "someone@gmail.com",
    fullname : {
        userFullname:{ 
            firstname: "kaushal",
            lastname:"sahu"
        }
    }
}

// console.log(regularUser.email)
// console.log(regularUser.fullname.userFullname.firstname)
// console.log(regularUser.fullname)

const obj1 = {1:"a",2:"b",3:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"c",6:"d"}

// const obj3 = {obj1,obj2}
// const obj4 = Object.assign(obj1,obj2)  // not recommended
// const obj5 = Object.assign({},obj1,obj2)  // recommended
const obj6 ={...obj1,...obj2,...obj3}   //best recommendation ,latest simple
// console.log(obj5)
// console.log(obj4===obj1)
// console.log(obj6)

console.log(tinderUser2)
console.log(Object.keys(tinderUser2))
console.log(Object.values(tinderUser2))
console.log(Object.entries(tinderUser2))
console.log(tinderUser2.hasOwnProperty('isLoggedIn'))


