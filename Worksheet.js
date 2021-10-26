"use strict"

for(let i=0; i<=100; i++){
    if(i%3===0 && i%5===0){
        console.log("fizzbuzz")
    }
    else if(i%5===0){
        console.log("buzz")
    }
    else if(i%3===0){
        console.log("fizz")
    }
    else{
        console.log(i)
    }
}




function reverseString(string){
    let newString=""
    for(let i=string.length-1; i>=0; i--){
        newString += string[i]
    }
    return newString
}




// 1. write function that capitalizes index 0 in a string
// 2. Capitalize every character in a string that follows a space
//    if index number is a space, capitalize index number +1
// 3. return new string