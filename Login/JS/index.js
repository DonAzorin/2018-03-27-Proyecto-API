//Elementos del DOM
const formData = document.getElementById('formData');
const error = document.getElementById('error');

//API
const API_URL = 'https://zeratul.herokuapp.com/api/login/';

//listener
formData.addEventListener('submit', getData);

//funciones
function getData(event) {
  event.preventDefault();
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  const params = {username, password} //creación de objeto //ES6
  login(params);
}

function login(params) {
  console.log(params);

  fetch(
    API_URL, //URL de la petición POST
    {
      method: 'POST', //método post
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }, //cierre headers
      body: JSON.stringify(params)
    } // cierre objeto de fetch
  ) // cierre de fetch

  .then((response) => response.json()) //me aseguro que responda un GET

  .then((response) => {

    if (!response.code) {
      window.localStorage.setItem("user", JSON.stringify(response)); //guardar en el navegador

      setTimeout(function(){
        window.location.replace('Panel/index.html');
      }, 200)

    } else {
      error.innerHTML = response.error;
    }

  }) //presentar lo que me responda

  .catch(function (error) {
    console.log(error);
  })

}

(function isLogged() {
  console.log('me llamé');
  const user = JSON.parse(window.localStorage.getItem('user'));
  if (user) window.location.replace('Panel/index.html')
}) ();
