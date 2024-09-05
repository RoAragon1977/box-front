import { Puerto } from "../config/user_server";

// Crear Usuario
async function CreateUser({ nombre, apellido, email, password, photoUrl }) {
  const body = JSON.stringify({
    nombre,
    apellido,
    email,
    password,
    photoUrl,
  });
  const response = await fetch(`${Puerto.URL_LOCAL}/user/add`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: body,
  });
  return await response.json();
}

export { CreateUser };
