# Travis the Coach

App web (PWA) para ver mis entrenos en el móvil, con texto grande para leer sin gafas.

## Modelo
- **Rutina**: nombre + fecha de inicio (primera sesión) + lista de entrenos.
- **Entreno**: nombre, foco y lista ordenada de ejercicios (ej. Empuje, Pierna, Tirón).
- **Ejercicio**: nombre, grupo muscular principal, y opcionalmente series, peso de referencia e indicaciones.
- **Sesión**: cada ejecución de un entreno. *No se registra en v1.*

## Estructura
```
index.html            página única
styles.css            estilos (tamaños de letra en :root)
app.js                lógica: portada + vista de entreno
data/rutinas.js       ← TUS ENTRENOS. Edita aquí.
sw.js                 funciona sin cobertura (offline)
manifest.webmanifest  permite "Añadir a pantalla de inicio"
icons/                iconos de la app
```

## Probar en el Mac
```bash
cd ~/Claude/code/travis-the-coach
python3 -m http.server 8000
```
Abre http://localhost:8000 en el navegador. `Ctrl+C` para parar.

## Publicar cambios
```bash
git add .
git commit -m "Describe el cambio"
git push
```
GitHub Pages actualiza la web del móvil en ~1 minuto.
