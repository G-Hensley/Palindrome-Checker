const btn = document.getElementById("check-btn");
let textInput = document.getElementById("text-input");
const letters = /^[a-zA-Z0-9]$/;
let result = document.getElementById("result");


function checkIfText(word) {
    let newString = "";
    for (let letter of word) {
        if (letters.test(letter)) {
            newString += letter;
        }
    }
    if (newString.length > 0) {
        checkPalindrome(newString, word);
    } else {
        result.innerText = "Please input a value"
        alert("Please input a value");
    }
}

function checkPalindrome(newWord, originalWord) {
    let lowercaseWord = newWord.toLowerCase()
    let reversedWord = newWord.split("").reverse().join("").toLowerCase();
    if (lowercaseWord == reversedWord) {
        result.innerText = `${originalWord} is a palindrome`
    } else {
        result.innerText = `${originalWord} is not a palindrome`
    }
}

function getText() {
    btn.addEventListener("click", () => {
        checkIfText(textInput.value);
    })
}

getText();