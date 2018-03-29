const user = JSON.parse(window.localStorage.getItem('user'));
const username = document.getElementById('username');
const btnLogout = document.getElementById('btnLogout');
const role = document.getElementById('role');
const userDetails = document.getElementById('userDetails');

btnLogout.addEventListener('click', logout);

function fillData() {
  let name = `${user.name} ${user.lastName}`;
  let rol = `${user.role}`;
  username.innerHTML = name;
  role.innerHTML = checkRole();
  userDetails.innerHTML = template(name);
}

function template(name) {
  return `
    <div class="user">
      <p>Nombre: ${name}</p>
      <p>Correo Electrónico: ${user.email}</p>
      <p>Teléfono: ${user.phoneNumber}</p>
      <p>Ciudad: ${user.city}</p>
    </div>
  `
}

function checkRole() {
  if (user.role === 'admin') return 'Administrador';
  if (user.role === 'user') return 'Usuario';
}

function logout() {
  window.localStorage.removeItem('user');
  window.location.replace("../index.html")
}

(function isLogged() {
  if (!user) window.location.replace("../index.html");
  fillData();
})();
