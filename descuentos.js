

//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioConDescuento (precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;

}


function calcularPrecio() {
    const InputPrice = document.getElementById("InputPrice");
    const priceValue = InputPrice.value;

    const InputDiscount = document.getElementById("InputDiscount");
    const discountValue = InputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("resultP");
    resultP.innerText ="El precio con descuent es $" + precioConDescuento;
    


}




/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
});*/

//console.log("El precio con descuento es:" + precioConDescuento);