//Get the string from the page
//controller function

function getValue(){
    document.getElementById("alert").classList.add("invisible"); //why add an invisible class only to remove it later?
 
    let userString = document.getElementById("userString").value;
 
    let revString = reverseString(userString);
 
    displayString(revString);
}
 
 
//Reverse the string 
//Logic function
function reverseString(userString){
    let revString = [];
 
     //let name=Bobby
     //name[0] = "B";
     //name[4] = "y";
     //last pos in an array = name.length-1
 
     //reverse a string using a for loop
    for (let index = userString.length - 1; index >= 0; index--) { 
         revString += userString[index]; //what does this mean? index on the left is added to the index on the right
    }
 
    return revString;
}
 
//Display message with the reversed string to the user
//View Function
function displayString(revString){
     
     //write to the page
     document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;
     //show the alert box
     document.getElementById("alert").classList.remove("invisible");
 
}