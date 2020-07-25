
var response = document.getElementById("text-response");
var result_buttom = document.getElementById("button-result");
result_buttom.addEventListener("click",calcular);

var higher_number;
var smaller_number;
var difference;

function calcular (){
    var get_first_number = document.getElementById("first-number");
    let first_number = parseInt(get_first_number.value);
    var get_second_number = document.getElementById("second-number");
    let second_number = parseInt(get_second_number.value);
    if (first_number === second_number){
        response.innerHTML= `Los dos números ingresados son iguales, por tanto su diferencia es cero 0`;
    }
    else if (first_number > second_number){
        difference = first_number - second_number;
        response.innerHTML = `${first_number} es el número mayor y la diferencia entre ambos es de ${difference}`;
    }
    else if (first_number < second_number){
        difference = second_number - first_number;
        response.innerHTML = `${second_number} es el número mayor y la diferencia entre ambos es de ${difference}`;
    }
}