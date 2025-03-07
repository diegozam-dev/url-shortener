# Shortly - Backend

### [⬅️ Inicio](../README.md)

## Índice
* [API Endpoints](#🔗-api-endpoints)
* [Stack Tecnológico](#📌-stack-tecnológico)
* [Dependencias](#📦-dependencias)
* [Estructura del Frontend](#📂-estructura-del-frontend)

## 🔗 API Endpoints
El backend expone los siguientes endpoints para la gestión de URLs cortas:
### 1. Generar una URL corta
| Método        | Url                            | Descripción                         |
|---------------|---------------------------------|-------------------------------------|
| POST           | v1/api/url/encode               | Crear una url acortada.       |
#### Middlewares aplicados:
* **rateLimiter:** Limita la cantidad de solicitudes para evitar abusos.
* **urlValidator:** Valida que la URL proporcionada sea válida.
* **urlScanner:** Verifica si la URL es segura antes de acortarla.
* **cacheHandler:** Maneja el almacenamiento en caché para mejorar el rendimiento.
#### Parámetros del cuerpo (JSON):
```json
{
  "url": "https://ejemplo.com"
}
```
#### Respuesta exitosa (200 OK):
```json
{
  "response": "OK",
  "message": "Url shorted correct.",
  "data": {
    "shortUrl": "https://tu-dominio.com/abc123",
    "originalUrl": "https://github.com/diegozam-dev/url-shortener"
  }
}
```
#### Posibles errores:
* **400 Bad Request:** URL no válida.
* **429 Too Many Requests:** Se excedió el límite de solicitudes.
* **500 Internal Server Error:** Error interno del servidor.

### 2. Redirección desde la ruta principal
| Método        | Url                            | Descripción                         |
|---------------|---------------------------------|-------------------------------------|
| GET           | /:shortCode               |  Redirigir una URL corta sin necesidad de llamar directamente al endpoint de la API.      |
#### Parámetros de ruta:
* **shortCode (string):** Código de la URL corta.
#### Ejemplo de solicitud:
```sh
GET /abc123
```
#### Respuesta exitosa (301 Moved Permanently):
* Redirige a la API en /v1/api/url/redirect/:shortCode, la cual maneja la redirección final.
#### Posibles errores:
* **404 Not Found:** Código de URL no encontrado.
* **500 Internal Server Error:** Error interno del servidor.

### 3. Redireccionar una URL corta
| Método        | Url                            | Descripción                         |
|---------------|---------------------------------|-------------------------------------|
| GET           | v1/api/url/redirect/:shortCode               |  Redirigir a la URL original       |
#### Parámetros de ruta:
* **shortCode (string):** Código de la URL corta.
#### Ejemplo de solicitud:
```sh
GET v1/api/url/redirect/abc123
```
#### Respuesta exitosa (301 Moved Permanently):
* Redirige a la URL original.
#### Posibles errores:
* **404 Not Found:** Código de URL no encontrado.
* **500 Internal Server Error:** Error interno del servidor.

## 📌 Stack Tecnológico
El backend fue desarrollado utilizando las siguientes tecnologías:
* **Node.js:** Entorno de ejecución para JavaScript en el servidor.
* **Express.js:** Framework web para Node.js, utilizado para la creación de la API.
* **SQLite:** Base de datos ligera y embebida utilizada para el almacenamiento de datos.
* **TypeScript:** Superset de JavaScript que añade tipado estático, mejorando la calidad del código.
* **Git & GitHub:** Sistema de control de versiones y repositorio para el manejo del código fuente.
* **Render:** Plataforma utilizada para el despliegue de la API en producción.
* **Turso:** Servicio de base de datos distribuida basado en SQLite, utilizado para alojar la BD en la nube.
* **Visual Studio Code:** Editor de código empleado durante el desarrollo.

## 📦 Dependencias
El backend utiliza las siguientes librerías para su correcto funcionamiento:
### Dependencias de Producción
| Nombre               | Versión  |  
|----------------------|---------|  
| @libsql/client      | ^0.14.0 |  
| axios              | ^1.7.9  |  
| cors               | ^2.8.5  |  
| dotenv             | ^16.4.7 |  
| express            | ^4.21.2 |  
| express-rate-limit | ^7.5.0  |  
| node-cache         | ^5.1.2  |  
#### Dependencias de Desarrollo  
| Nombre           | Versión  |  
|-----------------|---------|  
| @types/apicache | ^1.6.7  |  
| @types/cors     | ^2.8.17 |  
| @types/express  | ^5.0.0  |  
| @types/node     | ^22.13.1 |  
| pkgroll         | ^2.8.0  |  
| tsx             | ^4.19.2 |  
| typescript      | ^5.7.3  |  

## 📂 Estructura del Backend
El backend sigue una estructura basada en Modelo-Vista-Controlador (MVC) adaptado para APIs REST, organizando el código en controladores para la lógica de las solicitudes, modelos para la base de datos y rutas para los puntos de entrada. Además, incluye middlewares para validaciones, servicios para la lógica de negocio y utils con funciones reutilizables, mejorando la modularidad y mantenibilidad del proyecto. A continuación, se describe la estructura de carpetas del backend:
```sh
backend/  
│── src/                 # Código fuente principal  
│   ├── controllers/     # Controladores que manejan la lógica de las peticiones  
│   ├── db/              # Configuración y conexión con la base de datos  
│   ├── errors/          # Definición de errores personalizados  
│   ├── middlewares/     # Middlewares para la validación, manejor de errores, etc.  
│   ├── models/          # Definición de los modelos de la base de datos y acceso a la base de datos  
│   ├── routes/          # Definición de las rutas
│   ├── services/        # Lógica de negocio
│   ├── types/           # Tipos y definiciones de TypeScript  
│   ├── utils/           # Funciones auxiliares y de utilidad  
│   ├── config.ts        # Configuración general del proyecto  
│   ├── index.ts         # Punto de entrada del servidor  
│── .env                 # Variables de entorno  
│── package.json         # Dependencias y scripts del proyecto  
│── tsconfig.json        # Configuración de TypeScript  
│── README.md            # Documentación del proyecto  

```

