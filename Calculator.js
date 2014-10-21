
// On-screen calculator script


// Math Functions
function addition(a, b) {
    return (a + b);
}

function multiplication(a, b) {
    return (a * b);
}

function division(a, b) {
    return (a / b);
}

function subtraction(a, b) {
    return (a - b);
}


// Global Variables
var input = ["", "", ""];
var buttons = document.querySelectorAll('#button_grid div');
var output_screen = document.querySelector('#output_screen p');


// Button On-click Behavior
for (var i = 0; i <= buttons.length; i++) {
    buttons[i].onclick = function() {
        switch (this.id) {
            case "add":
                input[0] = output_screen.innerHTML;
                input[1] = "+"
                output_screen.innerHTML = "";
                break;
            case "subtract":
                input[0] = output_screen.innerHTML;
                input[1] = "-"
                output_screen.innerHTML = "";
                break;
            case "multiply":
                input[0] = output_screen.innerHTML;
                input[1] = "*"
                output_screen.innerHTML = "";
                break;
            case "divide":
                input[0] = output_screen.innerHTML;
                input[1] = "/"
                output_screen.innerHTML = "";
                break;
            case "clear":
                input = ["", "", ""]
                output_screen.innerHTML = "";
                break;
            case "equal":
                if (input[0] != "" && input[1] != "") {
                    if (input[1] == "+") {
                        output_screen.innerHTML = addition(parseFloat(input[0]), parseFloat(output_screen.innerHTML));
                    } else if (input[1] == "-") {
                        output_screen.innerHTML = subtraction(parseFloat(input[0]), parseFloat(output_screen.innerHTML));
                    } else if (input[1] == "*") {
                        output_screen.innerHTML = multiplication(parseFloat(input[0]), parseFloat(output_screen.innerHTML));
                    } else if (input[1] == "/") {
                        output_screen.innerHTML = division(parseFloat(input[0]), parseFloat(output_screen.innerHTML));
                    } else {
                        console.log("No operator selected.");
                        break;
                    }
                }
                break;
            case "pos_neg":
                output_screen.innerHTML = (parseFloat(output_screen.innerHTML) - (2 * parseFloat(output_screen.innerHTML)))
                break;
            case "decimal":
                if (output_screen.innerHTML.indexOf('.') === -1) {
                    output_screen.innerHTML += this.innerHTML;
                } else {
                    console.log("Decimal already found.");
                }
                break;
            default:
                output_screen.innerHTML += this.innerHTML;
        }
    };
}