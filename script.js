document.addEventListener('DOMContentLoaded', ()=>{

const links= document.querySelectorAll('.menu a, .botao');
const secoes= document.querySelectorAll('.secao');

//Aqui são os elementos da seção voluntário

const btnCiente=document.getElementById('btn-ciente');
const btnOk=document.getElementById('btn-ok');
const mensagemAgradecimento=document.getElementById('mensagem-agradecimento');



//Aqui vai ficar a parte da navegção entre seções

links.forEach(link=>{
    link.addEventListener('click', function(e){
     e.preventDefault();
    
    
    const target=link.getAttribute('data-target');
    if(!target) return;

    //Esconde todas as seções, coisa que html não faz só
     secoes.forEach(secao=>secao.classList.remove('ativa'));


    //Mostra a seção alvo

    document.getElementById(target).classList.add('ativa');

    //Atualiz amenu ativo
    document.querySelectorAll('.menu a').forEach(l => l.classList.remove('active'));
    const menuLink = document.querySelector(`.menu a[data-target="${target}"]`);
       if(menuLink) menuLink.classList.add('active');
    });
});

if (btnCiente && mensagemAgradecimento){
    btnCiente.addEventListener('click', function(){
        mensagemAgradecimento.classList.add('mostrar');
        this.style.display='none';
    });
}

if (btnOk && mensagemAgradecimento) {
    btnOk.addEventListener('click', function () {
      mensagemAgradecimento.classList.remove('mostrar');

        if(btnCiente) btnCiente.style.display='inline-block';

        secoes.forEach(secao=>secao.classList.remove('ativa'));
        const contato=document.getElementById('contato');
        if(contato) contato.classList.add('ativa');

        document.querySelectorAll('.menu a').forEach(l=>l.classList.remove('active'));
        const menuLink= document.querySelector('.menu a[data-target="contato"]');
        if(menuLink) menuLink.classList.add('active');


    });
}
});