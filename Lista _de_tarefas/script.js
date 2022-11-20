window.onload = function(){


let caixa = document.querySelector('#texto-tarefa');
let botao = document.querySelector('#criar-tarefa');
let lista = document.querySelector('#lista-tarefas');
let apagatd = document.querySelector('#apaga');

caixa.addEventListener('click', function(){
    caixa.value = null;
})

botao.addEventListener('click',function(){
    let li = document.createElement('li');
    li.innerHTML = caixa.value;
    lista.appendChild(li);
    caixa.value = null
})

lista.addEventListener('mouseover',function(event){
    let valor = event.target;
    valor.style.backgroundColor = 'rgb(128,128,128)'
})

lista.addEventListener('mouseout',function(event){
    let valor = event.target;
    valor.style.backgroundColor = 'white'
})

lista.addEventListener('dblclick',function(event){
    let risca = event.target;
    risca.style.textDecoration = 'line-through';
})

apagatd.addEventListener('click',function(){
    location.reload();
});

}
