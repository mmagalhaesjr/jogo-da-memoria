let quantidadeCartas 
let txt

const cartargifs=[
    
]

txt='Digite a quantidade de cartas: \n Numeros entre 4 e 14, sendo eles numeros pares'




quantidadeCartas = Number(prompt(txt));

while(quantidadeCartas < 4 || quantidadeCartas > 14 || quantidadeCartas % 2 !== 0){
    quantidadeCartas = Number(prompt(txt));
}



function adicionarCartas() {

for(let cont = 0; quantidadeCartas > cont; cont++){

    var lista = document.querySelector(".container");

    lista.innerHTML += `
        <div class="card">
            <img src="img/back.png" alt="">
        </div>  
     `
    

    




        
     
     

}
    
}

adicionarCartas()





    


 
    
 
    
 
 