
console.group("Cuadrados");
//const ladoCuadrado =5;
//console.log("Los lados del cuadrado miden:" +ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
} 



//console.log("El perimetro del cuadrado es:"+ perimetroCuadrado + "cm");

function areaCuadrado (lado){
    return lado * lado;
}  

//console.log("El area de cuadrado es:" + areaCuadrado + "cm2");

console.groupEnd();

console.group("Triangulos");
//Código del triangulo
/*const ladoTriangulo1 =6;
const ladoTriangulo2 =6;
const baseTriangulo =4;
const alturaTriangulo =5.5;
const perimitroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo *alturaTriangulo)/2 */


/*console.log("Los lados del triangulo miden " + ladoTriangulo1 + "cm, "+ ladoTriangulo2 + "cm, "+ baseTriangulo + "cm");
console.log("La altura del triangulo es:" + alturaTriangulo + "cm");
console.log("El perimitro del Triangulo es :" + perimitroTriangulo + "cm");
console.log("El área del Triangulo es :" + areaTriangulo + "cm");*/

function perimitroTriangulo( ladoTriangulo1, ladoTriangulo2, baseTriangulo){
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}

function areaTriangulo (baseTriangulo, alturaTriangulo){
    return (baseTriangulo * alturaTriangulo)/2;
}

console.groupEnd();

//Código del circulo
console.group("Círculos");

/*const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;

const perimetroCirculo = diametroCirculo * PI;
const areaCirculo =(radioCirculo * radioCirculo)* PI;

console.log("El radio del circulo es :" + radioCirculo + "cm");
console.log("El diametro del Círculo  es :" + diametroCirculo + "cm");
console.log("PI es :" + PI );
console.log("El perimetro del Círculo  es :" + perimetroCirculo + "cm");
console.log("El área del Círculo  es :" + areaCirculo + "cm");*/

const PI = Math.PI;
function diametroCirculo (radioCirculo){
    return radioCirculo * 2;
}

function perimetroCirculo (radioCirculo ){
    const diametro  = diametroCirculo(radioCirculo);
    return diametro * PI;
}

function areaCirculo (radioCirculo){
    return (radioCirculo * radioCirculo)* PI;
}

console.groupEnd();



function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert (perimetro);

}


function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert (area);

}

    var l1;
    var l2;
    var b;
    var ladoizquierdo;
    var ladoderecho;
    var base;
    var esIsoceles;

function validaTrianguloIsosceles (){

    l1 = document.getElementById("InputLadoIzquierdo");
    l2 = document.getElementById("InputLadoDerecho");
    b = document.getElementById("InputBase");

    ladoizquierdo = l1.value;
    ladoderecho = l2.value;
    base = b.value;
    esIsoceles = true;


    var n =0;
    if (ladoizquierdo == ladoderecho &&  ladoizquierdo == base){
        n =3;
    }else if (ladoizquierdo == ladoderecho|| ladoizquierdo == base || ladoderecho == base){
        n =2;
     }else {
        n =1;

     }
     console.log (n);

     
     if (n !=2){
        alert("No es un triangulo isósceles");
        esIsoceles = false;
     }

     return esIsoceles;
    

}



function calculaAlturaTriangulo() {

    if(validaTrianguloIsosceles() ===true){
        var resultado = Math.sqrt((ladoizquierdo * ladoizquierdo)- ((base * base)/4));
        alert("la altura del tríangulo isoceles es: " + resultado);

    }else{
        alert("No es un triangulo isósceles");
    }

}