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
