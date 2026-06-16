let nombreProducto = "   teclado gamer   ";
let precio = 120000;
let cantidad = 2;
let descuento = 10000;
let disponible = true;

let categorias = ["Periféricos", "Gamer", "Accesorios"];
console.log("--- INFORMACIÓN DE CATEGORÍAS ---");
console.log("Primera categoría:", categorias[0]);
console.log("Cantidad total de categorías:", categorias.length);
console.log("---------------------------------\n");

function calcularSubtotal(precioUnitario, cantidadComprada) {
    return precioUnitario * cantidadComprada;
}

function calcularTotalFinal(subtotal, valorDescuento) {
    return subtotal - valorDescuento;
}

let subtotal = calcularSubtotal(precio, cantidad);
let total = calcularTotalFinal(subtotal, descuento);

let nombreLimpio = nombreProducto.trim();
let nombreMayusculas = nombreLimpio.toUpperCase();
let tienePalabraClave = nombreLimpio.toLowerCase().includes("gamer");

let producto = {
    nombre: nombreLimpio,
    precio: precio,
    cantidad: cantidad,
    disponible: disponible,
    categorias: categorias
};

console.log("=== RESUMEN DE LA COMPRA ===");
console.log(`Producto: ${nombreMayusculas}`);
console.log(`Precio unitario: ${producto.precio}`); 
console.log(`Cantidad: ${producto.cantidad}`);    
console.log(`Subtotal: ${subtotal}`);
console.log(`Descuento: ${descuento}`);
console.log(`Total a pagar: ${total}`);
console.log(`Producto disponible: ${producto.disponible}`);
console.log(`Contiene palabra clave gamer: ${tienePalabraClave}`);

console.log("\n--- ENVÍO ---");
if (total >= 200000 && disponible === true) {
    console.log("¡Aplica envío gratis!");
} else {
    console.log("El pedido no aplica para envío gratis.");
}
console.log("============================")

