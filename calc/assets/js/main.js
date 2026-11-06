const visual = document.getElementById("visual");
const buttons = document.querySelectorAll(".btn");
const numbers = document.querySelectorAll(".number");

let value1 = 0;
let operator = null;
let percentageBool = false;

String.prototype.removeLastCharacter = function () {
    let testVar = this.split('');
    testVar.splice(-1, 1);
    return testVar.join('');
}

visual.value = 0;

// NUMBERS FOR
for (const button of buttons) {
    button.addEventListener("click", () => {

        if (button.className == 'btn number') {
            if (visual.value.length < 10) {
                if (visual.value == '0') {
                    visual.value = button.textContent;
                } else {
                    visual.value += button.textContent;
                }
            }
        }

        if (button.className == 'btn operator') {
            value1 = Number(visual.value);
            operator = button.textContent;
            visual.value = '';
        }

        if (button.id == 'percentage') {
            visual.value = visual.value / 100;

            if (value1 !== '0') {
                percentageBool = true;
            }
        }

        if (button.id == 'result' || percentageBool == true) {
            if (operator == 'x') {
                visual.value = Number(visual.value) * value1;
            }

            if (operator == '+') {
                if (percentageBool == true) {
                    visual.value = visual.value * value1;
                }
                visual.value = Number(visual.value) + value1;
            }

            if (operator == '÷') {
                visual.value = value1 / Number(visual.value);
            }

            if (operator == '-') {
                if (percentageBool == true) {
                    visual.value = visual.value * value1;
                }
                visual.value =  value1 - visual.value;
            }

            percentageBool = false;
        }

        if (button.id == 'ac') {
            visual.value = 0;
            value1 = 0;
            operator = null;
        }

        if (button.id == 'moreLess') {
            visual.value = visual.value * -1;
        }

        if (button.id == 'rand') {
            visual.value = Math.trunc(Math.random() * (10 ** (Math.random() * 10)));
        }

        if (button.id == 'comma' && visual.value.indexOf('.') == -1) {
            visual.value += '.';
        }

    });
}

// OTHER BUTTONS

