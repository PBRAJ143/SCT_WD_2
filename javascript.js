const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "=") {
      try {
        expression = eval(expression).toString();
      } catch {
        expression = "Error";
      }
      display.value = expression;
    } else if (value === "C") {
      expression = "";
      display.value = "";
    } else {
      expression += value;
      display.value = expression;
    }
  });
});

// Optional: Keyboard input handling
document.addEventListener("keydown", (event) => {
  const validKeys = "0123456789/*-+.";
  if (validKeys.includes(event.key)) {
    expression += event.key;
    display.value = expression;
  } else if (event.key === "Enter") {
    try {
      expression = eval(expression).toString();
    } catch {
      expression = "Error";
    }
    display.value = expression;
  } else if (event.key === "Backspace") {
    expression = expression.slice(0, -1);
    display.value = expression;
  } else if (event.key === "Escape") {
    expression = "";
    display.value = "";
  }
});
