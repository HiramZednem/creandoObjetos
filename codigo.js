/**
 * Mis variables son un contador que inicia en -1 que es para consultar las poscisiones de mi arreglo,
 * y este almacena mis objetos tipo Carros.
 */

//Referencias HTML:
const btnAgregar = document.querySelector('#add');
const btnEliminar = document.querySelector('#delete');
const btnMostrar = document.querySelector('#show');

//Variables:
let contador = -1;
let arreglo = [];



class Carros {
    marca;
    kmRecorridos;
    precio;
    constructor(marca, kmRecorridos, precio) {
        this.marca = marca;
        this.kmRecorridos = kmRecorridos;
        this.precio = precio;
    }

    imprimir() {
        return `La marca del vehiculo es ${this.marca} los km recorridos son de ${this.kmRecorridos} y su precio es de ${this.precio}`;
    }
}
const verificarNumero = (nombreVariable)=>{
    let dato;
    do{
        dato = parseInt(prompt(`Ingrese ${nombreVariable} `));
        
        if ( isNaN(dato) ){
            alert("Dato ingresado incorrecto, intente nuevamente!");
        }
    }while( isNaN(dato) );
    return dato;
}

btnAgregar.addEventListener('click', () => {
    /*
        Cuando el usuario pulsa el boton agregar llega a este bloque de codigo,
        en donde se definen las variables que seran agregadas al objeto, y se usa una funcion
        llamada verificarNumero para que el usuario no ingrese letras y solo pueda ingresar numeros.

        Acto seguido se crea el objeto y se lleva un contador de cuantos objetos se estan agregando.
    */
    let marca = prompt('Ingresa marca:');
    let kmRecorridos = verificarNumero('kmRecorridos');
    let precio = verificarNumero('precio');
    

    arreglo.push(new Carros(marca, kmRecorridos, precio))
    contador++;
});

btnEliminar.addEventListener('click', () => {
    if (contador === -1){
        alert("No hay objetos creados!")
    }
    else{
    arreglo.pop();
    contador--;
    }
});

btnMostrar.addEventListener('click', () => {
    let textoImprimir='';
    for(let i=0; i<arreglo.length; i++){
        textoImprimir+= arreglo[i].imprimir() + "\n";
    }

    if (textoImprimir === ''){
        alert('No hay objetos creados!');
    }else{
    console.log(textoImprimir);
    }
});