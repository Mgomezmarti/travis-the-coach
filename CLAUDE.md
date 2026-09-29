# Travis the Coach — contexto para Claude Code

App personal de entrenos de María. PWA estática (HTML/CSS/JS puro, sin build, sin dependencias),
publicada con GitHub Pages desde la rama `main`.

## Principios de producto
- Se usa en el gimnasio SIN GAFAS (presbicia): el texto grande es el requisito nº1.
  Nunca bajar de 19px; nombre de ejercicio ≥30px; objetivos táctiles ≥64px.
- Paleta: fondo #f5f0e8, texto #1a1a1a, acento terracota #b4441f. Alto contraste.
- Idioma de la interfaz: español.
- Sin frameworks ni build mientras no haga falta. Todo debe funcionar abriendo index.html servido estáticamente.

## Dominio
Rutina (fechaInicio) → Entrenos → Ejercicios (nombre, grupo, series?, peso?, indicaciones?).
Sesión = una ejecución de un entreno. v1 NO registra sesiones: el usuario elige el entreno del día en portada.

## Datos
`data/rutinas.js` define `window.RUTINAS`. Es el archivo que María edita a mano.

## Al cambiar archivos cacheados
Sube la versión de `CACHE` en `sw.js` (travis-v1 → travis-v2) si cambias la lista de archivos.

## Roadmap (ideas, no comprometido)
- v2: registrar sesiones (peso real usado, reps) en localStorage.
- Importar entrenos pegando texto libre.
- Varias rutinas y cambiar la activa.
