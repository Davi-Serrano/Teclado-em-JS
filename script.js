var res = document.querySelector('#text')   
var Caps = document.querySelector("#Caps")



//Digitação
function inserir(digitado){ 
    var digitando = digitado
    res.innerHTML += digitando
    console.log(res.textContent)
    
}
//Espaço
function space(){
    var n =" ";
    res.innerHTML += n;
}
//Apagar
function back(){
    var res= document.getElementById("text").innerHTML;
    document.getElementById("text").innerHTML = res.substring(0, res.length -1);
}
//CapsLK
Caps.addEventListener('click', function(){
var res= document.getElementById("text")
res.style.textTransform = "uppercase"


});

//Muda a cor das teclas
function ChangeColor(n){

    var cor = document.querySelectorAll("button")
    
    for(i = 0; i < cor.length; i++){
        
        cor[i].style.color = n;
        
    } 
        
    
}


