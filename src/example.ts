export type User = {
    name: string;
    age: number;
};
  
export function filterUsersByAge(users: User[], targetAge: number): User[] {
    return users.filter(user => user.age === targetAge);
}