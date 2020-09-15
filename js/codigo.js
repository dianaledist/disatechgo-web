
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

