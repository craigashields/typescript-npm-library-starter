import { User, filterUsersByAge } from './example'
import { describe, it, expect } from 'vitest'

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 31 },
    { name: 'Charlie', age: 25 },
    { name: 'Dave', age: 35 },
  ];
  

describe('Test User Age Filter', () => {
    it('Age = 25 - Should return 2 entries', () => {
        const filteredUsers = filterUsersByAge(users, 25);
        expect(filteredUsers.length).toBe(2)
    })

    it('Age = 31 - Should return just Bob', () => {
        const filteredUsers = filterUsersByAge(users, 31);
        expect(filteredUsers[0].name).toBe('Bob')
    })


})