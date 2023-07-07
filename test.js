/**Capturando os valares dos do inputs e dos botoes */
var n1 = document.getElementById("num1");
var n2 = document.getElementById("num2");
var res = document.getElementById("resposta")
var calcular = document.getElementById(botao);


/**Função que calcula a porcentagem */
function Click(){

    if(num1.value ==="" || num2.value ===""){
        alert('É obrigatorio digitar os valores em todos os campos')
        return false
    }else if(num1.value === 0 || num2.value === 0){
        alert('Você digitou valores nulo')
        num1.value = "";
        num2.value = "";
        return false
    }else{
        var n1 = parseFloat(num1.value);
        var n2 = parseFloat(num2.value);
        var porcentagem = (n1 * n2) / 100;
        res.innerHTML = `${n1} % de ${n2} é igual a ${porcentagem}`
    }

}
/**função que limpas os valores digitados nos inputs */
function Limpar(){
    num1.value ="";
    num2.value ="";
    res.innerHTML="Calcule a porcentagem de um número"
 }

