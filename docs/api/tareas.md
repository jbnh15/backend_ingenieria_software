# Tareas

Todas las rutas requieren `Authorization: Bearer <token>`. Sin token o con token inválido responden 401.

| Método y ruta | Solicitud | Respuesta y efecto |
|---|---|---|
| GET /api/tareas | Sin body | 200: consulta MongoDB filtrando `user` por el usuario del token |
| POST /api/tareas | `{"descripcion":"Estudiar JWT"}` | 201: guarda tarea con dueño tomado del token; 400: falta descripción |
| PUT /api/tareas/:id | `{"descripcion":"Estudiar JWT - completado"}` | 200: actualiza tarea propia; 404: no existe; 401: pertenece a otro usuario |
| DELETE /api/tareas/:id | Sin body | 200: elimina tarea propia y devuelve `{id}`; 404: no existe; 401: pertenece a otro usuario |

Las pruebas de aislamiento usan el mismo ID de Pedro con el JWT de Juan y verifican después que la tarea sigue intacta. Limitación del código de clase: PUT envía todo el body a Mongoose; debe restringirse a descripción antes de usarlo en producción. Los identificadores malformados no tienen una validación específica.
