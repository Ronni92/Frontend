export async function register(username, password) {
  try {
    const response = await fetch('http://54.144.153.107:81/register', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) throw new Error("Error al registrar");
    return await response.json();
  } catch (error) {
    alert("Error en registro: " + error.message);
    return null;
  }
}
