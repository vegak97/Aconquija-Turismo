# Registro de cambios — Aconquija React

Zona horaria: Argentina (UTC-03:00).

## 2026-10-10

### 18:53:50 -03:00
- **Archivo afectado:** `agents.md` (ubicación original en la raíz del repositorio).
- **Cambio:** creación del archivo con reglas para solicitar permisos antes de modificar el proyecto, respetar el alcance autorizado, proteger el sitio original y registrar cada cambio.
- **Motivo:** establecer el procedimiento de trabajo solicitado por el usuario.
- **Autorización:** petición directa del usuario del 2026-10-10.
- **Resultado:** completado; archivo creado originalmente en la raíz.

### 18:53:58 -03:00
- **Archivo afectado:** `Registro.mp` (ubicación original en la raíz del repositorio).
- **Cambio:** creación del registro inicial para documentar cambios del proyecto.
- **Motivo:** cumplir la regla solicitada de dejar constancia obligatoria de todos los cambios con fecha y hora.
- **Autorización:** petición directa del usuario del 2026-10-10.
- **Resultado:** completado; archivo creado originalmente en la raíz.

### 19:08:53 -03:00
- **Archivo afectado:** `agents.md` (ubicación original en la raíz del repositorio).
- **Cambio:** se aclararon las reglas para indicar que una petición directa autoriza únicamente el cambio pedido y los pasos estrictamente necesarios; cualquier modificación adicional no prevista o que exceda el alcance autorizado requiere notificar al usuario y obtener permiso antes de ejecutarla.
- **Motivo:** incorporar la aclaración solicitada por el usuario sobre cambios adicionales no contemplados y necesidades imprevistas durante el trabajo.
- **Autorización:** petición directa del usuario del 2026-10-10.
- **Resultado:** completado; reglas actualizadas en la ubicación original.

### 19:24:48 -03:00
- **Archivos afectados:** `Aconquija-react/agents.md`, `Aconquija-react/Registro.md`, `agents.md`, `Registro.mp`.
- **Cambio:** se trasladaron las reglas de agentes a `Aconquija-react/agents.md`; se convirtió el registro de `Registro.mp` a Markdown y se ubicó como `Aconquija-react/Registro.md`; se actualizaron las reglas para apuntar al nuevo registro dentro de la carpeta React; se retiraron las versiones antiguas de la raíz para evitar duplicados.
- **Motivo:** organizar los documentos de instrucciones y registro junto al proyecto React, como solicitó el usuario.
- **Autorización:** petición directa del usuario del 2026-10-10.
- **Resultado:** completado y verificado; `Aconquija-react/agents.md` y `Aconquija-react/Registro.md` existen en sus nuevas rutas. Se confirmó que las rutas antiguas `agents.md` y `Registro.mp` ya no existen en la raíz.

### 19:44:37 -03:00
- **Archivo afectado:** `Aconquija-react/Metodologia.md`.
- **Cambio:** se creó el documento de metodología con objetivo, reglas obligatorias, criterios de migración, fases de inventario, preparación de React, recursos y estilos, migración de la página principal, adaptación de interacciones, migración de páginas secundarias, pruebas, preparación de publicación y listas de verificación.
- **Motivo:** conservar el plan completo de migración para trabajar por etapas y evitar omisiones.
- **Autorización:** petición directa del usuario del 2026-10-10.
- **Resultado:** completado; documento creado en la carpeta del proyecto React. La creación del plan no autoriza por sí misma a ejecutar las etapas de migración.

### 19:55:21 -03:00
- **Archivos afectados:** `Aconquija-react/Metodologia.md`, `Aconquija-react/Registro.md`.
- **Cambio:** se añadió un anexo con el inventario remoto inicial: archivos principales, páginas secundarias encontradas, interacciones detectadas y rutas/archivos pendientes de verificación. Esta entrada registra la actualización del inventario y del propio registro.
- **Motivo:** documentar la primera fase de diagnóstico antes de planificar cambios en el código y mantener la trazabilidad del proyecto.
- **Autorización:** permiso explícito del usuario en la conversación del 2026-10-10 para actualizar `Metodologia.md` con los hallazgos y registrar el cambio en `Registro.md`.
- **Resultado:** inventario inicial documentado como parcial; no se modificaron archivos de código ni el sitio HTML/CSS/JavaScript original. No se ejecutaron pruebas del sitio.

### 21:33:00 -03:00
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio:** se actualizó la lista de tareas de la Fase 0; se corrigieron las notas de verificación que habían quedado desactualizadas tras la confirmación del usuario; se documentó que las referencias a `js/atractivos.js` y a determinados HTML inexistentes son restos obsoletos; se añadió la tabla inicial de correspondencia para las 16 páginas originales, los recursos comunes, los componentes reutilizables candidatos y las interacciones que deben conservarse.
- **Motivo:** dejar documentado el diagnóstico y la propuesta de correspondencia entre el sitio original y la futura aplicación React.
- **Autorización:** autorización explícita del usuario en esta conversación el 2026-10-10 para modificar únicamente estos dos documentos, sin tocar el sitio original ni iniciar la Fase 1.
- **Resultado:** actualización documental realizada en la rama `main`. La Fase 0 queda parcialmente documentada; continúan pendientes el inventario detallado de imágenes, la auditoría exhaustiva de enlaces y las comprobaciones visuales/funcionales. No se ejecutaron pruebas de la aplicación ni se modificó código fuente.

### 2026-10-10 22:02:07 -03:00
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio:** se añadió a la metodología el Anexo C con el resultado de una revisión preliminar de referencias locales en las 16 páginas HTML originales; se documentaron siete destinos comprobados como inexistentes y otras rutas sospechosas pendientes de validación. Se registró esta actualización.
- **Motivo:** continuar la Fase 0, haciendo visibles las incidencias detectadas antes de diseñar la estructura React.
- **Autorización:** autorización explícita del usuario en la conversación del 2026-10-10 para actualizar únicamente estos dos documentos con los hallazgos de la revisión.
- **Resultado:** actualización documental en la rama `main`. No se modificaron archivos del sitio original ni código React; no se ejecutaron pruebas visuales ni funcionales. La auditoría sigue siendo parcial y la Fase 1 no comenzó.


### 2026-10-10 22:37:00 -03:00
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio:** se agregó el Anexo D a la metodología con referencias de imágenes problemáticas, rutas que resuelven a `html/imagenes/`, extensiones diferentes a las disponibles y archivos exactos no encontrados. Se incluyeron páginas y números de línea para facilitar la revisión.
- **Motivo:** responder a la solicitud del usuario de identificar exactamente dónde están las referencias de imágenes con rutas o extensiones que no coinciden, y aclarar cómo se resuelven las rutas relativas.
- **Autorización:** autorización explícita del usuario en la conversación del 2026-10-10 para actualizar estos dos documentos. El usuario aclaró que utilizó `../../` para retroceder a la carpeta de imágenes.
- **Resultado:** documentación actualizada en la rama `main`. No se modificaron páginas HTML originales, CSS, imágenes ni archivos React. No se ejecutaron pruebas de navegador; el diagnóstico de rutas es estático y queda pendiente confirmar visualmente las imágenes pretendidas.


### 2026-10-10 22:40:00 -03:00
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio:** se corrigió el conteo de referencias a `imagenes/planetario/noche.jpeg` (once apariciones) y la descripción de los grupos de páginas que referencian `chica.PNG`. Se registra esta precisión documental.
- **Motivo:** asegurar que el detalle de la auditoría y sus cantidades coincidan con las referencias localizadas.
- **Autorización:** incluida en la autorización explícita del usuario del 2026-10-10 para actualizar estos dos documentos con los hallazgos de la auditoría.
- **Resultado:** precisión documental actualizada. No se modificó código ni el sitio original y no se ejecutaron pruebas de navegador.


- 2026-10-10T23:10:59 -03:00: Se eliminó únicamente la etiqueta visual «Seguí explorando» de 11 páginas HTML en `html/tercer_nivel/`. Se conservó íntegra la sección «También te puede interesar» (título y tarjetas/enlaces). Autorización: solicitud explícita del usuario. No se modificaron imágenes, rutas, estilos ni el resto del contenido. Resultado: cambios aplicados en los 11 HTML identificados; pendiente de verificación final de todas las páginas.

## 2026-10-11

### 01:25:41 -03:00
- **Archivos afectados:** instalación local de dependencias en `aconquija-react`; el registro remoto `Aconquija-react/Registro.md`.
- **Cambio:** se ejecutó correctamente `npm.cmd install react-router-dom` desde la carpeta local `aconquija-react`. npm informó que agregó 4 paquetes, auditó 29 paquetes y encontró 0 vulnerabilidades.
- **Motivo:** incorporar React Router, elegido para gestionar las rutas de la futura aplicación React.
- **Autorización:** autorización explícita del usuario en la conversación del 2026-10-11 para instalar `react-router-dom` dentro de `aconquija-react` y registrar el cambio.
- **Resultado:** instalación local completada según la salida de la terminal compartida por el usuario. La sincronización de `aconquija-react/package.json` y `aconquija-react/package-lock.json` con GitHub queda pendiente; todavía no se verificó la dependencia con `npm.cmd ls react-router-dom` ni se ejecutaron pruebas de la aplicación. No se modificó el código fuente de la aplicación ni el sitio HTML/CSS/JavaScript original.

### 2026-10-11 02:03:13 -03:00
- **Archivos afectados:** directorios y archivos marcadores dentro de `aconquija-react/src/`; `Aconquija-react/Registro.md`.
- **Cambio:** creación de las carpetas `components/layout`, `components/home`, `components/ui`, `pages/second-level`, `pages/third-level`, `data` y `styles`. Se añadieron siete archivos `.gitkeep` para conservar la estructura vacía en Git.
- **Motivo:** organizar los futuros componentes, páginas, datos y estilos de la aplicación React.
- **Autorización:** permiso explícito del usuario en la conversación del 2026-10-11.
- **Resultado:** estructura de directorios y archivos marcadores creados localmente y verificados mediante PowerShell. No se modificaron archivos de código ni el sitio HTML/CSS/JavaScript original.

### 2026-10-11 02:26:10 -03:00
- **Archivos afectados:** `Aconquija-react/Registro.md`; organización de directorios y archivos marcadores bajo `aconquija-react/src/`; sincronización previa de `aconquija-react/package.json` y `aconquija-react/package-lock.json`.
- **Cambio:** se confirma que la instalación de `react-router-dom` y sus archivos de dependencia quedaron sincronizados con GitHub en el commit `94c9270`. Se crearon las carpetas `components/layout`, `components/home`, `components/ui`, `pages/second-level`, `pages/third-level`, `data` y `styles` dentro de `aconquija-react/src/`; se añadieron siete archivos `.gitkeep` para que Git conserve los directorios vacíos. Se corrigió la última entrada de este registro para restaurar sus tildes y la ruta `aconquija-react/src/`, y se añadió el salto de línea final.
- **Motivo:** dejar trazabilidad de la preparación inicial de React Router y de la estructura de carpetas, y corregir una nota que había quedado desactualizada sobre la sincronización de dependencias. Registrar también el ajuste de codificación de la última entrada para facilitar el diagnóstico de problemas similares.
- **Autorización:** autorización explícita del usuario en la conversación del 2026-10-11 para instalar `react-router-dom`, crear la estructura de carpetas y documentar los cambios.
- **Resultado:** commit `3ee577b` (`Organiza la estructura inicial de carpetas React`) creado localmente y enviado correctamente a `origin/main`; GitHub confirmó la actualización de `94c9270` a `3ee577b`. La revisión previa confirmó que solo se prepararon el registro y los siete archivos `.gitkeep`. `git diff --check` no informó errores de espacios; mostró únicamente una advertencia sobre la conversión de finales de línea LF/CRLF. No se modificaron `App.jsx`, `App.css`, `index.css`, `main.jsx` ni el sitio HTML/CSS/JavaScript original. No se ejecutaron pruebas de la aplicación.

### 2026-10-11 18:00:00 -03:00
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio:** se añadió el Anexo E a la metodología con el inventario local confirmado de 14 páginas bajo `html/` más `index.html` en la raíz (15 páginas incluidas); la exclusión explícita de `html/tercer_nivel/el_charquiadero.html`; una tabla inicial de rutas React propuestas; reglas para auditar los `href`, aprobar la tabla definitiva, organizar páginas/componentes, definir una ruta 404 y seguir la secuencia planificación → revisión → autorización → implementación → pruebas → migración.
- **Motivo:** mantener un plan de rutas claro y evitar que se cambie la estructura o el alcance durante la migración sin revisión y autorización.
- **Autorización:** petición explícita del usuario del 2026-10-11 para incorporar la planificación de rutas a la metodología y usar la salida de PowerShell como inventario.
- **Resultado:** la metodología se actualizó en GitHub mediante el commit `efa8c3cfb06b25362cb03bed77184b02b1da762e`. Las rutas siguen marcadas como propuestas, pendientes de contrastar con los enlaces reales. No se modificó código React ni el sitio original, no se implementaron rutas y no se ejecutaron pruebas. La actualización remota del registro documenta este cambio; queda pendiente que el usuario sincronice estos commits con su copia local.

### 2026-10-11 03:49:00 -03:00
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio:** se añadió el Anexo F con hallazgos de la salida de PowerShell que inspecciona los atributos `href` de las cuatro páginas de segundo nivel. Se documentaron rutas a páginas inventariadas, referencias a destinos no inventariados, una ruta aparentemente mal formada y discrepancias aparentes en enlaces de contacto, junto con un procedimiento para verificarlas.
- **Motivo:** conservar cualquier información útil para la migración en la metodología y evitar olvidar incidencias antes de aprobar las rutas React.
- **Autorización:** solicitud explícita del usuario del 2026-10-11 para añadir a la metodología cualquier hallazgo útil para la migración y usar la salida de terminal compartida.
- **Resultado:** actualización documental en GitHub. Los hallazgos son observaciones estáticas y quedan pendientes de verificación; no se corrigió el sitio original, no se modificó código React y no se ejecutaron pruebas de navegador.

### 2026-10-11 19:00:00 -03:00
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio:** se añadió el Anexo G a la metodología con hallazgos de la auditoría estática de los atributos `href` en las diez páginas de tercer nivel: navegación hacia la página principal y sus secciones, enlaces entre páginas, un destino HTML no inventariado (`cabalgatas de pirca.html)), recursos y servicios externos, y discrepancias aparentes entre teléfonos y destinos de WhatsApp.
- **Motivo:** conservar los hallazgos útiles para la migración, preparar el mapa de rutas y evitar que los destinos dudosos o datos de contacto se corrijan por suposición.
- **Autorización:** petición explícita del usuario de documentar en la metodología la información útil para la migración; la salida de PowerShell fue compartida el 2026-10-11.
- **Resultado:** la metodología se actualizó en GitHub mediante el commit `94b5424dcf9b576f3bb7cadd9b398f9cbd4ddc37`. Los hallazgos permanecen pendientes de verificación. No se modificó el sitio HTML/CSS/JavaScript original ni el código React, no se implementaron rutas y no se ejecutaron pruebas de navegador.

### 2026-10-11 19:53:00 -03:00
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio:** se añadió el Anexo H a la metodología: decisión del usuario de organizar las rutas por categoría (`/experiencias/...`, `/lugares/...`, `/eventos/...`), revisión estática inicial de la página principal `index.html` (página 1 de 15) y procedimiento para revisar las restantes páginas antes de aprobar el mapa definitivo.
- **Motivo:** convertir la preferencia acordada en un criterio explícito de migración y registrar los hallazgos para no perderlos durante las siguientes etapas.
- **Autorización:** petición explícita del usuario en la conversación del 2026-10-11 para revisar las 15 páginas y documentar los hallazgos útiles en `Metodologia.md` y los cambios en `Registro.md`; elección expresa de la opción A para el estilo de rutas.
- **Resultado:** documentación actualizada en GitHub. Las rutas individuales siguen pendientes de revisión y aprobación. No se modificó código React ni el sitio HTML/CSS/JavaScript original; no se implementaron rutas ni se ejecutaron pruebas de navegador.

### 2026-10-11 19:53:23 -03:00
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio:** se añadió el Anexo I con la revisión estática de `html/segundo_nivel/aconquija_respira_verde.html` (página 2 de 15), una ruta React candidata `/experiencias/respira-verde`, sus enlaces a páginas inventariadas y los destinos dudosos/no inventariados `Cruce de los Nevados.html`, `lugares/cabalgatas.html` y `lugares/senderismo.html`.
- **Motivo:** revisar las páginas ordenadamente, separar destinos válidos de referencias que requieren confirmación y conservar todos los hallazgos útiles para la migración.
- **Autorización:** petición explícita del usuario del 2026-10-11 para revisar las 15 páginas, documentar los hallazgos en `Metodologia.md` y registrar los cambios en `Registro.md`; decisión expresa de usar rutas agrupadas por categoría.
- **Resultado:** documentación actualizada en GitHub. La ruta propuesta sigue siendo provisional y los enlaces dudosos permanecen sin resolver. No se modificó código React ni el sitio original; no se implementaron rutas ni se ejecutaron pruebas.


### 2026-10-11 20:04:00 -03:00
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio:** se añadió el Anexo J a la metodología con la revisión estática de `html/segundo_nivel/cultiva_tradicion.html` (página 3 de 15). Se documentó como ruta React candidata `/experiencias/cultiva-tradicion`, los enlaces a las páginas inventariadas de Fiesta del Bandoneón, Festival Mayor y Desfile Cívico, y nueve destinos `lugares/...` que no forman parte del inventario vigente.
- **Motivo:** continuar la revisión secuencial de las 15 páginas, guardar hallazgos útiles para el mapa de rutas y evitar convertir enlaces no verificados en rutas definitivas.
- **Autorización:** petición explícita del usuario del 2026-10-11 para revisar las 15 páginas y documentar los hallazgos útiles en `Metodologia.md` y cada cambio en `Registro.md`; elección expresa de rutas agrupadas por categoría.
- **Resultado:** metodología actualizada en GitHub mediante el commit `bf04b9f40a848146d860aae2004cca319d36e5d0`. Esta entrada registra la actualización documental. La ruta candidata sigue pendiente de aprobación y los destinos no inventariados quedan sin resolver. No se modificó código React ni el sitio original, no se implementaron rutas y no se ejecutaron pruebas de navegador.


### 2026-10-11 20:10:00 -03:00
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio:** se añadió el Anexo K a la metodología con la revisión estática de `html/segundo_nivel/noches_estrelladas.html` (página 4 de 15). Se documentó la ruta candidata `/lugares/planetario-janaxpacha-huasi`, el destino sospechoso `....//index.html#lugares`, una referencia de correo aparentemente mal formada y los principales recursos locales.
- **Motivo:** continuar la revisión secuencial de las páginas originales y registrar incidencias sin corregirlas por suposición ni empezar la implementación antes de aprobar el mapa definitivo.
- **Autorización:** petición explícita del usuario del 2026-10-11 para revisar las 15 páginas y documentar los hallazgos útiles en `Metodologia.md` y cada cambio en `Registro.md`; elección expresa de rutas agrupadas por categoría.
- **Resultado:** metodología actualizada en GitHub mediante el commit `67a5db23ef3da03ad58f55f6730a600f6ba6648d`. Registro actualizado en este commit. La ruta candidata y las incidencias quedan pendientes de validación; no se modificó código React ni el sitio original, no se implementaron rutas y no se ejecutaron pruebas de navegador.


### 2026-10-11 — Confirmación de ruta y correcciones reportadas para el planetario
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio:** se actualizó el Anexo K para registrar que el usuario informa haber corregido los problemas de `html/segundo_nivel/noches_estrelladas.html` y aprueba la ruta `/lugares/planetario-janaxpacha-huasi`.
- **Estado de verificación:** las correcciones fueron reportadas por el usuario, pero todavía no se volvió a inspeccionar el HTML para comprobarlas. No se da por verificada su resolución.
- **Estado de la ruta:** aprobada para la página del planetario; el mapa completo de las 15 páginas continúa pendiente de aprobación.
- **Resultado:** metodología actualizada mediante el commit `6413d67ea507c6e68f2dc1dfc089b2abd5a0971c`. No se modificó código React ni se implementaron rutas.


### 2026-10-11 — Revisión de página 5: Pucará de Aconquija
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio:** se añadió el Anexo L con la revisión estática de `html/segundo_nivel/pucara_aconquija.html` (599 líneas). Se propuso la ruta `/lugares/pucara-de-aconquija`, aún pendiente de aprobación.
- **Hallazgos registrados:** contenido de sitio arqueológico, enlaces de navegación, galería y lightbox, referencias a imágenes/CSS/JS, y posibles discrepancias entre los textos visibles y los destinos `tel:` y `mailto:`. No se modificaron los datos de contacto porque requieren confirmación.
- **Motivo y autorización:** continuar la revisión secuencial de las 15 páginas y documentar los hallazgos en ambos archivos antes de implementar rutas. Se mantiene la decisión del usuario de agrupar rutas por categoría y no tocar código hasta aprobar el mapa definitivo.
- **Resultado:** metodología actualizada mediante el commit `6d71a3986513086884251494de1a73c9dad8d641`. No se modificó código React ni el sitio original; no se implementaron rutas ni se ejecutaron pruebas de navegador.


### 2026-10-11 — Aprobación de ruta de Pucará de Aconquija
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio:** se actualizó el Anexo L para reflejar que el usuario aprobó expresamente la ruta `/lugares/pucara-de-aconquija`.
- **Alcance:** queda aprobada la ruta individual de Pucará; el mapa completo de las 15 páginas sigue pendiente. No se modificó código React ni se implementó la ruta.
- **Resultado:** metodología actualizada mediante el commit `e2d3cdd924128765b42cf0c07eee2b8b95348817`. Registro actualizado en este commit.


### 2026-10-11 — Página 6: Respira Verde
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio:** se documentó la revisión estática de `html/segundo_nivel/aconquija_respira_verde.html` (400 líneas) en el Anexo M. Ruta candidata propuesta: `/circuitos/respira-verde`, pendiente de aprobación.
- **Hallazgos:** se inventariaron enlaces a atractivos, referencias a imágenes y recursos compartidos, posibles destinos relativos incorrectos para Cabalgatas y Senderismo, una tarjeta sin título y una tarjeta de Bosque de Alisos repetida.
- **Alcance:** no se modificó código React ni el sitio original. No se implementaron rutas ni se ejecutaron pruebas de navegador.
- **Resultado:** metodología actualizada mediante el commit `7a085a2322da8bc6d9a2007960226c2e6ba04b8d`.


### 2026-10-11 — Aprobación de ruta y aclaración sobre tarjetas de Respira Verde
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio:** se actualizó el Anexo M para marcar `/circuitos/respira-verde` como ruta aprobada para esta página y se añadió la aclaración del usuario sobre las tarjetas.
- **Aclaración funcional/editorial:** las tarjetas se conservan como están mientras se definen sus destinos concretos. La repetición de Bosque de los Alisos es intencional y sirve como referencia visual; no debe eliminarse ni considerarse un error. No se inventan ni implementan rutas para cada tarjeta en esta etapa.
- **Alcance:** únicamente documentación. No se modificó código React ni el sitio original, no se implementaron rutas y el mapa global de 15 páginas sigue pendiente de aprobación.
- **Resultado:** metodología actualizada mediante el commit `6896ad5390154081725f3f99faa3a2f765c1085e`. Registro actualizado en este commit.


### 2026-10-11 — Página 7: Balneario Municipal Buena Vista
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio:** se añadió el Anexo N con la revisión estática de `html/tercer_nivel/balneario_buena_vista.html) y se propone provisionalmente `/lugares/balneario-municipal-buena-vista`.
- **Hallazgos:** contenido de pileta municipal y recreación familiar; referencias a imágenes, CSS y JavaScript; galería/lightbox, barra de progreso y acciones para compartir; discrepancias entre los destinos de WhatsApp y datos de contacto genéricos; detalles estructurales a verificar en el encabezado y en los iconos.
- **Alcance:** no se modificó código React ni el sitio original. La ruta queda pendiente de aprobación; no se implementó ninguna ruta ni se ejecutaron pruebas de navegador.
- **Resultado:** metodología actualizada mediante el commit 04d99dae37dbd7d018ccfd5a80530125b14f106e. Registro actualizado en este commit.


### 2026-10-11 — Aprobación de ruta: Balneario Municipal Buena Vista
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio:** se actualizó el Anexo N para marcar `/lugares/balneario-municipal-buena-vista` como ruta aprobada por el usuario.
- **Alcance:** la aprobación corresponde solo a esta página; el mapa global de las 15 páginas continúa pendiente. No se modificó código React ni se implementó la ruta.
- **Resultado:** metodología actualizada mediante el commit 7edc5512b0b7309c3b2d63f571ee0b3f4f959d0c. Registro actualizado en este commit.


### 2026-10-11 — Página 8: Bosque de Alisos
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio:** se añadió el Anexo O con la revisión estática de `html/tercer_nivel/bosque_de_alisos.html). Se propone provisionalmente la ruta `/lugares/bosque-de-alisos`.
- **Hallazgos:** relación del atractivo individual con el circuito Respira Verde; una extensión `.webo` sospechosa en la imagen hero, dos imágenes con `src=""`, referencias `data-full=""`, diferencias de extensión en logotipos, datos de contacto genéricos y detalles estructurales del encabezado por verificar.
- **Alcance:** solo documentación. No se modificó código React ni el sitio original; la ruta está pendiente de aprobación y no se implementó.
- **Resultado:** metodología actualizada mediante el commit 6aadc38a1a2337875553c0b7fde9b0f326c5a087. Registro actualizado en este commit.


### 2026-10-11 — Aprobación de ruta y criterio de contacto/redes sociales
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio:** se marcó como aprobada la ruta `/lugares/bosque-de-alisos` para `html/tercer_nivel/bosque_de_alisos.html` y se añadió un criterio transversal para la migración.
- **Autorización:** el usuario aprobó la ruta y aclaró que los datos de contacto y redes sociales —correo electrónico/Gmail, teléfono, WhatsApp, Instagram, Facebook, TikTok y otros canales— deben extraerse de `index.html`.
- **Regla acordada:** `index.html` será la referencia principal para esos datos; si una página interior difiere, prevalece `index.html`. No inventar datos ausentes ni alterar el HTML original durante la auditoría. Los mapas específicos de atractivos se evalúan por separado.
- **Alcance:** únicamente documentación. No se modificó código React ni el sitio original, no se implementó la ruta y el mapa global de las 15 páginas sigue pendiente de aprobación.
- **Resultado:** metodología actualizada mediante el commit a1563118e7853c7ff9a56b7a540ac6ece92111a9. Registro actualizado en este commit.


### 2026-10-11 — Página 9: Cristo Redentor de Aconquija
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio:** se añadió el Anexo P con la revisión estática de `html/tercer_nivel/cristo_redentor.html` y se propone provisionalmente la ruta `/lugares/cristo-redentor`.
- **Hallazgos:** mirador en El Lindero, recorrido corto y acceso libre; tres rutas de imagen relativas que parecen apuntar a una ubicación incorrecta y atributos `data-full=""`; imagen ilustrativa externa; extensiones de logotipos distintas; estructura de encabezado e iconos que requieren verificación.
- **Contacto/redes:** se aplicó el criterio confirmado por el usuario de tomar los datos generales de contacto y perfiles sociales de `index.html`, sin reutilizar automáticamente los valores locales de esta página.
- **Alcance:** solo documentación. No se modificó código React ni el sitio original; la ruta queda pendiente de aprobación y no se implementó. No se ejecutaron pruebas de navegador.
- **Resultado:** metodología actualizada mediante el commit 345b0415f7c1560480ea5fd8d77988d612318da7. Registro actualizado en este commit.


### 2026-10-11 — Criterio de imágenes retiradas
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Aclaración del usuario:** las referencias de imagen vacías pueden ser intencionales porque se eliminaron imágenes ilustrativas no alojadas localmente.
- **Regla acordada:** no reponer imágenes externas ni inventar sustitutos; no considerar automáticamente `src=""` o `data-full=""` como un error; verificar los archivos locales antes de conservar referencias sospechosas. En la futura migración React, tratar las imágenes como opcionales y evitar un elemento `img` con `src=""`; según el diseño aprobado, dejar el espacio vacío o no renderizar la imagen.
- **Alcance:** documentación únicamente. Se mantienen las reglas del proyecto y la condición de no tocar el código hasta aprobar el mapa definitivo de rutas.
- **Resultado:** metodología actualizada mediante el commit 517b5b0f61cf3c02d24adfce8f2bb56f36f7672f. Registro actualizado en este commit.


### 2026-10-11 21:00:00 -03:00 — Página 10: Desfile Cívico Escolar
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio:** se añadió el Anexo Q con la revisión estática de `html/tercer_nivel/desfile_civico.html` y la propuesta provisional `/eventos/desfile-civico-escolar`.
- **Hallazgos:** contenido de la actividad comunitaria de verano en el Complejo Municipal de Aconquija; fecha variable; enlace de mapa específico; tres referencias locales de galería que parecen resolver bajo `html/imagenes/`; atributos `data-full=""`; una imagen externa explícitamente ilustrativa; tarjetas relacionadas con Festival Mayor, Cabalgatas de Pirca y Planetario; recursos compartidos e interacciones de galería/compartir/copiar enlace.
- **Contacto e imágenes:** se aplicaron los criterios confirmados por el usuario: los datos globales de contacto y redes se extraen de `index.html`, y no se reponen imágenes ilustrativas retiradas ni se rellenan referencias vacías por suposición. El destino `cabalgatas de pirca.html` queda pendiente de confirmación.
- **Autorización:** petición directa del usuario de continuar con la siguiente página por revisar y respetar las reglas de `Aconquija-react/agents.md`. Se limitó el trabajo a lectura estática y documentación; no se tocaron archivos de código.
- **Resultado:** metodología actualizada mediante el commit `178c30b34e74690f7599cce38551db0710145da9`. No se modificó código React ni el sitio HTML/CSS/JavaScript original, no se implementó la ruta y no se ejecutaron pruebas de navegador. La ruta propuesta sigue pendiente de aprobación.


### 2026-10-11 — Aprobación de ruta: Desfile Cívico Escolar
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio:** se registró la aprobación expresa de `/eventos/desfile-civico-escolar` para `html/tercer_nivel/desfile_civico.html`.
- **Alcance:** la aprobación corresponde a esta página individual; el mapa global de las 15 páginas sigue pendiente. No se modificó código React ni el sitio original y no se implementó la ruta.
- **Resultado:** metodología actualizada mediante el commit `14f882d2ec56f8f5bd02ca2be1167166a48113aa`. Registro actualizado en este commit.


### 2026-10-11 21:03:25 -03:00 — Página 11: Festival Mayor de Aconquija
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio:** se añadió el Anexo R con la revisión estática de `html/tercer_nivel/festival_mayor_aconquija.html` y la propuesta provisional `/eventos/festival-mayor`.
- **Hallazgos:** evento de tres noches hacia fines de enero; fecha y cartelera variables; ubicación en el Complejo Polideportivo Municipal Juan Higinio Vedia; cuatro imágenes de galería con `src=""`, tres con `data-full=""`; enlaces de contacto/redes y mapa; controles de galería, compartir y copiar enlace.
- **Criterios aplicados:** no reponer imágenes ilustrativas retiradas ni completar referencias vacías por suposición. Los datos generales de contacto y redes deben tomarse de `index.html`. No se presentarán fechas, precios ni carteleras variables como información vigente sin confirmación.
- **Autorización:** el usuario pidió continuar con la revisión de las páginas y respetar `Aconquija-react/agents.md`; el trabajo se limitó a revisión estática y documentación.
- **Resultado:** metodología actualizada mediante el commit `e9925ac1b23cf249d07989628e16f6eb5409bdb9`. Registro actualizado en este commit. No se modificó código React ni el sitio original, no se implementó la ruta y no se ejecutaron pruebas de navegador. La ruta queda pendiente de aprobación.


## 2026-10-11 21:07 -03:00 — Aprobación de ruta de Festival Mayor
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio concreto:** se documentó la aprobación de la ruta `/eventos/festival-mayor` para `html/tercer_nivel/festival_mayor_aconquija.html`.
- **Motivo:** continuar el mapa de rutas por categoría solicitado para Aconquija React.
- **Autorización:** aprobación explícita del usuario (“si”) a la propuesta de ruta.
- **Resultado:** ruta registrada como aprobada; no se modificó código de la aplicación. La implementación sigue bloqueada hasta aprobar el mapa completo.


## 2026-10-11 21:07 -03:00 — Revisión estática de página 12
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio concreto:** se añadió el Anexo S sobre `html/tercer_nivel/tuneles_rio_potrero.html`, con ruta candidata `/lugares/tuneles-del-rio-potrero`, contenido, duración contradictoria, imágenes vacías, enlaces de contacto, recursos e interacciones detectadas.
- **Motivo:** continuar la revisión secuencial de las 15 páginas y mantener documentados los hallazgos útiles para el mapa de rutas.
- **Autorización:** solicitud directa del usuario de continuar paso a paso con la revisión y documentación, respetando `Aconquija-react/agents.md` y sin tocar código antes de aprobar el mapa definitivo.
- **Resultado:** documentación actualizada; la ruta de esta página queda pendiente de aprobación. No se modificó código React ni el sitio HTML/CSS/JavaScript original y no se ejecutaron pruebas de navegador.


## 2026-10-11 21:08 -03:00 — Aprobación de ruta de Túneles del Río Potrero
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio concreto:** se registró la aprobación de `/lugares/tuneles-del-rio-potrero` para `html/tercer_nivel/tuneles_rio_potrero.html`.
- **Motivo:** continuar el mapa de rutas por categoría de Aconquija React.
- **Autorización:** petición directa del usuario, que aprobó expresamente la ruta y solicitó registrar la aprobación en ambos documentos.
- **Resultado:** ruta registrada como aprobada. No se modificó código React ni el sitio HTML/CSS/JavaScript original; la implementación sigue pendiente de la aprobación del mapa definitivo.


## 2026-10-11 21:08 -03:00 — Revisión estática de página 13
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio concreto:** se añadió el Anexo T sobre `html/tercer_nivel/rio_potrero.html`, con ruta candidata `/lugares/rio-potrero`, contenido, relación con los Túneles del Río Potrero, imagen principal y galería con referencias vacías, datos de contacto y recursos.
- **Motivo:** continuar la revisión secuencial de las 15 páginas y documentar los hallazgos útiles para el mapa de rutas.
- **Autorización:** solicitud directa del usuario de continuar con la página 13 y registrar los cambios documentales conforme a `Aconquija-react/agents.md`, sin modificar código.
- **Resultado:** documentación actualizada; la ruta de Río Potrero queda pendiente de aprobación. No se modificó código React ni el sitio HTML/CSS/JavaScript original y no se ejecutaron pruebas de navegador.


## 2026-10-11 21:11 -03:00 — Aprobación de ruta de Río Potrero
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio concreto:** se documentó la aprobación de `/lugares/rio-potrero` para `html/tercer_nivel/rio_potrero.html`.
- **Motivo:** continuar el mapa de rutas por categoría para Aconquija React.
- **Autorización:** solicitud directa del usuario, que aprobó expresamente la ruta y pidió registrar la aprobación en ambos documentos.
- **Resultado:** ruta registrada como aprobada. No se modificó código React ni el sitio HTML/CSS/JavaScript original; la implementación sigue pendiente de la aprobación del mapa definitivo.


## 2026-10-11 21:11 -03:00 — Revisión estática de página 14
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio concreto:** se añadió el Anexo U sobre `html/tercer_nivel/yunka_suma.html`, con la ruta candidata `/lugares/yunka-suma`, contenido, imágenes con referencias vacías, enlaces de mapas, información de acceso/alojamiento y recursos.
- **Motivo:** continuar la revisión secuencial de las 15 páginas y documentar hallazgos para el mapa de rutas.
- **Autorización:** solicitud directa del usuario de registrar aprobaciones y continuar con la página 14, siguiendo `Aconquija-react/agents.md` y sin modificar código.
- **Resultado:** documentación actualizada; la ruta de Yunka Suma queda pendiente de aprobación. No se modificó código React ni el sitio HTML/CSS/JavaScript original; no se ejecutaron pruebas de navegador.


## 2026-10-11 21:12 -03:00 — Aprobación de ruta de Yunka Suma
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio concreto:** se documentó la aprobación de `/lugares/yunka-suma` para `html/tercer_nivel/yunka_suma.html`.
- **Motivo:** continuar el mapa de rutas por categoría para Aconquija React.
- **Autorización:** solicitud directa del usuario, que aprobó expresamente la ruta y pidió registrar la aprobación en ambos documentos.
- **Resultado:** ruta registrada como aprobada. No se modificó código React ni el sitio HTML/CSS/JavaScript original; la implementación sigue pendiente de la aprobación del mapa definitivo.


## 2026-10-11 21:12 -03:00 — Revisión estática de página 15
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio concreto:** se añadió el Anexo V sobre `html/tercer_nivel/virgen_del_valle.html`, con la ruta candidata `/lugares/virgen-del-valle`, relación con Cristo Redentor, referencias de imágenes, enlaces de mapas y notas de acceso.
- **Motivo:** completar la revisión secuencial de las 15 páginas y documentar hallazgos para el mapa de rutas.
- **Autorización:** solicitud directa del usuario de registrar la aprobación de Yunka Suma y continuar con la página 15, siguiendo `Aconquija-react/agents.md` y sin modificar código.
- **Resultado:** revisión documental completada; la ruta de Virgen del Valle queda pendiente de aprobación. No se modificó código React ni el sitio HTML/CSS/JavaScript original; no se ejecutaron pruebas de navegador.


## 2026-10-11 21:14 -03:00 — Aprobación de ruta de Virgen del Valle
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio concreto:** se registró la aprobación expresa de `/lugares/virgen-del-valle` para `html/tercer_nivel/virgen_del_valle.html`.
- **Motivo:** completar el mapa de rutas de las 15 páginas revisadas.
- **Autorización:** solicitud directa del usuario, que aprobó la ruta y pidió documentarla en ambos archivos, sin modificar código.
- **Resultado:** ruta marcada como aprobada para el mapa definitivo. No se modificó código React ni el sitio HTML/CSS/JavaScript original. La implementación queda pendiente de la aprobación del mapa definitivo.


## 2026-10-11 21:15 -03:00 — Mapa consolidado de 15 páginas para revisión
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio concreto:** se añadió el Anexo W con una tabla única de 15 archivos originales y sus rutas React propuestas, distinguiendo las rutas aprobadas expresamente de las que siguen pendientes. Se aclaró que `/circuitos/respira-verde` es la ruta aprobada para Aconquija Respira Verde y que reemplaza la propuesta inicial `/experiencias/respira-verde`, evitando duplicar el mismo archivo en el mapa.
- **Motivo:** presentar al usuario el mapa consolidado para su revisión antes de implementar React Router.
- **Autorización:** solicitud directa del usuario de registrar la aprobación de Virgen del Valle y mostrar el mapa de las 15 páginas antes de implementar.
- **Resultado:** mapa documental consolidado para revisión. Quedan pendientes la confirmación de `/` y la aprobación expresa de las rutas de Cultiva Tradición, Cristo Redentor y Festival Provincial del Bandoneón, además de la aprobación del mapa completo como conjunto. No se modificó código React ni el sitio HTML/CSS/JavaScript original.


## 2026-10-11 21:17 -03:00 — Registro de decisiones sobre rutas pendientes
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio concreto:** se actualizaron en el Anexo W las rutas de Inicio (`/`), Cultiva Tradición (`/circuitos/cultiva-tradicion`), Cristo Redentor (`/lugares/cristo-redentor`) y Festival Provincial del Bandoneón (`/eventos/fiesta-del-bandoneon`); se añadió el Anexo X con las decisiones explícitas.
- **Motivo:** reflejar las decisiones de rutas proporcionadas por el usuario antes de aprobar el mapa como conjunto.
- **Autorización:** solicitud directa del usuario; pidió registrar las cuatro decisiones en ambos documentos sin modificar código.
- **Resultado:** las cuatro rutas quedan confirmadas individualmente; el mapa completo de 15 páginas se presenta a continuación para aprobación conjunta. No se modificó código React ni el sitio HTML/CSS/JavaScript original.


## 2026-10-11 21:23 -03:00 — Aprobación conjunta del mapa de 15 rutas
- **Archivos afectados:** `Aconquija-react/Metodologia.md` y `Aconquija-react/Registro.md`.
- **Cambio concreto:** se actualizó el Anexo W para indicar que el mapa de las 15 rutas está aprobado como conjunto y se añadió el Anexo Y con la decisión expresa del usuario. Este registro documenta la aprobación conjunta y el límite de autorización.
- **Motivo:** cerrar la fase de revisión del mapa antes de planificar la implementación de React Router.
- **Autorización:** solicitud directa del usuario: aprobó las 15 rutas exactamente como aparecen en la tabla y pidió registrar la aprobación en ambos documentos, sin modificar código.
- **Resultado:** mapa de 15 rutas aprobado como conjunto. No se modificó código React ni el sitio original HTML/CSS/JavaScript. La implementación queda pendiente de autorización separada, que se solicitará después de presentar el plan concreto y los archivos afectados.


## 2026-10-11 23:06:10 -03:00 — Unificación de rutas por diferencia de mayúsculas
- **Archivos y rutas afectados:** se migra Aconquija-react/ a aconquija-react/; documentos Metodologia.md, Registro.md, agents.md y los siete archivos .gitkeep de src/components/, src/data/, src/pages/ y src/styles/.
- **Cambio concreto:** se prepara una única raíz con el nombre aconquija-react/, se conservan los contenidos documentales y marcadores de carpetas, y se ajustan las referencias activas de ruta en Metodologia.md y agents.md. Los registros históricos conservan los nombres que tenían las rutas en el momento de esos cambios.
- **Motivo:** evitar que Windows trate como una misma carpeta rutas que GitHub registra con capitalización distinta, manteniendo la aplicación React, su documentación y estructura bajo una sola ruta coherente.
- **Autorización:** autorización explícita del usuario el 2026-10-11 para ejecutar esta reorganización de rutas en GitHub y actualizar el registro; no incluye cambios en código React ni en el sitio original.
- **Resultado:** completado y verificado: los tres documentos y los siete archivos .gitkeep quedaron bajo aconquija-react/; se retiraron las nueve entradas correspondientes a la ruta Aconquija-react/. La aplicación y el sitio original no se modificaron; no se ejecutaron pruebas de compilación porque esta tarea solo reorganizó rutas y documentación.

## 2026-10-12 02:00:55 -03:00 — Criterios vigentes para la migración

- **Archivos afectados:** `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** se actualizó la sección 3 de la metodología para consolidar los acuerdos vigentes: alcance de 15 páginas y exclusión de `el_charquiadero.html`; tratamiento de destinos que representan contenido futuro; búsqueda de la misma imagen en otras extensiones locales; conservación de espacios reservados cuando no existe el recurso; prohibición de generar imágenes con `src=""`; uso de `index.html` como fuente canónica de contacto y redes; distinción entre auditoría estática y pruebas reales; y conservación de anexos antiguos como antecedentes históricos.
- **Motivo:** incorporar las aclaraciones del usuario y evitar que las notas antiguas o las referencias a contenido pendiente se interpreten como autorización para ampliar el alcance de la migración.
- **Autorización:** solicitud directa del usuario del 2026-10-12 para volver a intentar la modificación de los documentos; las aclaraciones de alcance y criterios se habían proporcionado previamente en esta conversación del proyecto.
- **Resultado:** actualización de `Metodologia.md` aplicada en `main` y registrada aquí. No se modificó código React ni el sitio original HTML/CSS/JavaScript. No se ejecutaron pruebas de compilación, lint ni navegador, porque el cambio fue exclusivamente documental.


## 2026-10-12 02:38:08 -03:00 — Consolidación del estado documental

- **Archivos afectados:** `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto en `Metodologia.md`:** se reemplazó el antiguo resumen de estado por una síntesis vigente que separa decisiones aprobadas, auditoría estática completada, estado técnico real de React y pasos pendientes. Se aclaró que build, lint, pruebas de navegador y publicación siguen pendientes porque no se ejecutaron; también se añadió una nota para identificar los anexos antiguos como antecedentes cuando contradigan el alcance y las decisiones actuales.
- **Cambio concreto en `Registro.md`:** se corrigió el delimitador Markdown de `el_charquiadero.html` en la entrada anterior y se agregó esta entrada de trazabilidad.
- **Motivo:** facilitar la continuidad del proyecto y evitar repetir revisiones o tratar decisiones históricas como vigentes.
- **Autorización:** permiso explícito del usuario en esta conversación del 2026-10-12 para consolidar la documentación y corregir el error de formato.
- **Resultado:** actualización documental aplicada en `main`. No se modificó código React ni el sitio original HTML/CSS/JavaScript. No se ejecutaron build, lint ni pruebas de navegador.


## 2026-10-12 03:22:49 -03:00 — Implementación de la Etapa 1 y conservación del plan

- **Archivos afectados:** `aconquija-react/src/App.jsx`, `aconquija-react/src/index.css`, `aconquija-react/index.html`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto en `src/App.jsx`:** se agregó el componente raíz con `BrowserRouter` y las 15 rutas del mapa aprobado. Cada ruta muestra temporalmente el título y un aviso de que el contenido original se migrará en la etapa correspondiente. Las direcciones no incluidas en el mapa muestran una pantalla de página no encontrada. No se crearon páginas turísticas completas ni se agregó la página excluida.
- **Cambio concreto en `src/index.css`:** se reemplazaron los estilos globales de la plantilla por una base neutral y adaptable, con reglas básicas de caja, tipografía, recursos multimedia y estilos provisionales para las pantallas de estado.
- **Cambio concreto en `index.html`:** se estableció `lang="es"`, el título `Aconquija Turismo`, una descripción básica y el color de tema. Se conservó la referencia al favicon existente `public/favicon.svg`.
- **Cambio concreto en `Metodologia.md`:** se actualizó el estado vigente, se anotaron los resultados reales de lint/build previos a la etapa y se incorporó la sección 14 con el plan completo de implementación, etapas, archivos autorizados, criterios de aceptación y pasos para retomar sin repetir trabajo.
- **Archivos deliberadamente sin cambios:** `src/App.css` permanece vacío por decisión del usuario; no se modificaron `src/main.jsx`, `vite.config.js`, `package.json`, dependencias, imágenes originales ni archivos del sitio HTML/CSS/JavaScript original.
- **Motivo:** iniciar la implementación por etapas según la metodología aprobada y guardar un plan persistente para mantener continuidad y trazabilidad.
- **Autorización:** permiso explícito del usuario el 2026-10-12: autorizó la Etapa 1, pidió seguir y respetar la metodología y solicitó guardar el plan de implementación en Aconquija React.
- **Resultado:** cambios aplicados en la rama `main` del repositorio remoto. Se deben sincronizar en VS Code y ejecutar nuevamente lint/build y la revisión en navegador; esas pruebas posteriores aún no se han ejecutado. El lint previo a la etapa pasó con 0 advertencias y 0 errores; el build previo falló porque `src/App.jsx` estaba vacío. El sitio original no se modificó.


## 2026-10-12 — Migración inicial de la página principal a React

- **Archivos afectados:** `aconquija-react/src/App.jsx`, `aconquija-react/src/App.css`, `aconquija-react/src/index.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio en `src/App.jsx`:** se reemplazó la pantalla provisional de Inicio por la estructura del `index.html` original: encabezado y navegación, hero, presentación, tarjetas de circuitos, carrusel horizontal de lugares, pestañas de estaciones, servicios, sección final y pie de página. Las 14 rutas secundarias mantienen sus pantallas provisionales.
- **Interacciones adaptadas:** menú móvil y cierre con Escape, cierre por superposición, progreso de lectura, cambio del encabezado al desplazarse, animaciones de aparición y selección de estaciones.
- **Cambio en `src/App.css`:** se trasladaron las reglas de `css/style.css` a la aplicación React y se ajustaron las rutas de imágenes relativas a la nueva ubicación del CSS.
- **Cambio en `src/index.css`:** se alineó la base global con la paleta y tipografía originales y se agregaron reglas de apoyo para los controles React.
- **Recursos:** las imágenes se importan desde sus rutas existentes en el repositorio; no se movieron, editaron ni sustituyeron los archivos originales.
- **Contenido conservado:** los títulos y textos vacíos de las cuatro tarjetas de circuitos siguen vacíos, tal como están en el `index.html` original; no se inventó contenido.
- **Motivo:** el usuario autorizó expresamente migrar la página principal original a React y conservar el diseño y los recursos existentes.
- **Autorización:** autorización explícita del usuario el 2026-10-12 para iniciar esta etapa y modificar inicialmente los cinco archivos indicados.
- **Límites respetados:** no se modificó el sitio original fuera de `aconquija-react/`; no se cambiaron `src/main.jsx`, `vite.config.js`, `package.json`, dependencias ni configuración de publicación; no se crearon archivos nuevos ni se movieron recursos.
- **Resultado:** cambios aplicados a la rama remota `main`. La inspección remota del contenido confirma que se incorporó la estructura principal y se importó la hoja de estilos; todavía no se ejecutaron lint, build ni pruebas de navegador después de estos cambios. La etapa no se declara validada hasta revisar los resultados reales en el entorno local.


## 2026-10-12 — Ajuste interno previo a la validación de Inicio

- **Archivo afectado:** `aconquija-react/src/App.jsx`.
- **Cambio concreto:** se hizo explícita la inicialización del `IntersectionObserver` usado por las animaciones de aparición, evitando que la función de callback dependa de una variable todavía en proceso de inicialización.
- **Motivo:** reducir el riesgo de advertencias del linter y mantener una limpieza clara del observador al desmontar la página.
- **Autorización:** ajuste técnico interno incluido en la autorización de migrar Inicio y adaptar sus interacciones; no se amplió el alcance ni se modificaron archivos adicionales.
- **Resultado:** cambio aplicado en la rama remota `main`. La comprobación estática remota confirma que la inicialización quedó explícita; el lint, el build y las pruebas de navegador siguen pendientes.


## 2026-10-12 — Corrección de la imagen de fondo del hero

- **Archivos afectados:** `aconquija-react/src/App.jsx`, `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Diagnóstico:** se verificó que `imagenes/fondo(1).webp` existe en el repositorio; la regla CSS anterior referenciaba el archivo con paréntesis escapados.
- **Cambio:** el recurso se importa explícitamente en `App.jsx` y se asigna a `backgroundImage` del elemento `.hero-bg`; se reemplazó la referencia de imagen de CSS por un color de respaldo.
- **Motivo y autorización:** el usuario pidió pulir la página de Inicio y señaló que no veía el fondo esperado. La corrección se limita a la imagen del hero y está dentro de la etapa autorizada.
- **Resultado:** actualización aplicada en la rama remota `main`. La inspección del contenido confirma la importación explícita y que se eliminó la referencia CSS anterior. Falta comprobar el resultado visual en el navegador local; no se declara aún validado.


## 2026-10-12 — Contraste y grosor de la barra de navegación

- **Archivos afectados:** `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio en CSS:** se añadieron reglas específicas para mantener en blanco los enlaces Explorar, Lugares, Estaciones, Servicios y Sobre Aconquija en todos sus estados; se fijó el grosor tipográfico en 400 para evitar el aspecto demasiado negrita; se reforzó el color blanco de los iconos sociales en escritorio y móvil.
- **Motivo:** mejorar la legibilidad y el contraste de la navegación sobre la barra.
- **Autorización:** permiso explícito del usuario en esta conversación para revisar los archivos necesarios y aplicar la corrección.
- **Límites respetados:** no se alteraron los destinos de los enlaces, el componente JSX, el fondo de la barra, otros sectores de Inicio ni los archivos del sitio original.
- **Resultado:** cambios aplicados en la rama remota `main`. Pendiente de comprobación visual local; no se afirma que lint, build o pruebas de navegador hayan pasado.


## 2026-10-12 — Título central de Inicio en blanco

- **Archivos afectados:** `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio en CSS:** se agregó una regla específica para que `Aconquija` y `Naturaleza que inspira`, dentro de `.hero-content`, se muestren en blanco puro (`#fff`).
- **Motivo:** el usuario indicó que ambos textos centrales se veían gris oscuro y pidió que fueran blancos.
- **Autorización:** confirmación explícita del usuario el 2026-10-12.
- **Límites respetados:** no se modificó el color de la barra de navegación, el fondo, otros textos, las imágenes ni el sitio HTML/CSS/JavaScript original.
- **Resultado:** cambio aplicado en la rama remota `main`. Falta la comprobación visual local; no se ejecutaron lint, build ni pruebas de navegador en esta intervención.


## 2026-10-12 — Fondo azul pizarra en Estaciones / Climas

- **Archivos afectados:** `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** se reemplazó `#1c222c` por `#34485b` en la propiedad `background` de `.estaciones`.
- **Motivo:** recuperar un fondo de sección distinto y aplicar el color azul pizarra elegido por el usuario.
- **Autorización:** instrucción explícita del usuario para cambiar únicamente el fondo de Estaciones / Climas.
- **Límites respetados:** no se modificaron colores de texto, tarjetas, botones, otras secciones, componentes ni el sitio original.
- **Resultado:** cambio aplicado en la rama remota `main`; falta la comprobación visual local. No se ejecutaron lint, build ni pruebas de navegador.


## 2026-10-12 — Ajuste visual de circuitos, estaciones y pie de página

- **Archivos afectados:** `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **CSS:** el fondo de `.estaciones` volvió a `#1c222c`, coincidente con la captura de referencia; se añadió color dorado `var(--sand)` para hover y foco visible de `.est-tab`. La pestaña activa conserva texto blanco y subrayado dorado. Los rótulos de sección y encabezados del footer ya tenían el color dorado correspondiente y no necesitaron cambios.
- **Motivo:** aproximar el aspecto de «Qué hacer», «Cuándo venir» y pie de página a las capturas proporcionadas.
- **Autorización:** permiso explícito del usuario el 2026-10-12.
- **Límites:** no se modificaron contenido, imágenes, enlaces, estructura JSX ni el sitio original.
- **Validación:** pendiente en navegador local; no se ejecutaron lint, build ni pruebas de navegador.


### 2026-10-12T16:51:13 -03:00
- **Archivos afectados:** `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio:** se modificó únicamente el fondo de `.explorar` de `var(--night)` a `#1c222c`, el mismo color usado por `.estaciones`; se documentó el ajuste en la metodología y en este registro.
- **Motivo:** igualar el fondo de «Explorá Aconquija a tu manera» al de «Estaciones / Climas», sin alterar el resto del diseño.
- **Autorización:** petición directa del usuario el 2026-10-12.
- **Resultado:** cambios aplicados en la rama `main` y confirmados por la respuesta de GitHub. La comprobación es estática; no se ejecutaron lint, build ni pruebas de navegador.

## 2026-10-12 — Texto dorado en Explorar Aconquija a tu manera

- **Archivos afectados:** `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** se agregó el selector `.explorar .section-head h2, .explorar .section-head p` con `color: var(--sand)`, aplicándolo únicamente al título y al párrafo de la sección Explorar.
- **Motivo:** dar a esos dos textos el tono dorado solicitado sin cambiar otros elementos visuales.
- **Autorización:** autorización explícita del usuario el 2026-10-12.
- **Límites respetados:** se conserva el fondo `#1c222c`; no se modificaron tarjetas, imágenes, márgenes, contenido ni otras secciones. No se tocó el sitio original fuera de `aconquija-react/`.
- **Resultado:** cambios documentados y guardados en la rama `main`. La comprobación visual queda a cargo del usuario; no se ejecutaron lint, build ni pruebas de navegador.

## 2026-10-12 — Refuerzo del color dorado de los textos de Explorar

- **Archivos afectados:** `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** se sustituyó el selector de clase por `#explorar .section-head h2` y `#explorar .section-head p`, con color explícito `#cdaa78 !important`, apuntando a los dos textos solicitados dentro de la sección `id="explorar"`.
- **Motivo:** el usuario informó que el ajuste anterior no se veía y autorizó volver a intentarlo.
- **Alcance:** solo el título y el párrafo indicados; se conserva el fondo `#1c222c` y no se modifican las tarjetas ni otras secciones.
- **Resultado:** cambio aplicado en `main` y documentado. Comprobación visual pendiente del usuario; no se ejecutaron lint, build ni pruebas de navegador.


## 2026-10-12 — Corrección a blanco de los textos de Explorar

- **Archivos afectados:** `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio:** se reemplazó `#cdaa78` por `#ffffff` en la regla específica del título y el párrafo de la sección Explorar.
- **Motivo y autorización:** el usuario aclaró que quería blanco en vez de dorado y pidió que se aplicara el cambio directamente para probar.
- **Alcance:** se mantiene el fondo `#1c222c`; no se modifican tarjetas ni otras secciones.
- **Validación:** cambio guardado en `main` y documentado. La revisión visual queda pendiente; no se ejecutaron lint, build ni pruebas de navegador.


## 2026-10-12T17:19:06.376-03:00 — Cinco rótulos de sección en dorado arena

- **Archivos afectados:** `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** se agregaron selectores específicos para que «Qué hacer» en Explorar, «Recorridos» en Lugares, «Cuándo venir» en Estaciones, «Servicios» en Servicios y «Sobre Aconquija» en la sección Sobre usen `var(--sand)` (`#cdaa78`).
- **Motivo:** unificar esos cinco rótulos pequeños con el color dorado arena del diseño.
- **Autorización:** autorización explícita del usuario el 2026-10-12.
- **Límites respetados:** no se cambiaron títulos grandes, párrafos, fondos, tarjetas, botones, navegación ni el sitio original fuera de `aconquija-react/`. El título y el párrafo de Explorar siguen blancos.
- **Resultado:** los tres archivos se actualizaron en la rama `main`. La comprobación visual queda pendiente; no se ejecutaron lint, build ni pruebas de navegador.


## 2026-10-12 — Refuerzo de prioridad del dorado arena en cinco rótulos

- **Archivos afectados:** `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** se reforzó el selector de los cinco rótulos («Qué hacer», «Recorridos», «Cuándo venir», «Servicios» y «Sobre Aconquija») con el color explícito `#cdaa78 !important` para evitar que reglas generales de color lo sobrescriban.
- **Motivo:** el usuario indicó que el resultado de color anterior no se veía correcto y pidió volver a intentarlo.
- **Autorización:** petición directa del usuario el 2026-10-12.
- **Alcance respetado:** solo los cinco rótulos pequeños; títulos grandes, descripciones, fondos, tarjetas, botones, navegación y el sitio original permanecen sin cambios.
- **Resultado:** cambio aplicado y documentado en `main`. La revisión visual sigue pendiente; no se ejecutaron lint, build ni pruebas de navegador.


## 2026-10-12 — Fondo de la sección Sobre Aconquija con caballo.webp

- **Archivos afectados:** `aconquija-react/src/App.jsx`, `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** se importó `../../imagenes/caballo.webp` en `App.jsx` y se conectó al fondo de `.cta-bg` en la sección `#sobre`; se retiró la ruta duplicada del CSS para que el recurso sea resuelto por Vite.
- **Motivo:** mostrar la imagen de caballos como fondo de «Sobre Aconquija».
- **Autorización:** petición directa del usuario el 2026-10-12.
- **Límites respetados:** se conserva el oscurecimiento de la imagen, el recorte, el contenido y la estructura de la sección; no se modificó el sitio original fuera de `aconquija-react/`.
- **Resultado:** el archivo `imagenes/caballo.webp` existe en el repositorio y la referencia quedó conectada en el código remoto. No se ejecutaron lint, build ni pruebas de navegador; falta comprobar el resultado visual local.


## 2026-10-12 — Título blanco en Sobre Aconquija

- **Archivos afectados:** `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** se añadió una regla CSS específica para mostrar en blanco (`#ffffff`) el título «Un pueblo, una sierra, un mismo ritmo.» dentro de `#sobre .cta-content h2`.
- **Motivo:** mejorar el contraste del título sobre la imagen de caballo que funciona como fondo de la sección.
- **Autorización:** petición directa del usuario el 2026-10-12.
- **Límites respetados:** no se modifican el rótulo dorado «Sobre Aconquija», el párrafo, el botón, la imagen de fondo ni otras secciones.
- **Resultado:** cambio aplicado y documentado en `main`. No se ejecutaron lint, build ni pruebas de navegador; falta comprobar el aspecto visual local.


## 2026-10-12T17:38:17-03:00 — Igualación del botón «Planeá tu visita» con el sitio original

- **Archivos afectados:** `aconquija-react/src/App.jsx`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** se cambió el destino del enlace del botón en React de `#servicios` a `#`, coincidiendo con el botón de `index.html`. Se comprobó que la clase `btn-primary` y sus reglas visuales ya coinciden con `css/style.css`; por eso no se modificó el CSS.
- **Motivo:** reproducir en la sección «Sobre Aconquija» el botón de referencia, tanto en su estilo existente como en su destino de enlace.
- **Autorización:** permiso explícito del usuario el 2026-10-12, después de confirmar el alcance del cambio.
- **Límites respetados:** el HTML original y sus estilos no se modificaron; tampoco se cambiaron otros botones ni elementos de la sección.
- **Resultado:** cambio aplicado y documentado en la rama `main`. No se ejecutaron lint, build ni pruebas de navegador; falta verificar el resultado en el navegador local.


## 2026-10-12T17:47:00-03:00 — Refuerzo visual del botón «Planeá tu visita»

- **Archivos afectados:** `aconquija-react/src/App.css` y `aconquija-react/Metodologia.md`.
- **Cambio concreto:** se añadió una regla CSS específica para el botón de la sección «Sobre Aconquija»: fondo ámbar anaranjado `#e2935c`, borde redondeado de 30 px, texto oscuro y estado hover blanco con elevación ligera. Se documentó el ajuste en metodología.
- **Motivo:** el usuario indicó que el estilo anterior no se aplicaba visualmente como esperaba y pidió un color más anaranjado y bordes redondeados.
- **Autorización:** permiso explícito del usuario el 2026-10-12.
- **Resultado:** CSS y metodología guardados en `main`. La comprobación visual en navegador sigue pendiente; no se ejecutaron lint, build ni pruebas de navegador.


## 2026-10-12T17:48:00-03:00 — Footer pizarra oscuro y textos blancos

- **Archivos afectados:** `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** el pie de página ahora usa fondo pizarra oscuro `#1c222c`; se forzó el color blanco en el texto descriptivo de marca, títulos de columnas, enlaces, datos de contacto y aviso de derechos reservados. Se documentó el criterio en metodología.
- **Motivo:** lograr el contraste y la uniformidad de color solicitados para la parte inferior del sitio.
- **Autorización:** permiso explícito del usuario el 2026-10-12.
- **Alcance respetado:** reglas limitadas al footer de React; no se modificaron otras secciones ni el sitio original.
- **Resultado:** CSS, metodología y registro actualizados en `main`. Se verificaron los contenidos guardados en GitHub; la revisión visual en navegador sigue pendiente y no se ejecutaron lint, build ni pruebas de navegador.


## 2026-10-12T17:52:00-03:00 — Encabezados del footer en dorado arena

- **Archivos afectados:** `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** los encabezados «Explorar», «Servicios» y «Contacto» en las tres columnas del footer pasan a dorado arena `#cdaa78`. Los demás textos permanecen blancos y el fondo pizarra oscuro se conserva.
- **Motivo:** aplicar el color dorado arena solicitado a esos tres encabezados para diferenciarlos del resto del contenido.
- **Autorización:** permiso explícito del usuario el 2026-10-12.
- **Alcance respetado:** solo encabezados de columnas del pie de página React; no se alteran enlaces ni otras secciones, y no se modifica el sitio original.
- **Resultado:** CSS, metodología y registro guardados en `main`. La revisión visual en navegador sigue pendiente; no se ejecutaron lint, build ni pruebas de navegador.

## 2026-10-12T17:59:33-03:00 — Línea divisoria y redes sociales en la franja inferior del footer

- **Archivos afectados:** `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** se quitó el borde inferior de la zona superior y se agregó una línea fina dorado arena semitransparente encima de la franja inferior. Se ajustó el espacio para separar las columnas del copyright y los iconos sociales.
- **Redes sociales:** se conservaron Instagram, Facebook, TikTok y WhatsApp a la derecha; sus iconos ahora usan `#cdaa78`.
- **Motivo:** acercar el footer a la referencia aprobada por el usuario.
- **Autorización:** aprobación explícita del usuario el 2026-10-12 («mandale»).
- **Alcance:** solo estilos del footer React y documentación; no se alteraron enlaces, textos, estructura JSX ni el sitio original.
- **Resultado:** CSS actualizado en `main`. Revisión visual local pendiente; no se ejecutaron lint, build ni pruebas de navegador.


## 2026-10-12T18:13:14-03:00 — Barra de progreso dorado arena con movimiento fluido

- **Archivos afectados:** `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** la barra `#readProgress`, ubicada en el borde superior, pasó de 2 px a 3 px, cambió al dorado arena `#cdaa78` y recibió una transición de anchura más suave mediante `cubic-bezier(.22,.7,.22,1)`; se añadió `will-change: width`.
- **Motivo:** dar más vida a la navegación sin agregar movimiento exagerado ni modificar el menú.
- **Autorización:** petición directa y confirmación explícita del usuario el 2026-10-12.
- **Alcance:** la lógica de desplazamiento ya existía en `src/App.jsx` y se conservó; no se cambiaron enlaces, estructura de navegación ni el sitio original.
- **Resultado:** CSS y documentación guardados en `main`. No se ejecutaron lint, build ni pruebas de navegador; la comprobación visual y de fluidez queda pendiente.


## 2026-10-12T18:48:08-03:00 — Textos blancos en Estaciones

- **Archivos afectados:** `aconquija-react/src/App.css`, `aconquija-react/src/App.jsx`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** el título «Aconquija cambia con cada estación» y la descripción «Cada momento del año tiene su propia versión. Elegí la que te llama.» pasan a blanco puro (`#ffffff`). Se identificó exclusivamente el título de verano «Días largos» mediante una clase CSS para aplicarle el mismo color.
- **Motivo:** mejorar la legibilidad de los tres textos señalados en la sección Estaciones.
- **Autorización:** confirmación explícita del usuario el 2026-10-12.
- **Alcance respetado:** no se cambiaron el fondo, las pestañas, las imágenes, los demás títulos de temporada ni otras secciones. No se modificó el sitio original fuera de `aconquija-react/`.
- **Resultado:** actualizaciones enviadas a la rama `main`. No se ejecutaron lint, build ni pruebas de navegador; la comprobación visual local queda pendiente.


## 2026-10-12T18:52:27-03:00 — Fecha de verano en dorado arena

- **Archivos afectados:** `aconquija-react/src/App.jsx`, `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** «Diciembre — Marzo» recibe una clase específica para verano y se establece su color en dorado arena (`#cdaa78`).
- **Motivo:** aplicar el color solicitado a la fecha de verano en la sección Estaciones.
- **Autorización:** petición directa del usuario el 2026-10-12.
- **Alcance respetado:** las otras fechas, el fondo y el resto de la página no se modifican intencionalmente.
- **Resultado:** actualización enviada a `main`. No se ejecutaron build, lint ni pruebas de navegador; queda pendiente revisar el aspecto visual en el navegador local.


## 2026-10-12T18:56:14-03:00 — Reducción sutil del alto de la navegación

- **Archivos afectados:** `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** la navegación superior reduce su relleno vertical de 20 px a 16 px; cuando la página está desplazada, pasa de 12 px a 10 px. El logo del encabezado se ajusta de 72 px a 66 px y a 58 px en el estado desplazado, con una transición suave.
- **Motivo:** hacer la barra menos gruesa y más liviana a la vista, manteniendo su estructura y comportamiento.
- **Autorización:** petición directa del usuario el 2026-10-12.
- **Alcance respetado:** se modificó únicamente el alto visual de la navegación de React y se documentó el cambio. El logo del footer y el sitio original no se modificaron intencionalmente.
- **Resultado:** CSS y documentación actualizados en `main`. No se ejecutaron build, lint ni pruebas de navegador; queda pendiente revisar el resultado visual local.


## 2026-10-12T19:00:48-03:00 — Imágenes más compactas en Estaciones

- **Archivos afectados:** `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** las imágenes de Estaciones ahora ocupan el 94 % del ancho disponible, con una altura de 390 px en escritorio, 280 px en tablet y 230 px en móvil. Se redondearon las esquinas a 10 px y se centraron dentro de su columna.
- **Motivo:** hacer las imágenes un poco más pequeñas y darles puntas suavemente redondeadas, como pidió el usuario.
- **Autorización:** petición directa del usuario el 2026-10-12.
- **Alcance respetado:** solo se modificaron las imágenes de la sección Estaciones; no se cambiaron las fotografías, textos, pestañas ni imágenes de otras secciones.
- **Resultado:** CSS y documentación actualizados en `main`. No se ejecutaron build, lint ni pruebas de navegador; queda pendiente revisar el aspecto visual local.

## 2026-10-12T22:11:22.578-03:00 — Colores uniformes en las cuatro estaciones

- **Archivos afectados:** `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** se estableció el dorado arena `#cdaa78` para las fechas de todas las estaciones y el blanco `#ffffff` para los títulos de todos los paneles, en lugar de aplicar el color blanco explícitamente solo al título de Verano.
- **Motivo:** extender a Otoño, Invierno y Primavera el criterio de colores aprobado en Verano.
- **Autorización:** permiso explícito del usuario el 2026-10-12.
- **Límites respetados:** no se cambiaron textos, imágenes, tamaños, bordes, distribución, pestañas ni otras secciones. No se modificó el sitio original fuera de `aconquija-react/`.
- **Resultado:** CSS y documentación actualizados en la rama `main`. La comprobación es estática; no se ejecutaron lint, build ni pruebas de navegador y queda pendiente revisar el aspecto en el navegador local.

## 2026-10-12T19:17:03.396-03:00 — Botones de estaciones replicados desde el index.html original

- **Archivos afectados:** `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Referencia:** `css/style.css` original, bloque de pestañas de Estaciones.
- **Cambio concreto:** los botones React ahora neutralizan fondo y borde nativos y heredan la tipografía; se conserva el espaciado de 16px 28px, tamaño de fuente, espaciado entre letras, mayúsculas, color gris inactivo, blanco activo y línea inferior ámbar. Se retiró el hover dorado que no estaba en el original y se dejó un contorno de foco accesible para teclado.
- **Motivo:** reproducir el aspecto anterior de las etiquetas Verano, Otoño, Invierno y Primavera del sitio original.
- **Autorización:** petición directa del usuario el 2026-10-12.
- **Límites respetados:** no se cambiaron textos ni el comportamiento de selección; no se modificó `index.html` ni `css/style.css` fuera de `aconquija-react/`.
- **Resultado:** estilos y documentación actualizados en la rama `main`. Comparación estática realizada; no se ejecutaron lint, build ni pruebas de navegador.

## 2026-10-12T19:21:37-03:00 — Contraste translúcido y estado iluminado de las pestañas

- **Archivos afectados:** `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** las pestañas no seleccionadas usan blanco translúcido (`rgba(255,255,255,.62)`); la pestaña seleccionada usa blanco pleno con un resplandor muy sutil y conserva la línea inferior ámbar. Se mantiene intacto el mecanismo React que cambia la estación activa.
- **Motivo:** reflejar la apariencia indicada por el usuario: pestañas translúcidas y estación seleccionada visualmente iluminada. Se revisaron el `index.html`, `css/style.css` y `js/scrip.js` originales como referencia.
- **Autorización:** petición directa del usuario el 2026-10-12.
- **Límites respetados:** solo se ajustó el estilo de las pestañas dentro de React; no se modificó el sitio original ni la lógica de selección.
- **Resultado:** CSS y documentación actualizados en `main`. Verificación estática realizada; no se ejecutaron lint, build ni pruebas de navegador.

## 2026-10-12T19:24:43-03:00 — Línea fina debajo de las pestañas de Estaciones

- **Archivos afectados:** `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** se quitó el borde inferior general del contenedor de pestañas y se añadió una línea separada de 1 px, blanco translúcido (`rgba(255,255,255,.38)`), a 14 px de distancia. Su ancho es el 60 % del contenedor, con máximo de 520 px.
- **Motivo:** añadir un separador fino y discreto del mismo tono visual que los botones, sin pegarlo a ellos ni extenderlo demasiado.
- **Autorización:** petición directa del usuario el 2026-10-12.
- **Límites respetados:** se conservó el subrayado ámbar de la pestaña activa y no se modificó la lógica ni el sitio original.
- **Resultado:** CSS y documentación actualizados en `main`. Verificación estática realizada; no se ejecutaron lint, build ni pruebas de navegador.


## 2026-10-12T19:32:00-03:00 — Línea de Estaciones más fina con tramo activo dorado arena

- **Archivos afectados:** `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** la línea blanca translúcida se redujo a 1 px y se extendió al 100 % del ancho del contenedor de pestañas. El subrayado de la estación activa también quedó en 1 px, en dorado arena (`var(--sand)`), y se alineó a la misma altura para cubrir visualmente el tramo correspondiente de la línea base.
- **Motivo:** el usuario pidió una línea más fina, que alcance el ancho de las imágenes, y que el dorado arena reemplace el tramo bajo el botón seleccionado.
- **Autorización:** petición directa del usuario el 2026-10-12.
- **Alcance respetado:** no se modificó la lógica React que actualiza `activeSeason`, el contenido ni el sitio original fuera de `aconquija-react/`.
- **Resultado:** CSS y documentación actualizados en `main`. Se hizo revisión estática; no se ejecutaron lint, build ni pruebas de navegador, por lo que la comprobación visual local queda pendiente.


## 2026-10-12T19:45:00-03:00 — Línea base más fina y más cercana a las pestañas de Estaciones

- **Archivos afectados:** `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** la línea base blanca translúcida pasa a 0,5 px y se ubica a 2 px debajo de las pestañas; el segmento dorado de la estación activa se alinea a esa misma distancia y conserva 1 px de grosor para cubrir visualmente la línea base.
- **Motivo:** el usuario dio permiso explícito para afinar y acercar la línea, sin cambiar el comportamiento ni el contenido de Estaciones.
- **Alcance respetado:** no se cambió la lógica React de `activeSeason`, los textos, las imágenes ni el sitio original fuera de `aconquija-react/`.
- **Resultado:** los cambios CSS y la documentación quedaron guardados en `main`. Revisión estática realizada; no se ejecutaron lint, build ni pruebas de navegador. La comprobación visual local queda pendiente.


## 2026-10-12T19:50:00-03:00 — Corrección de visibilidad del subrayado dorado en Estaciones

- **Archivos afectados:** `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** se eleva la pestaña activa en el orden de apilamiento y se asigna prioridad superior al pseudo-elemento del subrayado; el tramo dorado pasa de 1 px a 2 px para destacar sobre la línea base translúcida de 0,5 px.
- **Motivo:** el usuario reportó que el subrayado dorado arena no funcionaba y autorizó corregirlo.
- **Alcance respetado:** no se modificó el estado React `activeSeason`, las imágenes, los textos ni el sitio original fuera de `aconquija-react/`.
- **Resultado:** CSS y metodología actualizados en `main`. Revisión estática realizada; no se ejecutaron lint, build ni pruebas de navegador. La verificación visual local queda pendiente.


## 2026-10-12 19:00:00 -03:00 — Subrayado activo de Estaciones con elemento explícito

- **Archivos afectados:** `aconquija-react/src/App.jsx`, `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** cada botón de estación contiene ahora un `span.est-tab-underline` decorativo. CSS muestra ese elemento solo dentro del botón con clase `active`, manteniendo el color dorado arena `#cdaa78`, el grosor de 2 px y la línea base blanca translúcida.
- **Motivo:** el usuario informó que la corrección anterior no funcionaba y pidió revisar bien y solucionar el subrayado.
- **Autorización:** petición directa del usuario el 2026-10-12.
- **Alcance respetado:** cambio limitado a la pestaña activa de Estaciones dentro de `aconquija-react/`; no se alteraron las demás secciones ni el sitio original.
- **Resultado:** archivos actualizados en `main` y revisados estáticamente. No se ejecutaron lint, build ni pruebas de navegador; la verificación visual local sigue pendiente.


## 2026-10-12 — Clima de Aconquija junto a las redes sociales

- **Archivos afectados:** `aconquija-react/src/App.jsx`, `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** se incorporó un indicador pequeño de clima con icono y temperatura actual en la barra de navegación, junto a los iconos sociales. La información se consulta a Open-Meteo para las coordenadas aproximadas de Aconquija, se refresca cada 15 minutos y se adapta a pantallas pequeñas.
- **Motivo:** el usuario pidió colocar el clima de Aconquija en pequeño al lado de las redes sociales.
- **Autorización:** petición directa del usuario el 2026-10-12.
- **Alcance respetado:** solo se modificó la barra superior dentro de `aconquija-react/`; no se modificó el sitio original ni se agregaron dependencias.
- **Resultado:** cambios guardados en GitHub y revisados estáticamente. No se ejecutaron lint, build ni pruebas de navegador.


## 2026-10-12 — Temperatura del clima en blanco

- **Archivos afectados:** `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** se agregó color blanco explícito (`#ffffff !important`) a la cifra de temperatura del indicador climático en la navegación.
- **Motivo:** aumentar el contraste de la temperatura sobre el fondo pizarra oscuro.
- **Autorización:** petición directa del usuario el 2026-10-12.
- **Alcance respetado:** solo la cifra de temperatura; se conservaron el icono, el nombre Aconquija, la consulta del clima y el resto del diseño. No se modificó el sitio original fuera de `aconquija-react/`.
- **Resultado:** cambios guardados en `main` y revisados estáticamente. No se ejecutaron build, lint ni pruebas de navegador; queda pendiente comprobarlo visualmente en el navegador local.


## 2026-10-12 — Líneas negras verticales entre los servicios

- **Archivos afectados:** `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** se agregaron bordes verticales negros de 1 px entre las tarjetas de Servicios. En escritorio separan las cuatro columnas; en tablet separan las dos columnas; en móvil angosto se quitan al apilar las tarjetas en una sola columna.
- **Motivo:** petición directa del usuario para separar visualmente los cuatro servicios con líneas negras verticales.
- **Autorización:** petición directa del usuario el 2026-10-12.
- **Alcance respetado:** solo estilos de la sección Servicios en `aconquija-react/`; no se cambiaron contenido ni enlaces, y no se modificó el sitio original.
- **Resultado:** CSS y documentación guardados en la rama `main` y revisados estáticamente. No se ejecutaron build, lint ni pruebas de navegador; queda pendiente verificar el aspecto visual local.

## 2026-10-12 — Animaciones sutiles y tipografía

- **Archivos afectados:** `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** se añadieron transiciones más fluidas al menú y a elementos interactivos, elevación mínima al pasar el mouse por tarjetas, una animación breve del separador del hero y soporte para la preferencia del sistema de reducir movimiento. Se conservaron Fraunces para títulos y Work Sans para textos, las familias ya definidas en el CSS.
- **Motivo:** petición directa del usuario para que el sitio se sienta vivo, cálido y natural sin modificar las imágenes ni recargar el diseño; también pidió volver a la tipografía anterior.
- **Autorización:** petición directa del usuario el 2026-10-12.
- **Alcance respetado:** únicamente CSS y documentación dentro de `aconquija-react/`. No se cambiaron imágenes, textos, estructura ni el sitio original.
- **Resultado:** cambios guardados en `main` y revisados estáticamente. No se ejecutaron build, lint ni pruebas de navegador; queda pendiente comprobar el aspecto visual en el navegador local.

## 2026-10-12 — Prueba tipográfica: Playfair Display + Montserrat

- **Archivos afectados:** `aconquija-react/src/App.css`, `aconquija-react/src/index.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** se reemplazó Fraunces por Playfair Display para la tipografía de títulos y Work Sans por Montserrat para textos e interfaz. Se actualizó tanto la importación de Google Fonts como las variables tipográficas y la fuente base global, para evitar que estilos de la aplicación o páginas auxiliares sigan usando la fuente anterior.
- **Motivo:** probar la combinación recomendada para diferenciar con más claridad los títulos y mantener una lectura limpia en el resto del sitio.
- **Autorización:** el usuario aceptó seguir la recomendación tipográfica el 2026-10-12.
- **Alcance respetado:** solo tipografías y documentación dentro de `aconquija-react/`; no se alteraron colores, imágenes, contenido ni estructura, y no se modificó el sitio original.
- **Resultado:** cambios guardados en GitHub. La revisión visual debe realizarse en el navegador local; no se ejecutaron lint, build ni pruebas de navegador.

## 2026-10-12 — Detalles cálidos y microinteracciones

- **Archivo afectado:** `aconquija-react/src/App.css`, además de la documentación en `aconquija-react/Metodologia.md`.
- **Cambio concreto:** se agregaron líneas doradas pequeñas bajo rótulos de sección, transiciones más cálidas en tarjetas fotográficas, títulos de lugares, botones, iconos y pestañas; también una entrada escalonada para estadísticas, tarjetas y servicios cuando sus contenedores se revelan al desplazarse.
- **Motivo:** dar una sensación más viva, natural y cálida manteniendo el diseño sobrio y las fotografías existentes.
- **Autorización:** petición directa del usuario el 2026-10-12 para agregar animaciones y detalles visuales.
- **Alcance respetado:** solo CSS y documentación dentro de `aconquija-react/`; no se modificaron JSX, imágenes, textos, estructura ni el sitio original.
- **Accesibilidad:** se conserva la regla existente `prefers-reduced-motion`.
- **Resultado:** actualización guardada en GitHub. Verificación visual local pendiente; no se ejecutaron lint, build ni pruebas de navegador.

## 2026-10-12 — Ajuste de la animación lateral del párrafo de introducción

- **Archivos afectados:** `aconquija-react/src/App.jsx`, `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** se añadió la clase `reveal` al propio párrafo para que la animación empiece cuando el texto entra en la zona visible. Se aumentó el desplazamiento inicial a 76 px y la duración a 1,7 segundos, con una demora de 0,08 segundos. El movimiento sigue siendo de derecha a izquierda y termina en la posición original.
- **Motivo:** ajuste solicitado por el usuario para que el texto se anime al aparecer en pantalla y el deslizamiento sea más lento.
- **Autorización:** petición directa del usuario el 2026-10-12 para corregir el momento de activación y suavizar la velocidad de la animación previamente autorizada.
- **Alcance respetado:** solo se modificó el párrafo de introducción y su CSS; no se cambiaron sus palabras, las imágenes, otras secciones ni el sitio original. No se agregaron dependencias.
- **Accesibilidad:** la preferencia del sistema para reducir movimiento sigue respetada por la regla CSS existente.
- **Resultado:** cambios guardados en la rama `main` y revisados estáticamente en GitHub. No se ejecutaron build, lint ni pruebas de navegador.


## 2026-10-12 — Inversión de la dirección de entrada del párrafo

- **Archivos afectados:** `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** se invirtió el desplazamiento inicial de `translateX(76px)` a `translateX(-76px)`. El párrafo ahora aparece desde la izquierda y se desplaza hacia la derecha hasta su posición original; se conservan los 1,7 segundos, la demora de 0,08 segundos y la activación al entrar en pantalla.
- **Motivo:** el usuario aclaró que quería la dirección contraria a la versión anterior.
- **Autorización:** petición directa del usuario el 2026-10-12.
- **Alcance respetado:** solo se invirtió la dirección de esta animación y se actualizó la documentación. No se modificaron el texto, otras secciones ni el sitio original.
- **Validación:** se comprobó estáticamente el cambio en CSS y documentación. No se ejecutaron build, lint ni pruebas de navegador.


## 2026-10-12T23:47:00-03:00 — Carrusel infinito y flechas de escritorio para Lugares

- **Archivos afectados:** `aconquija-react/src/App.jsx`, `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** se duplicó la secuencia de cinco lugares en tres tramos para crear un bucle horizontal fluido, reajustando la posición de scroll al cruzar los límites equivalentes. Se agregaron flechas anterior/siguiente que desplazan una tarjeta por vez y se muestran solo en pantallas mayores a 880 px.
- **Interacción conservada:** se mantiene el scroll horizontal nativo para deslizar con el dedo o panel táctil, y se conserva el desplazamiento horizontal de escritorio. No se agregaron dependencias ni se modificó el sitio original fuera de `aconquija-react/`.
- **Motivo:** el usuario eligió la opción A: carrusel infinito con transición continua, con flechas en computadora y gesto de deslizamiento disponible tanto en móvil como en PC/notebook.
- **Autorización:** aprobación explícita del usuario el 2026-10-12.
- **Resultado:** implementación y documentación actualizadas en la rama `main`; revisión estática prevista tras guardar. No se ejecutaron build, lint ni pruebas de navegador.


## 2026-10-12 — Movimiento automático y tarjeta central elevada en Lugares

- **Archivos afectados:** `aconquija-react/src/App.jsx`, `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** se agregó desplazamiento automático continuo hacia la derecha con bucle infinito. La animación se pausa mientras el puntero está encima o el visitante interactúa con el carrusel, y se reanuda al terminar la interacción. La tarjeta más cercana al centro visible recibe una elevación sutil, escala y sombra, con intensidad reducida en pantallas pequeñas.
- **Accesibilidad:** el avance automático respeta `prefers-reduced-motion`; el gesto manual y las flechas existentes se conservan.
- **Motivo:** el usuario pidió que el carrusel se moviera siempre hacia la derecha y que la imagen central se levantara levemente.
- **Autorización:** petición directa del usuario el 2026-10-12.
- **Resultado:** código y documentación actualizados en la rama `main`. Revisión estática realizada; no se ejecutaron build, lint ni pruebas de navegador.


## 2026-10-13T19:00:00-03:00 — Carrusel de Lugares centrado y movimiento automático más visible

- **Archivos afectados:** `aconquija-react/src/App.jsx`, `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** en escritorio, el carrusel queda centrado y muestra tres tarjetas completas, sin una cuarta imagen cortada en el borde. En móvil se muestra una tarjeta completa por vez y se desactiva el efecto de elevación de la tarjeta central. Se conserva el tamaño amplio de las imágenes en teléfonos.
- **Movimiento automático:** se aumentó la velocidad de avance y se eliminó la pausa automática por hover o foco, para que no se detenga simplemente porque el puntero queda encima. La interacción táctil mantiene una pausa breve; se conserva el bucle infinito y la preferencia de reducir movimiento del sistema.
- **Motivo:** corregir el descentrado y la media imagen visible, y asegurar que el avance automático sea más perceptible también en teléfonos.
- **Autorización:** petición directa del usuario el 2026-10-13.
- **Resultado:** archivos actualizados en la rama `main` y revisados estáticamente. No se ejecutaron build, lint ni pruebas de navegador.


## 2026-10-13T19:00:00-03:00 — Corrección del bucle infinito para evitar bloqueos al deslizar

- **Archivo afectado:** `aconquija-react/src/App.jsx`; documentación actualizada en `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** se corrigieron los límites que reajustan el scroll entre las copias del carrusel. Antes, al retroceder apenas desde el punto inicial, el evento de scroll podía sumar todo el ancho del bucle repetidamente, interrumpiendo el gesto táctil. Ahora el salto solo sucede cerca de los extremos de la secuencia central.
- **Movimiento automático:** se conserva el avance automático hacia la derecha, la pausa breve al interactuar y la preferencia de reducir movimiento del sistema.
- **Motivo:** el usuario informó que el carrusel no avanzaba automáticamente como esperaba y se trababa al deslizar en teléfono.
- **Autorización:** reporte directo del usuario el 2026-10-13.
- **Resultado:** cambios guardados en `main`; revisión estática realizada. No se ejecutaron build, lint ni pruebas de navegador.

## 2026-10-13T19:15:00-03:00 — Reactivar el avance automático del carrusel de Lugares

- **Archivos afectados:** `aconquija-react/src/App.jsx`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** se quitó la condición que impedía el avance automático cuando el sistema reporta `prefers-reduced-motion: reduce`. El carrusel ahora avanza hacia la derecha siempre que no esté pausado por una interacción manual; se conserva la pausa breve al deslizar, el bucle infinito y el arreglo táctil anterior.
- **Motivo:** el usuario confirmó que el bloqueo táctil ya se había solucionado, pero el carrusel seguía sin moverse, y autorizó probar desactivar esta condición como posible causa.
- **Autorización:** petición directa del usuario el 2026-10-13.
- **Alcance respetado:** se modificó únicamente esa condición de la animación; no se alteraron estilos, imágenes, textos ni el sitio original fuera de `aconquija-react/`.
- **Resultado:** cambio y documentación guardados en `main`; revisión estática realizada. No se ejecutaron build, lint ni pruebas de navegador.

## 2026-10-13T19:25:00-03:00 — Corrección del avance continuo del carrusel

- **Archivos afectados:** `aconquija-react/src/App.jsx`, `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Problema investigado:** el carrusel combinaba avance automático píxel a píxel con `scroll-snap-type: x proximity` y `scroll-snap-align: start`. Ese ajuste puede competir con el desplazamiento programático y dar la impresión de que el carrusel no avanza.
- **Cambio concreto:** se desactivó el ajuste a tarjetas en el carrusel y se fijó `scroll-behavior: auto` en el contenedor. La animación ahora calcula el desplazamiento a partir del tiempo entre cuadros, con un límite al tiempo acumulado para evitar saltos grandes si el navegador se demora.
- **Comportamiento conservado:** bucle infinito, pausa breve durante la interacción y deslizamiento horizontal manual en teléfono.
- **Autorización:** petición directa del usuario el 2026-10-13 para revisar el problema y corregirlo si se encontraba una causa probable.
- **Resultado:** archivos actualizados en `main` y comprobados estáticamente tras guardar. No se ejecutaron build, lint ni pruebas en navegador, por lo que la causa se considera probable y no confirmada visualmente.

## 2026-10-13T19:35:00-03:00 — Cambiar el carrusel a avance por tarjeta

- **Archivos afectados:** `aconquija-react/src/App.jsx`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** se eliminó la animación de desplazamiento continuo por píxeles y se reemplazó por un avance suave de una tarjeta cada 3,8 segundos, usando `scrollBy({ left: step, behavior: 'smooth' })` con el mismo cálculo de distancia que el botón de siguiente.
- **Interacción:** al tocar o deslizar el carrusel, la reproducción automática queda pausada temporalmente durante 4 segundos; se conserva el bucle infinito y el scroll táctil nativo.
- **Motivo y autorización:** el usuario aclaró que esperaba un movimiento suave hacia la derecha, una pausa de unos segundos y la repetición infinita, similar al botón de siguiente; autorización directa el 2026-10-13.
- **Resultado:** cambios guardados en `main` y revisados estáticamente. No se ejecutaron build, lint ni pruebas de navegador.

## 2026-10-13 — Reducir la espera del carrusel de Lugares

- **Archivos afectados:** `aconquija-react/src/App.jsx`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** el intervalo entre avances automáticos del carrusel se redujo de 3,8 a 2,5 segundos.
- **Comportamiento conservado:** desplazamiento suave de una tarjeta hacia la derecha, bucle infinito, interacción táctil y pausa temporal al interactuar manualmente.
- **Motivo y autorización:** el usuario pidió acortar el tiempo de espera entre imágenes el 2026-10-13.
- **Resultado:** archivos actualizados en `main` y revisados estáticamente. No se ejecutaron lint, build ni pruebas de navegador.

## 2026-10-13 — Corregir el rebote de la tarjeta central en Lugares

- **Archivos afectados:** `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Problema:** al pasar el puntero sobre una tarjeta que se convertía en la central, la regla general de hover podía reemplazar su elevación y producir un efecto de rebote.
- **Cambio concreto:** el hover de las tarjetas no centrales queda separado y la tarjeta `.is-center` conserva su transformación de elevación incluso al estar bajo el puntero.
- **Motivo y autorización:** el usuario reportó un rebote al pasar por Bosque de Alisos el 2026-10-13.
- **Resultado:** cambio guardado en `main` y revisado estáticamente. No se ejecutaron lint, build ni pruebas de navegador.

## 2026-10-13 — Estabilizar la tarjeta central y añadir sombreado al carrusel

- **Archivos afectados:** `aconquija-react/src/App.jsx`, `aconquija-react/src/App.css` y `aconquija-react/Registro.md`.
- **Problema:** la detección de la tarjeta central usaba `getBoundingClientRect()`, que incluye la escala y elevación visual. Al cambiar la transformación durante el desplazamiento, la tarjeta podía alternar de centro y dar un efecto de trabado/rebote.
- **Cambio concreto:** la detección del centro ahora usa `offsetLeft` y `offsetWidth` junto con el desplazamiento del contenedor, medidas que no cambian por las transformaciones visuales. Se añadió una sombra suave a las imágenes y una sombra algo más marcada a la tarjeta central.
- **Motivo y autorización:** el usuario pidió corregir el rebote y añadir sombreado el 2026-10-13; indicó que no era necesario actualizar `Metodologia.md` para este tipo de ajuste.
- **Resultado:** cambios guardados en `main` y revisados estáticamente. No se ejecutaron lint, build ni pruebas de navegador.

## 2026-10-13 — Sombreado y centrado automático del carrusel de Lugares

- **Archivos afectados:** `aconquija-react/src/App.jsx`, `aconquija-react/src/App.css` y `aconquija-react/Registro.md`.
- **Cambio concreto:** se reforzó la sombra de las imágenes y se añadió un ajuste automático al terminar el desplazamiento horizontal: el carrusel detecta la tarjeta más cercana al centro y la alinea suavemente cuando el usuario deja de moverlo con el panel táctil. Se conserva el bucle infinito y el avance automático.
- **Motivo:** el usuario pidió un sombreado más visible y que las imágenes no queden descentradas ni cortadas al desplazarse con el panel táctil.
- **Autorización:** petición directa del usuario el 2026-10-13.
- **Alcance respetado:** no se modificó `Metodologia.md`, ni el sitio original fuera de `aconquija-react/`.
- **Resultado:** cambios guardados en GitHub y revisados estáticamente. No se ejecutaron build, lint ni pruebas de navegador; la comprobación visual local sigue pendiente.

## 2026-10-13 — Suavizar las líneas divisorias de Servicios

- **Archivos afectados:** `aconquija-react/src/App.css` y `aconquija-react/Registro.md`.
- **Cambio concreto:** las líneas verticales entre los servicios pasan de negro sólido a gris con transparencia (`rgba(105, 110, 116, .24)`), manteniendo el grosor de 1 px y el comportamiento adaptable para pantallas más estrechas.
- **Motivo y autorización:** el usuario pidió que los separadores de los cuatro servicios fueran más finos visualmente, grises y más transparentes el 2026-10-13.
- **Alcance respetado:** solo se modificó el estilo de los separadores; no se tocó `Metodologia.md` ni el sitio original fuera de `aconquija-react/`.
- **Resultado:** cambios guardados en `main` y revisados estáticamente. No se ejecutaron build, lint ni pruebas de navegador.

## 2026-10-13 — Añadir iconos grises a las tarjetas de Servicios

- **Archivos afectados:** `aconquija-react/src/App.jsx`, `aconquija-react/src/App.css` y `aconquija-react/Registro.md`.
- **Cambio concreto:** se añadió un icono SVG lineal gris dentro de cada tarjeta, debajo del texto: casa para alojamiento, plato y cubiertos para gastronomía, brújula con montañas para guías y excursiones, y pieza de cerámica para artesanías. Los iconos mantienen un estilo de trazo sencillo y se aclaran levemente al pasar el cursor.
- **Motivo y autorización:** el usuario pidió iconos típicos para alojamiento y comida, y diseños creativos para las otras dos categorías, todos grises y ubicados debajo del contenido dentro de cada tarjeta, el 2026-10-13.
- **Alcance respetado:** no se cambiaron los textos ni los separadores de Servicios; no se modificó `Metodologia.md` ni el sitio original fuera de `aconquija-react/`.
- **Resultado:** cambios guardados en `main` y revisados estáticamente. No se ejecutaron build, lint ni pruebas de navegador.

## 2026-10-13 — Ajustar iconos de gastronomía y excursiones

- **Archivos afectados:** `aconquija-react/src/App.jsx` y `aconquija-react/Registro.md`.
- **Cambio concreto:** el icono de gastronomía ahora muestra un plato redondo visto desde arriba, con cuchara a la izquierda y tenedor a la derecha, ambos sobre el plato. El icono de guías y excursiones se reemplazó por un mapa de tesoro con camino punteado y una X como destino. Se conserva el estilo lineal gris y la ubicación debajo de cada descripción dentro de la tarjeta.
- **Motivo y autorización:** el usuario pidió estos dos diseños el 2026-10-13.
- **Alcance respetado:** no se modificó `App.css`, los textos ni `Metodologia.md`; tampoco el sitio original fuera de `aconquija-react/`.
- **Resultado:** cambios guardados en `main` y revisados estáticamente. No se ejecutaron build, lint ni pruebas de navegador.

## 2026-10-13 — Rediseñar el mapa de guías y el color de los iconos de Servicios

- **Archivos afectados:** `aconquija-react/src/App.jsx`, `aconquija-react/src/App.css` y `aconquija-react/Registro.md`.
- **Cambio concreto:** el icono de Guías y excursiones ahora muestra montañas puntiagudas con un sendero punteado. Todos los iconos de Servicios pasan a negro en estado normal y a dorado arena (`#cdaa78`) al pasar el cursor por la tarjeta o al enfocarla con teclado.
- **Motivo y autorización:** el usuario pidió una ilustración de montañas puntiagudas con sendero para guías y que todos los iconos pasaran de gris a negro, cambiando a dorado arena al poner el cursor sobre la tarjeta, el 2026-10-13.
- **Alcance respetado:** se mantuvieron los textos, las tarjetas y los separadores; no se modificó `Metodologia.md` ni el sitio original fuera de `aconquija-react/`.
- **Resultado:** cambios guardados en `main` y revisados estáticamente. No se ejecutaron build, lint ni pruebas de navegador.

## 2026-10-13 — Añadir ventana al icono de alojamiento

- **Archivos afectados:** `aconquija-react/src/App.jsx` y `aconquija-react/Registro.md`.
- **Cambio concreto:** se quitaron los dos pequeños puntos de la fachada de la casa en el icono de «Dónde dormir» y se agregó una ventana cuadrada, manteniendo el trazo, tamaño y colores interactivos existentes.
- **Motivo y autorización:** petición directa del usuario el 2026-10-13.
- **Alcance respetado:** solo se ajustó el SVG de la casa; no se modificaron los demás iconos, estilos, textos, `Metodologia.md` ni el sitio original fuera de `aconquija-react/`.
- **Resultado:** cambios guardados en GitHub y revisados estáticamente. No se ejecutaron build, lint ni pruebas de navegador.

## 2026-10-13 — Dejar solo la puerta en el icono de alojamiento

- **Archivos afectados:** `aconquija-react/src/App.jsx` y `aconquija-react/Registro.md`.
- **Cambio concreto:** se retiró la ventana del icono de la casa para evitar que se superponga con la puerta; se conservaron únicamente el contorno de la casa y la puerta.
- **Motivo y autorización:** el usuario indicó que la ventana chocaba con la puerta y pidió dejar solamente la puerta, el 2026-10-13.
- **Alcance respetado:** solo se ajustó el SVG de alojamiento; no se modificaron otros iconos, estilos, textos, `Metodologia.md` ni el sitio original fuera de `aconquija-react/`.
- **Resultado:** cambio guardado en GitHub y revisado estáticamente. No se ejecutaron build, lint ni pruebas de navegador.


## 2026-10-13 — Reforzar el dorado de los iconos al pasar el cursor

- **Archivos afectados:** `aconquija-react/src/App.css` y `aconquija-react/Registro.md`.
- **Cambio concreto:** el color interactivo de los iconos de las tarjetas de Servicios cambia de dorado arena (`#cdaa78`) a un dorado más intenso (`#e0a800`) al pasar el cursor o al enfocar la tarjeta con teclado.
- **Motivo y autorización:** el usuario pidió que el color al poner el cursor sobre la tarjeta fuera un dorado más fuerte y visible, el 2026-10-13.
- **Alcance respetado:** solo se modificó el color interactivo de los iconos de Servicios y se registró el cambio; no se alteraron los colores base, las tarjetas, otros iconos ni `Metodologia.md` o el sitio original fuera de `aconquija-react/`.
- **Resultado:** cambio guardado y revisado estáticamente en GitHub. No se ejecutaron build, lint ni pruebas de navegador.

## 2026-10-13 — Animaciones sutiles para las tarjetas de Servicios

- **Archivos afectados:** `aconquija-react/src/App.css` y `aconquija-react/Registro.md`.
- **Cambio concreto:** se añadió una elevación breve de 4 px con sombra suave al pasar el cursor o enfocar una tarjeta; una línea dorada intensa (`#e0a800`) crece desde el borde inferior, y el icono sube apenas mientras mantiene su cambio de color. Se conserva la aparición escalonada existente al entrar en la sección.
- **Motivo y autorización:** el usuario aprobó la combinación de aparición escalonada, elevación con sombra, icono dorado y línea dorada animada, con intensidad elegante y sutil, el 2026-10-13.
- **Accesibilidad y alcance:** los efectos interactivos también se activan con foco de teclado y se conserva la regla global existente para reducir movimiento. Solo se modificaron los estilos de Servicios y este registro; no se tocó `App.jsx`, `Metodologia.md` ni el sitio original fuera de `aconquija-react/`.
- **Resultado:** cambios guardados y revisados estáticamente en GitHub. No se ejecutaron build, lint ni pruebas de navegador.

## 2026-10-13 — Animaciones de Servicios más pausadas y activadas al entrar en pantalla

- **Archivos afectados:** `aconquija-react/src/App.jsx`, `aconquija-react/src/App.css` y `aconquija-react/Registro.md`.
- **Cambio concreto:** se alargó ligeramente la aparición escalonada de las cuatro tarjetas, con pausas progresivas un poco mayores. También se hicieron más pausadas la elevación, la sombra, el movimiento del icono y el crecimiento de la línea dorada al interactuar.
- **Detección de la sección:** las animaciones de los elementos revelables dentro de Servicios se activan al entrar en la zona visible y se preparan de nuevo al salir, para volver a ejecutarse cuando el visitante regrese a esa sección. Las demás secciones conservan su comportamiento anterior.
- **Motivo y autorización:** el usuario pidió que la animación fuera un poco más lenta y que se activara al detectar que está en la sección de Servicios, el 2026-10-13.
- **Alcance respetado:** solo se ajustaron el disparador de aparición, los tiempos de animación de Servicios y este registro. No se modificó `Metodologia.md` ni el sitio original fuera de `aconquija-react/`.
- **Resultado:** cambios guardados y revisados estáticamente en GitHub. No se ejecutaron build, lint ni pruebas de navegador.

## 2026-10-13 — Mejorar la legibilidad de los iconos del clima

- **Archivos afectados:** `aconquija-react/src/App.jsx`, `aconquija-react/src/App.css` y `aconquija-react/Registro.md`.
- **Cambio concreto:** se reemplazaron los emojis pequeños del indicador meteorológico por iconos SVG lineales, más nítidos y de tamaño uniforme. El icono de cielo nublado ahora tiene un contorno de nube más grande y definido; también se diferenciaron visualmente sol, parcialmente nublado, niebla, lluvia, nieve y tormenta.
- **Accesibilidad:** el indicador incorpora el estado del clima en su texto accesible y en el título; los dibujos decorativos no se anuncian por separado.
- **Motivo y autorización:** el usuario pidió mejorar los iconos del clima porque el de tiempo nublado no se distinguía bien, el 2026-10-13.
- **Alcance respetado:** solo se modificaron los iconos y sus estilos, más este registro. No se modificó `Metodologia.md` ni el sitio original fuera de `aconquija-react/`.
- **Resultado:** cambios guardados y revisados estáticamente en GitHub. No se ejecutaron build, lint ni pruebas de navegador.

## 2026-10-13T03:01:00-03:00 — Subrayado temporizado en PC y sección activa en móvil

- **Archivos afectados:** `aconquija-react/src/App.jsx`, `aconquija-react/src/App.css`, `aconquija-react/Metodologia.md` y `aconquija-react/Registro.md`.
- **Cambio concreto:** en escritorio, la línea dorado arena aparece al pasar el puntero o enfocar con teclado un enlace y crece de izquierda a derecha durante 1,45 segundos. Al salir del enlace, vuelve a ocultarse. En móvil, la línea permanece debajo del enlace que corresponde a la sección actual.
- **Función reutilizada:** se amplió el `updateScroll` ya existente en `HomePage`, que actualiza la barra de progreso de lectura y el estado del encabezado. Ahora también identifica la sección actual y actualiza las clases `is-active` y `aria-current` de los enlaces principales, sin agregar otro listener de desplazamiento.
- **Motivo y autorización:** el usuario aprobó la interacción diferenciada para PC y teléfono y pidió expresamente revisar si podía reutilizarse una función existente, el 2026-10-13.
- **Alcance respetado:** no se añadieron dependencias ni se modificó el sitio original fuera de `aconquija-react/`.
- **Resultado:** cambios guardados en `main` y revisados estáticamente en GitHub. No se ejecutaron build, lint ni pruebas de navegador.


## 2026-10-13 — Primera etapa de modularización de React

- **Archivos creados:** `src/components/layout/Header.jsx`, `Footer.jsx`, `SocialLinks.jsx`, `src/components/ui/WeatherBadgeView.jsx`, `src/pages/HomePage.jsx`, `PagePlaceholder.jsx`, `NotFound.jsx` y `src/data/routes.js`.
- **Archivo actualizado:** `src/App.jsx`.
- **Cambio:** los componentes existentes se trasladaron a archivos según su responsabilidad; las rutas aprobadas se centralizaron en `data/routes.js` y `App.jsx` quedó dedicado a React Router. La página de inicio se trasladó sin rediseñar sus secciones ni su lógica.
- **Autorización:** el usuario aprobó el mapa de carpetas y componentes el 2026-10-13.
- **Alcance:** no se modificaron intencionalmente textos, imágenes, estilos ni el sitio original fuera de `aconquija-react/`.
- **Verificación:** revisión estática de imports y estructura. No se ejecutaron build, lint ni pruebas de navegador; la extracción de secciones y organización de estilos queda pendiente.


## 2026-10-13 — Extraer secciones reutilizables de la página de inicio

- **Archivos creados:** `src/components/home/HeroSection.jsx`, `IntroSection.jsx`, `ExploreSection.jsx`, `PlacesCarousel.jsx`, `SeasonsSection.jsx`, `ServicesSection.jsx`, `AboutSection.jsx` y `src/data/homeData.js`.
- **Archivo actualizado:** `src/pages/HomePage.jsx`.
- **Cambio:** `HomePage` ahora compone componentes de sección. El carrusel conserva refs, avance automático, bucle infinito, pausa manual y centrado en su propio componente. Los datos de estaciones, circuitos y lugares se centralizaron en `homeData.js`.
- **Motivo y autorización:** implementación del mapa de arquitectura aprobado por el usuario el 2026-10-13.
- **Alcance:** se conservaron clases CSS, textos, imágenes y comportamiento intencional. `App.css` no se dividió para evitar cambios visuales sin auditar selectores. No se modificó el sitio original fuera de `aconquija-react/`.
- **Verificación:** revisión estática de imports, exports, datos y composición. No se ejecutaron build, lint ni pruebas de navegador.


## 2026-10-13 — Separación de estilos por responsabilidad

- **Archivo actualizado:** `src/App.css`, que queda como punto de entrada de estilos.
- **Archivos creados:** `src/styles/variables.css`, `global.css`, `layout.css`, `home-hero.css`, `page-hero.css`, `home.css`, `pages.css` y `responsive.css`.
- **Cambio:** se trasladaron los bloques CSS existentes por tramos contiguos para conservar el orden de cascada original: variables y fuentes, reglas globales, navegación/progreso, hero de inicio, hero de páginas internas, secciones de inicio/pie, contenido de páginas internas y reglas responsive/movimiento.
- **Alcance:** se reorganizaron declaraciones sin rediseñar valores, selectores ni puntos de corte. Se mantiene `App.css` como entrada para no cambiar el import existente en React. El CSS general de `index.css` queda intacto.
- **Verificación:** revisión estática de límites y orden de imports. No se ejecutaron build, lint ni comprobación visual en navegador.


## 2026-10-13 — Dar más aire a la portada principal

- **Archivos afectados:** `src/styles/home-hero.css`, `src/styles/responsive.css` y `Registro.md`.
- **Cambio concreto:** se redujo moderadamente el tamaño máximo y proporcional del título «Aconquija»; se hizo algo más compacto el subtítulo y el separador; el bloque central termina ahora ligeramente más abajo (10 px respecto del centro vertical). En móviles también se redujo el tamaño del título para mantener la composición despejada en pantallas estrechas.
- **Motivo:** dar más protagonismo visual a los Nevados, evitando que el título y el texto tapen tanto el paisaje, sin volver el título demasiado discreto.
- **Autorización:** petición directa del usuario el 2026-10-13 para aplicar las dos primeras mejoras visuales; el usuario buscará por separado la fotografía original de mayor calidad.
- **Alcance respetado:** no se cambió la imagen de fondo, el tratamiento de la imagen ni otras secciones de la página. No se modificó `Metodologia.md` ni el sitio original fuera de `aconquija-react/`.
- **Verificación:** cambios revisados estáticamente y guardados en GitHub. No se ejecutaron build, lint ni pruebas visuales en navegador; el ajuste visual final queda pendiente de la revisión del usuario.


## 2026-10-13 — Entrada cinematográfica de la portada

- **Archivos afectados:** `src/components/layout/Header.jsx`, `src/pages/HomePage.jsx`, `src/styles/home-hero.css`, `src/styles/responsive.css` y `Registro.md`.
- **Cambio concreto:** en la página de inicio, la navegación aparece primero con un desplazamiento vertical discreto; el fondo comienza su alejamiento y el título con su subtítulo entra después; el indicador «Deslizá para explorar» aparece al final. Se ajustó la duración del alejamiento de la imagen a 7,5 segundos para que el paisaje empiece a revelarse antes de que aparezca el contenido.
- **Reutilización y alcance:** se reutilizaron las animaciones existentes del hero y del separador; la nueva entrada de navegación se activa mediante una propiedad que solo se pasa desde `HomePage`, por lo que no cambia la entrada de las páginas internas. No se cambió la fotografía, el texto ni el degradado del título.
- **Accesibilidad:** se conserva la preferencia de movimiento reducido y se eliminan las esperas de las animaciones cuando esa preferencia está activa.
- **Autorización:** el usuario aprobó probar esta secuencia el 2026-10-13.
- **Verificación:** cambios revisados estáticamente y guardados en GitHub. No se ejecutaron build, lint ni pruebas de navegador; falta que el usuario revise el resultado visual.


## 2026-10-13 — Actualizar el ícono de la pestaña del navegador

- **Archivos afectados:** `index.html`, `public/aconquija-icono.png` y `Registro.md`.
- **Cambio concreto:** se reemplazó el favicon violeta heredado de la plantilla por el ícono oficial de Aconquija que ya utiliza el sitio original, copiado dentro de `public/` para que Vite lo sirva correctamente.
- **Alcance:** solo cambia el ícono mostrado en la pestaña del navegador; no se modificaron el logo visible del encabezado ni el sitio original fuera de `aconquija-react/`.
- **Verificación:** se revisó el enlace de favicon en `index.html` y se preparó el recurso desde `imagenes/aconquija_icono.png`. No se ejecutaron build ni pruebas de navegador.

## 2026-10-13 — Mejorar el contraste del botón de menú en móviles

- **Archivos afectados:** `src/styles/responsive.css` y `Registro.md`.
- **Cambio concreto:** el botón hamburguesa en pantallas de hasta 880 px ahora tiene fondo pizarra oscuro (`#161b22`), contorno blanco y conserva las tres líneas blancas. El estilo se aplica solo a la versión móvil; no se alteran el menú lateral, el encabezado de escritorio ni otras secciones.
- **Motivo y autorización:** el usuario pidió que el fondo del botón coincidiera con el pizarra oscuro de la navegación y que el contorno blanco lo distinguiera como botón, manteniendo las líneas blancas, el 2026-10-13.
- **Alcance respetado:** no se modificó `Metodologia.md` ni el sitio original fuera de `aconquija-react/`.
- **Verificación:** archivos revisados estáticamente y cambio guardado en GitHub. No se ejecutaron build, lint ni pruebas de navegador.

## 2026-10-13 — Sincronizar el fondo del botón móvil con la barra de navegación

- **Archivos afectados:** `src/styles/responsive.css` y `Registro.md`.
- **Cambio concreto:** el botón hamburguesa comienza con el fondo transparente y conserva su contorno y líneas blancas. Cuando el encabezado recibe la clase `scrolled`, el botón adopta el mismo fondo pizarra translúcido que la barra de navegación (`rgba(22,27,34,.93)`). Se reutiliza el estado de desplazamiento ya existente, sin añadir listeners ni JavaScript.
- **Motivo y autorización:** el usuario pidió que el fondo del botón fuera transparente al inicio y que tomara el color junto con la barra de navegación al desplazarse, el 2026-10-13.
- **Alcance respetado:** solo se modificaron los estilos móviles y este registro; no se tocó `Metodologia.md` ni el sitio original fuera de `aconquija-react/`.
- **Verificación:** archivos revisados estáticamente y cambio guardado en GitHub. No se ejecutaron build, lint ni pruebas de navegador.


## 2026-10-13 — Simplificar el encabezado de Estaciones en teléfonos

- **Archivos afectados:** `src/styles/responsive.css` y `Registro.md`.
- **Cambio concreto:** en pantallas de hasta 600 px se oculta el párrafo «Cada momento del año tiene su propia versión. Elegí la que te llama.» y se reduce el tamaño del título de Estaciones, ajustando también su interlineado y margen superior.
- **Motivo y autorización:** petición directa del usuario el 2026-10-13 para simplificar exclusivamente la presentación móvil de Estaciones.
- **Alcance respetado:** los ajustes están dentro de una media query para teléfonos; no cambian la presentación de escritorio ni la de pantallas mayores de 600 px. No se modificó `Metodologia.md` ni el sitio original fuera de `aconquija-react/`.
- **Verificación:** reglas revisadas estáticamente y guardadas en GitHub. No se ejecutaron build, lint ni pruebas de navegador.


## 2026-10-13 — Primera versión del mapa interactivo de Aconquija (borrador geográfico)

- **Archivos afectados:** `src/components/home/IntroSection.jsx`, `src/components/home/AconquijaInteractiveMap.jsx`, `src/data/aconquijaMapData.js`, `src/styles/home.css`, `src/styles/responsive.css` y `Registro.md`.
- **Cambio concreto:** se incorporó un mapa SVG interactivo de escritorio en la sección de introducción, junto al texto existente. Al pasar el cursor por un marcador aparece el nombre; al seleccionarlo cambian el título y la descripción, y se muestra una ficha con referencias de acceso y estado de verificación. Se añadieron las 16 localidades confirmadas, una capa visual para RP 48, la conexión de referencia RP 114 y ramales rurales provisionales. Los datos de caminos, superficies, coordenadas preliminares y fuentes quedaron centralizados en `src/data/aconquijaMapData.js` para facilitar correcciones posteriores.
- **Motivo y autorización:** petición directa del usuario del 2026-10-13 para implementar el mapa y registrar los caminos, teniendo en cuenta rutas principales y caminos rurales/de tierra.
- **Precisión y límites:** este primer mapa es un borrador visual, no una geometría GIS exacta del límite municipal. Las posiciones visuales son esquemáticas; solo algunas localidades tienen coordenadas preliminares de fuentes abiertas. Las líneas secundarias son hipótesis editables y están marcadas como pendientes de verificación. El tramo Buena Vista–Río Potrero se identifica como pavimentado según la referencia consultada; no se presenta el mapa como GPS ni se deben usar sus líneas para navegación real.
- **Alcance respetado:** solo se modificó la aplicación dentro de `aconquija-react/`; no se tocó el sitio original ni `Metodologia.md`.
- **Verificación:** revisión estática del código y de las rutas de datos en GitHub. No se ejecutaron `npm run build`, lint ni pruebas en navegador; la revisión visual local queda pendiente para que el usuario pueda señalar correcciones.


### 16:30:00 -03:00 — Ajuste de integración del mapa

- **Archivos afectados:** `src/components/home/IntroSection.jsx`, `src/data/aconquijaMapData.js` y `Registro.md`.
- **Cambio concreto:** se conserva el contador original de 22 localidades del sitio (el mapa muestra inicialmente las 16 localidades confirmadas para esta etapa), se mantienen las clases de animación de entrada de la introducción y se corrige el identificador interno del tramo de la Cuesta de la Chilca.
- **Motivo y autorización:** ajuste necesario dentro de la petición directa de incorporar el mapa, para no alterar un dato general del sitio ni quitar la animación existente.
- **Resultado:** corrección aplicada en GitHub; no se ejecutaron build, lint ni pruebas de navegador.

## 2026-10-13 — Retirar el mapa interactivo de la introducción

### 2026-10-13 17:08:24 -03:00
- **Archivos afectados:** `src/components/home/IntroSection.jsx`, `src/components/home/AconquijaInteractiveMap.jsx`, `src/data/aconquijaMapData.js`, `src/styles/home.css`, `src/styles/responsive.css` y `Registro.md`.
- **Cambio concreto:** se quitó el mapa de la sección de introducción y se eliminaron sus funciones de selección/hover de localidades, las fichas de acceso y los datos de localidades y tramos viales que solo utilizaba ese mapa. El texto general de Aconquija permanece y ahora ocupa el espacio de la sección sin la columna del mapa. Se conservaron los indicadores de altura, habitantes y cantidad de localidades.
- **Motivo:** el usuario indicó que el cambio del mapa no le gustó y pidió retirarlo junto con sus funciones.
- **Autorización:** petición directa del usuario el 2026-10-13.
- **Alcance respetado:** los cambios quedaron dentro de `aconquija-react/`; no se modificó el sitio HTML/CSS/JavaScript original ni `Metodologia.md`.
- **Verificación:** se comprobaron las referencias directas del componente y de los datos del mapa antes de eliminarlos. Se actualizaron los estilos de escritorio y responsive asociados al mapa. No se ejecutaron `npm run build`, lint ni pruebas de navegador, por lo que la validación visual/funcional queda pendiente.


## 2026-10-14 — Incorporar reproductor flotante de Spotify

### 2026-10-14 10:56:00 -03:00
- **Archivos afectados:** `src/components/ui/SpotifyFloatingPlayer.jsx` (nuevo), `src/styles/spotify-player.css` (nuevo), `src/App.jsx`, `src/App.css` y `Registro.md`.
- **Cambio concreto:** se añadió un reproductor flotante con el álbum de Spotify compartido por el usuario. El botón permite abrir y cerrar el panel; la reproducción queda a cargo del reproductor oficial y comienza manualmente cuando la persona presiona reproducir dentro de Spotify. El componente se monta dentro de `BrowserRouter`, por lo que está disponible en las rutas de la aplicación. Se añadieron estilos adaptables a móviles, foco visible para teclado y respeto por la preferencia de movimiento reducido. Se vinculó el botón de apertura con el panel mediante `aria-controls` e identificador accesible.
- **Motivo:** el usuario pidió integrar el álbum de Spotify en modo flotante y con inicio manual.
- **Autorización:** petición directa del usuario el 2026-10-14.
- **Alcance respetado:** solo se modificaron archivos dentro de `aconquija-react/`; no se modificó el sitio HTML/CSS/JavaScript original ni `Metodologia.md`.
- **Resultado:** integración guardada en GitHub y pendiente de comprobación de compilación y visual en navegador. No se ejecutaron `npm run build`, lint ni pruebas de navegador.


## 2026-10-14 — Mantener la música al cerrar el panel flotante

### 2026-10-14 11:10:52 -03:00
- **Archivos afectados:** `src/components/ui/SpotifyFloatingPlayer.jsx`, `src/styles/spotify-player.css` y `Registro.md`.
- **Cambio concreto:** el iframe oficial de Spotify permanece montado aunque el panel se oculte. Cerrar el panel solo lo oculta visualmente y desactiva su interacción accesible; al volver a abrirlo, el reproductor sigue en la misma instancia. Se mantiene el botón flotante para abrir y cerrar el panel.
- **Motivo:** el usuario pidió poder escuchar música mientras recorre la página sin que se corte al cerrar el panel del reproductor.
- **Autorización:** petición directa del usuario el 2026-10-14.
- **Alcance respetado:** solo se modificaron archivos dentro de `aconquija-react/`; no se modificó el sitio original ni `Metodologia.md`.
- **Resultado:** cambios guardados en GitHub y revisados estáticamente. No se ejecutaron `npm run build`, lint ni pruebas de navegador. Cerrar la pestaña completa del navegador sigue deteniendo normalmente el reproductor incrustado; este cambio mantiene la música al cerrar únicamente el panel flotante.


## 2026-10-14 — Sincronizar la entrada del botón de Spotify con «Deslizá para explorar»

### 2026-10-14 11:16:04 -03:00
- **Archivos afectados:** `src/components/ui/SpotifyFloatingPlayer.jsx`, `src/styles/spotify-player.css` y `Registro.md`.
- **Cambio concreto:** se detecta la ruta de inicio con `useLocation` y se aplica una clase únicamente en la portada. El botón «Escuchar música» comienza oculto y aparece con una animación de 0,8 segundos, con el mismo retraso de 2,15 segundos que el indicador «Deslizá para explorar». En las demás rutas conserva su aparición habitual. Se respeta la preferencia de movimiento reducido, mostrando el botón sin animación.
- **Motivo:** el usuario pidió que el botón de música aparezca junto con «Deslizá para explorar», al final de la secuencia de entrada de la portada.
- **Autorización:** petición directa del usuario el 2026-10-14.
- **Alcance respetado:** solo se modificaron archivos dentro de `aconquija-react/`; no se tocó el sitio original ni `Metodologia.md`.
- **Resultado:** cambios guardados y revisados estáticamente en GitHub. No se ejecutaron `npm run build`, lint ni pruebas visuales en navegador.

## 2026-10-14 — Cerrar el reproductor al tocar fuera del panel

### 2026-10-14 11:22:41 -03:00
- **Archivos afectados:** `src/components/ui/SpotifyFloatingPlayer.jsx` y `Registro.md`.
- **Cambio concreto:** se añadió una referencia al contenedor del reproductor y un listener temporal de `pointerdown` que cierra el panel cuando el clic o toque ocurre fuera de él. El listener solo existe mientras el panel está abierto y se elimina al cerrarlo o desmontar el componente. El iframe de Spotify permanece montado y oculto al cerrar, por lo que no se fuerza su reinicio.
- **Motivo:** el usuario pidió que el panel de música se cierre al tocar fuera de él.
- **Autorización:** petición directa del usuario el 2026-10-14.
- **Alcance respetado:** solo se modificaron archivos dentro de `aconquija-react/`; no se modificó el sitio original ni `Metodologia.md`.
- **Resultado:** cambio guardado en GitHub y revisado estáticamente. No se ejecutaron `npm run build`, lint ni pruebas en navegador.

## 2026-10-14 — Agregar dos canciones al reproductor de Spotify

### 2026-10-14 11:28:04 -03:00
- **Archivos afectados:** `src/components/ui/SpotifyFloatingPlayer.jsx`, `src/styles/spotify-player.css` y `Registro.md`.
- **Cambio concreto:** se conservaron el álbum existente y el funcionamiento del panel, y se agregaron dos reproductores oficiales de Spotify para las canciones identificadas por los enlaces compartidos por el usuario. El panel ahora permite desplazarse verticalmente si el contenido supera la altura disponible en la pantalla.
- **Motivo:** el usuario pidió agregar ambas canciones al reproductor flotante existente.
- **Autorización:** petición directa del usuario el 2026-10-14.
- **Alcance respetado:** solo se modificaron archivos dentro de `aconquija-react/`; no se modificó el sitio original ni `Metodologia.md`.
- **Resultado:** cambios guardados en GitHub y revisados estáticamente. No se ejecutaron `npm run build`, lint ni pruebas visuales en navegador.



## 2026-10-14 — Repetir las animaciones de aparición al volver a la pantalla

### 2026-10-14 11:55:17 -03:00
- **Archivos afectados:** `src/pages/HomePage.jsx` y `Registro.md`.
- **Cambio concreto:** se ajustó el observador de los elementos `.reveal` para que quite la clase `in` cuando un elemento sale de la zona visible y vuelva a agregarla cuando entra. Así, las animaciones de aparición se repiten cada vez que se vuelve a esa parte de la página, no solamente la primera vez. Se conserva el umbral de visibilidad existente y las transiciones CSS actuales.
- **Motivo:** el usuario pidió que las animaciones de texto y secciones se mantengan activas a lo largo del recorrido, para evitar que la página se sienta estática después de la primera pasada.
- **Autorización:** petición directa del usuario el 2026-10-14.
- **Alcance respetado:** solo se modificó el comportamiento de las animaciones `.reveal` en `aconquija-react/` y se documentó el cambio; no se modificó el sitio original ni `Metodologia.md`.
- **Resultado:** cambio guardado en GitHub y comprobado estáticamente en el código. No se ejecutaron compilación, lint ni pruebas visuales en navegador.


## 2026-10-15 — Migrar la página del Planetario Janaxpacha Huasi a React

### 2026-10-15 20:05:00 -03:00
- **Archivos afectados:** `src/pages/second-level/PlanetarioPage.jsx` (nuevo); `src/components/second-level/planetario/PlanetarioHero.jsx`, `PlanetarioContent.jsx`, `PlanetarioGallery.jsx` y `PlanetarioInfoCard.jsx` (nuevos); `src/App.jsx`; `Registro.md`.
- **Cambio concreto:** se implementó la primera página secundaria migrada, con hero, etiquetas y metadatos, descripción y características, información de acceso y equipamiento, galería de cuatro imágenes locales con visor ampliado, ficha de información lateral y botones de contacto/mapa. Se reutilizan el encabezado, pie de página y estilos de página existentes. La ruta `/lugares/planetario-janaxpacha-huasi` ahora muestra la página React en lugar del marcador provisional.
- **Motivo:** iniciar la migración de páginas secundarias usando componentes pequeños y reutilizables, siguiendo la estructura acordada.
- **Autorización:** autorización explícita del usuario el 2026-10-15 para crear esta primera implementación con la estructura propuesta.
- **Alcance:** solo se modificó `aconquija-react/`; el HTML original `html/segundo_nivel/noches_estrelladas.html` y sus recursos no se modificaron. Se usaron imágenes ya existentes en `imagenes/planetario/` y `imagenes/fondo_prueba.png`; no se generaron ni descargaron imágenes.
- **Verificación:** revisión estática de los archivos creados, imports, ruta y existencia de las imágenes en el repositorio. No se ejecutaron `npm run build`, lint ni pruebas en navegador, por lo que la compilación y el comportamiento visual/funcional quedan pendientes de prueba local.


### 2026-10-15 20:06:09 -03:00 — Ajustes de accesibilidad de la galería del Planetario
- **Archivos afectados:** `src/components/second-level/planetario/PlanetarioGallery.jsx` y `Registro.md`.
- **Cambio concreto:** se normalizó el estilo del botón que abre cada foto para evitar bordes nativos no deseados y se dejaron los controles de teclado del visor gestionados dentro del efecto, manteniendo Escape para cerrar y flechas para cambiar de imagen.
- **Motivo:** conservar la presentación de la galería original y mejorar el manejo del visor con teclado.
- **Autorización:** ajuste estrictamente necesario dentro de la implementación de la página del Planetario autorizada por el usuario el 2026-10-15.
- **Resultado:** cambios guardados en GitHub y revisados estáticamente; no se ejecutaron build, lint ni pruebas en navegador.


## 2026-10-15 — Corregir el fondo de navegación al desplazarse en páginas secundarias

### 2026-10-15 20:09:38 -03:00
- **Archivos afectados:** `src/components/layout/Header.jsx`, `src/styles/layout.css` y `Registro.md`.
- **Cambio concreto:** se reutilizó la clase CSS existente `scrolled` añadiendo al encabezado un listener de scroll que funciona en todas las rutas, incluido el Planetario. Al superar los 60 px de desplazamiento aplica la clase y al volver arriba la retira. También se ajustó el fondo de esa clase a pizarra oscura `rgba(28, 34, 44, .95)`, basado en `#1c222c`.
- **Motivo:** el encabezado de la página del Planetario no tenía el efecto de cambio de fondo porque la lógica de scroll estaba dentro de `HomePage.jsx`.
- **Autorización:** petición directa del usuario el 2026-10-15.
- **Alcance:** se modificó únicamente el comportamiento compartido del encabezado y el color de su estado desplazado; no se modificó el sitio HTML original ni el contenido de la página.
- **Resultado:** cambios guardados en GitHub y revisados estáticamente. No se ejecutaron build, lint ni pruebas visuales en navegador.


## 2026-10-15 — Ajustar el hero del Planetario y la navegación compartida

### 2026-10-15 20:17:10 -03:00
- **Archivos afectados:** `src/components/second-level/planetario/PlanetarioHero.jsx`, `src/components/layout/Header.jsx`, `src/styles/layout.css` y `Registro.md`.
- **Cambio concreto:** se eliminó la ruta de navegación «Inicio › Explorar › Turismo Astronómico» del hero del Planetario. Se reordenó el encabezado para mostrar el título, las etiquetas «Astroturismo», «Observación de estrellas» y «Noches despejadas», y debajo los metadatos de duración, público, ubicación y cantidad mínima de personas. En el encabezado compartido, los enlaces a las secciones ahora conservan el ancla en Inicio y desde páginas secundarias navegan a Inicio y desplazan hasta la sección correspondiente; se agregó desplazamiento con margen para que el encabezado fijo no tape el destino. Se ajustó el selector de subrayado para contemplar enlaces con hash dentro de una ruta.
- **Motivo:** simplificar la presentación de la página del Planetario y corregir los botones de navegación que antes apuntaban a anclas inexistentes en páginas secundarias.
- **Autorización:** petición directa del usuario el 2026-10-15.
- **Alcance:** cambios limitados a `aconquija-react/`; no se modificó el sitio HTML original ni `Metodologia.md`.
- **Resultado:** cambios guardados en GitHub y revisados estáticamente. No se ejecutaron build, lint ni pruebas de navegador.


### 2026-10-15 20:26:10 -03:00 — Retirar los metadatos del hero del Planetario
- **Archivos afectados:** `src/components/second-level/planetario/PlanetarioHero.jsx` y `Registro.md`.
- **Cambio concreto:** se eliminaron del hero los cuatro datos «Menos de 30 min», «Apto para todo público», «Aconquija, Catamarca» y «Desde 1 persona», junto con sus iconos y la función auxiliar que los dibujaba. Se conservaron el título y las tres etiquetas.
- **Motivo:** el usuario aclaró que esos datos también debían borrarse de la presentación del Planetario.
- **Autorización:** petición directa del usuario el 2026-10-15.
- **Resultado:** cambio guardado en GitHub y revisado estáticamente; no se ejecutaron build, lint ni pruebas de navegador.


### 2026-10-15 20:32:52 -03:00 — Bajar un poco las etiquetas del hero del Planetario
- **Archivos afectados:** `src/components/second-level/planetario/PlanetarioHero.jsx`, `src/styles/page-hero.css` y `Registro.md`.
- **Cambio concreto:** se agregó la clase específica `planetario-hero` a la sección del Planetario y se añadió `margin-top: 10px` a sus etiquetas, separándolas un poco del título sin alterar las etiquetas de otras páginas.
- **Motivo:** bajar ligeramente las etiquetas «Astroturismo», «Observación de estrellas» y «Noches despejadas».
- **Autorización:** petición directa del usuario el 2026-10-15.
- **Resultado:** cambios guardados en GitHub y revisados estáticamente; no se ejecutaron build, lint ni pruebas de navegador.


### 2026-10-15 23:48:45 -03:00 — Modernizar la galería del Planetario Janaxpacha Huasi
- **Archivos afectados:** `src/components/second-level/planetario/PlanetarioGallery.jsx`, `src/components/second-level/planetario/AccordionGallery.jsx` (nuevo), `src/components/second-level/planetario/AccordionGallery.css` (nuevo) y `Registro.md`.
- **Cambio concreto:** se reemplazó la cuadrícula con visor ampliado por una galería de cuatro paneles expandibles animados con GSAP. Se conservaron las cuatro imágenes locales y sus descripciones, se añadieron etiquetas vinculadas al Planetario, se aplicó el acento dorado arena sobre el tono pizarra y se adaptó la disposición a pantallas pequeñas. Se incluyeron controles de teclado y respeto por la preferencia de movimiento reducido.
- **Motivo:** modernizar la galería del Planetario Janaxpacha Huasi usando el componente y los estilos compartidos por el usuario.
- **Autorización:** petición directa del usuario el 2026-10-15; el usuario confirmó que actualizó GitHub con las bibliotecas requeridas.
- **Resultado:** cambios guardados en GitHub y revisados estáticamente. Se confirmó que `gsap` figura en `package.json` y `package-lock.json`. No se ejecutaron compilación, lint ni pruebas visuales en navegador.


## 2026-10-16 — Retirar el bloque «Cuándo ir» de la ficha del Planetario

### 2026-10-16 00:15:19 -03:00
- **Archivos afectados:** `src/components/second-level/planetario/PlanetarioInfoCard.jsx`, `src/styles/pages.css` y `Registro.md`.
- **Cambio concreto:** se quitaron el rótulo «Cuándo ir», las etiquetas «Verano», «Otoño», «Invierno» y «Primavera», y el texto «Mejor en noches despejadas de verano» de la parte superior de la ficha lateral del Planetario. En su lugar se conserva un espacio vacío de 112 px con el fondo pizarra oscura (`var(--night)`), antes de las filas informativas.
- **Motivo:** el usuario pidió eliminar ese bloque de texto y mantener la zona vacía con el color de pizarra oscura.
- **Autorización:** petición directa del usuario el 2026-10-16.
- **Resultado:** cambios guardados en GitHub y revisados estáticamente. No se ejecutaron compilación, lint ni pruebas visuales en navegador.


### 2026-10-16 00:18:13 -03:00 — Reducir el espacio oscuro y quitar el precio de la ficha del Planetario
- **Archivos afectados:** `src/components/second-level/planetario/PlanetarioInfoCard.jsx`, `src/styles/pages.css` y `Registro.md`.
- **Cambio concreto:** se redujo de 112 px a 84 px la altura mínima del espacio vacío color pizarra oscura en la cabecera de la ficha. También se eliminó por completo la fila «Precio — Consultá disponibilidad», incluido su icono.
- **Motivo:** el usuario pidió achicar un poco el espacio vacío y quitar la información de precio porque no corresponde allí.
- **Autorización:** petición directa del usuario el 2026-10-16.
- **Resultado:** cambios guardados en GitHub y revisados estáticamente. No se ejecutaron compilación, lint ni pruebas visuales en navegador.


### 2026-10-16 00:24:49 -03:00 — Bajar el título y las etiquetas del hero del Planetario
- **Archivos afectados:** `src/styles/page-hero.css` y `Registro.md`.
- **Cambio concreto:** se añadió una regla exclusiva para `.planetario-hero .lugar-hero-content` que reduce el espacio inferior de 48 px a 30 px en el hero del Planetario. Esto baja aproximadamente 18 px el conjunto «Planetario Janaxpacha Huasi» y sus etiquetas, sin cambiar los otros heroes. Se conserva el margen superior de 10 px entre el título y las etiquetas.
- **Motivo:** el usuario pidió bajar un poquito el título y las etiquetas para que se vean mejor las personas en la imagen.
- **Autorización:** petición directa del usuario el 2026-10-16.
- **Resultado:** cambio guardado en GitHub y revisado estáticamente; no se ejecutaron build, lint ni pruebas visuales en navegador.


### 2026-10-16 00:30:44 -03:00 — Quitar el espacio vacío de la ficha del Planetario
- **Archivos afectados:** `src/components/second-level/planetario/PlanetarioInfoCard.jsx`, `src/styles/pages.css` y `Registro.md`.
- **Cambio concreto:** se eliminó el contenedor vacío oscuro de la parte superior de la ficha lateral y la regla CSS que le reservaba 84 px. Las filas informativas comienzan ahora directamente en la parte superior de la ficha.
- **Motivo:** petición del usuario de borrar el espacio sin contenido que se había dejado anteriormente.
- **Autorización:** petición directa del usuario el 2026-10-16.
- **Resultado:** cambios guardados en GitHub y revisados estáticamente; no se ejecutaron build, lint ni pruebas visuales en navegador.

### 2026-10-16 00:38:13 -03:00 — Quitar título y descripción de la galería del Planetario
- **Archivos afectados:** `src/components/second-level/planetario/PlanetarioGallery.jsx` y `Registro.md`.
- **Cambio concreto:** se eliminó el encabezado «El cielo en imágenes» y el texto descriptivo «Fotografías ilustrativas del cielo nocturno y el entorno de la Sierra de Narváez, donde se ubica el Planetario Janaxpacha Huasi.» Se conservaron la etiqueta «Galería» y los cuatro paneles con sus imágenes.
- **Motivo:** el usuario pidió retirar esos dos textos de la sección de galería.
- **Autorización:** petición directa del usuario el 2026-10-16.
- **Resultado:** cambios guardados en GitHub y revisados estáticamente. No se ejecutaron compilación, lint ni pruebas visuales en navegador.

### 2026-10-16 01:04:41 -03:00 — Enlazar «Cómo llegar» con la ruta desde la Sala de Turismo
- **Archivos afectados:** `src/components/second-level/planetario/PlanetarioInfoCard.jsx` y `Registro.md`.
- **Cambio concreto:** se reemplazó el enlace genérico de Google Maps por una URL de indicaciones en automóvil con origen en la oficina de Información Turística de Aconquija (coordenadas publicadas para RP 48, El Alamito) y destino en el Planetario Janaxpacha Huasi, Sierra de Narváez. El botón mantiene su texto y estilo.
- **Motivo:** el usuario pidió que «Cómo llegar» indique cómo ir desde la Sala de Turismo hasta el Planetario.
- **Autorización:** petición directa del usuario el 2026-10-16.
- **Resultado:** enlace actualizado en GitHub y revisado estáticamente. No se abrió la ruta en Google Maps ni se ejecutaron build, lint o pruebas visuales; conviene comprobar que Google Maps resuelva el destino y el camino local correctamente.

### 2026-10-16 01:39:36 -03:00 — Abrir la página del Planetario desde arriba
- **Archivos afectados:** `src/pages/second-level/PlanetarioPage.jsx` y `Registro.md`.
- **Cambio concreto:** se agregó un efecto de React que desplaza la ventana al inicio (`window.scrollTo(0, 0)`) cuando se monta la página del Planetario. Así, al entrar desde otra sección, la página comienza en la parte superior en vez de conservar la posición de desplazamiento anterior.
- **Motivo:** el usuario pidió que al entrar al Planetario la página aparezca desde arriba, no a mitad de página.
- **Autorización:** petición directa del usuario el 2026-10-16.
- **Resultado:** cambio guardado en GitHub y revisado estáticamente. No se ejecutaron build, lint ni pruebas visuales en navegador.

### 2026-10-16 01:59:40 -03:00 — Agregar el título «Acerca de» a la ficha del Planetario
- **Archivos afectados:** `src/components/second-level/planetario/PlanetarioInfoCard.jsx` y `Registro.md`.
- **Cambio concreto:** se agregó una cabecera color pizarra en la parte superior de la ficha informativa, con el título «Acerca de», reutilizando los estilos existentes de `.info-card-header`. Las filas de información y los botones se mantienen sin cambios.
- **Motivo:** el usuario pidió poner el título «Acerca de» en la barra que quedó al quitar el espacio vacío de la ficha.
- **Autorización:** petición directa del usuario el 2026-10-16.
- **Resultado:** cambio guardado en GitHub y revisado estáticamente. No se ejecutaron build, lint ni pruebas visuales en navegador.

### 2026-10-16 02:11:00 -03:00 — Quitar la animación de desplazamiento al entrar al Planetario
- **Archivos afectados:** `src/pages/second-level/PlanetarioPage.jsx` y `Registro.md`.
- **Cambio concreto:** se cambió el desplazamiento de entrada a `window.scrollTo({ top: 0, left: 0, behavior: 'instant' })`, para que la página vaya directamente al inicio sin animar la subida aunque el sitio tenga desplazamiento suave global.
- **Motivo:** el usuario pidió que el Planetario se cargue arriba directamente, sin la animación de subir.
- **Autorización:** petición directa del usuario el 2026-10-16.
- **Resultado:** cambio guardado en GitHub y revisado estáticamente. No se ejecutaron build, lint ni pruebas visuales en navegador.

### 2026-10-16 02:37:25 -03:00 — Ajustar el encuadre de la imagen principal en teléfonos
- **Archivos afectados:** `src/styles/responsive.css` y `Registro.md`.
- **Cambio concreto:** se añadió una regla exclusiva para pantallas de hasta 600 px que ajusta la posición de fondo del hero principal a `43% 65%`, desplazando ligeramente el paisaje hacia la derecha para intentar dejar el árbol más centrado. El encuadre de escritorio y el resto de la página no se modifican.
- **Motivo:** el usuario pidió mover un poco hacia la derecha la imagen principal en teléfonos para centrar el árbol.
- **Autorización:** petición directa del usuario el 2026-10-16.
- **Resultado:** cambio guardado en GitHub y revisado estáticamente. No se ejecutaron build, lint ni pruebas visuales en un teléfono o emulador.

### 2026-10-16 02:39:50 -03:00 — Corregir la dirección del encuadre del hero en teléfonos
- **Archivos afectados:** `src/styles/responsive.css` y `Registro.md`.
- **Cambio concreto:** se cambió la posición horizontal del fondo del hero móvil de `43%` a `57%` (manteniendo el eje vertical en `65%`) para desplazar el contenido visible de la imagen hacia la derecha. El ajuste solo aplica a pantallas de hasta 600 px.
- **Motivo:** el usuario aclaró que el árbol debía desplazarse hacia la derecha, no hacia la izquierda.
- **Autorización:** corrección solicitada directamente por el usuario el 2026-10-16.
- **Resultado:** cambio guardado en GitHub y revisado estáticamente; no se ejecutaron pruebas visuales en teléfono o emulador.


### 2026-10-16 03:31:54 -03:00 — Migrar Pucará de Aconquija a React

- **Archivos afectados:** `src/App.jsx`; `src/pages/second-level/PucaraPage.jsx`; `src/components/second-level/pucara/PucaraHero.jsx`, `PucaraContent.jsx`, `PucaraGallery.jsx`, `PucaraGallery.css` y `PucaraInfoCard.jsx`; `Metodologia.md` y `Registro.md`.
- **Cambio concreto:** se reemplazó el destino provisional de `/lugares/pucara-de-aconquija` por una página React modular. Se reutilizan `Header`, `Footer` y los estilos comunes de las páginas de lugares. Se trasladaron el hero, las etiquetas y metadatos, la descripción histórica, las seis características, el acceso, el equipamiento recomendado, la ficha lateral, los enlaces de ubicación/contacto, la acción de WhatsApp y los controles para compartir.
- **Galería:** se incorporaron las cuatro fotografías originales disponibles en `imagenes/ruinas_del_pucara/`, con ampliación en lightbox, navegación anterior/siguiente, cierre por Escape y clic fuera de la imagen. Se añadieron estilos para que los controles de galería conserven el diseño y tengan foco visible.
- **Rutas y recursos:** la ruta React aprobada se conecta a `PucaraPage` y se excluye de las rutas provisionales. Las imágenes se importan desde sus ubicaciones existentes; no se movieron ni se reemplazaron archivos originales.
- **Contenido global:** los datos generales de contacto se unificaron con los de la página principal conforme al criterio de la metodología. Se conservaron el enlace específico al mapa del Paraje Pucará y el enlace de WhatsApp de la página original.
- **Motivo:** petición directa del usuario de revisar la estructura React y migrar la siguiente página HTML de segundo nivel: Pucará de Aconquija.
- **Autorización:** petición directa del usuario el 2026-10-16.
- **Límites respetados:** no se modificó `html/segundo_nivel/pucara_aconquija.html`, ni se alteró el sitio original fuera de `aconquija-react/`.
- **Resultado:** archivos creados y ruta conectada en GitHub; revisión estática realizada. No se ejecutaron `npm run lint`, `npm run build` ni pruebas en navegador, por lo que esas verificaciones quedan pendientes.


### 2026-10-16 03:32:44 -03:00 — Corregir el trazo SVG del icono de contacto de Pucará

- **Archivo afectado:** `src/components/second-level/pucara/PucaraInfoCard.jsx` y `Registro.md`.
- **Cambio concreto:** se corrigió el comando de arco del SVG del icono telefónico para que use el indicador de barrido previsto.
- **Motivo:** ajuste detectado durante la revisión estática de la nueva ficha informativa.
- **Autorización:** corrección estrictamente necesaria dentro de la migración solicitada por el usuario el 2026-10-16.
- **Resultado:** cambio guardado y revisado estáticamente; no se ejecutaron pruebas visuales ni compilación.


### 2026-10-16 03:44:07 -03:00 — Ajustar hero, ficha y galería de Pucará

- **Archivos afectados:** `src/components/second-level/pucara/PucaraHero.jsx`, `PucaraInfoCard.jsx`, `PucaraGallery.jsx`, `src/styles/page-hero.css` y `Registro.md`.
- **Hero principal:** se eliminó la ruta de navegación «Inicio › Explorar › Sitio Arqueológico» y los cuatro metadatos «Medio día (4 a 6 h)», «Dificultad media-alta», «Aconquija, Catamarca» e «Ingreso registrado». Las etiquetas «Patrimonio Mundial UNESCO», «Arqueología Inca» y «Monumento Histórico Nacional» ahora quedan debajo del título «Pucará de Aconquija». Se ajustó el espacio inferior del hero y el margen superior de las etiquetas para bajar un poco el conjunto.
- **Ficha lateral:** se cambió el rótulo «Cuándo ir» por «Acerca de», manteniendo el resto de la ficha.
- **Galería:** se quitó el título «El sitio en imágenes», conservando la etiqueta «Galería», las cuatro imágenes y la interacción de ampliación.
- **Estilos:** se añadieron reglas limitadas a `.pucara-hero` en `page-hero.css`, reutilizando el mismo ajuste de posición del contenido que tiene el hero del Planetario. No se cambió el estilo de otras páginas.
- **Motivo y autorización:** petición directa del usuario el 2026-10-16, siguiendo los ajustes que se hicieron previamente en la página del Planetario.
- **Resultado:** cambios guardados en GitHub y revisados estáticamente. No se ejecutaron build, lint ni pruebas visuales en navegador.


### 2026-10-16 03:59:15 -03:00 — Simplificar el encabezado de la ficha de Pucará
- **Archivos afectados:** `src/components/second-level/pucara/PucaraInfoCard.jsx` y `Registro.md`.
- **Cambio concreto:** se eliminaron las etiquetas «Otoño», «Invierno» y «Primavera», el texto «Evitar días de lluvia» y la fila «Precio — Consultas disponibles». El encabezado ahora muestra «Acerca de» en blanco y con mayor tamaño; también se redujo ligeramente el relleno vertical de la cabecera para evitar espacio vacío innecesario.
- **Motivo:** petición directa del usuario para limpiar la ficha, destacar el título y reducir el espacio que quedara tras quitar esos elementos.
- **Autorización:** petición directa del usuario el 2026-10-16.
- **Resultado:** cambios guardados en GitHub y revisados estáticamente. No se ejecutaron `npm run lint`, `npm run build` ni pruebas en navegador.


### 2026-10-16 04:10:10 -03:00 — Quitar compartir y reutilizar la galería acordeón en Pucará
- **Archivos afectados:** `src/components/second-level/pucara/PucaraInfoCard.jsx`, `src/components/second-level/pucara/PucaraGallery.jsx`, `src/components/second-level/planetario/AccordionGallery.jsx` y `Registro.md`.
- **Cambio concreto:** se eliminó de la ficha de Pucará el bloque completo «Compartir», incluidos los botones «Facebook», «WhatsApp» y «Copiar link». Se reemplazó la galería anterior por el componente `AccordionGallery` que ya usa el Planetario, conservando las cuatro fotografías locales del Pucará y configurando el mismo estilo de paneles expandibles, etiquetas, animación y colores. El componente compartido ahora acepta una etiqueta accesible configurable para que la galería de Pucará no anuncie por error el nombre del Planetario.
- **Motivo:** petición directa del usuario para quitar los controles de compartir y usar en Pucará la misma galería implementada previamente en el Planetario.
- **Autorización:** petición directa del usuario el 2026-10-16.
- **Resultado:** cambios guardados en GitHub y revisados estáticamente. No se ejecutaron `npm run lint`, `npm run build` ni pruebas visuales en navegador.


### 2026-10-16 04:24:14 -03:00 — Restaurar el botón «Cómo llegar» en la ficha de Pucará
- **Archivos afectados:** `src/components/second-level/pucara/PucaraInfoCard.jsx` y `Registro.md`.
- **Cambio concreto:** se volvió a añadir debajo de «Reservar por WhatsApp» el botón «Cómo llegar», con icono de mapa y un enlace a Google Maps Directions. La ruta solicita indicaciones en automóvil desde la Sala de Turismo de Aconquija hasta el Paraje Pucará.
- **Motivo:** el usuario indicó que faltaba el botón que permite iniciar la ruta desde la Sala de Turismo.
- **Autorización:** petición directa del usuario el 2026-10-16.
- **Resultado:** cambio guardado en GitHub y revisado estáticamente; no se ejecutaron build, lint ni pruebas de navegador. Google Maps determinará la ruta disponible y podría no representar todos los caminos de tierra o senderos locales.


### 2026-10-16 04:33:00 -03:00 — Igualar el botón «Cómo llegar» de Pucará al del Planetario
- **Archivos afectados:** `src/components/second-level/pucara/PucaraInfoCard.jsx` y `Registro.md`.
- **Cambio concreto:** el botón «Cómo llegar» de Pucará ahora utiliza la misma clase CSS `.btn-directions`, el mismo icono SVG, el mismo tamaño y los mismos estilos de interacción que el botón del Planetario. Se conserva el enlace de Google Maps desde la Sala de Turismo hasta el Paraje Pucará; no se modificó el botón de WhatsApp.
- **Motivo:** el usuario pidió que ambos botones «Cómo llegar» tengan un diseño idéntico.
- **Autorización:** petición directa del usuario el 2026-10-16.
- **Resultado:** cambios guardados en GitHub y revisados estáticamente. No se ejecutaron `npm run lint`, `npm run build` ni pruebas visuales en navegador.

### 2026-10-16 19:00:00 -03:00 — Evitar la animación de subida al entrar a Inicio
- **Archivos afectados:** `src/pages/HomePage.jsx` y `Registro.md`.
- **Cambio concreto:** el efecto de inicialización de la página principal ahora se ejecuta con `useLayoutEffect` y, si la URL no apunta a una sección mediante un fragmento (`#...`), coloca la ventana directamente arriba con `window.scrollTo({ top: 0, left: 0, behavior: 'instant' })`. Se conserva el desplazamiento a secciones cuando la URL incluye un fragmento.
- **Motivo:** corregir el salto/desplazamiento animado desde una posición intermedia hasta arriba al entrar a la página de inicio, evitando que se muestre la posición anterior antes de pintar la página.
- **Autorización:** petición directa del usuario el 2026-10-16.
- **Resultado:** cambio guardado en GitHub y revisado estáticamente. No se ejecutaron build, lint ni pruebas visuales en navegador.

### 2026-10-16 05:03:30 -03:00 — Restablecer instantáneamente el scroll al entrar a cualquier página
- **Archivos afectados:** `src/App.jsx` y `Registro.md`.
- **Cambio concreto:** se añadió el componente global `ScrollToTop`, conectado al `pathname` de React Router, para llevar la ventana a `(0, 0)` al cargar la aplicación y cada vez que se navega a otra ruta. Durante esa operación se desactiva temporalmente el desplazamiento suave CSS, y se configura `history.scrollRestoration = 'manual'` para evitar que el navegador recupere la posición anterior.
- **Motivo:** el intento anterior solo cubría la página de inicio y no evitaba de forma global que otras rutas conservaran o animaran la posición de scroll. El usuario pidió que cualquier página se abra desde el principio para no perjudicar la experiencia.
- **Autorización:** petición directa del usuario el 2026-10-16.
- **Resultado:** cambio guardado en GitHub y revisado estáticamente. No se ejecutaron `npm run build`, `npm run lint` ni pruebas de navegador.



### 2026-10-16 05:09:00 -03:00 — Corregir la restauración y centralizar el desplazamiento inicial
- **Archivos afectados:** `src/main.jsx`, `src/App.jsx`, `src/pages/HomePage.jsx`, `src/pages/second-level/PlanetarioPage.jsx`, `src/pages/second-level/PucaraPage.jsx`, `src/index.css`, `src/styles/global.css` y `Registro.md`.
- **Causa encontrada:** la restauración manual del navegador se activaba desde un efecto de React, después de que el documento ya podía haber comenzado a restaurar la posición anterior. Además, había tres reinicios de scroll repartidos entre Inicio, Planetario y Pucará, y el desplazamiento suave estaba declarado globalmente en dos hojas CSS.
- **Cambio concreto:** se configura `history.scrollRestoration = 'manual'` en `main.jsx` antes de montar React; se deja el reinicio de posición de ruta centralizado en `ScrollToTop` de `App.jsx`; se quitan los reinicios duplicados de las páginas; y se elimina el scroll suave global de ambas hojas CSS. Los enlaces de sección conservan su desplazamiento suave explícito desde `Header.jsx`.
- **Motivo:** evitar que el navegador restaure una posición anterior antes de que el enrutador pueda corregirla y eliminar comportamientos de scroll duplicados que podían competir entre sí.
- **Autorización:** petición directa del usuario el 2026-10-16 para revisar el código y corregir el problema persistente.
- **Resultado:** cambios guardados en GitHub y revisados estáticamente. No se ejecutaron `npm run lint`, `npm run build` ni pruebas reales en navegador.


### 2026-10-16 09:56:00 -03:00 — Mantener el scroll al recargar y subir solo al cambiar de ruta
- **Archivos afectados:** `src/main.jsx`, `src/App.jsx` y `Registro.md`.
- **Causa encontrada:** el componente global `ScrollToTop` se ejecutaba también en el montaje inicial, por lo que forzaba la parte superior incluso al recargar una página donde el usuario estaba leyendo. Además, `main.jsx` había configurado `history.scrollRestoration = 'manual'`, impidiendo que el navegador restaurara la posición al recargar.
- **Cambio concreto:** se eliminó la configuración de restauración manual del navegador. `ScrollToTop` ahora recuerda la ruta inicial y no modifica el scroll en el primer montaje; solo llama a `window.scrollTo(0, 0)` cuando cambia el `pathname` después de navegar a otra ruta.
- **Comportamiento esperado:** al entrar a otra página mediante la navegación, comienza arriba; al recargar la misma página, el navegador conserva la posición en la que se recargó.
- **Motivo y autorización:** petición directa del usuario el 2026-10-16 para que la navegación comience arriba, pero la recarga mantenga la posición actual.
- **Resultado:** cambios guardados en GitHub y revisados estáticamente. No se ejecutaron `npm run lint`, `npm run build` ni pruebas reales en navegador.

### 2026-10-16 10:08:48 -03:00 — Quitar el botón de reserva por WhatsApp de las fichas del Planetario y Pucará
- **Archivos afectados:** `src/components/second-level/planetario/PlanetarioInfoCard.jsx`, `src/components/second-level/pucara/PucaraInfoCard.jsx` y `Registro.md`.
- **Cambio concreto:** se eliminó únicamente el botón «Reservar por WhatsApp» de la ficha lateral del Planetario Janaxpacha Huasi y de la ficha lateral de las Ruinas del Pucará. Se conservaron los datos de contacto y el botón «Cómo llegar» en ambas fichas.
- **Motivo:** el usuario pidió quitar ese botón de la tarjeta ubicada a la derecha en ambas páginas.
- **Autorización:** petición directa del usuario el 2026-10-16.
- **Resultado:** cambios guardados en GitHub y revisados estáticamente. No se ejecutaron `npm run lint`, `npm run build` ni pruebas visuales en navegador.


### 2026-10-16 10:40:16 -03:00 — Migrar Cultiva Tradición a React
- **Archivos afectados:** `src/pages/second-level/CultivaTradicionPage.jsx`; `src/components/second-level/cultiva-tradicion/CultivaTradicionHero.jsx`; `src/components/second-level/cultiva-tradicion/CultivaTradicionGrid.jsx`; `src/components/second-level/cultiva-tradicion/CultivaTradicion.css`; `src/App.jsx`; `Metodologia.md`; `Registro.md`.
- **Cambio concreto:** se migró la página `html/segundo_nivel/cultiva_tradicion.html` a la ruta aprobada `/circuitos/cultiva-tradicion`. Se reutilizan el encabezado, el pie de página y el reproductor flotante globales. Se trasladaron el hero, breadcrumb, grilla con las 12 tarjetas, metadatos y CTA de WhatsApp. Las cinco imágenes locales disponibles se importan desde sus rutas reales. Las otras siete tarjetas mantienen sus espacios de imagen reservados, sin referencias externas ni atributos `src` vacíos; las tarjetas sin ruta aprobada se renderizan como elementos visuales sin enlace activo. Las tres tarjetas con destinos del mapa aprobado enlazan a sus rutas existentes. La sección CTA conserva el espacio visual mediante un fondo oscuro, sin asumir que `caballo.webp` sea idéntico a la referencia antigua `caballo.PNG`.
- **Motivo:** petición directa del usuario del 2026-10-16, con la decisión explícita de mantener las tarjetas sin ruta como visuales no interactivas y dejar vacíos los espacios de imágenes externas.
- **Autorización:** petición directa del usuario del 2026-10-16, siguiendo el plan de archivos presentado y los criterios de `Metodologia.md`.
- **Resultado:** archivos guardados en GitHub y revisados estáticamente. No se ejecutaron `npm run lint`, `npm run build` ni pruebas de navegador; la validación funcional y visual queda pendiente.

### 2026-10-16 12:08:01 -03:00 — Migrar Aconquija Respira Verde a React
- **Archivos afectados:** `src/pages/second-level/RespiraVerdePage.jsx`; `src/components/second-level/respira-verde/RespiraVerdeHero.jsx`; `src/components/second-level/respira-verde/RespiraVerdeGrid.jsx`; `src/components/second-level/respira-verde/RespiraVerde.css`; `src/App.jsx`; `Metodologia.md`; `Registro.md`.
- **Cambio concreto:** se creó la página React para `/circuitos/respira-verde`, con hero, breadcrumb, ocho tarjetas y sección de consulta por WhatsApp. Se reutilizan el encabezado, pie de página, reproductor global y contenedor común. La ruta se conectó en `App.jsx` y se excluyó de las rutas que muestran la pantalla provisional.
- **Contenido y navegación:** se conservaron el orden, textos, categorías y metadatos de las ocho tarjetas, incluida la segunda tarjeta duplicada de Bosque de Alisos y el título vacío de Senderismo. Túneles, ambas tarjetas de Bosque, Río Potrero y Yunca Suma enlazan a rutas ya incluidas en el mapa aprobado. Cabalgatas, La Cruz y Senderismo permanecen sin enlace activo.
- **Imágenes:** se usan recursos locales confirmados para el hero y las tarjetas de bosque, los Túneles y Cabalgatas; las tarjetas sin una correspondencia de imagen confirmada mantienen un espacio visual reservado. El CTA usa `imagenes/caballo.webp`, referenciada por el HTML original. No se usan imágenes externas ni `src=""`.
- **Motivo:** migración de la página secundaria aprobada por el usuario, respetando el plan acordado y sin modificar el sitio HTML original.
- **Autorización:** aprobación explícita del usuario el 2026-10-16 para el plan de migración de Respira Verde.
- **Resultado:** archivos guardados en GitHub y revisión estática de imports, rutas y estructura realizada. No se ejecutaron `npm run lint`, `npm run build` ni pruebas visuales en navegador; la validación funcional y visual queda pendiente.

### 2026-10-16 20:55:42 -03:00 — Migrar Túneles del Río Potrero a React

- **Archivos afectados:** `src/pages/third-level/TunelesRioPotreroPage.jsx`; `src/components/third-level/tuneles-rio-potrero/TunelesRioPotreroHero.jsx`; `TunelesRioPotreroContent.jsx`; `TunelesRioPotreroGallery.jsx`; `TunelesRioPotreroInfoCard.jsx`; `TunelesRioPotrero.css`; `src/App.jsx`; `Metodologia.md`; `Registro.md`.
- **Cambio concreto:** se migró la página de Túneles del Río Potrero a la ruta `/lugares/tuneles-del-rio-potrero`, reemplazando su pantalla provisional. La página se divide en hero, contenido descriptivo y características, galería, ficha informativa y composición de página; reutiliza el encabezado, pie de página, reproductor global y estilos compartidos de las páginas de lugares.
- **Contenido y navegación:** se conservaron los textos, etiquetas, metadatos, recomendaciones estacionales, datos informativos y enlaces a mapas del HTML original. El contacto de la ficha se alineó con los datos globales presentes en el pie de página React.
- **Imágenes:** el hero mantiene un fondo visual reservado porque no se confirmó que la imagen usada en la tarjeta de Respira Verde sea la misma que la referencia del HTML antiguo. Los cuatro espacios de galería se mantienen reservados, ya que el HTML original tenía referencias vacías. No se añadieron imágenes externas, inventadas ni elementos con `src=""`.
- **Nota de contenido pendiente:** el origen contiene duraciones contradictorias: «30 a 1,20 horas» en el hero, «40 a 1,20 horas» en una característica y «3 a 4 horas (ida y vuelta)» en la ficha. Se preservaron sin corregir para no alterar el contenido sin indicación del usuario.
- **Motivo:** migración de la página de tercer nivel conforme a la estructura propuesta y aprobada por el usuario.
- **Autorización:** autorización explícita del usuario el 2026-10-16 para continuar con la migración de Túneles del Río Potrero.
- **Resultado:** archivos guardados en GitHub y revisión estática de imports, componentes y conexión de ruta realizada. No se ejecutaron `npm run lint`, `npm run build` ni pruebas visuales en navegador; esas comprobaciones quedan pendientes.

### 2026-10-16 21:15:38 -03:00 — Migrar Bosque de Alisos a React

- **Archivos afectados:** `src/pages/third-level/BosqueDeAlisosPage.jsx`; `src/components/third-level/bosque-de-alisos/BosqueDeAlisosHero.jsx`; `BosqueDeAlisosContent.jsx`; `BosqueDeAlisosGallery.jsx`; `BosqueDeAlisosInfoCard.jsx`; `BosqueDeAlisos.css`; `src/App.jsx`; `Metodologia.md`; `Registro.md`.
- **Cambio concreto:** se creó la página React de Bosque de Alisos y se conectó la ruta `/lugares/bosque-de-alisos`, reemplazando la pantalla provisional de ese destino. La página separa hero, contenido y características, galería, ficha informativa y composición de página.
- **Reutilización:** se conservan el encabezado, pie de página, reproductor global y estilos compartidos de las páginas de lugares.
- **Contenido y navegación:** se migraron la descripción, seis características, instrucciones de acceso, recomendaciones de equipamiento, metadatos, temporadas sugeridas y ubicación en Yunka Suma. El botón de mapa apunta a la búsqueda de Yunka Suma en Aconquija.
- **Imágenes:** se reutilizan los archivos locales `bosque_de_alisos_2.webp` y `bosque.webp`, referenciados por el HTML fuente. Los otros dos espacios de la galería permanecen reservados porque el HTML tenía `src=""`; no se añadieron imágenes externas ni datos de contacto de ejemplo.
- **Motivo:** petición directa del usuario del 2026-10-16 para continuar con la migración del siguiente HTML de tercer nivel, Bosque de Alisos.
- **Autorización:** petición directa del usuario del 2026-10-16.
- **Resultado:** archivos guardados en GitHub y revisión estática de imports, estructura y ruta realizada. No se ejecutaron `npm run lint`, `npm run build` ni pruebas visuales en navegador; esas comprobaciones quedan pendientes.


### 2026-10-16 21:36:00 -03:00 — Migrar Río Potrero a React

- **Archivos afectados:** `src/pages/third-level/RioPotreroPage.jsx`; `src/components/third-level/rio-potrero/RioPotreroHero.jsx`; `RioPotreroContent.jsx`; `RioPotreroGallery.jsx`; `RioPotreroInfoCard.jsx`; `RioPotrero.css`; `src/App.jsx`; `Metodologia.md`; `Registro.md`.
- **Cambio concreto:** se creó la página de Río Potrero con la misma estructura de las páginas de tercer nivel anteriores y se conectó la ruta `/lugares/rio-potrero`, reemplazando la pantalla provisional. Se reutilizan el encabezado, pie de página, reproductor global y estilos compartidos.
- **Contenido y navegación:** se trasladaron la descripción, las seis características, cómo llegar, recomendaciones, metadatos y ficha lateral. Se conserva el enlace de mapa a Río Potrero.
- **Imágenes:** el hero y las cuatro posiciones de la galería quedan reservados porque las referencias del HTML original están vacías y no se confirmó una imagen local específica para esta página. No se generaron imágenes ni se usaron recursos externos o `src=""`.
- **Contactos:** se omitieron el teléfono, correo y enlace de WhatsApp de ejemplo del HTML original para no publicar datos ficticios.
- **Motivo:** petición directa del usuario del 2026-10-16 para continuar la siguiente migración de tercer nivel, Río Potrero, con la misma estructura de las páginas anteriores.
- **Autorización:** petición directa del usuario del 2026-10-16.
- **Resultado:** archivos guardados en GitHub y revisión estática de imports, estructura, referencias de imagen y ruta realizada. No se ejecutaron `npm run lint`, `npm run build` ni pruebas visuales en navegador; esas comprobaciones quedan pendientes.

### 2026-10-16 22:12:37 -03:00 — Migrar Yunka Suma a React

- **Archivos afectados:** `src/pages/third-level/YunkaSumaPage.jsx`; `src/components/third-level/yunka-suma/YunkaSumaHero.jsx`; `YunkaSumaContent.jsx`; `YunkaSumaGallery.jsx`; `YunkaSumaInfoCard.jsx`; `YunkaSuma.css`; `src/App.jsx`; `Metodologia.md`; `Registro.md`.
- **Cambio concreto:** se creó la página React de Yunka Suma con la misma estructura de las páginas de tercer nivel anteriores y se conectó la ruta `/lugares/yunka-suma`, reemplazando la pantalla provisional. Se reutilizan encabezado, pie de página, reproductor global y estilos comunes.
- **Contenido y navegación:** se trasladaron descripción, seis características, cómo llegar, recomendaciones, metadatos, temporadas, duración, acceso y ubicación. Se conserva el enlace de mapa de Yunka Suma.
- **Imágenes:** el hero y las cuatro posiciones de galería permanecen reservados porque el HTML original tiene rutas de imagen vacías y no se encontró un recurso local confirmado para esta página. No se usaron imágenes externas ni `src=""`.
- **Datos de ejemplo:** se omitieron teléfono, correo, WhatsApp y controles de compartir del HTML original, ya que los datos de contacto eran ficticios y la funcionalidad de compartir no forma parte de la estructura reutilizada en las páginas migradas.
- **Motivo:** petición directa del usuario del 2026-10-16 para continuar la migración de tercer nivel con `yunka_suma.html), siguiendo la misma estructura de las páginas anteriores.
- **Autorización:** petición directa del usuario del 2026-10-16.
- **Resultado:** archivos guardados en GitHub y revisión estática de imports, estructura, referencias de imagen y ruta realizada. No se ejecutaron `npm run lint`, `npm run build` ni pruebas visuales en navegador; quedan pendientes.


### 2026-10-16 22:35:29 -03:00 — Migrar Festival Provincial del Bandoneón a React
- **Archivos afectados:** `src/pages/third-level/FiestaBandoneonPage.jsx`; `src/components/third-level/fiesta-bandoneon/FiestaBandoneonHero.jsx`; `FiestaBandoneonContent.jsx`; `FiestaBandoneonGallery.jsx`; `FiestaBandoneonInfoCard.jsx`; `FiestaBandoneon.css`; `src/App.jsx`; `Metodologia.md`; `Registro.md`.
- **Cambio concreto:** se creó la página React del Festival Provincial del Bandoneón y se conectó `/eventos/fiesta-del-bandoneon`, reemplazando la pantalla provisional. Se separó la página en hero, contenido, galería, ficha informativa y estilos propios, reutilizando componentes globales existentes.
- **Contenido y navegación:** se migraron la descripción, seis características, instrucciones de acceso, recomendaciones, metadatos y ficha lateral. Se conserva el enlace de mapa que figuraba en el HTML original.
- **Imágenes:** el hero y las cuatro posiciones de galería quedan reservados porque las referencias originales están vacías; no se usaron imágenes externas ni `src=""`.
- **Contactos y compartir:** se omitieron los datos de contacto de ejemplo y los controles de compartir del HTML original.
- **Motivo:** petición directa del usuario del 2026-10-16 para continuar la migración de `fiesta_bandoneon.html`.
- **Autorización:** petición directa del usuario del 2026-10-16.
- **Resultado:** archivos guardados en GitHub y revisión estática de la estructura, los imports, la ruta y las referencias de imagen realizada. El HTML original mantiene el mismo SHA que antes de la migración. No se ejecutaron `npm run lint`, `npm run build` ni pruebas visuales en navegador; quedan pendientes.


### 2026-10-16 22:45:03 -03:00 — Migrar Desfile Cívico Escolar a React
- **Archivos afectados:** `src/pages/third-level/DesfileCivicoPage.jsx`; `src/components/third-level/desfile-civico/DesfileCivicoHero.jsx`; `DesfileCivicoContent.jsx`; `DesfileCivicoGallery.jsx`; `DesfileCivicoInfoCard.jsx`; `DesfileCivico.css`; `src/App.jsx`; `Metodologia.md`; `Registro.md`.
- **Cambio concreto:** se creó la página React del Desfile Cívico Escolar y se conectó `/eventos/desfile-civico-escolar`, reemplazando la página provisional.
- **Fuente:** la petición nombraba `Festival_civico.html`, pero el archivo existente y coincidente con la ruta aprobada es `html/tercer_nivel/desfile_civico.html`; se usó esa fuente y no se modificó el HTML original.
- **Contenido:** se migraron la descripción, seis características, instrucciones de acceso, recomendaciones, metadatos, fecha orientativa y ficha informativa.
- **Imágenes:** el hero usa `imagenes/Cultiva_tradiciones/desfiles.webp` como correspondencia local de `desfiles.jpg`; la galería usa `imagenes/montaña.png` y `imagenes/rio.jpeg`. Se reservaron las posiciones sin recurso local confirmado. No se añadieron imágenes externas ni `src=""`.
- **Contacto y redes:** se omitieron datos de contacto de ejemplo y enlaces sociales del HTML secundario.
- **Motivo:** petición directa del usuario del 2026-10-16 para continuar con la siguiente página cívica.
- **Autorización:** petición directa del usuario del 2026-10-16.
- **Resultado:** página y ruta guardadas en GitHub; revisión estática de ruta, imports, recursos locales y referencias de imagen realizada. El HTML original no se modificó. No se ejecutaron `npm run lint`, `npm run build` ni pruebas visuales en navegador; quedan pendientes.


### 2026-10-16 22:54:30 -03:00 — Migrar Festival Mayor de Aconquija a React
- **Archivos afectados:** `src/pages/third-level/FestivalMayorPage.jsx`; `src/components/third-level/festival-mayor/FestivalMayorHero.jsx`; `FestivalMayorContent.jsx`; `FestivalMayorGallery.jsx`; `FestivalMayorInfoCard.jsx`; `FestivalMayor.css`; `src/App.jsx`; `Metodologia.md`; `Registro.md`.
- **Cambio concreto:** se creó la página React del Festival Mayor de Aconquija y se conectó la ruta `/eventos/festival-mayor`, reemplazando la pantalla provisional.
- **Contenido y navegación:** se migraron la descripción, seis características, cómo llegar, recomendaciones, metadatos y ficha lateral, manteniendo el enlace a Google Maps del HTML original.
- **Imágenes:** el hero y los cuatro espacios de galería se mantienen reservados porque las referencias del HTML original están vacías. No se añadieron imágenes externas ni elementos `img` con `src=""`.
- **Contactos y compartir:** se omitieron los datos de contacto de ejemplo y los controles de compartir del HTML original.
- **Motivo:** petición directa del usuario del 2026-10-16 para continuar con la migración de `festival_mayor_Aconquija`.
- **Autorización:** petición directa del usuario del 2026-10-16.
- **Resultado:** archivos guardados en GitHub y revisión estática de estructura, imports, ruta y referencias de imagen realizada. El archivo HTML original conserva el SHA `40b042e6a15151b2f36200f98cfc3c7a7fbf7af6`; no se modificó. No se ejecutaron `npm run lint`, `npm run build` ni pruebas visuales en navegador; quedan pendientes.


### 2026-10-16 23:04:54 -03:00 — Migrar Balneario Municipal Buena Vista a React
- **Archivos afectados:** `src/pages/third-level/BalnearioBuenaVistaPage.jsx`; `src/components/third-level/balneario-buena-vista/BalnearioBuenaVistaHero.jsx`; `BalnearioBuenaVistaContent.jsx`; `BalnearioBuenaVistaGallery.jsx`; `BalnearioBuenaVistaInfoCard.jsx`; `BalnearioBuenaVista.css`; `src/App.jsx`; `Metodologia.md`; `Registro.md`.
- **Cambio concreto:** se creó la página React del Balneario Municipal Buena Vista y se conectó la ruta `/lugares/balneario-municipal-buena-vista`, reemplazando la pantalla provisional.
- **Contenido:** se migraron descripción, seis características, instrucciones de acceso, recomendaciones de equipamiento, metadatos, temporadas y ficha lateral.
- **Imágenes:** se usaron los recursos locales existentes `imagenes/balneario_municipal/balneario.webp`, `balneario_2.webp`, `balneario_4.webp` y `balneario_5.webp`; no se descargaron imágenes ni se agregaron referencias `src=""`.
- **Contacto:** se omitieron teléfono, correo y WhatsApp de ejemplo del HTML secundario; se conservó el enlace de Google Maps propio del balneario.
- **Motivo:** petición directa del usuario del 2026-10-16 para migrar `balneario_buena_vista.html`.
- **Autorización:** petición directa del usuario del 2026-10-16.
- **Resultado:** archivos guardados en GitHub y revisión estática de imports, estructura, ruta y recursos locales realizada. El HTML original conserva el SHA `207bf6e0b5db6c8d0173e995d4dd84d028e8be37`; no se modificó. No se ejecutaron `npm run lint`, `npm run build` ni pruebas visuales en navegador; quedan pendientes.


### 2026-10-16 23:25:15 -03:00 — Retomar integración de Cristo Redentor a React

- **Archivos afectados previstos:** `src/App.jsx`; `Metodologia.md`; `Registro.md`. La página y sus componentes ya existen en `src/pages/third-level/CristoRedentorPage.jsx` y `src/components/third-level/cristo-redentor/`.
- **Cambio concreto:** registrar el intento de completar la conexión de la página a `/lugares/cristo-redentor`, excluir esa ruta de la pantalla provisional y documentar el estado de migración.
- **Motivo:** completar la petición directa del usuario de continuar con `cristo_redentor.html`.
- **Autorización:** petición directa del usuario del 2026-10-15/16 para migrar esa página; el usuario pidió expresamente volver a intentarlo el 2026-10-16.
- **Resultado:** inicio de la reanudación. La página y sus componentes están guardados, pero la ruta y la documentación todavía deben actualizarse; no considerar la migración completa hasta confirmar esos cambios.


### 2026-10-16 23:25:15 -03:00 — Completar integración de Cristo Redentor

- **Archivos afectados:** `src/App.jsx`; `Metodologia.md`; `Registro.md`.
- **Cambio concreto:** se importó `CristoRedentorPage`, se declaró la ruta `/lugares/cristo-redentor`, se conectó al componente de página y se excluyó del filtro de páginas provisionales. Se documentó el estado de la migración en `Metodologia.md`.
- **Motivo:** completar la migración solicitada de `html/tercer_nivel/cristo_redentor.html`.
- **Autorización:** petición directa del usuario y solicitud explícita de reintentar la integración el 2026-10-16.
- **Resultado:** cambios guardados en GitHub. La revisión estática confirma que la importación y la ruta están presentes y que la ruta queda fuera de la pantalla provisional. No se ejecutaron `npm run lint`, `npm run build` ni pruebas visuales en navegador. El HTML original no se modificó.


### 2026-10-17 02:30:00 -03:00 — Inicio de migración de Virgen del Valle a React

- **Archivos previstos:** `src/pages/third-level/VirgenDelVallePage.jsx`; `src/components/third-level/virgen-del-valle/VirgenDelValleHero.jsx`; `VirgenDelValleContent.jsx`; `VirgenDelValleGallery.jsx`; `VirgenDelValleInfoCard.jsx`; `VirgenDelValle.css`; `src/App.jsx`; `Metodologia.md`; `Registro.md`.
- **Cambio previsto:** migrar el contenido de `html/tercer_nivel/virgen_del_valle.html` a componentes React, reutilizar la estructura global existente, conectar `/lugares/virgen-del-valle` y excluirla de las rutas provisionales.
- **Recursos:** se confirmaron los archivos locales `imagenes/virgen_del_valle/virgen_del_valle.webp` y `imagenes/virgen_del_valle/virgen_del_valle_2.webp`. Las posiciones de galería sin imagen confirmada se reservarán; no se usará la imagen externa ilustrativa.
- **Motivo y autorización:** petición directa del usuario del 2026-10-17 para continuar con la última página pendiente de migración.
- **Resultado inicial:** inicio registrado; implementación en curso.


### 2026-10-17 02:32:04 -03:00 — Completar migración de Virgen del Valle a React

- **Archivos afectados:** `src/pages/third-level/VirgenDelVallePage.jsx`; `src/components/third-level/virgen-del-valle/VirgenDelValleHero.jsx`; `VirgenDelValleContent.jsx`; `VirgenDelValleGallery.jsx`; `VirgenDelValleInfoCard.jsx`; `VirgenDelValle.css`; `src/App.jsx`; `Metodologia.md`; `Registro.md`.
- **Cambio concreto:** se migró la página a componentes React, se conectó la ruta `/lugares/virgen-del-valle` y se excluyó del marcador provisional. Se documentó la migración en `Metodologia.md`.
- **Contenido e imágenes:** se conservaron los textos principales, características, recomendaciones y ubicación del HTML fuente. Se usaron las dos imágenes locales existentes; se omitió la imagen externa ilustrativa y se mantuvieron fuera de la galería los espacios sin recursos confirmados. Se omitieron los datos de contacto ficticios del HTML.
- **Motivo:** completar la última página de tercer nivel pendiente dentro de la migración aprobada.
- **Autorización:** petición directa del usuario del 2026-10-17 para continuar con `virgen_del_valle.html`.
- **Resultado:** archivos guardados en GitHub. La inspección estática confirma importación, ruta y exclusión del marcador provisional. No se ejecutaron `npm run lint`, `npm run build` ni pruebas visuales en navegador. El HTML original no se modificó.


### 2026-10-17 02:44:37 -03:00 — Inicio de migración de recursos y preparación para Netlify

- **Archivos/rutas previstas:** imágenes del repositorio raíz `imagenes/` hacia `aconquija-react/imagenes/`; referencias de recursos en `aconquija-react/src/`; configuración de despliegue en `aconquija-react/`; documentación `Metodologia.md` y `Registro.md`; limpieza posterior de `html/`, `css/`, `js/` y `index.html` raíz.
- **Cambio previsto:** inventariar los recursos; trasladar las imágenes conservando sus nombres y contenido; actualizar referencias de React; preparar la configuración necesaria para Netlify; ejecutar las comprobaciones disponibles; eliminar los archivos antiguos solo después de verificar que React ya no dependa de ellos.
- **Motivo:** preparar el proyecto React para publicarlo en Netlify, a petición directa del usuario del 2026-10-17.
- **Autorización:** petición directa del usuario para migrar todas las imágenes, limpiar lo que no sea de React y preparar el proyecto para publicación en Netlify.
- **Resultado inicial:** inventario estructural realizado. Todavía no se han movido ni borrado archivos; la implementación continúa.


### 2026-10-17 02:47:03 -03:00 — Migración de imágenes y limpieza para Netlify

- **Archivos afectados:** todos los recursos gráficos de `imagenes/` se trasladan a `aconquija-react/imagenes/` conservando sus nombres y subcarpetas; referencias de imágenes en `src/data/homeData.js`, componentes de inicio, encabezado, pie de página y componentes de las páginas secundarias; `aconquija-react/README.md`; `aconquija-react/public/_redirects`; `netlify.toml`; `Metodologia.md`; `Registro.md`. Se eliminan los archivos originales de `html/`, `css/`, `js/` y el `index.html` raíz.
- **Cambio concreto:** se actualizan las rutas relativas de las imágenes para la nueva ubicación dentro de React; se prepara la configuración de compilación y publicación en Netlify; se configura el fallback de React Router; se reemplaza el README genérico por instrucciones del proyecto; se retiran los archivos del sitio HTML/CSS/JS anterior tras actualizar las referencias.
- **Motivo:** dejar el repositorio centrado en la aplicación React y preparar su publicación en Netlify.
- **Autorización:** petición directa del usuario del 2026-10-17 para migrar todas las imágenes, eliminar lo que no sea de React y preparar el proyecto para Netlify.
- **Resultado:** cambios guardados en GitHub en el commit `360c44fd4b92f7a62086bcb8bc3e429b16fd183f`. La revisión estática del árbol final confirma que se trasladaron 78 archivos gráficos a `aconquija-react/imagenes/`, no quedan imágenes bajo la carpeta raíz `imagenes/` y se eliminaron los archivos de `html/`, `css/`, `js/` y el `index.html` raíz. Se confirmó la configuración `netlify.toml`, la regla `public/_redirects` y las referencias actualizadas en los componentes inspeccionados. `npm run lint`, `npm run build` y las pruebas visuales no se ejecutaron: el entorno de trabajo no pudo conectarse a GitHub para obtener una copia local del repositorio.


### 2026-10-17 03:28:58 -03:00 — Limpieza de recursos de plantilla y rutas provisionales

- **Archivos afectados:** se elimina `src/assets/react.svg`, `src/assets/vite.svg`, los siete archivos `.gitkeep` de carpetas que ya contienen código, `src/data/routes.js` y `src/pages/PagePlaceholder.jsx`; se actualiza `src/App.jsx`.
- **Cambio concreto:** se retiran los dos SVG de ejemplo de la plantilla y los marcadores vacíos; se quita del enrutador el mecanismo de páginas provisionales porque las 14 rutas secundarias del mapa aprobado ya están declaradas explícitamente en `App.jsx`; se eliminan el listado auxiliar y el componente que solo servía a ese mecanismo.
- **Motivo:** reducir archivos vacíos/de plantilla y evitar mantener dos listas de rutas con un filtro de exclusión redundante.
- **Autorización:** autorización expresa del usuario del 2026-10-17 para realizar la limpieza propuesta, eliminando únicamente elementos confirmados como innecesarios.
- **Resultado:** cambios aplicados en GitHub. Se verificará estáticamente el árbol y las referencias después del commit. No se ejecutaron `npm run lint`, `npm run build` ni pruebas visuales; no se declara que la compilación esté validada.


### 2026-10-17 03:29:32 -03:00 — Verificación estructural de la limpieza

- **Archivos afectados:** revisión del árbol de `aconquija-react/`, `src/App.jsx` y `Registro.md`.
- **Qué se verificó:** el árbol de GitHub ya no contiene los siete `.gitkeep`, los SVG de ejemplo `react.svg` y `vite.svg`, `src/data/routes.js` ni `src/pages/PagePlaceholder.jsx`. `App.jsx` ya no importa ni menciona el sistema de rutas provisionales. Se mantienen las páginas React de segundo y tercer nivel.
- **Pendientes conservados deliberadamente:** `src/assets/hero.png`, `public/favicon.svg`, `public/icons.svg` y las imágenes duplicadas por contenido no se eliminaron porque no se pudo confirmar con seguridad que ninguna referencia activa las necesite. Los estilos globales superpuestos tampoco se modificaron sin una comprobación de comportamiento.
- **Motivo:** documentar el resultado real y no eliminar recursos cuya función no está confirmada.
- **Autorización:** autorización expresa del usuario del 2026-10-17 para la limpieza propuesta.
- **Resultado:** revisión estática de estructura y referencias en `App.jsx` completada. No se ejecutaron `npm run lint`, `npm run build` ni pruebas visuales; no se confirma todavía la compilación.



### 2026-10-17 04:30:33 -03:00 — Corrección de ruta de imagen en Respira Verde

- **Archivo afectado:** `aconquija-react/src/pages/second-level/RespiraVerdePage.jsx`.
- **Cambio concreto:** se corrigió la importación de `caballo.webp` de `../../../../imagenes/caballo.webp` a `../../../imagenes/caballo.webp`. La imagen existe en `aconquija-react/imagenes/caballo.webp`.
- **Motivo:** Netlify informó que Vite no podía resolver la ruta anterior durante la compilación.
- **Autorización:** permiso explícito del usuario en la conversación del 2026-10-17.
- **Resultado:** corrección aplicada en GitHub en el commit `7f47b49ce02cba8079cc116c87088ea3198b3716`. La compilación todavía no se ha vuelto a ejecutar; queda pendiente el nuevo despliegue de Netlify.

### 2026-10-17 23:45:50 -03:00 — Unificar las galerías de React
- **Archivos afectados:** `src/components/ui/AccordionGallery.jsx (nuevo)`; `src/components/ui/AccordionGallery.css (nuevo)`; `src/components/second-level/planetario/AccordionGallery.jsx (convertido en reexportación de compatibilidad)`; `src/components/second-level/planetario/AccordionGallery.css (eliminado por duplicación)`; `src/components/second-level/planetario/PlanetarioGallery.jsx`; `src/components/second-level/pucara/PucaraGallery.jsx`; `src/components/third-level/balneario-buena-vista/BalnearioBuenaVistaGallery.jsx`; `src/components/third-level/bosque-de-alisos/BosqueDeAlisosGallery.jsx`; `src/components/third-level/cristo-redentor/CristoRedentorGallery.jsx`; `src/components/third-level/desfile-civico/DesfileCivicoGallery.jsx`; `src/components/third-level/festival-mayor/FestivalMayorGallery.jsx`; `src/components/third-level/fiesta-bandoneon/FiestaBandoneonGallery.jsx`; `src/components/third-level/rio-potrero/RioPotreroGallery.jsx`; `src/components/third-level/tuneles-rio-potrero/TunelesRioPotreroGallery.jsx`; `src/components/third-level/virgen-del-valle/VirgenDelValleGallery.jsx`; `src/components/third-level/yunka-suma/YunkaSumaGallery.jsx`; `Metodologia.md`; `Registro.md`.
- **Cambio concreto:** se centralizó el componente acordeón reutilizable y sus estilos dentro de `src/components/ui/`; las doce galerías de lugares y eventos pasaron a usarlo, manteniendo sus arrays de imágenes, importaciones locales, etiquetas y textos asociados. Se conservaron los espacios sin fotografía y se hizo condicional el renderizado de imágenes para no producir elementos con `src` vacío. El archivo anterior del componente quedó como reexportación de compatibilidad y se retiró su CSS duplicado.
- **Motivo:** unificar el diseño y el comportamiento de las galerías respetando la estructura modular de React y reutilizando componentes.
- **Autorización:** petición directa del usuario del 2026-10-17 para cambiar todas las galerías al modelo de Ruinas del Pucará, conservar las imágenes y respetar la estructura del proyecto.
- **Resultado:** cambios de código y documentación guardados en la rama `main`. Se revisaron estáticamente los doce componentes y sus importaciones; no se ejecutaron compilación, lint ni pruebas de navegador.

### 2026-10-18 00:01:37 -03:00 — Unificar las tarjetas laterales
- **Archivos afectados:** `src/components/third-level/balneario-buena-vista/BalnearioBuenaVistaInfoCard.jsx`; `src/components/third-level/bosque-de-alisos/BosqueDeAlisosInfoCard.jsx`; `src/components/third-level/cristo-redentor/CristoRedentorInfoCard.jsx`; `src/components/third-level/desfile-civico/DesfileCivicoInfoCard.jsx`; `src/components/third-level/festival-mayor/FestivalMayorInfoCard.jsx`; `src/components/third-level/fiesta-bandoneon/FiestaBandoneonInfoCard.jsx`; `src/components/third-level/rio-potrero/RioPotreroInfoCard.jsx`; `src/components/third-level/tuneles-rio-potrero/TunelesRioPotreroInfoCard.jsx`; `src/components/third-level/virgen-del-valle/VirgenDelValleInfoCard.jsx`; `src/components/third-level/yunka-suma/YunkaSumaInfoCard.jsx`; `src/styles/pages.css`; `Metodologia.md`; `Registro.md`.
- **Cambio concreto:** las diez tarjetas que tenían «Cuándo ir» en la cabecera ahora usan una cabecera «Acerca de» y muestran temporada, etiquetas y recomendación como una fila informativa. Se mantuvieron los datos originales, la duración, dificultad/entrada, ubicación, precio, contactos, enlaces y botones de dirección. Se ajustaron los estilos compartidos en `src/styles/pages.css`. Las tarjetas del Pucará y del Planetario conservan sus datos y estructura.
- **Motivo:** unificar las tarjetas laterales de las páginas con el modelo de Ruinas del Pucará sin perder información específica.
- **Autorización:** petición directa del usuario del 2026-10-18 para modificar las tarjetas laterales de las mismas páginas cuyas galerías se habían actualizado.
- **Resultado:** cambios guardados en `main`. Se revisaron estáticamente los diez componentes modificados y se confirmó la presencia de las filas de temporada, enlaces de mapa y botones «Cómo llegar». No se ejecutaron compilación, lint ni pruebas de navegador.


### 2026-10-18 23:00:00 -03:00 — Retirar «Cuándo ir» y «Precio» de las tarjetas laterales
- **Archivos afectados:** las diez fichas informativas de Balneario Buena Vista, Bosque de Alisos, Cristo Redentor, Desfile Cívico, Festival Mayor, Fiesta del Bandoneón, Río Potrero, Túneles del Río Potrero, Virgen del Valle y Yunka Suma; además de `src/styles/pages.css`.
- **Cambio concreto:** se eliminaron por completo las filas «Cuándo ir» y «Precio» de esas diez tarjetas. Se conservaron las demás filas, los datos específicos de cada lugar o evento, los enlaces al mapa y los botones «Cómo llegar». Se retiraron los estilos que solo servían a la fila estacional.
- **Autorización:** solicitud directa del usuario del 2026-10-18.
- **Verificación:** inspección estática de las diez fichas; no se ejecutaron compilación, lint ni pruebas visuales en navegador.


### 2026-10-19 18:40:41 -03:00 — Simplificar encabezado de Respira Verde

- **Archivos afectados:** `src/components/second-level/respira-verde/RespiraVerdeHero.jsx`; `src/components/second-level/respira-verde/RespiraVerde.css`; `Registro.md`.
- **Cambio concreto:** se eliminó la ruta de navegación «Inicio / Respira Verde» y la etiqueta «Aconquija · Catamarca» del encabezado de Respira Verde. También se retiraron las reglas CSS que solo se utilizaban para esa ruta de navegación. El título y el texto descriptivo se conservaron.
- **Motivo:** simplificar la cabecera según la solicitud del usuario.
- **Autorización:** solicitud directa del usuario del 2026-10-19.
- **Resultado:** cambios guardados en la rama `main`. No se ejecutaron compilación, lint ni pruebas visuales. La solicitud también mencionaba achicar un elemento, pero el mensaje quedó incompleto y ese ajuste queda pendiente de aclaración.


### 2026-10-19 18:43:07 -03:00 — Ajustar título, descripción y sombreado de Respira Verde

- **Archivos afectados:** `src/components/second-level/respira-verde/RespiraVerde.css`; `Registro.md`.
- **Cambio concreto:** se redujo ligeramente el tamaño del título «Respira Verde» y del texto descriptivo, con ajustes específicos para pantallas móviles. Se quitó el sombreado oscuro fuerte de la parte inferior de la imagen de portada; queda únicamente una capa muy sutil en la parte superior para no oscurecer la zona inferior.
- **Motivo:** ajustar la escala del encabezado y mostrar la fotografía de fondo sin el degradado oscuro inferior, según la solicitud del usuario.
- **Autorización:** solicitud directa del usuario del 2026-10-19.
- **Resultado:** cambios guardados en la rama `main`. No se ejecutaron compilación, lint ni pruebas visuales en navegador.


### 2026-10-19 18:44:00 -03:00 — Cambiar imagen de portada de Respira Verde

- **Archivos afectados:** `src/components/second-level/respira-verde/RespiraVerdeHero.jsx`; `Registro.md`.
- **Cambio concreto:** se reemplazó la imagen de fondo anterior por `imagenes/respira_verde/dondoderespiraverde.jpg`, recurso existente en el repositorio.
- **Motivo:** usar la fotografía indicada por el usuario en la portada de Respira Verde.
- **Autorización:** solicitud directa del usuario del 2026-10-19.
- **Resultado:** cambio guardado en la rama `main`. No se ejecutaron compilación ni pruebas visuales.


### 2026-10-19 19:03:00 -03:00 — Ajustar encuadre de portada de Respira Verde

- **Archivos afectados:** `src/components/second-level/respira-verde/RespiraVerde.css`; `Registro.md`.
- **Cambio concreto:** se redujo ligeramente la escala final de la imagen de fondo y se desplazó su encuadre hacia arriba para dar más espacio visible al hongo ubicado en el centro de la fotografía.
- **Motivo:** afinar el encuadre de la portada según la solicitud del usuario.
- **Autorización:** solicitud directa del usuario del 2026-10-19.
- **Resultado:** cambios guardados en la rama `main`. No se ejecutaron compilación ni pruebas visuales en navegador.


### 2026-10-19 19:12:00 -03:00 — Cambiar imagen de la tarjeta de túneles de Respira Verde

- **Archivos afectados:** `src/components/second-level/respira-verde/RespiraVerdeGrid.jsx`; `Registro.md`.
- **Cambio concreto:** se reemplazó únicamente la imagen importada para la tarjeta “Túneles Quebrada de las cañas” por `imagenes/respira_verde/tuneles-por.jpg`, que es el nombre y la extensión presentes en el repositorio.
- **Motivo:** actualizar la fotografía de la tarjeta según la solicitud del usuario.
- **Autorización:** solicitud directa del usuario del 2026-10-19.
- **Resultado:** cambio guardado en la rama `main`. No se ejecutaron compilación ni pruebas visuales en navegador.


### 2026-10-19 19:23:52 -03:00 — Ajustar secuencia de animación del carrusel de lugares

- **Archivos afectados:** `src/components/home/PlacesCarousel.jsx`; `Registro.md`.
- **Cambio concreto inicial:** se intentó aplicar la elevación después de finalizar el desplazamiento.
- **Ajuste posterior solicitado por el usuario:** se sincronizó la selección de la tarjeta central con cada evento de scroll. Así, mientras la tarjeta de la derecha avanza al centro, comienza a elevarse y la que estaba en el centro baja para cederle el lugar. El ajuste automático de centrado conserva el mismo comportamiento.
- **Motivo:** corregir el efecto visual que se percibía trabado al separar por completo las dos animaciones.
- **Autorización:** petición directa del usuario del 2026-10-19 y su indicación posterior para corregir el movimiento.
- **Resultado:** ajuste guardado en GitHub. Se revisó estáticamente el flujo del evento de scroll; no se ejecutaron compilación, lint ni pruebas visuales en navegador.

### 2026-10-19 — Corregir el alcance de la función de animación del carrusel de lugares

- **Archivos afectados:** `src/components/home/PlacesCarousel.jsx`; `Registro.md`.
- **Problema encontrado:** `onScroll` llamaba a `updateCenterCard()`, pero esa función estaba declarada dentro de `useEffect` y no era accesible desde el manejador JSX. Al desplazarse el carrusel, esa llamada podía producir un `ReferenceError`; por eso las tarjetas se movían, pero no se actualizaba la clase `is-center` que activa la elevación y el descenso.
- **Cambio concreto:** se trasladó `updateCenterCard` al alcance del componente, donde puede ser usada tanto por el evento de desplazamiento como por la inicialización y el redimensionamiento. El cálculo sigue usando posiciones de layout para evitar que la elevación altere la selección de la tarjeta central.
- **Motivo y autorización:** corrección directa solicitada por el usuario el 2026-10-19.
- **Resultado:** cambio guardado en GitHub. La causa se identificó mediante inspección estática del alcance de la función; no se ejecutaron compilación ni prueba visual en navegador.

### 2026-10-19 — Mostrar y compactar el botón flotante de música

- **Archivos afectados:** `src/components/ui/SpotifyFloatingPlayer.jsx`; `src/styles/spotify-player.css`; `Registro.md`.
- **Cambio concreto:** al entrar en una ruta, el botón «Escuchar música» aparece inicialmente completo. A los cinco segundos se estrecha suavemente hasta quedar circular, conservando el icono de reproducción. Si el reproductor está abierto, no se fuerza el cierre ni se compacta el botón hasta que vuelva a cerrarse.
- **Motivo y autorización:** solicitud directa del usuario del 2026-10-19.
- **Resultado:** cambios guardados en GitHub. No se ejecutaron compilación, lint ni pruebas visuales en navegador.


### 2026-10-19 19:50:00 -03:00 — Sincronizar la entrada cinematográfica del botón de música

- **Archivos afectados:** `src/components/ui/SpotifyFloatingPlayer.jsx`; `src/styles/spotify-player.css`; `Registro.md`.
- **Cambio concreto:** en la portada, el botón flotante entra con una animación retrasada de 2,15 segundos para aparecer junto al indicador «Deslizá para explorar». Los cinco segundos para compactarlo comienzan únicamente cuando termina esa animación de entrada. En las páginas internas, donde no hay esa entrada cinematográfica, el conteo comienza cuando aparece el botón completo. Se conserva el comportamiento de movimiento reducido.
- **Motivo y autorización:** precisión solicitada directamente por el usuario el 2026-10-19.
- **Resultado:** cambio del componente guardado en GitHub. La regla CSS ya tenía el retraso de 2,15 segundos y no necesitó cambios. No se ejecutaron compilación, lint ni pruebas visuales en navegador.


### 2026-10-19 19:55:00 -03:00 — Unificar animación de apertura y cierre del reproductor Spotify

- **Archivos afectados:** `src/styles/spotify-player.css`; `Registro.md`.
- **Cambio concreto:** el panel del reproductor ahora conserva la misma posición base, tanto abierto como cerrado, y anima la opacidad y la escala/desplazamiento con la misma duración y curva en ambas direcciones. Se fija el origen de transformación en la esquina inferior derecha para que el cierre replique la sensación de despliegue y no pegue un salto al cambiar de posición.
- **Motivo y autorización:** solicitud directa del usuario del 2026-10-19 para reutilizar al cerrar la animación que le gusta al desplegar el reproductor.
- **Resultado:** CSS actualizado en GitHub. No se ejecutaron compilación, lint ni pruebas visuales en navegador.


## 2026-10-19 — Sección histórica de los caminos en Inicio

- **Archivos afectados:** `src/components/home/HistoryTimeline.jsx` (nuevo); `src/styles/history-timeline.css` (nuevo); `src/pages/HomePage.jsx`; `src/App.css`; `Registro.md`.
- **Cambio concreto:** se incorporó debajo del hero una sección blanca sobre la historia de los caminos, con borde superior irregular inspirado en las montañas, separador dorado bajo el título, introducción, cronología interactiva con seis hitos y panel de detalle con imagen local. En móvil la cronología se muestra arriba del detalle y la navegación se oculta mientras la sección histórica está visible. Se añadieron animaciones suaves con respeto a la preferencia de movimiento reducido.
- **Motivo:** implementar el diseño conceptual aprobado por el usuario para mostrar la historia territorial de Aconquija en la portada, priorizando la lectura en teléfonos.
- **Autorización:** petición directa del usuario del 2026-10-19.
- **Resultado:** cambios preparados en `feature/historia-caminos-home-v2`; compilación y revisión visual pendientes.
