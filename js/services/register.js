async function register() {
  const user = document.getElementById("regUser").value;
  const pass = document.getElementById("regPass").value;

  const response = await fetch("http://44.198.34.88:81/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ usuario: user, contraseña: pass })
  });

  const result = await response.json();
  document.getElementById("registerResult").innerText = JSON.stringify(result, null, 2);
}
