export async function login(username, password) {
  try {
    const response = await fetch('http://54.144.153.107:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Error en login');

    return data;
  } catch (error) {
    alert('Login fallido: ' + error.message);
    console.error(error);
  }
}
