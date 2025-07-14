document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("button");
    const expressionInput = document.getElementById("expression");
    const resultInput = document.getElementById("result");

    let currentExpression = "";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;

            if (value === "AC") {
                currentExpression = "";
                resultInput.value = "0";
            } else if (value === "=") {
                try {
                    currentExpression = currentExpression.replace(/X/g, '*'); // Ubah 'X' menjadi '*'
                    resultInput.value = eval(currentExpression);
                } catch {
                    resultInput.value = "Error";
                }
            } else {
                currentExpression += value;
            }

            expressionInput.value = currentExpression;
        });
    });
});
