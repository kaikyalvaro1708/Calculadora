// função das teclas numéricas
function insert(num){
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;

}

// função da tecla de "C" limpar tudo
function clean(){
    document.getElementById('resultado').innerHTML = "";
}

// função da tecla de apagar "<"
function back(){
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);

}

// função que exibe o resultado calculado
function calcular(){
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    } else{
        document.getElementById('resultado').innerHTML = "0";
    }

}
