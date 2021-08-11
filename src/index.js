const faker = require ('faker')
const users = new Array(50).fill('').map( _ => faker.helpers.userCard())
console.log(users)

const userList = document.querySelector('#user-list')
userList.innerHTML(users)
console.log(userList)