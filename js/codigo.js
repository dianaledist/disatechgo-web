const carrito=document.querySelector('#carrito');
const contenedorCarrito=document.querySelector('#lista-carrito tbody');
const botonCompra=document.querySelector('.boton-compra')
const vaciarCarritobtn=document.querySelector('#vaciar-carrito');
const btnVolver=document.querySelector('#button-return');

const divServicios = document.querySelector("#grilla_servicios");

const variableCarrito=document.querySelector("#cantidadP");
const navCarrito=document.querySelector(".header_nav-shop");

const botonLogin=document.querySelector(".login-user");

const valorTotal=document.querySelector(".muestra-total");
console.log(valorTotal);

/* console.log(navCarrito); */
/* console.log(divServicios); */

let articulosCarrito=[];


cargarEventListeners ();

function cargarEventListeners(){
    divServicios.addEventListener('click',agregarCarrito);
    contenedorCarrito.addEventListener('click',eliminarServicio);
    botonCompra.addEventListener('click',realizarCompra)
    botonLogin.addEventListener('click',loginUser);
    vaciarCarritobtn.addEventListener('click',vaciarCarrito);
    document.addEventListener('DOMContentLoaded',()=>{
        articulosCarrito=JSON.parse(localStorage.getItem('datos carrito')) || [];
        carritoHTML();
        console.log(articulosCarrito);
    })
}

var nombre=document.querySelector(".nombre-user").value;
var welcome=document.querySelector(".home_bienvenida");
console.log(nombre);


function loginUser(){
    const nombreUser=document.querySelector('#orangeForm-name').value;
    const mailUser=document.querySelector('#orangeForm-email').value;
    const passwordUser=document.querySelector('#orangeForm-pass').value;

/* console.log(nombreUser); */
if (!nombreUser|| !mailUser || !passwordUser) {

    alert("Ingrese sus datos para una mejor experiencia :D");
      
} else {
    localStorage.setItem(nombreUser,mailUser);
    console.log(nombreUser);
    const bienvenida=document.createElement('div');
    bienvenida.classList.add('home_bienvenida');
    bienvenida.innerHTML= `<h2 class="home-text">Hola ${nombreUser}<h2> <br> <h3 class="home-text">Has ingresado a tu sección privada en <strong>disatechgo</strong>. Esperamos que disfrutes de esta experiencia digital! <br>
    Descubrí los servicios que tenemos para ofrecerte!</h3>`;  
    welcome.appendChild(bienvenida);

    $('.login-user').submit(function(e) {
        e.preventDefault();
        // Coding
        $('#modalRegisterFor').fadeout(2000);
        $('#modalRegisterFor').modal('toggle'); 
        return false;
    });
}
}



function agregarCarrito(e){
    
    if(e.target.classList.contains('agregar-servicio')){
        const servicioSeleccionado=e.target.parentElement.parentElement;
/*         console.log(servicioSeleccionado);
        console.log(e.target.parentElement.parentElement);
        console.log('Agregando al carrito...') */

        leerDatosServicio(servicioSeleccionado);

        calcularTotal();         
    }    
}

function leerDatosServicio(servicio) {
    const infoServicio={
        titulo:servicio.querySelector('.card-title').textContent,
        precio:servicio.querySelector('.card-text').textContent,
        id: servicio.querySelector('a').getAttribute('data-id'),
        cantidad:1,
    }

    const existe = articulosCarrito.some(servicio=> servicio.id===infoServicio.id);
/*     console.log(existe); */

    if(existe){
        const service =articulosCarrito.map(items=> {
            if(items.id===infoServicio.id)
            {
               items.cantidad++;
               return items;
              
            } else {
                return items;
            }
        });
        
        articulosCarrito=[...service];
    } else {
        articulosCarrito=[...articulosCarrito, infoServicio];
        
    }

carritoHTML();
}

function eliminarServicio(e){
    /*     console.log('eliminar'); */
        if(e.target.classList.contains('borrar-servicio')){
           const servicioId=e.target.getAttribute('data-id');
           articulosCarrito=articulosCarrito.filter(servicio=> servicio.id!==servicioId);
           console.log(articulosCarrito);

           sincronizarStorage();
           carritoHTML();
    /*        console.log(articulosCarrito); */
            calcularTotal();
        }
    }


function vaciarCarrito(e){
    /*    console.log('hola');
        console.log(articulosCarrito); */
        contenedorCarrito.innerHTML = '';
        articulosCarrito.length=0;
        console.log(articulosCarrito);   
        localStorage.clear()  
        calcularTotal();      
        carritoHTML();
    }

function carritoHTML(){

    limpiarHTML();
    
    arraySubtotal=[];
    total=0;

    articulosCarrito.forEach( servicio => {
        /* console.log(servicio); */

        const {titulo, precio, cantidad, id} = servicio

        const sumaTotal=precio*cantidad;
        arraySubtotal=[...arraySubtotal,sumaTotal]
        /* console.log(sumaTotal); */

   /*      console.log(subtotal); */
/*         console.log(total); */

        const row = document.createElement('tr');
        row.classList.add("tablas");
        row.innerHTML = `
        <td>
        <h6>${titulo}</h6>
        </td>
        <td>
        <h6>€ ${precio}</h6>
        </td>
        <td>
        <h6>${cantidad}</h6>
        </td>
        <td>
        <a href="#" class="borrar-servicio" data-id="${id}">X 
        </td>
        `;

        contenedorCarrito.appendChild(row);

        sincronizarStorage();

    });
    console.log(arraySubtotal);

    const precioFinal=calcPrecioFinal(arraySubtotal);
    console.log(precioFinal)
    
        const row2=document.createElement('tr');
        row2.classList.add('muestra-total');
        row2.innerHTML= `<th colspan="4" class="p-3"><div><h5>Precio final: € <span class="precio-final">${precioFinal}</span></h5></div></th>`;
        contenedorCarrito.appendChild(row2);   
}

function calcPrecioFinal(precios) {
    if (precios === undefined || precios.length == 0) {
        return 0;
    } else {
        return precios.reduce(function(a, b){ return a + b; });
    }
}

/* const precioFinal=(arraySubtotal === undefined || arraySubtotal.length == 0) ? 0 : (arraySubtotal.reduce(function(a, b){ return a + b; })); */

function limpiarHTML() {
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}

function sincronizarStorage() {
    const articulosStorage=JSON.stringify(articulosCarrito);

    localStorage.setItem('datos carrito', articulosStorage);
    console.log('Carrito actualizado: ', JSON.parse(articulosStorage));
}

function calcularTotal() {

}


///////// jQUERY Animations

$(document).ready(function() 
{
    $.ajax({
        url: 'bbdd.json',
        dataType: "json",
        success: function(data) {
            data.forEach(element => {            
                /* $('.precio-html.text-center').append(`<p>Servicio: ${element.tipo} - Precio: ${element.precio}<p>`) */
                $('#grilla_servicios').append(`            
                    <div class="card" style="width: 25rem">
                        <img class="card-img-top" src="${element.imagen}" alt="Card image"><div class="card-body">
                        <h5 class="card-title">${element.tipo}</h5>
                        <p class="card-text">${element.precio}</p>
                        <a  class="u-full-width button-primary button input agregar-servicio" id="button-bounce" data-id="${element.id}">Agregar Al Carrito</a>
                    </div>`)          
            });

           

            $(".agregar-servicio").click(function() {
                doBounce($(this),1, '5px',100); 
                
                if ( 0 < $('.card').length ) {
                    $('.agregar-servicio').click(function() {
                        var offset = $(this).parent().offset();
                        $(this).parent().clone().addClass('card-clone').css({
                            'left' : offset.left + 'px',
                            'top' : parseInt(offset.top-$(window).scrollTop()) + 'px',
                            'width' :  $(this).parent().width() + 'px',
                            'height' : $(this).parent().height() + 'px'
                            
                        }).appendTo($('#grilla_servicios').parent());
                        
                                           
                        /* $('#button-animate').delay(800).css("background-color", "blue"); */

                        /* $('#button-animate').toggle(function () {
                            $("#button-animate").css({
                                "background-color": "yellow",
                                "font-weight": "bolder"
                            },500)
                        }, function () {
                            $("#button-animate").css({
                                "background-color": "white",
                                "font-weight": "bolder"
                            },500)
                        }); */                  

                        var cart = $('#button-animate').offset();
                        $('.card-clone').animate( { top: parseInt(cart.top-$(window).scrollTop()) + 'px', left: cart.left + 'px', 'height': '0px', 'width': '0px' }, 800, function(){
                            $(this).remove();                           
                        });                        
                    });
                }   
            });
                
        },
        error: function (jqXHR, status, error) {
            console.log("error")
            console.log(jqXHR)
            console.log(`Error => Status: ${status} - Error: ${error}`)
        }
    });

    $(function() {
        $('#button-animate').click(function(){
            
            $("#carrito").fadeToggle(); 
        });
        $("#grilla_servicios").click(function(e){
            $("#carrito").hide(e);
        });
    });

    function doBounce(element, times, distance, speed) {
        for(i = 0; i < times; i++) {
            element.animate({marginTop: '-='+distance},speed)
                .animate({marginTop: '+='+distance},speed);
        }        
    }
    
    $("#vaciar-carrito").click(function() {
        doBounce($(this),1, '5px',100);   
    });
    
    
    /* var precio2=$(".precio-final").text();

    $(".precio-html").html("<h5>Tu servicio cuesta: "+precio2+"<h5>");
 
    console.log(precio2); */
});


/* var bbddJSON = JSON.stringify(servicios);
console.log(bbddJSON)
 */

function realizarCompra(){
    $('#carrito').html('<div class="permanente"><div class="dinamico"><h3 class="text-center p-3">Ingrese sus datos</h3><p><input type="text" class="input_form u-full-width" placeholder="Nombre completo"></p><p><input type="text" class="input_form u-full-width" placeholder="XXXX-XXXX-XXXX-XXXX"></p><p><input type="text" class="input_form u-full-width" placeholder="Dirección"></p><p><input type="text" class="input_form u-full-width" placeholder="E-mail"></p><p><input type="text" class="input_form u-full-width" placeholder="Pedido especial"></p><a class="button u-full-width boton-compra" onclick="procesarPago()"> Finalizar pago<a class="button u-full-width button-return" onclick="volverCarrito()"> Volver</div></div>');
}

function procesarPago(){
    $('#carrito').html('<h3 class="text-center p-3">Has contratado los servicios con éxito</h3>');
    vaciarCarrito();

}

