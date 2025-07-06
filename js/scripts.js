import { login } from './services/login.js';
import { register } from './services/register.js';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('login-btn').addEventListener('click', async () => {
    const user = document.getElementById('login-user').value;
    const pass = document.getElementById('login-pass').value;
    const result = await login(user, pass);
    if (result) alert('Login exitoso');
  });

  document.getElementById('register-btn').addEventListener('click', async () => {
    const user = document.getElementById('register-user').value;
    const pass = document.getElementById('register-pass').value;
    const result = await register(user, pass);
    if (result) alert('Registro exitoso');
  });
});
