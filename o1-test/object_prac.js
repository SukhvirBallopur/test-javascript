// adding symbols in objects key
const mySymb = Symbol("key");
myObj = {
    mName: "Sukhvir",
    email: "sukhvir@gmail",
    "location": "Canada",
    [mySymb]: "symbol"
}

// console.log(myObj.mName);
// console.log(myObj["location"]);
// console.log(myObj[mySymb])//to get used symbol in object
// console.log(typeof myObj[mySymb])
// console.log(myObj);

//Object.freeze(myObj)// won't be able to change after it, in object

myObj.greets = function () //one of the way to declare the function
{
    console.log(`greetings ${this.mName}`);
}

// console.log(myObj.greets); // only returns the reference of a function not actually execute it
// console.log(myObj.greets());//return actual value 


/*assign object into another */
myObj2 = {
    1: "a",
    2: "b@gmail",
    "3": "c",
}

// const obj3=Object.assign({},myObj,myObj2)// one way of assign 
// console.log(obj3);

// const obj3 = { ...myObj, ...myObj2 }//another way (same for arrays)
// console.log(obj3);

console.log(Object.keys(myObj));//both keys() and value() returs an array
console.log(Object.values(myObj));
// console.log()


