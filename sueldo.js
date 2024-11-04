let nombre = "Cristian"
let apellido = "Bosch"
let sueldoActual = 20000 ; 
let porcentajeAumento = 25; 


function calculoAumento (){
    let sueldoCalculo = (sueldoActual * porcentajeAumento)/
    100;
    return sueldoCalculo;
}

function sumaSueldo (){
    let rdoSuma= calculoAumento + 20000 ;
    return rdoSuma ;

}


let porcentajeSueldo = calculoAumento()
let nuevoSueldo = sumaSueldo()



console.log("Hola,estimado:"+" "+nombre+" "+apellido);
console.log("En base a tu sueldo actual:$",sueldoActual);
console.log("ha recibido un aumento de:",porcentajeSueldo);
console.log("y si su nuevo sueldo es de :" , nuevoSueldo)

