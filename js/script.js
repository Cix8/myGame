const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click',
    function () {
        const userName = document.getElementById('user-name').value;

        const nickName = document.getElementById('user-nickname').value;

        const userAge = document.getElementById('user-age').value;

        document.querySelector('.title h2').innerHTML = `Bene ${nickName} ti va di iniziare a giocare?`;

        const greetings = document.querySelector('.greetings');

        greetings.classList.remove('d-none')
    }
)