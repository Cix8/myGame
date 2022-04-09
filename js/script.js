const userName = document.getElementById('user-name');
const nickName = document.getElementById('user-nickname');
const userAge = document.getElementById('user-age');
const userForm = document.querySelector('.user-form');
const greetings = document.querySelector('.greetings');
const questionary = document.querySelector('.questionary');

let score = 0;
let scoreDisplay = document.getElementById('score-display');
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
let solving;

startBtn.addEventListener ('click',
    function () {
        userForm.classList.add('d-none');
        greetings.classList.add('d-none');
        document.querySelector('.main').classList.add('d-flex', 'justify-content-center', 'align-items-center');
        questionary.classList.remove('d-none');

        console.log(userName.value);

        solving = 'Python';
        
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

const submitBtn = document.getElementById('answ-submit-btn');
console.log(submitBtn);

const nextBtn = document.getElementById('next-btn');
console.log(nextBtn);

const nextBtn1 = document.getElementById('next-btn1');

const nextBtn2 = document.getElementById('next-btn2');

const nextBtn3 = document.getElementById('next-btn3');

const nextBtn4 = document.getElementById('next-btn4');

const nextBtn5 = document.getElementById('next-btn5');

nextBtn.addEventListener ('click',
    function () {
        submitBtn.classList.remove('d-none');
        nextBtn.classList.add('d-none');
        nextBtn1.classList.remove('d-none');

        solving = '1';
        
        quest.innerHTML = 'Mentre andavo nelle Ardenne vidi un uomo e sette donne, ogni donna ha sette sacche, ogni sacca sette gatte, ogni gatta sette figli; gattini gatte sacche donne, quanti andavano nelle Ardenne?'
        console.log(quest);

        answ1.value = '28';
        answ1Label.innerHTML = '28';
        console.log(answ1.value);

        answ2.value = '42';
        answ2Label.innerHTML = '42';
        console.log(answ2.value);

        answ3.value = '1';
        answ3Label.innerHTML = '1';
        console.log(answ3.value);

        answ4.value = '8';
        answ4Label.innerHTML = '8';
        console.log(answ4.value);
    }
)

nextBtn1.addEventListener ('click',
    function () {
        submitBtn.classList.remove('d-none');
        nextBtn1.classList.add('d-none');
        nextBtn2.classList.remove('d-none');

        solving = '221 anni';

        quest.innerHTML = `La somma dell’età di 5 uomini è 121. Tra 20 anni quale sarà la somma della loro età?`;
        console.log(quest);

        answ1.value = '141 anni';
        answ1Label.innerHTML = '141 anni';
        console.log(answ1.value);

        answ2.value = '221 anni';
        answ2Label.innerHTML = '221 anni';
        console.log(answ2.value);

        answ3.value = '161 anni';
        answ3Label.innerHTML = '161 anni';
        console.log(answ3.value);

        answ4.value = '241 anni';
        answ4Label.innerHTML = '241 anni';
        console.log(answ4.value);
    }
)

nextBtn2.addEventListener ('click',
    function () {
        submitBtn.classList.remove('d-none');
        nextBtn2.classList.add('d-none');
        nextBtn3.classList.remove('d-none');

        solving = '20';

        quest.innerHTML = `Un artigiano deve fare 100 targhe numeriche, dalla 1 alla 100. Quante volte dovrà scrivere il numero 9?`;
        console.log(quest);

        answ1.value = '20';
        answ1Label.innerHTML = '20';
        console.log(answ1.value);

        answ2.value = '9';
        answ2Label.innerHTML = '9';
        console.log(answ2.value);

        answ3.value = '11';
        answ3Label.innerHTML = '11';
        console.log(answ3.value);

        answ4.value = '19';
        answ4Label.innerHTML = '19';
        console.log(answ4.value);
    }
)

nextBtn3.addEventListener ('click',
    function () {
        submitBtn.classList.remove('d-none');
        nextBtn3.classList.add('d-none');
        nextBtn4.classList.remove('d-none');
        
        solving = '1';

        quest.innerHTML = `Qual è il numero che, diviso per la sua metà, dà il suo doppio?`;
        console.log(quest);

        answ1.value = '5';
        answ1Label.innerHTML = '5';
        console.log(answ1.value);

        answ2.value = '2';
        answ2Label.innerHTML = '2';
        console.log(answ2.value);

        answ3.value = '1';
        answ3Label.innerHTML = '1';
        console.log(answ3.value);

        answ4.value = '3';
        answ4Label.innerHTML = '3';
        console.log(answ4.value);
    }
)

submitBtn.addEventListener ('click',
    function () {
        if (answ1.checked == true && answ1.value === 'Python' && score < 1) {
            ++score;
            console.log(score);
        } else if (answ3.checked == true && answ3.value === '1' && score < 2) {
            ++score;
            console.log(score);
        } else if (answ2.checked == true && answ2.value === '221 anni' && score < 3) {
            ++score;
            console.log(score);
        } else if (answ1.checked && answ1.value ==='20' && score < 4) {
            ++score;
        } else if (answ3.checked && answ3.value === '1' && score < 5) {
            ++score;
        } else {
            --score;
        }

        submitBtn.classList.add('d-none');

        scoreDisplay.innerHTML = `Punteggio: ${score}`;
    }
)