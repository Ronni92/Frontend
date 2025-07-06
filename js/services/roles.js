export async function obtenerRoles() {
  try {
    const response = await fetch("http://44.219.96.83:82/roles");
    if (!response.ok) throw new Error("Error al obtener los roles");
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function crearRol(nombre) {
  try {
    const response = await fetch("http://44.219.96.83:82/roles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre })
    });

    if (!response.ok) throw new Error("Error al crear rol");
    return await response.json();
  } catch (error) {
    alert("Error al crear rol: " + error.message);
    return null;
  }
}
