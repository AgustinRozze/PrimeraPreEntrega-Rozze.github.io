nombrecompleto = prompt('Ingresa tu nombre');
alert('Te damos la bienvenida ' +nombrecompleto)
let insumo = prompt( 'que zapatilla le gustaria comprar:\n1-zapatillas air max \n2-zapatillas vapormax \n3-zapatillas nike jordan \n4-zapatillas nike vaporfly \n5-aprete F para salir');
while(insumo != 'f'){
if (insumo == '1'){
    alert('zapatillas nike air max $18000 ');
}
else if (insumo == '2'){
    alert('zapatillas nike vapor max $23000 ');
}
else if (insumo == '3'){
    alert('zapatillas nike jordan $30000 ');
}
else if (insumo == '4'){
    alert('zapatillas nike vaporfly $40000 ');
}
else{
    alert('codigo incorrecto')
}
insumo = prompt('¿le gustaria comprar otra zapatilla?:\n1-zapatillas air max \n2-zapatillas vapormax \n3-zapatillas nike jordan \n4-zapatillas nike vaporfly \n4-aprete F para salir')
}
let totaldelpedido = parseFloat(prompt('ingrese el monto total de su pedido'));
let enviosincargo = (totaldelpedido > 50000);
console.log('el usuario tiene envio sin cargo '+enviosincargo)