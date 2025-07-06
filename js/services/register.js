export async function register(username, email, password) {
  const res = await fetch("/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });

  return await res.json();
}

window.handleRegister = async () => {
  const username = document.getElementById("register-user").value;
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-pass").value;

  const result = await register(username, email, password);
  alert(result.message || "Registro completo");
};
