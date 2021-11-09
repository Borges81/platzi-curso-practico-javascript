

//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioConDescuento (precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;

}



const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];



function cuponSeleccionado ( ){

    const InputPrice = document.getElementById("InputPrice");
    const priceValue = InputPrice.value;

    const InputDiscount = document.getElementById("InputDiscount");
    const couponValue  = InputDiscount.value;
    console.log(couponValue );


    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };

    console.log(isCouponValueValid );
    const userCoupon = coupons.find(isCouponValueValid);
    console.log(userCoupon);
    //alert(userCoupon);

    if (!userCoupon) {
        alert("El cupón " + couponValue + " no es válido");
    }else {
        const descuento = userCoupon.discount;
        console.log("precio " + descuento);
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
        console.log("precioConDescuento " + precioConDescuento);
        const resultP1 = document.getElementById("ResultP1");
        //resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
        alert("El precio con descuento son: $" + precioConDescuento);
        //resultP1.innerText = "fdfdf";
        mih.innerText="El precio con descuento son: $" + precioConDescuento;
    }

}
