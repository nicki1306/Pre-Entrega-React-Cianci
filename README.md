
Vite Project
Este proyecto utiliza Vite para el desarrollo de aplicaciones React. Vite es un entorno de desarrollo ultrarrápido que ofrece una experiencia de desarrollo increíblemente rápida con React.

Instalación
Antes de comenzar, asegúrate de tener Node.js instalado en tu sistema. Luego, sigue estos pasos:

Clona el repositorio:

bash
Copy code
git clone https://tu-repositorio.git
cd vite-project
Instala las dependencias:

bash
Copy code
npm install
Scripts disponibles
En el directorio del proyecto, puedes ejecutar los siguientes comandos:

Desarrollo:

bash
Copy code
npm run dev
Inicia el servidor de desarrollo. Abre http://localhost:3000 en tu navegador.

Construcción:

bash
Copy code
npm run build
Construye la aplicación para producción en la carpeta dist.

Lint:

bash
Copy code
npm run lint
Ejecuta ESLint para revisar el código y aplicar correcciones si es necesario.

Vista previa:

bash
Copy code
npm run preview
Inicia un servidor de vista previa de producción local.

Estructura del Proyecto
La estructura del proyecto es la siguiente:

src/: Contiene el código fuente de la aplicación.
public/: Contiene archivos estáticos y el archivo index.html.
Tecnologías Principales
Vite: Entorno de desarrollo rápido para construir aplicaciones React.
React: Biblioteca de JavaScript para construir interfaces de usuario.
Firebase: Plataforma de desarrollo de aplicaciones web y móviles.
Contribución
Si deseas contribuir al proyecto, sigue estos pasos:

Haz un fork del repositorio.
Crea una rama para tu contribución (git checkout -b feature/nueva-caracteristica).
Realiza tus cambios y realiza un commit (git commit -am 'Añade nueva característica').
Haz un push a la rama (git push origin feature/nueva-caracteristica).
Abre un Pull Request explicando tus cambios.
¡Gracias por contribuir!

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
