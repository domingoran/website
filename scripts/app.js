// (function () {
//     [...document.querySelectorAll('.control')].forEach(button => {
//         button.addEventListener('click', function () {
//             document.querySelector('.active-btn').classList.remove('active-btn');
//             this.classList.add('active-btn');
//             document.querySelector('.active').classList.remove('active');
//             document.getElementById(button.dataset.id).classList.add('active');
//         })
//     });
//     document.querySelector('.theme-btn').addEventListener('click', () => {
//         document.body.classList.toggle('light-mode');
//     })
// })();


// let text = document.getElementById("complete");
// const strText = text.textContent;
// const splitText = strText.split('');
// text.textContent = '';
// for (let i = 0; i < splitText.length; i++) {
//     text.innerHTML += '<span>' + splitText[i] + '</span>';
// }

// let char = 0;
// let timer1 = setInterval(onTick, 50);
let output = document.getElementById("com");

// function onTick() {
//     for (let i = 10; i == 0; i--) {
//         const span = output.querySelectorAll('span');
//         span.style.opacity = float(i / 10);
//     }
// }


function complete() {
    clearInterval(timer);
    timer = null;
}


const listText = ['RanDom', 'R4n+Dom', 'R4nDoM', ' r4nDoM', ' r4n-D0M', 'r4nd0M', 'r4Nd0M',
    'R4N?d0M', 'R4ND0M', 'R4ND0m', 'RaN/D0m', 'RaNDom',];

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

