let output = document.getElementById("log");

const listText = ['R4n+Dom', 'R4nDoM', ' r4nDoM', ' r4n!D0M', 'r4nd0M', 'r4Nd0M',
    'R4Nd0M', 'R4ND0M', 'R4ND0m', 'RaN/D0m', 'RaNDom',];

let idx = 0;
let timer = setInterval(typeWrite, 500);

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