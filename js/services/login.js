async function login() {
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;

  const response = await fetch("http://52.73.46.11:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ usuario: user, contraseña: pass })
  });

  const result = await response.json();
  document.getElementById("loginResult").innerText = JSON.stringify(result, null, 2);
}
