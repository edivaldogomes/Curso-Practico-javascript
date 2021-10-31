 function calcularPrecioConDescuento(precio, descuento)
 {
    const porcentajePrecioConDescuento= 100-descuento;
    const precioConDescuento = (precio*porcentajePrecioConDescuento)/100;
    return precioConDescuento;
 }

function onClickButtonPriceDiscount()
{
    const inputPrice = document.getElementById("InputPrice").value;
    const inputDiscount = document.getElementById("InputDiscount").value;
    const precioConDescuento = calcularPrecioConDescuento(inputPrice, inputDiscount);
    console.log({inputPrice}, {inputDiscount});
    const resultP= document.getElementById("ResultPrice");
    resultP.innerText="El precio con descuento son: $"+ precioConDescuento;
}