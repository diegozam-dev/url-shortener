# Shortly - Frontend

### [⬅️ Inicio](../README.md)

## Índice
* [Stack Tecnológico](#📌-stack-tecnológico)
* [Dependencias](#📦-dependencias)
* [Estructura del Frontend](#📂-estructura-del-frontend)

## 📌 Stack Tecnológico
El frontend fue desarrollado utilizando las siguientes tecnologías:
* **React:** Biblioteca de JavaScript para la construcción de interfaces de usuario dinámicas.
* **Vite:** Herramienta de construcción rápida para proyectos frontend, utilizada en el desarrollo con React.
* **TypeScript:** Superset de JavaScript que añade tipado estático, mejorando la calidad del código.
* **Git & GitHub:** Sistema de control de versiones y repositorio para el manejo del código fuente.
* **Vercel:** Plataforma de hosting utilizada para desplegar el frontend.
* **Visual Studio Code:** Editor de código empleado durante el desarrollo.

## 📦 Dependencias
El frontend utiliza las siguientes librerías para su correcto funcionamiento:
### Dependencias de Producción
| Nombre                   | Versión  |
|--------------------------|---------|
| @fontsource/open-sans    | ^5.1.1  |  
| @tailwindcss/vite        | ^4.0.7  |  
| axios                    | ^1.7.9  |  
| react                    | ^19.0.0 |  
| react-dom                | ^19.0.0 |  
| react-router             | ^7.2.0  |  
| sonner                   | ^2.0.1  |  
| tailwindcss              | ^4.0.7  |  
### Dependencias de Desarrollo
| Nombre                       | Versión  |  
|------------------------------|---------|  
| @eslint/js                   | ^9.19.0 |  
| @types/react                 | ^19.0.8 |  
| @types/react-dom             | ^19.0.3 |  
| @vitejs/plugin-react-swc     | ^3.5.0  |  
| eslint                       | ^9.19.0 |  
| eslint-plugin-react-hooks    | ^5.0.0  |  
| eslint-plugin-react-refresh  | ^0.4.18 |  
| globals                      | ^15.14.0|  
| typescript                   | ~5.7.2  |  
| typescript-eslint            | ^8.22.0 |  
| vite                         | ^6.1.0  |  

## 📂 Estructura del Frontend
El frontend sigue una organización modular que facilita la escalabilidad y el mantenimiento del código. A continuación, se describe la estructura de carpetas del frontend:
```sh
frontend/  
│── public/              # Archivos estáticos (favicon, imágenes, etc.)  
│── src/                 # Código fuente principal  
│   ├── assets/          # Recursos estáticos internos (imágenes, iconos, etc.)  
│   ├── components/      # Componentes reutilizables y layouts de la interfaz de usuario  
│   ├── contexts/        # Context API para manejar estados globales  
│   ├── features/        # Componentes con funcionalidad específica
│   ├── models/          # Definición de estructuras de datos  
│   ├── services/        # Llamadas a la API y lógica de negocio  
│   ├── types/           # Tipos de datos y definiciones de TypeScript  
│   ├── utils/           # Funciones auxiliares y utilidades generales  
│   ├── App.tsx          # Componente principal de la aplicación  
│   ├── index.css        # Variables y estilos por defecto 
│   ├── main.tsx         # Renderizado principal de React  
│   ├── vite-env.d.ts    # Configuración de TypeScript para Vite  
│── .env                 # Variables de entorno  
│── eslint.config.js     # Configuración de ESLint  
│── index.html           # Archivo HTML base  
│── package.json         # Dependencias y scripts del proyecto  
│── README.md            # Documentación del proyecto  
│── tsconfig.json        # Configuración de TypeScript  
│── vite.config.ts       # Configuración de Vite  
│── vercel.json          # Configuración de despliegue en Vercel  
```

