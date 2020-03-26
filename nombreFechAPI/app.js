document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

//Llamar a Ajax e imprimir resultados
function cargarNombres(e) {
    e.preventDefault();

    const origen = document.getElementById('origen');    
    const origenSeleccionado = origen.options[origen.selectedIndex].value;

    const genero = document.getElementById('genero');    
    const generoSeleccionado = genero.options[genero.selectedIndex].value;

    console.log(origenSeleccionado);
    console.log(generoSeleccionado);
    
}

function initApp() {
    document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);
}


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

function createAccount() {
    alert('test');
}
