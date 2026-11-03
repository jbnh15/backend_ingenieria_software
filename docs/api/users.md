# Usuarios

Base: `http://localhost:5000`. Registro conservado en `/register`, como en el código de clase.

| Método y ruta | Autenticación | Solicitud | Respuesta |
|---|---|---|---|
| POST /api/users/register | No | `{"nombre":"Pedro","email":"pedro@practica.test","password":"..."}` | 201: usuario creado; 400: faltan campos o correo duplicado |
| POST /api/users/login | No | `{"email":"pedro@practica.test","password":"..."}` | 200: datos y JWT; 401: credenciales incorrectas |
| GET /api/users/datos | Bearer JWT | Sin body | 200: usuario del token, sin password; 401: token ausente o inválido |

El registro consulta el correo, cifra la contraseña con bcrypt y guarda el usuario en MongoDB. La implementación de clase devuelve también el hash en el registro; debe omitirse antes de un uso en producción. El login compara el hash y firma un JWT con `id_usuario`, `iat` y `exp`, válido por 30 días. El middleware verifica firma y expiración y carga al usuario de MongoDB.
