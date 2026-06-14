let output = document.getElementById("log");

const listText = ['RAn+Dom', 'R4nDoM', ' ranDoM', ' r4n!D0M', 'R4nd0M', 'r4Nd0m',
    'R4Nd0M', 'RaND0M', 'R4ND0m', 'raN:d0m', 'R4NDom',];

let idx = 0;
let timer = setInterval(typeWrite, 300);

function typeWrite() {
    if (idx >= listText.length) idx = 0;

    let word = listText[idx];
    output.innerHTML = word;
    idx++;
    if (idx >= listText.length) {
        return;
    }
}
function Invert() {
    var element = document.getElementById("textbox");
    element.classList.add("invert");
}
function Blur() {
    var element = document.getElementById("textbox");
    element.classList.remove("invert");
}
// Add event listener on keydown
document.addEventListener('keydown', (event) => {
    if (event.key === 'c') {
        Invert()
    }
}, false);
// Add event listener on keyup
document.addEventListener('keyup', (event) => {
    if (event.key === 'c') {
        Blur()
    }
}, false);