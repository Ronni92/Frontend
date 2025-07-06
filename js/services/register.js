export async function register(username, email, password) {
  try {
    const response = await fetch("http://44.198.34.88:81/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password })
    });

    if (!response.ok) throw new Error("Error al registrar");
    return await response.json();
  } catch (error) {
    alert("Error en registro: " + error.message);
    return null;
  }
}
