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




function titleCase(string){
    let newString=""
    newString += string[0].toUpperCase()
    for(let i=1; i<string.length; i++){
        if(string[i-1]===" "){
            newString += string[i].toUpperCase()
        }
        else{
            newString += string[i]
        }
    }
    return newString
}




