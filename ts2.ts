function addFn(x: number, y: number) {
    return x + y
}

let result = addFn(4, 5);
console.log(result);

function createUser(user: { firstName: string; lastName?: string }) {
    if(!user.lastName) return;
    const trimLastName :string= user.lastName?.trim() || '';
    // return user.firstName.toUpperCase() + " " + user.lastName?.toUpperCase();
    return trimLastName;
}

let result2 = createUser({
    firstName:"Krishna",
    lastName:"Prasad"
})

console.log(result2)

interface User{
    firstName : string,
    lastName : string,
    email? : string,
    age : number,
}

function updateUser(user:User){
    return ` ${user.firstName} ${user.lastName} age is ${user.age}`.toUpperCase()
}

let uUser = updateUser({firstName:"Suraj",lastName:"Kumar",age:20})
console.log(uUser);

const payload : User = {
    firstName:'',
    lastName:'',
    age:18
}

console.log(payload);

let result3 = updateUser(payload)
console.log(result3);
