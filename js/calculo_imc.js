let btn_calcular = document.querySelector('input#btn-calc');
let tabela = document.querySelector('input#tbl-calc');
let btn_fechar = document.querySelector('input#btn-fechar');

btn_calcular.addEventListener('click', calcular);
btn_calcular.addEventListener('click', mostrarImc)
btn_calcular.addEventListener('click', colorirFundo);
tabela.addEventListener('click', mostrarTabela);
btn_fechar.addEventListener('click', fecharTabela);


function calcular(){
    let altura = document.querySelector('input#altura').value.replace(',', '.');
    let peso = document.querySelector('input#peso').value.replace(',', '.');
    let calculo = Number((peso / altura**2).toFixed(1));
    return calculo;
}
function mostrarImc(){
    let resultado = document.querySelector('#result');
    if(isNaN(calcular()) || isFinite(calcular())===false ||calcular()===0){
        tabela.disabled = true;
        tabela.style.cursor = 'not-allowed';
        alert('Insira os valores corretamente!');
        resultado.textContent = '';
    }else{
        resultado.textContent = ''
        resultado.textContent += calcular()+' kg/m²';
        verificaResult();
    }

}


function calcSituacaoAtual(){

    calcular();
    verifica_genero();

}

function colorirFundo(){
    let inputs = document.querySelectorAll('.situacao');
    let inputMagreza = document.querySelectorAll('.situacao.magreza');
    let inputNormal = document.querySelectorAll('.situacao.normal');
    let inputSobrepeso = document.querySelectorAll('.situacao.sobrepeso');
    let inputObesidade = document.querySelectorAll('.situacao.obesidade');

    for(i = 0; i < inputs.length;i++){
        inputs[i].style.backgroundColor = '#e6e6e6';
    }
     if(verifica_genero() === 'magreza'){
         for(i = 0; i < inputMagreza.length; i++)
         inputMagreza[i].style.backgroundColor = '#A32F1A';
     } 
     else if(verifica_genero() === 'normal'){
        for(i = 0; i < inputNormal.length; i++)
            inputNormal[i].style.backgroundColor = '#56F0AF';
     } 
     else if(verifica_genero() === 'sobrepeso'){
         for(i = 0;i < inputSobrepeso.length; i++){
            inputSobrepeso[i].style.backgroundColor = '#F0944A';
         }
     }
     else{
         for(i = 0;i < inputObesidade.length; i++){
             inputObesidade[i].style.backgroundColor = '#A3602A';
         }
     }

}
function verificaResult(){
    tabela.disabled = false;
    tabela.style.cursor = 'pointer'
}
let tabelaImc = document.querySelector('.situacao-imc');
let container = document.querySelector('.container');

function mostrarTabela(){
    tabelaImc.style.display = 'block';
    container.style.opacity = '0.5';
}
function fecharTabela(){
    tabelaImc.style.display = 'none';
    container.style.opacity = '1';
}
