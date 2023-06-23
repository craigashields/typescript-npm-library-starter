const filterUsersByAge = require('typescript-npm-library-starter')

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'Dave', age: 35 },
  ];
  
  const filteredUsers = filterUsersByAge(users, 25);
  console.log(filteredUsers);
