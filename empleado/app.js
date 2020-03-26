const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');

const xhr = new XMLHttpRequest();

boton1.addEventListener('click', function() {

    xhr.open('GET', 'empleado.json', true);

    xhr.onload = function() {
        if(this.status === 200) {
            console.log(JSON.parse(this.responseText));
            const persona = JSON.parse(this.responseText);

            const htmlTemplate = `
                <ul>
                    <li> ID: ${persona.id} </li>
                    <li> Nombre: ${persona.nombre} </li>
                    <li> Empresa: ${persona.empresa} </li>
                    <li> Actividades: ${persona.trabajo} </li>
                </ul>
            `;

            document.getElementById('empleado').innerHTML = htmlTemplate;
        }
    }

    xhr.send();
});



boton2.addEventListener('click', function() {

    xhr.open('GET', 'empleados.json', true);

    xhr.onload = function() {
        if(this.status === 200) {
            console.log(JSON.parse(this.responseText));
            const personas = JSON.parse(this.responseText);

            let htmlTemplate = '';

            personas.forEach(function(persona) {
                htmlTemplate += `
                <ul>
                    <li> ID: ${persona.id} </li>
                    <li> Nombre: ${persona.nombre} </li>
                    <li> Empresa: ${persona.empresa} </li>
                    <li> Actividades: ${persona.trabajo} </li>
                </ul>
                `;
            });

            document.getElementById('empleados').innerHTML = htmlTemplate;
        }
    }

    xhr.send();
});