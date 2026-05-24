// Select display
const display = document.getElementById("display");

// Select all buttons
const buttons = document.querySelectorAll("button");

// Empty string to store input
let currentInput = "";

// Loop through all buttons
buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const value = button.innerText;

        // Clear display
        if (value === "C") {

            currentInput = "";
            display.value = "";

        }

        // Delete last character
        else if (value === "DEL") {

            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;

        }

        // Calculate result
        else if (value === "=") {

            try {

                currentInput = eval(currentInput).toString();
                display.value = currentInput;

            } catch {

                display.value = "Error";
                currentInput = "";

            }

        }

        // Add button value
        else {

            currentInput += value;
            display.value = currentInput;

        }

    });

});
// Keyboard Support
document.addEventListener("keydown", (event) => {

    const key = event.key;

    // Allow numbers and operators
    if (
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "." ||
        key === "%"
    ) {

        currentInput += key;
        display.value = currentInput;

    }

    // Enter key for result
    else if (key === "Enter") {

        try {

            currentInput = eval(currentInput).toString();
            display.value = currentInput;

        } catch {

            display.value = "Error";
            currentInput = "";

        }

    }

    // Backspace key
    else if (key === "Backspace") {

        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;

    }

    // Escape key to clear
    else if (key === "Escape") {

        currentInput = "";
        display.value = "";

    }

});