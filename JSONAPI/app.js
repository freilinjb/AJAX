const cargarPost = document.querySelector('#cargar').addEventListener('click', cargarAPI);

function cargarAPI() {

    const xhr = new XMLHttpRequest();
    //abrir la conexion
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    //Cargar los datos
    xhr.onload = function() {
        if(this.status === 200) {
            // console.log(this.responseText);
            const respuesta  = JSON.parse(this.responseText);

            let contenido = '';
            respuesta.forEach(function(post) {
                contenido += `
                    <h3>${post.title}</h2>
                    <p>${post.body}</p>
                `;
            });

            document.getElementById('listado').innerHTML = contenido;
            
        }
    }
    //envia los datos
    xhr.send();
}