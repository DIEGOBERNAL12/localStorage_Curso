const formulario = document.getElementById('formulario');
const inputCurso = document.getElementById('curso');
const inputProfesor = document.getElementById('profesor');
const inputPrecio = document.getElementById('precio');
const inputCiudad = document.getElementById('ciudad');
const inputCupo = document.getElementById('cupo');
const mensaje = document.getElementById('mensajeCurso');
const btnEliminar = document.getElementById('delete');


formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const curso = inputCurso.value.trim();
    const profesor = inputProfesor.value.trim();
    const precio = inputPrecio.value.trim();
    const ciudad = inputCiudad.value.trim();
    const cupo = inputCupo.value.trim();

    if (curso === "" || profesor === "" || precio === "" || 
        ciudad === "" || cupo === ""){
        alert("Por favor Ingrese los Datos.");
        return;
    }

    const nuevoCurso = {
        nombre : curso,
        profesor : profesor,
        precio : precio,
        ciudad : ciudad,
        cupo : cupo
    };
    //Anteriormente era un solo valor ahora se esta alimentando 
    //un objeto que tiene diferentes caracteristicas
    localStorage.setItem("curso", JSON.stringify(nuevoCurso));
    formulario.reset();
});

document.addEventListener('DOMContentLoaded', () => {
    const cursoCreado = localStorage.getItem("curso");
    if(cursoCreado){
        const objetoCurso = JSON.parse(cursoCreado);
        //el JSON.parse se usa para convertir

        

        mensaje.innerHTML = 
        " Curso:" + objetoCurso.nombre + "<br>" +
        " Profesor: " + objetoCurso.profesor + "<br>" +
        " Precio: " + objetoCurso.precio + "<br>" +
        " Ciudad: " + objetoCurso.ciudad + "<br>" +
        " Cupo: " + objetoCurso.cupo;
    }
})
