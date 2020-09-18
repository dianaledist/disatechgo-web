/* const nombre =document.querySelector("div.indexlogin input[name='inputname']"); */



function login() {
    const nombre =document.querySelector('#inputname').value;
    const edad =document.querySelector('#inputedad').value;


    if (!nombre) {
        alert("debe ingresar un nombre!")
    } else if (edad<0 || edad>99) {
        alert("Ingrese edad correcta")
    } else {
        localStorage.setItem(nombre,edad);
    }

    console.log("Hola");
    console.log(nombre);
    console.log(edad);

/*     var bienvenida = document.createElement("h2");                 // Create a <p> element
    bienvenida.innerHTML = `Hola ${nombre}, tienes ${edad}`;                // Insert text
    document.querySelector('.bienvenida').appendChild(bienvenida);   */

    const bienvenida2=document.querySelector("h2");
    bienvenida2.textContent= `Hola ${nombre}, tienes ${edad}`;  
    

}


/* const nombre =prompt ("Ingrese su nombre");
const edad =prompt ("Ingrese su edad");

if (!nombre) {
    alert("debe ingresar un nombre!")
} else if (edad<0 || edad>99) {
    alert("Ingrese edad correcta")
} else {
    alert(`Hola ${nombre}, tienes ${edad} años!`)
    localStorage.setItem(nombre,edad);
}

var nombre1 = localStorage.getItem(nombre);
localStorage.removeItem('');

console.log(nombre1); */





function Servicios(tipo,precio)
{
    this.tipo=tipo;
    this.precio=precio
}

var servicio1=new Servicios ("Diseño web con plantillas",200);
var servicio2=new Servicios ("Diseño web personalizado",300);
var servicio3=new Servicios ("Programación y funcionalidades",500);


const presupuesto=[servicio1,servicio2,servicio3];
console.log(presupuesto);

const suma=servicio1.precio+servicio2.precio+servicio3.precio;


function Calcular () {
    console.log(`El precio total es de $ ${suma}`);
    servicio4=new Servicios("Landing Page",400);
    presupuesto.push(servicio4);
    console.log(presupuesto);

    suma2=(suma+servicio4.precio);

    console.log(`El nuevo precio total es de ${suma2}`);
}

