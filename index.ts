const firstname: string = "Daniel";
console.log(firstname);

const handleForm = document.getElementById("form") as HTMLElement;

handleForm.addEventListener("submit", (e) => {
  const handleInput = document.getElementById(
    "form-number"
  ) as HTMLInputElement;
  const userInput: any = handleInput.value;
  const waterAlert = document.getElementById("alert") as HTMLElement;
  const completedAmountOfWater = document.getElementById(
    "completed"
  ) as HTMLElement;
  e.preventDefault();
  console.log("Form submitted");
  console.log(userInput);
  if (userInput <= 0) {
    console.log("Input cannot be less than or equal to 0");
    waterAlert.innerHTML = `
      <div class="alert alert-danger">Input cannot be less than 0</div>
      `;
    setTimeout(() => {
      waterAlert.style.display = "none";
    }, 5000);
  }
  completedAmountOfWater.innerHTML = `${userInput} cups of water drank today`;
  if (userInput >= 8) {
    completedAmountOfWater.innerHTML = `You have completed the task of drinking water today`;
  }
});
