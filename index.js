const add = (x,y) => x + y;
const subtract = (x,y) => x - y;
const multiply = (x,y) => x * y;
const divide = (x,y) => {
    if (y === 0)return 0;
    return Math.round(x / y);
}

function operator(num1, num2, operator){
    let result;
    if (operator == "+")result = add(num1, num2);
    else if (operator == "-")result = subtract(num1, num2);
    else if (operator == "x")result = multiply(num1, num2);
    else if (operator == "÷")result = divide(num1, num2);
    return result;
}

const h1 = document.querySelector("h1");
const buttons = document.querySelectorAll("button");
let results = parseInt(h1.textContent);
let numOfOps = false;
let lastPressed = null;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.className === "clear"){
            h1.textContent = "0";
            results = 0;
            numOfOps = false;
            lastPressed = "";
        }
        else if (button.className === "operator"){
            if (lastPressed === "oper")return;
            let operatorVal = button.textContent;
            results = operator(results, parseInt(h1.textContent), operatorVal);              
            if (numOfOps === true){
                h1.textContent = results;
            }
            else numOfOps = true;
            lastPressed = "oper";
        }
        else if (button.className === "sign")h1.textContent = -h1.textContent;
        else if (button.className === "calculate"){
            numOfOps = false;
            results += parseInt(h1.textContent);
            h1.textContent = results;
            lastPressed = "equal";
        }
        else {
            if (h1.textContent === "0")h1.textContent = button.textContent;
            else if (lastPressed === "oper")h1.textContent = button.textContent;
            else if (lastPressed === "equal")h1.textContent = button.textContent;
            else h1.textContent += button.textContent;
            lastPressed = "";
        }
    })
});
