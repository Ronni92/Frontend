export async function login(username, password) {
  try {
    const response = await fetch('http://54.144.153.107:3000/login', {
   method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) throw new Error("Login incorrecto");
    return await response.json();
  } catch (error) {
    alert("Error en login: " + error.message);
    return null;
  }
}
