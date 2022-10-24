let quantidadeCartas 
let txt
let imgSelect
let cartasViradas

let contador = 0;
let primeiraCarta = ''
let segundaCarta = ''


const cartasTotais = [
    "carta1.gif",
    "carta2.gif",
    "carta3.gif",
    "carta4.gif",
    "carta5.gif",
    "carta6.gif",
    "carta7.gif",
]
const cartasPrompt = [];

//  -------------------------------------inserir e verificar a quantidade de cartas
txt='Digite a quantidade de cartas: \n Números entre 4 e 14, sendo eles números pares'
quantidadeCartas = Number(prompt(txt));

while(quantidadeCartas < 4 || quantidadeCartas > 14 || quantidadeCartas % 2 !== 0){
    quantidadeCartas = Number(prompt(txt));
}

// -------------------------------------- adicionando duas cartas iguais na nova array,de acordo com o numero digitdo no prompt
for(let cont=0;cont < quantidadeCartas/2; cont++){
    cartasPrompt
    .push(cartasTotais[cont])
    cartasPrompt
    .push(cartasTotais[cont])
}

//-------------------------------------- emraralhar cartas do array cartasPrompt
cartasPrompt
.sort(embaralhar);
function embaralhar(){
    return Math.random() - 0.5;
}  
//--------------------------------------- inserindo o codigo no html 
function adicionarCartas() {
    for(let cont=0; cont < quantidadeCartas; cont++){
    var lista = document.querySelector(".container");

    lista.innerHTML += `
    <div  onclick="virarCarta(this)" class="card ">
        <div class="frente face">
            <img class="imagem" src="img/back.png" alt=""> 
        </div>  

        <div class="verso face">
        <img class="imagem  " src="img/${cartasPrompt
            [cont]}" alt="">
        </div>
    <div>
    
     ` 
    }    
}

adicionarCartas()

//--------------------------------------- adiciona clase virada ao clicar
function virarCarta(select) {

    if (primeiraCarta == ''){
    select.classList.add('virada');
    primeiraCarta = select
    select.removeAttribute('onclick');
    contador++;
    } else if (segundaCarta == ''){
        select.classList.add('virada');
        segundaCarta = select;
        select.removeAttribute('onclick');
        contador++;
        cartasViradas = document.querySelectorAll('.virada');  
    }
    if (primeiraCarta !== '' & segundaCarta !== ''){
        setTimeout(verificarMatch, 500)
    }

} 
   
//--------------------------------------- verifica se cartas são iguais. Se diferentes executa desvirar() se iguais executa confirmar match()
function verificarMatch(){
    if(primeiraCarta.innerHTML !== segundaCarta.innerHTML){
        setTimeout(desvirar, 500);
    }else{
        confirmarMatch()
    }

    finalizarJogo()
}
//--------------------------------------- Adicionar o class Matc. Esvaziar variaveis
function confirmarMatch(){
    
        primeiraCarta.classList.add('match');
        segundaCarta.classList.add('match');
        primeiraCarta = '';
        segundaCarta = '';
        
}
//--------------------------------------- remove clase virada, esvaziar variaveis
function desvirar(){
    const  cartasViradas = document.querySelectorAll('.virada');
    for( let i = 0; i < cartasViradas.length; i++){


            cartasViradas[i].classList.remove('virada');
            primeiraCarta = ''
            segundaCarta = ''
    }
    for( let i = 0; i < cartasViradas.length; i++)
    cartasViradas[i].setAttribute('onclick', 'virarCarta(this)'  );
}


//--------------------------------------- finaliza jogo
function finalizarJogo(){
    let cartasMatch = document.querySelectorAll('.match')
    if (quantidadeCartas == cartasMatch.length){

    alert(`Você ganhou com ${contador} jogadas`)
    }
}
          