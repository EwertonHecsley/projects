const btnSalva = document.querySelector('#btnSalvar');
const nomeUsuario = document.querySelector('#inpNome');
const senhaUsuario = document.querySelector('#inpSenha');


btnSalva.addEventListener('click',function(){
    localStorage.setItem('Nome',nomeUsuario.value);
    localStorage.setItem('Senha', senhaUsuario.value);
    alert('Usuário e senhas cadastrados com sucesso!');
})