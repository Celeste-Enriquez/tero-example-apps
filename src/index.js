import express from 'express';

const app = express();

// Detecta en qué plataforma está corriendo la app
function plataforma() {
  if (process.env.VERCEL) return 'Vercel';
  if (process.env.RAILWAY_ENVIRONMENT_NAME || process.env.RAILWAY_ENVIRONMENT) return 'Railway';
  return 'otro servidor (Tero?)';
}

// Evita que el texto de SALUDO se interprete como HTML
function escapar(texto) {
  return String(texto)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function hora() {
  return new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires', hourCycle: 'h23' });
}

app.get('/', (req, res) => {
  const saludo = process.env.SALUDO
    ? escapar(process.env.SALUDO)
    : '<span class="vacio">No cargaste la variable SALUDO todavía</span>';

  res.type('html').send(`<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>App de ejemplo</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: grid;
      place-items: center;
      padding: 24px 16px;
      font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
      background: linear-gradient(135deg, #eef2ff, #fdf2f8);
      color: #1f2937;
    }
    main {
      width: 100%;
      max-width: 480px;
      background: #fff;
      border-radius: 20px;
      padding: 32px 28px;
      box-shadow: 0 10px 30px rgba(31, 41, 55, 0.08);
    }
    h1 { margin: 0 0 4px; font-size: 1.8rem; }
    .sub { margin: 0 0 24px; color: #6b7280; }
    dl { margin: 0; display: grid; gap: 16px; }
    dt { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; }
    dd { margin: 4px 0 0; font-size: 1.1rem; font-weight: 600; }
    .vacio { color: #b45309; font-weight: 500; }
  </style>
</head>
<body>
  <main>
    <h1>App de ejemplo</h1>
    <p class="sub">Si ves esta página, el deploy funcionó.</p>
    <dl>
      <div><dt>Está corriendo en</dt><dd>${plataforma()}</dd></div>
      <div><dt>Hora del servidor</dt><dd>${hora()}</dd></div>
      <div><dt>Versión de Node</dt><dd>${process.version}</dd></div>
      <div><dt>Saludo</dt><dd>${saludo}</dd></div>
    </dl>
  </main>
</body>
</html>`);
});

app.get('/api/estado', (req, res) => {
  res.json({ ok: true, plataforma: plataforma(), hora: new Date().toISOString() });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App escuchando en el puerto ${port}`);
});

export default app;
