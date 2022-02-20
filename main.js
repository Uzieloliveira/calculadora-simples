
var msg = 'nada para calcular!'; 

// função para inserir valores 
function insert(num){
    var result = document.querySelector('#result').innerHTML;

    if(result == msg){
        document.querySelector('#result').innerHTML= "";
     }
    var result = document.querySelector('#result').innerHTML;
    document.querySelector('#result').innerHTML = result + num;
    
}
// função pra lipar o visor
function clean(){
    var result = document.querySelector('#result').innerHTML;
    document.querySelector('#result').innerHTML ="";
}

// função que apaga um dígito por vez
function back(){
    var result = document.querySelector('#result').innerHTML;
    document.querySelector('#result').innerHTML = result.substring(0, result.length - 1);
}

function calculo(){
    var result = document.querySelector('#result').innerHTML;

    if(result){
        document.querySelector('#result').innerHTML = eval(result); //método que realiza o calculo 
    }else{
        // Se o campo do resultado estiver vazio, aparece uma msg!
        document.querySelector('#result').innerHTML = msg;
    }
}
