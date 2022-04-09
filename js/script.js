const userName = document.getElementById('user-name');
const nickName = document.getElementById('user-nickname');
const userAge = document.getElementById('user-age');
const userForm = document.querySelector('.user-form');
const greetings = document.querySelector('.greetings');
const questionary = document.querySelector('.questionary');

let answ1 = document.getElementById('answ1');
let answ1Label = document.getElementById('label-answ1');
let answ2 = document.getElementById('answ2');
let answ2Label = document.getElementById('label-answ2');
let answ3 = document.getElementById('answ3');
let answ3Label = document.getElementById('label-answ3');
let answ4 = document.getElementById('answ4');
let answ4Label = document.getElementById('label-answ4');

const sendBtn = document.getElementById('send-btn');
console.log(sendBtn);

sendBtn.addEventListener('click',
    function () {
        console.log(userName.value, nickName.value, userAge.value);
        document.querySelector('.title h2').innerHTML = `Bene ${nickName.value} ti va di iniziare a giocare? Concentrati e clicca il pulsante qui in basso ;)`;

        console.log(greetings);

        greetings.classList.remove('d-none');
    }
)

const clearBtn = document.getElementById('btn-clear');
clearBtn.addEventListener('click',
    function () {
        questionary.classList.add('d-none');
        greetings.classList.add('d-none');

        userName.value = '';
        nickName.value = '';
        userAge.value = '';
        console.log(userName, nickName, userAge);
    }
)

const startBtn = document.getElementById('start-btn');
console.log(startBtn);

let quest = document.getElementById('first-question');
let result = document.getElementById('result-title');

startBtn.addEventListener ('click',
    function () {
        userForm.classList.add('d-none');
        greetings.classList.add('d-none');
        document.querySelector('.main').classList.add('d-flex', 'justify-content-center', 'align-items-center');
        questionary.classList.remove('d-none');

        console.log(userName.value);
        
        quest.innerHTML = 'Vediamo se mi stai simpatico, scegli uno tra questi linguaggi di programmazione:'
        console.log(quest);

        answ1.value = 'Python';
        answ1Label.innerHTML = 'Python';
        console.log(answ1.value);

        answ2.value = 'Java';
        answ2Label.innerHTML = 'Java';
        console.log(answ2.value);

        answ3.value = 'JS';
        answ3Label.innerHTML = 'Javascript';
        console.log(answ3.value);

        answ4.value = 'PHP';
        answ4Label.innerHTML = 'PHP';
        console.log(answ4.value);
    }
)

