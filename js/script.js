const userName = document.getElementById('user-name');
const nickName = document.getElementById('user-nickname');
const userAge = document.getElementById('user-age');
const userForm = document.querySelector('.user-form');
const greetings = document.querySelector('.greetings');
const questionary = document.querySelector('.questionary');

let score;
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
        score = 0;
        scoreDisplay.innerHTML = `Punteggio: ${score}`;
        submitBtn.classList.remove('d-none');
        nextBtn.classList.remove('d-none');
        userForm.classList.add('d-none');
        greetings.classList.add('d-none');
        document.querySelector('.ms_container').classList.add('d-flex', 'justify-content-center', 'align-items-center');
        questionary.classList.remove('d-none');

        console.log(userName.value);

        solving = '8 giorni';
        
        quest.innerHTML = 'Una lumaca si trova in un pozzo di 10 metri. Ogni giorno sale di 3 metri, ma ogni notte ne scende di 2. In quanti giorni riuscirà ad uscire?'
        console.log(quest);

        answ1.value = '8 giorni';
        answ1Label.innerHTML = '8 giorni';
        console.log(answ1.value);

        answ2.value = '4 giorni';
        answ2Label.innerHTML = '4 giorni';
        console.log(answ2.value);

        answ3.value = '10 giorni';
        answ3Label.innerHTML = '10 giorni';
        console.log(answ3.value);

        answ4.value = '7 giorni';
        answ4Label.innerHTML = '7 giorni';
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

const nextBtn6 = document.getElementById('next-btn6');

const nextBtn7 = document.getElementById('next-btn7');

const nextBtn8 = document.getElementById('next-btn8');

const nextBtn9 = document.getElementById('next-btn9');

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

nextBtn4.addEventListener ('click',
    function () {
        submitBtn.classList.remove('d-none');
        nextBtn4.classList.add('d-none');
        nextBtn5.classList.remove('d-none');
        
        solving = '28 metri';

        quest.innerHTML = `Un plotone di soldati è composto da 3 colonne e 15 righe. Le righe sono distanti tra loro di 2 metri. Quanto è lungo il plotone?`;
        console.log(quest);

        answ1.value = '14 metri';
        answ1Label.innerHTML = '14 metri';
        console.log(answ1.value);

        answ2.value = '15 metri';
        answ2Label.innerHTML = '15 metri';
        console.log(answ2.value);

        answ3.value = '30 metri';
        answ3Label.innerHTML = '30 metri';
        console.log(answ3.value);

        answ4.value = '28 metri';
        answ4Label.innerHTML = '28 metri';
        console.log(answ4.value);
    }
)

nextBtn5.addEventListener ('click', 
    function () {
        submitBtn.classList.remove('d-none');
        nextBtn5.classList.add('d-none');
        nextBtn6.classList.remove('d-none');
        
        solving = 'Tutti';

        quest.innerHTML = `Quanti mesi hanno 28 giorni?`;
        console.log(quest);

        answ1.value = 'Nessuno';
        answ1Label.innerHTML = 'Nessuno';
        console.log(answ1.value);

        answ2.value = 'Uno';
        answ2Label.innerHTML = 'Uno';
        console.log(answ2.value);

        answ3.value = 'Tutti';
        answ3Label.innerHTML = 'Tutti';
        console.log(answ3.value);

        answ4.value = 'Due';
        answ4Label.innerHTML = 'Due';
        console.log(answ4.value);
    }
)

nextBtn6.addEventListener ('click', 
    function () {
        submitBtn.classList.remove('d-none');
        nextBtn6.classList.add('d-none');
        nextBtn7.classList.remove('d-none');
        
        solving = 'Sei tu';

        quest.innerHTML = `È figlio di tuo padre e di tua madre, ma non è tuo fratello e neanche tua sorella. Chi è?`;
        console.log(quest);

        answ1.value = 'E\' tua sorella';
        answ1Label.innerHTML = 'E\' tua sorella';
        console.log(answ1.value);

        answ2.value = 'Sei tu';
        answ2Label.innerHTML = 'Sei tu';
        console.log(answ2.value);

        answ3.value = 'E\' tuo padre';
        answ3Label.innerHTML = 'E\' tuo padre';
        console.log(answ3.value);

        answ4.value = 'E\' tua zia';
        answ4Label.innerHTML = 'E\' tua zia';
        console.log(answ4.value);
    }
)

nextBtn7.addEventListener ('click', 
    function () {
        submitBtn.classList.remove('d-none');
        nextBtn7.classList.add('d-none');
        nextBtn8.classList.remove('d-none');
        
        solving = 'Da nessuna parte';

        quest.innerHTML = `Se un gallo fa un uovo sulla punta di un tetto, dove cade?`;
        console.log(quest);

        answ1.value = 'Da nessuna parte';
        answ1Label.innerHTML = 'Da nessuna parte';
        console.log(answ1.value);

        answ2.value = 'Sul tetto';
        answ2Label.innerHTML = 'Sul tetto';
        console.log(answ2.value);

        answ3.value = 'Sulla testa del contadino';
        answ3Label.innerHTML = 'Sulla testa del contadino';
        console.log(answ3.value);

        answ4.value = 'Sul gallo stesso';
        answ4Label.innerHTML = 'Sul gallo stesso';
        console.log(answ4.value);
    }
)

nextBtn8.addEventListener ('click', 
    function () {
        submitBtn.classList.remove('d-none');
        nextBtn8.classList.add('d-none');
        nextBtn9.classList.remove('d-none');
        
        solving = '8';

        quest.innerHTML = `Su un autobus ci sono 7 passeggeri. Quante persone ci sono su quell’autobus??`;
        console.log(quest);

        answ1.value = '7';
        answ1Label.innerHTML = '7';
        console.log(answ1.value);

        answ2.value = '0';
        answ2Label.innerHTML = '0';
        console.log(answ2.value);

        answ3.value = '10';
        answ3Label.innerHTML = '10';
        console.log(answ3.value);

        answ4.value = '8';
        answ4Label.innerHTML = '8';
        console.log(answ4.value);
    }
)

submitBtn.addEventListener ('click',
    function () {
        if (answ1.checked == true && answ1.value === solving) {
            ++score;
            console.log(score);
        } else if (answ2.checked == true && answ2.value === solving) {
            ++score;
            console.log(score);
        } else if (answ3.checked == true && answ3.value === solving) {
            ++score;
            console.log(score);
        } else if (answ4.checked == true && answ4.value === solving) {
            ++score;
            console.log(score);
        } else {
            --score;
            console.log(score);
        }

        submitBtn.classList.add('d-none');

        scoreDisplay.innerHTML = `Punteggio: ${score}`;
    }
)

let finalResult = document.getElementById('final-result');
const restart = document.getElementById('restart');
console.log(restart);

nextBtn9.addEventListener ('click',
    function () {
        nextBtn9.classList.add('d-none');
        questionary.classList.add('d-none');
        document.querySelector('.final-score').classList.remove('d-none');

        finalResult.innerHTML = `Complimenti ${nickName.value}!!! Il tuo punteggio è di <span class='d-block'>${score}</span>`
    }
)

restart.addEventListener ('click',
    function () {
        document.querySelector('.ms_container').classList.remove('d-flex', 'justify-content-center', 'align-items-center');
        document.querySelector('.final-score').classList.add('d-none');
        userForm.classList.remove('d-none');
    }
)