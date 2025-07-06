export async function register(username, password) {
  try {
    const response = await fetch('http://54.144.153.107:81/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Error en registro');

    return data;
  } catch (error) {
    alert('Registro fallido: ' + error.message);
    console.error(error);
  }
}
