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

