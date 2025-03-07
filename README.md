# Url Shortener
Shortly es una herramienta sencilla y eficaz para acortar cualquier enlace sin perder su funcionalidad original. Con un solo clic, transforma las URL largas en versiones compactas y compartibles. Solo tienes que pegar el enlace en el campo, hacer clic en «Acortar» y al instante obtendrás un enlace corto listo para compartir con tus amigos.

### [Frontend ➡️](./frontend/README.md)
### [Backend ➡️](./backend/README.md)

## 🚀 Instalación y Configuración  

Sigue estos pasos para levantar el proyecto correctamente:  

### 1. Clonar el repositorio  
```sh
git clone https://github.com/diegozam-dev/url-shortener.git
cd url-shortener
```

### 2. Instalar dependencias
Ejecuta los siguientes comandos en la raíz del proyecto para instalar las dependencias del frontend y backend:
```sh
## Instalar dependencias del Frontend
cd frontend
npm install

## Instalar dependencias del Backend
cd ../backend
npm install
```

### 3. Configurar las variables de entorno
Debes crear archivos .env en los directorios del frontend y backend, y agregar las siguientes variables de entorno. Por ejemplo:
```sh
## Variables de entorno para el Frontend
VITE_ENCODE_URL_API="http://localhost:3000"

## Variables de entorno para el Backend
API_KEY_URL_SCAN="tu-api-key-aqui"
CHECKSUM_KEY="clave-segura-generada"
TURSO_AUTH_TOKEN="token-de-autenticación"
TURSO_DATABASE_URL="libsql://tu-base-de-datos.turso.io"
NOT_FOUND_PAGE_URL="https://tu-frontend.vercel.app/404"
```

### 4. Configurar la base de datos
Puedes utilizar Turso en la nube o SQLite en local.
#### Usar Turso (Recomendado)
Si quieres usar Turso, asegúrate de haber configurado correctamente TURSO_AUTH_TOKEN y TURSO_DATABASE_URL en el archivo .env.
####  Usar SQLite en local
Si prefieres usar SQLite en tu máquina, cambia la variable TURSO_DATABASE_URL en el archivo .env:
```sh
TURSO_DATABASE_URL="file:./database.sqlite"
```
Esto creará un archivo database.sqlite en el backend y almacenará los datos localmente.

En el index.ts del backend podrías añadir el siguiente código para la creación de la tabla:
```sh
// Función para inicializar la base de datos
const initializeDatabase = async () => {
  try {
    await db.execute(`
      CREATE TABLE IF NOT EXISTS short_urls (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        original_url TEXT NOT NULL,
        short_code TEXT UNIQUE NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log("Base de datos verificada correctamente.");
  } catch (error) {
    console.error("Error al inicializar la base de datos:", error);
  }
}

// Llamar a la función antes de levantar el servidor
initializeDatabase();
```

### 5. Ejecutar el proyecto
```sh
## Levantar el Backend
cd backend
npm run dev

## Levantar el Frontend
cd frontend
npm run dev
```
Una vez que ambos servicios estén corriendo, podrás acceder a la aplicación desde el navegador. 🚀