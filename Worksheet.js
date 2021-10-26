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




function stringCompressor(string){
    let charNumber=0
    let array=[]
    let newString=""
    for(let i=0; i<string.length; i++){
        if(string[i]===string[i+1]){
            charNumber += 1
        }
        else{
            array.push(1 + charNumber + string[i])
            charNumber=0
        }      
    }
    for(let i=0; i<array.length; i++){
        newString += array[i]
    }
    return newString
}




function palindromeChecker(string){
    let stringInReverse = reverseString(string)
    if(string===stringInReverse){
        alert("This is a palindrome")
    }
    else{
        alert("This is not a palindrome")
    }
}
function displayPalindromeChecker(){
    let userInput=prompt("Enter word, phrase, or sequence to see if it is a palindrome")
    palindromeChecker(userInput)
}
