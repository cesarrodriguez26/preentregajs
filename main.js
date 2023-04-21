const productos = [
{nombre: "zapatillas adidas", precio: 90},
{nombre: "zapatillas nike", precio: 100},
{nombre: "zapatillas puma", precio: 70},
{nombre: "zapatillas new balance", precio: 80},
{nombre: "zapatillas converse", precio: 60},
];
let carrito =[]

let seleccion = prompt("Bienvenido a nuestra tienda!!! Desea comprar alguna zapatilla. si o no?")

while(seleccion !="si" && seleccion !="no"){
    alert("por favor ingresa si o no")
    seleccion = prompt("hola desea comprar algo si o no")
}
if(seleccion == "si"){
    alert("A continuacion nuestra lista de zapatillas")
    let todoslosproductos = productos.map((producto)=> producto.nombre + " " + producto.precio + "$");
    alert(todoslosproductos.join(" - "))
}
else if (seleccion =="no"){
    alert("Gracias por visitar nuestra web! Hasta pronto")
}
while(seleccion != "no"){
    let producto = prompt("Agrega a tu Carrito, por ejemplo zapatillas nike")
    let precio = 0

    if(producto == "zapatillas adidas" || producto == "zapatillas nike" || producto == "zapatillas puma" || producto == "zapatillas new balance" || producto == "zapatillas converse"){
        switch(producto) {
            case "zapatillas adidas":
                precio =90;
                break;
                case "zapatillas nike":
                precio =100;
                break;
                case "zapatillas puma":
                precio =70;
                break;
                case "zapatillas new balance":
                precio =80;
                break;
                case "zapatillas converse":
                precio =60;
                break;
                default:
                    break;

        }
        let unidades = parseInt(prompt ("Agrega al Carrito! Ejemplo 1 2 3 4"))
        carrito.push({producto, unidades, precio})
        console.log(carrito)
    }else {
        alert("No tenemos estas zapatillas")
    }
    seleccion = prompt("Desea seguir comprando??")
    while(seleccion==="no"){
        alert("Gracias por su compra! Hasta pronto")
        carrito.forEach((carritofinal) => {
            console.log(`producto: ${carritofinal.producto}, unidades: ${carritofinal.unidades},
            total a pagar por producto ${carritofinal.unidades * carritofinal.precio}`)

        })
        break;
    }
}
const total = carrito.reduce((acc,el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar por su compra es: ${total}`)