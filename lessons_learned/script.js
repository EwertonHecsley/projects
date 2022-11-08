const body = document.querySelector('body');

function barraSuperior(parametro){
    const header = document.createElement('header');
    header.id = 'cabecalho';
    parametro.appendChild(header);
}
barraSuperior(body);

function titulo(texto){
    const h1 = document.createElement('h1');
    h1.setAttribute('id', 'titulo');
    const header = document.getElementById('cabecalho');
    header.appendChild(h1);
    h1.innerHTML = texto;
}

titulo('Exercitando DOM em JavaScript');

const minhaFoto = () =>{
    const img = document.createElement('img');
    img.src = "https://imagens.brasil.elpais.com/resizer/rePnjWn1rbZ_ZCPLPiWWojudThs=/414x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/HLU6FKBJCLJBVFO6AUYXKFFSEU.jpg"
    document.body.appendChild(img);
    img.id = 'minha-foto'
}
minhaFoto();