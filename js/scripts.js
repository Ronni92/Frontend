function login() {
  const user = document.getElementById("login-usuario").value;
  const pass = document.getElementById("login-password").value;
  alert(`Intentando iniciar sesión con usuario: ${user}`);
}

function register() {
  const user = document.getElementById("reg-usuario").value;
  const pass = document.getElementById("reg-password").value;
  alert(`Intentando registrar usuario: ${user}`);
}
