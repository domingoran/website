let output = document.getElementById("log");
function complete() {
    clearInterval(timer);
    timer = null;
}


const listText = ['R4n+Dom', 'R4nDoM', ' r4nDoM', ' r4n!D0M', 'r4nd0M', 'r4Nd0M',
    'R4N"d0M"', 'R4ND0M', 'R4ND0m', 'RaN/D0m', 'RaNDom',];

let idx = 0;
let timer = setInterval(typeWrite, 800);

function typeWrite() {
    if (idx >= listText.length) idx = 0;

    let word = listText[idx];
    output.innerHTML = word;
    idx++;
    if (idx >= listText.length) {
        // complete();
        return;
    }
}

