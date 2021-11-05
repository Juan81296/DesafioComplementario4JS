let precio = prompt("ingrese el valor de su compra");
let dia = prompt("Ingrese el dia de la compra");


function descuento(dia,precio){

    if (dia=="Lunes"){
        descuentoPrecio = precio *0.15;

        return descuentoPrecio;
    }
    else if ( dia == "Miercoles"){

        descuentoPrecio = precio *0.20;

        return descuentoPrecio;
    }
    else if ( dia == "Viernes"){

        descuentoPrecio = precio *0.25;

        return descuentoPrecio;
    }


}

function costosAdministrativos(precio){
    costos = precio * 0.15;
    return costos;
}



let precioFinal = (precio - descuento(dia,precio)) + costosAdministrativos(precio);

console.log("Precio final: " + precioFinal);
