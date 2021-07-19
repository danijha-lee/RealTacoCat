function getValue() {

    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    
    let revString = reverseString(userString);
    
    displayString(revString);
}

function reverseString(userString) {
    let revString = [];

    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
        
    }
    
    return revString;
}

funciton displayString(revString){
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;
    
    document.getElementById("alert").classList.remove("invisible");

}