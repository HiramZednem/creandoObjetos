

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

btnAgregar.addEventListener('click', () => {
    //Variables: 
    let marca
    let kmRecorridos
    let precio


    marca = prompt("Ingrese Marca: ");
    
    do{
        kmRecorridos = parseInt(prompt("Ingrese kmRecorridos "));
        
        if ( isNaN(kmRecorridos) ){
            alert("Dato ingresado incorrecto, intente nuevamente!");
        }
    }while( isNaN(kmRecorridos) );

    do{
    precio = prompt("Ingrese Precio: ");

    
        if (isNaN(precio)){
            alert("Dato ingresado incorrecto, intente nuevamente!");
        }
    }while(isNaN(precio));

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