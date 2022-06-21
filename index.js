var firstname = "Daniel";
console.log(firstname);
var handleForm = document.getElementById("form");
handleForm.addEventListener("submit", function (e) {
    var handleInput = document.getElementById("form-number");
    var userInput = handleInput.value;
    var waterAlert = document.getElementById("alert");
    var completedAmountOfWater = document.getElementById("completed");
    e.preventDefault();
    console.log("Form submitted");
    console.log(userInput);
    if (userInput <= 0) {
        console.log("Input cannot be less than or equal to 0");
        waterAlert.innerHTML = "\n      <div class=\"alert alert-danger\">Input cannot be less than 0</div>\n      ";
        setTimeout(function () {
            waterAlert.style.display = "none";
        }, 5000);
    }
    completedAmountOfWater.innerHTML = "".concat(userInput, " cups of water drank today");
    if (userInput >= 8) {
        completedAmountOfWater.innerHTML = "You have completed the task of drinking water today";
    }
});
