
const mySym = Symbol("key1")
const jsuser = {
    name: "KAUSHAL",
    "full name" : "kaushal sahu",
    [mySym]: "kaushalLord",
    age : 18,
    location : "mahoba",
    email : "kaushal@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["full name"])
// console.log(jsuser[mySym])


jsuser.email= "lordkaushal@gmail.com"
// console.log(jsuser.email)
// Object.freeze(jsuser)
jsuser.email= "lordkaushalking@gmail.com"
// console.log(jsuser.email)

jsuser.greeting = function(){
    console.log("hello kaushal")
}
jsuser.greetingTwo = function(){
    console.log(`hello kaushal, ${this.name}`)
}
console.log(jsuser.greeting())
console.log(jsuser.greetingTwo())