let quantidadeCartas 
let txt
let imgSelect

quantidadeCartas = 14 //Number(prompt(txt));

while(quantidadeCartas < 4 || quantidadeCartas > 14 || quantidadeCartas % 2 !== 0){
    quantidadeCartas = 14 //Number(prompt(txt));
}

const cartasGifs=[
    "carta1.gif",
    "carta2.gif",
    "carta3.gif",
    "carta4.gif",
    "carta5.gif",
    "carta6.gif",
    "carta7.gif",
]
const cartasGifs2=[];

let cont = 0; 
while (cont < quantidadeCartas/2){
    cartasGifs2.push(cartasGifs[cont])
    cartasGifs2.push(cartasGifs[cont])

    cont++
}
console.log(quantidadeCartas)

txt='Digite a quantidade de cartas: \n Numeros entre 4 e 14, sendo eles numeros pares'

cartasGifs2.sort(embaralhar);
function embaralhar(){
    return Math.random() - 0.5;
}
console.log(cartasGifs2)  


 cont = 0
function adicionarCartas() {

   
while (cont < quantidadeCartas){

    var lista = document.querySelector(".container");

    lista.innerHTML += `
    <div onclick="selecionarCarta(this)" class="card">
    
        <img class="imagem escondido" src="img/back.png" alt=""> 
        <img class="imagem  " src="img/${cartasGifs2[cont]}" alt="">

    </div>  
    
     ` 
     cont++;
     
}
    
}

adicionarCartas()

















// function selecionarCarta(select){
//     imgSelect = document.querySelector(".card ");
//     select.classList.add("animaçao");

// }

// function troca(){
//     imgSelect.innerHTML = cartasGifs[0];
//     console.log(imgSelect)

// }
// troca()



    


 
    
 
    
 
 