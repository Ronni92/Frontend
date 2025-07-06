import { login } from './services/login.js';
import { register } from './services/register.js';
import { obtenerRoles } from './services/rol.js';

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("login-btn").addEventListener("click", async () => {
    const username = document.getElementById("login-user").value;
    const password = document.getElementById("login-pass").value;

    const result = await login(username, password);
    if (result) {
      alert("✅ Login exitoso");
      console.log("Datos recibidos:", result);
    } else {
      alert("❌ Login fallido");
    }
  });

document.getElementById('register-btn').addEventListener('click', async () => {
  const user = document.getElementById('register-user').value;
  const email = document.getElementById('register-email').value;
  const pass = document.getElementById('register-pass').value;
  const result = await register(user, email, pass);
  if (result) alert('Registro exitoso');
});


  document.getElementById('ver-roles-btn').addEventListener('click', async () => {
    const lista = document.getElementById('lista-roles');
    lista.innerHTML = "Cargando...";

    const roles = await obtenerRoles();
    if (!roles) {
      lista.innerHTML = "<li>Error al cargar los roles.</li>";
      return;
    }

    lista.innerHTML = "";
    roles.forEach(role => {
      const li = document.createElement("li");
      li.textContent = `ID: ${role.id}, Nombre: ${role.nombre}`;
      lista.appendChild(li);
    });
  });
});
