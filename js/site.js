function getWord() {
    //access the webpage  and gets the value from the inputs
    let word = document.getElementById("word").value;

    //takes away capitilization, special characters and spaces from the word
    let modifiedWord = word.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

    //takes the word and flips it and sets it to a value
    let revWord = flipWord(modifiedWord);

    //setting up boolean and an empty string for error codes
    let errorState = false;
    let errorMsg = "";

    //this becomes true if the word and it's palindrome doesn't equal
    if (revWord != modifiedWord) {
        errorState = true;
        errorMsg += "This word is not a palindrome<hr/>"
        errorMsg += "Your word reversed is " + revWord
        
    }

    //this becomes true if they didn't put enough letters to have a palindrome
    if (modifiedWord.length < 2) {
        errorState = true;
        errorMsg += "You didn't add enough letters for this."
    }

    //if any of the previous becomes true, a SweetAlert will fire and exit the function
    if (errorState) {
        Swal.fire(
            'Something went wrong',
            `${errorMsg}`,
            'error'
        )
        return;
    }

    //take the word and it's plaindrome and pass it to a function that will display it
    displayResults(word, revWord);
}

//function that takes the value and make a string that is the word reversed
function flipWord(word) {

    //creates an empty string
    let revWord = "";

    //for every letter in the word, create a word with the letters in reverse
    for (let index = word.length - 1; index >= 0; index--) {
        let letter = word[index];

        revWord += letter;
    }

    return revWord;
}

//take the words and display the words to the webpage
function displayResults(word, revWord) {
    let output = document.getElementById("output");

    output.innerText = `Congrats! This is a palindrome!
    You entered the word ${word}. Reversed is ${revWord}.`
}