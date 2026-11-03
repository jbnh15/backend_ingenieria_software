# Backend de tareas con JWT

Práctica individual de Ingeniería de Software. API REST desarrollada con Node.js, Express y MongoDB, con registro, inicio de sesión y tareas asociadas al usuario autenticado.

## Instalación y ejecución

1. Instalar Node.js y disponer de MongoDB.
2. Ejecutar `npm install`.
3. Copiar `.env.example` a `.env` y configurar `PORT`, `MONGO_DB`, `JWT_SECRET` y `NODE_ENV`. Generar un secreto aleatorio; nunca publicarlo.
4. Ejecutar `npm start` (`npm run server` para desarrollo).

Para el MongoDB local creado para esta práctica: `MONGO_DB=mongodb://127.0.0.1:27017/practica_backend`. Puerto utilizado: `5000`.

## Endpoints

| Método | Ruta | Autenticación |
|---|---|---|
| POST | /api/users/register | Pública |
| POST | /api/users/login | Pública |
| GET | /api/users/datos | Bearer JWT |
| GET | /api/tareas | Bearer JWT |
| POST | /api/tareas | Bearer JWT |
| PUT | /api/tareas/:id | Bearer JWT |
| DELETE | /api/tareas/:id | Bearer JWT |

Registro: `{"nombre":"Pedro","email":"pedro@practica.test","password":"contraseña de prueba"}`. Login: `{"email":"pedro@practica.test","password":"contraseña de prueba"}`. Crear o modificar tarea: `{"descripcion":"Estudiar JWT"}`.

Los endpoints de tareas obtienen el usuario del JWT. El listado filtra por dueño. Modificar y eliminar verifican que la tarea pertenezca al usuario del token.
