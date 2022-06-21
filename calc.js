//*******************  How to connect HTML INPUT to JS */

var numField1 = document.getElementById("numField1");
var numField2 = document.getElementById("numField2");
var resultField = document.getElementById("resultField");
var form = document.getElementById("xIsWhat%OfY");

form.addEventListener("submit", function(event) {
    
    if (!numField1.value || !numField2.value) {
        alert("Please enter the values in the fields");
    } else {
        var x = parseFloat(numField1.value); //* parseFloat - Turn "text" into the Float
        var y = parseFloat(numField2.value);

        var result = x / y;
        var percent = 100 * result;
        resultField.innerText = "Answer: " + percent + "%";
        event.preventDefault(); //* preventDefault - It doesn't refresh the page!!!
    }
});

