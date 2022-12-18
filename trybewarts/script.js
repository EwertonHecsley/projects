const email = document.querySelector('#cxEmail');
const senha = document.querySelector('#cxSenha');
const botaoEntra = document.querySelector('#btEntrar');


botaoEntra.addEventListener('click', function () {

    if (localStorage.getItem('email') === 'tryber@teste.com' & localStorage.getItem('senha') === '123456') {
        alert('Bem-vindo Tryber');
    } else {

        //let ema = email;
        //let snh = senha;
        //localStorage.setItem('email', `${ema.value}`);
        //localStorage.setItem('senha', `${snh.value}`);
        alert('Usuário e Senha inválidos');
    }
})