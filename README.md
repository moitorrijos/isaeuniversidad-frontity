# ISAE Universidad con Frontity y WordPress

Este sitio está creado usando Frontity para el _frontend_ y _WordPress_ como el _backend_ y sistema de gestión de contenido.

#### Tabla de Contenidos

- [Conectar Frontity con WordPress](#conectar-frontity-wp)
- [Crear un servidor de desarrollo](#launch-a-development-server)
- [Crear un proyecto listo para producción](#create-a-production-ready-build)
- [Despelgar](#deploy)

### Cómo conectar tu proyecto Frontity con WordPress

Para conectar abre el archivo frontity.settings.js y cambiar la línea 27:

```
"url": "http://isae.test",
```

por el url de tu WordPress Local.

### Instalar todas las dependencias

Para instalar todas las dependencias de npm corre el comando:

```
npm install
```

### Cómo crear un servidor de desarrollo.

Para crear un servidor de desarrollo corre el comando:

```
npx frontity dev
```

Este corre la aplicación en modo desarrollo y abre tu navegador en la dirección http://localhost:3000.

Cada cambio que hagas en tu código, a excepción de los archivos frontity.settings.js y package.json, se verán reflejados instantáneamente en el navegador. Igualmente podrás ver errores en la consola.

> Echa un vistazo a la documentación de Frontity: [Quick Start Guide](https://docs.frontity.org/getting-started/quick-start-guide)

### Crear un sitio listo para producción

Para crear un sitio listo para producción debes correr el comando:

```
npx frontity build
```

Este comando construye la aplicación para producción dentro del carpeta `build`.

Creará un carpeta llamado `/build` dentro del cuál habrá un archivo llamado `server.js` (una [función serverless](https://vercel.com/docs/v2/serverless-functions/introduction)) y una carpeta llamada `/static` con todo el javascript y los archivos y otros activos pertinentes al proyecto.

Luego de esto la aplicación está lista para desplegar.

> Obtén más información aquí: [Frontity's architecture](https://docs.frontity.org/architecture)

### Desplegar

Con los archivos generados en el paso de construcción podrás desplegar tu proyecto:

#### Como una aplicación de Node

Corre el comando `npx frontity serve` para que el sistema arranque un servidor de Node.

Este comando genera (y corre) a pequeño servidor web que utiliza el código generado en el comando `build`, el archivo `server.js` y el carpeta `/static` para servir tu contenido.

#### Como un servicio Serverless

Simplemente carga tu carpeta `static` a un CDN y tu `server.js` a un servicio serverles como Now o Netlify.

> Obtén más información de [cómo desplegar un proyecto de Frontity.](https://docs.frontity.org/deployment).
