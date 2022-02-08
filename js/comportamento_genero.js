let genero = document.querySelector('#genero');
let masc = document.querySelector('#img1');
let fem = document.querySelector('#img2');

function destacar(){
    if(genero.value === 'masculino'){
        masc.classList.toggle('selected');
        fem.classList.toggle('selected')
    }
    else{
        fem.classList.toggle('selected');
        masc.classList.toggle('selected');

    }
}

let valores_masc = [18.5, 18.51, 24.9, 25, 29.9, 30];
let valores_fem = [16.5, 15.6,20.9, 21, 25, 30];

function verifica_genero(){
    let inputValores = [
        document.querySelector('.valor_imc1'),
        document.querySelector('.valor_imc2'),
        document.querySelector('.valor_imc3'),
        document.querySelector('.valor_imc4'),
        document.querySelector('.valor_imc5'),
        document.querySelector('.valor_imc6')

    ]
    
    if(genero.value === 'masculino'){
        inputValores[0].textContent = valores_masc[0];
        inputValores[1].textContent = valores_masc[1];
        inputValores[2].textContent = valores_masc[2];
        inputValores[3].textContent = valores_masc[3];
        inputValores[4].textContent = valores_masc[4];
        inputValores[5].textContent = valores_masc[5];

        if(calcular() < valores_masc[0]){
            return 'magreza';
        } else if(calcular() <= valores_masc[2]){
            return 'normal';
        } else if(calcular() <= valores_masc[4]){
            return 'sobrepeso';
        } else{
            return 'obesidade';
        }

    } else{
        inputValores[0].textContent = valores_fem[0];
        inputValores[1].textContent = valores_fem[1];
        inputValores[2].textContent = valores_fem[2];
        inputValores[3].textContent = valores_fem[3];
        inputValores[4].textContent = valores_fem[4];
        inputValores[5].textContent = valores_fem[5];

        if(calcular() < valores_fem[0]){
            return 'magreza';
        } else if(calcular() <= valores_fem[2]){
            return 'normal';
        } else if(calcular() <= valores_fem[4]){
            return 'sobrepeso';
        } else{
            return 'obesidade';
        }
    }
}