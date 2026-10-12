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
