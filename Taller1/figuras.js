// Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado)
{
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}
//console.log("El area del cuadrado es: "+areaCuadrado+" cm^2");
console.groupEnd;




// Código del triángulo

console.group("Triangulo");


function perimetroTriangulo(lado1, lado2, base)
{
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura)
{
    return (base * altura)/2;
}

console.groupEnd;

// Código del circo
console.group("Circulos");

function diametroCirculo(radio)
{
    return radio*2;
}


function perimetroCirculo(radio)
{
    const diametroCirculo = diametroCirculo(radio);
    return diametroCirculo* Math.PI;
} 

function areaCirculo (radio)

{
    return (radio**2)*Math.PI;
};

console.groupEnd;

// Aqui vamos a interactuar con el HTML
function calcularPerimetroCuadrado()
{
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado()
{
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}


/*
Pero la fórmula aún no es exactamente lo que necesitamos. No necesitamos encontrar ladoBase a partir de ladoA y ladoB, sino encontrar ladoA a partir de ladoBase y ladoB.

Para esto debemos “despejar” ladoA, es decir, “mover de lado” cualquier número o variable que esté modificando a ladoA en la fórmula.

Recuerda que lo que en un lado estaba sumando, pasa al otro restando; lo que estaba a un lado restando, pasa al otro sumando; lo que estaba a un lado multiplicando, pasa al otro dividiendo; lo que a un lado estaba dividiendo, pasa al otro multiplicando; lo que estaba a un lado elevando; pasa al otro radicando, y lo que estaba a un lado radicando, pasa al otro lado elevando.
*/

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}