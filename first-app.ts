let username: number;
username = 34;
// ***********************************

// union types
let user: string | number = 'neel1';
user = 22;

// ***********************************
// object type

let userObj: {
	name: string;
	age: number;
	id: string | number;
	isAdmin: boolean;
};

userObj = {
	name: 'neel',
	age: 33,
	id: 32131,
	isAdmin: true,
};

// **************************************
// array types

// let userArray: Array<string>
let userArray: string[]; //number[],boolean[]

userArray = ['neel', 'neel', 'neel'];

// userArray = [1,2,3]

// *****************************************
// FUNCTION types

function add(a: number, b: number) {
	let c = a + b;
	return c;
}

// ********************************

// Custom Types / Type Aliases

type AddFn = (a: number, b: number) => number;

// ********************************

// . Defining Function Types

function calculate(a: number, b: number, calc: AddFn) {
	calc(a, b);
}

calculate(2, 3, add);


// ********************************

// Custom Types / Type Aliases --- Object

type User = {
    name: string;
	age: number;
	id: string | number;
	isAdmin: boolean;
}

let userO: User

userO = {
	name: 'neel',
	age: 33,
	id: 32131,
	isAdmin: true,
};


// ********************************
// Defining Object Types with Interfaces

interface Credentials {
    password: string;
    email: string;
}

let cred: Credentials

cred = {
    password: "123",
    email:"klsak@email.com"
}
// Interface is limited to obj types
// Type can be used for obj as well as for functions

// Advantages ---->

class Auth implements Credentials{
    password: "123";
    email: "klsak@email.com";
    username: "Neel";
}

function login(credentials: Credentials) {
    
}

login(new Auth)

// class has to use the properties in the interface as it has to adhere to the interface if it is implementing the interface

// ********************************

// Merging Types

type AppAdmin = {
    names:string[]
}

type AppUser = {
    name:string
}

type AdminRight = AppAdmin & AppUser

// let useradmin: AdminRight

// useradmin = {
//     names:["Neel","Neel"],
//     name: 'Neel',
// }

// ********************************
// Merging Types with Interface

interface UserAdmin  {
	names: string[];
};

interface userApp {
	name: string;
};

interface AdminWork extends UserAdmin, userApp{ 
    password:string
}

let useradmin: AdminWork;

useradmin = {
	names: ['Neel', 'Neel'],
    name: 'Neel',
    password:"123"
};

// ********************************

//  Being Specific With Literal Types

let role: 'admin' | 'user' | 'editor'

role='admin'
role='user'
role = 'editor'
// role='abc' //wrong literal

// ********************************

// Adding Type Guards

type Role = 'god' | 'mary' | 'john'

let roleone: Role

function creator(action: string, roleone: Role) {
    if (roleone === 'john' && typeof action === 'string') {
        // ...
    }
}

// ********************************
// Generic Types --- Custom types

type DataStorage<T> = {
    storage : T[];
    add: (data: T) => void;
}

let textstorage: DataStorage<string> = {
    storage: ["Hi", "Bye"],
    add(data) {
        this.storage.push(data)
    },
}

let UserStorage: DataStorage<User> = {
    storage: [{age:3,id:"asjhdjask",isAdmin:true,name:"hjskahd"}],
    add(data:User) {
        data.id
    },
}

// **********
// functions -generics

function merge<T, U>(a:T,b:U) {
    return {
        ...a,
        ...b
    }
}

const useronee = merge({ name: "Neel" }, { age: 23 })

useronee.age