# Señas que enseñan · Publicación en GitHub Pages

Este paquete contiene el OVA completo, listo para un repositorio de GitHub. No requiere instalar Node.js, ejecutar npm ni compilar archivos.

## 1. Preparar los archivos

1. Descomprime `senas-que-ensenan-github.zip` en tu computador.
2. Comprueba que ves `index.html`, `upgrade.css`, los archivos JavaScript, `final-polish.css` y `kit-aula.html`.
3. Conserva los nombres y todos los archivos juntos. Las mayúsculas y minúsculas importan.

## 2. Subir al repositorio

1. Entra a GitHub y crea o abre el repositorio que usarás para este OVA.
2. Selecciona **Add file → Upload files**.
3. Arrastra el contenido descomprimido del paquete. Sube los archivos, no únicamente el ZIP.
4. Comprueba que `index.html` queda directamente en la raíz del repositorio. No lo dejes dentro de una carpeta adicional llamada `dist` o del nombre del ZIP.
5. Selecciona **Commit changes**.

Si usas Git desde tu computador, también puedes copiar estos archivos a la raíz de tu repositorio y hacer commit y push de la forma habitual. Este paquete no incluye credenciales ni la configuración privada del alojamiento anterior.

## 3. Activar Pages

1. Ve a **Settings → Pages**.
2. En **Build and deployment**, elige **Source: Deploy from a branch**.
3. Selecciona la rama donde subiste los archivos, normalmente `main`.
4. Selecciona **/(root)** y guarda con **Save**.
5. Espera a que GitHub muestre la dirección del sitio. Si aparece una ejecución pendiente, revisa la pestaña **Actions**.
6. Abre la URL que GitHub te entregue. En un repositorio de proyecto suele tener esta forma: `https://TU-USUARIO.github.io/TU-REPOSITORIO/`.

El OVA utiliza rutas relativas y navegación con `#`, por lo que funciona en la subcarpeta del repositorio sin configurar una URL base.

## 4. Comprobar después de publicar

- Abre Inicio, Aprende a incluir, Primeras señas, Prepara tu clase, Mi plan y Mediateca.
- En celular, abre el menú ☰ y recorre las secciones.
- Busca «baño» o «comer» y prueba su demostración.
- Marca una favorita; usa «Solo mis favoritas» para encontrarla.
- Escribe un tema en Prepara tu clase, cambia de paso y vuelve para comprobar el guardado.
- Genera un borrador y prueba Descargar plan e Imprimir / PDF.
- Abre el kit imprimible desde la Mediateca.
- Prueba A+, contraste y modo enfoque.
- En «Mi avance», descarga un respaldo; en el otro dispositivo, usa Abrir un respaldo y confirma su recuperación.

## 5. Cómo funciona el guardado

El plan, la bitácora, las prácticas y las favoritas se guardan en el navegador que utilizas. No hay base de datos ni envío de respuestas a las autoras. El avance de la versión privada y el de GitHub Pages son independientes porque son direcciones distintas. Usa el respaldo de «Mi avance» para trasladar el progreso.

Los respaldos pueden contener los textos que escribas en el plan o las notas. No incluyas datos personales de estudiantes. La opción de recuperar un respaldo avisa antes de reemplazar el avance local.

El acceso con ChatGPT pertenece al alojamiento privado anterior: no se transfiere a GitHub Pages. El acceso al nuevo sitio dependerá de la configuración y las posibilidades de tu cuenta de GitHub; este paquete no incluye autenticación propia.

## 6. Videos y conexión

Las demostraciones de INSOR y de la Universidad Nacional se reproducen desde sus fuentes. No están descargadas dentro del ZIP. Requieren conexión y dependen de la disponibilidad del proveedor. Cada recurso ofrece un enlace a la fuente o al video como alternativa.

Puedes abrir `index.html` directamente para una revisión básica local; para utilizar el sitio habitualmente, publica el paquete en Pages o en un servidor web. No se ofrece una aplicación instalable ni un servicio de sincronización automática.

## 7. Si aparece un error

**404 en la portada:** revisa la rama y que `index.html` esté en `/(root)`, con ese nombre en minúsculas.

**Sin diseño o botones:** comprueba que subiste TODOS los archivos CSS y JS, conserva los nombres y recarga la página. No renombres archivos de forma aislada.

**Un video no carga:** comprueba la conexión, usa Abrir video o Consultar fuente y revisa la disponibilidad del proveedor. Las restricciones del navegador o del servicio externo pueden afectar el reproductor integrado.

**No aparece el avance:** revisa que estás en el mismo navegador y la misma URL. El modo privado, borrar datos del navegador o cambiar de dirección no conserva el mismo almacenamiento. Recupera un respaldo si cuentas con él.

## Archivos principales

| Archivo | Función |
| --- | --- |
| `index.html` | Entrada y funciones base del OVA. |
| `upgrade.css` / `upgrade.js` | Diseño y recursos educativos generales. |
| `teacher-training.js` | Taller de siete pasos para preparar la clase. |
| `signs-data.js` | Metadatos y fuentes de las señas adicionales. |
| `lsc-expanded.js` | Repertorio de 61 señas, búsqueda y práctica. |
| `final-polish.css` / `final-polish.js` | Navegación adaptable, favoritas, ajustes de lectura y respaldo del avance. |
| `kit-aula.html` | Fichas imprimibles. |
| `.nojekyll` | Evita procesamiento innecesario de Jekyll en Pages. |
| `FUENTES_Y_ALCANCE.md` | Atribuciones y alcance pedagógico. |

Documentación oficial de GitHub:
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
