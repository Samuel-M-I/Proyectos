let Tarea=document.getElementById("Tarea");

let listaCompletas=document.getElementById("listaCompletas");
let fPrioridad=document.getElementById("fPrioridad");
let boton=document.getElementById("boton");
let listaAlta=document.getElementById("listaAlta");
let listaMedia=document.getElementById("listaMedia");
let listaBaja=document.getElementById("listaBaja"); 
/*Crea un selector de prioridad con las opciones Alta, Media y Baja
returns: el elemento select creado
*/
fPrioridad.addEventListener("change",()=>{
    switch(fPrioridad.value){
        case "Alta":
            fPrioridad.classList.add("Alta");
            fPrioridad.classList.remove("Media");
            fPrioridad.classList.remove("Baja");
            break;
        case "Media":
            fPrioridad.classList.add("Media");
            fPrioridad.classList.remove("Alta");
            fPrioridad.classList.remove("Baja");
            break;
        case "Baja":
            fPrioridad.classList.add("Baja");
            fPrioridad.classList.remove("Alta");
            fPrioridad.classList.remove("Media");
            break;
    }
});
function crearPrioridad(valPrioridad){
    const Prioridad=document.createElement('select');
    const opcion3=document.createElement('option');
    opcion3.value="Baja";
    opcion3.textContent="Baja";
    opcion3.classList.add("Baja");
    const opcion2=document.createElement('option');
    opcion2.value="Media";
    opcion2.textContent="Media";
    opcion2.classList.add("Media");
    const opcion1=document.createElement('option');
    opcion1.value="Alta";
    opcion1.textContent="Alta";
    opcion1.classList.add("Alta");
    Prioridad.appendChild(opcion1);
    Prioridad.appendChild(opcion2);
    Prioridad.appendChild(opcion3);
    Prioridad.value= valPrioridad; // Valor por defecto
    switch(Prioridad.value){
            case "Alta":
                Prioridad.classList.add("Alta");
                Prioridad.classList.remove("Media");
                Prioridad.classList.remove("Baja");
                break;
            case "Media":
                Prioridad.classList.add("Media");
                Prioridad.classList.remove("Alta");
                Prioridad.classList.remove("Baja");
                break;
            case "Baja":
                Prioridad.classList.add("Baja");
                Prioridad.classList.remove("Alta");
                Prioridad.classList.remove("Media");
                break;
        }
    Prioridad.addEventListener("change",()=>{
        Padre=Prioridad.parentElement;
        switch(Prioridad.value){
            case "Alta":
                listaAlta.appendChild(Padre);
                Prioridad.classList.add("Alta");
                Prioridad.classList.remove("Media");
                Prioridad.classList.remove("Baja");
                break;
            case "Media":
                listaMedia.appendChild(Padre);
                Prioridad.classList.add("Media");
                Prioridad.classList.remove("Alta");
                Prioridad.classList.remove("Baja");
                break;
            case "Baja":
                listaBaja.appendChild(Padre);
                Prioridad.classList.add("Baja");
                Prioridad.classList.remove("Alta");
                Prioridad.classList.remove("Media");
                break;
        }
    })
    return Prioridad;
}
/*Crea un boton de completado que al ser presionado mueve la tarea a la lista de tareas completadas
returns: el elemento button creado
*/
function crearBotonCompletado(){
    const botonCompletado=document.createElement('button');
    botonCompletado.textContent="Completado";
    botonCompletado.addEventListener("click", function(){
        const itemPadre=botonCompletado.parentElement;
        const prioridad=itemPadre.querySelector('select');
        prioridad.remove(); // Elimina el selector de prioridad al completar la tarea
        listaCompletas.appendChild(itemPadre);//Cambia la tarea a la lista de tareas completadas
        botonCompletado.remove();//Elimina el boton de completado
    });    
    return botonCompletado;
}

/*Crea un boton de eliminar que al ser presionado elimina la tarea

*/
function crearBotonEliminar(){
    const botonEliminar=document.createElement('button');
    botonEliminar.textContent="X";
    botonEliminar.addEventListener("click", function(){
        const itemPadre=botonEliminar.parentElement;
        itemPadre.remove();//Elimina la tarea al presionar el boton
    });
    return botonEliminar;
}



/*Crea un item de tarea con la actividad dada y la prioridad
returns: el elemento li creado
*/
function crearItemTarea(actividad,valPrioridad){
    let Prioridad=crearPrioridad(valPrioridad);
    let item = document.createElement('li');
    item.textContent=actividad;
    item.prepend(Prioridad);
    item.appendChild(crearBotonCompletado());
    item.appendChild(crearBotonEliminar()); 
    return item;

}

/*
Rectifica que enfecto halla una tarea creada, y procede a crearla. 
*/
function crearTarea(){
    let nombreTarea=Tarea.value;
    if(!nombreTarea.trim()){
        alert("Por favor ingrese un nombre para la tarea");
        return;
    }
    valPrioridad=fPrioridad.value;
    
    Tarea.value="";
    switch(valPrioridad){
        case "Alta":
            listaAlta.appendChild(crearItemTarea(nombreTarea.trim(),valPrioridad));
            break;
        case "Media":
            listaMedia.appendChild(crearItemTarea(nombreTarea.trim(),valPrioridad));
            break;
        case "Baja":
            listaBaja.appendChild(crearItemTarea(nombreTarea.trim(),valPrioridad));
            break;
    }
}
boton.addEventListener("click", crearTarea);
