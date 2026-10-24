# App de ejemplo

Una app web chiquita para practicar deploys. Cuando la abrís, te muestra:

- en qué plataforma está corriendo (Vercel, Railway u otro servidor, como Tero),
- la hora del servidor,
- la versión de Node,
- el texto de la variable `SALUDO`, si la cargaste.

También tiene una dirección `/api/estado` que devuelve lo mismo en formato JSON.

## Probarla en tu compu

1. Abrí una terminal en esta carpeta.
2. Instalá lo necesario (solo la primera vez):

   ```bash
   npm install
   ```

3. Prendé la app:

   ```bash
   npm run dev
   ```

4. Abrí [http://localhost:3000](http://localhost:3000) en el navegador.

Para apagarla, volvé a la terminal y apretá `Ctrl + C`.

Si querés probar el saludo en tu compu:

```bash
SALUDO="Hola desde mi compu" npm run dev
```

## Subirla a Railway

1. Entrá a [railway.com](https://railway.com) e iniciá sesión con tu cuenta de GitHub.
2. Tocá **New Project** → **Deploy from GitHub repo** y elegí este repo.
3. Esperá a que termine el deploy.
4. Andá a **Settings** → **Networking** → **Generate Domain** para tener una dirección pública.
5. Abrí esa dirección: tendría que decir "Railway".

**Cargar `SALUDO`:** entrá al servicio → pestaña **Variables** → **New Variable**. Nombre `SALUDO`, valor el texto que quieras. Railway vuelve a publicar la app solo.

## Subirla a Vercel

1. Entrá a [vercel.com](https://vercel.com) e iniciá sesión con tu cuenta de GitHub.
2. Tocá **Add New…** → **Project** y elegí este repo con **Import**.
3. No cambies nada de la configuración y tocá **Deploy**.
4. Cuando termine, abrí la dirección que te da: tendría que decir "Vercel".

**Cargar `SALUDO`:** en el proyecto andá a **Settings** → **Environment Variables**. Nombre `SALUDO`, valor el texto que quieras, y guardá. Después andá a **Deployments**, tocá los tres puntitos del último y elegí **Redeploy** para que tome el cambio.
