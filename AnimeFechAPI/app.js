document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

//Llamar a Ajax e imprimir resultados
function cargarNombres(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;

    const cantidad =document.getElementById('cantidad').value;

    let url = '';
    url += 'https://api.jikan.moe/v3/search/';
    // url += 'https://api.jikan.moe/v3/search/anime?q=goku&limit=16';

    //Si hay origen agrergar URL
    if(nombre !== '') {
        url += `anime?q=${nombre}&`;
    }

    //Si hay genero agrergar URL
    if(cantidad !== '') {
        url += `limit=${cantidad}`;
    }

    console.log('Url: ', url);

    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onload = function() {
        if(this.status === 200) {
            const animes = JSON.parse(this.responseText);

            let htmlTemplate = '';
            for(let i = 0; i < animes.results["length"]; i++) {
                htmlTemplate += `<div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="card m-2">

                        <!-- Card image -->
                        <div class="view overlay">
                        <img class="card-img-top" src="${animes.results[i].image_url}"
                            alt="${animes.results[i].title}">
                        <a href="#!">
                            <div class="mask rgba-white-slight"></div>
                        </a>
                        </div>

                        <!-- Card content -->
                        <div class="card-body">

                        <!-- Title -->
                        <h4 class="card-title">${animes.results[i].title}</h4>
                        <!-- Text -->
                        <p class="card-text">${animes.results[i].synopsis}</p>
                        <!-- Button -->
                        <a href="${animes.results[i].url}" class="btn btn-primary">Button</a>

                        </div>
                    </div>
                </div>`;
            }



            // for(let i in animes) {
            //     htmlTemplate += `<div class="col-3">
            //             <div class="card">

            //             <!-- Card image -->
            //             <div class="view overlay">
            //              <img class="card-img-top" src="${animes.results[i].image_url}"
            //                 alt="${animes.results[i].title}">
            //             <a href="#!">
            //                 <div class="mask rgba-white-slight"></div>
            //             </a>
            //             </div>

            //             <!-- Card content -->
            //             <div class="card-body">

            //             <!-- Title -->
            //             <h4 class="card-title">${animes.results[i].title}</h4>
            //             <!-- Text -->
            //             <p class="card-text">${animes.results[i].synopsis}</p>
            //             <!-- Button -->
            //             <a href="${animes.results[i].url}" class="btn btn-primary">Button</a>

            //             </div>

            //         </div>

            //     </div>`;
            // }

            // animes.forEach(function(anime) {
            //         console.log(anime);
            //         let i = 0
            //     htmlAnime += `<div class="col-3">
            //             <div class="card">

            //             <!-- Card image -->
            //             <div class="view overlay">
            //             <img class="card-img-top" src="${anime.results.image_url}"
            //                 alt="${anime.results[i].title}">
            //             <a href="#!">
            //                 <div class="mask rgba-white-slight"></div>
            //             </a>
            //             </div>

            //             <!-- Card content -->
            //             <div class="card-body">

            //             <!-- Title -->
            //             <h4 class="card-title">${anime.results.title}</h4>
            //             <!-- Text -->
            //             <p class="card-text">${anime.results.synopsis}</p>
            //             <!-- Button -->
            //             <a href="#" class="btn btn-primary">Button</a>

            //             </div>

            //         </div>

            //     </div>`;
            // });
            document.getElementById('resultado').innerHTML = htmlTemplate;
            
            console.log(document.getElementById('resultados'));
            
        }
    }

    xhr.send();

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
          } else {
            // createAccount();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();


function createAccount() {
    alert('test');
}
