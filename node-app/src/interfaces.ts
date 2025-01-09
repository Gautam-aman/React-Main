interface User {
    firstname : string,
    lastname : string , 
    age : number
}

function greet (user:User ):void{
    console.log("Hi there " + user.firstname + " " + user.lastname);
}