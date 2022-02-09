let botao = document.querySelector('.toggle-text');
let imagens = document.querySelector('.imagens');
let texto = document.querySelector('.instructions');

botao.addEventListener('click', ()=>{
    imagens.classList.toggle('active');
    texto.classList.toggle('active');
})