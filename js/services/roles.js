export async function obtenerRoles() {
  const res = await fetch("/api/roles");
  return await res.json();
}

window.handleVerRoles = async () => {
  const roles = await obtenerRoles();
  const lista = document.getElementById("lista-roles");
  lista.innerHTML = "";

  roles.forEach(rol => {
    const li = document.createElement("li");
    li.innerText = `${rol.id}: ${rol.nombre}`;
    lista.appendChild(li);
  });
};
