export async function login(email, password) {
  const res = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  return await res.json();
}

window.handleLogin = async () => {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-pass").value;

  const result = await login(email, password);
  alert(result.message || "Intento de login realizado");
};
