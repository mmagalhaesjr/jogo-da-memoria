let quantidadeCartas 
let txt



txt='Digite a quantidade de cartas: \n Numeros entre 4 e 14, sendo eles numeros pares'




quantidadeCartas = Number(prompt(txt));

while(quantidadeCartas < 4 || quantidadeCartas > 14 || quantidadeCartas % 2 !== 0){
    quantidadeCartas = Number(prompt(txt));
}
   


    


 
    
 
    
 
 