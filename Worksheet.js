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



// 1. Input string

// 2. Take last index of string, and place it at index 0
// 3. Do this for the entire length of the string
// 4. Return the new string